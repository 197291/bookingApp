(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){e.exports=a(220)},179:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),o=a.n(r),c=(a(179),a(59)),l=a(65),s=a(38),u=a(31),m=a(142),d=a(61),p={hotels:[],search:"",error:null},h=Object(u.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.data;switch(a){case"GET_HOTELS_SUCCESS":return Object(d.a)({},e,{hotels:n,error:null});case"GET_HOTELS_FAIL":return Object(d.a)({},e,{error:n});case"SET_SEARCH_VALUE":return Object(d.a)({},e,{search:n});default:return e}}}),f=window.devToolsExtension?window.devToolsExtension():function(e){return e},g=Object(u.a)(m.a)(f(u.d))(h);window.ss=g;var b=g,v={Home:"/",Hotel:"/hotels/:id"},E=a(260),x=a(28),j=a(257),w=a(271),S=a(258),y=a(146),O=a.n(y),q=a(267),k=Object(q.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",maxWidth:580,width:"100%"},input:{marginLeft:8,flex:1},iconButton:{padding:10},divider:{width:1,height:28,margin:4},container:{maxWidth:580,width:"100%"}}),C=function(e){var t=k(e),a=Object(n.useState)(""),r=Object(x.a)(a,2),o=r[0],c=r[1];return i.a.createElement("div",{className:"SearchInput "+t.container},i.a.createElement(j.a,{className:t.root},i.a.createElement(w.a,{className:t.input,placeholder:"Search hotels",inputProps:{"aria-label":"Search hotels"},onChange:function(e){return c(e.target.value.trim().toLowerCase())},value:o,type:"search"}),i.a.createElement(S.a,{onClick:function(){return e.setSearcValue(o)},className:t.iconButton,"aria-label":"Search"},i.a.createElement(O.a,null))))},D=a(259),I=a(168),N=a(147),H=a(148),T=a(149),L=Object(q.a)({root:{fontSize:"12px",color:"yellow"}}),P=function(e){var t=Array(5).fill(!1,0,5);t.fill(!0,0,e.stars);var a=L(e);return i.a.createElement("div",{className:a.root},e.stars?t.map(function(e,t){return i.a.createElement(N.a,{key:"star-".concat(t),icon:e?H.a:T.a})}):i.a.createElement("p",{style:{color:"#07c"}},"No stars, but looks good!"))},_=Object(q.a)({title:{color:"#07c",fontWeight:"bold",fontSize:18,maxWidth:"75%",marginRight:"5px",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:10},listItem:{padding:16,margin:"16px 0",border:"1px solid #c6c6c6",borderRadius:3,alignItems:"flex-start",cursor:"pointer",maxWidth:680,"&:hover":{backgroundColor:"#e9f0fa"}},wrapPhoto:{width:"200px",height:"200px"},hotelPhoto:{width:"200px",height:"200px"},content:{display:"flex",flexDirection:"column",padding:"0 0 0 16px",alignItems:"flex-start",maxWidth:"calc(100% - 200px)"},description:{fontSize:12,margin:".625em 0 0",lineHeight:"18px",fontWeight:400},city:{fontSize:12,color:"#07c",fontStyle:"normal",fontWeight:"normal",borderBottom:"1px solid",margin:"0 0 8px 0"},wrapTitleHotel:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}),W=function(e){var t=e.hotel,a=_(e);return i.a.createElement(l.b,{to:"/hotels/".concat(t.id)},i.a.createElement(D.a,{classes:{root:a.listItem},divider:!0},i.a.createElement("div",{className:a.wrapPhoto},i.a.createElement("img",{className:a.hotelPhoto,src:t.imagePreview||" http://dummyimage.com/120",alt:"hotel"})),i.a.createElement("div",{className:a.content},i.a.createElement("div",{className:a.wrapTitleHotel},i.a.createElement(I.a,{title:t.name,classes:{h2:a.title},variant:"h2"},t.name),i.a.createElement(P,{stars:t.stars})),i.a.createElement("div",{className:a.city},t.city),i.a.createElement("div",null,t.description))))},B=function(e){var t=e.hotels;return i.a.createElement("div",{className:"Hotels"},i.a.createElement(E.a,null,i.a.createElement("ul",null,t.map(function(e){return i.a.createElement(W,{key:e.id,hotel:e})}))))},R=Object(q.a)({root:{padding:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}),A=function(e){var t=e.getHotels,a=e.hotels,r=e.setSearcValue,o=R(e);return Object(n.useEffect)(function(){t()},[t]),i.a.createElement("div",{className:"Home"},i.a.createElement(E.a,{classes:{root:o.root}},i.a.createElement(C,{setSearcValue:r}),i.a.createElement(B,{hotels:a})))},z=a(150),U=a(110),V=a(62),F=a.n(V),G=function(){function e(){if(Object(z.a)(this,e),e._instance)throw new Error("Instantiation failed: use Api.getInstance() instead of new.")}return Object(U.a)(e,null,[{key:"getInstance",value:function(){return e._instance}}]),Object(U.a)(e,[{key:"get",value:function(e,t){var a=this;return new Promise(function(n,i){F.a.get(a.getUrl(e),t).then(function(e){var t=e.data;return n(t)}).catch(function(e){return i(e)})})}},{key:"put",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(i,r){F.a.put(t.getUrl(e),a,n).then(function(e){var t=e.data;return i(t)}).catch(function(e){return r(e)})})}},{key:"post",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(i,r){F.a.post(t.getUrl(e),a,n).then(function(e){var t=e.data;return i(t)}).catch(function(e){return r(e)})})}},{key:"delete",value:function(e,t){var a=this;return new Promise(function(n,i){F.a.delete(a.getUrl(e),t).then(function(e){var t=e.data;return n(t)}).catch(function(e){return i(e)})})}},{key:"getUrl",value:function(e){return e||"https://197291.github.io/bookingApp/hotels.json"}},{key:"CancelToken",get:function(){return F.a.CancelToken}}]),e}();G._instance=new G;var M=G.getInstance(),J=function(e){return{type:"SET_SEARCH_VALUE",data:e}},Q=function(){return function(e){M.get("http://localhost:3000/hotels.json").then(function(t){return e({type:"GET_HOTELS_SUCCESS",data:t})}).catch(function(t){return e(function(e){return{type:"GET_HOTELS_FAIL",data:e}}(t))})}},X=a(82),Y=Object(X.a)(function(e){return e.home.hotels},function(e){return e.home.search},function(e,t){return t?e.filter(function(e){return e.name.toLowerCase().startsWith(t)||e.city.toLowerCase().startsWith(t)}):function(e){var t=e.length-5,a=Math.floor(Math.random()*t);return e.slice(a,a+5)}(e)}),K=Object(c.b)(function(e){return{hotels:Y(e)}},function(e){return Object(u.b)({getHotels:Q,setSearcValue:J},e)})(A),Z=a(266),$=Object(q.a)({root:{width:"100%",maxWidth:960,margin:"auto",padding:"30px 0"},wrapTitleHotel:{display:"flex",alignItems:"center",padding:10},titleHotel:{fontSize:24,marginRight:20},city:{padding:10,fontSize:18},description:{fontSize:14,padding:10}}),ee=a(151),te=(a(215),Object(q.a)({root:{}})),ae=["https://r-cf.bstatic.com/images/hotel/max1280x900/191/191281157.jpg","https://q-cf.bstatic.com/images/hotel/max1280x900/191/191281401.jpg","https://q-cf.bstatic.com/images/hotel/max1280x900/133/133069836.jpg","https://q-cf.bstatic.com/images/hotel/max1280x900/175/175750576.jpg","https://q-cf.bstatic.com/images/hotel/max1280x900/129/129747614.jpg","https://r-cf.bstatic.com/images/hotel/max1280x900/133/133069842.jpg","https://r-cf.bstatic.com/images/hotel/max1280x900/174/174360707.jpg","https://q-cf.bstatic.com/images/hotel/max1280x900/133/133069836.jpg","https://r-cf.bstatic.com/images/hotel/max1280x900/129/129747657.jpg","https://r-cf.bstatic.com/images/hotel/max1280x900/175/175748600.jpg","https://r-cf.bstatic.com/images/hotel/max1280x900/154/15499749.jpg","https://r-cf.bstatic.com/images/hotel/max1280x900/175/175747114.jpg"],ne=function(e){var t=te(e);return i.a.createElement("div",{className:"Slider "+t.root},i.a.createElement(ee.Carousel,e,ae.map(function(e){return i.a.createElement("div",{key:e},i.a.createElement("img",{alt:"Room",src:e}))})))},ie=a(265),re=a(268),oe=a(111),ce=(a(219),Object(q.a)({root:{display:"flex",width:"100%",justifyContent:"space-between"},dateRange:{width:"48%",position:"relative",zIndex:10},w100:{width:"100%"}}));Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var le=new Date,se=function(e){var t=Object(n.useState)(le),a=Object(x.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(r),l=Object(x.a)(c,2),s=l[0],u=l[1],m=ce(e);return i.a.createElement("div",{className:"DateRangePicker "+m.root},i.a.createElement("div",{className:m.dateRange},i.a.createElement(oe.a,{customInput:i.a.createElement(re.a,{required:!0,InputProps:{readOnly:!0},label:"Check In date",classes:{root:m.w100},type:"text"}),selected:r,selectsStart:!0,startDate:r,endDate:s,onChange:function(e){o(e);var t=new Date(e).getTime();new Date(s).getTime()<=t&&u(e)},minDate:le})),i.a.createElement("div",{className:m.dateRange},i.a.createElement(oe.a,{customInput:i.a.createElement(re.a,{required:!0,InputProps:{readOnly:!0},label:"Check Out date",classes:{root:m.w100},type:"text"}),selected:s,selectsEnd:!0,startDate:r,endDate:s,onChange:u,minDate:r})))},ue=a(270),me=a(264),de=a(262),pe=a(263),he=a(261),fe=function(e){var t=e.handleClose,a=void 0===t?function(){return{}}:t,n=e.isOpen;return i.a.createElement("div",{className:"Modal"},i.a.createElement(ue.a,{open:n,onClose:a},i.a.createElement(he.a,null,"Thank you!"),i.a.createElement(de.a,null,i.a.createElement(pe.a,null,"You've booked the hotel!")),i.a.createElement(me.a,null,i.a.createElement(ie.a,{onClick:a,color:"primary"},"Ok"))))},ge=Object(q.a)({root:{fontSize:"12px",display:"flex",flexDirection:"column",maxWidth:600,width:"100%",margin:"auto",alignItems:"center",position:"relative",padding:"0 10px"},btn:{width:120,margin:"30px auto"},input:{width:"100%"},error:{color:"red",position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)"}}),be=function(e){var t=ge(e),a=Object(n.useState)(!1),r=Object(x.a)(a,2),o=r[0],c=r[1],l=Object(n.useState)(""),s=Object(x.a)(l,2),u=s[0],m=s[1],p=Object(n.useState)(""),h=Object(x.a)(p,2),f=h[0],g=h[1],b=Object(n.useState)("1"),v=Object(x.a)(b,2),E=v[0],j=v[1],w=Object(n.useState)(!1),S=Object(x.a)(w,2),y=S[0],O=S[1],q=Object(n.useState)({startDate:new Date,endDate:new Date}),k=Object(x.a)(q,2),C=k[0],D=k[1];return i.a.createElement("form",{name:"form-booking",onSubmit:function(e){return e.preventDefault()},className:"FormBooking "+t.root},i.a.createElement("h3",{style:{fontSize:18}},"Book your hotel!"),i.a.createElement(se,{setDate:D}),i.a.createElement(re.a,{label:"Firstname",helperText:"Required*",margin:"normal",variant:"outlined",className:t.input,value:u,onChange:function(e){return m(e.target.value.trim())}}),i.a.createElement(re.a,{label:"Lastname",helperText:"Required*",margin:"normal",variant:"outlined",className:t.input,value:f,onChange:function(e){return g(e.target.value.trim())}}),i.a.createElement(re.a,{label:"Number guests",value:E,onChange:function(e){return j(e.target.value)},type:"number",className:t.input,onBlur:function(e){return j((t=e.target.value.trim()).startsWith("0")||+t<1||!t?"1":t);var t},InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}),i.a.createElement(ie.a,{classes:{root:t.btn},color:"primary",variant:"contained",onClick:function(){u.trim()&&f.trim()&&E&&C.startDate&&C.endDate?(c(!0),e.handleSubmit(Object(d.a)({firstname:u,lastname:f,guests:E},C))):(O(!0),setTimeout(function(){O(!1)},3e3))}},"Submit"),y&&i.a.createElement(I.a,{classes:{root:t.error}},"Please, fill all fields"),i.a.createElement(fe,{handleClose:function(){c(!1),e.handleSuccessSubmit&&e.handleSuccessSubmit()},isOpen:o}))},ve=Object(s.g)(function(e){var t=$(e),a=e.hotel;return i.a.createElement("div",{className:"Hotel "+t.root},i.a.createElement(E.a,null,i.a.createElement(j.a,null,i.a.createElement("div",{className:t.wrapTitleHotel},i.a.createElement(I.a,{classes:{h2:t.titleHotel},variant:"h2"},a.name),i.a.createElement(P,{stars:a.stars})),i.a.createElement("hr",null),i.a.createElement(I.a,{gutterBottom:!0,classes:{h3:t.city},variant:"h3"},"City: ",a.city||"Beatiful place"),i.a.createElement(ne,{showIndicators:!1,infiniteLoop:!0}),i.a.createElement(I.a,{gutterBottom:!0,classes:{body1:t.description},variant:"body1"},i.a.createElement("strong",null,"Description:")," ",a.description+" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente consequuntur quas dolore excepturi nam veritatis doloribus voluptates autem natus provident deleniti vero incidunt pariatur, officiis ipsam maxime tempora ducimus facere aliquid fugiat nisi! Beatae mollitia labore ipsum. Ducimus enim atque odit laboriosam nobis earum rem? Soluta fuga inventore suscipit adipisci, nesciunt consequuntur ipsa itaque cupiditate vel ex voluptatem, hic voluptates at dolorum voluptatum debitis sapiente officiis quibusdam laborum, recusandae dolores perferendis! Alias, neque facere? Inventore sapiente dolore tempora, adipisci itaque neque suscipit vel, atque fuga aut vitae, commodi hic voluptatum autem quibusdam mollitia facere quis ratione velit odio dicta alias iste ut temporibus? Voluptates iste, reprehenderit quisquam nemo excepturi, molestias animi, quos aliquid pariatur sint est accusantium blanditiis consectetur vitae ducimus delectus odit aspernatur obcaecati officia numquam voluptas debitis quod fuga optio. Voluptates aperiam dolores blanditiis beatae maxime. Iste deserunt tenetur corporis excepturi maiores, soluta neque veniam consequuntur quae asperiores maxime, autem, dolorum consequatur. Dolorum voluptatum, sed eligendi enim facere mollitia commodi deserunt. Sequi possimus quod assumenda pariatur rem atque quis autem quos accusantium optio excepturi nesciunt obcaecati facere corrupti a odit debitis similique illo, aspernatur delectus soluta blanditiis eum incidunt tempora. Quasi similique voluptatibus, harum ducimus et dolore, nemo reprehenderit commodi illum veniam suscipit nostrum molestiae officiis nulla maxime sequi quibusdam accusantium aliquam odit. Maiores, vitae. Exercitationem sed, possimus labore ullam perspiciatis pariatur aliquid, eos blanditiis repellendus minima magni voluptatem aperiam hic? Facere, iure saepe et delectus molestias, quo ipsum aliquam deleniti vero veniam architecto quia, fuga excepturi voluptas libero fugit sunt. At beatae enim accusamus consectetur accusantium quia maiores labore? Suscipit repudiandae officiis nostrum consectetur harum dignissimos, quas ex in dolor est nam reiciendis, incidunt molestiae, nisi doloremque."),i.a.createElement("hr",null),i.a.createElement(be,{handleSubmit:function(e){console.log("form data",e)},handleSuccessSubmit:function(){e.history.push("/")}}))))}),Ee=Object(q.a)({rootSpinner:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}}),xe=function(e){var t=Ee(e);return e.hotel?i.a.createElement("div",{style:{background:"lightgrey"},className:"Hotel"},i.a.createElement(E.a,null,i.a.createElement(ve,{hotel:e.hotel}))):(e.getHotels(),i.a.createElement("div",{className:t.rootSpinner},i.a.createElement(Z.a,null)))},je=Object(X.a)(function(e){return e.home.hotels},function(e,t){return t.match.params.id},function(e,t){return e.find(function(e){return e.id===t})}),we=Object(s.g)(Object(c.b)(function(e,t){return{hotel:je(e,t)}},function(e){return Object(u.b)({getHotels:Q},e)})(xe)),Se=function(){return i.a.createElement(l.a,null,i.a.createElement(s.d,null,i.a.createElement(s.b,{path:v.Home,exact:!0,component:K}),i.a.createElement(s.b,{path:v.Hotel,component:we}),i.a.createElement(s.a,{to:v.Home})))},ye=function(){return i.a.createElement(c.a,{store:b},i.a.createElement(Se,null))};o.a.render(i.a.createElement(ye,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.67ddc640.chunk.js.map