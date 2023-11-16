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
    title = models.CharField(max_length=24)
    date = models.CharField(max_length=24)
    q1 = models.IntegerField()
    q2 = models.IntegerField()
    q3 = models.IntegerField()
    q4 = models.IntegerField()
    q5 = models.IntegerField()
    q6 = models.IntegerField()
    q7 = models.IntegerField()
    q8 = models.IntegerField()
    q9 = models.IntegerField()
    q10 = models.IntegerField()
    comments = models.CharField(max_length=500)
    def __str__(self):
        return self.title
      
