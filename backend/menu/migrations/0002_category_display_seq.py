# Generated by Django 3.0.14 on 2022-03-01 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='display_seq',
            field=models.IntegerField(default=0),
        ),
    ]