# Generated by Django 3.1.4 on 2021-01-03 01:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contract_basic', '0002_auto_20210102_1326'),
    ]

    operations = [
        migrations.AlterField(
            model_name='insurance',
            name='contract_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contractrev', to='contract_basic.contractbasic'),
        ),
    ]
