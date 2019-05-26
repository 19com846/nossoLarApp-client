import sys
import traceback

from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.views import exception_handler

from appbackend import constants
from appbackend.exceptions import GenericException


def build_response(http_status, message):
    """
    Builds custom Response from params

    :param http_status: enum containing correct HTTP status
    :param message: string value for response message
    :return: the built response
    """
    return Response(data={'detail': message},
                    status=http_status)


def custom_exception_handler(exception, context):
    """
    Overrides Django's default exception handler to assert proper
    behavior when raising errors from the API

    :param exception: the raised exception
    :param context: the context
    :return: the error response
    """
    traceback.print_exception(*sys.exc_info())
    response = exception_handler(exception, context)

    if isinstance(exception, GenericException):
        response = build_response(exception.status_code, exception.detail)

    if isinstance(exception, ObjectDoesNotExist):
        response = build_response(status.HTTP_400_BAD_REQUEST,
                                  str(exception)
                                  if str(exception).strip()
                                  else constants.OBJECT_NOT_FOUND_MESSAGE)

    if isinstance(exception, ValueError):
        response = build_response(status.HTTP_400_BAD_REQUEST,
                                  str(exception)
                                  if str(exception).strip()
                                  else constants.VALUE_ERROR_MESSAGE)

    if isinstance(exception, ValidationError):
        response = build_response(status.HTTP_400_BAD_REQUEST,
                                  str(exception)
                                  if str(exception).strip()
                                  else constants.VALIDATION_ERROR_MESSAGE)

    if response is None:
        response = build_response(status.HTTP_500_INTERNAL_SERVER_ERROR,
                                  constants.SERVER_ERROR_MESSAGE)

    response.data['message'] = response.data['detail']
    del response.data['detail']
    return response
