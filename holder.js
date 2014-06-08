/*!

Holder - client side image placeholders
Version 2.4.0+868eq
© 2014 Ivan Malopinsky - http://imsky.co

Site:		http://imsky.github.io/holder
Issues:		https://github.com/imsky/holder/issues
License:	http://opensource.org/licenses/MIT

*/
!function(t,e,n){e[t]=n}("onDomReady",this,function(t){"use strict";function e(t){if(!y){if(!a.body)return o(e);for(y=!0;t=_.shift();)o(t)}}function n(t){(v||t.type===l||a[c]===h)&&(i(),e())}function i(){v?(a[x](p,n,s),t[x](l,n,s)):(a[g](w,n),t[g](u,n))}function o(t,e){setTimeout(t,+e>=0?e:1)}function r(t){y?o(t):_.push(t)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function A(){document.removeEventListener("DOMContentLoaded",A,!1),document.readyState="complete"},!1),document.readyState="loading");var a=t.document,d=a.documentElement,l="load",s=!1,u="on"+l,h="complete",c="readyState",f="attachEvent",g="detachEvent",m="addEventListener",p="DOMContentLoaded",w="onreadystatechange",x="removeEventListener",v=m in a,b=s,y=s,_=[];if(a[c]===h)o(e);else if(v)a[m](p,n,s),t[m](l,n,s);else{a[f](w,n),t[f](u,n);try{b=null==t.frameElement&&d}catch(S){}b&&b.doScroll&&!function C(){if(!y){try{b.doScroll("left")}catch(t){return o(C,50)}i(),e()}}()}return r.version="1.4.0",r.isReady=function(){return y},r}(this)),document.querySelectorAll||(document.querySelectorAll=function(t){var e,n=document.createElement("style"),i=[];for(document.documentElement.firstChild.appendChild(n),document._qsa=[],n.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),n.parentNode.removeChild(n);document._qsa.length;)e=document._qsa.shift(),e.style.removeAttribute("x-qsa"),i.push(e);return document._qsa=null,i}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),document.getElementsByClassName||(document.getElementsByClassName=function(t){return t=String(t).replace(/^|\s+/g,"."),document.querySelectorAll(t)}),function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.atob=t.atob||function(t){t=String(t);var n,i=0,o=[],r=0,a=0;if(t=t.replace(/\s/g,""),t.length%4===0&&(t=t.replace(/=+$/,"")),t.length%4===1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(t))throw Error("InvalidCharacterError");for(;i<t.length;)n=e.indexOf(t.charAt(i)),r=r<<6|n,a+=6,24===a&&(o.push(String.fromCharCode(r>>16&255)),o.push(String.fromCharCode(r>>8&255)),o.push(String.fromCharCode(255&r)),a=0,r=0),i+=1;return 12===a?(r>>=4,o.push(String.fromCharCode(255&r))):18===a&&(r>>=2,o.push(String.fromCharCode(r>>8&255)),o.push(String.fromCharCode(255&r))),o.join("")},t.btoa=t.btoa||function(t){t=String(t);var n,i,o,r,a,d,l,s=0,u=[];if(/[^\x00-\xFF]/.test(t))throw Error("InvalidCharacterError");for(;s<t.length;)n=t.charCodeAt(s++),i=t.charCodeAt(s++),o=t.charCodeAt(s++),r=n>>2,a=(3&n)<<4|i>>4,d=(15&i)<<2|o>>6,l=63&o,s===t.length+2?(d=64,l=64):s===t.length+1&&(l=64),u.push(e.charAt(r),e.charAt(a),e.charAt(d),e.charAt(l));return u.join("")}}(this),function(){function t(e,n,i){e.document;var o,r=e.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],a=r[1],d=r[2];return i=i?/%|em/.test(d)&&e.parentElement?t(e.parentElement,"fontSize",null):16:i,o="fontSize"==n?i:/width/i.test(n)?e.clientWidth:e.clientHeight,"%"==d?a/100*o:"cm"==d?.3937*a*96:"em"==d?a*i:"in"==d?96*a:"mm"==d?.3937*a*96/10:"pc"==d?12*a*96/72:"pt"==d?96*a/72:a}function e(t,e){var n="border"==e?"Width":"",i=e+"Top"+n,o=e+"Right"+n,r=e+"Bottom"+n,a=e+"Left"+n;t[e]=(t[i]==t[o]&&t[i]==t[r]&&t[i]==t[a]?[t[i]]:t[i]==t[r]&&t[a]==t[o]?[t[i],t[o]]:t[a]==t[o]?[t[i],t[o],t[r]]:[t[i],t[o],t[r],t[a]]).join(" ")}function n(n){var i,o=this,r=n.currentStyle,a=t(n,"fontSize"),d=function(t){return"-"+t.toLowerCase()};for(i in r)if(Array.prototype.push.call(o,"styleFloat"==i?"float":i.replace(/[A-Z]/,d)),"width"==i)o[i]=n.offsetWidth+"px";else if("height"==i)o[i]=n.offsetHeight+"px";else if("styleFloat"==i)o.float=r[i];else if(/margin.|padding.|border.+W/.test(i)&&"auto"!=o[i])o[i]=Math.round(t(n,i,a))+"px";else if(/^outline/.test(i))try{o[i]=r[i]}catch(l){o.outlineColor=r.color,o.outlineStyle=o.outlineStyle||"none",o.outlineWidth=o.outlineWidth||"0px",o.outline=[o.outlineColor,o.outlineWidth,o.outlineStyle].join(" ")}else o[i]=r[i];e(o,"margin"),e(o,"padding"),e(o,"border"),o.fontSize=Math.round(a)+"px"}window.getComputedStyle||(n.prototype={constructor:n,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(t){return this[t.replace(/-\w/g,function(t){return t[1].toUpperCase()})]},item:function(t){return this[t]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}},window.getComputedStyle=Window.prototype.getComputedStyle=function(t){return new n(t)})}(),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])}),function(t,e,n){"function"==typeof define&&define.amd?define(n):e[t]=n}("Holder",this,function(t,e){function n(t,e,n){e=parseInt(e,10),t=parseInt(t,10);var i=Math.max(e,t),o=Math.min(e,t),r=1/12,a=Math.min(.75*o,.75*i*r);return{height:Math.round(Math.max(n,a))}}function i(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+":"+t[n]);return e.join(";")}function o(t){var e=t.ctx,i=t.dimensions,o=t.template,r=t.ratio,a=t.holder,d="literal"==a.textmode,l="exact"==a.textmode,s=n(i.width,i.height,o.size),u=s.height,h=i.width*r,c=i.height*r,f=o.font?o.font:"Arial,Helvetica,sans-serif",g=o.fontweight?o.fontweight:"bold";g="normal"==g?"":g,canvas.width=h,canvas.height=c,e.textAlign="center",e.textBaseline="middle",e.fillStyle=o.background,e.fillRect(0,0,h,c),e.fillStyle=o.foreground,e.font=g+" "+u+"px "+f;var m=o.text?o.text:Math.floor(i.width)+"x"+Math.floor(i.height);if(d){var i=a.dimensions;m=i.width+"x"+i.height}else if(l&&a.exact_dimensions){var i=a.exact_dimensions;m=Math.floor(i.width)+"x"+Math.floor(i.height)}var p=e.measureText(m).width;return p/h>=.75&&(u=Math.floor(.75*u*(h/p))),e.font=g+" "+u*r+"px "+f,e.fillText(m,h/2,c/2,h),canvas.toDataURL("image/png")}function r(t){var e=t.dimensions,i=t.template,o=t.holder,r="literal"==o.textmode,a="exact"==o.textmode,d=n(e.width,e.height,i.size),l=d.height,s=e.width,u=e.height,h=i.font?i.font:"Arial,Helvetica,sans-serif",c=i.fontweight?i.fontweight:"bold",f=i.text?i.text:Math.floor(e.width)+"x"+Math.floor(e.height);if(r){var e=o.dimensions;f=e.width+"x"+e.height}else if(a&&o.exact_dimensions){var e=o.exact_dimensions;f=Math.floor(e.width)+"x"+Math.floor(e.height)}var g=C({text:f,width:s,height:u,text_height:l,font:h,font_weight:c,template:i});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(g)))}function a(t){if(m.use_canvas&&!m.use_svg)try{return o(t)}catch(e){window.console&&console.error(e)}else try{return r(t)}catch(e){window.console&&console.error(e)}}function d(t,e,n,i){var o=n.dimensions,r=n.theme,d=n.text?decodeURIComponent(n.text):n.text,l=o.width+"x"+o.height;if(r=d?f(r,{text:d}):r,r=n.font?f(r,{font:n.font}):r,e.setAttribute("data-src",i),n.theme=r,e.holderData=n,"image"==t)if(e.setAttribute("alt",d?d:r.text?r.text+" ["+l+"]":l),(m.use_fallback||!n.auto)&&(e.style.width=o.width+"px",e.style.height=o.height+"px"),m.use_fallback)e.style.backgroundColor=r.background;else{var u=a({ctx:y,dimensions:o,template:r,ratio:_,holder:n});e.setAttribute("src",u),n.textmode&&"exact"==n.textmode&&(b.push(e),h(e))}else if("background"==t){if(!m.use_fallback){var u=a({ctx:y,dimensions:o,template:r,ratio:_,holder:n});e.style.backgroundImage="url("+u+")",e.style.backgroundSize=o.width+"px "+o.height+"px"}}else"fluid"==t&&(e.setAttribute("alt",d?d:r.text?r.text+" ["+l+"]":l),"%"==o.height.slice(-1)?e.style.height=o.height:null!=n.auto&&n.auto||(e.style.height=o.height+"px"),"%"==o.width.slice(-1)?e.style.width=o.width:null!=n.auto&&n.auto||(e.style.width=o.width+"px"),("inline"==e.style.display||""===e.style.display||"none"==e.style.display)&&(e.style.display="block"),s(e),m.use_fallback?e.style.backgroundColor=r.background:(b.push(e),h(e)))}function l(t,e){var n={height:t.clientHeight,width:t.clientWidth};return n.height||n.width?(t.removeAttribute("data-holder-invisible"),n):(t.setAttribute("data-holder-invisible",!0),void e.call(this,t))}function s(e){if(e.holderData){var n=l(e,t.invisible_error_fn(s));if(n){var i=e.holderData;i.initial_dimensions=n,i.fluid_data={fluid_height:"%"==i.dimensions.height.slice(-1),fluid_width:"%"==i.dimensions.width.slice(-1),mode:null},i.fluid_data.fluid_width&&!i.fluid_data.fluid_height?(i.fluid_data.mode="width",i.fluid_data.ratio=i.initial_dimensions.width/parseFloat(i.dimensions.height)):!i.fluid_data.fluid_width&&i.fluid_data.fluid_height&&(i.fluid_data.mode="height",i.fluid_data.ratio=parseFloat(i.dimensions.width)/i.initial_dimensions.height)}}}function u(t){m.debounce?(w||t.call(this),w&&clearTimeout(w),w=setTimeout(function(){w=null,t.call(this)},m.debounce)):t.call(this)}function h(e){var n;n=null==e||null==e.nodeType?b:[e];for(var i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o.holderData){var r=o.holderData,d=l(o,t.invisible_error_fn(h));if(d){if(r.fluid&&r.auto)switch(r.fluid_data.mode){case"width":d.height=d.width/r.fluid_data.ratio;break;case"height":d.width=d.height*r.fluid_data.ratio}var s={ctx:y,dimensions:d,template:r.theme,ratio:_,holder:r};r.textmode&&"exact"==r.textmode&&(r.exact_dimensions=d,s.dimensions=r.dimensions);var u=a(s);o.setAttribute("src",u)}}}}function c(e,n){for(var i={theme:f(S.themes.gray,{})},o=!1,r=e.length,a=0;r>a;a++){var d=e[a];t.flags.dimensions.match(d)?(o=!0,i.dimensions=t.flags.dimensions.output(d)):t.flags.fluid.match(d)?(o=!0,i.dimensions=t.flags.fluid.output(d),i.fluid=!0):t.flags.textmode.match(d)?i.textmode=t.flags.textmode.output(d):t.flags.colors.match(d)?i.theme=t.flags.colors.output(d):n.themes[d]?n.themes.hasOwnProperty(d)&&(i.theme=f(n.themes[d],{})):t.flags.font.match(d)?i.font=t.flags.font.output(d):t.flags.auto.match(d)?i.auto=!0:t.flags.text.match(d)&&(i.text=t.flags.text.output(d))}return o?i:!1}function f(t,e){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n}var g={use_svg:!1,use_canvas:!1,use_fallback:!1,debounce:100},m={},p=!1;canvas=document.createElement("canvas");var w,x=1,v=1,b=[];if(canvas.getContext)if(canvas.toDataURL("image/png").indexOf("data:image/png")<0)g.use_fallback=!0;else var y=canvas.getContext("2d");else g.use_fallback=!0;document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(g.use_svg=!0,g.use_canvas=!1),g.use_fallback||(x=window.devicePixelRatio||1,v=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1);var _=x/v,S={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}}};t.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(t){var e=this.regex.exec(t);return{width:+e[1],height:+e[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(t){var e=this.regex.exec(t);return{width:e[1],height:e[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(t){var e=this.regex.exec(t);return{size:S.themes.gray.size,foreground:"#"+e[2],background:"#"+e[1]}}},text:{regex:/text\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},font:{regex:/font\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(t){return this.regex.exec(t)[1]}}};for(var A in t.flags)t.flags.hasOwnProperty(A)&&(t.flags[A].match=function(t){return t.match(this.regex)});var C=function(){if(window.XMLSerializer){var t=new XMLSerializer,e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.webkitMatchesSelector&&n.setAttribute("xmlns","http://www.w3.org/2000/svg");var o=document.createElementNS(e,"rect"),r=document.createElementNS(e,"text"),a=document.createTextNode(null);return r.setAttribute("text-anchor","middle"),r.appendChild(a),n.appendChild(o),n.appendChild(r),function(e){if(isNaN(e.width)||isNaN(e.height)||isNaN(e.text_height))throw"Holder: incorrect properties passed to SVG constructor";return n.setAttribute("width",e.width),n.setAttribute("height",e.height),n.setAttribute("viewBox","0 0 "+e.width+" "+e.height),n.setAttribute("preserveAspectRatio","none"),o.setAttribute("width",e.width),o.setAttribute("height",e.height),o.setAttribute("fill",e.template.background),r.setAttribute("x",e.width/2),r.setAttribute("y",e.height/2),a.nodeValue=e.text,r.setAttribute("style",i({fill:e.template.foreground,"font-weight":e.font_weight,"font-size":e.text_height+"px","font-family":e.font,"dominant-baseline":"central"})),t.serializeToString(n)}}}();return t.invisible_error_fn=function(){return function(t){if(t.hasAttribute("data-holder-invisible"))throw new Error("Holder: invisible placeholder")}},t.add_theme=function(e,n){return null!=e&&null!=n&&(S.themes[e]=n),t},t.add_image=function(e,n){var i=document.querySelectorAll(n);if(i.length)for(var o=0,r=i.length;r>o;o++){var a=document.createElement("img");a.setAttribute("data-src",e),i[o].appendChild(a)}return t},t.run=function(e){m=f({},g),p=!0;var n=f(S,e),i=[],o=[],r=[];for(null!=n.use_canvas&&n.use_canvas&&(m.use_canvas=!0,m.use_svg=!1),m.debounce=null!=n.debounce?n.debounce:m.debounce,"string"==typeof n.images?o=document.querySelectorAll(n.images):window.NodeList&&n.images instanceof window.NodeList?o=n.images:window.Node&&n.images instanceof window.Node?o=[n.images]:window.HTMLCollection&&n.images instanceof window.HTMLCollection&&(o=n.images),"string"==typeof n.bgnodes?r=document.querySelectorAll(n.bgnodes):window.NodeList&&n.elements instanceof window.NodeList?r=n.bgnodes:window.Node&&n.bgnodes instanceof window.Node&&(r=[n.bgnodes]),s=0,l=o.length;l>s;s++)i.push(o[s]);for(var a=new RegExp(n.domain+'/(.*?)"?\\)'),l=r.length,s=0;l>s;s++){var u=window.getComputedStyle(r[s],null).getPropertyValue("background-image"),h=u.match(a),w=r[s].getAttribute("data-background-src");if(h){var x=c(h[1].split("/"),n);x&&d("background",r[s],x,u)}else if(null!=w){var x=c(w.substr(w.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);x&&d("background",r[s],x,u)}}for(l=i.length,s=0;l>s;s++){var v,b;b=v=u=null;try{b=i[s].getAttribute("src"),attr_datasrc=i[s].getAttribute("data-src")}catch(y){}if(null==attr_datasrc&&b&&b.indexOf(n.domain)>=0?u=b:attr_datasrc&&attr_datasrc.indexOf(n.domain)>=0&&(u=attr_datasrc),u){var x=c(u.substr(u.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);x&&(x.fluid?d("fluid",i[s],x,u):d("image",i[s],x,u))}}return t},e.onDomReady&&onDomReady(function(){var e=function(){u(function(){h(null)})};window.addEventListener?(window.addEventListener("resize",e,!1),window.addEventListener("orientationchange",e,!1)):window.attachEvent("onresize",e),p||t.run({}),"object"==typeof window.Turbolinks&&document.addEventListener("page:change",function(){t.run({})})}),t}({},this));