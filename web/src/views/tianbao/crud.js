export const crudOptions = (vm) => {
  return {
    pageOptions: {
      compact: true // 是否紧凑型页面
    },
    options: {
      lineEdit: {
        // 如下addRow配置，可以将新增行放在表格最后一行
        // addRow (data, row) {
        //   data.push(row)
        //   return data.length - 1 //这里要返回新增行的index
        // },
        validation: true // 行编辑是否需要校验
      },
      height: '100%' // 表格高度100%, 使用toolbar必须设置
    },
    formOptions: {
      type: 'drawer',
      draggable: false,
      fullscreen: false,
      size: '50%',
      saveRemind: true,
      defaultSpan: 12 // 默认的表单 span
    },
    rowHandle: {
      dropdown: {
        atLeast: 2
      },
      width: 260,
      fixed: 'right',
      edit: {
        show: false
      },
      lineEdit: {
        show: true
      }

    },
    columns: [
      {
        title: 'ID',
        key: 'id',
        width: 90,
        form: {
          disabled: true
        }
      },
      {
        title: '名称',
        key: 'name',
        width: 90,
        form: {
          disabled: false,
        }
      },
      {
        title: '开始时间',
        key: 'start',
        sortable: true,
        minWidth: 100,
        type: 'date',
        form: {
          rules: [{ required: true, message: '开始时间必填' }],
          component: {
            show: true,  //是否在新增表单显示
            span: 8,
            props: {
              clearable: true,
            },
            placeholder: '管护单位或个人的时间',
            'value-format': 'yyyy-MM-dd',
          },
        }
      },
      {
        title: '结束时间',
        key: 'end',
        sortable: true,
        minWidth: 100,
        type: 'date',
        form: {
          rules: [{ required: true, message: '结束时间必填' }],
          component: {
            show: true,  //是否在新增表单显示
            span: 8,
            props: {
              clearable: true,
            },
            placeholder: '管护单位或个人的时间',
            'value-format': 'yyyy-MM-dd',
          },
        }
      },
      {
        title: '施工段',
        key: 'shigongduan',
        sortable: false,
        search: {
          disabled: false
        },
        type: 'select',
        form: {
          component: {
            props: {
              filterable: true,
              multiple: false,
              clearable: true
            }
          },
          rules: [{ required: true, message: '此项必填' }]
        },
        dict: {
          data: [{ value: 'sz', label: '深圳' }, { value: 'gz', label: '广州' }, { value: 'wh', label: '武汉' }, { value: 'sh', label: '上海' }]
        },
        minWidth: 100
      },
    ]
  }
}
