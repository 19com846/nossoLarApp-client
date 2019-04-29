from django.contrib import admin

# Register your models here.

from .models import Course, Person, Enrolled, Turma, Lesson, Presence

admin.site.register(Course)
admin.site.register(Person)
admin.site.register(Enrolled)
admin.site.register(Turma)
admin.site.register(Lesson)
admin.site.register(Presence)