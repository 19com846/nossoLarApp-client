import coreapi
import coreschema
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from rest_framework import generics, status, permissions, schemas
from rest_framework.decorators import renderer_classes, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.schemas import ManualSchema
from rest_framework_jwt.settings import api_settings
from rest_framework_swagger import renderers

from .serializers import *

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


@api_view(['GET'])
@renderer_classes([renderers.OpenAPIRenderer, renderers.SwaggerUIRenderer])
@permission_classes((permissions.AllowAny,))
def schema_view(request):
    generator = schemas.SchemaGenerator(title='NossoLar API')
    return Response(generator.get_schema(request))


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


class CourseApi(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class ClassGroupApi(generics.ListCreateAPIView):
    queryset = ClassGroup.objects.all()
    serializer_class = ClassGroupSerializer

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
    schema = ManualSchema(fields=[coreapi.Field(
        "id",
        required=True,
        description="The class group id for which the lesson will be created",
        location="path",
        schema=coreschema.String()
    )], encoding="application/json")
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    def post(self, request, *args, **kwargs):
        class_group = ClassGroup.objects.get(pk=kwargs["pk"])
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
    schema = ManualSchema(fields=[
        coreapi.Field(
            "email",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "group",
            required=True,
            location="form",
            schema=coreschema.Integer()
        )
    ], encoding='application/json')
    permission_classes = []
    serializer_class = PersonSerializer

    queryset = Person.objects.all()

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


class LoginByPhoneApi(generics.CreateAPIView):
    schema = schema = ManualSchema(fields=[
        coreapi.Field(
            "phone",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "group",
            required=True,
            location="form",
            schema=coreschema.Integer()
        )
    ], encoding='application/json')

    permission_classes = []
    serializer_class = PersonSerializer

    queryset = Person.objects.all()

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
    schema = ManualSchema(fields=[
        coreapi.Field(
            "email",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "password",
            required=True,
            location="form",
            schema=coreschema.String()
        )
    ], encoding='application/json')

    serializer_class = PersonSerializer
    queryset = Person.objects.all()

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
    schema = ManualSchema(fields=[
        coreapi.Field(
            "email",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "password",
            required=False,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "first_name",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "last_name",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "phone",
            required=False,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "group",
            required=True,
            location="form",
            schema=coreschema.Integer()
        )
    ], encoding='application/json')

    permission_classes = (permissions.AllowAny,)
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

    def post(self, request, *args, **kwargs):
        email = request.data.get("email", "")
        password = make_password(request.data.get("password", ""))
        phone = request.data.get("phone", "")
        first_name = request.data.get("first_name", "")
        last_name = request.data.get("last_name", "")
        group = Group.objects.get(pk=request.data.get("group", ""))
        if group is 1:
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
    schema = ManualSchema(fields=[
        coreapi.Field(
            "password",
            required=False,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "first_name",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "last_name",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "phone",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "group",
            required=True,
            location="form",
            schema=coreschema.Integer()
        )
    ], encoding='application/json')
    permission_classes = (permissions.AllowAny,)
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

    def post(self, request, *args, **kwargs):
        password = make_password(request.data.get("password", ""))
        phone = request.data.get("phone", "")
        first_name = request.data.get("first_name", "")
        last_name = request.data.get("last_name", "")
        group = Group.objects.get(pk=request.data.get("group", ""))
        if group is 1:
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
