(this["webpackJsonpmy-app-ts-pruebas"]=this["webpackJsonpmy-app-ts-pruebas"]||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),o=n(14),s=n.n(o),a=(n(44),n(45),n(10)),u=n(38),r=n(39),b=n.n(r),f=n(1);function j(){var t=Object(c.useState)(10),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)(10),s=Object(a.a)(o,2),r=s[0],j=s[1],p=Object(c.useState)(),l=Object(a.a)(p,2),d=l[0],O=l[1],g=Object(c.useState)({x:n,y:r}),h=Object(a.a)(g,2);h[0],h[1];Object(c.useEffect)((function(){var t=Object(u.io)("https://futanarichatfox.herokuapp.com/");return O(t),function(){t.disconnect()}}),[]),Object(c.useEffect)((function(){console.log(d),null!=d&&void 0!==d&&d.on("prueba1",(function(t){console.log(t),i(t.positionx),j(t.positiony)}))}));var x={x:n,y:r};return Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{onStop:function(t){return function(t){i(t.clientX-t.offsetX),j(t.clientY-t.offsetY),null!=d&&void 0!==d&&d.emit("prueba",{id:1,positionx:t.clientX-t.offsetX,positiony:t.clientY-t.offsetY})}(t)},position:x,children:Object(f.jsx)("div",{className:"p",children:Object(f.jsx)("img",{draggable:"false",className:"imagenPer",src:"https://i.pinimg.com/564x/dc/a0/4d/dca04d1d0f1e45385b9ce1db19b754a9.jpg",alt:""})})})})}var p=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(j,{})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),l()}},[[84,1,2]]]);
//# sourceMappingURL=main.b0586c00.chunk.js.map