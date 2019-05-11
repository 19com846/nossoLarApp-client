from django.conf.urls import *
from django.urls import path
from rest_framework import routers
from .api import TurmaApi, TurmasDoAlunoApi, CourseApi, TurmaDetailApi, StudentApi, StudentDetailApi

urlpatterns = [
    path('turmas/', TurmaApi.as_view(), name='turma-list'),
    path('turmas/<int:pk>', TurmaDetailApi.as_view(), name='turma-detail'),
    path('students/', StudentApi.as_view(), name='student-list'),
    path('students/<int:pk>/', StudentDetailApi.as_view(), name='student-detail'),
    path('students/<int:pk>/turmas', TurmasDoAlunoApi.as_view(), name='student-turmas-list')
    # url('courses', CourseApi.as_view()),
    # url(r'^', include(router.urls))

]


