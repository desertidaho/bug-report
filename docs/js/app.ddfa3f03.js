(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)n=i[u],o[n]&&f.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/bug-report/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),o=s.n(a);o.a},"0582":function(t,e,s){},"0c01":function(t,e,s){},"0ff2c":function(t,e,s){"use strict";var a=s("0c01"),o=s.n(a);o.a},1709:function(t,e,s){"use strict";var a=s("e81c"),o=s.n(a);o.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=r(t);return s(e)}function r(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",[s("p",{staticClass:"copyright"},[t._v("© 2019 BRETT WILCOX")])])])}],n=(s("034f"),s("2877")),i={},c=Object(n["a"])(i,o,r,!1,null,null,null),l=c.exports,d=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-3"},[s("h5",{staticClass:"text-center mt-4"},[t._v("Report a new bug")]),s("form",{staticClass:"mb-5",on:{submit:function(e){return e.preventDefault(),t.addLog(e)}}},[s("div",{staticClass:"form-goup my-4 col-12 d-flex justify-content-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newLog.creator,expression:"newLog.creator"}],staticClass:"form-control name shadow",attrs:{required:"",type:"text",id:"",placeholder:" *Name..."},domProps:{value:t.newLog.creator},on:{input:function(e){e.target.composing||t.$set(t.newLog,"creator",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newLog.title,expression:"newLog.title"}],staticClass:"form-control form-title ml-2 shadow",attrs:{required:"",type:"text",id:"",placeholder:" *Title..."},domProps:{value:t.newLog.title},on:{input:function(e){e.target.composing||t.$set(t.newLog,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newLog.description,expression:"newLog.description"}],staticClass:"form-control ml-2 description shadow",attrs:{required:"",type:"text",id:"",placeholder:" *Description..."},domProps:{value:t.newLog.description},on:{input:function(e){e.target.composing||t.$set(t.newLog,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-outline-dark shadow ml-2",attrs:{type:"submit"}},[t._v("Submit")])])])])]),s("BugLog")],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h1",{staticClass:"title mt-4 col-12 text-center"},[t._v("Technical Bugs "),a("img",{staticClass:"mb-2",attrs:{src:s("5edb"),alt:""}})])])}],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Buglog"},[s("div",{staticClass:"row my-0"},[s("div",{staticClass:"col-10 offset-1 d-flex justify-content-center mb-1"},[s("button",{staticClass:"btn btn-sm btn-outline-secondary shadow",on:{click:t.sortName}},[t._v("Sort Name")]),s("button",{staticClass:"btn btn-sm btn-outline-secondary shadow ml-2",on:{click:t.sortStatus}},[t._v("Sort Status")]),s("button",{staticClass:"btn btn-sm btn-outline-secondary shadow ml-2",on:{click:t.sortDate}},[t._v("Sort Date")]),s("h6",{staticClass:"ml-3 mt-2"},[t._v("Total reports: "+t._s(t.allLogs.length))]),s("h6",{staticClass:"ml-3 mt-2"},[t._v("Active: "+t._s(t.numbers.active)+" "),s("span",{staticClass:"ml-2"}),t._v("Closed: "+t._s(t.numbers.closed))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-1 mt-2 px-0"},[s("table",{staticClass:"table table-hover table-bordered shadow-lg text-center"},[t._m(0),t._l(t.allLogs,function(e){return s("tbody",{key:e.id,class:e.closed?"table-warning":"table-primary"},[s("tr",{on:{click:function(s){t.setActive(e),t.$router.push({name:"bugDetails",params:{id:e._id}})}}},[s("td",[t._v(t._s(e.creator))]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(t._f("formatTime")(e.createdAt)))]),s("td",[t._v(t._s(e.closed?"Closed":"Active"))]),s("td",[e.closed?s("span",[t._v(t._s(t._f("formatTime")(e.updatedAt)))]):t._e()])])])})],2)])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{id:"creator"}},[t._v("Name")]),s("th",{attrs:{id:"title"}},[t._v("Title")]),s("th",{attrs:{id:"created"}},[t._v("Created")]),s("th",{attrs:{id:"status"}},[t._v("Status")]),s("th",{attrs:{id:"closed"}},[t._v("Closed")])])])}],b=s("c1df"),g=s.n(b),p={name:"BugLog",props:[],data(){return{}},computed:{allLogs(){return this.$emit("clearLogInputFields"),this.$store.state.logs},numbers(){let t="active",e="closed",s={};s[t]=0,s[e]=0;let a=this.$store.state.logs;for(let o=0;o<a.length;o++){let r=a[o];r.closed?s[e]++:s[t]++}return s}},methods:{setActive(t){this.$store.dispatch("setActive",t)},sortName(){let t=this.$store.state.logs;t.sort((t,e)=>t.creator.localeCompare(e.creator))},sortStatus(){let t=this.$store.state.logs;t.sort((t,e)=>t.closed-e.closed)},sortDate(){return this.$store.dispatch("getAllLogs")}},components:{},filters:{formatTime(t){return g()(String(t)).format("MM/DD/YYYY, LT")}}},v=p,j=(s("b632"),Object(n["a"])(v,m,h,!1,null,"7fe6fb7f",null)),_=j.exports,w={name:"home",mounted(){this.$store.dispatch("getAllLogs")},data(){return{newLog:{creator:"",title:"",description:""}}},components:{BugLog:_},methods:{addLog(){this.$store.dispatch("addLog",this.newLog)},clearLogInputFields(){this.$data.newLog.creator="",this.$data.newLog.title="",this.$data.newLog.description=""}}},y=w,C=(s("1709"),Object(n["a"])(y,u,f,!1,null,"62df419b",null)),N=C.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container-fluid"},[t._m(0),s("div",{staticClass:"row my-5"},[s("div",{staticClass:"col-10 offset-1"},[s("table",{staticClass:"table table-hover table-bordered shadow text-center"},[t._m(1),s("tbody",{class:t.log.closed?"table-warning":"table-primary"},[s("tr",[s("td",[t._v(t._s(t.log.creator))]),s("td",[t._v(t._s(t.log.title))]),s("td",[t._v(t._s(t.log.description))]),s("td",[t._v(t._s(t._f("formatTime")(t.log.createdAt)))]),0!=t.allNotes.length?s("td",[t._v(t._s(t._f("formatTime")(t.allNotes[t.allNotes.length-1].updatedAt)))]):s("td",[t._v(t._s(t._f("formatTime")(t.log.updatedAt)))]),s("td",[t._v(t._s(t.allNotes.length))]),s("td",[t._v(t._s(t.log.closed?"Closed":"Active / ")+" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.log.closed,expression:"!log.closed"}],staticClass:"btn btn-sm btn-danger close-btn px-1 py-0 shadow-lg mb-1",attrs:{value:"Closed"},on:{click:t.close}},[t._v("Close")])])])])])])]),s("div",{staticClass:"row"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.log.closed,expression:"!log.closed"}],staticClass:"col-8 offset-2 mt-2"},[s("h5",{staticClass:"text-center mt-3"},[t._v("Creat a note for this bug")]),s("form",{staticClass:"mb-5",on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[s("div",{staticClass:"form-goup my-4 col-12 d-flex justify-content-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.creator,expression:"newNote.creator"}],staticClass:"form-control name shadow",attrs:{required:"",type:"text",id:"",placeholder:" *Name..."},domProps:{value:t.newNote.creator},on:{input:function(e){e.target.composing||t.$set(t.newNote,"creator",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control ml-2 description shadow",attrs:{required:"",type:"text",id:"",placeholder:" *Description..."},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}}),s("button",{staticClass:"btn btn-outline-dark shadow ml-2",attrs:{type:"submit"}},[t._v(" Submit ")])])])])]),s("notes",{staticClass:"row"}),s("a",{attrs:{name:"bottom"}})],1)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h1",{staticClass:"title mt-4 col-12 text-center"},[t._v("Technical Bug Details "),a("img",{staticClass:"mb-2",attrs:{src:s("5edb"),alt:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{id:"created"}},[t._v("Name")]),s("th",{attrs:{id:"title"}},[t._v("Title")]),s("th",{attrs:{id:"description"}},[t._v("Description")]),s("th",{attrs:{id:"date-created"}},[t._v("Created")]),s("th",{attrs:{id:"last-activity"}},[t._v("Last Activity")]),s("th",{attrs:{id:"notes"}},[t._v("Notes")]),s("th",{attrs:{id:"status"}},[t._v("Status")])])])}],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.allNotes,function(e){return s("div",{key:e.id,staticClass:"Notes col-4 offset-4"},[s("div",{staticClass:"card mb-4 shadow"},[s("div",{staticClass:"card-body",class:"pending"==e.flagged?"bg-light":"completed"==e.flagged?"bg-success":"bg-secondary"},[s("h6",{staticClass:"card-subtitle"},[s("b",[t._v("Created by:")]),t._v(" "+t._s(e.creator))]),s("h6",{staticClass:"card-subtitle"},[s("b",[t._v("Comments:")]),t._v(" "+t._s(e.content))]),s("h6",{staticClass:"card-subtitle"},[s("b",[t._v("Note created:")]),t._v(" "+t._s(t._f("formatTime")(e.createdAt)))]),s("h6",{staticClass:"card-subtitle"},[s("b",[t._v("Last activity:")]),t._v(" "+t._s(t._f("formatTime")(e.updatedAt)))]),s("h6",{directives:[{name:"show",rawName:"v-show",value:"pending"==e.flagged,expression:"note.flagged == 'pending'"}],staticClass:"card-subtitle"},[s("b",[t._v("Status:")]),t._v(" Pending")]),s("h6",{directives:[{name:"show",rawName:"v-show",value:"completed"==e.flagged,expression:"note.flagged == 'completed'"}],staticClass:"card-subtitle"},[s("b",[t._v("Status:")]),t._v(" Completed")]),s("h6",{directives:[{name:"show",rawName:"v-show",value:"rejected"==e.flagged,expression:"note.flagged == 'rejected'"}],staticClass:"card-subtitle"},[s("b",[t._v("Status:")]),t._v(" Rejected")]),0==t.activeLog.closed?s("h6",{directives:[{name:"show",rawName:"v-show",value:"pending"==e.flagged,expression:"note.flagged == 'pending'"}]},[s("b",[t._v("Change Status:")]),s("a",{staticClass:"ml-1",attrs:{href:""},on:{click:function(s){return t.changeStatus(e._id,"completed")}}},[t._v("Completed, ")]),s("a",{staticClass:"ml-1",attrs:{href:""},on:{click:function(s){return t.changeStatus(e._id,"rejected")}}},[t._v("Rejected")])]):t._e(),0==t.activeLog.closed?s("button",{staticClass:"btn btn-sm btn-outline-dark shadow delete-btn",on:{click:function(s){return t.deleteNote(""+e._id)}}},[t._v("Delete")]):t._e()])])])}),0)},x=[],A={name:"Notes",mounted(){},props:[],data(){return{}},computed:{allNotes(){return this.$store.state.allNotes},activeLog(){return this.$store.state.activeLog}},methods:{deleteNote(t){let e=confirm("Are you sure you want to delete note?");1==e&&this.$store.dispatch("deleteNote",t)},changeStatus(t,e){this.$store.dispatch("editNote",{noteId:t,payload:e})}},components:{},filters:{formatTime(t){return g()(String(t)).format("MM/DD/YYYY, LT")}}},S=A,T=(s("75e5"),Object(n["a"])(S,k,x,!1,null,"28c391a3",null)),z=T.exports,D={name:"bugDetails",mounted(){if(0==this.$store.state.logs.length&&this.$store.dispatch("getAllLogs"),!this.$store.state.activeLog._id){let t=this.$route.params.id;this.$store.dispatch("getAllNotesAfterRefresh",t)}this.$store.dispatch("getAllNotes")},props:[],data(){return{newNote:{creator:"",content:"",flagged:"pending"},flags:["pending","completed","rejected"]}},computed:{activeLog(){return this.$store.state.activeLog},allNotes(){return this.$data.newNote.creator="",this.$data.newNote.content="",this.$store.state.allNotes},log(){if(this.$store.state.activeLog._id)return this.$store.state.activeLog;{let t=this.$route.params.id;return this.$store.state.logs.find(e=>e._id==t)}}},methods:{addNote(){this.$store.dispatch("newNote",this.newNote)},close(){let t=confirm("Are you sure you want to close bug report? Details will still be displayed but you will not be able to add or modify notes.");1==t&&this.$store.dispatch("closeLog",this.$store.state.activeLog._id)}},components:{Notes:z},filters:{formatTime(t){return g()(String(t)).format("MM/DD/YYYY, LT")}}},O=D,E=(s("0ff2c"),Object(n["a"])(O,L,$,!1,null,"765a4f38",null)),P=E.exports;a["a"].use(d["a"]);var Y=new d["a"]({routes:[{path:"/",name:"home",component:N},{path:"/:id",props:!0,name:"bugDetails",component:P}]}),M=s("2f62"),q=s("bc3a"),B=s.n(q);const R=B.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/api/brett/bugs"});a["a"].use(M["a"]);var I=new M["a"].Store({state:{logs:[],activeLog:{},allNotes:[]},mutations:{setLogs(t,e){t.logs=e},setActiveLog(t,e){t.activeLog=e},addNote(t,e){t.allNotes=e}},actions:{addLog({commit:t,dispatch:e},s){R.post("",s).then(t=>{e("getAllLogs")}).catch(t=>{console.log(t)})},getAllLogs({commit:t,dispatch:e}){R.get("").then(e=>{t("setLogs",e.data.results)}).catch(t=>{console.log(t)})},setActive({commit:t,dispatch:e},s){t("setActiveLog",s)},getActiveLog({commit:t,dispatch:e},s){R.get(`${s}`).then(e=>{t("setActiveLog",e.data.results)}).catch(t=>{console.log(t)})},newNote({commit:t,dispatch:e},s){let a=this.state.activeLog._id;R.post(`${a}/notes`,s).then(t=>{this.dispatch("getAllNotes")})},getAllNotes({commit:t,dispatch:e}){let s=this.state.activeLog._id;R.get(`${s}/notes`).then(e=>{t("addNote",e.data.results)})},getAllNotesAfterRefresh({commit:t,dispatch:e},s){R.get(`${s}/notes`).then(e=>{t("addNote",e.data.results)})},closeLog({commit:t,dispatch:e},s){R.delete(`${s}`).then(e=>{t("setActiveLog",e.data.results)}).catch(t=>{console.log(t)})},deleteNote({commit:t,dispatch:e},s){let a=this.state.activeLog._id;R.delete(`${a}/notes/${s}`).then(t=>{this.dispatch("getAllNotes")})},editNote({commit:t,dispatch:e},{noteId:s,payload:a}){let o=this.state.activeLog._id;R.put(`${o}/notes/${s}`,{flagged:a}).then(t=>{this.dispatch("getAllNotes")})}}});a["a"].config.productionTip=!1,new a["a"]({router:Y,store:I,render:function(t){return t(l)}}).$mount("#app")},"5edb":function(t,e,s){t.exports=s.p+"img/spy-bug.2aad7180.png"},"64a9":function(t,e,s){},"75e5":function(t,e,s){"use strict";var a=s("0582"),o=s.n(a);o.a},a912:function(t,e,s){},b632:function(t,e,s){"use strict";var a=s("a912"),o=s.n(a);o.a},e81c:function(t,e,s){}});
//# sourceMappingURL=app.ddfa3f03.js.map