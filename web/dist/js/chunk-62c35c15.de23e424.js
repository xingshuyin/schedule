(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62c35c15","chunk-3810ab6f","chunk-2d23014c"],{5907:function(e,t,r){},ab1d:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return i}));r("d81d");var n={1:"success",true:"success",0:"danger",false:"danger",Search:"warning",Update:"primary",Create:"success",Retrieve:"info",Delete:"danger"};function a(e){return e.map((function(e){return{label:e.label,value:e.value,color:n[e.value]}}))}var o=a([{label:"启用",value:!0},{label:"禁用",value:!1}]),s=a([{label:"启用",value:1},{label:"禁用",value:0}]),i=(a([{label:"是",value:1},{label:"否",value:0}]),a([{label:"是",value:!0},{label:"否",value:!1}]))},c7df:function(e,t,r){"use strict";r("5907")},ceab:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",{class:{"page-compact":e.crud.pageOptions.compact}},[r("d2-crud-x",e._g(e._b({ref:"d2Crud",attrs:{"selection-row":""},on:{detail:e.detail,pass:e.pass,notpass:e.notpass}},"d2-crud-x",e._crudProps,!1),e._crudListeners),[r("div",{attrs:{slot:"header"},slot:"header"},[r("crud-search",{ref:"search",attrs:{options:e.crud.searchOptions},on:{submit:e.handleSearch}}),r("el-button-group",[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"Create",expression:"'Create'"}],attrs:{size:"small",type:"primary"},on:{click:e.addRow}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 新增 ")])],1),r("crud-toolbar",{attrs:{search:e.crud.searchOptions.show,compact:e.crud.pageOptions.compact,columns:e.crud.columns},on:{"update:search":function(t){return e.$set(e.crud.searchOptions,"show",t)},"update:compact":function(t){return e.$set(e.crud.pageOptions,"compact",t)},refresh:function(t){return e.doRefresh()},"columns-filter-changed":e.handleColumnsFilterChanged}})],1)])],1)},a=[],o=(r("b0c0"),r("eb81")),s=r("fa00"),i=r("1fbf"),c={name:"material",mixins:[i["d2CrudPlus"].crud],data:function(){return{}},methods:{getCrudOptions:function(){return Object(s["crudOptions"])(this)},pageRequest:function(e){return o["GetList"](e)},addRequest:function(e){return console.log("addRequest",e),i["d2CrudPlus"].util.dict.clear(),o["createObj"](e)},updateRequest:function(e){return i["d2CrudPlus"].util.dict.clear(),o["UpdateObj"](e)},delRequest:function(e){return o["DelObj"](e.id)},createPermission:function(e){this.$router.push({name:"menuButton",params:{id:e.row.id},query:{name:e.row.name}})},detail:function(e){e.index;var t=e.row,r=this;if(console.log("这里是个方法码",t.tree,r.dialogVisible),r.tree_details=t.tree,console.log("这里是个方法码1111"),r.tree_type=t.tree.tree_type,console.log("这里是个方法码333"),r.tree_details.images)for(var n in console.log("这里是个方法码444"),r.tree_details.images)console.log("是这里吗",r.tree_details.images[n]),this.tree_details.images[n]="http://39.105.11.4:81/backend/"+this.tree_details.images[n];console.log("这里是个方法码222"),!1===r.dialogVisible&&(r.dialogVisible=!0)}}},u=c,l=(r("c7df"),r("2877")),d=Object(l["a"])(u,n,a,!1,null,null,null);t["default"]=d.exports},eb81:function(e,t,r){"use strict";r.r(t),r.d(t,"urlPrefix",(function(){return s})),r.d(t,"GetList",(function(){return i})),r.d(t,"createObj",(function(){return c})),r.d(t,"UpdateObj",(function(){return u})),r.d(t,"DelObj",(function(){return l}));var n=r("22ce"),a=r("c695"),o=r.n(a),s="/sche/material/";function i(e){return e.limit=999,Object(n["c"])({url:s,method:"get",params:e}).then((function(e){return e.data.data=o.a.toArrayTree(e.data.data,{parentKey:"parent",strict:!1}),e}))}function c(e){return console.log("createObj",e),Object(n["c"])({url:s,method:"post",data:e})}function u(e){return Object(n["c"])({url:s+e.id+"/",method:"put",data:e})}function l(e){return Object(n["c"])({url:s+e+"/",method:"delete",data:{id:e}})}},fa00:function(e,t,r){"use strict";r.r(t),r.d(t,"crudOptions",(function(){return n}));r("22ce"),r("ab1d"),r("eb81"),r("c695"),r("c276");var n=function(e){return{pagination:{currentPage:1,pageSize:10,total:10,storage:!0,request:{current:"page",size:"limit"},response:{current:"page",size:function(e){return e.size},total:"total",records:"records"}},pageOptions:{compact:!0},searchOptions:{show:!0},options:{tableType:"vxe-table",rowKey:!1,rowId:"id",height:"100%",highlightCurrentRow:!1,defaultExpandAll:!0,cellStyle:function(e){e.row,e.column,e.rowIndex,e.columnIndex;return{"white-space":"nowrap",overflow:"hidden",padding:0,height:"10px"}}},rowHandle:{width:270,view:{show:!0,thin:!0,text:"",disabled:function(){return!e.hasPermissions("Retrieve")}},edit:{show:!0,thin:!0,text:"",disabled:function(){}},remove:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Delete")}},custom:[]},indexRow:!1,viewOptions:{componentType:"form"},formOptions:{width:"60%",center:!0,labelPosition:"left",gutter:20,defaultSpan:12},formGroup:{},columns:[{title:"材料名称",key:"name",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"名称不能为空"}]}}},{title:"数量",key:"quantity",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!0,props:{clearable:!0},rules:[{required:!1,message:""}]}}},{title:"单位",key:"unit",sortable:!0,search:{disabled:!0,component:{props:{clearable:!0}}},form:{component:{show:!0,span:12,disabled:!1,props:{clearable:!0},rules:[{required:!0,message:"单位不能为空"}]}}}]}}}}]);