from rest_framework.generics import ListAPIView

from .serializers import TurmaSerializer
from .models import Turma

class TurmaApi(ListAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class TurmasDoAlunoApi(ListAPIView):
    serializer_class = TurmaSerializer
    def get_queryset(self):
        studentID = int(self.request.query_params.get('studentID', '0'))
        allTurmas = Turma.objects.all()
        listOfTurmas = []
        for t in allTurmas:
            for e in t.enrollments.all():
                if e.student.id == studentID:
                    print("show")
                    listOfTurmas.append(t)
        return listOfTurmas