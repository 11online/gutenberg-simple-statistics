!function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var s=n(2),l=(n.n(s),n(3)),r=(n.n(l),wp.i18n.__),c=wp.blocks.registerBlockType,i=wp.editor.PlainText;c("cgb/block-gutenberg-simple-statistics",{title:r("Simple Statistics"),icon:"performance",category:"common",keywords:[r("Statistics")],attributes:{stats:{type:"array",default:[]},randomKey:{type:"string",default:"statistics-block"}},edit:function(e){var t=e.attributes,n=e.setAttributes,s=e.isSelected,l=e.className;if("statistics-block"===t.randomKey){var c=Math.floor(9999*Math.random());n({randomKey:c})}var o=wp.element.createElement("div",{style:{textAlign:"right"}},wp.element.createElement("button",{type:"button",style:{marginLeft:"10px",marginRight:"10px"},className:"components-button components-icon-button",onClick:function(){if(t.stats.length>3)n({stats:[]});else{var e=[].concat(a(t.stats)),s={value:"",label:""};e.push(s),n({stats:e})}}},r("Add Statistic:"),wp.element.createElement("span",{className:"dashicons dashicons-plus"}))),u=function(e){return wp.element.createElement("div",{className:"stat-edit-box"},wp.element.createElement("div",{className:"stat-edit-buttons",style:{display:"flex",justifyContent:"space-around",borderTop:"1px solid #e2e4e7"}},wp.element.createElement("button",{type:"button",style:{paddingLeft:"2px",paddingRight:"2px"},className:"components-button components-icon-button",onClick:function(){var s=[].concat(a(t.stats));s.splice(e,1),n({stats:s})}},wp.element.createElement("span",{className:"dashicons dashicons-trash"}))))},m=function(e,s,l){return wp.element.createElement(i,{style:{textAlign:"center",minWidth:"50px"},value:s[e],className:e,onChange:function(s){var r=[].concat(a(t.stats));r[l][e]=s,n({stats:r})},placeholder:r("label"===e?"Label":"0")})},p=function(e,n){var a={useEasing:!0,useGrouping:!0},s="countup-"+t.randomKey+n,l=new CountUp(s,0,e.value,0,2.5,a);l.error?console.error(l.error):l.start()};return wp.element.createElement("div",{className:l},wp.element.createElement("div",{className:"container"},t.stats.map(function(e,n){return s||setTimeout(function(){p(e,n)},100),wp.element.createElement("div",{className:"statistic",key:n},wp.element.createElement("div",null,s?m("value",e,n):wp.element.createElement("div",{className:"value",id:"countup-"+t.randomKey+n},e.value)),wp.element.createElement("div",null,s?m("label",e,n):wp.element.createElement("div",{className:"label",id:"countup-"+t.randomKey+n},e.label)),s?u(n):null)})),s?o:null)},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("div",{className:n},wp.element.createElement("div",{className:"container"},t.stats.map(function(e,n){return wp.element.createElement("div",{className:"statistic",key:n},wp.element.createElement("div",null,wp.element.createElement("div",{className:"simple-statistic-countup","data-value":e.value,id:"countup-"+t.randomKey+n},"0")),wp.element.createElement("div",{className:"label"},e.label))})))}})},function(e,t){},function(e,t){}]);