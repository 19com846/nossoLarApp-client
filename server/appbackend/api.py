from rest_framework import generics, status
from rest_framework.response import Response

from .serializers import *
from .models import ClassGroup, Course, Person


class StudentApi(generics.ListAPIView):
    serializer_class = StudentSerializer

    def get_queryset(self):
        list_of_students = []
        for s in Person.objects.all():
            if s.role == Role.STUDENT:
                list_of_students.append(s)
        return list_of_students


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
