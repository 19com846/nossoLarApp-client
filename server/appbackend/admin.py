from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin

from appbackend.forms import PersonCreationForm, PersonChangeForm
from .models import Course, Person, Enrollment, ClassGroup, Lesson, Attendance, TransferRequest


class PersonAdmin(UserAdmin):
    add_form = PersonCreationForm
    form = PersonChangeForm
    model = Person
    list_display = ['email', 'phone', 'first_name', 'last_name', 'password', ]


admin.site.register(Course)
admin.site.register(Person, PersonAdmin)
admin.site.register(Enrollment)
admin.site.register(ClassGroup)
admin.site.register(Lesson)
admin.site.register(Attendance)
admin.site.register(TransferRequest)