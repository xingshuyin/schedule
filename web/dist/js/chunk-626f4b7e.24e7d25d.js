(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-626f4b7e","chunk-2d0d3265"],{5217:function(e,t,n){"use strict";n.r(t),n.d(t,"crudOptions",(function(){return r}));var a=n("22ce"),r=(n("ab1d"),n("5c12"),n("c695"),n("c276"),function(e){return{pagination:{currentPage:1,pageSize:10,total:10,storage:!0,request:{current:"page",size:"limit"},response:{current:"page",size:function(e){return e.size},total:"total",records:"records"}},pageOptions:{compact:!0},searchOptions:{show:!0},options:{tableType:"vxe-table",rowKey:!1,rowId:"id",height:"100%",highlightCurrentRow:!1,defaultExpandAll:!0,cellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return{"white-space":"nowrap",overflow:"hidden",padding:0,height:"10px"}}},rowHandle:{width:270,view:{show:!0,thin:!0,text:"",disabled:function(){return!e.hasPermissions("Retrieve")}},edit:{show:!0,thin:!0,text:"",disabled:function(){}},remove:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Delete")}},custom:[]},indexRow:!1,viewOptions:{componentType:"form"},formOptions:{width:"60%",center:!0,labelPosition:"left",gutter:20,defaultSpan:12},formGroup:{},columns:[{title:"材料名称",key:"material",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"材料名称不能为空"}]},valueChange:function(e,t,n,r){r.getColumn,r.mode,r.component,r.immediate,r.getComponent;Object(a["c"])({url:"/sche/data/"+t+"/unit/",method:"get",data:{}}).then((function(e){n.unit=e.data.unit}))}},dict:{getData:function(e,t,n){n.form,n.component;return Object(a["c"])({url:"/sche/data/material/",method:"get",data:{}}).then((function(e){return console.log(e),e}))},value:"id",label:"name"}},{title:"项目",key:"xiangmu",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"施工段不能为空"}]},valueChange:function(e,t,n,a){var r=a.getColumn;a.mode,a.component,a.immediate,a.getComponent;r("danxiang").component.props.dict.url="/sche/data/"+t+"/danxiang/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(a["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/xiangmu/",value:"id",label:"name"},valueBuilder:function(e,t){}},{title:"单项工程",key:"danxiang",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"分部工程不能为空"}]},valueChange:function(e,t,n,a){var r=a.getColumn;a.mode,a.component,a.immediate,a.getComponent;r("danwei").component.props.dict.url="/sche/data/"+t+"/danwei/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(a["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/danxiang/",value:"id",label:"name"}},{title:"单位工程",key:"danwei",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"单位工程不能为空"}]},valueChange:function(e,t,n,a){var r=a.getColumn;a.mode,a.component,a.immediate,a.getComponent;r("fenbu").component.props.dict.url="/sche/data/"+t+"/fenbu/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(a["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/danwei/",value:"id",label:"name"}},{title:"分部工程",key:"fenbu",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"分部工程不能为空"}]},valueChange:function(e,t,n,a){var r=a.getColumn;a.mode,a.component,a.immediate,a.getComponent;r("fenxiang").component.props.dict.url="/sche/data/"+t+"/fenxiang/"}},dict:{getData:function(e,t,n){n.form,n.component;return Object(a["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/fenbu/",value:"id",label:"name"}},{title:"分项工程",key:"fenxiang",sortable:!0,type:"select",search:{disabled:!1,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"分项工程不能为空"}]}},dict:{getData:function(e,t,n){n.form,n.component;return Object(a["c"])({url:e,method:"get",data:{}}).then((function(e){return e}))},url:"/sche/data/0/fenxiang/",value:"id",label:"name"}},{title:"领料人",key:"people",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!1,message:""}]}}},{title:"数量",key:"quantity",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"数量不能为空"}]}}},{title:"单位",key:"unit",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!0,props:{clearable:!0},rules:[{required:!0,message:"单位不能为空"}]}}}]}})},"5c12":function(e,t,n){"use strict";n.r(t),n.d(t,"urlPrefix",(function(){return l})),n.d(t,"GetList",(function(){return c})),n.d(t,"createObj",(function(){return i})),n.d(t,"UpdateObj",(function(){return u})),n.d(t,"DelObj",(function(){return s}));var a=n("22ce"),r=n("c695"),o=n.n(r),l="/sche/materialout/";function c(e){return e.limit=999,Object(a["c"])({url:l,method:"get",params:e}).then((function(e){return e.data.data=o.a.toArrayTree(e.data.data,{parentKey:"parent",strict:!1}),e}))}function i(e){return console.log("createObj",e),Object(a["c"])({url:l,method:"post",data:e})}function u(e){return Object(a["c"])({url:l+e.id+"/",method:"put",data:e})}function s(e){return Object(a["c"])({url:l+e+"/",method:"delete",data:{id:e}})}},ab1d:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return c}));n("d81d");var a={1:"success",true:"success",0:"danger",false:"danger",Search:"warning",Update:"primary",Create:"success",Retrieve:"info",Delete:"danger"};function r(e){return e.map((function(e){return{label:e.label,value:e.value,color:a[e.value]}}))}var o=r([{label:"启用",value:!0},{label:"禁用",value:!1}]),l=r([{label:"启用",value:1},{label:"禁用",value:0}]),c=(r([{label:"是",value:1},{label:"否",value:0}]),r([{label:"是",value:!0},{label:"否",value:!1}]))}}]);