(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213387"],{ac6e:function(e,t,o){"use strict";o.r(t),o.d(t,"crudOptions",(function(){return i}));var i=function(e){return{pageOptions:{compact:!0},options:{tableType:"vxe-table",rowKey:!0,rowId:"id",height:"100%",highlightCurrentRow:!1},rowHandle:{fixed:"right",view:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Retrieve")}},width:70,edit:{thin:!0,text:"",show:!1,disabled:function(){return!e.hasPermissions("Update")}},remove:{thin:!0,text:"删除",show:!1,disabled:function(){return!e.hasPermissions("Delete")}}},viewOptions:{componentType:"form"},formOptions:{disabled:!0,defaultSpan:12},indexRow:{title:"序号",align:"center",width:70},columns:[{title:"关键词",key:"search",show:!1,disabled:!0,search:{disabled:!1},form:{show:!1,component:{placeholder:"请输入关键词"}}},{title:"ID",key:"id",width:90,disabled:!0,form:{disabled:!0}},{title:"请求模块",key:"request_modular",search:{disabled:!1},width:140,type:"input",form:{disabled:!0,component:{placeholder:"请输入请求模块"}}},{title:"请求地址",key:"request_path",search:{disabled:!1},width:220,type:"input",form:{disabled:!0,component:{placeholder:"请输入请求地址"}}},{title:"请求参数",key:"request_body",search:{disabled:!0},disabled:!0,type:"textarea",form:{disabled:!0,component:{props:{type:"textarea"},autosize:{minRows:2,maxRows:8},placeholder:"请输入关键词"}}},{title:"请求方法",key:"request_method",width:80,type:"input",search:{disabled:!1},form:{disabled:!0,component:{placeholder:"请输入请求方法"}},component:{props:{color:"auto"}}},{title:"操作说明",key:"request_msg",disabled:!0,form:{component:{span:12}}},{title:"IP地址",key:"request_ip",search:{disabled:!1},width:130,type:"input",form:{disabled:!0,component:{placeholder:"请输入IP地址"}},component:{props:{color:"auto"}}},{title:"请求浏览器",key:"request_browser",width:180,type:"input",form:{disabled:!0},component:{props:{color:"auto"}}},{title:"响应码",key:"response_code",search:{disabled:!0},width:80,type:"input",form:{disabled:!0},component:{props:{color:"auto"}}},{title:"操作系统",key:"request_os",disabled:!0,search:{disabled:!0},type:"input",form:{disabled:!0},component:{props:{color:"auto"}}},{title:"返回信息",key:"json_result",search:{disabled:!0},minWidth:240,type:"input",form:{disabled:!0},component:{props:{color:"auto"}}},{title:"操作人",width:100,key:"creator_name",form:{disabled:!0}},{title:"更新时间",key:"update_datetime",width:160,show:!1,type:"datetime",form:{disabled:!0}},{fixed:"right",title:"操作时间",key:"create_datetime",width:160,type:"datetime",form:{disabled:!0}}]}}}}]);