from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import JournalEntry

class JournalEntryAdmin(admin.ModelAdmin):
    list_display = ('date', 'title', 'content')

# Register your models here.

admin.site.register(JournalEntry, JournalEntryAdmin)