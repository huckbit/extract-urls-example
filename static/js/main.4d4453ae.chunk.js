(this["webpackJsonpextract-urls-example"]=this["webpackJsonpextract-urls-example"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(11),a(1)),s=a(5),m=a.n(s),i=(a(12),a(13),c.a.createContext());function u(e){var t=window.localStorage.getItem("theme")||"light",a=Object(n.useState)(t),l=Object(o.a)(a,2),r=l[0],s=l[1];return Object(n.useEffect)((function(){localStorage.setItem("theme",r)}),[r]),c.a.createElement(i.Provider,{value:{theme:r,toggleTheme:function(){s("light"===r?"dark":"light")}}},e.children)}var b=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useContext)(i),s=r.theme,m=r.toggleTheme;return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg nav-bg--".concat(s," navbar-").concat(s)},c.a.createElement("a",{className:"navbar-brand--".concat(s),href:"/"},c.a.createElement("i",{className:"fas fa-link"})," extract-urls"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){l(!a)}},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:a?"collapse navbar-collapse show":"collapse navbar-collapse"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link nav-link--".concat(s),href:"https://github.com/huckbit/extract-urls#readme"},c.a.createElement("i",{className:"fas fa-file-code"})," Documentation")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link nav-link--".concat(s),href:"https://www.npmjs.com/package/extract-urls"},c.a.createElement("i",{className:"fab fa-npm"})," Package")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link nav-link--".concat(s),href:"https://github.com/huckbit/extract-urls"},c.a.createElement("i",{className:"fas fa-code-branch"})," Repository")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("button",{className:"btn nav-link nav-link--".concat(s),style:{marginLeft:"auto"},onClick:m},c.a.createElement("i",{className:"fas fa-adjust"})))))))},d=function(e){var t=Object(n.useContext)(i).theme,a=Object(n.useState)(""),l=Object(o.a)(a,2),r=l[0],s=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleUrls(r),s("")}},c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{className:"form-control mb-3",rows:"7",required:!0,placeholder:"paste text here...",value:r,onChange:function(e){return s(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"btn btn--".concat(t)},"Get Urls")))},E=function(e){var t=Object(n.useContext)(i).theme;return c.a.createElement("div",null,c.a.createElement("a",{className:"nav-link--".concat(t),href:e.uri,target:"_blank",rel:"noopener noreferrer"},e.uri))},h=function(e){return c.a.createElement("div",{className:"alert alert-".concat(e.type),role:"alert"},e.children)},f=a(2),p=function(){var e=Object(n.useContext)(i).theme;return c.a.createElement("footer",{className:"footer--".concat(e)},c.a.createElement("div",{className:"container"},c.a.createElement("p",{style:{paddingTop:"15px",textAlign:"center",marginBottom:"7px"}},c.a.createElement("a",{href:"https://github.com/huckbit"},"\xa9 huckbit ",(new Date).getFullYear()," ")),c.a.createElement("p",null,c.a.createElement(f.a,{href:"https://github.com/huckbit/extract-urls","data-icon":"octicon-star","aria-label":"Star huckbit/extract-urls on GitHub"},"Star")," ",c.a.createElement(f.a,{href:"https://github.com/huckbit/extract-urls/subscription","data-icon":"octicon-eye","aria-label":"Watch huckbit/extract-urls on GitHub"},"Watch")," ",c.a.createElement(f.a,{href:"https://github.com/huckbit/extract-urls/fork","data-icon":"octicon-repo-forked","aria-label":"Fork huckbit/extract-urls on GitHub"},"Fork"))))},v=function(e){var t=Object(n.useContext)(i).theme;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"btn btn--".concat(t," btn-sm mt-1"),onClick:function(){return e.handleDownload()},download:!0},c.a.createElement("i",{className:"fas fa-download"})," ",e.text))},g=function(e){var t=e.dataExport;return c.a.createElement("div",{className:"download"},c.a.createElement(v,{handleDownload:function(){var e=document.createElement("a"),a=t.map((function(e){return"".concat(e," \n")})),n=new Blob(a,{type:"text/plain"});e.href=URL.createObjectURL(n),e.download="urls-export-".concat(Date.now(),".txt"),e.click()},text:"Export .txt"})," ",c.a.createElement(v,{handleDownload:function(){var e=document.createElement("a"),a=t.map((function(e){return"[".concat(e,"](").concat(e,") \n")})),n=new Blob(a,{type:"text/plain"});e.href=URL.createObjectURL(n),e.download="urls-export-".concat(Date.now(),".md"),e.click()},text:"Export .md"})," ",c.a.createElement(v,{handleDownload:function(){var e=document.createElement("a"),a=t.map((function(e,t,a){return a.length-1===t?e:"".concat(e,",")})),n=new Blob(a,{type:"text/plain"});e.href=URL.createObjectURL(n),e.download="urls-export-".concat(Date.now(),".csv"),e.click()},text:"Export .csv"}))};var x=function(){var e=Object(n.useContext)(i).theme,t=Object(n.useState)(null),a=Object(o.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(null),u=Object(o.a)(s,2),f=u[0],v=u[1],x=Object(n.useState)(null),N=Object(o.a)(x,2),k=N[0],j=N[1],w=Object(n.useState)(null),O=Object(o.a)(w,2),y=O[0],S=O[1];return c.a.createElement("main",{className:"main--".concat(e)},c.a.createElement(b,null),c.a.createElement("div",{className:"jumbotron jumbotron-fluid jumbotron--".concat(e)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"extract-urls"),c.a.createElement("p",{className:"lead"}," ","Extract urls from a given string. Recognise both"," ",c.a.createElement("span",{className:"badge badge--".concat(e)},"https")," ",c.a.createElement("span",{className:"badge badge--".concat(e)},"http")," and returns a lower case list of urls."))),c.a.createElement("div",{className:"container content"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(d,{handleUrls:function(e){var t=m()(e);"undefined"===typeof t||0===t.length?(j("Last given string doesn't contain any Url!"),r(null)):(j(!1),v(t),r(t.map((function(e,t){return c.a.createElement(E,{key:t,uri:e})}))),S(t.length))}}),c.a.createElement("div",{className:"my-3"},k&&c.a.createElement(h,{type:"warning"},k),l&&c.a.createElement("div",{className:"pb-5"},c.a.createElement(h,{type:"success"},"".concat(y,y>1?" urls found":" url found")),l,c.a.createElement("hr",null),c.a.createElement(g,{dataExport:f})))))),c.a.createElement(p,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null,c.a.createElement(x,null))),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.4d4453ae.chunk.js.map