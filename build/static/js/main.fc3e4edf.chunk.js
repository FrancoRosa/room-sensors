(this["webpackJsonproom-sensors"]=this["webpackJsonproom-sensors"]||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(119),r=n.n(a),o=n(8),i=(n(129),n(130),n(5)),l=n(2),u=n(4),j=n(7),d=n.n(j),m=n(25),b=n(26),O=n.n(b),p=n(120),h="localhost:9999",f=n.n(p).a.connect("http://".concat(h)),x=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting rooms"),t="http://".concat(h,"/api/rooms"),e.next=4,O.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... creating room"),n="http://".concat(h,"/api/rooms"),e.next=4,O.a.post(n,t);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... deleting room"),n="http://".concat(h,"/api/rooms/").concat(t),e.next=4,O.a.delete(n);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... updating room"),s="http://".concat(h,"/api/rooms/").concat(t),e.next=4,O.a.put(s,n);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting sensors"),n="http://".concat(h,"/api/rooms/").concat(t,"/sensors"),e.next=4,O.a.get(n);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... creating room"),s="http://".concat(h,"/api/rooms/").concat(t,"/sensors"),e.next=4,O.a.post(s,n);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... deleting sensor"),s="http://".concat(h,"/api/rooms/").concat(t,"/sensors/").concat(n),e.next=4,O.a.delete(s);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting sensor values"),s="http://".concat(h,"/api/rooms/").concat(t,"/sensors/").concat(n,"/measurements"),e.next=4,O.a.get(s);case 4:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(d.a.mark((function e(t,n,s){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting sensor values query"),c="http://".concat(h,"/api/rooms/").concat(t,"/sensors/").concat(n,"/measurements/query"),e.next=4,O.a.post(c,s);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),C=n(0),E=function(){var e=Object(i.g)(),t=Object(s.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(""),o=Object(u.a)(r,2),j=o[0],d=o[1],m=Object(s.useState)(""),b=Object(u.a)(m,2),O=b[0],p=b[1],h=Object(l.d)((function(e){return e.addRoom}));return Object(C.jsx)("div",{className:"column",children:Object(C.jsxs)("div",{className:"card m-4 p-4",children:[Object(C.jsx)("div",{className:"title is-3",children:"Add room"}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Name"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)},className:"input",type:"text",placeholder:"Room name"})})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Description"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("textarea",{value:j,onChange:function(e){return d(e.target.value)},className:"textarea",type:"text",placeholder:"Room description"})})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Id"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("input",{value:O,onChange:function(e){return p(e.target.value)},className:"input",type:"number",min:"1",step:"1",placeholder:"Unique id"})})]}),Object(C.jsx)("div",{className:"field mt-4",children:Object(C.jsx)("div",{className:"control",children:Object(C.jsx)("button",{className:"button is-primary",onClick:function(){v({name:c,description:j,id:O,sensors:0}).then((function(t){t.message&&(h({name:c,description:j,id:O,sensors:0}),e.push("/"))}))},children:"Save"})})})]})})},D=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(u.a)(a,2),o=r[0],j=r[1],d=Object(s.useState)(""),m=Object(u.a)(d,2),b=m[0],O=m[1],p=Object(s.useState)(""),h=Object(u.a)(p,2),f=h[0],x=h[1],v=Object(s.useState)(""),N=Object(u.a)(v,2),w=N[0],y=N[1],k=Object(i.h)().room_id,_=Object(i.g)(),E=Object(l.e)((function(e){return e.rooms})),D=Object(l.d)((function(e){return e.updateRoom}));return Object(C.jsx)("div",{className:"column",children:Object(C.jsxs)("div",{className:"card m-4 p-4",children:[Object(C.jsx)("div",{className:"title is-3",children:"Add Sensor"}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Name"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("input",{onChange:function(e){return c(e.target.value)},value:n,className:"input",type:"text",placeholder:"Sensor name"})})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Description"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("textarea",{onChange:function(e){return j(e.target.value)},value:o,className:"textarea",type:"text",placeholder:"Sensor description"})})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Variable"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("input",{onChange:function(e){return O(e.target.value)},value:b,className:"input",type:"text",placeholder:"Ex: Temperature"})})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Unit"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("input",{onChange:function(e){return x(e.target.value)},value:f,className:"input",type:"text",placeholder:"Ex: \u0970C"})})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("label",{className:"label",children:"Id"}),Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("input",{onChange:function(e){return y(e.target.value)},value:w,className:"input",type:"number",min:"1",step:"1",placeholder:"Unique id"})})]}),Object(C.jsx)("div",{className:"field mt-4",children:Object(C.jsx)("div",{className:"control",children:Object(C.jsx)("button",{className:"button is-primary",onClick:function(){var e={name:n,description:o,variable:b,unit:f,id:w},t=E.filter((function(e){return e.id==k}))[0].sensors;S(k,e).then((function(e){return console.log("sensor created")})),g(k,{sensors:t+1}).then((function(e){D(k,{sensors:t+1}),_.push("/room/".concat(k))}))},children:"Save"})})})]})})},R=n(18),z=n(17),M=function(e){return new Date(e).toLocaleString("sv-SE").split(" ")[1]},A=function(){var e=Object(s.useState)(Date()),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){setInterval((function(){c(Date())}),1e3)}),[]),Object(C.jsx)("p",{disabled:!0,className:"button is-outlined is-white clock heading has-text-white is-size-4",children:M(n)})},q=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(null),r=Object(u.a)(a,2),i=r[0],j=r[1],d=Object(l.e)((function(e){return e.rooms})),m=Object(l.e)((function(e){return e.sensors})),b=(Object(l.e)((function(e){return e.message})),Object(l.d)((function(e){return e.setRooms}))),O=Object(l.d)((function(e){return e.setMessage}));return Object(s.useEffect)((function(){return x().then((function(e){return b(e.rooms)})),f.on("message",(function(e){O(JSON.parse(e)),console.log(JSON.parse(e))})),function(){f.off("message")}}),[]),Object(C.jsxs)("aside",{className:"menu column is-one-fifth p-4 is-size-5",children:[Object(C.jsx)("p",{className:"menu-label has-text-link ml-2",children:Object(C.jsx)(o.b,{to:"/rooms",onClick:function(){c(null),j(null)},children:"Rooms"})}),Object(C.jsxs)("ul",{className:"menu-list p-0 m-0",children:[d.map((function(e){return Object(C.jsxs)("li",{children:[Object(C.jsx)(o.b,{to:"/room/".concat(e.id),onClick:function(){j(null),n==e.id?c(null):c(e.id)},className:e.id==n?"is-active":"",children:e.name}),e.id==n?Object(C.jsxs)("ul",{className:"p-0 m-0",children:[m.map((function(t){return Object(C.jsx)("li",{className:"p-0 m-0",children:Object(C.jsx)(o.b,{to:"/room/".concat(e.id,"/sensor/").concat(t.id),onClick:function(){return j(t.id)},className:t.id==i?"p-0 m-0 is-active":"p-0 m-0",children:t.name})})})),Object(C.jsx)("li",{children:Object(C.jsxs)(o.b,{onClick:function(){return j(null)},to:"/add_sensor/".concat(e.id),children:[Object(C.jsx)("span",{className:"has-text-link",children:Object(C.jsx)(z.a,{icon:R.b})}),Object(C.jsx)("span",{className:"ml-2 is-size-6",children:"Add sensor"})]})})]}):""]})})),Object(C.jsx)("li",{children:Object(C.jsxs)(o.b,{to:"/add_room",onClick:function(){return c(null)},children:[Object(C.jsx)("span",{className:"has-text-link",children:Object(C.jsx)(z.a,{icon:R.b})}),Object(C.jsx)("span",{className:"ml-2",children:"Add room"})]})})]})]})},I=function(){var e=Object(l.e)((function(e){return e.rooms}));return Object(C.jsxs)("div",{className:"column content",children:[Object(C.jsx)("h1",{className:"title is-3 m-4",children:"Rooms"}),Object(C.jsxs)("div",{class:"is-flex is-flex-wrap-wrap",children:[e.map((function(e){return Object(C.jsx)("div",{className:"card m-4",children:Object(C.jsx)(o.b,{to:"/room/".concat(e.id),children:Object(C.jsxs)("div",{className:"card-content",children:[Object(C.jsxs)("p",{className:"title is-3",children:[e.name," ",Object(C.jsxs)("span",{className:"subtitle is-4",children:["(",e.id,")"]})]}),Object(C.jsx)("p",{className:"subtitle is-5",children:e.description}),Object(C.jsxs)("p",{children:["Sensors connected: ",e.sensors]}),Object(C.jsxs)("p",{children:["Last update: ",(t=e.updated_at,new Date(t).toLocaleString("sv-SE"))]})]})})});var t})),Object(C.jsx)("div",{className:"card m-4",children:Object(C.jsx)(o.b,{to:"/add_room",children:Object(C.jsxs)("div",{className:"card-content",children:[Object(C.jsx)("p",{className:"title is-3",children:"Add room"}),Object(C.jsx)("p",{className:"subtitle is-1 has-text-success",children:Object(C.jsx)(z.a,{icon:R.b})})]})})})]})]})},J=n(11),L=function(){var e=Object(i.h)().room_id,t=Object(i.g)(),n=Object(l.d)((function(e){return e.removeRoom})),c=Object(l.d)((function(e){return e.setSensors})),a=Object(l.e)((function(e){return e.rooms})),r=Object(l.e)((function(e){return e.sensors})),u=Object(l.e)((function(e){return e.message})),j=a.filter((function(t){return t.id==e}))[0];return Object(s.useEffect)((function(){w(e).then((function(e){return c(e.sensors)}))}),[e]),Object(s.useEffect)((function(){0==a.length&&t.push("/")}),[]),Object(s.useEffect)((function(){if(u.room_id==e){var t=r.map((function(e){return e.id==u.sensor_id?Object(J.a)(Object(J.a)({},e),{},{last_measurement:u.value,updated_at:u.updated_at}):e}));c(t)}}),[u]),Object(C.jsx)("div",{className:"content column m-0 p-0",children:0!=a.length?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"",children:Object(C.jsxs)("p",{className:"title is-3 mt-4 mt-0 ml-2 p-0",children:[j.name," ",Object(C.jsxs)("span",{className:"is-size-6 has-text-grey",children:["(",j.id,")"]}),Object(C.jsx)(z.a,{onClick:function(){window.confirm("Delete room and all data?")&&N(e).then((function(s){s.message&&(t.push("/"),n(e))}))},className:"ml-4 has-text-link is-size-6",icon:R.c})]})}),Object(C.jsxs)("div",{class:"is-flex is-flex-wrap-wrap",children:[r.map((function(t){return Object(C.jsx)("div",{className:"card m-1",children:Object(C.jsx)(o.b,{to:"/room/".concat(e,"/sensor/").concat(t.id),children:Object(C.jsxs)("div",{className:"card-content",children:[Object(C.jsxs)("p",{className:"title is-3",children:[t.name," ",Object(C.jsxs)("span",{className:"is-size-6 has-text-grey",children:["(",t.id,")"]})]}),Object(C.jsx)("p",{className:"subtitle is-6 m-0",children:t.variable}),Object(C.jsxs)("p",{className:"m-0",children:[Object(C.jsxs)("span",{className:"is-size-2",children:[t.last_measurement," "]}),Object(C.jsxs)("span",{className:"is-size-4",children:[t.unit," "]})]})]})})})})),Object(C.jsx)("div",{className:"card m-1",children:Object(C.jsx)(o.b,{to:"/add_sensor/".concat(e),children:Object(C.jsxs)("div",{className:"card-content",children:[Object(C.jsx)("p",{className:"title is-3",children:"Add sensor"}),Object(C.jsx)("p",{className:"subtitle is-1 has-text-success",children:Object(C.jsx)(z.a,{icon:R.b})})]})})})]})]}):""})},U=n(124),F=function(){var e,t=Object(s.useState)(!0),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)((e=Date.now(),new Date(e).toLocaleString("sv-SE").split(" ")[0])),o=Object(u.a)(r,2),j=o[0],d=o[1],m=Object(s.useState)([]),b=Object(u.a)(m,2),O=b[0],p=b[1],h=Object(s.useState)([]),f=Object(u.a)(h,2),x=f[0],v=f[1],N=Object(i.h)(),g=N.sensor_id,w=N.room_id,S=Object(l.e)((function(e){return e.sensors})),E=Object(l.e)((function(e){return e.message})),D=Object(l.d)((function(e){return e.removeSensor})),A=S.filter((function(e){return e.id==g}))[0],q=Object(l.e)((function(e){return e.measurements})),I=Object(l.d)((function(e){return e.setMeasurements})),L=Object(l.d)((function(e){return e.addMeasurement})),F=Object(l.d)((function(e){return e.shiftMeasurement})),T=Object(s.useState)(A.last_measurement),B=Object(u.a)(T,2),V=B[0],G=B[1],H=Object(i.g)();Object(s.useEffect)((function(){0==S.length&&H.push("/")}),[]),Object(s.useEffect)((function(){console.log("...measurements"),k(w,g).then((function(e){console.log(e.measurements),I(e.measurements)}))}),[g]),Object(s.useEffect)((function(){E.room_id==w&&E.sensor_id==g&&(G(E.value),c&&(q.length>300&&F(),L(Object(J.a)(Object(J.a)({},E),{},{id:Date.now(),updated_at:Date(E.updated_at)}))))}),[E]),Object(s.useEffect)((function(){p(q.map((function(e){return M(e.updated_at)}))),v(q.map((function(e){return e.value})))}),[q]);return Object(C.jsx)("div",{className:"column pt-4",children:0!=S.length?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"is-flex is-justify-content-space-between",children:[Object(C.jsxs)("p",{children:[Object(C.jsxs)("span",{className:"title is-3",children:[A.name,": "]}),Object(C.jsx)("span",{className:"is-size-3 has-text-success ",children:V}),Object(C.jsxs)("span",{className:"is-size-4 has-text-success ",children:[" ",A.unit]})]}),Object(C.jsx)("p",{onClick:function(){window.confirm("Delete sensor and all data?")&&y(w,g).then((function(e){e.message&&(H.push("/room/".concat(w)),D(g))}))},className:"has-text-danger title is-5",children:Object(C.jsx)(z.a,{icon:R.c,className:"mt-4 mr-4"})})]}),Object(C.jsx)("div",{className:"card",children:Object(C.jsx)(U.a,{data:function(){return function(e,t){return{labels:e,datasets:[{label:"Temperature \u0970C",data:t,fill:!1,borderColor:"#2ecc71",tension:.1}]}}(O,x)},options:{animation:{duration:0},plugins:{legend:{display:!1}},scales:{y:{suggestedMin:10,suggestedMax:45,ticks:{font:{size:20}}},x:{ticks:{font:{size:20}}}}}})}),Object(C.jsxs)("div",{className:"is-flex is-justify-content-space-between p-3",children:[Object(C.jsxs)("button",{onClick:function(){k(w,g).then((function(e){console.log(e.measurements),I(e.measurements)})),a(!0)},className:"is-medium button is-outlined ".concat(c&&"is-success"),children:[Object(C.jsx)(z.a,{icon:R.a,spin:c,className:"mr-2"}),"Realtime"]}),Object(C.jsxs)("div",{className:"is-flex",children:[Object(C.jsx)("label",{class:"label is-medium mr-2",children:"Date:"}),Object(C.jsx)("input",{onChange:function(e){console.log("query date:",e.target.value),d(e.target.value),a(!1),_(w,g,{date:e.target.value}).then((function(e){console.log(e.measurements),I(e.measurements)}))},value:j,type:"date",className:"is-medium input mr-3 ".concat(!c&&"is-success")})]})]})]}):""})},T=n(9),B={rooms:[],setRooms:Object(l.b)((function(e,t){e.rooms=Object(T.a)(t)})),addRoom:Object(l.b)((function(e,t){e.rooms.push(t)})),removeRoom:Object(l.b)((function(e,t){e.rooms=e.rooms.filter((function(e){return e.id!=t}))})),updateRoom:Object(l.b)((function(e,t,n){e.rooms=e.rooms.map((function(e){return e.id==t?Object(J.a)(Object(J.a)({},e),n):e}))})),sensors:[],setSensors:Object(l.b)((function(e,t){e.sensors=Object(T.a)(t)})),removeSensor:Object(l.b)((function(e,t){e.sensors=e.sensors.filter((function(e){return e.id!=t}))})),measurements:[],setMeasurements:Object(l.b)((function(e,t){e.measurements=Object(T.a)(t)})),addMeasurement:Object(l.b)((function(e,t){e.measurements.push(t)})),shiftMeasurement:Object(l.b)((function(e){e.measurements.shift()})),message:{},setMessage:Object(l.b)((function(e,t){e.message=t}))},V=Object(l.c)(B),G=function(){return Object(C.jsx)("div",{className:"container is-widescreen",children:Object(C.jsx)("div",{className:"columns",children:Object(C.jsxs)(l.a,{store:V,children:[Object(C.jsx)(A,{}),Object(C.jsx)(q,{}),Object(C.jsxs)(i.d,{children:[Object(C.jsx)(i.a,{exact:!0,from:"/",to:"/rooms"}),Object(C.jsx)(i.b,{path:"/rooms",component:I}),Object(C.jsx)(i.b,{path:"/room/:room_id/sensor/:sensor_id",component:F}),Object(C.jsx)(i.b,{path:"/room/:room_id",component:L}),Object(C.jsx)(i.b,{path:"/add_room",component:E}),Object(C.jsx)(i.b,{path:"/add_sensor/:room_id",component:D})]})]})})})};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(G,{})})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.fc3e4edf.chunk.js.map