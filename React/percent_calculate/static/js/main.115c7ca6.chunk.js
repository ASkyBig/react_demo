(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(7),i=n.n(u),c=n(1),l=n(2),o=n(4),b=n(3),s=n(5),m=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(b.a)(t).call(this))).state={number:""},e}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleNumberInput",value:function(e){var t=e.target.value;this.setState({number:t}),this.props.onInputSubmitCallback(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"number",value:this.state.number,onChange:this.handleNumberInput.bind(this)}))}}]),t}(a.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.number)}}]),t}(a.Component),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(b.a)(t).call(this))).state={numberFormat:""},e}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleInput",value:function(e){var t=(+e).toFixed(2)+"%";this.setState({numberFormat:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,{onInputSubmitCallback:this.handleInput.bind(this)}),r.a.createElement(h,{number:this.state.numberFormat}))}}]),t}(a.Component);i.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.115c7ca6.chunk.js.map