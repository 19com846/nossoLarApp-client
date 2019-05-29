from django.urls import path
from drf_yasg.views import get_schema_view

from .api import *

schema_view = get_schema_view(
   openapi.Info(
      title="Nosso Lar API",
      default_version='v1',
      description="API da aplicação de gerenciamento de turmas e cursos do Nosso Lar",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-view'),
    path('courses/', CourseApi.as_view(), name='course-list'),
    path('class-groups/', ClassGroupApi.as_view(), name='class-group-list'),
    path('class-groups/<int:pk>/', ClassGroupDetailApi.as_view(), name='class-group-detail'),
    path('students/', StudentApi.as_view(), name='student-list'),
    path('students/<int:pk>/', StudentDetailApi.as_view(), name='student-detail'),
    path('students/<int:pk>/class-groups/', StudentClassGroupsApi.as_view(), name='student-class-groups-list'),
    path('transfer-requests/', RequestTransferApi.as_view(), name='request-student-transfer'),
    path('transfer-requests/<int:pk>/confirm/', ConfirmTransferRequestApi.as_view(), name='confirm-student-transfer'),
    path('class-groups/<int:pk>/lessons/', CreateLessonApi.as_view(), name='create-lesson'),
    path('lessons/<int:pk>/roll-call/', CreateAttendancesApi.as_view(), name='take-attendance'),
    path('login/', LoginApi.as_view(), name='user-login'),
    path('login/phone', LoginByPhoneApi.as_view(), name='user-login-by-phone'),
    path('accounts/login/', LoginApi.as_view(), name='swagger-login'),
    path('register/', RegisterApi.as_view(), name='register-user'),
    path('register/phone/', RegisterByPhoneApi.as_view(), name='register-user-by-phone'),
    path('login/collaborator/', AuthenticateCollaboratorApi.as_view(), name='authenticate-collaborator'),
    path('students/<int:pk>/enrollments/', StudentEnrollmentsApi.as_view(), name='see-enrolled-classes'),
    path('students/<int:pk>/class-groups/<int:group_id>/transfer-targets/', TransferTargetsApi.as_view(), name='list-transfer-targets'),
    path('students/<int:pk>/class-groups/<int:group_id>/attendances', StudentAttendancesApi.as_view(), name='see-attendances'),
    path('lessons/<int:pk>/attendances/', LessonAttendances.as_view(), name='see-lesson-attendances'),
    path('collaborators/<int:pk>/class-groups/', ManagedClassGroups.as_view(), name='see-managed-classes')
]



