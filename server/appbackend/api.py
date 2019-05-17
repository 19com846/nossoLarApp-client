from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from .serializers import *
from .models import ClassGroup, Course, Person

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class StudentApi(generics.ListAPIView):
    serializer_class = StudentSerializer

    def get_queryset(self):
        students = list(Person.objects.filter(groups__name='Students').values())
        return Response(
            data=StudentSerializer(students, many=True).data,
            status=status.HTTP_200_OK)


class StudentDetailApi(generics.RetrieveAPIView):
    serializer_class = StudentSerializer
    queryset = Person.objects.all()


class CourseApi(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class ClassGroupApi(generics.ListAPIView):
    queryset = ClassGroup.objects.all()
    serializer_class = ClassGroupSerializer


class ClassGroupDetailApi(generics.RetrieveAPIView):
    queryset = ClassGroup.objects.all()
    serializer_class = ClassGroupSerializer


class StudentClassGroupsApi(generics.ListAPIView):
    serializer_class = ClassGroupSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        student_id = self.kwargs['pk']
        print("student_id: {}".format(student_id))
        list_of_class_groups = []
        enrollments = list(Enrollment.objects.filter(student_id=self.kwargs['pk']).all())

        for e in enrollments:
            class_group = ClassGroup.objects.filter(id=e.class_group_id)[:1].get()
            list_of_class_groups.append(class_group)
        return list_of_class_groups


class RequestTransferApi(generics.CreateAPIView):
    queryset = TransferRequest.objects.all()
    serializer_class = TransferRequestSerializer

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
    serializer_class = TransferRequestSerializer

    def put(self, request, *args, **kwargs):
        transfer_request = self.queryset.get(pk=kwargs["pk"])
        transfer_request.confirm()
        return Response(TransferRequestSerializer(transfer_request).data)


class CreateLessonApi(generics.CreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    def post(self, request, *args, **kwargs):
        class_group = ClassGroup.objects.filter(pk=kwargs["pk"])[:1].get()
        lesson = Lesson.objects.create(
            class_group=class_group
        )
        return Response(
            data=LessonSerializer(lesson).data,
            status=status.HTTP_201_CREATED
        )


class CreateAttendanceApi(generics.CreateAPIView):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

    def post(self, request, *args, **kwargs):
        lesson = Lesson.objects.filter(pk=kwargs["pk"])[:1].get()
        students = list(Person.objects.filter(pk__in=request.data["student_ids"]).all())
        attendances = list()
        for student in students:
            attendance = Attendance.objects.create(
                lesson=lesson,
                student=student
            )
            attendances.append(attendance)
        return Response(
            data=AttendanceSerializer(attendances, many=True).data,
            status=status.HTTP_201_CREATED
        )


class LoginApi(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    queryset = Person.objects.all()

    def post(self, request, *args, **kwargs):
        email = request.data.get("email", "")
        password = request.data.get("password", "")
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            serializer = TokenSerializer(data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                )})
            serializer.is_valid()
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)


class RegisterApi(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        email = request.data.get("email", "")
        password = make_password(request.data.get("password", ""))
        phone = request.data.get("phone", "")
        first_name = request.data.get("first_name", "")
        last_name = request.data.get("last_name", "")
        group = Group.objects.get(pk=request.data.get("group", ""))
        if not username or not email or not password or not first_name or not last_name or not group:
            return Response(
                data={
                    "message": "fill all required fields."
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        new_user = Person.objects.create(
            email=email, password=password, phone=phone, first_name=first_name, last_name=last_name,
            username=username
        )
        new_user.groups.add(group)
        return Response(
            data=PersonSerializer(new_user).data,
            status=status.HTTP_201_CREATED
        )
