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

    def __str__(self):
        return self.title

class Reviews(models.Model):
    title = models.CharField(max_length=128)
    date = models.CharField(max_length=24)
    name = models.CharField(max_length=24, default = "")
    q1 = models.CharField(max_length=128)
    q2 = models.CharField(max_length=128)
    q3 = models.CharField(max_length=128)
    q4 = models.CharField(max_length=128)
    q5 = models.CharField(max_length=128)
    q6 = models.CharField(max_length=128)
    q7 = models.IntegerField(default = 0)
    comments = models.CharField(max_length=500)

    def __str__(self):
        return self.title
