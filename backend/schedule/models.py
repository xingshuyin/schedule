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


# 分项工程->单位工程 独立设计
class DanWei(CoreModel):
    name = models.CharField(max_length=200, verbose_name='单位工程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    during = models.JSONField()
    len = models.IntegerField(verbose_name='时长')


# 分部工程->单项工程(独立施工)
class DanXiang(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分部工程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    during = models.JSONField()
    len = models.IntegerField()
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    danwei = models.ForeignKey(DanWei, on_delete=models.CASCADE)


# 分部工程 new
class FenBu(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分部工程名')
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    danwei = models.ForeignKey(DanWei, on_delete=models.CASCADE)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.CASCADE)
    during = models.JSONField()
    len = models.IntegerField(verbose_name='时长')


# 施工工序->fenxiang
class FenXiang(CoreModel):
    name = models.CharField(max_length=200, verbose_name='分项工程名')
    quantity = models.IntegerField(verbose_name='工程量')
    price = models.IntegerField(verbose_name="单价")
    earn = models.IntegerField(verbose_name='产值')
    detail = models.CharField(max_length=500, verbose_name='描述', null=True, blank=True)
    pre = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.CASCADE)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.CASCADE)
    danwei = models.ForeignKey(DanWei, on_delete=models.CASCADE)


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
    quantity = models.IntegerField(verbose_name='入库数量')
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.SET_NULL, null=True)
    danwei = models.ForeignKey(DanWei, on_delete=models.SET_NULL, null=True)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.SET_NULL, null=True)
    unit = models.CharField(max_length=20, verbose_name='单位')


# 材料出库记录-模型
class MaterialOut(models.Model):
    material = models.ForeignKey(Material, on_delete=models.CASCADE)
    xiangmu = models.ForeignKey(XiangMu, on_delete=models.SET_NULL, null=True)
    danwei = models.ForeignKey(DanWei, on_delete=models.SET_NULL, null=True)
    danxiang = models.ForeignKey(DanXiang, on_delete=models.SET_NULL, null=True)
    unit = models.CharField(max_length=20, verbose_name='单位')

# class User(Users):
#     xiangmu = models.ForeignKey(XiangMu, on_delete=models.SET_NULL, null=True)
#     danwei = models.ForeignKey(DanWei, on_delete=models.SET_NULL, null=True)
#     danxaing = models.ForeignKey(DanXiang, on_delete=models.SET_NULL, null=True)
