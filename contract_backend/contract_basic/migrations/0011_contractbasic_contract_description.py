# Generated by Django 3.1.5 on 2021-01-29 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contract_basic', '0010_auto_20210129_1212'),
    ]

    operations = [
        migrations.AddField(
            model_name='contractbasic',
            name='contract_description',
            field=models.TextField(blank=True, null=True),
        ),
    ]