# Generated by Django 3.1.5 on 2021-01-27 12:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contract_basic', '0008_auto_20210127_0921'),
    ]

    operations = [
        migrations.RenameField(
            model_name='businessunit',
            old_name='name',
            new_name='bussname',
        ),
    ]
