(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,n,a){},175:function(e,n,a){},176:function(e,n,a){},194:function(e,n,a){},196:function(e,n,a){"use strict";a.r(n);var t,l,r,i,c,m,o,u,d,s,E,p,b,f,g,v,z,j,O,k,h,y,F,w,x,C,S,I,L,R,A,M=a(0),N=a.n(M),B=a(19),K=a.n(B),T=(a(87),a(4)),H=(a(88),a(9)),P=a(10),G=a(21),Y=(a(45),P.a.div(t||(t=Object(H.a)(["\n  background:#CE2829;\n  height:100vh;\n"])))),q=function(){return N.a.createElement(Y,null,N.a.createElement("div",{className:"main"},N.a.createElement("h2",{className:"row1 center"},"Teknolojik Yemekler"),N.a.createElement("h1",{className:"row2 center"},"KOD ACIKTIRIR ",N.a.createElement("br",null),"PIZZA, DOYURUR"),N.a.createElement(G.b,{to:"/pizza"},N.a.createElement("button",{class:"buttonMain center",id:"order-pizza"},"ACIKTIM")),N.a.createElement("div",{className:"img"},N.a.createElement("img",{src:a(89),alt:"Ana Sayfa Pizza",style:{transform:"rotate(180deg)"}}))))},D=a(12),J=a(29),V=a(7),Z=a(6),U=a(20),Q=(a(90),P.a.div(l||(l=Object(H.a)(["\nbackground:#CE2829;\nheight:22vh;\n"])))),W=P.a.div(r||(r=Object(H.a)(["\nwidth: 60vw;  \nmargin: auto;\ndisplay: flex;\nflex-direction: column;\n"]))),X=P.a.div(i||(i=Object(H.a)(["\ntext-align: center;\npadding-top: 1.5rem;\npadding-bottom:1rem;\nfont-family: 'Anton',cursive;\nfont-size: 3rem;\ncolor: white;\n"]))),$=P.a.div(c||(c=Object(H.a)(["\ndisplay: flex;\njustify-content:center; \n"]))),_=function(){return N.a.createElement(Q,null,N.a.createElement(W,null,N.a.createElement(X,null,"Teknolojik Yemekler"),N.a.createElement($,null,N.a.createElement(G.c,{to:"/"},N.a.createElement("button",{className:"a"},"Anasayfa")),N.a.createElement(G.c,null,N.a.createElement("button",{className:"a"},"Se\xe7enekler")),N.a.createElement(G.c,null,N.a.createElement("button",{className:"a"},"Sipari\u015f Olu\u015ftur")))))},ee=(a(47),P.a.div(m||(m=Object(H.a)(["\nfont-weight: bold;\nfont-size:1.2rem;\npadding-top:2rem;\n"])))),ne=function(e){var n=e.dataFunction,a=e.validateForm,t=e.formErrors;return N.a.createElement(N.a.Fragment,null,N.a.createElement(Z.Form,{className:"name-input"},N.a.createElement(Z.FormGroup,null,N.a.createElement(Z.Label,{htmlFor:"Isim Bilgisi"},N.a.createElement(ee,null,"\u0130sim Bilgisi")),N.a.createElement("br",null),N.a.createElement(Z.Input,{id:"sipari\u015f-notu",name:"isim",type:"text",placeholder:"L\xfctfen \u0130sminizi Yaz\u0131n\u0131z.",onChange:function(e){var t=e.target,l=t.value,r=t.name;n(r,l),a(r,l)},invalid:!!t.isim}),t.isim&&N.a.createElement(Z.FormFeedback,null,t.isim," "))))},ae=P.a.div(o||(o=Object(H.a)([" \n  margin: auto;\n  text-align: justify;\n  color:#778899\n  "]))),te=function(){return N.a.createElement(ae,null,"Frontend Dev olarak hala position kullaniyorsan bu \xe7ok ac\u0131 pizza tam sana g\xf6re. Pizza, domates,peynir ve genellikle \xe7e\u015fitli di\u011fer malzemelerle kaplanm\u0131\u015f, daha sonra geleneksel olarak odun ate\u015finde bir f\u0131r\u0131nda y\xfcksek s\u0131cakl\u0131kta pi\u015firilen, genellikle yuvarlak, d\xfczle\u015ftirilmi\u015f mayal\u0131 bu\u011fday bazl\u0131 hamurdan olu\u015fan italyan k\xf6kenli lezzetli bir yemektir.. K\xfc\xe7\xfck bir pizzaya bazen pizzetta denir.")},le=(a(174),P.a.div(u||(u=Object(H.a)(["\nfont-weight: bold;\nfont-size:1.2rem;\npadding-top:2rem;\npadding-bottom:1.5rem;\n"])))),re=P.a.div(d||(d=Object(H.a)(["\ncolor:red;\ndisplay:inline;\n"]))),ie=(P.a.div(s||(s=Object(H.a)(["\ncolor:#dc3545;\nfont-size:0.875em;\n"]))),function(e){var n=e.malzemeFunction,a=e.validateForm,t=e.formErrors,l=Object(M.useState)({name:"",price:0}),r=Object(V.a)(l,2),i=r[0],c=r[1],m=function(e){var n=e.target.checked;c(!0===n?{name:e.target.id,price:parseInt(e.target.value)}:{name:"",price:0})};return Object(M.useEffect)(function(){n("boyut",i),a("boyut",i)},[i]),N.a.createElement(N.a.Fragment,null,N.a.createElement(le,null,"Boyut Se\xe7",N.a.createElement(re,null,"*")),N.a.createElement(Z.Form,{className:"gray"},N.a.createElement(Z.FormGroup,null,N.a.createElement(Z.Input,{id:"kucuk",name:"boyut",type:"radio",value:"40",onChange:m,invalid:!!t.boyut}),N.a.createElement(Z.Label,{htmlFor:"kucuk"},"\xa0\xa0K\xfc\xe7\xfck 40\u20ba")),N.a.createElement(Z.FormGroup,null,N.a.createElement(Z.Input,{id:"orta",name:"boyut",type:"radio",value:"50",onChange:m,invalid:!!t.boyut}),N.a.createElement(Z.Label,{htmlFor:"orta"},"\xa0\xa0Orta 50\u20ba")),N.a.createElement(Z.FormGroup,null,N.a.createElement(Z.Input,{id:"buyuk",name:"boyut",type:"radio",value:"60",onChange:m,invalid:!!t.boyut}),N.a.createElement(Z.Label,{htmlFor:"buyuk"},"\xa0\xa0B\xfcy\xfck 60\u20ba"))))}),ce=P.a.div(E||(E=Object(H.a)(["\nfont-weight: bold;\nfont-size:1.2rem;\npadding-top:2rem;\npadding-bottom:1rem;\n"]))),me=P.a.div(p||(p=Object(H.a)(["\ncolor:red;\ndisplay:inline;\n"]))),oe=(P.a.div(b||(b=Object(H.a)(["\ncolor:#dc3545;\nfont-size:0.875em;\n"]))),function(e){var n=e.malzemeFunction,a=e.validateForm,t=e.formErrors,l=Object(M.useState)({name:"",price:0}),r=Object(V.a)(l,2),i=r[0],c=r[1];return Object(M.useEffect)(function(){n("hamur",i),a("hamur",i)},[i]),N.a.createElement(Z.Form,null,N.a.createElement(Z.FormGroup,null,N.a.createElement(ce,null,"Hamur Se\xe7",N.a.createElement(me,null,"*")),N.a.createElement(Z.Input,{name:"type",type:"select",onChange:function(e){c({name:e.target.options[e.target.selectedIndex].title,price:parseInt(e.target.value)})},invalid:!!t.hamur},N.a.createElement("option",{title:"Hamur Kal\u0131nl\u011f\u0131",value:"0"},"Hamur Kal\u0131nl\u011f\u0131"),N.a.createElement("option",{title:"Kal\u0131n Hamur",value:"20"},"Kal\u0131n Hamur 20\u20ba"),N.a.createElement("option",{title:"Ince Hamur",value:"30"},"Ince Hamur 30\u20ba"))))}),ue=a(11),de=(a(175),P.a.div(f||(f=Object(H.a)(["\nfont-weight: bold;\nfont-size:1.2rem;\npadding-top:2rem;\npadding-bottom:1rem;\n"])))),se=P.a.div(g||(g=Object(H.a)(["\ncolor:#5F5F5F;\nfont-size:1rem;\npadding-bottom:1rem;\n"]))),Ee=P.a.div(v||(v=Object(H.a)(["\ncolor:#dc3545;\nfont-size:0.875em;\n"]))),pe=function(e){var n=e.malzemeFunction,a=e.validateForm,t=e.formErrors,l=Object(M.useState)([{name:"Pepperoni",price:10},{name:"Domates",price:5},{name:"Biber",price:5},{name:"Sosis",price:8},{name:"M\u0131s\u0131r",price:5},{name:"Sucuk",price:12},{name:"Kanada Jambonu",price:15},{name:"Ananas",price:8},{name:"Tavuk Izgara",price:12},{name:"Jalepeno",price:5},{name:"Kabak",price:5},{name:"So\u011fan",price:5},{name:"Sarimsak",price:5}]),r=Object(V.a)(l,1)[0],i=Object(M.useState)([]),c=Object(V.a)(i,2),m=c[0],o=c[1],u=function(e){var t=Object(ue.a)(m),l=e.target,r=l.value,i=l.name;if(e.target.checked)t=[].concat(Object(ue.a)(m),[{name:i,price:parseInt(r)}]);else{var c=-1;m.forEach(function(e,n){e.name===i&&(c=n)}),c>-1&&t.splice(c,1)}o(t),n("ekMalzemeL",t),a("ekMalzemeL",t)};return N.a.createElement(N.a.Fragment,null,N.a.createElement(de,null," Ek Malzemeler"),N.a.createElement(se,null,"En Az 2 ve En Fazla 10 Malzeme Se\xe7ebilirsiniz."),N.a.createElement(Z.Form,null,N.a.createElement(Z.Row,{xs:"3"},r.map(function(e,n){return N.a.createElement(Z.Col,{key:n},N.a.createElement(Z.FormGroup,{className:"boldGray"},N.a.createElement(Z.Input,{id:n,name:e.name,type:"checkbox",value:e.price,checked:m.filter(function(n){return n.name===e.name}).length>0,onChange:u,invalid:!!t.ekMalzemeL}),N.a.createElement(Z.Label,{htmlFor:e.name},"\xa0\xa0","".concat(e.name," ").concat(e.price,"\u20ba"))))})),t.ekMalzemeL&&N.a.createElement(Ee,null,t.ekMalzemeL," ")))},be=P.a.div(z||(z=Object(H.a)(["\nfont-weight: bold;\nfont-size:1.2rem;\npadding-top:2rem;\n"]))),fe=function(e){var n=e.dataFunction;return N.a.createElement(N.a.Fragment,null,N.a.createElement(Z.Form,{className:"name-input"},N.a.createElement(Z.FormGroup,null,N.a.createElement(Z.Label,{htmlFor:"Isim Bilgisi"},N.a.createElement(be,null,"Not Bilgisi")),N.a.createElement("br",null),N.a.createElement(Z.Input,{id:"sipari\u015f-notu",name:"not",type:"text",placeholder:"L\xfctfen \u0130sminizi Yaz\u0131n\u0131z.",onChange:function(e){var a=e.target,t=a.value,l=a.name;n(l,t)}}))))},ge=(a(176),P.a.div(j||(j=Object(H.a)([" \n  margin-top: 2rem;\n  display:flex;\n  justify-content:center;\n  "])))),ve=P.a.div(O||(O=Object(H.a)(["\ndisplay:inline-block;\nfont-size:1.2rem;\npadding-left:1rem;\npadding-right:1rem;\npadding-top:0.45rem;\npadding-bottom:0.45rem;\nborder:1px solid #F1F1F1;\n"]))),ze=function(e){var n=e.malzemeFunction,a=Object(M.useState)(1),t=Object(V.a)(a,2),l=t[0],r=t[1];return Object(M.useEffect)(function(){n("pizzaAdet",l)},[l]),N.a.createElement(ge,null,N.a.createElement("button",{className:"adetButton",onClick:function(){r(l-1)},disabled:1===l},"-"),N.a.createElement(ve,null,l),N.a.createElement("button",{className:"adetButton",onClick:function(){r(l+1)}},"+"))},je=a(78),Oe=a.n(je),ke=(a(194),P.a.div(k||(k=Object(H.a)([" \n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  border:1px solid #FAF7F2;\n  "])))),he=P.a.div(h||(h=Object(H.a)([" \n  padding:1rem 1rem 0.5rem 3rem;\n  "]))),ye=P.a.div(y||(y=Object(H.a)(["\n  font-weight: bold;\n  font-size:1.4rem;\n  padding-bottom:1rem;\n  "]))),Fe=P.a.div(F||(F=Object(H.a)(["\n  color:#5F5F5F;\n  font-size:1rem;\n  padding-bottom:1rem;\n\n  "]))),we=function(e){var n=e.data,a=e.isFormValid,t=Object(T.n)(),l=Object(M.useState)(),r=Object(V.a)(l,2),i=r[0],c=r[1],m=Object(M.useState)(),o=Object(V.a)(m,2),u=o[0],d=o[1],s=Object(M.useState)(0),E=Object(V.a)(s,2),p=E[0],b=E[1];return Object(M.useEffect)(function(){d(n.ekMalzemeL.reduce(function(e,n){return e+n.price},0)),c(n.boyut.price+n.hamur.price)},[n.boyut.price,n.hamur.price,n.ekMalzemeL]),Object(M.useEffect)(function(){b((i+u)*n.pizzaAdet)},[u,i,n.pizzaAdet]),N.a.createElement(ke,null,N.a.createElement(he,null,N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,null,N.a.createElement(ye,null,"Sipari\u015f Toplam"))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,{s:"9"},N.a.createElement(Fe,null,"Boyut + Hamur")),N.a.createElement(Z.Col,{xs:"3"},N.a.createElement(Fe,null,i,"\u20ba"))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,{s:"9"},N.a.createElement(Fe,null,"Ek Malzeme")),N.a.createElement(Z.Col,{xs:"3"},N.a.createElement(Fe,null,u,"\u20ba"))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,{xs:"9"},N.a.createElement(Fe,null,"Toplam")),N.a.createElement(Z.Col,{xs:"3"},N.a.createElement(Fe,null,p,"\u20ba")))),N.a.createElement(Z.Form,{onSubmit:function(e){e.preventDefault(),Oe.a.post("https://reqres.in/api/userss",n).then(function(e){console.log("Yeni product kay\u0131t res > ",e.data),t("/success")})}},N.a.createElement("button",{type:"submit",disabled:!a},"S\u0130PAR\u0130\u015e VER")))},xe=P.a.div(w||(w=Object(H.a)([" \nmargin: auto;\ndisplay: flex;\nflex-direction: column;\n"]))),Ce=P.a.div(x||(x=Object(H.a)([" \nmargin: auto;\nwidth: 60vw; \ndisplay: flex;\nflex-direction: column;\n"]))),Se=P.a.div(C||(C=Object(H.a)(["\nfont-weight: bold;\nfont-size:1.8rem;\npadding-top:1.5rem;\npadding-bottom:2rem;\n"]))),Ie=P.a.div(S||(S=Object(H.a)(["\nfont-weight: bold;\nfont-size:1.5rem;\npadding-bottom:1.5rem;\n"]))),Le=P.a.div(I||(I=Object(H.a)(["\nfont-size:0.8rem;\ncolor:#5F5F5F;\ndisplay:flex;\n"]))),Re=function(){var e=Object(M.useState)({isim:"",boyut:{name:"",price:0},hamur:"",ekMalzemeL:[{name:"",price:0}],not:"",pizzaAdet:1}),n=Object(V.a)(e,2),a=n[0],t=n[1],l=U.c().shape({isim:U.e().required("\u0130sim gerekli").min(3,"Minimum 3 karakter girmelisiniz."),ekMalzemeL:U.a().min(2,"En az iki malzeme se\xe7iniz").max(10,"En fazla 10 malzeme se\xe7iniz"),hamur:U.c().shape({name:U.e().required(),price:U.b().required().min(1,"L\xfctfen Hamur Tipi Se\xe7ininiz.")}),boyut:U.c().shape({name:U.e().required(),price:U.b().required().min(1,"L\xfctfen Boyut Tipi Se\xe7ininiz.")})}),r=Object(M.useState)({isim:"",ekMalzemeL:[],hamur:{name:"",price:0},boyut:{name:"",price:0}}),i=Object(V.a)(r,2),c=i[0],m=i[1],o=Object(M.useState)(!1),u=Object(V.a)(o,2),d=u[0],s=u[1];Object(M.useEffect)(function(){l.isValid(a).then(function(e){e?console.log("form datasi valid"):console.warn("form datasi valid degil"),s(e)})},[a]),Object(M.useEffect)(function(){console.log("formErrors> ",c)},[c]);Object(M.useEffect)(function(){console.log("data>",a)},[a]);var E={dataFunction:function(e,n){var l=Object(J.a)({},a);l[e]=n,t(l)},malzemeFunction:function(e,n){var l=Object(J.a)({},a);l[e]=n,t(l)},data:a,validateForm:function(e,n){U.d(l,e).validate(n).then(function(n){m(Object(J.a)({},c,Object(D.a)({},e,"")))}).catch(function(n){m(Object(J.a)({},c,Object(D.a)({},e,n.errors[0])))})},formErrors:c,isFormValid:d};return N.a.createElement(xe,{id:"pizza-form"},N.a.createElement(_,null),N.a.createElement(Ce,null,N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,null,N.a.createElement(Se,null,"Position Absolute Ac\u0131 Pizza"))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,{xs:"8"},N.a.createElement(Ie,{xs:""},"Min. 60\u20ba")),N.a.createElement(Z.Col,{xs:"2"},N.a.createElement(Le,null,"4.9")),N.a.createElement(Z.Col,{xs:"2"},N.a.createElement(Le,null,"(200)"))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,null,N.a.createElement(te,null))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,null,N.a.createElement(ne,E))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,null,N.a.createElement(ie,E)),N.a.createElement(Z.Col,null,N.a.createElement(oe,E))),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,null,N.a.createElement(pe,E))),N.a.createElement("br",null),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,null,N.a.createElement(fe,E))),N.a.createElement("hr",null),N.a.createElement(Z.Row,null,N.a.createElement(Z.Col,{xs:"4"},N.a.createElement(ze,E)),N.a.createElement(Z.Col,{xs:"8"},N.a.createElement(we,E)))))},Ae=function(){var e=P.a.div(L||(L=Object(H.a)(["\n  background:#CE2829;\n  height:100vh;\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n"]))),n=P.a.div(R||(R=Object(H.a)(["\n  color:white;  \n  text-align: center;\n  align-items: center;\n  padding-top: 5rem;\n  font-family: 'Anton',cursive;\n  font-size: 1.5rem;\n"]))),a=P.a.div(A||(A=Object(H.a)(["\n  padding-top: 12rem;\n  color:white;    \n  text-align: center;\n  display: flex;\n  align-items: center;\n  font-family: 'Plus Jakarta Sans',cursive;\n  font-size: 3rem;\n"])));return N.a.createElement(e,null,N.a.createElement(n,null,"Teknolojik Yemekler"),N.a.createElement(a,null,"TEBR\u0130KLER ",N.a.createElement("br",null),"S\u0130PAR\u0130\u015e\u0130N\u0130Z ALINDI!"))},Me=function(){return N.a.createElement(N.a.Fragment,null,N.a.createElement(T.c,null,N.a.createElement(T.a,{path:"/success",element:N.a.createElement(Ae,null)}),N.a.createElement(T.a,{path:"/pizza",element:N.a.createElement(Re,null)}),N.a.createElement(T.a,{exact:!0,path:"/",element:N.a.createElement(q,null)})))};a(195);K.a.render(N.a.createElement(G.a,null,N.a.createElement(Me,null)),document.getElementById("root"))},45:function(e,n,a){},47:function(e,n,a){},82:function(e,n,a){e.exports=a(196)},87:function(e,n,a){},88:function(e,n,a){},89:function(e,n,a){e.exports=a.p+"static/media/adv-form-banner.77ad37c3.png"},90:function(e,n,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.4476df99.chunk.js.map