(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b344"],{bf7a:function(t,e,n){"use strict";n.r(e),n.d(e,"urlPrefix",(function(){return a})),n.d(e,"GetList",(function(){return o})),n.d(e,"createObj",(function(){return d})),n.d(e,"UpdateObj",(function(){return i})),n.d(e,"DelObj",(function(){return f}));var r=n("22ce"),u=n("c695"),c=n.n(u),a="/sche/fenbu/";function o(t){return t.limit=999,Object(r["c"])({url:a,method:"get",params:t}).then((function(t){return t.data.data=c.a.toArrayTree(t.data.data,{parentKey:"parent",strict:!1}),t}))}function d(t){return console.log("createObj",t),Object(r["c"])({url:a,method:"post",data:t})}function i(t){return Object(r["c"])({url:a+t.id+"/",method:"put",data:t})}function f(t){return Object(r["c"])({url:a+t+"/",method:"delete",data:{id:t}})}}}]);