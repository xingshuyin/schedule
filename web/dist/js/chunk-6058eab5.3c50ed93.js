(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6058eab5"],{ab1d:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return o})),t.d(a,"d",(function(){return i}));t("d81d");var r={1:"success",true:"success",0:"danger",false:"danger",Search:"warning",Update:"primary",Create:"success",Retrieve:"info",Delete:"danger"};function l(e){return e.map((function(e){return{label:e.label,value:e.value,color:r[e.value]}}))}var n=l([{label:"启用",value:!0},{label:"禁用",value:!1}]),o=l([{label:"启用",value:1},{label:"禁用",value:0}]),i=(l([{label:"是",value:1},{label:"否",value:0}]),l([{label:"是",value:!0},{label:"否",value:!1}]))},cb12:function(e,a,t){"use strict";t.r(a),t.d(a,"crudOptions",(function(){return s}));t("99af");var r=t("22ce"),l=t("ab1d"),n=t("9668"),o=t("c695"),i=t.n(o),s=function(e){return{pagination:!1,pageOptions:{compact:!0},options:{rowId:"id",height:"100%",highlightCurrentRow:!1,defaultExpandAll:!0},rowHandle:{width:140,view:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Retrieve")}},edit:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Update")}},remove:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Delete")}}},indexRow:{title:"序号",align:"center",width:100},viewOptions:{componentType:"form"},formOptions:{defaultSpan:12},columns:[{title:"关键词",key:"search",show:!1,disabled:!0,search:{disabled:!1},form:{disabled:!0,component:{props:{clearable:!0},placeholder:"请输入关键词"}},view:{disabled:!0}},{title:"ID",key:"id",show:!1,disabled:!0,width:90,form:{disabled:!0}},{title:"上级部门",key:"parent",show:!1,search:{disabled:!0},type:"cascader",dict:{cache:!1,url:n["urlPrefix"]+"?limit=999&status=1",isTree:!0,value:"id",label:"name",children:"children",getData:function(e,a){return Object(r["c"])({url:e}).then((function(e){var a=i.a.toArrayTree(e.data.data,{parentKey:"parent",strict:!0});return[{id:"0",name:"根节点",children:a}]}))}},form:{component:{span:12,props:{elProps:{clearable:!0,showAllLevels:!1,props:{checkStrictly:!0,emitPath:!1,clearable:!0}}}}}},{title:"部门名称",key:"name",sortable:!0,treeNode:!0,search:{disabled:!1,component:{props:{clearable:!0}}},width:180,type:"input",form:{rules:[{required:!0,message:"部门名称必填项"}],component:{span:12,props:{clearable:!0},placeholder:"请输入部门名称"},itemProps:{class:{yxtInput:!0}}}},{title:"负责人",key:"owner",sortable:!0,form:{component:{span:12,props:{clearable:!0},placeholder:"请输入负责人"}}},{title:"联系电话",key:"phone",sortable:!0,form:{component:{span:12,props:{clearable:!0},placeholder:"请输入联系电话"}}},{title:"邮箱",key:"email",sortable:!0,form:{component:{span:12,props:{clearable:!0},placeholder:"请输入邮箱"},rules:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]}},{title:"排序",key:"sort",sortable:!0,width:80,type:"number",form:{value:1,component:{span:12,placeholder:"请选择序号"}}},{title:"状态",key:"status",sortable:!0,search:{disabled:!1},width:90,type:"radio",dict:{data:l["a"]},form:{value:!0,component:{span:12,placeholder:"请选择状态"}}}].concat(e.commonEndColumns())}}}}]);