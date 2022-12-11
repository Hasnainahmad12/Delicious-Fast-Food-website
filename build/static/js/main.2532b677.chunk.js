(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__27hI_",summary:"CartItem_summary__8RnT7",price:"CartItem_price__2T-Wb",amount:"CartItem_amount__2VM18",actions:"CartItem_actions__GyiKg"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__HecbU",total:"Cart_total__sTMYb",actions:"Cart_actions__1ts2q","button--alt":"Cart_button--alt__qGT7A",button:"Cart_button__1qKMf"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__1NHI2",icon:"HeaderCartButton_icon__1JTks",badge:"HeaderCartButton_badge__1oAqE",bump:"HeaderCartButton_bump__3cqPD"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__2U7oG",description:"MealItem_description__5k94q",price:"MealItem_price__393I8"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2FgAZ",modal:"Modal_modal__YQsFS","slide-down":"Modal_slide-down__3K3cl"}},function(e,t,n){e.exports={header:"Header_header__3aCjX","main-image":"Header_main-image__Q6Kv7"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__krxKU"}},function(e,t,n){e.exports={card:"Card_card__1iiIU"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3lMqT","meals-appear":"AvailableMeals_meals-appear__2eXVi"}},function(e,t,n){e.exports={input:"Input_input__2UZs_"}},function(e,t,n){e.exports={form:"MealItemForm_form__10-Iv"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/meals.2971f633.jpg",l=n(12),m=n.n(l),u=n(0),d=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),b=n(7),x=n.n(b),O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(j).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(x.a.button," ").concat(a?x.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(u.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(u.jsx)("span",{className:x.a.icon,children:Object(u.jsx)(d,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:x.a.badge,children:o})]})},p=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("header",{className:m.a.header,children:[Object(u.jsx)("h1",{children:"ReactMeals"}),Object(u.jsx)(O,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:m.a["main-image"],children:Object(u.jsx)("img",{src:o,alt:"A table is full of delicious food!!"})})]})},h=n(16),_=n.n(h),f=function(){return Object(u.jsxs)("section",{className:_.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(17),C=n.n(v),g=function(e){return Object(u.jsx)("div",{className:C.a.card,children:e.children})},A=n(18),N=n.n(A),I=n(2),y=n(19),M=n.n(y),k=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:M.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(I.a)({ref:t},e.input))]})})),w=n(20),H=n.n(w),F=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:H.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(k,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!a&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},T=n(10),B=n.n(T),R=function(e){var t=Object(r.useContext)(j),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:B.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:B.a.description,children:e.description}),Object(u.jsx)("div",{className:B.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],q=function(){var e=S.map((function(e){return Object(u.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:N.a.meals,children:Object(u.jsx)(g,{children:Object(u.jsx)("ul",{children:e})})})},D=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(q,{})]})},E=n(8),K=n.n(E),P=n(11),U=n.n(P),V=function(e){return Object(u.jsx)("div",{className:U.a.backdrop,onClick:e.onClose})},z=function(e){return Object(u.jsx)("div",{className:U.a.modal,children:Object(u.jsx)("div",{className:U.a.content,children:e.children})})},G=document.getElementById("overlays"),Y=function(e){return Object(u.jsxs)(r.Fragment,{children:[K.a.createPortal(Object(u.jsx)(V,{onClose:e.onClose}),G),K.a.createPortal(Object(u.jsx)(z,{children:e.children}),G)]})},J=n(4),$=n.n(J),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:$.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:$.a.summary,children:[Object(u.jsx)("span",{className:$.a.price,children:t}),Object(u.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:$.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(5),Z=n.n(X),W=function(e){var t=Object(r.useContext)(j),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},s=Object(u.jsx)("ul",{className:Z.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(u.jsxs)(Y,{onClose:e.onClose,children:[s,Object(u.jsxs)("div",{className:Z.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:Z.a.actions,children:[Object(u.jsx)("button",{className:Z.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(u.jsx)("button",{className:Z.a.button,children:"Order"})]})]})},L=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(I.a)(Object(I.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(L.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(L.a)(e.items))[o]=u}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(j.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ne,{children:[n&&Object(u.jsx)(W,{onClose:function(){a(!1)}}),Object(u.jsx)(p,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(D,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.2532b677.chunk.js.map