(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213d14"],{adfa:function(e,t,n){"use strict";n.r(t),n.d(t,"crudOptions",(function(){return a}));var o=n("22ce"),a=function(e){return{pagination:{currentPage:1,pageSize:10,total:10,storage:!0,request:{current:"page",size:"limit"},response:{current:"page",size:function(e){return e.size},total:"total",records:"records"}},pageOptions:{compact:!0},searchOptions:{show:!0},options:{tableType:"vxe-table",rowKey:!1,rowId:"id",height:"100%",highlightCurrentRow:!1,defaultExpandAll:!0,cellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return{"white-space":"nowrap",overflow:"hidden",padding:0,height:"10px"}}},rowHandle:{width:270,view:{show:!1,thin:!0,text:"",disabled:function(){return!e.hasPermissions("Retrieve")}},edit:{show:!0,thin:!0,text:"",disabled:function(){}},remove:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Delete")}},custom:[]},indexRow:!1,viewOptions:{componentType:"form"},formOptions:{width:"60%",center:!0,labelPosition:"left",gutter:20,defaultSpan:12},formGroup:{},columns:[{title:"项目",key:"xiangmu",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0},valueChange:function(e,t,n,o){var a=o.getColumn;o.mode,o.component,o.immediate,o.getComponent;console.log("search change"),a("danxiang").component.props.dict.url="/sche/data/"+t+"/danxiang/"}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"施工段不能为空"}]},valueChange:function(e,t,n,o){var a=o.getColumn;o.mode,o.component,o.immediate,o.getComponent;a("danxiang").component.props.dict.url="/sche/data/"+t+"/danxiang/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(o["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/xiangmu/",value:"id",label:"name"},valueBuilder:function(e,t){}},{title:"单项工程",key:"danxiang",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"单项工程不能为空"}]},valueChange:function(e,t,n,o){var a=o.getColumn;o.mode,o.component,o.immediate,o.getComponent;a("danwei").component.props.dict.url="/sche/data/"+t+"/danwei/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(o["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/danxiang/",value:"id",label:"name"}},{title:"单位工程",key:"danwei",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"单位工程不能为空"}]},valueChange:function(e,t,n,o){var a=o.getColumn;o.mode,o.component,o.immediate,o.getComponent;a("fenbu").component.props.dict.url="/sche/data/"+t+"/fenbu/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(o["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/danwei/",value:"id",label:"name"}},{title:"分部工程",key:"fenbu",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"分部工程不能为空"}]},valueChange:function(e,t,n,o){var a=o.getColumn;o.mode,o.component,o.immediate,o.getComponent;a("pre").component.props.dict.url="/sche/data/"+t+"/fenxiang/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(o["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/fenbu/",value:"id",label:"name"}},{title:"紧前工作",key:"pre",sortable:!0,type:"select",search:{disabled:!0,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!1,message:"施工段不能为空"}]}},dict:{getData:function(e,t,n){n.form,n.component;return Object(o["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/fenxiang/",value:"id",label:"name"}},{title:"名称",key:"name",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{}},{title:"开始/结束时间",key:"during",sortable:!0,type:"daterange",search:{disabled:!0},form:{component:{"value-format":"yyyy-MM-dd"},valueChange:function(e,t,n,o){o.getColumn,o.mode,o.component,o.immediate,o.getComponent;if(console.log(t),t[0]&&t[1]){var a=new Date(t[0]),r=new Date(t[1]);n.len=parseInt((r-a)/864e5)}}}},{title:"时长",key:"len",sortable:!0,search:{disabled:!0},form:{}},{title:"工程量",key:"quantity",sortable:!0,type:"number",search:{disabled:!0,component:{props:{clearable:!0}}},form:{valueChange:function(e,t,n,o){o.getColumn,o.mode,o.component,o.immediate,o.getComponent;t&&n.price&&(n.earn=t*n.price)}}},{title:"单价",key:"price",sortable:!0,type:"number",search:{disabled:!0,component:{props:{clearable:!0}}},form:{valueChange:function(e,t,n,o){o.getColumn,o.mode,o.component,o.immediate,o.getComponent;t&&n.quantity&&(n.earn=t*n.quantity)}}},{title:"产值",key:"earn",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{}},{title:"描述",key:"detail",sortable:!0,type:"text-area",search:{disabled:!0,component:{props:{clearable:!0}}},form:{}}]}}}}]);