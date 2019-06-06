import json

from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from django.db.models import Q
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from appbackend.exceptions import GenericException
from .serializers import *

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class StudentApi(generics.ListAPIView):
    serializer_class = StudentSerializer

    def get_queryset(self):
        students = list(Person.objects.filter(groups__in=[1]).values())
        return students


class StudentDetailApi(generics.RetrieveAPIView):
    serializer_class = StudentSerializer
    queryset = Person.objects.all()


class CourseApi(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class ClassGroupApi(generics.ListCreateAPIView):
    queryset = ClassGroup.objects.all()
    serializer_class = ClassGroupSerializer

    @swagger_auto_schema(request_body=ClassGroupRequest, responses={200: ClassGroupSerializer})
    def post(self, request, *args, **kwargs):
        title = request.data.get("title", "")
        classroom = request.data.get("classroom", "")
        time = request.data.get("time", "")
        semester = Semester.get_semester(request.data.get("semester", ""))
        year = request.data.get("year", "")
        teacher = Person.objects.get(pk=request.data.get("teacher_id", ""))
        course = Course.objects.get(id=request.data.get("course_id", ""))
        print(course)
        if not (title and classroom and time and semester and year and course and teacher):
            return Response(data={
                "message": "Fill all required fields"
            }, status=status.HTTP_400_BAD_REQUEST)
        class_group = ClassGroup.objects.create(
            title=title, classroom=classroom, time=time, year=year,
            semester=semester, course=course, teacher=teacher)
        return Response(data=ClassGroupSerializer(class_group).data,
                        status=status.HTTP_201_CREATED)


class ClassGroupDetailApi(generics.RetrieveAPIView):
    queryset = ClassGroup.objects.all()
    serializer_class = ClassGroupSerializer


class StudentClassGroupsApi(generics.ListAPIView):
    serializer_class = ClassGroupSerializer
    queryset = ClassGroup.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    @swagger_auto_schema(manual_parameters=[openapi.Parameter(
        name="Authorization", in_=openapi.IN_HEADER,
        type=openapi.TYPE_STRING, default="Bearer <token>",
        description="Bearer token acquired on user login")])
    def get(self, request, *args, **kwargs):
        student_id = self.queryset.get(pk=kwargs['pk'])
        print("student_id: {}".format(student_id))
        list_of_class_groups = []
        enrollments = list(Enrollment.objects.filter(student_id=self.kwargs['pk']).all())

        for e in enrollments:
            class_group = ClassGroup.objects.filter(id=e.class_group_id)[:1].get()
            list_of_class_groups.append(class_group)
        return Response(data=ClassGroupSerializer(list_of_class_groups, many=True).data,
                        status=status.HTTP_200_OK)


class RequestTransferApi(generics.ListCreateAPIView):
    class RequestTransferRequest(serializers.Serializer):
        student_id = serializers.IntegerField()
        class_group_id = serializers.IntegerField()
        target_group_id = serializers.IntegerField()

        class Meta:
            fields = '__all__'

    queryset = TransferRequest.objects.all()
    serializer_class = TransferRequestSerializer

    @swagger_auto_schema(request_body=RequestTransferRequest)
    def post(self, request, *args, **kwargs):
        origin_group = ClassGroup.objects.get(pk=request.data.get("class_group_id", ""))
        requester_student = Person.objects.get(Q(pk=request.data.get("student_id", ""))
                                               & Q(groups__in=[Group.objects.get(pk=1)]))
        enrollment = Enrollment.objects.get(Q(class_group=origin_group) & Q(student=requester_student))
        target_group = ClassGroup.objects.get(Q(id=request.data.get("target_group_id", ""))
                                              & Q(course=origin_group.course))

        if Enrollment.objects.filter(Q(class_group=target_group) & Q(student=requester_student)).count() > 0:
            raise GenericException(code=status.HTTP_400_BAD_REQUEST,
                                   detail="'{}' is already enrolled in '{}.'".format(requester_student, target_group))
        transfer_request = TransferRequest.objects.create(
            enrollment=enrollment,
            target_group=target_group,
            status=TransferStatus.PENDING
        )
        return Response(
            data=TransferRequestSerializer(transfer_request).data,
            status=status.HTTP_201_CREATED
        )


class ConfirmTransferRequestApi(generics.UpdateAPIView):
    queryset = TransferRequest.objects.all()
    serializer_class = []

    def patch(self, request, *args, **kwargs):
        transfer_request = self.queryset.get(pk=kwargs["pk"])
        transfer_request.confirm()
        return Response(TransferRequestSerializer(transfer_request).data)

    @swagger_auto_schema(method='put', auto_schema=None)
    @api_view(['PUT'])
    def put(self, request, *args, **kwargs):
        return None


class RejectTransferRequestApi(generics.DestroyAPIView):
    queryset = TransferRequest.objects.all()
    serializer_class = []

    def delete(self, request, *args, **kwargs):
        try:
            transfer_request = TransferRequest.objects.get(pk=kwargs["pk"])
        except TransferRequest.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Transfer Request of requested id does not exist")
        transfer_request.status = TransferStatus.REJECTED
        transfer_request.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CreateAttendancesApi(generics.CreateAPIView):
    queryset = Attendance.objects.all()
    serializer_class = RollCallListSerializer

    def post(self, request, *args, **kwargs):
        lesson = Lesson.objects.filter(pk=kwargs["pk"])[:1].get()
        roll_call = request.data.get("roll_call", "")
        attendances = list()
        for item in roll_call:
            student = Person.objects.get(pk=item.get("student_id"))
            attendance = Attendance.objects.create(
                student=student, lesson=lesson, was_present=item.get("was_present"))
            attendances.append(attendance)
        return Response(data=AttendanceSerializer(attendances, many=True),
                        status=status.HTTP_201_CREATED)


class LoginApi(generics.CreateAPIView):
    class LoginRequest(serializers.Serializer):
        email = serializers.CharField()

        class Meta:
            fields = '__all__'

    permission_classes = []
    serializer_class = LoginRequest

    queryset = Person.objects.all()

    def post(self, request, *args, **kwargs):
        email = request.data.get("email", "")
        try:
            user = Person.objects.get(email=email)
        except Person.DoesNotExist:
            return Response(
                data={"message": "User not valid"},
                status=status.HTTP_401_UNAUTHORIZED)
        if user.groups.filter(pk=1):
            login(request, user)
            serializer = LoginResponseSerializer(data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                ),
                "user_id": user.id})
            serializer.is_valid()
            return Response(data=serializer.data,
                            status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)


