from rest_framework import serializers

from .models import Turma, Person

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('name', 'phone')

class TurmaSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer()
    class Meta:
        model = Turma
        fields = '__all__'