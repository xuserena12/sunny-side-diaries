from django.shortcuts import render
from rest_framework import viewsets
from .serializers import JournalEntrySerializer
from .models import JournalEntry
# Create your views here.


# Create your views here.

class JournalEntryView(viewsets.ModelViewSet):
    serializer_class = JournalEntrySerializer
    queryset = JournalEntry.objects.all()