class ClassGroupLessonApi(generics.ListCreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = []

    @swagger_auto_schema(responses={200: LessonSerializer})
    def post(self, request, *args, **kwargs):
        class_group = ClassGroup.objects.get(pk=kwargs["pk"])
        lesson = Lesson.objects.create(
            class_group=class_group
        )
        return Response(
            data=LessonSerializer(lesson).data,
            status=status.HTTP_201_CREATED
        )

    def get(self, request, *args, **kwargs):
        try:
            class_group = ClassGroup.objects.get(pk=kwargs['pk'])
        except ClassGroup.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Class group of requested id could not be found")
        lessons = Lesson.objects.filter(class_group=class_group)
        return Response(data=ClassGroupLessonSerializer(lessons, many=True).data,
                        status=status.HTTP_200_OK)


class LoginByPhoneApi(generics.CreateAPIView):
    class LoginByPhoneRequest(serializers.Serializer):
        phone = serializers.CharField()

        class Meta:
            fields = '__all__'

    permission_classes = []
    serializer_class = PersonSerializer

    queryset = Person.objects.all()

    @swagger_auto_schema(request_body=LoginByPhoneRequest)
    def post(self, request, *args, **kwargs):
        phone = request.data.get("phone", "")
        try:
            user = Person.objects.get(email=phone)
        except Person.DoesNotExist:
            return Response(
                data={"message": "User not valid"},
                status=status.HTTP_401_UNAUTHORIZED)
        if user.groups.filter(pk=1):
            login(request, user)
            serializer = LoginResponseSerializer(data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                ),
                "user_id": user.id})
            serializer.is_valid()
            return Response(data=serializer.data,
                            status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)


class AuthenticateCollaboratorApi(generics.CreateAPIView):
    class AuthCollaboratorRequest(serializers.Serializer):
        email = serializers.CharField()
        password = serializers.CharField()

        class Meta:
            fields = '__all__'

    serializer_class = PersonSerializer
    queryset = Person.objects.all()

    @swagger_auto_schema(request_body=AuthCollaboratorRequest)
    def post(self, request, *args, **kwargs):
        email = request.data.get("email", "")
        password = request.data.get("password", "")
        user = authenticate(username=email, password=password)
        if user is None:
            return Response(
                data={"message": "Incorrect password"},
                status=status.HTTP_401_UNAUTHORIZED)
        login(request, user)
        serializer = LoginResponseSerializer(data={
            "token": jwt_encode_handler(
                jwt_payload_handler(user)
            ),
            "user_id": user.id})
        serializer.is_valid()
        return Response(data=serializer.data,
                        status=status.HTTP_200_OK)


