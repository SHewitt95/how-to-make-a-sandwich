(this.webpackJsonpsandwich=this.webpackJsonpsandwich||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=(n(24),n(2)),u={peopleCount:77e8,isGameActive:!0,playerLevel:0,sandwichesPerSecond:0,autoPlayerLevelActive:!1,menuItems:{Bread:{level:0,unlocked:!1},Condiments:{level:0,unlocked:!1},Cheese:{level:0,unlocked:!1},Vegetables:{level:0,unlocked:!1},Meat:{level:0,unlocked:!1}}},i="MAKE_SANDWICH",s="UP_PLAYER_LEVEL",m="UPGRADE_MENU_ITEM",d="ACTIVATE_AUTO_ARMS",h="LOAD_GAME",f="SAVE_GAME",v="RESET_GAME",p={BREAD:"Bread",CONDIMENTS:"Condiments",CHEESE:"Cheese",VEGETABLES:"Vegetables",MEAT:"Meat"},E={BREAD:1.15,CONDIMENTS:1.25,CHEESE:1.75,VEGETABLES:2.75,MEAT:4.75},b=Object(a.createContext)(),O=n(10);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e,t){switch(t.type){case i:return e.peopleCount-t.payload<=0?j({},e,{isGameActive:!1,peopleCount:0}):j({},e,{peopleCount:e.peopleCount-=t.payload||1});case s:return j({},e,{playerLevel:e.playerLevel+=t.payload});case m:return j({},e,{menuItems:j({},e.menuItems,Object(O.a)({},t.itemName,j({},e.menuItems[t.itemName],{level:e.menuItems[t.itemName].level+=t.payload})))});case d:return j({},e,{autoPlayerLevelActive:!0});case h:return j({},e,{},t.payload);case f:var n=JSON.stringify(e);return window.localStorage.setItem("sandwich-game",n),e;case v:return j({},e,{},u,{menuItems:j({},u.menuItems)});default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.parseFloat(e).toFixed(t)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return n?e+Math.pow(t,n):e},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return g(C(e,t,n),a)},x=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},k=function(){var e=Object(a.useState)(20),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useContext)(b),c=Object(l.a)(o,1)[0];return Object(a.useEffect)((function(){r(S(20,2,c.playerLevel,0))}),[c.playerLevel]),n},A=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useContext)(b),c=Object(l.a)(o,1)[0];return Object(a.useEffect)((function(){r(77e8-c.peopleCount)}),[c.peopleCount]),n},L=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useContext)(b),c=Object(l.a)(o,1)[0],u=function(){var e=Object.keys(p).map((function(e){return p[e]})),t=0;return e.forEach((function(e){var n=c.menuItems[e];t+=n.level*E[e.toUpperCase()]})),t}(),i=c.playerLevel;return Object(a.useEffect)((function(){r(S(i,1.15,u,0))}),[u,i]),n},M=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},N=function(){var e=Object(a.useContext)(b);return Object(l.a)(e,1)[0].playerLevel},P=function(){var e=Object(a.useContext)(b);return Object(l.a)(e,1)[0].isGameActive},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"s";return"".concat(1===e?"":t)},G=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(0),u=Object(l.a)(c,2),i=u[0],s=u[1],m=Object(a.useState)(0),d=Object(l.a)(m,2),h=d[0],f=d[1],v=P();return M((function(){v&&o((n+1)%60)}),1e3),M((function(){v&&s((i+1)%60)}),6e4),M((function(){v&&f(h+1)}),36e5),r.a.createElement("p",null,"Time taken: ","".concat(h," hour").concat(I(h),", ").concat(i," minute").concat(I(i)," and ").concat(n," second").concat(I(n),"."))},T=function(){var e=Object(a.useContext)(b),t=Object(l.a)(e,1)[0].peopleCount,n=Math.floor(t);return Object(a.useEffect)((function(){document.title="".concat(x(n)," people without a sandwich - how to make a sandwich")}),[n]),r.a.createElement("header",null,r.a.createElement("h1",null,"how to make a sandwich"),r.a.createElement("p",null,"Goal: Make a sandwich for everyone. ",r.a.createElement("strong",null,"Literally"),"."),r.a.createElement(G,null),r.a.createElement("p",null,"People without a sandwich: ",r.a.createElement("span",{id:"peopleLeft"},x(n))))},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Sandwiches made per second: ",r.a.createElement("strong",{id:"sps"},x(L()))),r.a.createElement("p",null,"Number of extra hands: ",x(N())))},V=n(44),D=function(){var e=Object(a.useContext)(b),t=Object(l.a)(e,2)[1];return function(){var e=Object(a.useContext)(b),t=Object(l.a)(e,2)[1],n=L(),r=P();M((function(){n>0&&r&&t({type:i,payload:n/100})}),10)}(),r.a.createElement("section",{className:"makeSandwich-section"},r.a.createElement(V.a,{variant:"contained",onClick:function(){return t({type:i})}},"make a sandwich"))},R=function(e){var t=e.currentValue,n=e.maxValue,a=e.valueName;return r.a.createElement("progress",{max:n,value:t},"".concat(a,": ").concat(t))},_=function(){var e=Object(a.useContext)(b),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),u=Object(l.a)(c,2),i=u[0],m=u[1],h=k(),f=A(),v=N();return function(){var e=k(),t=A(),n=Object(a.useContext)(b),r=Object(l.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){o.autoPlayerLevelActive&&t>=e&&c({type:s,payload:1})}),[o.autoPlayerLevelActive,t,e,c])}(),Object(a.useEffect)((function(){m(f>=20)}),[f]),r.a.createElement("section",null,i&&r.a.createElement(V.a,{variant:"contained",disabled:f<h,onClick:function(){o({type:s,payload:1}),v>=10&&!n.autoPlayerLevelActive&&o({type:d})}},v>=10&&!n.autoPlayerLevelActive?"Drink 'Automatic Arms Growth Potion'":"Grow more hands!"),r.a.createElement(R,{maxValue:h,currentValue:f,valueName:"Sandwich Count"}))},H="idle",U="cooldown",F=function(e){var t=e.itemName,n=e.cooldownTime,o=Object(a.useContext)(b),c=Object(l.a)(o,2)[1],u=Object(a.useState)(H),i=Object(l.a)(u,2),s=i[0],d=i[1],h=Object(a.useState)(0),f=Object(l.a)(h,2),v=f[0],p=f[1];Object(a.useEffect)((function(){var e=setTimeout((function(){d(H)}),n);return function(){return clearTimeout(e)}}),[n,s]),M((function(){p(v+1e3)}),1e3),M((function(){s===H&&p(0)}),10);var E="Meat"===t?"Protein":t;return r.a.createElement("li",null,r.a.createElement(V.a,{variant:"contained",disabled:s===U,onClick:function(){c({type:m,payload:1,itemName:t}),d(U)}},s===U&&"Getting better ".concat(E,"..."),s===H&&"Upgrade ".concat(E)),r.a.createElement(R,{maxValue:n||1,currentValue:v,valueName:"".concat(E," Progress")}))},J={Bread:2e3,Condiments:5e3,Cheese:8e3,Vegetables:12e3,Meat:2e4},Y={Bread:0,Condiments:7,Cheese:14,Vegetables:21,Meat:28},W=function(e){var t=e.levelsRemaining,n=e.itemName;return r.a.createElement("li",null,r.a.createElement(V.a,{variant:"contained",disabled:!0},"You need ".concat(t," more hand(s) to unlock ").concat("Meat"===n?"Protein":n)))},K=function(){var e=Object(a.useContext)(b),t=Object(l.a)(e,1)[0],n=t.playerLevel;return r.a.createElement("section",null,r.a.createElement("h2",null,"Sandwich"),r.a.createElement("p",null,"Upgrade parts of your sandwich to make ",r.a.createElement("em",null,"more")," sandwiches per second."),r.a.createElement("ol",null,Object.keys(p).map((function(e){var a=p[e],o=t.menuItems[a];return n<Y[a]?r.a.createElement(W,{key:"locked-".concat(a),itemName:a,levelsRemaining:Y[a]-n}):r.a.createElement(F,{cooldownTime:J[a]*(1.15*o.level),key:"SandwichMenu_".concat(a),itemName:a})}))))},$=n(43),q=[{taskCompleted:function(e){return e.playerLevel>=1},text:"Always good to have an extra set of hands."},{taskCompleted:function(e){return e.playerLevel>=5},text:"Sure, why not 5 more hands? The more the merrier!"},{taskCompleted:function(e){return e.playerLevel>=10},text:"Okay buddy. 10 extra hands seem excessive."},{taskCompleted:function(e){return e.playerLevel>=15},text:"You must really like making sandwiches, with those 15 extra hands."},{taskCompleted:function(e){return e.playerLevel>=20},text:"Hello, police? There's a many-handed monster here. How many hands? 20 extra!"},{taskCompleted:function(e){return e.playerLevel>=50},text:"Ever read Frankenstein? Mary Shelley may have some thoughts on your 50 hands."},{taskCompleted:function(e){return e.playerLevel>=100},text:"100 hands. Aight, imma head out."},{threshold:10,text:"10 Sandwiches! Strong start."},{threshold:100,text:"100 Sandwiches! Getting there."},{threshold:1e3,text:"1000 Sandwiches! Looking good, champ."},{threshold:1e4,text:"10000 Sandwiches! Yep. Still going!"},{threshold:1e5,text:"100000 Sandwiches! Getting tired?"},{threshold:1e6,text:"1 Million Sandwiches! The Big 7 Figures!"},{threshold:1e7,text:"10 Million Sandwiches! If I had a dollar for every sandwich you've made..."},{threshold:1e8,text:"100 Million Sandwiches! Good golly!"},{threshold:1e9,text:"1 Billion Sandwiches! Great. About 8 more of these to go."},{threshold:385e7,text:"3.85 Billion Sandwiches! Halfway there!"},{threshold:77e8,text:"You've done it: 7.7 Billion sandwiches. World Hunger is no more!"}],z=function(){var e=Object(a.useContext)(b),t=Object(l.a)(e,1)[0],n=77e8-t.peopleCount;return r.a.createElement("section",null,r.a.createElement("h2",null,"Achievements"),r.a.createElement("p",null,"Here's a running list of what you've achieved so far."),r.a.createElement("ul",null,function(e,t){return q.map((function(n){return n.threshold&&n.threshold>e?null:n.taskCompleted&&!n.taskCompleted(t)?null:r.a.createElement("li",{key:n.text},r.a.createElement($.a,{variant:"body1",gutterBottom:!0},n.text))}))}(n,t)))},Q=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=A(),u=N();return Object(a.useEffect)((function(){o(c>=100||u>=5)}),[c,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(D,null),r.a.createElement(_,null),n&&r.a.createElement(K,null),r.a.createElement(z,null))},X=function(){var e=Object(a.useContext)(b),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement("footer",null,r.a.createElement(V.a,{onClick:function(){return o({type:f,payload:JSON.stringify(n)})}},"Save Game"),r.a.createElement(V.a,{onClick:function(){return o({type:v})}},"Reset Game"))},Z=function(){var e=Object(a.useReducer)(w,u),t=Object(l.a)(e,2),n=t[0],o=t[1];return M((function(){var e=JSON.stringify(n);window.localStorage.setItem("sandwich-game",e)}),1e4),Object(a.useEffect)((function(){var e=window.localStorage.getItem("sandwich-game");e&&o({type:h,payload:JSON.parse(e)})}),[]),r.a.createElement(b.Provider,{value:[n,o]},r.a.createElement(T,null),r.a.createElement(Q,null),r.a.createElement(X,null))};n(29);var ee=function(){return r.a.createElement(Z,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.84d4e457.chunk.js.map