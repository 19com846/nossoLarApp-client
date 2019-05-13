from rest_framework import serializers

from .models import *


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
        fields = ('name', 'phone', 'email')


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'
        # fields = ('id', 'active', 'status', 'finalGrade', 'graduated')


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class ClassGroupSerializer(serializers.ModelSerializer):
    teacher = serializers.ReadOnlyField(source='teacher.name')
    collaborators = CollaboratorSerializer(many=True, read_only=True)
    enrollments = EnrollmentSerializer(many=True, read_only=True)
    course = serializers.ReadOnlyField(source='course.name')

    class Meta:
        model = ClassGroup
        fields = '__all__'


class TransferRequestSerializer(serializers.ModelSerializer):
    student = serializers.ReadOnlyField(source='student.name')
    origin_group = ClassGroupSerializer(read_only= True)
    target_group = ClassGroupSerializer(read_only= True)
    accepted = serializers.IntegerField(min_value=0, max_value=1)

    class Meta:
        model = TransferRequest
        fields = '__all__'
