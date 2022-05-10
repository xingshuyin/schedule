from tkinter import CASCADE
from dvadmin.utils.models import CoreModel
from django.db import models
# Create your models here.
# class gongcheng(CoreModel):
#     name = models.CharField(max_length=200, verbose_name='工程名')
#     starts = models.DateField()

class shigongduan(CoreModel):
    name = models.CharField(max_length=200, verbose_name='施工段名')
    # gongcheng = models.ForeignKey(gongcheng, on_delete=models.CASCADE)

class shigongguocheng(CoreModel):
    name = models.CharField(max_length=200, verbose_name='施工过程名')
    shigongduan = models.ForeignKey(shigongduan, on_delete=models.CASCADE)
    start = models.DateField()
    end = models.DateField()
    length = models.IntegerField()
    
        
