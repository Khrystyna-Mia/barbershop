parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mWWP":[function(require,module,exports) {
const n=document.getElementById("btn");function t(){window.pageYOffset>300?n.classList.contains("btnEntra")||(n.classList.add("btnEntra"),n.classList.remove("btnExit"),n.style.display="block"):n.classList.contains("btnEntra")&&(n.classList.add("btnExit"),n.classList.remove("btnEntra"),setTimeout(function(){n.style.display="none"},150))}function s(){const n=window.pageYOffset,t=0-n,s=750;let i=null;window.requestAnimationFrame(function o(a){i||(i=a);const c=a-i;window.scrollTo(0,e(c,n,t,s));c<s&&window.requestAnimationFrame(o)})}function e(n,t,s,e){return(n/=e/2)<1?s/2*n*n*n+t:s/2*((n-=2)*n*n+2)+t}window.addEventListener("scroll",t),n.addEventListener("click",s);
},{}]},{},["mWWP"], null)
//# sourceMappingURL=/barbershop/btn-up.b97a2816.js.map