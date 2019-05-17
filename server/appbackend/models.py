from django.contrib.auth.models import AbstractUser
from django.db import models
from enumfields import Enum, EnumField
from datetime import date


class TransferStatus(Enum):
    PENDING = 'p'
    ACCEPTED = 'a'

    class Labels:
        PENDING = 'Pendente'
        ACCEPTED = 'Aceita'


class EnrollmentStatus(Enum):
    PENDING = 'p',
    ACCEPTED = 'a',
    REJECTED = 'r'

    class Labels:
        PENDING = 'Pendente'
        ACCEPTED = 'Aceita'
        REJECTED = 'Rejeitada'


class Course(models.Model):
    """
    Defines model for courses.
    """

    name = models.CharField(max_length=50)

    def __str__(self):
        return "{}".format(self.name)


class Person(AbstractUser):
    """
    Defines model for Persons; can have student or collaborator permissions.
    """
    pass
    phone = models.CharField(max_length=15)

    def __str__(self):
        return "{}".format(self.first_name)


class ClassGroup(models.Model):
    """
    Defines model for ClassGroups, which are an implementation of Courses.
    """
    title = models.CharField(max_length=50, null=False)
    classroom = models.CharField(max_length=20)
    teacher = models.ForeignKey(Person, related_name="teacher", on_delete=models.PROTECT)
    collaborators = models.ManyToManyField(Person)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    time = models.CharField(max_length=20, null=False)
    semester = models.IntegerField(null=False, blank=False)
    year = models.IntegerField(null=False, blank=False)

    def __str__(self):
        return "{} - {}".format(self.course, self.title)


class Enrollment(models.Model):
    """
    Defines relationship between Person and ClassGroup.
    """
    student = models.ForeignKey(Person, on_delete=models.CASCADE)
    class_group = models.ForeignKey(ClassGroup, related_name="class_group", on_delete=models.CASCADE)
    active = models.BooleanField(default=True, null=False, )
    status = models.CharField(max_length=50, null=False)
    finalGrade = models.CharField(default=None, max_length=5, null=True)
    graduated = models.BooleanField(default=True, null=False)

    def __str__(self):
        return "Matrícula de {}".format(self.student)


class Lesson(models.Model):
    """
    Defines model for Lesson, which is the date in which a session of a ClassGroup was held.
    """
    class_group = models.ForeignKey(ClassGroup, on_delete=models.CASCADE)
    date = models.DateField(default=date.today)

    def __str__(self):
        return "Aula {} no dia {}".format(self.class_group, self.date)


class Attendance(models.Model):
    """
    Defines model for Attendance, which is the record of a student's presence at a lesson.
    """
    student = models.ForeignKey(Person, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)

    def __str__(self):
        return "Presença de {} na {}:".format(self.student, self.lesson)


class TransferRequest(models.Model):
    """
    Defines model for TransferRequest, which is a request put forth by a student to be
    transferred from one class group to another. It must be approved by a collaborator.
    """
    enrollment = models.ForeignKey(Enrollment, related_name="enrollment", on_delete=models.CASCADE)
    target_group = models.ForeignKey(ClassGroup, related_name="target_group", on_delete=models.CASCADE)
    status = EnumField(TransferStatus, max_length=1)

    def confirm(self):
        self.enrollment.class_group = self.target_group
        self.status = TransferStatus.ACCEPTED
        self.enrollment.save()
        self.save()

    def __str__(self):
        return "Pedido de transferência de {}: \n" \
               "Turma original: {} \n" \
               "Turma destino: {}".format(self.enrollment.student, self.enrollment.class_group, self.target_group)
