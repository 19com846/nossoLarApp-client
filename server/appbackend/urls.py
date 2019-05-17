from django.conf.urls import *
from django.urls import path
from rest_framework import routers
from .api import *
urlpatterns = [
    path('class-groups/', ClassGroupApi.as_view(), name='class-group-list'),
    path('class-groups/<int:pk>/', ClassGroupDetailApi.as_view(), name='class-group-detail'),
    path('students/', StudentApi.as_view(), name='student-list'),
    path('students/<int:pk>/', StudentDetailApi.as_view(), name='student-detail'),
    path('students/<int:pk>/class-groups/', StudentClassGroupsApi.as_view(), name='student-class-groups-list'),
    path('transfer-requests/', RequestTransferApi.as_view(), name='request-student-transfer'),
    path('transfer-requests/<int:pk>/confirm/', ConfirmTransferRequestApi.as_view(), name='confirm-student-transfer'),
    path('class-groups/<int:pk>/lessons/', CreateLessonApi.as_view(), name='create-lesson'),
    path('lessons/<int:pk>/roll-call/', CreateAttendanceApi.as_view(), name='take-attendance'),
    path('login/', LoginApi.as_view(), name='user-login'),
    path('register/', RegisterApi.as_view(), name='register-user'),
    path('students/<int:s_pk>/class-groups/<int:cg_pk>/')
    # url('courses', CourseApi.as_view()),
    # url(r'^', include(router.urls))
]


