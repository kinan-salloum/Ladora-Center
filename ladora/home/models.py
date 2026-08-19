from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200)
    desciption = models.TextField()
    image = models.ImageField(upload_to='projects/')
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title