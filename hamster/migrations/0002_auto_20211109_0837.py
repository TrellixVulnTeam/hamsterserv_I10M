# Generated by Django 3.2.8 on 2021-11-09 14:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hamster', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='funcionario',
            options={'ordering': ['institucion', 'usuario']},
        ),
        migrations.RemoveField(
            model_name='funcionario',
            name='apellido',
        ),
        migrations.RemoveField(
            model_name='funcionario',
            name='correo',
        ),
        migrations.RemoveField(
            model_name='funcionario',
            name='nombre',
        ),
    ]
