/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={840:(t,e,i)=>{var n;!function(s,o,r,a){"use strict";var c,l=["","webkit","Moz","MS","ms","o"],u=o.createElement("div"),h=Math.round,p=Math.abs,d=Date.now;function _(t,e,i){return setTimeout(T(t,i),e)}function f(t,e,i){return!!Array.isArray(t)&&(v(t,i[e],i),!0)}function v(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function m(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=s.console&&(s.console.warn||s.console.log);return o&&o.call(s.console,n,i),t.apply(this,arguments)}}c="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==a&&null!==n)for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])}return e}:Object.assign;var g=m((function(t,e,i){for(var n=Object.keys(e),s=0;s<n.length;)(!i||i&&t[n[s]]===a)&&(t[n[s]]=e[n[s]]),s++;return t}),"extend","Use `assign`."),y=m((function(t,e){return g(t,e,!0)}),"merge","Use `assign`.");function b(t,e,i){var n,s=e.prototype;(n=t.prototype=Object.create(s)).constructor=t,n._super=s,i&&c(n,i)}function T(t,e){return function(){return t.apply(e,arguments)}}function E(t,e){return"function"==typeof t?t.apply(e&&e[0]||a,e):t}function w(t,e){return t===a?e:t}function x(t,e,i){v(C(e),(function(e){t.addEventListener(e,i,!1)}))}function S(t,e,i){v(C(e),(function(e){t.removeEventListener(e,i,!1)}))}function M(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function A(t,e){return t.indexOf(e)>-1}function C(t){return t.trim().split(/\s+/g)}function I(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function L(t){return Array.prototype.slice.call(t,0)}function P(t,e,i){for(var n=[],s=[],o=0;o<t.length;){var r=e?t[o][e]:t[o];I(s,r)<0&&n.push(t[o]),s[o]=r,o++}return i&&(n=e?n.sort((function(t,i){return t[e]>i[e]})):n.sort()),n}function j(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),o=0;o<l.length;){if((n=(i=l[o])?i+s:e)in t)return n;o++}return a}var O=1;function k(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}var D="ontouchstart"in s,N=j(s,"PointerEvent")!==a,R=D&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),F="touch",z="mouse",q=["x","y"],X=["clientX","clientY"];function Y(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){E(t.options.enable,[t])&&i.handler(e)},this.init()}function H(t,e,i){var n=i.pointers.length,s=i.changedPointers.length,o=1&e&&n-s==0,r=12&e&&n-s==0;i.isFirst=!!o,i.isFinal=!!r,o&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,s=n.length;i.firstInput||(i.firstInput=U(e)),s>1&&!i.firstMultiple?i.firstMultiple=U(e):1===s&&(i.firstMultiple=!1);var o=i.firstInput,r=i.firstMultiple,c=r?r.center:o.center,l=e.center=W(n);e.timeStamp=d(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=B(c,l),e.distance=G(c,l),function(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},o=t.prevInput||{};1!==e.eventType&&4!==o.eventType||(s=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}(i,e),e.offsetDirection=J(e.deltaX,e.deltaY);var u,h,_=V(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=_.x,e.overallVelocityY=_.y,e.overallVelocity=p(_.x)>p(_.y)?_.x:_.y,e.scale=r?(u=r.pointers,G((h=n)[0],h[1],X)/G(u[0],u[1],X)):1,e.rotation=r?function(t,e){return B(e[1],e[0],X)+B(t[1],t[0],X)}(r.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,s,o,r=t.lastInterval||e,c=e.timeStamp-r.timeStamp;if(8!=e.eventType&&(c>25||r.velocity===a)){var l=e.deltaX-r.deltaX,u=e.deltaY-r.deltaY,h=V(c,l,u);n=h.x,s=h.y,i=p(h.x)>p(h.y)?h.x:h.y,o=J(l,u),t.lastInterval=e}else i=r.velocity,n=r.velocityX,s=r.velocityY,o=r.direction;e.velocity=i,e.velocityX=n,e.velocityY=s,e.direction=o}(i,e);var f=t.element;M(e.srcEvent.target,f)&&(f=e.srcEvent.target),e.target=f}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function U(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:h(t.pointers[i].clientX),clientY:h(t.pointers[i].clientY)},i++;return{timeStamp:d(),pointers:e,center:W(e),deltaX:t.deltaX,deltaY:t.deltaY}}function W(t){var e=t.length;if(1===e)return{x:h(t[0].clientX),y:h(t[0].clientY)};for(var i=0,n=0,s=0;s<e;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:h(i/e),y:h(n/e)}}function V(t,e,i){return{x:e/t||0,y:i/t||0}}function J(t,e){return t===e?1:p(t)>=p(e)?t<0?2:4:e<0?8:16}function G(t,e,i){i||(i=q);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function B(t,e,i){i||(i=q);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return 180*Math.atan2(s,n)/Math.PI}Y.prototype={handler:function(){},init:function(){this.evEl&&x(this.element,this.evEl,this.domHandler),this.evTarget&&x(this.target,this.evTarget,this.domHandler),this.evWin&&x(k(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&S(this.element,this.evEl,this.domHandler),this.evTarget&&S(this.target,this.evTarget,this.domHandler),this.evWin&&S(k(this.element),this.evWin,this.domHandler)}};var Z={mousedown:1,mousemove:2,mouseup:4},Q="mousedown",$="mousemove mouseup";function K(){this.evEl=Q,this.evWin=$,this.pressed=!1,Y.apply(this,arguments)}b(K,Y,{handler:function(t){var e=Z[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:z,srcEvent:t}))}});var tt={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},et={2:F,3:"pen",4:z,5:"kinect"},it="pointerdown",nt="pointermove pointerup pointercancel";function st(){this.evEl=it,this.evWin=nt,Y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(it="MSPointerDown",nt="MSPointerMove MSPointerUp MSPointerCancel"),b(st,Y,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),s=tt[n],o=et[t.pointerType]||t.pointerType,r=o==F,a=I(e,t.pointerId,"pointerId");1&s&&(0===t.button||r)?a<0&&(e.push(t),a=e.length-1):12&s&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),i&&e.splice(a,1))}});var ot={touchstart:1,touchmove:2,touchend:4,touchcancel:8},rt="touchstart",at="touchstart touchmove touchend touchcancel";function ct(){this.evTarget=rt,this.evWin=at,this.started=!1,Y.apply(this,arguments)}function lt(t,e){var i=L(t.touches),n=L(t.changedTouches);return 12&e&&(i=P(i.concat(n),"identifier",!0)),[i,n]}b(ct,Y,{handler:function(t){var e=ot[t.type];if(1===e&&(this.started=!0),this.started){var i=lt.call(this,t,e);12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:F,srcEvent:t})}}});var ut={touchstart:1,touchmove:2,touchend:4,touchcancel:8},ht="touchstart touchmove touchend touchcancel";function pt(){this.evTarget=ht,this.targetIds={},Y.apply(this,arguments)}function dt(t,e){var i=L(t.touches),n=this.targetIds;if(3&e&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,o,r=L(t.changedTouches),a=[],c=this.target;if(o=i.filter((function(t){return M(t.target,c)})),1===e)for(s=0;s<o.length;)n[o[s].identifier]=!0,s++;for(s=0;s<r.length;)n[r[s].identifier]&&a.push(r[s]),12&e&&delete n[r[s].identifier],s++;return a.length?[P(o.concat(a),"identifier",!0),a]:void 0}function _t(){Y.apply(this,arguments);var t=T(this.handler,this);this.touch=new pt(this.manager,t),this.mouse=new K(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ft(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,vt.call(this,e)):12&t&&vt.call(this,e)}function vt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout((function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)}),2500)}}function mt(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],o=Math.abs(e-s.x),r=Math.abs(i-s.y);if(o<=25&&r<=25)return!0}return!1}b(pt,Y,{handler:function(t){var e=ut[t.type],i=dt.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:F,srcEvent:t})}}),b(_t,Y,{handler:function(t,e,i){var n=i.pointerType==F,s=i.pointerType==z;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)ft.call(this,e,i);else if(s&&mt.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var gt=j(u.style,"touchAction"),yt=gt!==a,bt="compute",Tt="auto",Et="manipulation",wt="none",xt="pan-x",St="pan-y",Mt=function(){if(!yt)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){t[i]=!e||s.CSS.supports("touch-action",i)})),t}();function At(t,e){this.manager=t,this.set(e)}At.prototype={set:function(t){t==bt&&(t=this.compute()),yt&&this.manager.element.style&&Mt[t]&&(this.manager.element.style[gt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return v(this.manager.recognizers,(function(e){E(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(A(t,wt))return wt;var e=A(t,xt),i=A(t,St);return e&&i?wt:e||i?e?xt:St:A(t,Et)?Et:Tt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,s=A(n,wt)&&!Mt.none,o=A(n,St)&&!Mt["pan-y"],r=A(n,xt)&&!Mt["pan-x"];if(s){var a=1===t.pointers.length,c=t.distance<2,l=t.deltaTime<250;if(a&&c&&l)return}if(!r||!o)return s||o&&6&i||r&&24&i?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Ct=32;function It(t){this.options=c({},this.defaults,t||{}),this.id=O++,this.manager=null,this.options.enable=w(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function Lt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function Pt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function jt(t,e){var i=e.manager;return i?i.get(t):t}function Ot(){It.apply(this,arguments)}function kt(){Ot.apply(this,arguments),this.pX=null,this.pY=null}function Dt(){Ot.apply(this,arguments)}function Nt(){It.apply(this,arguments),this._timer=null,this._input=null}function Rt(){Ot.apply(this,arguments)}function Ft(){Ot.apply(this,arguments)}function zt(){It.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function qt(t,e){return(e=e||{}).recognizers=w(e.recognizers,qt.defaults.preset),new Xt(t,e)}function Xt(t,e){this.options=c({},qt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new(this.options.inputClass||(N?st:R?pt:D?_t:K))(this,H),this.touchAction=new At(this,this.options.touchAction),Yt(this,!0),v(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function Yt(t,e){var i,n=t.element;n.style&&(v(t.options.cssProps,(function(s,o){i=j(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=s):n.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}It.prototype={defaults:{},set:function(t){return c(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(f(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=jt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return f(t,"dropRecognizeWith",this)||(t=jt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(f(t,"requireFailure",this))return this;var e=this.requireFail;return-1===I(e,t=jt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(f(t,"dropRequireFailure",this))return this;t=jt(t,this);var e=I(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<8&&n(e.options.event+Lt(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=8&&n(e.options.event+Lt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=Ct},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=c({},t);if(!E(this.options.enable,[this,e]))return this.reset(),void(this.state=Ct);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},b(Ot,It,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=6&e,s=this.attrTest(t);return n&&(8&i||!s)?16|e:n||s?4&i?8|e:2&e?4|e:2:Ct}}),b(kt,Ot,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push(St),24&t&&e.push(xt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,o=t.deltaX,r=t.deltaY;return s&e.direction||(6&e.direction?(s=0===o?1:o<0?2:4,i=o!=this.pX,n=Math.abs(t.deltaX)):(s=0===r?1:r<0?8:16,i=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return Ot.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Pt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),b(Dt,Ot,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[wt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),b(Nt,It,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Tt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||12&t.eventType&&!s)this.reset();else if(1&t.eventType)this.reset(),this._timer=_((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return Ct},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=d(),this.manager.emit(this.options.event,this._input)))}}),b(Rt,Ot,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[wt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),b(Ft,Ot,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return kt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return 30&i?e=t.overallVelocity:6&i?e=t.overallVelocityX:24&i&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&p(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=Pt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),b(zt,It,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Et]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(n&&s&&i){if(4!=t.eventType)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||G(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&o?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=_((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return Ct},failTimeout:function(){return this._timer=_((function(){this.state=Ct}),this.options.interval,this),Ct},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),qt.VERSION="2.0.7",qt.defaults={domEvents:!1,touchAction:bt,enable:!0,inputTarget:null,inputClass:null,preset:[[Rt,{enable:!1}],[Dt,{enable:!1},["rotate"]],[Ft,{direction:6}],[kt,{direction:6},["swipe"]],[zt],[zt,{event:"doubletap",taps:2},["tap"]],[Nt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Xt.prototype={set:function(t){return c(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,s=e.curRecognizer;(!s||s&&8&s.state)&&(s=e.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],2===e.stopped||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(t),!s&&14&i.state&&(s=e.curRecognizer=i),o++}},get:function(t){if(t instanceof It)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(f(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(f(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=I(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return v(C(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this}},off:function(t,e){if(t!==a){var i=this.handlers;return v(C(t),(function(t){e?i[t]&&i[t].splice(I(i[t],e),1):delete i[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var i=o.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&Yt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(qt,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:Ct,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Xt,Input:Y,TouchAction:At,TouchInput:pt,MouseInput:K,PointerEventInput:st,TouchMouseInput:_t,SingleTouchInput:ct,Recognizer:It,AttrRecognizer:Ot,Tap:zt,Pan:kt,Swipe:Ft,Pinch:Dt,Rotate:Rt,Press:Nt,on:x,off:S,each:v,merge:y,extend:g,assign:c,inherit:b,bindFn:T,prefixed:j}),(void 0!==s?s:"undefined"!=typeof self?self:{}).Hammer=qt,(n=function(){return qt}.call(e,i,e,t))===a||(t.exports=n)}(window,document)},311:(t,e,i)=>{var n=i(55);t.exports=function(t){var e,i="",s=t||{};return function(t){t=[["Home","#"],["Proyectos","#"],["Yo","/#"],["Sobre este portafolio","/#/portafolio"]],i+='<nav class="header__menu__container"><i class="fas fa-bars burguerMenu"></i><ul class="header__menu"><li class="header__menu__item"><i class="fas fa-times closeMenu"></i></li>',function(){var s=t;if("number"==typeof s.length)for(var o=0,r=s.length;o<r;o++){var a=s[o];i=i+'<li class="header__menu__item"><a'+n.attr("href",a[1],!0,!0)+">"+n.escape(null==(e=a[0])?"":e)+"</a></li>"}else for(var o in r=0,s)r++,a=s[o],i=i+'<li class="header__menu__item"><a'+n.attr("href",a[1],!0,!0)+">"+n.escape(null==(e=a[0])?"":e)+"</a></li>"}.call(this),i+='<li class="header__menu__item"><div class="toggle" id="toggle"><div class="circle"></div></div></li></ul></nav>'}.call(this,"menu_items"in s?s.menu_items:"undefined"!=typeof menu_items?menu_items:void 0),i}},935:(t,e,i)=>{i(55),t.exports=function(t){return""+'<div class="aboutme"><div class="aboutme__title"><h1>¿Quien XUXA es Oscar Cabellos?</h1></div><div class="aboutme__content"><div class="aboutme__content__info"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde porro est mollitia libero doloremque provident nisi dicta voluptates nemo.</p></div><div class="aboutme__content__curriculum"><h1>Curriculum</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, fugit?</p><a class="aboutme__content__curriculum__button" href="assets/CV Oscar Fernando Cabellos Rojas.pdf" download><i class="fas fa-file-pdf"></i><p>Descargar CV</p></a></div><div class="aboutme__content__github"><h1>GitHub</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, totam.</p><a class="aboutme__content__github__button" href="https://github.com/FernandoUNMSM" target="_blank"><i class="fab fa-github"></i><p>Repositorio</p></a></div></div></div>'}},973:(t,e,i)=>{i(55),t.exports=function(t){return""+'<div class="home__header"><div class="header__conveniente"></div><div class="home__header__info"><div class="home__header__info__image"><figure><img src="assets/foto.jpg" alt="foto" srcset=""></figure></div><div class="home__header__info__text"><div class="home__header__info__text__title"><h1>Oscar Cabellos</h1></div><div class="home__header__info__text__content"><p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eos.</p></div></div></div><div class="home__header__redes"><a class="home__header__redes__item" href="https://twitter.com/FernandoCR81018" target="_blank"><div class="home__header__redes__item__icon"><i class="fab fa-twitter"></i></div><div class="home__header__redes__item__name"><p>Fernando81018</p></div></a><a class="home__header__redes__item" href="https://github.com/FernandoUNMSM" target="_blank"><div class="home__header__redes__item__icon"><i class="fab fa-github"></i></div><div class="home__header__redes__item__name"><p>FernandoUNMSM</p></div></a><a class="home__header__redes__item" href="https://www.linkedin.com/in/oscar-cabellos-12ab3317a/" target="_blank"><div class="home__header__redes__item__icon"><i class="fab fa-linkedin-in"></i></div><div class="home__header__redes__item__name"><p>Fernando81018</p></div></a><a class="home__header__redes__item" href="https://www.instagram.com/fernando81018/" target="_blank"><div class="home__header__redes__item__icon"><i class="fab fa-instagram"></i></div><div class="home__header__redes__item__name"><p>Fernando81018</p></div></a></div></div>'}},775:(t,e,i)=>{i(55),t.exports=function(t){var e,n="";return n+'<div class="container">'+(null==(e=i(973).call(this,t))?"":e)+(null==(e=i(935).call(this,t))?"":e)+(null==(e=i(694).call(this,t))?"":e)+"</div>"}},694:(t,e,i)=>{i(55),t.exports=function(t){return""+'<div class="proyectos" id="proyectos"><div class="proyectos__title"><h1>Proyectos Realizados</h1></div><div class="proyectos__content"><div class="proyectos__content__project"><div class="proyectos__content__project__title"><h1>Clinica Hololive</h1></div><div class="proyectos__content__project__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui!</p></div><div class="proyectos__content__project__buttons"><a class="proyectos__content__project__buttons__item" href="https://github.com/FernandoUNMSM/ClinicaUX" target="_blank"><i class="fab fa-github"></i><p>Repositorio</p></a><a class="proyectos__content__project__buttons__item" href="https://clinica-ux.vercel.app/" target="_blank"><i class="fab fa-chrome"></i><p>Pagina</p></a></div></div><div class="proyectos__content__project"><div class="proyectos__content__project__title"><h1>Jammy</h1></div><div class="proyectos__content__project__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui!</p></div><div class="proyectos__content__project__buttons"><a class="proyectos__content__project__buttons__item" href="https://github.com/FernandoUNMSM/Mermelada" target="_blank"><i class="fab fa-github"></i><p>Repositorio</p></a><a class="proyectos__content__project__buttons__item" href="https://fernandounmsm.github.io/Mermelada/" target="_blank"><i class="fab fa-chrome"></i><p>Pagina</p></a></div></div><div class="proyectos__content__project"><div class="proyectos__content__project__title"><h1>Frutarom</h1></div><div class="proyectos__content__project__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui!</p></div><div class="proyectos__content__project__buttons"><a class="proyectos__content__project__buttons__item" href="https://github.com/FernandoUNMSM/Frutarom" target="_blank"><i class="fab fa-github"></i><p>Repositorio</p></a><a class="proyectos__content__project__buttons__item" href="https://fernandounmsm.github.io/Frutarom/index.html" target="_blank"><i class="fab fa-chrome"></i><p>Pagina</p></a></div></div><div class="proyectos__content__project"><div class="proyectos__content__project__title"><h1>Joyeria</h1></div><div class="proyectos__content__project__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui!</p></div><div class="proyectos__content__project__buttons"><a class="proyectos__content__project__buttons__item" href="https://github.com/FernandoUNMSM/Joyeria" target="_blank"><i class="fab fa-github"></i><p>Repositorio</p></a><a class="proyectos__content__project__buttons__item" href="https://fernandounmsm.github.io/Joyeria/" target="_blank"><i class="fab fa-chrome"></i><p>Pagina</p></a></div></div></div><div class="proyectos__more"><a class="proyectos__more__button" href="html/portafolio/index.pug"><i class="fas fa-eye"></i><p>Ver mas</p></a></div></div>'}},704:(t,e,i)=>{i(55),t.exports=function(t){return""+'<div class="portafolio"><div class="portafolio__header"><div class="header__conveniente"></div><div class="portafolio__header__title"><h1>Sobre este portafolio</h1></div></div><div class="portafolio__content"><div class="portafolio__content__tecnologias"><div class="portafolio__content__tecnologias__title"><h1>Tecnologias Usada(Pekora)s</h1></div><div class="portafolio__content__tecnologias__info"><div class="portafolio__content__tecnologias__info__item"><figure><img loading="lazy" src="assets/pug-icon.png" alt="pug-icon"></figure></div><div class="portafolio__content__tecnologias__info__item"><figure><img loading="lazy" src="assets/sass-icon.png" alt="pug-icon"></figure></div><div class="portafolio__content__tecnologias__info__item"><figure><img loading="lazy" src="assets/javascript.png" alt="pug-icon"></figure></div><div class="portafolio__content__tecnologias__info__item"><figure><img loading="lazy" src="assets/git-icon.png" alt="pug-icon"></figure></div><div class="portafolio__content__tecnologias__info__item"><figure><img loading="lazy" src="assets/github.png" alt="pug-icon"></figure></div><div class="portafolio__content__tecnologias__info__item"><figure><img loading="lazy" src="assets/webpack-icon.png" alt="pug-icon"></figure></div><div class="portafolio__content__tecnologias__info__item"><figure><img loading="lazy" src="assets/vercel.svg" alt="pug-icon"></figure></div></div></div></div></div>'}},55:(t,e,i)=>{"use strict";var n=Object.prototype.hasOwnProperty;function s(t,e){return Array.isArray(t)?function(t,e){for(var i,n="",o="",r=Array.isArray(e),a=0;a<t.length;a++)(i=s(t[a]))&&(r&&e[a]&&(i=c(i)),n=n+o+i,o=" ");return n}(t,e):t&&"object"==typeof t?function(t){var e="",i="";for(var s in t)s&&t[s]&&n.call(t,s)&&(e=e+i+s,i=" ");return e}(t):t||""}function o(t){if(!t)return"";if("object"==typeof t){var e="";for(var i in t)n.call(t,i)&&(e=e+i+":"+t[i]+";");return e}return t+""}function r(t,e,i,n){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(n?t:t+'="'+t+'"');var s=typeof e;return"object"!==s&&"function"!==s||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),i||-1===e.indexOf('"'))?(i&&(e=c(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,i){if(1===arguments.length){for(var n=e[0],s=1;s<e.length;s++)n=t(n,e[s]);return n}for(var r in i)if("class"===r){var a=e[r]||[];e[r]=(Array.isArray(a)?a:[a]).concat(i[r]||[])}else if("style"===r){a=(a=o(e[r]))&&";"!==a[a.length-1]?a+";":a;var c=o(i[r]);c=c&&";"!==c[c.length-1]?c+";":c,e[r]=a+c}else e[r]=i[r];return e},e.classes=s,e.style=o,e.attr=r,e.attrs=function(t,e){var i="";for(var a in t)if(n.call(t,a)){var c=t[a];if("class"===a){i=r(a,c=s(c),!1,e)+i;continue}"style"===a&&(c=o(c)),i+=r(a,c,!1,e)}return i};var a=/["&<>]/;function c(t){var e=""+t,i=a.exec(e);if(!i)return t;var n,s,o,r="";for(n=i.index,s=0;n<e.length;n++){switch(e.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}s!==n&&(r+=e.substring(s,n)),s=n+1,r+=o}return s!==n?r+e.substring(s,n):r}e.escape=c,e.rethrow=function t(e,n,s,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||o))throw e.message+=" on line "+s,e;var r,a,c,l;try{o=o||i(835).readFileSync(n,{encoding:"utf8"}),r=3,a=o.split("\n"),c=Math.max(s-r,0),l=Math.min(a.length,s+r)}catch(i){return e.message+=" - could not read from "+n+" ("+i.message+")",void t(e,null,s)}r=a.slice(c,l).map((function(t,e){var i=e+c+1;return(i==s?"  > ":"    ")+i+"| "+t})).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+s+"\n"+r+"\n\n"+e.message}catch(t){}throw e}},835:()=>{}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";i(840);var t=i(775),e=i.n(t),n=i(704),s=i.n(n);const o={"/":(()=>{const t=document.createElement("div");t.innerHTML=e()();const i=t.querySelector("#proyectos");return new IntersectionObserver(((t,e)=>{t[0].isIntersecting&&(i.childNodes[1].childNodes.forEach((t=>t.classList.add("on"))),e.disconnect())}),{rootMargin:"0px"}).observe(i),t})(),portafolio:(()=>{const t=document.createElement("div");return t.innerHTML=s()(),t})()},r=()=>{let t=document.getElementById("root");t.innerHTML="";let e=location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";t.appendChild(o[e])};var a=i(311),c=i.n(a);const l=document.querySelector("#header");l.appendChild((()=>{const t=document.createElement("div");t.innerHTML=c()();const e=t.querySelector(".burguerMenu"),i=t.querySelector(".closeMenu"),n=t.querySelector(".header__menu");e.addEventListener("click",(()=>{n.classList.add("on")})),i.addEventListener("click",(()=>{n.classList.remove("on")}));const s=t.querySelector("#toggle"),o=document.body;o.classList.contains("theme--dark")?s.classList.remove("on"):s.classList.add("on"),s.addEventListener("click",(()=>{s.classList.toggle("on"),s.classList.contains("on")?(o.classList.add("theme"),o.classList.remove("theme--dark")):(o.classList.remove("theme"),o.classList.add("theme--dark"))}));const r=document.querySelector("#header");return window.onscroll=()=>{0!=scrollY?r.classList.add("on"):r.classList.remove("on")},t})());const u=document.body,h=new Hammer(u),p=l.querySelector(".header__menu");h.on("swipeleft",(()=>{window.innerWidth<=640&&p.classList.add("on")})),h.on("swiperight",(()=>{window.innerWidth<=640&&p.classList.remove("on")})),window.addEventListener("load",r),window.addEventListener("hashchange",r)})()})();