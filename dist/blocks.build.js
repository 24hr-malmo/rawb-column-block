!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),__=(n.n(r),wp.i18n.__),o=wp.blocks.registerBlockType,l=wp.editor.InnerBlocks;o("rawb/column-block",{title:__("Rawb Column Block"),icon:"shield",category:"common",keywords:[__("column")],parent:["rawb/columns-block"],attributes:{width:{type:"string"}},edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(l,{renderAppender:function(){return wp.element.createElement(l.ButtonBlockAppender,null)},templateLock:!1}))},save:function(){return wp.element.createElement("div",null,wp.element.createElement(l.Content,null))}})},function(e,t){}]);