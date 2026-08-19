from django.shortcuts import render
from .models import Project
# Create your views here.

def index(request):
    projects = Project.objects.all().order_by('id')
    return render(request,'home/index.html' , {'projects':projects})