from django.db import models
from dvadmin.utils.models import CoreModel
from dvadmin.system.models import Users


# 项目
class XiangMu(CoreModel):
    name = models.CharField(max_length=200, verbose_name='项目名')
    starts = models.DateField()


# 分部工程
class FenBu(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分部工程名')
    during = models.JSONField()
    len = models.IntegerField()
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)


# 分项工程
class FenXiang(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分项工程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    fenbu = models.ForeignKey(FenBu, on_delete=models.CASCADE)
    during = models.JSONField()
    charu = models.IntegerField(verbose_name='提前插入时间start-', null=True, blank=True)
    jianxie = models.IntegerField(verbose_name='工艺间歇start+', null=True, blank=True)
    len = models.IntegerField(verbose_name='时长')


# 施工工序
class GongXu(CoreModel):
    name = models.CharField(max_length=200, verbose_name='工序名')
    quantity = models.IntegerField(verbose_name='工程量')
    price = models.IntegerField(verbose_name="单价")
    earn = models.IntegerField(verbose_name='产值')
    detail = models.CharField(max_length=500, verbose_name='描述', null=True, blank=True)
    # pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    fenxiang = models.ForeignKey(FenXiang, on_delete=models.CASCADE)


# 图片
class Media(models.Model):
    gongxu = models.ForeignKey(GongXu, on_delete=models.CASCADE)
    path = models.ImageField()


# 材料数量模型
class Material(models.Model):
    name = models.CharField(max_length=100, verbose_name='材料名称')
    quantity = models.IntegerField(verbose_name='数量')
    unit = models.CharField(max_length=20, verbose_name='单位')


# 材料入库记录-模型
class MaterialIn(models.Model):
    name = models.CharField(max_length=100, verbose_name='材料名称')
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    quantity = models.IntegerField(verbose_name='入库数量')


# 材料出库记录-模型
class MaterialOut(models.Model):
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.SET_NULL)
    fenxaing = models.ForeignKey(FenXiang, on_delete=models.SET_NULL)
    fenbu = models.ForeignKey(FenBu, on_delete=models.SET_NULL)


class User(Users):
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.SET_NULL)
    fenxaing = models.ForeignKey(FenXiang, on_delete=models.SET_NULL)
    fenbu = models.ForeignKey(FenBu, on_delete=models.SET_NULL)
