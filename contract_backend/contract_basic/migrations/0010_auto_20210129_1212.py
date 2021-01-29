# Generated by Django 3.1.5 on 2021-01-29 07:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contract_basic', '0009_auto_20210127_1707'),
    ]

    operations = [
        migrations.RenameField(
            model_name='businessunit',
            old_name='bussname',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='department',
            old_name='depname',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='divisions',
            old_name='divname',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='regions',
            old_name='regname',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='sites',
            old_name='sitename',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='tags',
            old_name='tagname',
            new_name='name',
        ),
    ]
