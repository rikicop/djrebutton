from django.shortcuts import render
from django.views.generic import View, TemplateView
from .models import Inmueble
from django.http import JsonResponse

""" def home_view(request):
    return render(request, 'inmuebles/inmuebles.html', {})  """

class MainView(TemplateView):
    template_name = 'inmuebles.html'

class InmuebleJsonListView(View):
    def get(self, *args, **kwargs):
        print(kwargs)
        upper = kwargs.get('num_inmuebles') #3 viene del ajax (let visible)
        lower = upper - 3 #0
        #desde el 0 al 3 
        inmuebles = list(Inmueble.objects.values()[lower:upper])
        #inmuebles = list(Inmueble.objects.values())
        #Esto de abajo para validar cuando llegué a el máximo
        inmb_size = len(Inmueble.objects.all())
        max_size = True if upper >= inmb_size else False
        #max_size='hola'
        return JsonResponse({'data': inmuebles , 'max': max_size }, safe=False)

