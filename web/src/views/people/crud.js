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
        show: true,
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
      custom: []
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
        title: '姓名',
        key: 'name',
        sortable: true,
        // type: 'select',
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
            rules: [{required: true, message: '名称不能为空'}]
          }
        }
        // disabled: true , // 是否在列表中显示
      },
      {
        title: '手机号',
        key: 'phone',
        sortable: true,
        // type: 'select',
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
            rules: [{required: true, message: '名称不能为空'}]
          }
        }
        // disabled: true , // 是否在列表中显示
      },
      {
        title: '性别',
        key: 'gender',
        sortable: true,
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
            rules: [{required: false, message: ''}]
          }
        },
        dict: {
          data: [
            {
              value: 1,
              label: '男'
            },
            {
              value: 2,
              label: '女'
            },
          ]
        }
        // disabled: true , // 是否在列表中显示
      },
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
            getColumn('danxiang').component.props.dict.url = '/sche/data/' + value + '/danxiang/'
          }
        },
        dict: {
          getData(url, dict, {form, component}) {
            return request({
              url: url,
              method: 'get',
              data: {}
            }).then((res) => {
              return res
            })
          },
          url: '/sche/data/xiangmu/',
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
            getColumn('danwei').component.props.dict.url = '/sche/data/' + value + '/danwei/'
          }
        },
        dict: {
          getData(url, dict, {form, component}) {
            return request({
              url: url,
              method: 'get',
              data: {}
            }).then((res) => {
              return res
            })
          },
          url: '/sche/data/0/danxiang/',
          value: 'id',
          label: 'name'
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
            rules: [{required: true, message: '单位工程不能为空'}]
          },
          valueChange(key, value, form, {getColumn, mode, component, immediate, getComponent}) {
            getColumn('fenbu').component.props.dict.url = '/sche/data/' + value + '/fenbu/'
          }
        },
        dict: {
          getData(url, dict, {form, component}) {
            return request({
              url: url,
              method: 'get',
              data: {}
            }).then((res) => {
              return res
            })
          },
          url: '/sche/data/0/danwei/',
          value: 'id',
          label: 'name'
        }

        // disabled: true , // 是否在列表中显示
      },

      {
        title: '分部工程',
        key: 'fenbu',
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
            getColumn('fenxiang').component.props.dict.url = '/sche/data/' + value + '/fenxiang/'
          }
        },
        dict: {
          getData(url, dict, {form, component}) {
            return request({
              url: url,
              method: 'get',
              data: {}
            }).then((res) => {
              return res
            })
          },
          url: '/sche/data/0/fenbu/',
          value: 'id',
          label: 'name'
        }

        // disabled: true , // 是否在列表中显示
      },
      {
        title: '分项工程',
        key: 'fenxiang',
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
            rules: [{required: true, message: '分项工程不能为空'}]
          }
        },
        dict: {
          getData(url, dict, {form, component}) {
            return request({
              url: url,
              method: 'get',
              data: {}
            }).then((res) => {
              return res
            })
          },
          url: '/sche/data/0/fenxiang/',
          value: 'id',
          label: 'name'
        }

        // disabled: true , // 是否在列表中显示
      },
    ]
  }
}
