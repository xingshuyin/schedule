from dvadmin.utils.models import CoreModel
from django.db import models


# Create your models here.
class Gongcheng(CoreModel):
    name = models.CharField(max_length=200, verbose_name='工程名')
    starts = models.DateField()


class Fenbu(CoreModel):  # 分部工程
    name = models.CharField(max_length=200, verbose_name='施工段名')
    during = models.JSONField()
    len = models.IntegerField()
    # gongcheng = models.ForeignKey(gongcheng, on_delete=models.CASCADE)


class Fenxiang(CoreModel):  # 分项工程
    name = models.CharField(max_length=200, verbose_name='施工过程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    fenbu = models.ForeignKey(Fenbu, on_delete=models.CASCADE)
    during = models.JSONField()
    charu = models.IntegerField(verbose_name='提前插入时间start-', null=True, blank=True)
    jianxie = models.IntegerField(verbose_name='工艺间歇start+')
    len = models.IntegerField(verbose_name='时长')


class Gongxu(CoreModel):  # 施工工序
    name = models.CharField(max_length=200, verbose_name='工序名')
    quantity = models.IntegerField(verbose_name='工程量')
    price = models.IntegerField(verbose_name="单价")
    earn = models.IntegerField(verbose_name='产值')
    detail = models.CharField(max_length=500, verbose_name='描述')
    # pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    fenxiang = models.ForeignKey(Fenxiang, on_delete=models.CASCADE)


class media(models.Model):
    gongxu = models.ForeignKey(Gongxu, on_delete=models.CASCADE)
    path = models.ImageField()
