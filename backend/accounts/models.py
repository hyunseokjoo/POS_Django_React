from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class GenderChoices(models.TextChoices):
        MALE = "M", "남성"
        FEMALE = "F", "여성"

    bio = models.TextField(blank=True)
    phone_number = models.CharField(
        max_length=13, 
        blank=True, 
        validators=[RegexValidator(r"^010-?[1-9]\d{3}-?\d{4}$")]
    )
    avatar = models.ImageField(
        blank=True, 
        upload_to="accounts/avatar/%Y/%m/%d",
        help_text="48 * 48px 크기의 png/jpg 파일을 업로드 해주세요"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def name(self):
        return f"{self.first_name} {self.last_name}".strip()

    @property
    def avatar_url(self):
        if self.avatar:
            return self.avatar.url
        else:
            return ""