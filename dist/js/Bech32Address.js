define(["exports","react","bech32_ecc"],function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=r(t),l=r(n),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={address:"",validation:{error:null,pos:[]}},n.handleChange=n.handleChange.bind(n),n}return i(t,e),u(t,[{key:"handleChange",value:function(e){var t=e.target.value,n=(0,l["default"])(t,["bc","tb"]);console.log(n),this.setState(function(e){return e.address=t,e.validation=n,e})}},{key:"render",value:function(){var e={fontFamily:"monospace",fontSize:"1rem",width:"50ch",position:"absolute",padding:"0.2em",margin:0};"undefined"!=typeof this.props.style&&("undefined"!=typeof this.props.style.fontFamily&&(e.fontFamily=this.props.style.fontFamily),"undefined"!=typeof this.props.style.fontSize&&(e.fontSize=this.props.style.fontSize));var t=Object.assign({color:"transparent",top:"0.2em",left:"0.25em"},e),n=Object.assign({color:"#444",backgroundColor:"transparent",border:"solid 1px #CCC"},e),r=[],a=!1;return null!==this.state.validation.error?a=this.state.validation.error:""!=this.state.address&&(n.backgroundColor="#CFC"),this.state.validation.pos.map(function(e){r.push(s["default"].createElement("span",{key:e,style:{position:"absolute",display:"inline-block",left:e+"ch",width:"1ch",background:"#FCC",padding:0}}," "))}),s["default"].createElement("div",{className:"address-input-wrapper",style:{position:"relative"}},s["default"].createElement("div",{className:"address-text-input-wrapper",style:{height:"1.5em"}},s["default"].createElement("div",{className:"address-text-underlay",style:t},r),s["default"].createElement("input",{style:n,type:"text",value:this.state.address,onChange:this.handleChange})),s["default"].createElement("div",{className:"address-input-errors",style:{fontSize:"0.8rem",color:"#900"}},a))}}]),t}(s["default"].Component);e["default"]=d});