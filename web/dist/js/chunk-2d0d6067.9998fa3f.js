(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6067"],{7190:function(t,n,e){"use strict";e.r(n),e.d(n,"urlPrefix",(function(){return d})),e.d(n,"GetList",(function(){return r})),e.d(n,"AddObj",(function(){return o})),e.d(n,"UpdateObj",(function(){return i})),e.d(n,"DelObj",(function(){return a}));var u=e("5530"),c=(e("d81d"),e("22ce")),d="/api/system/area/";function r(t){return void 0!==t.pcode&&null!==t.pcode&&0!==t.pcode.length||(t.level=1),Object(c["c"])({url:d,method:"get",params:Object(u["a"])(Object(u["a"])({},t),{},{limit:100})}).then((function(t){return t.data.data.map((function(t){t.hasChildren=0!==t.pcode_count})),t}))}function o(t){return Object(c["c"])({url:d,method:"post",data:t})}function i(t){return Object(c["c"])({url:d+t.id+"/",method:"put",data:t})}function a(t){return Object(c["c"])({url:d+t+"/",method:"delete",data:{id:t}})}}}]);