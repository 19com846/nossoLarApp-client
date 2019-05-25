from rest_framework import serializers

from .models import *


class RollCallSerializer(serializers.Serializer):
    student_id = serializers.IntegerField()
    was_present = serializers.BooleanField()

    class Meta:
        fields = '__all__'


class RollCallListSerializer(serializers.Serializer):
    roll_call = RollCallSerializer(many=True)

    class Meta:
        fields = '__all__'


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


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class ClassGroupSerializer(serializers.ModelSerializer):
    teacher = serializers.ReadOnlyField(source='teacher.first_name')
    collaborators = CollaboratorSerializer(many=True, read_only=True)
    course = serializers.ReadOnlyField(source='course.name')
    semester = serializers.CharField(source='semester.name')

    class Meta:
        model = ClassGroup
        fields = '__all__'


class ClassGroupRequest(serializers.Serializer):
    teacher_id = serializers.IntegerField()
    course_id = serializers.IntegerField()
    title = serializers.CharField()
    classroom = serializers.CharField()
    time = serializers.CharField()
    semester = serializers.ChoiceField(choices=[Semester.choices()])
    year = serializers.IntegerField()

    class Meta:
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    status = serializers.CharField(source='status.name')
    student = StudentSerializer()
    class_group = ClassGroupSerializer()

    class Meta:
        model = Enrollment
        fields = '__all__'
        # fields = ('id', 'active', 'status', 'finalGrade', 'graduated')


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


class StudentAttendanceSerializer(serializers.ModelSerializer):
    lesson_id = serializers.IntegerField(source="lesson.id")
    lesson_date = serializers.DateField(source="lesson.date")

    class Meta:
        model = Attendance
        fields = ('id', 'lesson_id', 'lesson_date', 'was_present')


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)


class TransferRequestSerializer(serializers.ModelSerializer):
    enrollment = EnrollmentSerializer(read_only=True)
    target_group = ClassGroupSerializer(read_only=True)
    status = serializers.CharField(source='status.name')

    class Meta:
        model = TransferRequest
        fields = '__all__'
