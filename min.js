function workway(a){"use strict";
/*! (c) 2018 Andrea Giammarchi (ISC) */return new Promise(function(u,e){function f(){return++t+Math.random()}var t=0,h=f(),l={},p=a instanceof Worker?a:new Worker(a);p.addEventListener("message",function(e){if(e.data.channel===h){e.stopImmediatePropagation();var t=e.data.namespace;if(t){var o=function(e){var a,r,t=new Promise(function(e,t){a=e,r=t});return t.resolve=a,t.reject=r,l[e.id=f()]=t,p.postMessage({channel:h,message:e}),t},c=[].slice;!function a(r){Object.keys(r).forEach(function(e){var t=r[e];switch(t.type){case"class":r[e]=function(e){var t=e.path,a=e.methods,r=e.statics,n=new WeakMap;function s(){n.set(this,f())}return a.forEach(function(e){s.prototype[e]=function(){return o({args:c.call(arguments),path:t,method:e,object:{id:n.get(this),value:this}})}}),r.methods.forEach(function(e){s[e]=function(){return o({args:c.call(arguments),path:t,method:e})}}),r.values.forEach(function(e){s[e[0]]=e[1]}),s}(t);break;case"function":r[e]=function(e){return function(){return o({args:c.call(arguments),path:e})}}(t.path);break;case"object":a(r[e]=t.value);break;default:r[e]=t.value}})}(t),u({worker:p,namespace:t})}else{var a=e.data.message,r=a.id,n=l[r];if(delete l[r],a.hasOwnProperty("error")){var s,i=a.error;i.hasOwnProperty("source")?s=i.source:(s=new Error(i.message)).stack=i.stack,n.reject(s)}else n.resolve(a.result)}}}),p.postMessage({channel:h})})}