from django.db import models

# Create your models here.

class JournalEntry(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title