class RegisterApi(generics.CreateAPIView):
    class RegisterRequest(serializers.Serializer):
        email = serializers.CharField()
        password = serializers.CharField()
        phone = serializers.CharField()
        first_name = serializers.CharField()
        last_name = serializers.CharField()
        group = serializers.IntegerField()

        class Meta:
            fields = '__all__'

    permission_classes = (permissions.AllowAny,)
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

    @swagger_auto_schema(request_body=RegisterRequest)
    def post(self, request, *args, **kwargs):
        email = request.data.get("email", "")
        password = make_password(request.data.get("password", ""))
        phone = request.data.get("phone", "")
        first_name = request.data.get("first_name", "")
        last_name = request.data.get("last_name", "")
        group = Group.objects.get(pk=request.data.get("group", ""))
        if group is Group.objects.get(pk=1):
            password = make_password('student-default-pass')
        if not email or not password or not first_name or not last_name or not group:
            return Response(
                data={
                    "message": "fill all required fields."
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        new_user = Person.objects.create(
            email=email, password=password, phone=phone, first_name=first_name, last_name=last_name,
            username=email
        )
        new_user.groups.add(group)
        return Response(
            data=PersonSerializer(new_user).data,
            status=status.HTTP_201_CREATED
        )


class RegisterByPhoneApi(generics.CreateAPIView):
    class RegisterByPhoneRequest(serializers.Serializer):
        phone = serializers.CharField()
        password = serializers.CharField()
        first_name = serializers.CharField()
        last_name = serializers.CharField()
        group = serializers.IntegerField()

        class Meta:
            fields = '__all__'

    permission_classes = (permissions.AllowAny,)
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

    @swagger_auto_schema(request_body=RegisterByPhoneRequest)
    def post(self, request, *args, **kwargs):
        password = make_password(request.data.get("password", ""))
        phone = request.data.get("phone", "")
        first_name = request.data.get("first_name", "")
        last_name = request.data.get("last_name", "")
        group = Group.objects.get(pk=request.data.get("group", ""))
        if group is Group.objects.get(pk=1):
            password = make_password('student-default-pass')
        if not phone or not password or not first_name or not last_name or not group:
            return Response(
                data={
                    "message": "fill all required fields."
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        new_user = Person.objects.create(
            password=password, phone=phone, first_name=first_name, last_name=last_name,
            username=phone, email=phone
        )
        new_user.groups.add(group)
        return Response(
            data=PersonSerializer(new_user).data,
            status=status.HTTP_201_CREATED
        )


class StudentEnrollmentsApi(generics.ListCreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentRequestSerializer

    @swagger_auto_schema(responses={200: StudentEnrollmentSerializer})
    def get(self, request, *args, **kwargs):
        try:
            student = Person.objects.filter(pk=self.kwargs['pk'], groups__in=[1])[:1].get()
        except Person.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Student of requested id does not exist")
        student_enrollments = list(Enrollment.objects.filter(student_id=student.id))
        serializer = StudentEnrollmentSerializer(student_enrollments, many=True)
        return Response(data=serializer.data,
                        status=status.HTTP_200_OK)

    @swagger_auto_schema(request_body=EnrollmentRequestSerializer, responses={201: EnrollmentSerializer})
    def post(self, request, *args, **kwargs):
        try:
            student = Person.objects.get(pk=self.kwargs['pk'], groups__in=[1])
        except Person.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Student of requested id does not exist")
        EnrollmentRequestSerializer(data=request.data).is_valid(raise_exception=True)
        class_group = ClassGroup.objects.get(pk=request.data.get("class_group_id", ""))
        enrollment_status = EnrollmentStatus(request.data.get("enrollment_status", ""))
        active = True if enrollment_status is EnrollmentStatus.ACCEPTED else False
        if Enrollment.objects.filter(student=student, class_group=class_group).count() > 0:
            raise GenericException(code=status.HTTP_400_BAD_REQUEST,
                                   detail="'{}' is already enrolled in '{}'".format(student.first_name, class_group))
        enrollment = Enrollment.objects.create(student=student, class_group=class_group,
                                               graduated=False, finalGrade=None, active=active,
                                               status=enrollment_status)
        return Response(data=EnrollmentSerializer(enrollment).data,
                        status=status.HTTP_201_CREATED)


class TransferTargetsApi(generics.ListAPIView):
    queryset = ClassGroup.objects.all()
    serializer_class = ClassGroupSerializer

    def get(self, request, *args, **kwargs):
        try:
            student = Person.objects.get(pk=self.kwargs['pk'], groups__in=[1])
            class_group = ClassGroup.objects.filter(pk=self.kwargs['group_id'])[:1].get()
        except Person.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Student of requested id does not exist")
        except ClassGroup.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Class group of requested id does not exist")
        student_enrollments = list(Enrollment.objects.filter(student=student))
        student_class_group_ids = list()
        for enrollment in student_enrollments:
            student_class_group_ids.append(enrollment.class_group.id)
        targets = list(ClassGroup.objects.filter(Q(course=class_group.course)
                                                 & ~Q(pk=class_group.pk)
                                                 & ~Q(pk__in=student_class_group_ids)))
        return Response(data=ClassGroupSerializer(targets, many=True).data,
                        status=status.HTTP_200_OK)


class StudentAttendancesApi(generics.ListAPIView):
    serializer_class = StudentAttendanceSerializer
    queryset = Attendance.objects.all()

    def get(self, request, *args, **kwargs):
        try:
            student = Person.objects.get(pk=self.kwargs['pk'], groups__in=[1])
            class_group = ClassGroup.objects.filter(pk=self.kwargs['group_id'])[:1].get()
        except Person.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Student of requested id does not exist")
        except ClassGroup.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Class group of requested id does not exist")
        attendances = list(Attendance.objects.filter(student=student, lesson__class_group=class_group))
        return Response(data=StudentAttendanceSerializer(attendances, many=True).data,
                        status=status.HTTP_200_OK)


class CourseStudents(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = StudentSerializer

    def get(self, request, *args, **kwargs):
        if Course.objects.filter(pk=self.kwargs['pk']).count() == 0:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Course of requested id does not exist")
        enrollments = list(Enrollment.objects.filter(class_group__course_id=self.kwargs['pk']))
        students = list()
        for enrollment in enrollments:
            if enrollment.student in students:
                continue
            students.append(enrollment.student)
        return Response(data=StudentSerializer(students, many=True).data,
                        status=status.HTTP_200_OK)


class LessonAttendances(generics.ListAPIView):
    serializer_class = AttendanceSerializer
    queryset = Attendance.objects.all()

    def get(self, request, *args, **kwargs):
        try:
            lesson = Lesson.objects.get(pk=self.kwargs['pk'])
        except Lesson.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Lesson of requested id does not exist")
        attendances = list(Attendance.objects.filter(lesson=lesson))
        return Response(data=LessonAttendanceSerializer(attendances, many=True).data,
                        status=status.HTTP_200_OK)


class ManagedClassGroups(generics.ListAPIView):
    serializer_class = ClassGroupSerializer
    queryset = ClassGroup.objects.all()

    def get(self, request, *args, **kwargs):
        try:
            user = Person.objects.get(pk=self.kwargs['pk'])
        except Person.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="User of requested id does not exist")
        if not user.groups.filter(pk__in=[2, 3]):
            raise GenericException(code=status.HTTP_403_FORBIDDEN,
                                   detail="User does not have the required permissions to perform this action")

        class_groups = list(ClassGroup.objects.filter(Q(teacher=user) | Q(collaborators__in=[user])))
        return Response(data=ClassGroupSerializer(class_groups, many=True).data,
                        status=status.HTTP_200_OK)


class ClassGroupEnrollments(generics.ListAPIView):
    serializer_class = ClassGroupEnrollmentSerializer

    def get_queryset(self):
        try:
            class_group = ClassGroup.objects.get(pk=self.kwargs['pk'])
        except ClassGroup.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="ClassGroup of requested id does not exist")
        return Enrollment.objects.filter(class_group=class_group)


class AvailableClassGroups(generics.ListAPIView):
    serializer_class = ClassGroupSerializer

    def get_queryset(self):
        try:
            student = Person.objects.get(pk=self.kwargs['pk'])
        except Person.DoesNotExist:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Student of requested id does not exist")
        if student.groups.filter(pk=1).count() == 0:
            raise GenericException(code=status.HTTP_400_BAD_REQUEST,
                                   detail="User of given id is not a student")

        enrollments = Enrollment.objects.filter(student=student)
        class_groups = list()
        for enrollment in enrollments:
            if enrollment.class_group.id in class_groups:
                continue
            class_groups.append(enrollment.class_group.id)

        transfer_requests = TransferRequest.objects.filter(Q(enrollment__student=student) & Q(status=TransferStatus.PENDING))
        for request in transfer_requests:
            if request.target_group.id in class_groups:
                continue
            class_groups.append(request.target_group.id)
        available_class_groups = ClassGroup.objects.exclude(pk__in=class_groups)
        return available_class_groups
