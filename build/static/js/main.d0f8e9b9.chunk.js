(this["webpackJsonproom-sensors"]=this["webpackJsonproom-sensors"]||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(119),r=n.n(a),i=n(7),o=(n(129),n(130),n(6)),l=n(2),u=n(5),j=n(4),d=n.n(j),b=n(13),m=n(14),p=n.n(m),O=n(120),h="raspberrypi.local:9999",f=n.n(O).a.connect("http://".concat(h)),x=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting rooms"),t="http://".concat(h,"/api/rooms"),e.next=4,p.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... creating room"),n="http://".concat(h,"/api/rooms"),e.next=4,p.a.post(n,t);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... deleting room"),n="http://".concat(h,"/api/rooms/").concat(t),e.next=4,p.a.delete(n);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... updating room"),s="http://".concat(h,"/api/rooms/").concat(t),e.next=4,p.a.put(s,n);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting sensors"),n="http://".concat(h,"/api/rooms/").concat(t,"/sensors"),e.next=4,p.a.get(n);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... creating room"),s="http://".concat(h,"/api/rooms/").concat(t,"/sensors"),e.next=4,p.a.post(s,n);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... deleting sensor"),s="http://".concat(h,"/api/rooms/").concat(t,"/sensors/").concat(n),e.next=4,p.a.delete(s);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting sensor values"),s="http://".concat(h,"/api/rooms/").concat(t,"/sensors/").concat(n,"/measurements"),e.next=4,p.a.get(s);case 4:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(d.a.mark((function e(t,n,s){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting sensor values query"),c="http://".concat(h,"/api/rooms/").concat(t,"/sensors/").concat(n,"/measurements/query"),e.next=4,p.a.post(c,s);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting events"),t="http://".concat(h,"/api/network/card"),e.next=4,p.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting events"),t="http://".concat(h,"/api/network/scan"),e.next=4,p.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting device id"),t="http://".concat(h,"/api/id"),e.next=4,p.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... configure wifi"),s="http://".concat(h,"/api/network"),e.next=4,p.a.post(s,{ssid:t,pass:n});case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... shutting down"),t="http://".concat(h,"/api/poweroff"),e.next=4,p.a.post(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... restarting"),t="http://".concat(h,"/api/restart"),e.next=4,p.a.post(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=n(0),A=function(){var e=Object(o.g)(),t=Object(s.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(""),i=Object(u.a)(r,2),j=i[0],d=i[1],b=Object(s.useState)(""),m=Object(u.a)(b,2),p=m[0],O=m[1],h=Object(l.d)((function(e){return e.addRoom}));return Object(I.jsx)("div",{className:"column",children:Object(I.jsxs)("div",{className:"card m-4 p-4",children:[Object(I.jsx)("div",{className:"title is-3",children:"Add room"}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Name"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)},className:"input",type:"text",placeholder:"Room name"})})]}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Description"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("textarea",{value:j,onChange:function(e){return d(e.target.value)},className:"textarea",type:"text",placeholder:"Room description"})})]}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Id"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("input",{value:p,onChange:function(e){return O(e.target.value)},className:"input",type:"number",min:"1",step:"1",placeholder:"Unique id"})})]}),Object(I.jsx)("div",{className:"field mt-4",children:Object(I.jsx)("div",{className:"control",children:Object(I.jsx)("button",{className:"button is-primary",onClick:function(){v({name:c,description:j,id:p,sensors:0}).then((function(t){t.message&&(h({name:c,description:j,id:p,sensors:0}),e.push("/"))}))},children:"Save"})})})]})})},L=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(u.a)(a,2),i=r[0],j=r[1],d=Object(s.useState)(""),b=Object(u.a)(d,2),m=b[0],p=b[1],O=Object(s.useState)(""),h=Object(u.a)(O,2),f=h[0],x=h[1],v=Object(s.useState)(""),N=Object(u.a)(v,2),w=N[0],S=N[1],y=Object(o.h)().room_id,C=Object(o.g)(),_=Object(l.e)((function(e){return e.rooms})),z=Object(l.d)((function(e){return e.updateRoom}));return Object(I.jsx)("div",{className:"column",children:Object(I.jsxs)("div",{className:"card m-4 p-4",children:[Object(I.jsx)("div",{className:"title is-3",children:"Add Sensor"}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Name"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("input",{onChange:function(e){return c(e.target.value)},value:n,className:"input",type:"text",placeholder:"Sensor name"})})]}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Description"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("textarea",{onChange:function(e){return j(e.target.value)},value:i,className:"textarea",type:"text",placeholder:"Sensor description"})})]}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Variable"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("input",{onChange:function(e){return p(e.target.value)},value:m,className:"input",type:"text",placeholder:"Ex: Temperature"})})]}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Unit"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("input",{onChange:function(e){return x(e.target.value)},value:f,className:"input",type:"text",placeholder:"Ex: \u0970C"})})]}),Object(I.jsxs)("div",{className:"field",children:[Object(I.jsx)("label",{className:"label",children:"Id"}),Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("input",{onChange:function(e){return S(e.target.value)},value:w,className:"input",type:"number",min:"1",step:"1",placeholder:"Unique id"})})]}),Object(I.jsx)("div",{className:"field mt-4",children:Object(I.jsx)("div",{className:"control",children:Object(I.jsx)("button",{className:"button is-primary",onClick:function(){var e={name:n,description:i,variable:m,unit:f,id:w},t=_.filter((function(e){return e.id==y}))[0].sensors;k(y,e).then((function(e){return console.log("sensor created")})),g(y,{sensors:t+1}).then((function(e){z(y,{sensors:t+1}),C.push("/room/".concat(y))}))},children:"Save"})})})]})})},J=n(10),W=n(9),q=function(e){return new Date(e).toLocaleString("sv-SE").split(" ")[1]},P=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},U=function(){var e=Object(s.useState)(Date()),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(u.a)(a,2),i=r[0],o=r[1];return Object(s.useEffect)((function(){setInterval((function(){c(Date())}),1e3),o(navigator.onLine),window.addEventListener("online",(function(){return o(!0)})),window.addEventListener("offline",(function(){return o(!1)}))}),[]),Object(I.jsxs)("p",{disabled:!0,className:"button is-outlined clock heading has-text-white is-size-4 is-flex p-2",children:[Object(I.jsx)("span",{children:q(n)}),Object(I.jsx)(W.a,{icon:J.f,size:"xs",className:"ml-1 ".concat(i?"has-text-success":"has-text-danger")})]})},F=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),r=Object(u.a)(a,2),o=r[0],j=r[1],d=Object(l.e)((function(e){return e.rooms})),b=Object(l.e)((function(e){return e.sensors})),m=(Object(l.e)((function(e){return e.message})),Object(l.d)((function(e){return e.setRooms}))),p=Object(l.d)((function(e){return e.setMessage}));return Object(s.useEffect)((function(){return x().then((function(e){return m(e.rooms)})),f.on("message",(function(e){p(JSON.parse(e)),console.log(JSON.parse(e))})),function(){f.off("message")}}),[]),Object(I.jsxs)("aside",{className:"menu column is-one-fifth p-4 is-size-5",children:[Object(I.jsx)("p",{className:"menu-label has-text-link ml-2",children:Object(I.jsx)(i.b,{to:"/rooms",onClick:function(){c(null),j(null)},children:"Rooms"})}),Object(I.jsxs)("ul",{className:"menu-list p-0 m-0",children:[d.map((function(e){return Object(I.jsxs)("li",{children:[Object(I.jsx)(i.b,{to:"/room/".concat(e.id),onClick:function(){j(null),n==e.id?c(null):c(e.id)},className:e.id==n?"is-active":"",children:e.name}),e.id==n?Object(I.jsxs)("ul",{className:"p-0 m-0",children:[b.map((function(t){return Object(I.jsx)("li",{className:"p-0 m-0",children:Object(I.jsx)(i.b,{to:"/room/".concat(e.id,"/sensor/").concat(t.id),onClick:function(){return j(t.id)},className:t.id==o?"p-0 m-0 is-active":"p-0 m-0",children:t.name})})})),Object(I.jsx)("li",{children:Object(I.jsxs)(i.b,{onClick:function(){return j(null)},to:"/add_sensor/".concat(e.id),children:[Object(I.jsx)("span",{className:"has-text-link",children:Object(I.jsx)(W.a,{icon:J.b})}),Object(I.jsx)("span",{className:"ml-2 is-size-6",children:"Add sensor"})]})})]}):""]})})),Object(I.jsx)("li",{children:Object(I.jsxs)(i.b,{to:"/add_room",onClick:function(){return c(null)},children:[Object(I.jsx)("span",{className:"has-text-link",children:Object(I.jsx)(W.a,{icon:J.b})}),Object(I.jsx)("span",{className:"ml-2",children:"Add room"})]})}),Object(I.jsxs)("li",{children:[Object(I.jsxs)(i.b,{to:"/wireless",onClick:function(){return c(null)},children:[Object(I.jsx)("span",{className:"has-text-link",children:Object(I.jsx)(W.a,{icon:J.f})}),Object(I.jsx)("span",{className:"ml-2",children:"Wireless"})]}),Object(I.jsxs)(i.b,{to:"/system",onClick:function(){return c(null)},children:[Object(I.jsx)("span",{className:"has-text-link",children:Object(I.jsx)(W.a,{icon:J.c})}),Object(I.jsx)("span",{className:"ml-2",children:"System"})]})]})]})]})},T=function(){var e=Object(l.e)((function(e){return e.rooms}));return Object(I.jsxs)("div",{className:"column content",children:[Object(I.jsx)("h1",{className:"title is-3 m-4",children:"Rooms"}),Object(I.jsxs)("div",{class:"is-flex is-flex-wrap-wrap",children:[e.map((function(e){return Object(I.jsx)("div",{className:"card m-4",children:Object(I.jsx)(i.b,{to:"/room/".concat(e.id),children:Object(I.jsxs)("div",{className:"card-content",children:[Object(I.jsxs)("p",{className:"title is-3",children:[e.name," ",Object(I.jsxs)("span",{className:"subtitle is-4",children:["(",e.id,")"]})]}),Object(I.jsx)("p",{className:"subtitle is-5",children:e.description}),Object(I.jsxs)("p",{children:["Sensors connected: ",e.sensors]}),Object(I.jsxs)("p",{children:["Last update: ",(t=e.updated_at,new Date(t).toLocaleString("sv-SE"))]})]})})});var t})),Object(I.jsx)("div",{className:"card m-4",children:Object(I.jsx)(i.b,{to:"/add_room",children:Object(I.jsxs)("div",{className:"card-content",children:[Object(I.jsx)("p",{className:"title is-3",children:"Add room"}),Object(I.jsx)("p",{className:"subtitle is-1 has-text-success",children:Object(I.jsx)(W.a,{icon:J.b})})]})})})]})]})},B=n(15),V=function(){var e=Object(o.h)().room_id,t=Object(o.g)(),n=Object(l.d)((function(e){return e.removeRoom})),c=Object(l.d)((function(e){return e.setSensors})),a=Object(l.e)((function(e){return e.rooms})),r=Object(l.e)((function(e){return e.sensors})),u=Object(l.e)((function(e){return e.message})),j=a.filter((function(t){return t.id==e}))[0];return Object(s.useEffect)((function(){w(e).then((function(e){return c(e.sensors)}))}),[e]),Object(s.useEffect)((function(){0==a.length&&t.push("/")}),[]),Object(s.useEffect)((function(){if(u.room_id==e){var t=r.map((function(e){return e.id==u.sensor_id?Object(B.a)(Object(B.a)({},e),{},{last_measurement:u.value,updated_at:u.updated_at}):e}));c(t)}}),[u]),Object(I.jsx)("div",{className:"content column m-0 p-0",children:0!=a.length?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"",children:Object(I.jsxs)("p",{className:"title is-3 mt-4 mt-0 ml-2 p-0",children:[j.name," ",Object(I.jsxs)("span",{className:"is-size-6 has-text-grey",children:["(",j.id,")"]}),Object(I.jsx)(W.a,{onClick:function(){window.confirm("Delete room and all data?")&&N(e).then((function(s){s.message&&(t.push("/"),n(e))}))},className:"ml-4 has-text-link is-size-6",icon:J.e})]})}),Object(I.jsxs)("div",{class:"is-flex is-flex-wrap-wrap",children:[r.map((function(t){return Object(I.jsx)("div",{className:"card m-1",children:Object(I.jsx)(i.b,{to:"/room/".concat(e,"/sensor/").concat(t.id),children:Object(I.jsxs)("div",{className:"card-content",children:[Object(I.jsxs)("p",{className:"title is-3",children:[t.name," ",Object(I.jsxs)("span",{className:"is-size-6 has-text-grey",children:["(",t.id,")"]})]}),Object(I.jsx)("p",{className:"subtitle is-6 m-0",children:t.variable}),Object(I.jsxs)("p",{className:"m-0",children:[Object(I.jsxs)("span",{className:"is-size-2",children:[t.last_measurement," "]}),Object(I.jsxs)("span",{className:"is-size-4",children:[t.unit," "]})]})]})})})})),Object(I.jsx)("div",{className:"card m-1",children:Object(I.jsx)(i.b,{to:"/add_sensor/".concat(e),children:Object(I.jsxs)("div",{className:"card-content",children:[Object(I.jsx)("p",{className:"title is-3",children:"Add sensor"}),Object(I.jsx)("p",{className:"subtitle is-1 has-text-success",children:Object(I.jsx)(W.a,{icon:J.b})})]})})})]})]}):""})},G=n(124),H=function(){var e,t=Object(s.useState)(!0),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)((e=Date.now(),new Date(e).toLocaleString("sv-SE").split(" ")[0])),i=Object(u.a)(r,2),j=i[0],d=i[1],b=Object(s.useState)([]),m=Object(u.a)(b,2),p=m[0],O=m[1],h=Object(s.useState)([]),f=Object(u.a)(h,2),x=f[0],v=f[1],N=Object(o.h)(),g=N.sensor_id,w=N.room_id,k=Object(l.e)((function(e){return e.sensors})),_=Object(l.e)((function(e){return e.message})),z=Object(l.d)((function(e){return e.removeSensor})),E=k.filter((function(e){return e.id==g}))[0],D=Object(l.e)((function(e){return e.measurements})),R=Object(l.d)((function(e){return e.setMeasurements})),M=Object(l.d)((function(e){return e.addMeasurement})),A=Object(l.d)((function(e){return e.shiftMeasurement})),L=Object(s.useState)(E.last_measurement),P=Object(u.a)(L,2),U=P[0],F=P[1],T=Object(o.g)();Object(s.useEffect)((function(){0==k.length&&T.push("/")}),[]),Object(s.useEffect)((function(){console.log("...measurements"),y(w,g).then((function(e){console.log(e.measurements),R(e.measurements)}))}),[g]),Object(s.useEffect)((function(){_.room_id==w&&_.sensor_id==g&&(F(_.value),c&&(D.length>300&&A(),M(Object(B.a)(Object(B.a)({},_),{},{id:Date.now(),updated_at:Date(_.updated_at)}))))}),[_]),Object(s.useEffect)((function(){O(D.map((function(e){return q(e.updated_at)}))),v(D.map((function(e){return e.value})))}),[D]);return Object(I.jsx)("div",{className:"column pt-4",children:0!=k.length?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"is-flex is-justify-content-space-between",children:[Object(I.jsxs)("p",{children:[Object(I.jsxs)("span",{className:"title is-3",children:[E.name,": "]}),Object(I.jsx)("span",{className:"is-size-3 has-text-success ",children:U}),Object(I.jsxs)("span",{className:"is-size-4 has-text-success ",children:[" ",E.unit]})]}),Object(I.jsx)("p",{onClick:function(){window.confirm("Delete sensor and all data?")&&S(w,g).then((function(e){e.message&&(T.push("/room/".concat(w)),z(g))}))},className:"has-text-danger title is-5",children:Object(I.jsx)(W.a,{icon:J.e,className:"mt-4 mr-4"})})]}),Object(I.jsx)("div",{className:"card",children:Object(I.jsx)(G.a,{data:function(){return function(e,t){return{labels:e,datasets:[{label:"Temperature \u0970C",data:t,fill:!1,borderColor:"#2ecc71",tension:.1}]}}(p,x)},options:{animation:{duration:0},plugins:{legend:{display:!1}},scales:{y:{suggestedMin:10,suggestedMax:45,ticks:{font:{size:20}}},x:{ticks:{font:{size:20}}}}}})}),Object(I.jsxs)("div",{className:"is-flex is-justify-content-space-between p-3",children:[Object(I.jsxs)("button",{onClick:function(){y(w,g).then((function(e){console.log(e.measurements),R(e.measurements)})),a(!0)},className:"is-medium button is-outlined ".concat(c&&"is-success"),children:[Object(I.jsx)(W.a,{icon:J.a,spin:c,className:"mr-2"}),"Realtime"]}),Object(I.jsxs)("div",{className:"is-flex",children:[Object(I.jsx)("label",{class:"label is-medium mr-2",children:"Date:"}),Object(I.jsx)("input",{onChange:function(e){console.log("query date:",e.target.value),d(e.target.value),a(!1),C(w,g,{date:e.target.value}).then((function(e){console.log(e.measurements),R(e.measurements)}))},value:j,type:"date",className:"is-medium input mr-3 ".concat(!c&&"is-success")})]})]})]}):""})},K=n(11),Q={wifissid:"wifi_name",wifipass:"wifi_password"},X=function(e){return JSON.parse(window.localStorage.getItem(e))||Q[e]},Y={rooms:[],setRooms:Object(l.b)((function(e,t){e.rooms=Object(K.a)(t)})),addRoom:Object(l.b)((function(e,t){e.rooms.push(t)})),removeRoom:Object(l.b)((function(e,t){e.rooms=e.rooms.filter((function(e){return e.id!=t}))})),updateRoom:Object(l.b)((function(e,t,n){e.rooms=e.rooms.map((function(e){return e.id==t?Object(B.a)(Object(B.a)({},e),n):e}))})),sensors:[],setSensors:Object(l.b)((function(e,t){e.sensors=Object(K.a)(t)})),removeSensor:Object(l.b)((function(e,t){e.sensors=e.sensors.filter((function(e){return e.id!=t}))})),measurements:[],setMeasurements:Object(l.b)((function(e,t){e.measurements=Object(K.a)(t)})),addMeasurement:Object(l.b)((function(e,t){e.measurements.push(t)})),shiftMeasurement:Object(l.b)((function(e){e.measurements.shift()})),message:{},setMessage:Object(l.b)((function(e,t){e.message=t})),wifipass:X("wifipass"),wifissid:X("wifissid"),setWifipass:Object(l.b)((function(e,t){e.wifipass=t})),setWifissid:Object(l.b)((function(e,t){e.wifissid=t}))},Z=function(){var e=Object(l.e)((function(e){return e.wifipass})),t=Object(l.e)((function(e){return e.wifissid})),n=Object(l.d)((function(e){return e.setWifipass})),c=Object(l.d)((function(e){return e.setWifissid})),a=Object(s.useState)([]),r=Object(u.a)(a,2),i=r[0],o=r[1],j=Object(s.useState)(null),d=Object(u.a)(j,2),b=d[0],m=d[1];return Object(s.useEffect)((function(){z().then((function(e){return o(e.networks)})),_().then((function(e){return m(e.card)}))}),[]),Object(I.jsx)("div",{className:"column",children:Object(I.jsxs)("div",{className:"card m-4 p-4",children:[Object(I.jsx)("header",{className:"card-header p-2",children:Object(I.jsx)("h1",{children:"Wireless configuration"})}),Object(I.jsx)("div",{className:"card-content",children:Object(I.jsx)("div",{className:"content",children:Object(I.jsxs)("div",{className:"columns",children:[Object(I.jsxs)("div",{className:"column",children:[Object(I.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"SSID"}),Object(I.jsx)("input",{value:t,type:"text",onChange:function(e){return c(e.target.value)},className:"input no-frame-input title is-3 has-text-centered"})]}),Object(I.jsxs)("div",{className:"column",children:[Object(I.jsx)("p",{className:"subtitle is-4 has-text-centered m-4",children:"Password"}),Object(I.jsx)("input",{value:e,type:"text",onChange:function(e){return n(e.target.value)},className:"input no-frame-input title is-3 has-text-centered"})]})]})})}),Object(I.jsx)("div",{className:"card-footer is-flex-direction-column",children:Object(I.jsx)("button",{onClick:function(){P("wifissid",t),P("wifipass",e),D(t,e)},className:"button card-footer-item",children:"Save"})}),Object(I.jsxs)("div",{className:"is-flex is-flex-direction-column is-flex-centered m-4",children:[Object(I.jsxs)("p",{className:"heading has-text-centered has-text-link",children:["Available Networks (",b,")"]}),Object(I.jsxs)("table",{className:"table is-bordered is-striped is-narrow",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{className:"has-text-centered is-size-6",children:"SSID"}),Object(I.jsx)("th",{className:"has-text-centered is-size-6",children:"SNR"})]})}),Object(I.jsx)("tbody",{children:i.map((function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsxs)("td",{className:"has-text-centered is-size-6",children:[" ",e.ssid," "]}),Object(I.jsxs)("td",{className:"has-text-centered is-size-6",children:[" ",e.snr," "]})]},e.ssid)}))})]})]})]})})},$=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){E().then((function(e){return c(e.id)}))}),[]),Object(I.jsx)("div",{className:"column",children:Object(I.jsxs)("div",{className:"card m-4 p-4",children:[Object(I.jsx)("header",{className:"card-header p-2",children:Object(I.jsx)("h1",{children:"Power control"})}),Object(I.jsxs)("div",{className:"card-content",children:[Object(I.jsx)("div",{className:"content",children:Object(I.jsxs)("div",{className:"columns",children:[Object(I.jsxs)("div",{onClick:R,className:"column is-flex is-flex-centered is-flex-direction-column",children:[Object(I.jsx)(W.a,{icon:J.c,className:"is-size-1 has-text-link m-2"}),Object(I.jsx)("p",{children:"Power Off"})]}),Object(I.jsxs)("div",{onClick:M,className:"column is-flex is-flex-centered is-flex-direction-column",children:[Object(I.jsx)(W.a,{icon:J.d,className:"is-size-1 has-text-link mb-1"}),Object(I.jsx)("p",{children:"Restart"})]})]})}),Object(I.jsx)("footer",{className:"card-footer is-flex-centered",children:Object(I.jsxs)("p",{className:"heading has-text-link is-size-6 is-centered",children:["id: ",n]})})]})]})})},ee=Object(l.c)(Y),te=function(){return Object(I.jsx)("div",{className:"container is-widescreen",children:Object(I.jsx)("div",{className:"columns",children:Object(I.jsxs)(l.a,{store:ee,children:[Object(I.jsx)(U,{}),Object(I.jsx)(F,{}),Object(I.jsxs)(o.d,{children:[Object(I.jsx)(o.a,{exact:!0,from:"/",to:"/rooms"}),Object(I.jsx)(o.b,{path:"/rooms",component:T}),Object(I.jsx)(o.b,{path:"/room/:room_id/sensor/:sensor_id",component:H}),Object(I.jsx)(o.b,{path:"/room/:room_id",component:V}),Object(I.jsx)(o.b,{path:"/add_room",component:A}),Object(I.jsx)(o.b,{path:"/add_sensor/:room_id",component:L}),Object(I.jsx)(o.b,{path:"/wireless",component:Z}),Object(I.jsx)(o.b,{path:"/system",component:$})]})]})})})};r.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(i.a,{children:Object(I.jsx)(te,{})})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.d0f8e9b9.chunk.js.map