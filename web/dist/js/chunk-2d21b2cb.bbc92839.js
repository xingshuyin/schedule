(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b2cb"],{bf3d:function(t,n,e){"use strict";e.r(n),e.d(n,"urlPrefix",(function(){return a})),e.d(n,"GetList",(function(){return d})),e.d(n,"createObj",(function(){return o})),e.d(n,"UpdateObj",(function(){return i})),e.d(n,"DelObj",(function(){return b}));var r=e("22ce"),c=e("c695"),u=e.n(c),a="/sche/xiangmu/";function d(t){return t.limit=999,Object(r["c"])({url:a,method:"get",params:t}).then((function(t){return t.data.data=u.a.toArrayTree(t.data.data,{parentKey:"parent",strict:!1}),t}))}function o(t){return console.log("createObj",t),Object(r["c"])({url:a,method:"post",data:t})}function i(t){return Object(r["c"])({url:a+t.id+"/",method:"put",data:t})}function b(t){return Object(r["c"])({url:a+t+"/",method:"delete",data:{id:t}})}}}]);