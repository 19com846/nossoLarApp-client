from django.conf.urls import *
from django.urls import path
from rest_framework import routers
from .api import *
urlpatterns = [
    path('class-groups/', ClassGroupApi.as_view(), name='class-group-list'),
    path('class-groups/<int:pk>', ClassGroupDetailApi.as_view(), name='class-group-detail'),
    path('students/', StudentApi.as_view(), name='student-list'),
    path('students/<int:pk>/', StudentDetailApi.as_view(), name='student-detail'),
    path('students/<int:pk>/class-groups', StudentClassGroupsApi.as_view(), name='student-class-groups-list'),
    path('transfer-requests/create', RequestTransferApi.as_view(), name='request-student-transfer'),
    path('transfer-requests/<int:pk>/confirm', ConfirmTransferRequestApi.as_view(), name='confirm-student-transfer'),
    path('class-groups/<int:pk>/lessons/create', CreateLessonApi.as_view(), name='create-lesson')
    # url('courses', CourseApi.as_view()),
    # url(r'^', include(router.urls))

]


