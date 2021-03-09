(this.webpackJsonpitemslist=this.webpackJsonpitemslist||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(22),a=n.n(i),s=n(33),o=n(8),j=n(20),d=n(126),u=n(128),l=n(127),b=n(125),O=n(112),m=Object(O.a)((function(){return{toolBar:{paddingLeft:"26vw",display:"flex",justifyContent:"space-evenly",flexDirection:"row",backgroundColor:"rgb(25, 118, 210)"}}})),x=n(37),h=n.n(x),f=n(54),v=n(59),S=n(40),p=n(55),I=n.n(p),D=n(56),g=n.n(D),E=function(){var e=Object(c.useContext)(P).storeItems;return{getNumberOfStoreProducts:function(t){return e.filter((function(e){return e.store.id===t})).length}}},R=n(114),w=n(115),C=Object(O.a)((function(){return{store:{display:"flex",flexDirection:"column",justifyContent:"center",margin:"2vh 1vw",width:"13vw",height:"12vh"}}})),T=n(2),N=function(e){var t=C(),n=e.currStore,c=e.numOfItems;return Object(T.jsxs)(R.a,{className:t.store,children:[Object(T.jsx)(w.a,{children:"Store Name: ".concat(n.name)}),Object(T.jsx)(w.a,{children:"Number of Current Items: ".concat(c)})]})},y=Object(O.a)((function(){return{mainList:{display:"flex",flexDirection:"row",justifyContent:"center"}}})),_=[{id:1,name:"Amazon"},{id:2,name:"eBay"},{id:3,name:"Ali Express"}],L=function(){var e=y(),t=E().getNumberOfStoreProducts;return Object(T.jsx)("div",{className:e.mainList,children:_.map((function(e){return Object(T.jsx)(N,{currStore:e,numOfItems:t(e.id)})}))})},U=[{id:0,name:"Iphone 12",deliveryDate:new Date("2021-04-01"),isReceived:!1,priceILS:100,priceUSD:0,store:_[0]},{id:1,name:"GoPro",deliveryDate:new Date("2020-10-11"),isReceived:!1,priceILS:100,priceUSD:0,store:_[1]},{id:2,name:"Garmin Watch",deliveryDate:new Date("2021-02-11"),isReceived:!0,priceILS:100,priceUSD:0,store:_[2]}],P=r.a.createContext(null),A=function(e){var t=e.children,n=Object(c.useState)(U),r=Object(j.a)(n,2),i=r[0],a=r[1];return Object(T.jsx)(P.Provider,{value:{storeItems:i,setStoreItems:a},children:t})},k=Object({NODE_ENV:"production",PUBLIC_URL:"/Daniel-Aizenberg-03-03-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,B=function(e){var t=Object(c.useContext)(P),n=t.storeItems,r=t.setStoreItems,i=e.shekelToUSDExchangeRate,a=e.setShekelToUSDExchangeRate,s=function(){var e=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(k,"?base=").concat("ILS","&symbols=").concat("USD"));case 3:200!==(t=e.sent).status?o():(n=t.data).rates.USD!==i&&a(n.rates.USD),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){return g.a.fire({icon:"error",title:"Error in fetching exchange rates!"})};return{updateNotReceivedItemsList:function(e){var t=n.findIndex((function(t){return t.id===e}));if(-1!==t){var c=n;c[t]=Object(S.a)(Object(S.a)({},c[t]),{},{isReceived:!0}),r(Object(v.a)(c))}},getCurrExChangeRates:s,getSortedItems:function(){return n.slice().sort((function(e,t){return e.deliveryDate.getTime()-t.deliveryDate.getTime()}))}}},F=n(117),W=n(118),H=n(119),K=n(120),V=n(122),z=n(116),M=n(121),G=n(129),J=n(123),q=n(124),Q=Object(O.a)((function(){return{card:{display:"flex",flexDirection:"column",margin:"2vh 1vw",width:"16vw"},row:{display:"flex"},description:{marginLeft:"0.25vw"},currencySwitch:{marginLeft:"-0.5vw"}}})),X=function(e){var t=e.currItem,n=e.showReceivedButton,r=e.receiveItem,i=e.exchangeRate,a=Object(c.useState)(!0),s=Object(j.a)(a,2),o=s[0],d=s[1],u=Q();Object(c.useEffect)((function(){t.priceUSD=t.priceILS*i}),[i]);return Object(T.jsxs)(R.a,{className:u.card,children:[Object(T.jsxs)(z.a,{children:[Object(T.jsxs)("div",{className:u.row,children:[Object(T.jsx)(F.a,{}),Object(T.jsx)(w.a,{className:u.description,children:t.name})]}),Object(T.jsxs)("div",{className:u.row,children:[Object(T.jsx)(W.a,{}),Object(T.jsx)(w.a,{className:u.description,children:t.store.name})]}),Object(T.jsxs)("div",{className:u.row,children:[Object(T.jsx)(H.a,{}),Object(T.jsxs)(w.a,{className:u.description,children:["Delivery Date: ",t.deliveryDate.toDateString()]})]}),Object(T.jsxs)("div",{className:u.row,children:[Object(T.jsx)(K.a,{}),Object(T.jsxs)(w.a,{className:u.description,children:["Price: ",o?t.priceILS.toFixed():t.priceUSD.toFixed()]})]}),Object(T.jsx)("div",{className:u.row,children:Object(T.jsxs)(M.a,{component:"label",container:!0,alignItems:"center",spacing:1,className:u.currencySwitch,children:[Object(T.jsx)(M.a,{item:!0,children:Object(T.jsx)(V.a,{})}),Object(T.jsx)(M.a,{item:!0,children:"USD"}),Object(T.jsx)(M.a,{item:!0,children:Object(T.jsx)(G.a,{checked:o,color:"primary",onChange:function(e){d(e.target.checked)}})}),Object(T.jsx)(M.a,{item:!0,children:"ILS"})]})})]}),n&&Object(T.jsxs)(J.a,{children:[Object(T.jsx)(q.a,{}),Object(T.jsx)(b.a,{onClick:function(){return r(t.id)},children:"Received"})]})]})},Y=Object({NODE_ENV:"production",PUBLIC_URL:"/Daniel-Aizenberg-03-03-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_INTERVAL,Z=function(e){var t=y(),n=(Object(c.useContext)(P).storeItems,Object(c.useState)(0)),r=Object(j.a)(n,2),i=r[0],a=r[1],s=B({shekelToUSDExchangeRate:i,setShekelToUSDExchangeRate:a}),o=s.updateNotReceivedItemsList,d=s.getCurrExChangeRates,u=s.getSortedItems;return Object(c.useEffect)((function(){if(d(),Y){var e=setInterval((function(){d()}),Number(Y));return function(){return clearInterval(e)}}})),Object(T.jsx)("div",{className:t.mainList,children:u().map((function(t){return(e.showButton?!t.isReceived:t.isReceived)&&Object(T.jsx)(X,{currItem:t,showReceivedButton:e.showButton,receiveItem:o,exchangeRate:i})}))})},$=function(){var e=m(),t="/list"===Object(o.g)().pathname,n=r.a.useState(0),c=Object(j.a)(n,2),i=c[0],a=c[1],O=[{tabId:0,name:"Stores",displayComponent:Object(T.jsx)(L,{})},{tabId:1,name:"Items",displayComponent:Object(T.jsx)(Z,{showButton:t})}];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(d.a,{position:"static",className:e.toolBar,children:[Object(T.jsx)(u.a,{centered:!0,value:i,children:O.map((function(e){return Object(T.jsx)(l.a,{onClick:function(){return a(e.tabId)},label:e.name},e.tabId)}))}),Object(T.jsx)(b.a,{component:s.b,to:t?"/received":"/",children:t?"TO RECEIVED ITEMS LIST":"TO STORE ITEMS LIST"})]}),Object(T.jsx)(A,{children:O[i].displayComponent})]})},ee=function(){return Object(T.jsx)($,{})},te=function(){return Object(T.jsx)($,{})},ne=function(){return Object(T.jsx)(s.a,{children:Object(T.jsxs)(o.d,{children:[Object(T.jsx)(o.b,{exact:!0,path:"/list",component:ee}),Object(T.jsx)(o.b,{exact:!0,path:"/received",component:te}),Object(T.jsx)(o.a,{from:"/",to:"/list"})]})})};a.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(ne,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.98409163.chunk.js.map