(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f9af5bd","chunk-2d0e28c4"],{"7ebb":function(e,t,r){"use strict";r.r(t),r.d(t,"urlPrefix",(function(){return o})),r.d(t,"GetList",(function(){return u})),r.d(t,"saveContent",(function(){return i})),r.d(t,"createObj",(function(){return c})),r.d(t,"UpdateObj",(function(){return a})),r.d(t,"DelObj",(function(){return l})),r.d(t,"GetAssociationTable",(function(){return s}));var n=r("22ce"),o="/api/system/system_config/";function u(e){return Object(n["c"])({url:o,method:"get",params:e})}function i(e,t){return Object(n["c"])({url:o+"save_content/",method:"put",data:t})}function c(e){return Object(n["c"])({url:o,method:"post",data:e})}function a(e){return Object(n["c"])({url:o+e.id+"/",method:"put",data:e})}function l(e){return Object(n["c"])({url:o+e+"/",method:"delete",data:{id:e}})}function s(){return Object(n["c"])({url:o+"get_association_table/",method:"get",params:{}})}},c19e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"key值",prop:"key"}},[r("el-input",{model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),r("el-button",[e._v("取消")])],1)],1)],1)},o=[],u=r("7ebb"),i={name:"addTabs",inject:["refreshView"],data:function(){return{form:{title:null,key:null},rules:{title:[{required:!0,message:"请输入"}],key:[{required:!0,message:"请输入"},{pattern:/^[A-Za-z0-9]+$/,message:"只能是英文和数字"}]}}},methods:{onSubmit:function(){var e=this,t=this;t.$refs.form.validate((function(r){if(!r)return console.log("error submit!!"),!1;u["createObj"](t.form).then((function(t){e.$message.success("新增成功"),e.refreshView()}))}))}}},c=i,a=r("2877"),l=Object(a["a"])(c,n,o,!1,null,"5f8511d6",null);t["default"]=l.exports}}]);