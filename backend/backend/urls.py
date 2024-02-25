"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,re_path
from employee.views import employee,employee_detail
from customer.views import customer,customer_detail
from django.views.generic import TemplateView
from products.views import product_list
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path("employee/", employee, name="employee"),
    path("employee/<int:pk>/", employee_detail, name="employeedetail"),
    path("customer/", customer, name="employee"),
    path("customer/<int:pk>/", customer_detail, name="customerdetail"),
    path("product/", product_list, name="product"),
    # path("getproduct/", get_product, name="product"),
    # path("get_product_image/<int:product_id>/",get_product_image,name="image"),
    # path("getimage/", get_product, name="product"),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)