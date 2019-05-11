from rest_framework import serializers

from .models import Turma, Person, Course, Enrolled

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'name', 'phone', 'permission')


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'name', 'phone', 'permission')


class CollaboratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'name', 'phone', 'permission')


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrolled
        fields = '__all__'
        # fields = ('id', 'active', 'status', 'finalGrade', 'graduated')


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class TurmaSerializer(serializers.ModelSerializer):
    teacher = serializers.ReadOnlyField(source='teacher.name')
    collaborators = CollaboratorSerializer(many=True, read_only=True)
    enrollments = EnrollmentSerializer(many=True, read_only=True)
    course = CourseSerializer()
    class Meta:
        model = Turma
        fields = '__all__'