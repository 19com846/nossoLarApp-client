from rest_framework import serializers

from .models import *


class StudentSerializer(serializers.ModelSerializer):
    role = serializers.CharField(source='role.name')

    class Meta:
        model = Person
        fields = ('id', 'name', 'phone', 'role')


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'name', 'phone', 'role.name')


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
    enrollment = EnrollmentSerializer(read_only=True)
    target_group = ClassGroupSerializer(read_only=True)
    status = serializers.CharField(source='status.name')

    class Meta:
        model = TransferRequest
        fields = '__all__'
