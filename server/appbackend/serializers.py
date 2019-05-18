from rest_framework import serializers

from .models import *


class PersonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Person
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Person
        fields = ('id', 'first_name', 'last_name', 'phone')


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'first_name', 'last_name', 'phone')


class CollaboratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('first_name', 'last_name', 'phone', 'email')


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
    teacher = serializers.ReadOnlyField(source='teacher.first_name')
    collaborators = CollaboratorSerializer(many=True, read_only=True)
    course = serializers.ReadOnlyField(source='course.name')

    class Meta:
        model = ClassGroup
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    class_group = ClassGroupSerializer(read_only=True)

    class Meta:
        model = Lesson
        fields = '__all__'


class AttendanceSerializer(serializers.ModelSerializer):
    lesson = LessonSerializer(read_only=True)
    student = StudentSerializer(read_only=True)

    class Meta:
        model = Attendance
        fields = '__all__'


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)


class TransferRequestSerializer(serializers.ModelSerializer):
    enrollment = EnrollmentSerializer(read_only=True)
    target_group = ClassGroupSerializer(read_only=True)
    status = serializers.CharField(source='status.name')

    class Meta:
        model = TransferRequest
        fields = '__all__'
