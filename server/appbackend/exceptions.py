from rest_framework.exceptions import APIException
from rest_framework.status import HTTP_500_INTERNAL_SERVER_ERROR


class AbstractException(APIException):

    status_code = HTTP_500_INTERNAL_SERVER_ERROR
    default_detail = APIException.default_detail

    def __init__(self):
        super(AbstractException, self).__init__(self)



