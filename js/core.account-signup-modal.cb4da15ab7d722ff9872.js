(window.webpackJsonp=window.webpackJsonp||[]).push([["account-signup-modal"],{622:function(e,t,n){var r,o,a,i,c;window,e.exports=(r=n(17),o=n(0),a=n(30),i=n(44),c=n(11),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=147)}({0:function(e,t){e.exports=r},1:function(e,t){e.exports=o},12:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(1),s=function(e){var t=e.message,n=e.className;return c.createElement("p",{className:o()("dc-field-error",n)},t)};s.propTypes={className:i.a.string,message:i.a.oneOfType([i.a.string,i.a.node,i.a.bool])};var l=s;n(15),t.default=l},147:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(1),i=n(0),c=n.n(i),s=n(6),l=n(22);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}(i);function i(){var e;f(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).state={show_password:!1},e.togglePasswordVisibility=function(){e.setState((function(e){return{show_password:!e.show_password}}))},e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.className,n=(e.trailing_icon,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["className","trailing_icon"]));return a.createElement("div",{className:"dc-password-input"},a.createElement(l.default,p({},n,{type:this.state.show_password?"text":"password",className:o()("dc-password-input__field",t),trailing_icon:a.createElement(s.default,{icon:this.state.show_password?"IcPasswordEyeHide":"IcPasswordEyeVisible",className:"dc-password-input__visibility-icon",onClick:this.togglePasswordVisibility,color:"secondary",width:18})})))}}])&&d(t.prototype,n),i}(a.Component);g.propTypes={children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),has_error:c.a.bool,input:c.a.oneOfType([c.a.string,c.a.number])};var _=g;n(92),t.default=_},15:function(e,t,n){},18:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(1),i=n(12);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=a.forwardRef((function(e,t){var n=e.className,r=e.classNameError,l=e.disabled,u=e.error,p=e.hint,f=e.leading_icon,d=e.has_character_counter,b=e.max_characters,y=e.trailing_icon,m=e.label,g=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["className","classNameError","disabled","error","hint","leading_icon","has_character_counter","max_characters","trailing_icon","label"]),_=s(a.useState(0),2),v=_[0],h=_[1];return a.createElement("div",{className:o()("dc-input",n,{"dc-input__disabled":l,"dc-input--error":u})},f&&a.cloneElement(f,{className:o()("dc-input__leading-icon",f.props.className)}),"textarea"===g.type?a.createElement("textarea",c({ref:t},g,{className:o()("dc-input__field",{"dc-input__field--placeholder-visible":!m&&g.placeholder}),onChange:function(e){var t=e.target.value;b&&t.length>=b&&(t=t.slice(0,b)),h(t.length),e.target.value=t,g.onChange(e)},disabled:l})):a.createElement("input",c({ref:t},g,{className:o()("dc-input__field",{"dc-input__field--placeholder-visible":!m&&g.placeholder}),disabled:l})),y&&a.cloneElement(y,{className:o()("dc-input__trailing-icon",y.props.className)}),m&&a.createElement("label",{className:"dc-input__label",htmlFor:g.id},m),u&&a.createElement(i.default,{className:r,message:u}),!u&&p&&a.createElement("p",{className:"dc-input__hint"},p),d&&a.createElement("p",{className:"dc-input__counter"},v,b?"/".concat(b):""))}))},2:function(e,t){e.exports=a},22:function(e,t,n){"use strict";n.r(t);var r=n(18);n(27),t.default=r.a},27:function(e,t,n){},4:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(1),s=n(5),l=n(7),u=function(e){var t=e.className,n=e.color,r=e.custom_color,a=e.height,i=e.icon,u=e.id,p=e.onClick,f=e.onMouseEnter,d=e.onMouseLeave,b=e.size,y=void 0===b?16:b,m=e.width;if(!i)return null;var g="common",_=/^Ic(Currency|Tradetype|Mt5|Flag|Underlying)/g.exec(i);_&&(g=Object(s.getKebabCase)(_[1]));var v=i.startsWith("IcUnderlying")?"ic-underlying-".concat(i.split("IcUnderlying")[1].toUpperCase()):Object(s.getKebabCase)(i);return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:o()("dc-icon",t,{"dc-icon--active":"active"===n,"dc-icon--disabled":"disabled"===n,"dc-icon--green":"green"===n||"IcProfit"===i,"dc-icon--red":"red"===n||"IcLoss"===i,"dc-icon--secondary":"secondary"===n,"dc-icon--brand":"brand"===n}),height:a||y,id:u,width:m||y,onClick:p,onMouseEnter:f,onMouseLeave:d,style:r?{"--fill-color1":r}:void 0},c.createElement("use",{xlinkHref:"".concat(Object(l.getUrlBase)("/public/images/sprite/".concat(g,".svg")),"#").concat(v)}))};u.propTypes={className:i.a.oneOfType([i.a.object,i.a.string]),color:i.a.oneOfType([i.a.bool,i.a.string]),custom_color:i.a.string,height:i.a.oneOfType([i.a.number,i.a.string]),icon:i.a.string,onClick:i.a.func,onMouseEnter:i.a.func,onMouseLeave:i.a.func,size:i.a.oneOfType([i.a.number,i.a.string]),width:i.a.oneOfType([i.a.number,i.a.string])},t.a=c.memo(u)},5:function(e,t){e.exports=i},6:function(e,t,n){"use strict";n.r(t);var r=n(4);n(8),t.default=r.a},7:function(e,t){e.exports=c},8:function(e,t,n){},92:function(e,t,n){}}).default)},623:function(e,t,n){},624:function(e,t,n){var r,o,a,i;window,e.exports=(r=n(17),o=n(0),a=n(30),i=n(632),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=148)}({0:function(e,t){e.exports=r},1:function(e,t){e.exports=o},12:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(1),s=function(e){var t=e.message,n=e.className;return c.createElement("p",{className:o()("dc-field-error",n)},t)};s.propTypes={className:i.a.string,message:i.a.oneOfType([i.a.string,i.a.node,i.a.bool])};var l=s;n(15),t.default=l},148:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(1),i=n(53),c=n.n(i),s=n(0),l=n.n(s),u=n(12),p=function(e){var t=e.children,n=e.has_error,r=e.input,i=c()(r),s=i.score,l=i.feedback,p=n&&r.length?.25:.25*(r.length&&s<1?1:s);return a.createElement(a.Fragment,null,a.createElement("div",{className:"dc-password-meter__container"},"function"==typeof t?t({has_warning:!!l.warning}):t,a.createElement("div",{className:"dc-password-meter__bg"}),a.createElement("div",{className:o()("dc-password-meter",{"dc-password-meter--weak":n||r.length&&s<3,"dc-password-meter--strong":!n&&r.length&&s>=3}),style:{transform:"scale(".concat(p,", 1)")}}),l.warning&&!n&&a.createElement(u.default,{className:"dc-password-meter__warning",message:"".concat(l.warning,".")})))};p.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node,l.a.func]),has_error:l.a.bool,input:l.a.oneOfType([l.a.string,l.a.number])};var f=p;n(93),t.default=f},15:function(e,t,n){},2:function(e,t){e.exports=a},53:function(e,t){e.exports=i},93:function(e,t,n){}}).default)},625:function(e,t,n){},649:function(e,t,n){"use strict";var r=n(214),o=n.n(r),a=(n(294),n(32)),i=n.n(a),c=(n(70),n(35)),s=n.n(c),l=(n(69),n(211)),u=n.n(l),p=(n(292),n(23)),f=n(3),d=n.n(f),b=n(0),y=n(2);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){var t=e.class_prefix,n=void 0===t?"set-residence":t,r=e.children,a=e.header_text,c=e.errors,l=e.touched,f=e.setFieldTouched,d=e.setFieldValue,g=e.residence_list;return b.createElement("div",{className:"".concat(n,"__residence-selection")},!!a&&b.createElement("p",{className:"".concat(n,"__heading")},a),b.createElement("p",{className:"".concat(n,"__").concat(a?"text":"heading")},Object(y.localize)("Where do you live?")),b.createElement(p.a,{name:"residence"},(function(e){var t=e.field;return b.createElement(b.Fragment,null,b.createElement(i.a,null,b.createElement(o.a,m({},t,{autoComplete:"off",className:"".concat(n,"__residence-field"),dropdown_offset:"3.2rem",type:"text",label:Object(y.localize)("Choose country"),error:l.residence&&c.residence,required:!0,list_items:g,onItemSelection:function(e){var t=e.value,n=e.text;return d("residence",t?n:"",!0)}}))),b.createElement(s.a,null,b.createElement(u.a,{placeholder:Object(y.localize)("Please select"),label:Object(y.localize)("Choose country"),value:t.value,list_items:g,error:l.residence&&c.residence,required:!0,use_text:!0,onChange:function(e){f("residence",!0),d("residence",e.target.value,!0)}})))})),r)};g.propTypes={children:d.a.node,class_prefix:d.a.string,header_text:d.a.string,residence_list:d.a.arrayOf(d.a.object)},t.a=g},743:function(e,t,n){},754:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(7),o=n.n(r),a=n(21),i=n.n(a),c=(n(63),n(212)),s=n.n(c),l=(n(293),n(622)),u=n.n(l),p=(n(623),n(624)),f=n.n(p),d=(n(625),n(23)),b=n(3),y=n.n(b),m=n(0),g=n(2),_=n(8),v=n(113),h=n(81),w=n(649);n(743);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var o=M(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k={password:"",residence:""},I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(c,e);var t,n,r,a=C(c);function c(){var e;P(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={has_valid_residence:!1,pw_input:""},e.updatePassword=function(t){e.setState({pw_input:t})},e.onResidenceSelection=function(){e.setState({has_valid_residence:!0})},e.onSignupComplete=function(t){if(t)throw Error(t);e.props.isModalVisible(!1),e.props.enableApp()},e}return t=c,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.onSignup,r=t.residence_list;return m.createElement("div",{className:"account-signup"},m.createElement(d.c,{initialValues:k,validate:function(e){return function(e,t){var n={};if(e.password&&(e.password.length<6||!Object(v.d)(e.password))&&(n.password=!0),e.residence){var r=t.findIndex((function(t){return t.text.toLowerCase()===e.residence.toLowerCase()}));-1!==r&&"DISABLED"!==t[r].disabled||(n.residence=Object(g.localize)("Unfortunately, {{website_name}} is not available in your country.",{website_name:h.website_name}))}else n.residence=!0;return n}(e,r)},onSubmit:function(t){var o=r.findIndex((function(e){return e.text.toLowerCase()===t.residence.toLowerCase()})),a=x(x({},t),{},{residence:r[o].value});n(a,e.onSignupComplete)}},(function(t){var n=t.isSubmitting,a=t.handleBlur,c=t.errors,s=t.handleChange,l=t.values,p=t.setFieldValue,b=t.setFieldTouched,y=t.touched;return m.createElement(d.b,null,m.createElement(m.Fragment,null,e.state.has_valid_residence?m.createElement("div",{className:"account-signup__password-selection"},m.createElement("p",{className:"account-signup__heading"},m.createElement(g.Localize,{i18n_default_text:"Keep your account secure with a password"})),m.createElement(d.a,{name:"password"},(function(t){var n=t.field;return m.createElement(f.a,{input:e.state.pw_input,has_error:!(!y.password||!c.password)},m.createElement(u.a,j({},n,{className:"account-signup__password-field",label:Object(g.localize)("Create a password"),error:y.password&&c.password,required:!0,value:l.password,onBlur:a,onChange:function(t){var n=t.target;b("password",!0),n&&e.updatePassword(n.value),s(t)}})))})),m.createElement("p",{className:"account-signup__subtext"},m.createElement(g.Localize,{i18n_default_text:"Strong passwords contain at least 6 characters, combine uppercase and lowercase letters, numbers, and symbols."})),m.createElement(i.a,{className:o()("account-signup__btn",{"account-signup__btn--disabled":!l.password||c.password||n}),type:"submit",is_disabled:!l.password||!!c.password||n,text:Object(g.localize)("Start trading"),primary:!0})):m.createElement(w.a,{header_text:Object(g.localize)("Thanks for verifying your email"),class_prefix:"account-signup",errors:c,touched:y,setFieldTouched:b,setFieldValue:p,residence_list:r},m.createElement(i.a,{className:o()("account-signup__btn",{"account-signup__btn--disabled":!l.residence||c.residence}),type:"button",is_disabled:!l.residence||!!c.residence,onClick:e.onResidenceSelection,primary:!0,text:Object(g.localize)("Next")}))))})))}}])&&N(t.prototype,n),r&&N(t,r),c}(m.Component);I.propTypes={onSignup:y.a.func,residence_list:y.a.array};var R=function(e){var t=e.enableApp,n=e.disableApp,r=e.is_loading,o=e.is_visible,a=e.onSignup,i=e.residence_list,c=e.toggleAccountSignupModal;return m.createElement(s.a,{is_visible:o,disableApp:n,enableApp:t,is_loading:r||!i.length,is_mobile_full_width:!1,is_content_centered:!0},m.createElement(I,{onSignup:a,residence_list:i,isModalVisible:c,enableApp:t}))};R.propTypes={disableApp:y.a.func,enableApp:y.a.func,is_loading:y.a.bool,is_visible:y.a.bool,onSignup:y.a.func,residence_list:y.a.arrayOf(y.a.object)};var z=Object(_.b)((function(e){var t=e.ui,n=e.client;return{is_visible:t.is_account_signup_modal_visible,toggleAccountSignupModal:t.toggleAccountSignupModal,enableApp:t.enableApp,disableApp:t.disableApp,is_loading:t.is_loading,onSignup:n.onSignup,residence_list:n.residence_list}}))(R)}}]);
//# sourceMappingURL=core.account-signup-modal.cb4da15ab7d722ff9872.js.map