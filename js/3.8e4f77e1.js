(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticStyle:{display:"none"},attrs:{elevated:""}},[e("q-toolbar",{staticClass:"font"},[e("q-toolbar-title",{staticStyle:{"font-size":"10px"}},[t._v("\n         Poeira Cósmica:  "+t._s(Math.round(t.cosmicDustCount))+"\n        ")])],1)],1),e("q-page-container",[e("router-view")],1)],1)},i=[],n=e("2b0e"),r=e("cffa"),s=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],c={name:"MainLayout",data:function(){return{dust:n["a"].prototype.$cosmicDust,cosmicDustCount:0,leftDrawerOpen:!1,essentialLinks:s,version:"1.2.3",game:{cosmicDust:0}}},computed:{animatedNumber:function(){return this.game.cosmicDust}},watch:{animatedNumber:function(t){r["a"].to(this.$data,{duration:1.8,cosmicDustCount:t})}}},u=c,l=e("2877"),m=e("4d5a"),p=e("e359"),d=e("65c6"),h=e("6ac5"),f=e("9404"),b=e("1c1c"),v=e("0170"),w=e("09e3"),q=e("eebe"),k=e.n(q),Q=Object(l["a"])(u,o,i,!1,null,null,null);a["default"]=Q.exports;k()(Q,"components",{QLayout:m["a"],QHeader:p["a"],QToolbar:d["a"],QToolbarTitle:h["a"],QDrawer:f["a"],QList:b["a"],QItemLabel:v["a"],QPageContainer:w["a"]})}}]);