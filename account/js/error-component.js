!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=r(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(window,(function(e,r,t,n){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s="./Components/error-component/index.js")}({"../node_modules/prop-types/factoryWithThrowingShims.js":function(e,r,t){"use strict";var n=t("../node_modules/prop-types/lib/ReactPropTypesSecret.js");function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},"../node_modules/prop-types/index.js":function(e,r,t){e.exports=t("../node_modules/prop-types/factoryWithThrowingShims.js")()},"../node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,r,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./Components/error-component/index.js":function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return d}));var n=t("../node_modules/prop-types/index.js"),o=t.n(n),i=t("react"),s=t.n(i),a=t("@deriv/components"),c=t("@deriv/translations"),u=t("@deriv/shared"),p=function(e){var r=e.header,t=e.message,n=e.redirect_label,o=e.redirectOnClick,i=e.should_show_refresh,p=void 0===i||i?s.a.createElement(c.Localize,{i18n_default_text:"Please refresh this page to continue."}):"";return s.a.createElement(a.PageError,{header:r||s.a.createElement(c.Localize,{i18n_default_text:"Oops, something went wrong."}),messages:t?[t,p]:[s.a.createElement(c.Localize,{key:0,i18n_default_text:"Sorry, an error occured while processing your request."}),p],redirect_url:u.routes.trade,redirect_label:n||s.a.createElement(c.Localize,{i18n_default_text:"Refresh"}),buttonOnClick:o||function(){return location.reload()}})};p.propTypes={message:o.a.oneOfType([o.a.node,o.a.string,o.a.object]),type:o.a.string};var d=p},"@deriv/components":function(r,t){r.exports=e},"@deriv/shared":function(e,t){e.exports=r},"@deriv/translations":function(e,r){e.exports=t},react:function(e,r){e.exports=n}}).default}));
//# sourceMappingURL=error-component.js.map