(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213937"],{aced:function(e,t,i){"use strict";i.r(t),i.d(t,"crudOptions",(function(){return o}));var o=function(e){return{pageOptions:{compact:!0},options:{tableType:"vxe-table",rowKey:!0,width:"100%",height:"100%"},rowHandle:{edit:{thin:!0,text:"编辑",disabled:function(){return!e.hasPermissions("Update")}},remove:{thin:!0,text:"删除",disabled:function(){return!e.hasPermissions("Delete")}}},indexRow:{title:"序号",align:"center",width:100},viewOptions:{disabled:!0,componentType:"form"},formOptions:{defaultSpan:24,width:"35%"},columns:[{title:"关键词",key:"search",show:!1,disabled:!0,search:{disabled:!1},form:{disabled:!0,component:{placeholder:"请输入关键字"}},view:{disabled:!0}},{title:"ID",key:"id",show:!1,width:90,form:{disabled:!0}},{title:"名称",key:"name",sortable:!0,search:{disabled:!1},type:"input",form:{rules:[{required:!0,message:"名称必填项"}],component:{placeholder:"请输入名称"},itemProps:{class:{yxtInput:!0}}}},{title:"key值",key:"value",sortable:!0,search:{disabled:!1},type:"input",form:{rules:[{required:!0,message:"key值必填项"}],component:{placeholder:"请输入key值"},itemProps:{class:{yxtInput:!0}}}},{title:"备注",key:"description",show:!1,search:{disabled:!0},type:"textarea",form:{component:{placeholder:"请输入内容",showWordLimit:!0,maxlength:"200",props:{type:"textarea"}}}},{title:"创建人",show:!1,width:100,key:"modifier_name",form:{disabled:!0}},{title:"更新时间",key:"update_datetime",width:160,type:"datetime",sortable:!0,form:{disabled:!0}},{title:"创建时间",key:"create_datetime",width:160,type:"datetime",sortable:!0,form:{disabled:!0}}]}}}}]);