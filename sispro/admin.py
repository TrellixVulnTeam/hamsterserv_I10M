from django.contrib.admin.sites import AdminSite
from django.contrib.admin import ModelAdmin, TabularInline, StackedInline
from django.urls import reverse
from sispro.models import *

# Register your models here.

class SisproAdminSite(AdminSite):
	site_header = 'Admin SISPRO'
	site_title = site_header
	site_url = '/sispro/'
	index_title = site_title


class ProyectoInline(StackedInline):
	ordering = ['programa', 'codigo']


class ProgramaAdmin(ModelAdmin):
	ordering = ['codigo']
	inlines = [
		ProyectoInline,
	]

class ProtagonistaAdmin(ModelAdmin):
	ordering = ['comunidad__municipio__nombre', 'comunidad__nombre', 'apellidos']


class TecnicoAdmin(ModelAdmin):
	ordering = ['comunidad__municipio__nombre', 'comunidad__nombre', 'apellidos']




