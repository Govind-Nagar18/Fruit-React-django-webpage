from django.db import models

# Create your models here.
class Fruits(models.Model):
    name = models.CharField(max_length=100)
    poster = models.ImageField(upload_to='images/', default="", blank=True)
    price = models.FloatField()
    stock = models.IntegerField()
    