from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from appbackend.models import Person


class PersonCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = Person
        fields = ('first_name', 'last_name', 'email', 'phone', 'password', 'user_permissions')


class PersonChangeForm(UserChangeForm):

    class Meta:
        model = Person
        fields = ('first_name', 'last_name', 'email', 'phone', 'password', 'user_permissions')


