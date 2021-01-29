# Generated by Django 3.1.5 on 2021-01-19 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor_management', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendorbasic',
            name='buyer_annual_spend_apprx',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
        migrations.AlterField(
            model_name='vendorbasic',
            name='supplier_revenue_annual',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
    ]
