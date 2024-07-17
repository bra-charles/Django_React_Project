from django.urls import path
from .views import CreateUserView, SignInView, CustomTokenRefreshView

urlpatterns = [
    path('signup/', CreateUserView.as_view(), name='signup'),
    path('signin/', SignInView.as_view(), name='signin'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
