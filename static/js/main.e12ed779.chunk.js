(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=n(10),s=n(8),l=n(17),u=n(18),d=(n(28),n(3)),h=n(4),b=n(6),f=n(5),p=n(7),g=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return console.log("cardList"),r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(g,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},E=function(e){e.searchField;var t=e.searchChange;return console.log("searchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},O=(n(29),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(b.a)(this,Object(f.a)(t).call(this))).updateCount=function(){e.setState(function(t){return{count:e.state.count+1}})},e.state={count:0},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButtons"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.PureComponent)),w=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(O,{color:"red"}))}}]),t}(o.Component),R=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(w,null),r.a.createElement(E,{searchChange:n}),r.a.createElement(v,null,r.a.createElement(m,{robots:c})))}}]),t}(o.Component),y=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(R),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(30);var S={searchField:""},k={isPending:!1,robots:[],error:""},_=(Object(l.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),T=Object(s.d)(_,Object(s.a)(u.a));c.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robo-Friends-Redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Robo-Friends-Redux","/service-worker.js");j?(!function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.e12ed779.chunk.js.map