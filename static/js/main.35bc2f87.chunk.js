(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),n=c(4),o=c(5),r=c(7),l=c(6),i=c(1),d=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.handleClear=function(){return e.setState({selectedGood:""})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(d.jsxs)("main",{className:"section container",children:[t?Object(d.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleClear})]}):Object(d.jsx)("h1",{className:"title",children:"No goods selected"}),Object(d.jsx)("table",{className:"table",children:Object(d.jsx)("tbody",{children:u.map((function(c){var s=t===c;return Object(d.jsxs)("tr",{"data-cy":"Good",className:s?"has-background-success-light":"",children:[Object(d.jsx)("td",{children:Object(d.jsx)("button",{"data-cy":s?"RemoveButton":"AddButton",type:"button",className:s?"button is-info":"button",onClick:function(){return s?e.handleClear():e.setState({selectedGood:c})},children:s?"-":"+"})}),Object(d.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.Component);a.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.35bc2f87.chunk.js.map