(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbec4"],{"4c76":function(t,e,n){"use strict";n.r(e),n.d(e,"urlPrefix",(function(){return i})),n.d(e,"GetList",(function(){return d})),n.d(e,"createObj",(function(){return o})),n.d(e,"UpdateObj",(function(){return b})),n.d(e,"DelObj",(function(){return f}));var r=n("5530"),c=n("22ce"),u=n("c695"),a=n.n(u),i="/api/system/menu/";function d(t){return t.limit=999,Object(c["c"])({url:i,method:"get",params:Object(r["a"])(Object(r["a"])({},t),{},{limit:999})}).then((function(t){return t.data.data=a.a.toArrayTree(t.data.data,{parentKey:"parent",strict:!1}),t}))}function o(t){return Object(c["c"])({url:i,method:"post",data:t})}function b(t){return Object(c["c"])({url:i+t.id+"/",method:"put",data:t})}function f(t){return Object(c["c"])({url:i+t+"/",method:"delete",data:{id:t}})}}}]);