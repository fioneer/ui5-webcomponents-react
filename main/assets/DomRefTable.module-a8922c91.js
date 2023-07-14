import{j as u}from"./jsx-runtime-5926aa06.js";import{A as z,b as F,c as U,D as X}from"./chunk-PCJTTTQV-4d268401.js";import{r as M,c as w}from"./index-ebeaab24.js";import{c as P}from"./react-jss.esm-022ab528.js";import{M as k,a as q}from"./index-072d53af.js";import{T as V}from"./index-562e1433.js";import{a as $}from"./addCustomCSSWithScoping-3e959ad1.js";import{C as ee}from"./index-063ffa6b.js";import{A as te}from"./index-b490c39d.js";import{C as re}from"./index-7e299d9c.js";import{L as ne}from"./index-4d911eb4.js";import{L as le}from"./Link-04c4a519.js";const se=P({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}}),ae=e=>{const{hideHTMLPropsNote:i,noteText:s,hideTabContainer:f,...t}=e,d=se(),m=M.useRef(null);return M.useEffect(()=>{var g,n;const A=(n=(g=m.current)==null?void 0:g.querySelector("#panel-tab-content"))==null?void 0:n.previousElementSibling;f&&A&&(A.style.display="none")},[]),i?u.jsx(z,{...t}):u.jsxs("div",{className:d.tableContainer,ref:m,children:[u.jsx(k,{design:q.Information,hideCloseButton:!0,className:d.strip,children:s??"This component supports all HTML attributes."}),u.jsx(z,{...t})]})};ae.displayName="ArgsTableWithNote";const ie=P({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}});function ze(e){const{hideHTMLPropsNote:i,noteText:s,...f}=e,t=ie();return i?u.jsx(F,{...f}):u.jsxs("div",{className:t.tableContainer,children:[u.jsx(k,{design:q.Information,hideCloseButton:!0,className:t.strip,children:s??"This component supports all HTML attributes."}),u.jsx(F,{...f})]})}const oe=P({tableContainer:{marginTop:"25px","& table":{marginTop:"0 !important"}},strip:{marginBottom:"10px"}});function Fe(e){const{hideHTMLPropsNote:i,noteText:s,...f}=e,t=oe();return i?u.jsx(U,{...f}):u.jsxs("div",{className:t.tableContainer,children:[u.jsx(k,{design:q.Information,hideCloseButton:!0,className:t.strip,children:s??"This component supports all HTML attributes."}),u.jsx(U,{...f})]})}const ce=({moduleName:e,packageName:i})=>u.jsx("pre",{style:{display:"contents",overflowX:"auto",padding:"0px",background:"white",color:"black",whiteSpace:"pre-wrap",fontSize:"14px",margin:"0px"},children:u.jsxs("code",{style:{whiteSpace:"pre"},children:[u.jsx("span",{style:{color:"rgb(0, 0, 136)",fontSize:"14px"},children:"import"}),u.jsxs("span",{style:{fontSize:"14px"},children:[" ","{"," ",e," ","}"," "]}),u.jsx("span",{style:{color:"rgb(0, 0, 136)",fontSize:"14px"},children:"from"}),u.jsx("span",{children:" "}),u.jsx("span",{style:{color:"rgb(0, 136, 0)",fontSize:"14px"},children:i}),u.jsx("span",{style:{fontSize:"14px"},children:";"})]})}),de=()=>{const e=M.useContext(X),i=e.componentStories().at(0).id.startsWith("charts-"),s=e.componentStories().at(0).kind.split("/"),f=s[s.length-1].replace("(experimental)","").trim();return u.jsx(ce,{moduleName:f,packageName:`'@ui5/webcomponents-react${i?"-charts":""}'`})};de.displayName="Import";var J={exports:{}},O,Y;function ue(){return Y||(Y=1,O={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollOffset:0}),O}var _,R;function fe(){return R||(R=1,_=function(e){var i=[].forEach,s=[].some,f=document.body,t,d=!0,m=" ";function A(l,r){var o=r.appendChild(n(l));if(l.children.length){var h=c(l.isCollapsed);l.children.forEach(function(S){A(S,h)}),o.appendChild(h)}}function g(l,r){var o=!1,h=c(o);if(r.forEach(function(S){A(S,h)}),t=l||t,t!==null)return t.firstChild&&t.removeChild(t.firstChild),r.length===0?t:t.appendChild(h)}function n(l){var r=document.createElement("li"),o=document.createElement("a");return e.listItemClass&&r.setAttribute("class",e.listItemClass),e.onClick&&(o.onclick=e.onClick),e.includeTitleTags&&o.setAttribute("title",l.textContent),e.includeHtml&&l.childNodes.length?i.call(l.childNodes,function(h){o.appendChild(h.cloneNode(!0))}):o.textContent=l.textContent,o.setAttribute("href",e.basePath+"#"+l.id),o.setAttribute("class",e.linkClass+m+"node-name--"+l.nodeName+m+e.extraLinkClasses),r.appendChild(o),r}function c(l){var r=e.orderedList?"ol":"ul",o=document.createElement(r),h=e.listClass+m+e.extraListClasses;return l&&(h=h+m+e.collapsibleClass,h=h+m+e.isCollapsedClass),o.setAttribute("class",h),o}function a(){if(e.scrollContainer&&document.querySelector(e.scrollContainer)){var l;l=document.querySelector(e.scrollContainer).scrollTop}else l=document.documentElement.scrollTop||f.scrollTop;var r=document.querySelector(e.positionFixedSelector);e.fixedSidebarOffset==="auto"&&(e.fixedSidebarOffset=t.offsetTop),l>e.fixedSidebarOffset?r.className.indexOf(e.positionFixedClass)===-1&&(r.className+=m+e.positionFixedClass):r.className=r.className.split(m+e.positionFixedClass).join("")}function C(l){var r=0;return l!==null&&(r=l.offsetTop,e.hasInnerContainers&&(r+=C(l.offsetParent))),r}function x(l){if(e.scrollContainer&&document.querySelector(e.scrollContainer)){var r;r=document.querySelector(e.scrollContainer).scrollTop}else r=document.documentElement.scrollTop||f.scrollTop;e.positionFixedSelector&&a();var o=l,h;if(d&&t!==null&&o.length>0){s.call(o,function(y,j){if(C(y)>r+e.headingsOffset+10){var K=j===0?j:j-1;return h=o[K],!0}else if(j===o.length-1)return h=o[o.length-1],!0});var S=t.querySelector("."+e.activeLinkClass),v=t.querySelector("."+e.linkClass+".node-name--"+h.nodeName+'[href="'+e.basePath+"#"+h.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")+'"]');if(S===v)return;var T=t.querySelectorAll("."+e.linkClass);i.call(T,function(y){y.className=y.className.split(m+e.activeLinkClass).join("")});var b=t.querySelectorAll("."+e.listItemClass);i.call(b,function(y){y.className=y.className.split(m+e.activeListItemClass).join("")}),v&&v.className.indexOf(e.activeLinkClass)===-1&&(v.className+=m+e.activeLinkClass);var E=v&&v.parentNode;E&&E.className.indexOf(e.activeListItemClass)===-1&&(E.className+=m+e.activeListItemClass);var Z=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);i.call(Z,function(y){y.className.indexOf(e.isCollapsedClass)===-1&&(y.className+=m+e.isCollapsedClass)}),v&&v.nextSibling&&v.nextSibling.className.indexOf(e.isCollapsedClass)!==-1&&(v.nextSibling.className=v.nextSibling.className.split(m+e.isCollapsedClass).join("")),p(v&&v.parentNode.parentNode)}}function p(l){return l&&l.className.indexOf(e.collapsibleClass)!==-1&&l.className.indexOf(e.isCollapsedClass)!==-1?(l.className=l.className.split(m+e.isCollapsedClass).join(""),p(l.parentNode.parentNode)):l}function L(l){var r=l.target||l.srcElement;typeof r.className!="string"||r.className.indexOf(e.linkClass)===-1||(d=!1)}function N(){d=!0}return{enableTocAnimation:N,disableTocAnimation:L,render:g,updateToc:x}}),_}var H,G;function me(){return G||(G=1,H=function(i){var s=[].reduce;function f(n){return n[n.length-1]}function t(n){return+n.nodeName.toUpperCase().replace("H","")}function d(n){if(!(n instanceof window.HTMLElement))return n;if(i.ignoreHiddenElements&&(!n.offsetHeight||!n.offsetParent))return null;const c=n.getAttribute("data-heading-label")||(i.headingLabelCallback?String(i.headingLabelCallback(n.textContent)):n.textContent.trim());var a={id:n.id,children:[],nodeName:n.nodeName,headingLevel:t(n),textContent:c};return i.includeHtml&&(a.childNodes=n.childNodes),i.headingObjectCallback?i.headingObjectCallback(a,n):a}function m(n,c){for(var a=d(n),C=a.headingLevel,x=c,p=f(x),L=p?p.headingLevel:0,N=C-L;N>0&&(p=f(x),!(p&&C===p.headingLevel));)p&&p.children!==void 0&&(x=p.children),N--;return C>=i.collapseDepth&&(a.isCollapsed=!0),x.push(a),x}function A(n,c){var a=c;i.ignoreSelector&&(a=c.split(",").map(function(x){return x.trim()+":not("+i.ignoreSelector+")"}));try{return n.querySelectorAll(a)}catch{return console.warn("Headers not found with selector: "+a),null}}function g(n){return s.call(n,function(a,C){var x=d(C);return x&&m(x,a.nest),a},{nest:[]})}return{nestHeadingsArray:g,selectHeadings:A}}),H}var B,Q;function he(){return Q||(Q=1,B=function(i){var s=i.tocElement||document.querySelector(i.tocSelector);if(s&&s.scrollHeight>s.clientHeight){var f=s.querySelector("."+i.activeListItemClass);f&&(s.scrollTop=f.offsetTop-i.tocScrollOffset)}}),B}var D={},W;function pe(){if(W)return D;W=1,D.initSmoothScrolling=e;function e(s){var f=s.duration,t=s.offset,d=location.hash?g(location.href):location.href;m();function m(){document.body.addEventListener("click",c,!1);function c(a){!A(a.target)||a.target.className.indexOf("no-smooth-scroll")>-1||a.target.href.charAt(a.target.href.length-2)==="#"&&a.target.href.charAt(a.target.href.length-1)==="!"||a.target.className.indexOf(s.linkClass)===-1||i(a.target.hash,{duration:f,offset:t,callback:function(){n(a.target.hash)}})}}function A(c){return c.tagName.toLowerCase()==="a"&&(c.hash.length>0||c.href.charAt(c.href.length-1)==="#")&&(g(c.href)===d||g(c.href)+"#"===d)}function g(c){return c.slice(0,c.lastIndexOf("#"))}function n(c){var a=document.getElementById(c.substring(1));a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus())}}function i(s,f){var t=window.pageYOffset,d={duration:f.duration,offset:f.offset||0,callback:f.callback,easing:f.easing||x},m=document.querySelector('[id="'+decodeURI(s).split("#").join("")+'"]')||document.querySelector('[id="'+s.split("#").join("")+'"]'),A=typeof s=="string"?d.offset+(s?m&&m.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):s,g=typeof d.duration=="function"?d.duration(A):d.duration,n,c;requestAnimationFrame(function(p){n=p,a(p)});function a(p){c=p-n,window.scrollTo(0,d.easing(c,t,A,g)),c<g?requestAnimationFrame(a):C()}function C(){window.scrollTo(0,t+A),typeof d.callback=="function"&&d.callback()}function x(p,L,N,l){return p/=l/2,p<1?N/2*p*p+L:(p--,-N/2*(p*(p-2)-1)+L)}}return D}(function(e,i){(function(s,f){e.exports=f(s)})(typeof w<"u"?w:window||w,function(s){var f=ue(),t={},d={},m=fe(),A=me(),g=he(),n,c,a=!!s&&!!s.document&&!!s.document.querySelector&&!!s.addEventListener;if(typeof window>"u"&&!a)return;var C,x=Object.prototype.hasOwnProperty;function p(){for(var r={},o=0;o<arguments.length;o++){var h=arguments[o];for(var S in h)x.call(h,S)&&(r[S]=h[S])}return r}function L(r,o,h){o||(o=250);var S,v;return function(){var T=h||this,b=+new Date,E=arguments;S&&b<S+o?(clearTimeout(v),v=setTimeout(function(){S=b,r.apply(T,E)},o)):(S=b,r.apply(T,E))}}function N(r){try{return r.contentElement||document.querySelector(r.contentSelector)}catch{return console.warn("Contents element not found: "+r.contentSelector),null}}function l(r){try{return r.tocElement||document.querySelector(r.tocSelector)}catch{return console.warn("TOC element not found: "+r.tocSelector),null}}return d.destroy=function(){var r=l(t);r!==null&&(t.skipRendering||r&&(r.innerHTML=""),t.scrollContainer&&document.querySelector(t.scrollContainer)?(document.querySelector(t.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(t.scrollContainer).removeEventListener("resize",this._scrollListener,!1),n&&document.querySelector(t.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),n&&document.removeEventListener("click",this._clickListener,!1)))},d.init=function(r){if(a){t=p(f,r||{}),this.options=t,this.state={},t.scrollSmooth&&(t.duration=t.scrollSmoothDuration,t.offset=t.scrollSmoothOffset,d.scrollSmooth=pe().initSmoothScrolling(t)),n=m(t),c=A(t),this._buildHtml=n,this._parseContent=c,this._headingsArray=C,d.destroy();var o=N(t);if(o!==null){var h=l(t);if(h!==null&&(C=c.selectHeadings(o,t.headingSelector),C!==null)){var S=c.nestHeadingsArray(C),v=S.nest;t.skipRendering||n.render(h,v),this._scrollListener=L(function(b){n.updateToc(C),!t.disableTocScrollSync&&g(t);var E=b&&b.target&&b.target.scrollingElement&&b.target.scrollingElement.scrollTop===0;(b&&(b.eventPhase===0||b.currentTarget===null)||E)&&(n.updateToc(C),t.scrollEndCallback&&t.scrollEndCallback(b))},t.throttleTimeout),this._scrollListener(),t.scrollContainer&&document.querySelector(t.scrollContainer)?(document.querySelector(t.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(t.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var T=null;return this._clickListener=L(function(b){t.scrollSmooth&&n.disableTocAnimation(b),n.updateToc(C),T&&clearTimeout(T),T=setTimeout(function(){n.enableTocAnimation()},t.scrollSmoothDuration)},t.throttleTimeout),t.scrollContainer&&document.querySelector(t.scrollContainer)?document.querySelector(t.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},d.refresh=function(r){d.destroy(),d.init(r||this.options)},s.tocbot=d,d})})(J);var Ue=J.exports;const Ce="_header_3q1lz_1",ge="_fixedContainer_3q1lz_7",ve="_toc_3q1lz_10",Ye={header:Ce,fixedContainer:ge,toc:ve},Ae="_footer_1kd9n_1",xe="_content_1kd9n_9",Re={footer:Ae,content:xe},Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAolBMVEUAAAAxeMYwd8UwcM8weMUwd8cweccweMQwd78yeMcxecUwd8Uxd8UxecYxeMUwcL9+q9t+qtxXktDm7veYu+PY5fWyzOlxothlmdRYkdBLiM2+1e1yodjZ5vS/1ezL3fHM3fCYu+Ll7vjy9/vY5vRkmtSlw+ayzOpyothKic2lxOZLic2Ls9+/1e3Z5fSlw+c+gMqLs96YvOKxzOr///8xeMYqO335AAAAEHRSTlMA34AQvyBfYCB/z8/Pz78Qi8soFQAAAk5JREFUeF7szsENgDAQBLE5HhCkkFSz/beGKALdZ1yBgX2vtHhOPqPSpgZQaVSbK60OZlot0oz8xYABAwYMGDBgwIABAwYMGDBgwIABAwYMGDDwtm8nO1LDQACGQ8OABNLQ2XpdnJTHA8YGTLr8/q/GcsJTJmkO5br0f26pP1k+VEVy2Pvvxx40/kpDr47jaX8bAP8/Ajh0SmMmNe5LAD6rGSxYbsAOcDbDCwgKURLQAIoCGo2iAKdRFOAAZQGfUBbgUBhAD0APfttYa83WX843A0YSJAAYSfkD0FOIf+XWlzxgOZUAhphvi2m9JT9xa2AEfMEkCFnmGtgAity1bM5yAdoEoONMPABMAmGA/AmgKQ5oMakvDnjCtGtpwIZMoLYs4Ae+DOqigIA02LECqJOm6nIAg9mgDpwACqXpq2UGLM+kV8sNoCMBJfADoseZusALWBZAwwxY3s06fkB0m1kBA4C0hrm7yAxYJnTMgGWCYQHQzAbzARuAXkfAXDUngG5CtCdGAG3SSDIlAdEpAvCsANqEL/paFkAFUBZAJxVdHGAwrTgg6hKAuQm8LQFQ3a0nAEwABBvz7TBpYAL8e/IETLqyAfKEcMS0mhOAqOrEEDzZFiz7V7L+6E+7w+GwP3lFl5UhsgKWq4UB36IsQFthgI+ygCnKAnwUBYCJjIARF9JT4N2O3QRLf8++njd+0JipfTbl3hc023EznNs/EN2eL8/ehPv7ghnAHXAHPMoC3lcrWcDb6qPs0++qqh4EBa8eqt+9+yADeLN6XVU/AZaNDaYVEGRKAAAAAElFTkSuQmCC",be="_card_1uytv_1",ye="_cardContent_1uytv_8",Le="_deprecationNotice_1uytv_12",I={card:be,cardContent:ye,deprecationNotice:Le};$("ui5-card-header",":host([data-project-template]) .ui5-card-header .ui5-card-header-avatar { pointer-events: auto; }");function Ge(e){const{title:i,subtitle:s,logo:f,logoAttribution:t,isTypeScript:d,children:m,href:A,deprecationNotice:g}=e;return u.jsx(re,{className:I.card,header:u.jsx(ee,{"data-project-template":"",titleText:i,subtitleText:s,action:d&&u.jsx("img",{src:Se,height:24,width:24,alt:"TypeScript Logo",title:"TypeScript Logo. Original Source: https://www.typescriptlang.org/branding/"}),avatar:u.jsx(te,{title:t,children:u.jsx("img",{src:f,alt:`Logo of ${i}`})})}),children:u.jsxs("div",{className:I.cardContent,children:[g&&u.jsx(k,{hideCloseButton:!0,design:q.Warning,children:g,className:I.deprecationNotice}),u.jsx(ne,{design:le.Emphasized,href:A,children:"View Example"}),u.jsx("br",{}),u.jsx("br",{}),u.jsx(V,{children:"What's included:"}),m]})})}const Ne="_parameters_d2bas_1",Te="_parameterName_d2bas_5",Ee="_parameterDetails_d2bas_9",Qe={parameters:Ne,parameterName:Te,parameterDetails:Ee};export{ze as A,Fe as C,de as I,Ge as P,Re as a,Qe as b,Ye as c,ce as d,ae as e,Ue as j};
//# sourceMappingURL=DomRefTable.module-a8922c91.js.map
