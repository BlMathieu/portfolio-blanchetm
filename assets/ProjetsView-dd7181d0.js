import{_ as c,a as d,b as m,c as p,d as v,e as h,f}from"./sfml-logo-10c3558b.js";import{d as g,r as C,b as k,o as n,c as i,f as e,u as a,g as o,w as l,e as r}from"./index-2771efe0.js";const w=""+new URL("arrowleftslide-32f7b02b.svg",import.meta.url).href,j=""+new URL("arrowrightslide-437207c0.svg",import.meta.url).href,y={class:"flexRow"},B={key:0,class:"projets"},L=e("h2",null,"Projets scolaires :",-1),x=e("img",{src:c,alt:"imageCB"},null,-1),P=e("p",null,"Casse-Brique",-1),R=e("img",{src:d,alt:"aventurier"},null,-1),V=e("p",null,"Aventurier du rail",-1),D=e("img",{src:m},null,-1),b=e("p",null,"E-Commerce",-1),E={key:1,class:"projets"},S=e("h2",null,"Projets Alternance/Stage",-1),A=e("img",{src:p,alt:"stage"},null,-1),F=e("p",null,"DataDiag",-1),G=e("img",{src:v,alt:"alternance"},null,-1),K=e("p",null,"Outil de visualisation (En cours)",-1),M={key:2,class:"projets"},N=e("h2",null,"Projets Personnel",-1),q=e("img",{src:h,alt:"KeyGuard"},null,-1),U=e("p",null,"KeyGuard",-1),O=e("img",{src:f,alt:"SFML"},null,-1),$=e("p",null,"SFML",-1),T=g({__name:"ProjetsView",setup(z){let t=C(0);const _=()=>{t.value<2?t.value++:t.value=0},u=()=>{t.value>0?t.value--:t.value=2};return(H,I)=>{const s=k("RouterLink");return n(),i("section",null,[e("div",y,[e("div",{class:"sliderBt"},[e("img",{onClick:u,id:"previous",src:w})]),a(t)===0?(n(),i("div",B,[L,e("div",null,[e("div",null,[o(s,{to:{name:"CasseBrique"}},{default:l(()=>[x]),_:1}),P]),e("div",null,[o(s,{to:{name:"AventurierDuRail"}},{default:l(()=>[R]),_:1}),V]),e("div",null,[o(s,{to:{name:"Ecommerce"}},{default:l(()=>[D]),_:1}),b])])])):r("",!0),a(t)===1?(n(),i("div",E,[S,e("div",null,[e("div",null,[o(s,{to:{name:"DataDiag"}},{default:l(()=>[A]),_:1}),F]),e("div",null,[o(s,{to:{name:"Visualisation"}},{default:l(()=>[G]),_:1}),K])])])):r("",!0),a(t)===2?(n(),i("div",M,[N,e("div",null,[e("div",null,[o(s,{to:{name:"KeyGuard"}},{default:l(()=>[q]),_:1}),U]),e("div",null,[o(s,{to:{name:"SFML"}},{default:l(()=>[O]),_:1}),$])])])):r("",!0),e("div",{class:"sliderBt"},[e("img",{onClick:_,id:"next",src:j})])])])}}});export{T as default};