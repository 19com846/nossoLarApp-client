from django.conf.urls import url
from .api import TurmaApi, TurmasDoAlunoApi

urlpatterns = [
    url('turmas', TurmaApi.as_view()),
    url('student', TurmasDoAlunoApi.as_view())
]