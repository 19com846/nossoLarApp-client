from rest_framework import generics

from .serializers import TurmaSerializer, CourseSerializer, StudentSerializer
from .models import Turma, Course, Person


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


class TurmaApi(generics.ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer


class TurmaDetailApi(generics.RetrieveAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer


class TurmasDoAlunoApi(generics.ListAPIView):
    serializer_class = TurmaSerializer
    def get_queryset(self):
        student_id = self.kwargs['pk']
        print("student_id: {}".format(student_id))
        all_turmas = Turma.objects.all()
        list_of_turmas = []
        for t in all_turmas:
            for e in t.enrollments.all():
                if e.student.id == student_id:
                    print("show")
                    list_of_turmas.append(t)
        return list_of_turmas