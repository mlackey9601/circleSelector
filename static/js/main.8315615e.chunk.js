(this["webpackJsonpproject-4-assessment"]=this["webpackJsonpproject-4-assessment"]||[]).push([[0],[,,,,,,,function(e,t,c){e.exports=c(16)},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(2),l=c.n(a),i=(c(12),c(3)),o=c(4),s=c(6),u=c(5),d=(c(13),c(14),function(e){return r.a.createElement("div",{className:"Circles"},e.circleNo.map((function(t,c){return r.a.createElement("div",{className:e.circleIdx===c?"selected":""},(e.circleIdx,c+1))})))}),m=(c(15),function(e){return r.a.createElement("div",{className:"CircleSelector"},e.circleNo.map((function(t,c){return r.a.createElement("button",{className:e.circleIdx===c?"selected":"",onClick:function(){return e.handleCircleSelection(c)}},e.circleIdx===c?"Circle ".concat(c+1," Selected"):"Select Circle ".concat(c+1))})))}),h=["0","1","2","3"],f=function(e){Object(s.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={circleIdx:0},e.handleCircleSelection=function(t){return e.setState({circleIdx:t})},e}return Object(o.a)(c,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"UNIT 4 FINAL ASSESSMENT"),r.a.createElement("main",null,r.a.createElement(m,{circleNo:h,circleIdx:this.state.circleIdx,handleCircleSelection:this.handleCircleSelection}),r.a.createElement(d,{circleNo:h,circleIdx:this.state.circleIdx,handleCircleSelection:this.handleCircleSelection})))}}]),c}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.8315615e.chunk.js.map