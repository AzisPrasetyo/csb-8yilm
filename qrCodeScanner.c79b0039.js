parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fRke":[function(require,module,exports) {
var e=window.qrcode,t=document.createElement("video"),n=document.getElementById("qr-canvas"),d=n.getContext("2d"),i=document.getElementById("qr-result"),c=document.getElementById("outputData"),o=document.getElementById("btn-scan-qr"),a=!1;function r(){n.height=t.videoHeight,n.width=t.videoWidth,d.drawImage(t,0,0,n.width,n.height),a&&requestAnimationFrame(r)}function h(){try{e.decode()}catch(t){setTimeout(h,300)}}e.callback=function(e){e&&(c.innerText=e,a=!1,t.srcObject.getTracks().forEach(function(e){e.stop()}),i.hidden=!1,n.hidden=!0,o.hidden=!1)},o.onclick=function(){navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(function(e){a=!0,i.hidden=!0,o.hidden=!0,n.hidden=!1,t.setAttribute("playsinline",!0),t.srcObject=e,t.play(),r(),h()})};
},{}]},{},["fRke"], null)
//# sourceMappingURL=/csb-8yilm/qrCodeScanner.c79b0039.js.map