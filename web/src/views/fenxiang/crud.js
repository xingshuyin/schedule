import { request } from "@/api/service";
import { BUTTON_STATUS_BOOL } from "@/config/button";
import { urlPrefix as deptPrefix, addColumn } from "./api";
import XEUtils from "xe-utils";
import util from "@/libs/util";

export const crudOptions = (vm) => {
  return {
    // pagination: { //翻页配置
    //     // 支持el-pagination
    //     currentPage: 1,
    //     pageSize: 10,
    //     total: 10,
    //     storage: true, //本地保存用户每页条数修改，刷新不会丢失该修改，false=关闭
    //     // storage:'keysuffix'// 传入字符串，将会给保存的key增加一个后缀，用于区分同一个页面下多个crud
    //     request: {
    //         current: 'page',
    //         size: 'limit'
    //     },
    //     response: {
    //         current: 'page', // 当前页码 ret.data.current
    //         size: (data) => {
    //             return data.size
    //         }, // 每页条数，ret.data.size, 你也可以配置一个方法，自定义返回
    //         total: 'total', // 总记录数 ret.data.total
    //         records: 'records' // 列表数组 ret.data.records
    //     }
    // },
    pageOptions: {
      compact: true,
    },
    searchOptions: {
      show: true,
    },
    options: {
      tableType: "vxe-table",
      // rowKey: true, // 必须设置，true or false
      rowId: "id",
      height: "100%", // 表格高度100%, 使用toolbar必须设置
      // width: '55%',
      // border: true,
      highlightCurrentRow: false,
      defaultExpandAll: true,
      cellStyle({ row, column, rowIndex, columnIndex }) {
        // 列表单元格样式
        return {
          "white-space": "nowrap",
          overflow: "hidden",
          padding: 0,
          height: "10px",
        };
      },
    },
    rowHandle: {
      //每行后边操作的按钮
      width: 270, //操作列宽度
      view: {
        show: false,
        thin: true,
        text: "",
        disabled() {
          return !vm.hasPermissions("Retrieve");
        },
      },
      edit: {
        show: true,
        thin: true,
        text: "",
        disabled() {
          true;
        },
      },
      remove: {
        thin: true,
        text: "",
        disabled() {
          return !vm.hasPermissions("Delete");
        },
      },
      custom: [
        { icon: "", thin: true, text: "查看", emit: "detail", size: "small" },
        {
          icon: "",
          thin: true,
          text: "通过",
          emit: "pass",
          size: "small",
          disabled(context, row) {
            return row.statue == 1 || row.statue == 3;
          },
        },
        {
          icon: "",
          thin: true,
          text: "不通过",
          emit: "notpass",
          size: "small",
          disabled(context, row) {
            return row.statue == 1 || row.statue == 3;
          },
        },
      ],
    },
    indexRow: false,

    viewOptions: {
      componentType: "form",
    },
    formOptions: {
      width: "60%",
      center: true, // 标题与按钮居中布局
      // center: true, // 标题与按钮居中布局
      labelPosition: "left",
      gutter: 20,
      defaultSpan: 12, // 默认的表单 span
    },
    columns: [
      {
        title: "名称",
        key: "name",
        sortable: true,
        // type: 'select',
        search: {
          disabled: false,
          component: {
            props: {
              clearable: true,
            },
          },
        },
        form: {},
        valueBuilder(row, key) {
          // 传入数据时执行
        },
        // disabled: true , // 是否在列表中显示
      },
      {
        title: "施工段",
        key: "shigongduan",
        sortable: true,
        type: "select",
        search: {
          disabled: false,
          component: {
            props: {
              clearable: true,
              // size: 'mini'
            },
          },
        },
        form: {
          component: {
            show: true, //是否在新增表单显示
            span: 12,
            disabled: false,
            props: {
              clearable: true,
              // size: 'mini'
            },
            rules: [{ required: true, message: "施工段不能为空" }],
          },
        },
        dict: {
          getData() {
            return request({
              url: "/sche/data/duan",
              method: "get",
              data: {},
            }).then((res) => {
              // 非IE下载
              console.log(res);
              return res;
            });
          },
          value: "id",
          label: "name",
        },
        valueBuilder(row, key) {
          // 传入数据时执行
          // row.area = row.county_code.substring(0, 7)
        },
        valueResolve(row, key) {
          // 传出数据时执行
          // row.area = row.area[2]
        },
        // disabled: true , // 是否在列表中显示
      },
      {
        title: "紧前工作",
        key: "pre",
        sortable: true,
        type: "select",
        search: {
          disabled: false,
          component: {
            props: {
              clearable: true,
              // size: 'mini'
            },
          },
        },
        form: {
          component: {
            show: true, //是否在新增表单显示
            span: 12,
            disabled: false,
            props: {
              clearable: true,
              // size: 'mini'
            },
            rules: [{ required: false, message: "施工段不能为空" }],
          },
        },
        dict: {
          getData() {
            return request({
              url: "/sche/data/fenxiang",
              method: "get",
              data: {},
            }).then((res) => {
              // 非IE下载
              console.log(res);
              return res;
            });
          },
          value: "id",
          label: "name",
        },
        valueBuilder(row, key) {
          // 传入数据时执行
          // row.area = row.county_code.substring(0, 7)
        },
        valueResolve(row, key) {
          // 传出数据时执行
          // row.area = row.area[2]
        },
        // disabled: true , // 是否在列表中显示
      },
      {
        title: "开始/结束时间",
        key: "during",
        sortable: true,
        type: "daterange",
        search: {
          disabled: true,
        },
        form: {
          component: {
            "value-format": "yyyy-MM-dd",
          },
          valueChange(
            key,
            value,
            form,
            { getColumn, mode, component, immediate, getComponent }
          ) {
            console.log(value);
            if (value[0] && value[1]) {
              const start = new Date(value[0]);
              const end = new Date(value[1]);
              // console.log();
              form.length = parseInt((end - start) / (1000 * 60 * 60 * 24));
            }
            // form表单数据change事件，表单值有改动将触发此事件
          },
        },
        // disabled: true , // 是否在列表中显示
        valueBuilder(row, key) {
          // 传入数据时执行
        },
        valueResolve(row, key) {
          // 传出数据时执行
        },
      },
      {
        title: "时长",
        key: "length",
        sortable: true,
        // type: 'select',
        search: {
          disabled: true,
        },
        form: {},
        valueBuilder(row, key) {
          // 传入数据时执行
        },
        // disabled: true , // 是否在列表中显示
      },
      {
        title: "提前插入时长",
        key: "charu",
        sortable: true,
        type: "number",
        search: {
          disabled: true,
        },
        form: {},
        valueBuilder(row, key) {
          // 传入数据时执行
        },
        // disabled: true , // 是否在列表中显示
      },
      {
        title: "工艺间歇时间",
        key: "jianxie",
        sortable: true,
        type: "number",
        search: {
          disabled: true,
        },
        form: {},
        valueBuilder(row, key) {
          // 传入数据时执行
        },
        // disabled: true , // 是否在列表中显示
      },
      // {  //http://d2-crud-plus.docmirror.cn/d2-crud-plus/guide/extends/uploader.html#%E5%BC%95%E5%85%A5
      //     title: '图片',
      //     key: 'media',
      //     type: 'image-uploader',
      //     width: 500,
      //     align: 'left',
      //     index: 5,
      //     disabled: false, // 是否在列表中显示
      //     form: {
      //         component: {
      //             disabled: true,
      //             props: {
      //                 uploader: {
      //                     action: '/backend/upload/',
      //                     name: 'file',  //file的key
      //                     autoUpload: false,  //上传表单时上传
      //                     headers: {
      //                         Authorization: 'JWT ' + util.cookies.get('token')
      //                     },
      //                     data() { //上传附加参数

      //                     },
      //                     type: 'form',
      //                     successHandle(ret, option) {  // 上传成功后，后台返回结果处理
      //                         console.log('successHandle', ret, option)
      //                         if (ret == null || ret === '') {
      //                             throw new Error('上传失败')
      //                         }

      //                         return { url: ret.data.url, key: 'img_upload' }
      //                     },
      //                     returnType: 'key',
      //                     // buildUrl (value, item) {
      //                     //     return '/api/upload/form/download?key=' + value
      //                     // },
      //                 },
      //                 remove: d => {
      //                     console.log('onRemove', d)
      //                 },
      //                 elProps: { // 与el-uploader 配置一致
      //                     multiple: true,
      //                     limit: 5, // 限制5个文件
      //                     // onPreview: (file) => { // 自定义点击事件
      //                     //     window.open(file.url)
      //                     // },
      //                     // listType: 'picture-card'
      //                     // showFileList: false,  //不展示上传的文件
      //                 },
      //                 // sizeLimit: 100 * 1024 // 不能超过限制
      //             },
      //             span: 24
      //         },
      //         // helper: '限制文件大小不能超过50k'
      //     },
      //     valueBuilder(row, key) { // 传入数据时执行
      //         row.media = row.tree.media
      //     },
      // }
    ],
  };
};
