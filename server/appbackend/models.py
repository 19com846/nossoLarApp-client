from django.db import models

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return "Course: {}".format(self.name)

class Turma(models.Model):
    title = models.CharField(max_length=50)
    classroom = models.CharField(max_length=20)
    dirigente = models.ForeignKey(Person)
    course = models.ForeignKey(Course)
    time = models.CharField(max_length=10)
    semester = models.IntegerField(null=False, blank=False)
    year = models.IntegerField(null=False, blank=False)
    enrollments = models.ManyToManyField(Enrolled)
    def __str__(self):
        return "Turma: {}".format(self.title)

class Lesson(models.Model):
    turma = models.ForeignKey(Turma)
    def __str__(self):
        return "Lesson: {}".format()

class Presence(models.Model):
    student = models.ForeignKey(Person)
    lesson = models.ForeignKey(Lesson)
    date = models.DateField()
    def __str__(self):
        return "Presence: {}".format()

class Teaches(models.Model):
    classes = models.ManyToManyField(Turma)
    teacher = models.ForeignKey(Pessoa)
    def __str__(self):
        return "Teaches: {}".format()

class Collaborates(models.Model):
    classes = models.ManyToManyField(Turma)
    collaborators = models.ManyToManyField(Pessoa)
    def __str__(self):
        return "Collaborator: {}".format()

class Person(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=50)
    permission = models.IntegerField(null=False,blank=False)
    def __str__(self):
        return "Person: {}".format(self.name)

class Enrolled(models.Model):
    student = models.ForeignKey(Person)
    turma = models.ForeignKey(Turma)
    active = models.BooleanField(initial=True)
    status = models.CharField(max_length=50)
    finalGrade = models.CharField(max_field=5)
    graduated = models.BooleanField(initial=True)
    def __str__(self):
        return "Enrollment of Student: {} in class {} is active? {}".format(self.student, self.turma, self.active)


