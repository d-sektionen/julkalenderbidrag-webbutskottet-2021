(this["webpackJsonpjulkalenderbidrag-webbutskottet-2021"]=this["webpackJsonpjulkalenderbidrag-webbutskottet-2021"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),i=n.n(a),s=(n(24),n(8)),o=n.n(s),l=n(13),d=n(10),u=n(5),j=n(2),b=(n(26),n(27),n(0));var h=function(e){var t=e.isFlipped,n=e.handleCardClick,r=e.isMatched,c=e.name,a=e.profileDescription,i=e.img;return Object(b.jsx)("div",{className:"card ".concat(t()?"card-show":""," ").concat(r()?"card-show card-matched":""," "),onClick:function(){return n()},draggable:"false",children:Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsx)("h3",{children:c}),Object(b.jsx)("p",{children:a}),Object(b.jsx)("img",{src:i,alt:c,className:"card-img",draggable:"false"})]})})};n(29);var m=function(e){var t=e.liuid,n=e.guesses,r=e.time,c=e.correct,a=e.left,i=e.name,s=Math.round(r/1e3);return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"title-bar",children:Object(b.jsx)("h1",{children:"Webutskottets julkalenderbidrag 2021"})}),Object(b.jsxs)("div",{className:"stats",children:[Object(b.jsxs)("p",{children:[i," (",t,")"]}),Object(b.jsxs)("p",{children:["Time passed: ",s]}),Object(b.jsxs)("p",{children:["Total guesses: ",n]}),Object(b.jsxs)("p",{children:["Correct guesses: ",c]}),Object(b.jsxs)("p",{children:["Pairs left: ",a]})]})]})},g=n(19);n(30);var f=function(e){var t=e.link,n=e.onClick,r=e.href,c=e.children;return t?Object(b.jsx)(g.a,{to:t,onClick:n,className:"button",children:c}):r&&Object(b.jsx)("a",{href:r,className:"button",children:"Login"})};var p=function(e){var t=e.onRestart,n=e.intervalId,r=e._sendScore,c=e.time,a=e.guesses,i=Math.round(c/1e3);return clearInterval(n),Object(b.jsxs)("div",{className:"Victory",children:[Object(b.jsx)("h1",{children:"U did it!"}),Object(b.jsxs)("h2",{children:["Time: ",i]}),Object(b.jsxs)("h2",{children:["Guesses: ",a]}),Object(b.jsxs)("div",{className:"button-column",children:[Object(b.jsx)(f,{link:"/victory",onClick:r,children:"Spara i scoreboarden!"}),Object(b.jsx)(f,{link:"/game",onClick:t,children:"Starta om!"})]})]})};var O=function(e){var t=e.onStart,n=e.liuid;return Object(b.jsxs)("div",{className:"Menu",children:[Object(b.jsx)("h1",{children:"Varmt v\xe4lkommen till Webbutskottets julkalenderlucka!"}),Object(b.jsxs)("div",{className:"button-column",children:[Object(b.jsx)(f,{link:"/game",onClick:t,children:"Spela!"}),Object(b.jsx)(f,{link:"/scoreboard",children:"Scoreboard!"}),!n&&Object(b.jsx)(f,{href:"https://backend.d-sektionen.se/account/token/?redirect=https://d-sektionen.github.io/julkalenderbidrag-webbutskottet-2021/",children:"Login"})]})]})};n(39);var v=function(e){var t=e.name,n=(e.program,e.time),r=e.guesses;return Object(b.jsxs)("div",{className:"score-entry",style:{},children:[Object(b.jsxs)("h3",{className:"header",children:[t," "]}),Object(b.jsxs)("p",{className:"section",children:["Tid: ",n]}),Object(b.jsxs)("p",{className:"section",children:["Gissningar: ",r]})]})};var x=function(e){var t=e.scores;return Object(b.jsxs)("div",{className:"Scoreboard",children:[Object(b.jsx)("h1",{children:"Scoreboard"}),Object(b.jsx)("div",{className:"score-list",children:t.length>0?t.map((function(e,t){return Object(b.jsx)(v,{name:e.user,program:"D",time:e.time_taken,guesses:e.total_tries},t)})):""}),Object(b.jsx)(f,{link:"/",children:"Tillbaka!"})]})};n(40);var k=function(){return Object(b.jsx)("div",{className:"snowflakes","aria-hidden":"true",children:Array(50).fill("\u2745").map((function(e,t){return Object(b.jsx)("div",{className:"snowflake",children:"\u2745"},t)}))})},w=[{name:"Isak Horvath (Webmaster)",img:"../images/isse.png",description:"Programmeringsintreserad person som pluggar sitt tredje \xe5r p\xe5 U-programmet!"},{name:"Viktor Holta",img:"../images/viktor.png",description:"Programmerings- och grafikinriktad mjukvaruingenj\xf6r!"},{name:"Martin Kuiper",img:"../images/martin.jpeg",description:"Martin gillar att bygga coola saker och sjunga karaoke. Han pluggar IP2 och har en d\xf6dsfejd med css."},{name:"Erik Ekel\xf6f",img:"../images/erik.png",description:"Pluggar IP2"},{name:"Albin Thulin",img:"../images/albin.jpg",description:"G\xe5r f\xf6rsta \xe5ret p\xe5 D"},{name:"Jennifer Santos",img:"../images/jennifer.png",description:"Pluggar D1"},{name:"Michelle Krejci",img:"../images/mich.png",description:"Programmering och pengar \xe4r fett kul."},{name:"Felix Lindgren",img:"../images/felix.png",description:"Pluggar fj\xe4rde \xe5ret data."}];var S=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(u.a)(a,2),s=i[0],g=i[1],f=Object(r.useState)([]),v=Object(u.a)(f,2),S=v[0],N=v[1],y=Object(r.useState)(0),C=Object(u.a)(y,2),I=C[0],P=C[1],T=Object(r.useState)(new Date),M=Object(u.a)(T,2),D=M[0],E=M[1],F=Object(r.useState)(new Date),_=Object(u.a)(F,2),L=_[0],B=_[1],J=Object(r.useState)(!1),A=Object(u.a)(J,2),H=A[0],G=A[1],R=Object(r.useState)(void 0),U=Object(u.a)(R,2),V=U[0],W=U[1],z=Object(r.useState)(null),K=Object(u.a)(z,2),q=K[0],Q=K[1],X=Object(r.useState)(void 0),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.useState)([]),te=Object(u.a)(ee,2),ne=te[0],re=te[1],ce=function(){N([]),g([]),P(0),c(function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var r=[e[t],e[n]];e[n]=r[0],e[t]=r[1]}return e}([].concat(w,w)))},ae=function(){E(new Date);var e=setInterval((function(){console.log(H,le),H&&B(new Date)}),1e3);Q(e),G(!0)};Object(r.useEffect)((function(){2===s.length&&n[s[0]].name===n[s[1]].name&&N((function(e){return[].concat(Object(d.a)(e),Object(d.a)(s))}))}),[s,n]),Object(r.useEffect)((function(){G(!0)}),[]);var ie=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={Accept:"application/json","Content-Type":"application/json",Origin:"",authorization:"Bearer "+window.localStorage.getItem("token")},n={method:"get",headers:new Headers(t)},e.next=4,fetch("https://backend.d-sektionen.se/account/me",n).then((function(e){return e.json()})).then((function(e){W(e.username),$(e.pretty_name)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.stringify({user:V,time_taken:(L-D)/1e3,total_tries:I}),"http://localhost:8000","https://webbu-julkalender-21.herokuapp.com",e.next=5,fetch("https://webbu-julkalender-21.herokuapp.com/scoreboard/create/",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",authorization:"Bearer "+window.localStorage.getItem("token")},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then((function(e){e.json();200!=e.status?alert("N\xe5tt blev fel"):alert("Sparat")}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("access");null!=e?(window.localStorage.setItem("token",e),window.history.replaceState({},document.title,"/"),ie()):"null"==window.localStorage.getItem("token")&&null==window.localStorage.getItem("token")||ie()}),[]),Object(r.useEffect)((function(){fetch("https://webbu-julkalender-21.herokuapp.com/scoreboard/view/").then((function(e){return e.json()})).then((function(e){return re(e)})).then((function(){console.log(ne)}))}),[]);var oe=function(){ae(),ce()},le=w.length-S.length/2,de=L-D;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(k,{}),Object(b.jsx)(j.a,{children:Object(b.jsxs)(j.e,{children:[Object(b.jsx)(j.c,{exact:!0,path:"/",children:Object(b.jsx)(O,{onStart:oe,resetTimer:ae,resetCards:ce,liuid:V})}),Object(b.jsx)(j.c,{path:"/scoreboard",children:Object(b.jsx)(x,{scores:ne})}),Object(b.jsxs)(j.c,{path:"/game",children:[Object(b.jsx)(m,{name:Z,liuid:V,time:de<0?0:de,correct:S.length/2,left:le,guesses:I}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"card-area",children:le>0?n.map((function(e,t){var n=e.img,r=e.name,c=e.description;return Object(b.jsx)(h,{index:t,name:r,profileDescription:c,img:n,description:"Back",isFlipped:function(){return s.includes(t)},isMatched:function(){return S.includes(t)},handleCardClick:function(){return e=t,void(1===s.length&&s[0]!==e?(g((function(t){return[].concat(Object(d.a)(t),[e])})),P((function(e){return e+1}))):g([e]));var e}},t)})):Object(b.jsx)(j.b,{to:"/victory"})})})]}),Object(b.jsx)(j.c,{path:"/victory",children:Object(b.jsx)(p,{time:L-D,guesses:I,_sendScore:se,intervalId:q,onRestart:oe})})]})}),Object(b.jsx)("div",{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.b228a69a.chunk.js.map