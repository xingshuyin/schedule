(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c443269e","chunk-2d0ea104","chunk-2d0cbec4"],{"4c76":function(e,t,r){"use strict";r.r(t),r.d(t,"urlPrefix",(function(){return o})),r.d(t,"GetList",(function(){return c})),r.d(t,"createObj",(function(){return u})),r.d(t,"UpdateObj",(function(){return d})),r.d(t,"DelObj",(function(){return s}));var n=r("5530"),a=r("22ce"),i=r("c695"),l=r.n(i),o="/api/system/menu/";function c(e){return e.limit=999,Object(a["c"])({url:o,method:"get",params:Object(n["a"])(Object(n["a"])({},e),{},{limit:999})}).then((function(e){return e.data.data=l.a.toArrayTree(e.data.data,{parentKey:"parent",strict:!1}),e}))}function u(e){return Object(a["c"])({url:o,method:"post",data:e})}function d(e){return Object(a["c"])({url:o+e.id+"/",method:"put",data:e})}function s(e){return Object(a["c"])({url:o+e+"/",method:"delete",data:{id:e}})}},5265:function(e,t,r){"use strict";r.r(t),r.d(t,"crudOptions",(function(){return u}));r("ac1f"),r("00b4"),r("d9e2"),r("99af"),r("d81d");var n=r("22ce"),a=r("ab1d"),i=r("4c76"),l=r("8fcc"),o=r("c695"),c=r.n(o),u=function(e){var t=function(t,r,n){var a=e.getEditForm().is_link,i=/^\/.*?/;i=a?/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/g:/^\/.*?/,i.test(r)?n():n(new Error("请正确的地址"))};return{pagination:!1,pageOptions:{compact:!0},options:{rowId:"id",height:"100%",highlightCurrentRow:!1},rowHandle:{view:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Retrieve")}},edit:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Update")}},remove:{thin:!0,text:"",disabled:function(){return!e.hasPermissions("Delete")}},width:230,fixed:"right",custom:[{show:function(e,t){return!(!t.web_path||t.is_link)},disabled:function(){return!e.hasPermissions("Update")},text:" 菜单按钮",type:"warning",size:"small",emit:"createPermission"}]},indexRow:{title:"序号",align:"center",width:80},viewOptions:{componentType:"form"},formOptions:{defaultSpan:12},columns:[{title:"关键词",key:"search",show:!1,disabled:!0,search:{disabled:!1,component:{props:{clearable:!0},placeholder:"请输入关键词"}},form:{disabled:!0,component:{props:{clearable:!0}}},view:{disabled:!0}},{title:"ID",key:"id",show:!1,width:60,form:{component:{show:!1}}},{title:"父级菜单",key:"parent",show:!1,search:{disabled:!0},type:"cascader",dict:{url:i["urlPrefix"]+"?limit=999&status=1&is_catalog=1",cache:!1,isTree:!0,value:"id",label:"name",children:"children",getData:function(e,t,r){r.form,r.component;return Object(n["c"])({url:e}).then((function(e){var t=e.data.data,r=c.a.toArrayTree(t,{parentKey:"parent",strict:!0});return[{id:null,name:"根节点",children:r}]}))}},form:{component:{props:{elProps:{clearable:!0,showAllLevels:!1,props:{checkStrictly:!0,emitPath:!1,clearable:!0}}}}}},{title:"菜单名称",key:"name",sortable:!0,treeNode:!0,search:{disabled:!1,component:{props:{clearable:!0}}},width:180,type:"input",form:{rules:[{required:!0,message:"菜单名称必填项"}],component:{props:{clearable:!0},placeholder:"请输入菜单名称"},itemProps:{class:{yxtInput:!0}}}},{title:"图标",key:"icon",width:60,type:"icon-selector",form:{component:{placeholder:"请输入图标"}}},{title:"排序",key:"sort",width:60,type:"number",form:{value:1,component:{placeholder:"请输入排序"}}},{title:"是否目录",key:"is_catalog",width:100,type:"dict-switch",search:{disabled:!0},dict:{data:a["d"]},form:{value:!1,component:{placeholder:"请选择是否外链接"}}},{title:"外链接",key:"is_link",width:70,type:"radio",dict:{data:a["d"]},form:{value:!1,component:{show:function(e){var t=e.form;return!t.is_catalog},placeholder:"请选择是否外链接"},valueChange:function(e,t,r,n){var a=n.getColumn;n.mode,n.component,n.immediate,n.getComponent,this.$createElement;r.web_path=null,t?(a("web_path").title="外链接地址",a("web_path").component.placeholder="请输入外链接地址",a("web_path").helper={render:function(e){return e("el-alert",{attrs:{title:"外链接地址,请以https|http|ftp|rtsp|mms开头",type:"warning"}})}}):(a("web_path").title="路由地址",a("web_path").component.placeholder="请输入路由地址",a("web_path").helper={render:function(e){return e("el-alert",{attrs:{title:"浏览器中url的地址,请以/开头",type:"warning"}})}})}}},{title:"路由地址",key:"web_path",width:150,show:!1,form:{rules:[{required:!0,message:"请输入正确的路由地址"},{validator:t,trigger:"change"}],component:{show:function(e){var t=e.form;return!t.is_catalog},props:{clearable:!0},placeholder:"请输入路由地址"},helper:{render:function(e){return e("el-alert",{attrs:{title:"浏览器中url的地址,请以/开头",type:"warning"}})}}}},{title:"组件地址",key:"component",type:"select",show:!1,dict:{cache:!1,data:e.searchFiles()},form:{rules:[{required:!0,message:"请选择组件地址"}],component:{show:function(e){var t=e.form;return!t.is_catalog&&!t.is_link},props:{clearable:!0,filterable:!0},placeholder:"请输入组件地址"},helper:{render:function(e){return e("el-alert",{attrs:{title:"src/views下的文件夹地址",type:"warning"}})}}}},{title:"组件名称",key:"component_name",width:170,form:{rules:[{required:!0,message:"请输入组件名称"}],component:{show:function(e){var t=e.form;return!t.is_catalog&&!t.is_link},props:{clearable:!0},placeholder:"请输入组件名称"},helper:{render:function(e){return e("el-alert",{attrs:{title:"xx.vue文件中的name",type:"warning"}})}}}},{title:"拥有权限",key:"menuPermission",type:"select",width:300,form:{disabled:!0,component:{elProps:{filterable:!0,multiple:!0,clearable:!0}}},dict:{url:l["urlPrefix"],label:"name",value:"name",getData:function(e,t){return Object(n["c"])({url:e}).then((function(e){return e.data.data.map((function(e){return Object.assign(e,{color:a["c"][e.value]||"auto"})}))}))}}},{title:"缓存",key:"cache",search:{disabled:!1},width:50,type:"radio",dict:{data:a["d"]},form:{value:!1,component:{show:function(e){var t=e.form;return!t.is_catalog},placeholder:"请选择是否缓存"},helper:{render:function(e){return e("el-alert",{attrs:{title:"是否开启页面缓存,需要组件名称和xx.vue页面的name一致",type:"warning"}})}}}},{title:"侧边可见",key:"visible",search:{disabled:!1},width:75,type:"radio",dict:{data:a["d"]},form:{value:!0,component:{placeholder:"请选择侧边可见"},helper:{render:function(e){return e("el-alert",{attrs:{title:"是否显示在侧边菜单中",type:"warning"}})}}}},{title:"状态",key:"status",sortable:!0,search:{disabled:!1},width:70,type:"radio",dict:{data:a["a"]},form:{value:!0,component:{placeholder:"请选择状态"}}}].concat(e.commonEndColumns({update_datetime:{showTable:!1}}))}}},"8fcc":function(e,t,r){"use strict";r.r(t),r.d(t,"urlPrefix",(function(){return a})),r.d(t,"GetList",(function(){return i})),r.d(t,"createObj",(function(){return l})),r.d(t,"UpdateObj",(function(){return o})),r.d(t,"DelObj",(function(){return c}));var n=r("22ce"),a="/api/system/button/";function i(e){return Object(n["c"])({url:a,method:"get",data:e})}function l(e){return Object(n["c"])({url:a,method:"post",data:e})}function o(e){return Object(n["c"])({url:a+e.id+"/",method:"put",data:e})}function c(e){return Object(n["c"])({url:a+e+"/",method:"delete",data:{id:e}})}},ab1d:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return o}));r("d81d");var n={1:"success",true:"success",0:"danger",false:"danger",Search:"warning",Update:"primary",Create:"success",Retrieve:"info",Delete:"danger"};function a(e){return e.map((function(e){return{label:e.label,value:e.value,color:n[e.value]}}))}var i=a([{label:"启用",value:!0},{label:"禁用",value:!1}]),l=a([{label:"启用",value:1},{label:"禁用",value:0}]),o=(a([{label:"是",value:1},{label:"否",value:0}]),a([{label:"是",value:!0},{label:"否",value:!1}]))}}]);