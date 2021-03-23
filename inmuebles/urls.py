from django.urls import path
from . import views
from inmuebles.views import MainView, InmuebleJsonListView

urlpatterns = [
    #path('', views.home, name="home"),
    path('', MainView.as_view() , name='main-view'),
    path('inmuebles-json/<int:num_inmuebles>/', InmuebleJsonListView.as_view(), name='inmuebles-json-view'),	
]
