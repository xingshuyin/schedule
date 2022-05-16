from django.db import models
from dvadmin.utils.models import CoreModel


# 项目
class XiangMu(CoreModel):
    name = models.CharField(max_length=200, verbose_name='项目名')
    jianshe = models.CharField(max_length=200, verbose_name='建设单位')
    sheji = models.CharField(max_length=100, verbose_name='设计单位')
    jianli = models.CharField(max_length=100, verbose_name='监理单位')
    dizhi = models.CharField(max_length=200, verbose_name='地址')

    class Meta:
        # app_label = 'xiangmu1'
        ...


# 单项工程
class DanXiang(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分部工程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    during = models.JSONField()
    len = models.IntegerField()
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    # danwei = models.ForeignKey(DanWei, on_delete=models.CASCADE)


# 单位工程
class DanWei(CoreModel):
    name = models.CharField(max_length=200, verbose_name='单位工程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.CASCADE)
    during = models.JSONField()
    len = models.IntegerField(verbose_name='时长')


# 分部工程
class FenBu(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分部工程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.CASCADE)
    danwei = models.ForeignKey(DanWei, on_delete=models.CASCADE)
    during = models.JSONField()
    len = models.IntegerField(verbose_name='时长')


# 分项工程
class FenXiang(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分项工程名')
    during = models.JSONField()
    len = models.IntegerField(verbose_name='时长')
    quantity = models.IntegerField(verbose_name='工程量')
    price = models.IntegerField(verbose_name="单价")
    earn = models.IntegerField(verbose_name='产值')
    detail = models.CharField(max_length=500, verbose_name='描述', null=True, blank=True)
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.CASCADE)
    danwei = models.ForeignKey(DanWei, on_delete=models.CASCADE)
    fenbu = models.ForeignKey(FenBu, on_delete=models.CASCADE)


# 图片
class Media(models.Model):
    fenxiang = models.ForeignKey(FenXiang, on_delete=models.CASCADE)
    path = models.ImageField()


# 材料数量模型
class Material(models.Model):
    name = models.CharField(max_length=100, verbose_name='材料名称')
    quantity = models.IntegerField(verbose_name='数量', default=0)
    unit = models.CharField(max_length=20, verbose_name='单位')


# 材料入库记录-模型
class MaterialIn(models.Model):
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.SET_NULL, null=True)
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    quantity = models.IntegerField(verbose_name='入库数量')
    gongying = models.CharField(max_length=100, verbose_name='供应商', null=True, blank=True)
    unit = models.CharField(max_length=20, verbose_name='单位')


# 材料出库记录-模型
class MaterialOut(models.Model):
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    quantity = models.IntegerField(verbose_name='出库数量')
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.SET_NULL, null=True)
    danwei = models.ForeignKey(DanWei, on_delete=models.SET_NULL, null=True)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.SET_NULL, null=True)
    fenbu = models.ForeignKey(FenBu, on_delete=models.CASCADE, null=True)
    fenxiang = models.ForeignKey(FenXiang, on_delete=models.CASCADE, null=True)
    people = models.CharField(max_length=100, verbose_name='领料人', null=True)
    unit = models.CharField(max_length=20, verbose_name='单位')


class User(models.Model):
    name = models.CharField(max_length=100, verbose_name='姓名')
    phone = models.CharField(max_length=11, verbose_name='手机号')
    gender = models.IntegerField(choices=((1,'男'),(2,'女')), verbose_name='性别')
    danwei = models.ForeignKey(DanWei, on_delete=models.SET_NULL, null=True)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.SET_NULL, null=True)
    fenbu = models.ForeignKey(FenBu, on_delete=models.CASCADE, null=True)
    fenxiang = models.ForeignKey(FenXiang, on_delete=models.CASCADE, null=True)
