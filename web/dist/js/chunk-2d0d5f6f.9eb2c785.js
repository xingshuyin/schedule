(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5f6f"],{7110:function(e,t,i){"use strict";i.r(t),i.d(t,"crudOptions",(function(){return a}));i("99af");var d=i("c276"),a=function(e){return{pageOptions:{compact:!0},options:{height:"100%"},rowHandle:{width:110,view:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Retrieve")}},edit:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Update")}},remove:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Delete")}}},viewOptions:{componentType:"form"},formOptions:{defaultSpan:12},indexRow:{title:"序号",align:"center",width:100},columns:[{title:"关键词",key:"search",show:!1,disabled:!0,search:{disabled:!1},form:{disabled:!0,component:{placeholder:"请输入关键词"}},view:{disabled:!0}},{title:"ID",key:"id",width:90,disabled:!0,form:{disabled:!0}},{title:"文件名称",key:"name",search:{disabled:!1},width:160,type:"input",form:{component:{placeholder:"请输入文件名称"}}},{title:"文件地址",key:"url",type:"file-uploader",search:{disabled:!0},width:220,valueBuilder:function(e,t){console.log(e,t),e.url="".concat(d["a"].baseURL(),"media/").concat(e.url)}},{title:"文件MD5",key:"md5sum",width:200,search:{disabled:!0},form:{disabled:!1},valueResolve:function(e,t){var i=e[t.key];null!=i&&i instanceof Array&&(i.length>=0?e[t.key]=i[0]:e[t.key]=null)}},{title:"备注",key:"description",show:!1,search:{disabled:!0},type:"textarea",form:{component:{placeholder:"请输入内容",showWordLimit:!0,maxlength:"200",props:{type:"textarea"}}}},{title:"创建人",show:!1,width:100,key:"modifier_name",form:{disabled:!0}},{title:"更新时间",key:"update_datetime",width:160,type:"datetime",form:{disabled:!0}},{title:"创建时间",key:"create_datetime",width:160,type:"datetime",form:{disabled:!0}}]}}}}]);