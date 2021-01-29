from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import ContractBasic, Insurance,BusinessUnit,Department,Regions,Divisions,Sites,Tags


admin.site.register(ContractBasic)


@admin.register(Insurance)
class InsuranceAdmin(ImportExportModelAdmin):
    list_display = ('id',
            'contract_id',
            'supplier_name',
            'insurance_company_name',
            'insurance_type', 
            'contract_insurance_expiry', 
            'insurance_status',     
            'insurance_history', )



@admin.register(Sites)
class SitesAdmin(ImportExportModelAdmin):
    list_display = ('name',)


@admin.register(BusinessUnit)
class BUAdmin(ImportExportModelAdmin):
    list_display = ('name',)

@admin.register(Department)
class DeptAdmin(ImportExportModelAdmin):
    list_display = ('name',)

@admin.register(Regions)
class RegionsAdmin(ImportExportModelAdmin):
    list_display = ('name',)

@admin.register(Divisions)
class DivAdmin(ImportExportModelAdmin):
    list_display = ('name',)


@admin.register(Tags)
class TagsAdmin(ImportExportModelAdmin):
    list_display = ('name',)