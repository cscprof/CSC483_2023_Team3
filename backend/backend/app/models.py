from django.db import models

class User(models.Model):
    username = models.CharField(max_length=24)
    email = models.CharField(max_length=64)
    password = models.CharField(max_length=24)

class Events(models.Model):
      title = models.CharField(max_length=24)
      date = models.CharField(max_length=24)
      description = models.CharField(max_length=250)
      location = models.CharField(max_length=64)