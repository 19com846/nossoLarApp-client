import json

from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

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


class RequestTransferApi(generics.CreateAPIView):

    class RequestTransferRequest(serializers.Serializer):
        enrollment_id = serializers.IntegerField()
        target_group_id = serializers.IntegerField()

        class Meta:
            fields = '__all__'

    queryset = TransferRequest.objects.all()
    serializer_class = TransferRequestSerializer

    @swagger_auto_schema(request_body=RequestTransferRequest)
    def post(self, request, *args, **kwargs):
        enrollment_from_id = Enrollment.objects.filter(id=request.data["enrollment_id"])[:1].get()
        target_group_from_id = ClassGroup.objects.filter(id=request.data["target_group_id"])[:1].get()
        transfer_request = TransferRequest.objects.create(
            enrollment=enrollment_from_id,
            target_group=target_group_from_id,
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

    permission_classes = []
    serializer_class = PersonSerializer

    queryset = Person.objects.all()

    class LoginRequest(serializers.Serializer):
        email = serializers.CharField()
        group = serializers.IntegerField()

        class Meta:
            fields = '__all__'

    @swagger_auto_schema(request_body=LoginRequest)
    def post(self, request, *args, **kwargs):
        email = request.data.get("email", "")
        group = request.data.get("group", "")
        try:
            user = Person.objects.get(email=email, groups__in=[group])
        except Person.DoesNotExist:
            return Response(
                data={"message": "User not valid"},
                status=status.HTTP_401_UNAUTHORIZED)
        if group is 1:
            login(request, user)
            serializer = TokenSerializer(data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                )})
            serializer.is_valid()
            return Response(data=serializer.data,
                            status=status.HTTP_200_OK)
        return Response(status=status.HTTP_204_NO_CONTENT)


class CreateLessonApi(generics.CreateAPIView):

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


class LoginByPhoneApi(generics.CreateAPIView):

    class LoginByPhoneRequest(serializers.Serializer):
        phone = serializers.CharField()
        group = serializers.IntegerField()

        class Meta:
            fields = '__all__'

    permission_classes = []
    serializer_class = PersonSerializer

    queryset = Person.objects.all()

    @swagger_auto_schema(request_body=LoginByPhoneRequest)
    def post(self, request, *args, **kwargs):
        phone = request.data.get("phone", "")
        group = request.data.get("group", "")
        try:
            user = Person.objects.get(email=phone, groups__in=[group])
        except Person.DoesNotExist:
            return Response(
                data={"message": "User not valid"},
                status=status.HTTP_401_UNAUTHORIZED)
        if group is 1:
            login(request, user)
            serializer = TokenSerializer(data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                )})
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
        serializer = TokenSerializer(data={
            "token": jwt_encode_handler(
                jwt_payload_handler(user)
            )})
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


class StudentAttendancesApi(generics.ListAPIView):
    serializer_class = StudentAttendanceSerializer
    queryset = Attendance.objects.all()

    def get(self, request, *args, **kwargs):
        student = Person.objects.filter(pk=self.kwargs['pk'], groups__in=[1])[:1].get()
        if student is None:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Student of requested id does not exist")
        class_group = ClassGroup.objects.filter(pk=self.kwargs['group_id'])[:1].get()
        if class_group is None:
            raise GenericException(code=status.HTTP_404_NOT_FOUND,
                                   detail="Class group of requested id does not exist")
        attendances = list(Attendance.objects.filter(student=student, lesson__class_group=class_group))
        return Response(data=StudentAttendanceSerializer(attendances, many=True).data,
                        status=status.HTTP_200_OK)
