from django.db import models

# Create your models here.
class Suppliers(models.Model):
    company_name=models.CharField(max_length=255)
    phone=models.BigIntegerField()
    address=models.CharField(max_length=255)
    # need changes


    def __str__(self):
        return self.name
    