import {request} from '@/api/service'
import {BUTTON_STATUS_BOOL} from '@/config/button'
import {urlPrefix as deptPrefix, addColumn} from './api'
import XEUtils from 'xe-utils'
import util from '@/libs/util'

export const crudOptions = (vm) => {
  return {
    pagination: { // 翻页配置
      // 支持el-pagination
      currentPage: 1,
      pageSize: 10,
      total: 10,
      storage: true, // 本地保存用户每页条数修改，刷新不会丢失该修改，false=关闭
      // storage:'keysuffix'// 传入字符串，将会给保存的key增加一个后缀，用于区分同一个页面下多个crud
      request: {
        current: 'page',
        size: 'limit'
      },
      response: {
        current: 'page', // 当前页码 ret.data.current
        size: (data) => {
          return data.size
        }, // 每页条数，ret.data.size, 你也可以配置一个方法，自定义返回
        total: 'total', // 总记录数 ret.data.total
        records: 'records' // 列表数组 ret.data.records
      }
    },
    pageOptions: {
      compact: true
    },
    searchOptions: {
      show: true
    },
    options: {
      tableType: 'vxe-table',
      rowKey: false, // 必须设置，true or false
      rowId: 'id',
      height: '100%', // 表格高度100%, 使用toolbar必须设置
      // width: '55%',
      // border: true,
      highlightCurrentRow: false,
      defaultExpandAll: true,
      cellStyle({row, column, rowIndex, columnIndex}) {
        // 列表单元格样式
        return {
          'white-space': 'nowrap',
          overflow: 'hidden',
          padding: 0,
          height: '10px'
        }
      }
    },
    rowHandle: {
      // 每行后边操作的按钮
      width: 270, // 操作列宽度
      view: {
        show: false,
        thin: true,
        text: '',
        disabled() {
          return !vm.hasPermissions('Retrieve')
        }
      },
      edit: {
        show: true,
        thin: true,
        text: '',
        disabled() {
          true
        }
      },
      remove: {
        thin: true,
        text: '',
        disabled() {
          return !vm.hasPermissions('Delete')
        }
      },
      custom: [
      ]
    },
    indexRow: false,

    viewOptions: {
      componentType: 'form'
    },
    formOptions: {
      width: '60%',
      center: true, // 标题与按钮居中布局
      // center: true, // 标题与按钮居中布局
      labelPosition: 'left',
      gutter: 20,
      defaultSpan: 12 // 默认的表单 span
    },
    formGroup: {},
    columns: [
      {
        title: '项目',
        key: 'xiangmu',
        sortable: true,
        type: 'select',
        search: {
          disabled: false,
          component: {
            props: {
              clearable: true
              // size: 'mini'
            }
          }
        },
        form: {
          component: {
            show: true, // 是否在新增表单显示
            span: 12,
            disabled: false,
            props: {
              clearable: true
              // size: 'mini'
            },
            rules: [{required: true, message: '施工段不能为空'}]
          },
          valueChange(key, value, form, {getColumn, mode, component, immediate, getComponent}) {
            return request({
              url: '/sche/data/' + value + '/danwei/',
              method: 'get',
              data: {}
            }).then((res) => {
              // 非IE下载
              getColumn('danwei').component.props.options = res
              // getColumn('pre').component.props.options = res
              console.log(res, form, getComponent)
            })
          }
        },
        dict: {
          getData() {
            return request({
              url: '/sche/data/xiangmu/',
              method: 'get',
              data: {}
            }).then((res) => {
              // 非IE下载
              console.log(res)
              return res
            })
          },
          value: 'id',
          label: 'name'
        },
        valueBuilder(row, key) {
          // 传入数据时执行
          // row.area = row.county_code.substring(0, 7)
        }
        // disabled: true , // 是否在列表中显示
      },
      {
        title: '单位工程',
        key: 'danwei',
        sortable: true,
        type: 'select',
        search: {
          disabled: false,
          component: {
            props: {
              clearable: true
              // size: 'mini'
            }
          }
        },
        form: {
          component: {
            show: true, // 是否在新增表单显示
            span: 12,
            disabled: false,
            props: {
              clearable: true
              // size: 'mini'
            },
            rules: [{required: true, message: '分部工程不能为空'}]
          },
          valueChange(key, value, form, {getColumn, mode, component, immediate, getComponent}) {
            return request({
              url: '/sche/data/' + value + '/danxiang/',
              method: 'get',
              data: {}
            }).then((res) => {
              // 非IE下载
              getColumn('danxiang').component.props.options = res
            })
          }
        },
        dict: {
          getData() {
            return request({
              url: '/sche/data/0/danwei/',
              method: 'get',
              data: {}
            }).then((res) => {
              // 非IE下载
              console.log(res)
              return res
            })
          },
          value: 'id',
          label: 'name'
        }

        // disabled: true , // 是否在列表中显示
      },
      {
        title: '单项工程',
        key: 'danxiang',
        sortable: true,
        type: 'select',
        search: {
          disabled: false,
          component: {
            props: {
              clearable: true
              // size: 'mini'
            }
          }
        },
        form: {
          component: {
            show: true, // 是否在新增表单显示
            span: 12,
            disabled: false,
            props: {
              clearable: true
              // size: 'mini'
            },
            rules: [{required: true, message: '分部工程不能为空'}]
          },
          valueChange(key, value, form, {getColumn, mode, component, immediate, getComponent}) {
            return request({
              url: '/sche/data/' + value + '/fenbu/',
              method: 'get',
              data: {}
            }).then((res) => {
              // 非IE下载
              getColumn('pre').component.props.options = res
            })
          }
        },
        dict: {
          getData() {
            return request({
              url: '/sche/data/0/danxiang/',
              method: 'get',
              data: {}
            }).then((res) => {
              // 非IE下载
              console.log(res)
              return res
            })
          },
          value: 'id',
          label: 'name'
        }

        // disabled: true , // 是否在列表中显示
      },
      {
        title: '紧前工作',
        key: 'pre',
        sortable: false,
        type: 'select',
        search: {
          disabled: true,
          component: {
            props: {
              clearable: true
              // size: 'mini'
            }
          }
        },
        form: {
          component: {
            show: true, // 是否在新增表单显示
            span: 12,
            disabled: false,
            props: {
              clearable: true
              // size: 'mini'
            },
            rules: [{required: false, message: '施工段不能为空'}]
          }
        },
        dict: {
          getData() {
            return request({
              url: '/sche/data/0/fenbu/',
              method: 'get',
              data: {}
            }).then((res) => {
              // 非IE下载
              console.log(res)
              return res
            })
          },
          value: 'id',
          label: 'name'
        },
        valueBuilder(row, key) {
          // 传入数据时执行
          // row.area = row.county_code.substring(0, 7)
        }
        // disabled: true , // 是否在列表中显示
      },
      {
        title: '名称',
        key: 'name',
        sortable: true,
        // type: 'select',
        search: {
          disabled: false,
          component: {
            props: {
              clearable: true
            }
          }
        },
        form: {}
        // disabled: true , // 是否在列表中显示
      },
      {
        title: '开始/结束时间',
        key: 'during',
        sortable: true,
        type: 'daterange',
        search: {
          disabled: true
        },
        form: {
          component: {
            'value-format': 'yyyy-MM-dd'
          },
          valueChange(
            key,
            value,
            form,
            {getColumn, mode, component, immediate, getComponent}
          ) {
            console.log(value)
            if (value[0] && value[1]) {
              const start = new Date(value[0])
              const end = new Date(value[1])
              // console.log();
              form.len = parseInt((end - start) / (1000 * 60 * 60 * 24))
            }
            // form表单数据change事件，表单值有改动将触发此事件
          }
        }
        // disabled: true , // 是否在列表中显示

      },
      {
        title: '时长',
        key: 'len',
        sortable: true,
        // type: 'select',
        search: {
          disabled: true
        },
        form: {}
        // disabled: true , // 是否在列表中显示
      }
    ]
  }
}
