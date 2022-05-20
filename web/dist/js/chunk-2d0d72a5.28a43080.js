(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d72a5"],{"763c":function(e,s,r){"use strict";r.r(s);var a=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("d2-container",{staticClass:"page"},[r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(s){e.activeName=s},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"用户设置",name:"userInfo"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10,offset:6}},[r("el-form",{ref:"userInfoForm",attrs:{model:e.userInfo,"required-asterisk":"",rules:e.userInforules,"label-position":e.position,center:""}},[r("el-form-item",{attrs:{prop:"avatar",required:"",label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{"list-type":"picture-card","file-list":e.fileList,action:e.action,headers:e.headers,limit:1,disabled:1===e.fileList.length,"on-success":e.handleAvatarSuccess}},[r("i",{staticClass:"el-icon-plus"})])],1),r("el-form-item",{attrs:{prop:"name",required:"",label:"昵称"}},[r("el-input",{attrs:{clearable:""},model:{value:e.userInfo.name,callback:function(s){e.$set(e.userInfo,"name",s)},expression:"userInfo.name"}})],1),r("el-form-item",{attrs:{label:"电话号码",prop:"mobile"}},[r("el-input",{attrs:{clearable:""},model:{value:e.userInfo.mobile,callback:function(s){e.$set(e.userInfo,"mobile",s)},expression:"userInfo.mobile"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{clearable:""},model:{value:e.userInfo.email,callback:function(s){e.$set(e.userInfo,"email",s)},expression:"userInfo.email"}})],1),r("el-form-item",{attrs:{label:"性別",prop:"gender"}},[r("el-radio-group",{model:{value:e.userInfo.gender,callback:function(s){e.$set(e.userInfo,"gender",s)},expression:"userInfo.gender"}},[r("el-radio",{attrs:{label:1}},[e._v("男")]),r("el-radio",{attrs:{label:0}},[e._v("女")]),r("el-radio",{attrs:{label:-1}},[e._v("未知")])],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.updateInfo}},[r("i",{staticClass:"fa fa-check"}),e._v(" 更新 ")]),r("el-button",{attrs:{type:"info"},on:{click:function(s){return e.resetForm("info")}}},[r("i",{staticClass:"fa fa-reply-all"}),e._v(" 重置 ")])],1)],1)],1)],1)],1),r("el-tab-pane",{attrs:{label:"密码设置",name:"passwrod"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10,offset:6}},[r("el-form",{ref:"userPasswordForm",attrs:{model:e.userPasswordInfo,"required-asterisk":"","label-position":e.position,rules:e.passwordRules,center:""}},[r("el-form-item",{attrs:{label:"原密码",required:"",prop:"oldPassword"}},[r("el-input",{attrs:{clearable:""},model:{value:e.userPasswordInfo.oldPassword,callback:function(s){e.$set(e.userPasswordInfo,"oldPassword",s)},expression:"userPasswordInfo.oldPassword"}})],1),r("el-form-item",{attrs:{required:"",prop:"newPassword",label:"新密码"}},[r("el-input",{attrs:{type:"password",clearable:""},model:{value:e.userPasswordInfo.newPassword,callback:function(s){e.$set(e.userPasswordInfo,"newPassword",s)},expression:"userPasswordInfo.newPassword"}})],1),r("el-form-item",{attrs:{required:"",prop:"newPassword2",label:"确认密码"}},[r("el-input",{attrs:{type:"password",clearable:""},model:{value:e.userPasswordInfo.newPassword2,callback:function(s){e.$set(e.userPasswordInfo,"newPassword2",s)},expression:"userPasswordInfo.newPassword2"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.settingPassword}},[r("i",{staticClass:"fa fa-check"}),e._v("提交 ")]),r("el-button",{attrs:{type:"info"},on:{click:function(s){return e.resetForm("passwordForm")}}},[r("i",{staticClass:"fa fa-reply-all"}),e._v("重置 ")])],1)],1)],1)],1)],1)],1)],1)},t=[],o=r("5530"),n=(r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("d9e2"),r("00b4"),r("e9c4"),r("b0c0"),r("c276")),l=r("22ce"),i=r("5880"),u={name:"userInfo",data:function(){var e=this,s=function(s,r,a){var t=new RegExp("(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}");""===r?a(new Error("请输入密码")):r===e.userPasswordInfo.oldPassword?a(new Error("原密码与新密码一致")):t.test(r)?(""!==e.userPasswordInfo.newPassword2&&e.$refs.userPasswordForm.validateField("newPassword2"),a()):a(new Error("您的密码复杂度太低(密码中必须包含字母、数字)"))},r=function(s,r,a){""===r?a(new Error("请再次输入密码")):r!==e.userPasswordInfo.newPassword?a(new Error("两次输入密码不一致!")):a()};return{position:"left",activeName:"userInfo",action:n["a"].baseURL()+"api/system/file/",headers:{Authorization:"JWT "+n["a"].cookies.get("token")},fileList:[],userInfo:{name:"",gender:"",mobile:"",avatar:"",email:""},userInforules:{name:[{required:!0,message:"请输入昵称",trigger:"blur"}],mobile:[{pattern:/^1[3|4|5|7|8]\d{9}$/,message:"请输入正确手机号"}]},userPasswordInfo:{oldPassword:"",newPassword:"",newPassword2:""},passwordRules:{oldPassword:[{required:!0,message:"请输入原密码",trigger:"blur"}],newPassword:[{validator:s,trigger:"blur"}],newPassword2:[{validator:r,trigger:"blur"}]}}},mounted:function(){this.getCurrentUserInfo()},methods:Object(o["a"])(Object(o["a"])({},Object(i["mapActions"])("d2admin/account",["logout"])),{},{getCurrentUserInfo:function(){var e=this;return Object(l["c"])({url:"/api/system/user/user_info/",method:"get",params:{}}).then((function(s){e.userInfo=s.data,e.fileList=[{name:"avatar.png",url:s.data.avatar}]}))},updateInfo:function(){var e=this,s=this;s.$refs.userInfoForm.validate((function(r){r?Object(l["c"])({url:"/api/system/user/user_info/",method:"put",data:s.userInfo}).then((function(e){s.$message.success("修改成功"),s.getCurrentUserInfo()})):e.$message.error("表单校验失败，请检查")}))},resetForm:function(e){var s=this;"info"===e?s.getCurrentUserInfo():s.userPasswordForm={}},handleClick:function(e,s){var r=this;"userInfo"===e.paneName?(r.$refs.userPasswordForm.resetFields(),r.getCurrentUserInfo()):r.$refs.userInfoForm.resetFields()},settingPassword:function(){var e=this,s=this;s.$refs.userPasswordForm.validate((function(r){if(r){var a=n["a"].cookies.get("uuid");if(a){var t=JSON.parse(JSON.stringify(s.userPasswordInfo));t.oldPassword=s.$md5(t.oldPassword),t.newPassword=s.$md5(t.newPassword),t.newPassword2=s.$md5(t.newPassword2),Object(l["c"])({url:"/api/system/user/change_password/"+a+"/",method:"put",data:t}).then((function(e){s.activeName="userInfo",s.$message.success("修改成功"),s.logout({})}))}}else e.$message.error("表单校验失败，请检查")}))},handleAvatarSuccess:function(e,s){console.log(11,e),this.fileList=[{url:n["a"].baseURL()+e.data.url,name:s.name}],this.userInfo.avatar=n["a"].baseURL()+e.data.url}})},d=u,c=r("2877"),f=Object(c["a"])(d,a,t,!1,null,null,null);s["default"]=f.exports}}]);