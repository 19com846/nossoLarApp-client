from rest_framework import generics

from .serializers import *
from .models import ClassGroup, Course, Person


class StudentApi(generics.ListAPIView):
    serializer_class = StudentSerializer
    def get_queryset(self):
        list_of_students = []
        for s in Person.objects.all():
            if s.permission == 0:
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
        all_turmas = ClassGroup.objects.all()
        list_of_turmas = []
        for t in all_turmas:
            for e in t.enrollments.all():
                if e.student.id == student_id:
                    print("show")
                    list_of_turmas.append(t)
        return list_of_turmas


class RequestTransferApi(generics.CreateAPIView):
    serializer_class = TransferRequestSerializer


class ConfirmTransferApi(generics.UpdateAPIView):
    serializer_class = TransferRequestSerializer