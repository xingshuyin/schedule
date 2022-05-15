<!--
 * @创建文件时间: 2021-06-01 22:41:21
 * @Auther: 猿小天
 * @最后修改人: 猿小天
 * @最后修改时间: 2021-07-31 22:35:15
 * 联系Qq:1638245306
 * @文件介 绍: 部门管理
-->
<template>
  <d2-container :class="{ 'page-compact': crud.pageOptions.compact }">

    <!-- <el-dialog
  :title="nametree"
  :visible.sync="dialogVisible"
  width="50%"
  :before-close="handleClose" style="z-index:999;position:fixed;">

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->

    <!--    <template slot="header">测试页面1</template>-->
    <d2-crud-x ref="d2Crud" v-bind="_crudProps" v-on="_crudListeners" selection-row @detail="detail" @pass="pass"
               @notpass="notpass">
      <div slot="header">
        <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch"/>
        <el-button-group>
          <el-button size="small" v-permission="'Create'" type="primary" @click="addRow"><i class="el-icon-plus"/> 新增
          </el-button>
        </el-button-group>
        <crud-toolbar :search.sync="crud.searchOptions.show" :compact.sync="crud.pageOptions.compact"
                      :columns="crud.columns" @refresh="doRefresh()"
                      @columns-filter-changed="handleColumnsFilterChanged"/>
      </div>
    </d2-crud-x>
  </d2-container>
</template>

<script>
import * as api from './api'
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'

export default {
  name: 'material',
  mixins: [d2CrudPlus.crud],
  data () {
    return {}
  },
  methods: {
    getCrudOptions () {
      return crudOptions(this)
    },
    pageRequest (query) {
      return api.GetList(query)
    },
    addRequest (row) {
      console.log('addRequest', row)
      d2CrudPlus.util.dict.clear()
      return api.createObj(row)
    },
    updateRequest (row) {
      d2CrudPlus.util.dict.clear()
      return api.UpdateObj(row)
    },
    delRequest (row) {
      return api.DelObj(row.id)
    },
    // 授权
    createPermission (scope) {
      this.$router.push({
        name: 'menuButton',
        params: { id: scope.row.id },
        query: { name: scope.row.name }
      })
    },
    detail ({ index, row }) {
      const that = this
      console.log('这里是个方法码', row.tree, that.dialogVisible)
      // TODO:根据row显示不同表单  123单株   4 5 古树群
      that.tree_details = row.tree
      console.log('这里是个方法码1111')
      that.tree_type = row.tree.tree_type
      console.log('这里是个方法码333')
      if (that.tree_details.images) {
        console.log('这里是个方法码444')
        for (const i in that.tree_details.images) {
          console.log('是这里吗', that.tree_details.images[i])
          // for(let mm in this.tree_details[i].images){
          this.tree_details.images[i] =
            // eslint-disable-next-line no-tabs
            'http://39.105.11.4:81/backend/' + this.tree_details.images[i]

          // }
        }
      }
      console.log('这里是个方法码222')

      if (that.dialogVisible === false) {
        that.dialogVisible = true
      }
    }
  }
}
</script>

<style lang="scss">
.yxtInput {
  .el-form-item__label {
    color: #49a1ff;
  }
}

.vxe-cell span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  // line-height: 50px;
}
</style>
