(this["webpackJsonpshoping-list"]=this["webpackJsonpshoping-list"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(48)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),r=(n(22),n(23),n(1)),i=(n(30),n(31),function(e){return c.a.createElement("div",{className:"title"},e.children)}),o=(n(32),n(33),function(e){var t=e.children,n=e.handlerClick,a=e.active,l=e.className;return c.a.createElement("div",{className:"block-item ".concat(a," ").concat(l),onClick:n},t)}),s=(n(34),function(e){var t=e.children;return c.a.createElement("div",{className:"empty"},t)});n(35);var u=function(e){var t=e.item,n=e.index,a=Object(r.c)();return c.a.createElement(o,{handlerClick:function(){a({type:"UNCHECKED_PRODUCT",id:n})}},c.a.createElement("div",{className:"selected-products"},c.a.createElement("div",{className:"product-label"},t.label),c.a.createElement("div",{className:"product-count"},t.count),c.a.createElement("div",{className:"product-price"},t.price,"\u0440")))},p=function(e){return e.components===u&&0===e.collection.length?c.a.createElement(a.Fragment,null):e.collection&&0!==e.collection.length?e.collection.map((function(t,n){return c.a.createElement(e.components,{item:t,index:n,key:n})})):c.a.createElement(o,null,c.a.createElement(s,null,"\u043f\u0443\u0441\u0442\u043e"))},m=n(2),d=n(4),E=(n(36),n(37),function(e){return c.a.createElement("div",{className:"btn-block"},e.children)}),h=(n(38),function(e){return c.a.createElement("button",{className:"btn-icon ".concat(e.class),onClick:e.handlerClick})});n(39);var v=function(e){return c.a.createElement("input",{onChange:e.handlerChange,placeholder:e.placeholder,value:e.value,className:"input ".concat(e.className),maxLength:e.maxlength,type:e.type,autoComplete:"off",autoFocus:e.autoFocus})},b=function(e){var t=e.item,n=e.index,l=Object(r.d)((function(e){return e.activeList}))===n?"active":null,i=Object(a.useState)({listName:t.title,changeFlag:!1}),s=Object(d.a)(i,2),u=s[0],p=s[1],b=u.changeFlag?"btn-confirm":"btn-edit",g=u.changeFlag?c.a.createElement(v,{type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:u.listName,className:"list-name-input",autoFocus:!0,maxlength:"14",handlerChange:function(e){e.target.value.length<=e.target.maxLength&&p(Object(m.a)({},u,{listName:e.target.value}))}}):c.a.createElement("span",null," ",t.title);var f=Object(r.c)();function N(e){u.changeFlag?(f(function(e,t){return{type:"CHANGE_LIST_NAME",index:e,value:t}}(n,u.listName)),L()):function(e){p(Object(m.a)({},u,{changeFlag:!0}));var t=e.target;document.addEventListener("click",(function e(n){n.target===t&&document.removeEventListener("click",e,!0),n.target.parentNode.parentNode!==t.parentNode.parentNode&&n.target!==t.parentNode.parentNode&&n.target!==t&&(n.stopPropagation(),L(),document.removeEventListener("click",e,!0))}),!0)}(e)}function L(){p(Object(m.a)({},u,{changeFlag:!1}))}var O=Object(r.d)((function(e){return e.shopingLists[n].selectedProducts.length})),_=Object(r.d)((function(e){return e.shopingLists[n].products.length}))+O;return c.a.createElement(o,{active:l,handlerClick:function(){f({type:"SELECT_LIST_NAME",payload:n}),("CSS1Compat"!=document.compatMode||window.opera?document.body.clientWidth:document.documentElement.clientWidth)<=768&&f({type:"TOGGLE_DISPLAY_LIST_NAME"})}},c.a.createElement("div",null,"-",g,"  ",c.a.createElement("span",{className:"left-block-item__count"},"(",O,"/",_,")")),c.a.createElement(E,null,c.a.createElement(h,{class:b,handlerClick:function(e){e.stopPropagation(),N(e)}}),c.a.createElement(h,{class:"btn-remove",handlerClick:function(e){e.stopPropagation(),f({type:"REMOVE_LIST_NAME",payload:n})}})))},g=(n(40),{showWindow:function(){return{type:"SHOW_CREATE_LIST_NAME"}}}),f=Object(r.b)(null,g)((function(e){var t=e.showWindow;return c.a.createElement("div",{className:"left-block-item__create",onClick:t},"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a")})),N=(n(41),function(e){return c.a.createElement("div",{className:"block-scroll"},e.children,c.a.createElement("div",{className:"block-scroll-last"}))}),L=function(){var e=Object(r.d)((function(e){return e.shopingLists}));return Object(r.d)((function(e){return e.displayListName}))?c.a.createElement("div",{className:"left-block animated fadeInLeft"},c.a.createElement(i,null,"\u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043a\u0443\u043f\u043e\u043a"),c.a.createElement(N,null,c.a.createElement(p,{components:b,collection:e}),c.a.createElement(f,null)),c.a.createElement("div",{className:"version"},"v0.11")):c.a.createElement("div",{className:"left-block animated fadeOutLeft"},c.a.createElement(i,null,"\u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043a\u0443\u043f\u043e\u043a"),c.a.createElement(N,null,c.a.createElement(p,{components:b,collection:e}),c.a.createElement(f,null)))},O=(n(42),n(3)),_=(n(43),function(e){var t=e.item,n=e.index,l={products:t,changeFlag:!1},i=new a.useState(l),s=Object(d.a)(i,2),u=s[0],p=s[1];Object(a.useEffect)((function(){p(Object(m.a)({},u,{products:t}))}),[t]);var b=u.changeFlag?null:function(){N({type:"CHECKED_PRODUCT",id:n})},g=u.changeFlag?"btn-confirm":"btn-edit",f=u.changeFlag?c.a.createElement("form",null,c.a.createElement(v,{value:u.products.label,handlerChange:function(e){L(e,"label")},maxlength:"12",type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"product-label",autoFocus:"autoFocus"}),c.a.createElement(v,{value:u.products.count,handlerChange:function(e){L(e,"count")},type:"number",maxlength:"2",placeholder:"\u043a\u043e\u043b-\u0432\u043e",className:"product-count"}),c.a.createElement(v,{value:u.products.price,handlerChange:function(e){L(e,"price")},type:"number",maxlength:"5",placeholder:"\u0446\u0435\u043d\u0430",className:"product-price"})):c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"product-label"},t.label),c.a.createElement("div",{className:"product-count"},t.count),c.a.createElement("div",{className:"product-price"},t.price,"\u0440")),N=Object(r.c)();function L(e,t){e.target.value.length<=e.target.maxLength&&p(Object(m.a)({},u,{products:Object(m.a)({},u.products,Object(O.a)({},t,e.target.value))}))}function _(e){u.changeFlag?(N(function(e,t){return{type:"CHANGE_PRODUCT",index:e,label:t.label,count:t.count,price:t.price}}(n,u.products)),C()):function(e){p(Object(m.a)({},u,{changeFlag:!0}));var t=e.target;document.addEventListener("click",(function e(n){n.target===t&&document.removeEventListener("click",e,!0),n.target.parentNode.parentNode.parentNode!==t.parentNode.parentNode&&n.target!==t.parentNode.parentNode&&n.target!==t&&(n.stopPropagation(),C(),document.removeEventListener("click",e,!0))}),!0)}(e)}function C(){p(Object(m.a)({},u,{changeFlag:!1}))}return c.a.createElement(o,{handlerClick:b},c.a.createElement("div",{className:"products"},f),c.a.createElement(E,null,c.a.createElement(h,{class:g,handlerClick:function(e){e.stopPropagation(),_(e)}}),c.a.createElement(h,{class:"btn-remove",handlerClick:function(e){e.stopPropagation(),N({type:"REMOVE_PRODUCT",id:n})}})))}),C=(n(44),function(e){var t={label:"",count:"",price:""},n=Object(a.useState)(t),l=Object(d.a)(n,2),i=l[0],s=l[1];function u(e,t){e.target.value.length<=e.target.maxLength&&s(Object(m.a)({},i,Object(O.a)({},t,e.target.value)))}var p=Object(r.c)();function b(){s(t)}return c.a.createElement(o,{className:"create-product"},c.a.createElement("form",null,c.a.createElement(v,{value:i.label,handlerChange:function(e){u(e,"label")},type:"text",maxlength:"12",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"product-label"}),c.a.createElement(v,{value:i.count,handlerChange:function(e){u(e,"count")},type:"number",maxlength:"2",placeholder:"\u043a\u043e\u043b-\u0432\u043e",className:"product-count"}),c.a.createElement(v,{value:i.price,handlerChange:function(e){u(e,"price")},type:"number",maxlength:"5",placeholder:"\u0446\u0435\u043d\u0430",className:"product-price"})),c.a.createElement(E,null,c.a.createElement(h,{class:"btn-add",handlerClick:function(){var e;i.label&&i.count&&i.price&&(p({type:"ADD_PRODUCT",label:(e=i).label,count:e.count,price:e.price}),b())}}),c.a.createElement(h,{class:"btn-remove",handlerClick:b})))}),j=(n(45),function(){var e=Object(r.d)((function(e){return e.shopingLists[e.activeList].products})),t=Object(r.c)();return Object(a.useEffect)((function(){var e;t({type:"CALCULATING_PRESENTAMOUNT",amount:e}),t(function(e){return{type:"CALCULATING_AMOUNT",amount:e}}())}),[e]),c.a.createElement("div",{className:"wrapper-amount"},c.a.createElement("div",{className:"present-amount"},"\u041a\u0443\u043f\u043b\u0435\u043d\u043e \u043d\u0430 \u0441\u0443\u043c\u043c\u0443: ",Object(r.d)((function(e){return e.presentAmount})),"\u0440"),c.a.createElement("div",{className:"total-amount"},"\u0412\u0441\u0435\u0433\u043e: ",Object(r.d)((function(e){return e.totalAmount})),"\u0440"))}),y=(n(46),function(e){var t=Object(r.c)();return c.a.createElement("div",{className:"mobile-menu",onClick:function(){t({type:"TOGGLE_DISPLAY_LIST_NAME"})}},c.a.createElement("div",{className:"mobile-menu__line"}),c.a.createElement("div",{className:"mobile-menu__line"}),c.a.createElement("div",{className:"mobile-menu__line"}))}),T=function(){var e=Object(r.d)((function(e){return e.shopingLists[Object(r.d)((function(e){return e.activeList}))]})).products,t=Object(r.d)((function(e){return e.shopingLists[Object(r.d)((function(e){return e.activeList}))]})).selectedProducts;return c.a.createElement("div",{className:"right-block"},c.a.createElement(i,null,c.a.createElement(y,null),"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),c.a.createElement(N,null,c.a.createElement(C,null),c.a.createElement(p,{components:_,collection:e}),c.a.createElement(p,{components:u,collection:t})),c.a.createElement(j,null))},A=n(12),S=n(13),k=n(15),P=n(14),I=n(16),D=(n(47),function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(k.a)(this,Object(P.a)(t).call(this,e))).createName=function(){n.state.value.trim()&&(n.props.createListName(n.state.value),n.setState({value:""}),n.props.hideWindow())},n.onChangeName=function(e){n.setState({value:e.target.value})},n.state={value:""},n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return this.props.display?c.a.createElement("div",{className:"wrapper-create-title"},c.a.createElement("form",null,c.a.createElement("div",{className:"create-title"},c.a.createElement("div",{className:"create-title__btn-close",onClick:this.props.hideWindow}),c.a.createElement("div",{className:"create-title__header"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430"),c.a.createElement("input",{className:"create-title__input",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",maxLength:"14",autoFocus:!0,value:this.state.value,onChange:this.onChangeName}),c.a.createElement("button",{className:"create-title__button",onClick:function(t){t.preventDefault(),e.createName()}},"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))):null}}]),t}(c.a.Component)),x={createListName:function(e){return{type:"CREATE_LIST_NAME",payload:e}},hideWindow:function(){return{type:"HIDE_CREATE_LIST_NAME"}}},w=Object(r.b)((function(e){return{titles:e.titles,display:e.displayCreateListName}}),x)(D);var M=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(L,null),c.a.createElement(T,null),c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(5),U=JSON.parse(localStorage.getItem("shoping-lists"))||{shopingLists:[{title:"\u0441\u043b\u0430\u0434\u043a\u043e\u0435",products:[{label:"\u041f\u0435\u0447\u0435\u043d\u044c\u0435",count:"1",price:"75"},{label:"\u0422\u043e\u0440\u0442",count:"1",price:"345"},{label:"\u0427\u0430\u0439",count:"2",price:"40"}],selectedProducts:[{label:"\u041c\u043e\u0440\u043e\u0436\u0435\u043d\u043e\u0435",count:"1",price:"175"},{label:"\u0419\u043e\u0433\u0443\u0440\u0442",count:"1",price:"25"}]},{title:"\u043d\u0430 \u0441\u0430\u043b\u0430\u0442",products:[{label:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440\u044b",count:"2",price:"140"},{label:"\u041c\u043e\u0440\u043a\u043e\u0432\u044c",count:"3",price:"15"},{label:"\u041e\u0433\u0443\u0440\u0446\u044b",count:"1",price:"90"},{label:"\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430",count:"1",price:"60"},{label:"\u041f\u0435\u0440\u0435\u0446",count:"4",price:"90"},{label:"\u041f\u0435\u0442\u0440\u0443\u0448\u043a\u0430",count:"1",price:"30"},{label:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440\u044b",count:"2",price:"140"},{label:"\u041c\u043e\u0440\u043a\u043e\u0432\u044c",count:"3",price:"15"},{label:"\u041e\u0433\u0443\u0440\u0446\u044b",count:"1",price:"90"},{label:"\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430",count:"1",price:"60"},{label:"\u041f\u0435\u0440\u0435\u0446",count:"4",price:"90"},{label:"\u041f\u0435\u0442\u0440\u0443\u0448\u043a\u0430",count:"1",price:"30"}],selectedProducts:[]},{title:"\u0434\u043b\u044f \u0440\u0435\u043c\u043e\u043d\u0442\u0430",products:[{label:"\u041a\u0440\u0430\u0441\u043a\u0430",count:"5",price:"370"},{label:"\u041e\u0431\u043e\u0438",count:"13",price:"517"},{label:"\u041a\u043b\u0435\u0439",count:"3",price:"210"},{label:"\u0413\u0432\u043e\u0437\u0434\u0438",count:"2.5",price:"20"}],selectedProducts:[]}],activeList:0,presentAmount:0,totalAmount:0,displayCreateListName:!1,displayListName:!0},F=Object(R.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_LIST_NAME":return Object(m.a)({},e,{activeList:t.payload});case"CHANGE_LIST_NAME":return Object(m.a)({},e,{shopingLists:e.shopingLists.map((function(e,n){return n===t.index&&(e.title=t.value),e}))});case"REMOVE_LIST_NAME":var n=e.activeList===e.shopingLists.length-1&&0!==e.activeList?e.activeList-1:e.activeList;return Object(m.a)({},e,{shopingLists:1!==e.shopingLists.length?e.shopingLists.filter((function(e,n){return n!==t.payload})):[{title:"\u0431\u0435\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f",products:[],selectedProducts:[]}],activeList:n});case"CREATE_LIST_NAME":return Object(m.a)({},e,{shopingLists:e.shopingLists.concat({title:t.payload,products:[],selectedProducts:[]}),activeList:e.shopingLists.length});case"SHOW_CREATE_LIST_NAME":return Object(m.a)({},e,{displayCreateListName:!0});case"HIDE_CREATE_LIST_NAME":return Object(m.a)({},e,{displayCreateListName:!1});case"TOGGLE_DISPLAY_LIST_NAME":return Object(m.a)({},e,{displayListName:!0!==e.displayListName});case"ADD_PRODUCT":var a={label:t.label,count:t.count,price:t.price},c=e.shopingLists;return c[e.activeList].products=c[e.activeList].products.concat(a),Object(m.a)({},e,{shopingLists:c});case"CHANGE_PRODUCT":var l=e.shopingLists[e.activeList].products.map((function(e,n){return n===t.index&&(e.label=t.label,e.count=t.count,e.price=t.price),e})),r=e.shopingLists;return r[e.activeList].products=l,Object(m.a)({},e,{shopingLists:r});case"REMOVE_PRODUCT":var i=e.shopingLists[e.activeList];i.products=i.products.filter((function(e,n){return n!==t.id}));var o=e.shopingLists;return o.splice(e.activeList,1,i),Object(m.a)({},e,{shopingLists:o});case"CHECKED_PRODUCT":var s=e.shopingLists[e.activeList].products[t.id],u=e.shopingLists[e.activeList];u.products=u.products.filter((function(e,n){return n!==t.id})),u.selectedProducts=u.selectedProducts.concat(s);var p=e.shopingLists;return p.splice(e.activeList,1,u),Object(m.a)({},e,{shopingLists:p});case"UNCHECKED_PRODUCT":var d=e.shopingLists[e.activeList].selectedProducts[t.id],E=e.shopingLists[e.activeList];E.selectedProducts=E.selectedProducts.filter((function(e,n){return n!==t.id})),E.products=E.products.concat(d);var h=e.shopingLists;return h.splice(e.activeList,1,E),Object(m.a)({},e,{shopingLists:h});case"CALCULATING_PRESENTAMOUNT":var v;try{v=e.shopingLists[e.activeList].selectedProducts.reduce((function(e,t){return e+Number(t.count)*Number(t.price)}),0)}catch(g){v=[]}return Object(m.a)({},e,{presentAmount:v});case"CALCULATING_AMOUNT":var b;try{b=e.shopingLists[e.activeList].products.reduce((function(e,t){return e+Number(t.price)*Number(t.count)}),e.presentAmount)}catch(f){b=[]}return Object(m.a)({},e,{totalAmount:b});default:return e}}),Object(R.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));F.subscribe((function(){localStorage.setItem("shoping-lists",JSON.stringify(F.getState()))}));var G=c.a.createElement(r.a,{store:F},c.a.createElement(M,null));Object(l.render)(G,document.getElementById("container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.01de24ee.chunk.js.map