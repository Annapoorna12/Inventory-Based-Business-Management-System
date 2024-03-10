from django.db import models

# Create your models here.

class Products(models.Model):
    name=models.CharField(max_length=255)
    img=models.ImageField(upload_to='product/',blank=True,null=True)
    type=models.CharField(max_length=255)
    qty=models.PositiveIntegerField()
    price=models.FloatField()
    type=models.CharField(max_length=255,default="product")
    description=models.CharField(max_length=1500)

    def upload_to(instance, filename):
        return 'product/{filename}'.format(filename=filename)


    def __str__(self):
        return self.name
    
