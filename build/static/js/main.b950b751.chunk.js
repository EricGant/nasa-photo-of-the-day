(this["webpackJsonpnasa-apod"]=this["webpackJsonpnasa-apod"]||[]).push([[0],{152:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),o=t(17),c=t.n(o),i=(t(67),t(8)),l=t(29),u=(t(68),t(53)),d=t.n(u),m=t(9);function s(){var n=Object(i.a)(["\n  border: 1px solid black;\n  margin: 1rem 0 1rem 0 ;\n  height: 80vh;\n  "]);return s=function(){return n},n}var p=function(n){var e=n.pic;console.log(e);var t=m.a.img(s());return a.a.createElement("div",null,a.a.createElement(t,{src:e,alt:"Outer Space"}))};function f(){var n=Object(i.a)(["\n        display:flex;\n        flex-flow: column nowrap;\n        align-items: center;\n        justify-content:space-between;\n\n    .hdPicRedirect {\n        display:flex;\n        justify-content: center;\n        align-items: center;\n        padding: .5rem;\n        margin: 1rem 0 1rem 0;\n        color:#d9d9d9;\n        background:#0d0d0d;\n        border:2px solid black;\n        border-radius: 1rem;\n        font-size:1rem;\n            &:hover {\n            cursor: pointer;\n        }\n    }  \n    p {\n        font-weight: 300;\n        margin-bottom: 1rem;\n        width: 75%;\n        padding:1%;\n        line-height: 1.5;\n        color:#d9d9d9;\n        background: #0d0d0d;\n        border: 2px solid black;\n        border-radius:1rem;\n        text-align:center;\n        font-size: 1.3rem;\n    }\n      "]);return f=function(){return n},n}var g=function(n){var e=n.explanation,t=n.hdpic,r=n.url,o=m.a.div(f());return a.a.createElement(o,null,r.includes("youtube")?null:a.a.createElement("a",{href:t,style:{textDecoration:"none"}},a.a.createElement("button",{className:"hdPicRedirect"},"Click to view HD Photo")),a.a.createElement("p",null,e))};function h(){var n=Object(i.a)(["\n    margin-top: 2px;\n    display:flex;\n    flex-flow: column nowrap;\n    align-items: center;    \n    h1, h2, h3 {\n        color:lightgray\n    }\n    \n    h1, h3 {\n        font-size:2rem;\n        margin-top: 1rem;\n    }\n    h2 {\n        font-weight:450;\n    }\n\n    "]);return h=function(){return n},n}var b=function(n){var e=n.title,t=m.a.div(h());return a.a.createElement(t,null,a.a.createElement("h1",null,"Nasa's Astronomy Picture of the Day"),a.a.createElement("h3",null,e))};function y(){var n=Object(i.a)(["\n    color:lightgray;\n    margin: 0rem 1rem 1rem 1rem;\n   "]);return y=function(){return n},n}var v=function(n){var e=n.copyright,t=m.a.div(y());return a.a.createElement(t,null,a.a.createElement("h4",null,"Photo from ",e))},x=t(58),E=t.n(x),w=(t(87),t(37)),k=t.n(w),j=t(57),O=t.n(j);function z(){var n=Object(i.a)(['\n  *{\n    padding:0px;\n    margin:0px;\n  }\n    background: url("https://cdn.wallpapersafari.com/56/11/OIf0lp.jpg");\n    background-position:center;\n    background-repeat: no-repeat;\n    background-size:cover;\n    display:flex;\n    flex-flow: column nowrap;\n    align-items:center;\n    justify-content:space-between;\n    min-height: 100vh;\n    box-sizing:border-box;\n\n    .react-datepicker__input-container input{\n\n      padding: .5rem 0 .5rem 0 ;\n      text-align: center;\n      margin: 1rem 0 0 0;\n      color:#d9d9d9;\n      background:#0d0d0d;\n      border:2px solid black;\n      border-radius: 1rem;\n      font-size: 1rem;\n      font-weight:600;\n      &:hover {\n            cursor: pointer;\n        }\n        \n    }\n    ']);return z=function(){return n},n}var D=function(n){var e=Object(r.useState)([]),t=Object(l.a)(e,2),o=t[0],c=t[1],i=Object(r.useState)(new Date),u=Object(l.a)(i,2),s=u[0],f=u[1],h=Object(r.useState)(""),y=Object(l.a)(h,2),x=y[0],w=y[1],j=m.a.div(z()),D=k()(s,"yyyy-mm-dd");return k()(s,"mmmm d, yyyy"),Object(r.useEffect)((function(){d.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat("CRbgfiBe0DvqLnLbX9tJ9rOkzmHGa25mAqrgIbQx","&date=").concat(D)).then((function(n){w(n.data.url),c(n.data),console.log(n.data)})).catch((function(n){return console.log(n)}))}),[D]),a.a.createElement(j,{className:"container"},a.a.createElement(b,{title:o.title}),a.a.createElement(E.a,{dateFormat:"MMMM dd, yyyy",className:"newClass",type:"text",selected:s,onChange:function(n){return f(n)}}),x.includes("youtube")?a.a.createElement(O.a,{url:o.url}):a.a.createElement(p,{pic:o.url}),a.a.createElement(g,{hdpic:o.hdurl,explanation:o.explanation,url:x}),void 0===o.copyright?null:a.a.createElement(v,{copyright:o.copyright}))};c.a.render(a.a.createElement(D,null),document.getElementById("root"))},62:function(n,e,t){n.exports=t(152)},67:function(n,e,t){},68:function(n,e,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.b950b751.chunk.js.map