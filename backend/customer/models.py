from django.db import models

# Create your models here.
class Customers(models.Model):
    name=models.CharField(max_length=255)
    email=models.CharField(max_length=60)
    phone=models.BigIntegerField()
    address=models.CharField(max_length=255)

    def __str__(self):
        return self.name
    