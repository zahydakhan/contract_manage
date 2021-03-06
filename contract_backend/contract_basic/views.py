from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import ContractBasic, Insurance,BusinessUnit,Department,Regions,Divisions,Sites,Tags
from .serializers import ContractBasicSerializer, InsuranceSerializer,BusinessUnitSerializer,DepartmentSerializer,RegionsSerializer,DivisionsSerializer,SitesSerializer,TagsSerializer,ContractBasicListSerializer
from rest_framework.generics import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter,SearchFilter
from django_filters import FilterSet
from django_filters import rest_framework as filters
from rest_framework.pagination import LimitOffsetPagination,PageNumberPagination


#contract basic view
class ContractBasicViewSet(viewsets.ViewSet):
    pagination_class=None
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        contract = ContractBasic.objects.all()
        serializer = ContractBasicSerializer(
            contract, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "List of all Contracts", "data": serializer.data}
        return Response(response_dict)

     

    def create(self, request):
        try:
            serializer = ContractBasicSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Contract saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': serializer.errors}
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = ContractBasic.objects.all()
            site = get_object_or_404(queryset, pk=pk)
            serializer = ContractBasicSerializer(
                site, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated Contract"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating Contract"}
        return Response(dict_response)


    def retrieve(self, request, pk=id):
        queryset = ContractBasic.objects.all()
        contract = get_object_or_404(queryset, pk=pk)
        serializer = ContractBasicSerializer(contract, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = ContractBasic.objects.all()
            contract = get_object_or_404(queryset, pk=pk)
            contract.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Contract"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Contract"}
        return Response(dict_response)

#contract insurance view
class InsuranceViewSet(viewsets.ViewSet):
    #authentication_classes = [JWTAuthentication]
    #permission_classes = [IsAuthenticated]

    def list(self, request):
        contract = Insurance.objects.all()
        serializer = InsuranceSerializer(
            contract, many=True, context={"request": request})
        response_dict = {"error": False,
                         "message": "List of Insurance", "data": serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = InsuranceSerializer(
                data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Insurance saved successfully"}
        except:
            dict_response = {'error': True,
                             'message': serializer.errors }
        return Response(dict_response)

    def update(self, request, pk=id):
        try:
            queryset = Insurance.objects.all()
            site = get_object_or_404(queryset, pk=pk)
            serializer = InsuranceSerializer(
                site, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False,
                             "message": "Successfully Updated Insurance"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Updating Insurance"}
        return Response(dict_response)

    def retrieve(self, request, pk=id):
        queryset = Insurance.objects.all()
        contract = get_object_or_404(queryset, pk=pk)
        serializer = InsuranceSerializer(contract, context={"request": request})
        return Response({'error': False, 'message': "Single Data Fetch", "data": serializer.data})

    def destroy(self, request, pk=id):
        try:
            queryset = Insurance.objects.all()
            contract = get_object_or_404(queryset, pk=pk)
            contract.delete()
            dict_response = {"error": False,
                             "message": "Successfully Deleted Insurance"}
        except:
            dict_response = {'error': True,
                             'message': "Error During Deleting Insurance"}
        return Response(dict_response)



class BusinessUnitViewSet(viewsets.ModelViewSet):
    queryset=BusinessUnit.objects.all()
    serializer_class=BusinessUnitSerializer
    pagination_class=None

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset=Department.objects.all()
    serializer_class=DepartmentSerializer
    pagination_class=None

class RegionsViewSet(viewsets.ModelViewSet):
    queryset=Regions.objects.all()
    serializer_class=RegionsSerializer
    pagination_class=None

class DivisionsUnitViewSet(viewsets.ModelViewSet):
    queryset=Divisions.objects.all()
    serializer_class=DivisionsSerializer
    pagination_class=None

class SitesViewSet(viewsets.ModelViewSet):
    queryset=Sites.objects.all()
    serializer_class=SitesSerializer
    pagination_class=None

class TagsViewSet(viewsets.ModelViewSet):
    queryset=Tags.objects.all()
    serializer_class=TagsSerializer
    pagination_class=None

class ContractPagination(PageNumberPagination):
    page_size = 10
    page_query_param = 'p'
    page_size_query_param = 'records'

class ContractFilter(FilterSet):
    contract_status=filters.CharFilter('contract_status')
    id=filters.CharFilter('id')

    class Meta:
        model:ContractBasic
        fields=('id', 'contract_status',)

class ContractListView(generics.ListAPIView):
    queryset=ContractBasic.objects.all()
    serializer_class=ContractBasicListSerializer
    filter_backends = (DjangoFilterBackend, OrderingFilter, SearchFilter)
    filter_class = ContractFilter
    search_fields=('supplier_name','contract_title','contract_description', )
    pagination_class=ContractPagination
    ordering_fields=('contract_status',)