from rest_framework import viewsets
from tasks import serializer, models

# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = serializer.TaskSerializer
    queryset = models.Task.objects.all()