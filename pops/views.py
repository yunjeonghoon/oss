from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    return render(request, "index.html")


def startuphtml(request):
    return render(request, "startup.html")

def afe(request):
    return render(request, "afe.html")

def agree(request):
    return render(request, "agree.html")