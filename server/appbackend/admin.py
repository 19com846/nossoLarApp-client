from django.contrib import admin

# Register your models here.

from .models import Course, Person, Enrollment, ClassGroup, Lesson, Attendance, TransferRequest

admin.site.register(Course)
admin.site.register(Person)
admin.site.register(Enrollment)
admin.site.register(ClassGroup)
admin.site.register(Lesson)
admin.site.register(Attendance)
admin.site.register(TransferRequest)