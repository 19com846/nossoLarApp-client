from django.db import models

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return "Course: {}".format(self.name)

class Person(models.Model):
    name = models.CharField(max_length=50, null=False)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50, null=True)
    permission = models.IntegerField(null=False,blank=False)
    def __str__(self):
        return "Person: {}".format(self.name)

class Enrolled(models.Model):
    student = models.ForeignKey(Person, on_delete=models.CASCADE)
    active = models.BooleanField(default=True, null=False)
    status = models.CharField(max_length=50, null=False)
    finalGrade = models.CharField(max_length=5, null=True)
    graduated = models.BooleanField(default=True, null=False)
    def __str__(self):
        return "Enrollment of Student: {} is active? {}".format(self.student, self.active)

class Turma(models.Model):
    title = models.CharField(max_length=50, null=False)
    classroom = models.CharField(max_length=20)
    teacher = models.ForeignKey(Person, related_name="teacher", on_delete=models.PROTECT)
    collaborators = models.ManyToManyField(Person)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    time = models.CharField(max_length=20, null=False)
    semester = models.IntegerField(null=False, blank=False)
    year = models.IntegerField(null=False, blank=False)
    enrollments = models.ManyToManyField(Enrolled)
    def __str__(self):
        return "Turma: {}".format(self.title)

class Lesson(models.Model):
    turma = models.ForeignKey(Turma, on_delete=models.CASCADE)
    date = models.DateField()
    def __str__(self):
        return "Lesson:".format()

class Presence(models.Model):
    student = models.ForeignKey(Person, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    def __str__(self):
        return "Presence:".format()
