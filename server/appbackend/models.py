from django.db import models


class Course(models.Model):
    """
    Defines model for courses.
    """

    name = models.CharField(max_length=50)

    def __str__(self):
        return "{}".format(self.name)


class Person(models.Model):
    """
    Defines model for Persons; can have student or collaborator permissions.
    """

    name = models.CharField(max_length=50, null=False)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50, null=True)
    permission = models.IntegerField(null=False, blank=False)

    def __str__(self):
        return "{}".format(self.name)


class Enrollment(models.Model):
    """
    Defines relationship between Person and ClassGroup.
    """
    student = models.ForeignKey(Person, on_delete=models.CASCADE)
    active = models.BooleanField(default=True, null=False)
    status = models.CharField(max_length=50, null=False)
    finalGrade = models.CharField(max_length=5, null=True)
    graduated = models.BooleanField(default=True, null=False)

    def __str__(self):
        return "Matrícula de {}".format(self.student)


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
    # enrollments = models.ManyToManyField(Enrollment, blank=True)

    def __str__(self):
        return "{} - {}".format(self.course, self.title)


class Lesson(models.Model):
    """
    Defines model for Lesson, which is the date in which a session of a ClassGroup was held.
    """
    class_group = models.ForeignKey(ClassGroup, on_delete=models.CASCADE)
    date = models.DateField()
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
    student = models.ForeignKey(Person, on_delete=models.CASCADE)
    origin_group = models.ForeignKey(ClassGroup, related_name= "origin_group", on_delete=models.CASCADE)
    target_group = models.ForeignKey(ClassGroup, related_name= "target_group", on_delete=models.CASCADE)
    accepted = models.IntegerField(null=False, blank=False)

    def __str__(self):
        return "Pedido de transferência de {}: \n" \
               "Turma original: {} \n" \
               "Turma destino: {}".format(self.student, self.origin_group, self.target_group)
