import{_ as d,a as h,b as l,f,g as k,h as y,i as L,c as w,d as R,e as U}from"./sfml-logo-9d8d3c1e.js";import{_ as b,a as v}from"./arrowleft-1bbbf34d.js";import{d as C,r as q,o as t,c as s,e as a,u as n,b as o,F as B}from"./index-b64f389f.js";const j=""+new URL("niveauCB-adfe7291.png",import.meta.url).href,E=""+new URL("jeuCB-a467c83f.png",import.meta.url).href,A=""+new URL("connexionCB-09401bfa.png",import.meta.url).href,F=""+new URL("classementCB-72c9dd2d.png",import.meta.url).href,I=""+new URL("AventurierRail-8e53bf7f.png",import.meta.url).href,N=""+new URL("creationCompteEcommerce-3eda6a51.png",import.meta.url).href,S=""+new URL("connexionEcommerce-745217e3.png",import.meta.url).href,D=""+new URL("objetEcommerce-4412df08.png",import.meta.url).href,V=""+new URL("panierEcommerce-439a840b.png",import.meta.url).href,M=""+new URL("historiqueCommandeEcommerce-686fc2ab.png",import.meta.url).href,$=""+new URL("catégories-4836d476.png",import.meta.url).href,K=""+new URL("filtres-7b5cf744.png",import.meta.url).href,O=""+new URL("visualisation-4d2dbe11.png",import.meta.url).href,P=""+new URL("login-e1fa22d9.png",import.meta.url).href,z=""+new URL("csv-c49f6c2a.png",import.meta.url).href,G=""+new URL("editBDD-ac39fa8f.png",import.meta.url).href,H=""+new URL("ajout-bd2ab0af.png",import.meta.url).href,J=""+new URL("miseajour-d1be49ac.png",import.meta.url).href,Q=""+new URL("capture1-59133c95.png",import.meta.url).href,T=""+new URL("capture2-df83ea2d.png",import.meta.url).href,W=""+new URL("capture3-8000a3b4.png",import.meta.url).href,X=""+new URL("capture4-d79e60bb.png",import.meta.url).href,Y=""+new URL("capture5-04fbbb9f.png",import.meta.url).href,Z=""+new URL("keyguardLogin-8e6db9d2.png",import.meta.url).href,x=""+new URL("keyguard-bf6ba181.png",import.meta.url).href,ee=""+new URL("keyguardError-a507f0ae.png",import.meta.url).href,re=""+new URL("keyguardCrypto-564ea847.png",import.meta.url).href,te=""+new URL("keyguardAndroid-1e902e65.png",import.meta.url).href,se=""+new URL("keyguardAndroidView-5009830a.png",import.meta.url).href,oe=""+new URL("keyguardAndroidAdd-abbf42bb.png",import.meta.url).href,ne=""+new URL("KeyguardAndroidDecrypt-e1ae446a.png",import.meta.url).href,me=""+new URL("menu2-754e107d.png",import.meta.url).href,ie=""+new URL("menu3-f4e2bcc5.png",import.meta.url).href,ae=""+new URL("parametre-6dfc8c50.png",import.meta.url).href,ce=""+new URL("score-fc29958e.png",import.meta.url).href,_e=""+new URL("score2-32f533db.png",import.meta.url).href,pe=""+new URL("jeu-6bd3a7f2.png",import.meta.url).href,ue=""+new URL("book-7ba06f71.png",import.meta.url).href,ge=""+new URL("cg-games2-d678a1ed.png",import.meta.url).href,de=""+new URL("comptes-18cf7a04.png",import.meta.url).href,he=""+new URL("creation-52358c3e.png",import.meta.url).href,le={id:"projet"},fe={key:0,src:d},ke={key:1,src:j},ye={key:2,src:E},Le={key:3,src:A},we={key:4,src:F},Re={key:5,src:h},Ue={key:6,src:I},be={key:7,src:l},ve={key:8,src:N},Ce={key:9,src:S},qe={key:10,src:D},Be={key:11,src:V},je={key:12,src:M},Ee={key:13,src:f},Ae={key:14,src:$},Fe={key:15,src:K},Ie={key:16,src:O},Ne={key:17,src:P},Se={key:18,src:z},De={key:19,src:G},Ve={key:20,src:H},Me={key:21,src:J},$e={key:22,src:k},Ke={key:23,src:Q},Oe={key:24,src:T},Pe={key:25,src:W},ze={key:26,src:X},Ge={key:27,src:Y},He={key:28,src:y},Je={key:29,src:Z},Qe={key:30,src:x},Te={key:31,src:ee},We={key:32,src:re},Xe={key:33,src:te},Ye={key:34,src:se},Ze={key:35,src:oe},xe={key:36,src:ne},er={key:37,src:L},rr={key:38,src:w},tr={key:39,src:me},sr={key:40,src:ie},or={key:41,src:ae},nr={key:42,src:ce},mr={key:43,src:_e},ir={key:44,src:pe},ar={key:45,src:R},cr={key:46,src:ue},_r={key:47,src:U},pr={key:48,src:ge},ur={key:49,src:de},gr={key:50,src:he},dr={key:0},hr=["href"],yr=C({__name:"ImageSwitch",props:{name:{},link:{}},setup(_){const i=_;let e=q(0),m=0;i.name==="casse-brique"?m=5:i.name==="aventurier"?m=2:i.name==="ecommerce"?m=6:i.name==="datadiag"?m=9:i.name==="visualisation"?m=6:i.name==="keyguard"?m=9:i.name==="SFML"?m=1:i.name==="pong"?m=7:i.name==="mediatheque"?m=2:i.name==="cg-games"&&(m=4);const p=()=>{e.value<m-1?e.value++:e.value=0},u=()=>{e.value>0?e.value--:e.value=m-1};return(r,c)=>(t(),s(B,null,[a("div",le,[r.name==="casse-brique"&&n(e)===0?(t(),s("img",fe)):o("",!0),r.name==="casse-brique"&&n(e)===1?(t(),s("img",ke)):o("",!0),r.name==="casse-brique"&&n(e)===2?(t(),s("img",ye)):o("",!0),r.name==="casse-brique"&&n(e)===3?(t(),s("img",Le)):o("",!0),r.name==="casse-brique"&&n(e)===4?(t(),s("img",we)):o("",!0),r.name==="aventurier"&&n(e)===0?(t(),s("img",Re)):o("",!0),r.name==="aventurier"&&n(e)===1?(t(),s("img",Ue)):o("",!0),r.name==="ecommerce"&&n(e)===0?(t(),s("img",be)):o("",!0),r.name==="ecommerce"&&n(e)===1?(t(),s("img",ve)):o("",!0),r.name==="ecommerce"&&n(e)===2?(t(),s("img",Ce)):o("",!0),r.name==="ecommerce"&&n(e)===3?(t(),s("img",qe)):o("",!0),r.name==="ecommerce"&&n(e)===4?(t(),s("img",Be)):o("",!0),r.name==="ecommerce"&&n(e)===5?(t(),s("img",je)):o("",!0),r.name==="datadiag"&&n(e)===0?(t(),s("img",Ee)):o("",!0),r.name==="datadiag"&&n(e)===1?(t(),s("img",Ae)):o("",!0),r.name==="datadiag"&&n(e)===2?(t(),s("img",Fe)):o("",!0),r.name==="datadiag"&&n(e)===3?(t(),s("img",Ie)):o("",!0),r.name==="datadiag"&&n(e)===4?(t(),s("img",Ne)):o("",!0),r.name==="datadiag"&&n(e)===5?(t(),s("img",Se)):o("",!0),r.name==="datadiag"&&n(e)===6?(t(),s("img",De)):o("",!0),r.name==="datadiag"&&n(e)===7?(t(),s("img",Ve)):o("",!0),r.name==="datadiag"&&n(e)===8?(t(),s("img",Me)):o("",!0),r.name==="visualisation"&&n(e)===0?(t(),s("img",$e)):o("",!0),r.name==="visualisation"&&n(e)===1?(t(),s("img",Ke)):o("",!0),r.name==="visualisation"&&n(e)===2?(t(),s("img",Oe)):o("",!0),r.name==="visualisation"&&n(e)===3?(t(),s("img",Pe)):o("",!0),r.name==="visualisation"&&n(e)===4?(t(),s("img",ze)):o("",!0),r.name==="visualisation"&&n(e)===5?(t(),s("img",Ge)):o("",!0),r.name==="keyguard"&&n(e)===0?(t(),s("img",He)):o("",!0),r.name==="keyguard"&&n(e)===1?(t(),s("img",Je)):o("",!0),r.name==="keyguard"&&n(e)===2?(t(),s("img",Qe)):o("",!0),r.name==="keyguard"&&n(e)===3?(t(),s("img",Te)):o("",!0),r.name==="keyguard"&&n(e)===4?(t(),s("img",We)):o("",!0),r.name==="keyguard"&&n(e)===5?(t(),s("img",Xe)):o("",!0),r.name==="keyguard"&&n(e)===6?(t(),s("img",Ye)):o("",!0),r.name==="keyguard"&&n(e)===7?(t(),s("img",Ze)):o("",!0),r.name==="keyguard"&&n(e)===8?(t(),s("img",xe)):o("",!0),r.name==="SFML"&&n(e)===0?(t(),s("img",er)):o("",!0),r.name==="pong"&&n(e)===0?(t(),s("img",rr)):o("",!0),r.name==="pong"&&n(e)===1?(t(),s("img",tr)):o("",!0),r.name==="pong"&&n(e)===2?(t(),s("img",sr)):o("",!0),r.name==="pong"&&n(e)===3?(t(),s("img",or)):o("",!0),r.name==="pong"&&n(e)===4?(t(),s("img",nr)):o("",!0),r.name==="pong"&&n(e)===5?(t(),s("img",mr)):o("",!0),r.name==="pong"&&n(e)===6?(t(),s("img",ir)):o("",!0),r.name==="mediatheque"&&n(e)===0?(t(),s("img",ar)):o("",!0),r.name==="mediatheque"&&n(e)===1?(t(),s("img",cr)):o("",!0),r.name==="cg-games"&&n(e)===0?(t(),s("img",_r)):o("",!0),r.name==="cg-games"&&n(e)===1?(t(),s("img",pr)):o("",!0),r.name==="cg-games"&&n(e)===2?(t(),s("img",ur)):o("",!0),r.name==="cg-games"&&n(e)===3?(t(),s("img",gr)):o("",!0)]),a("div",null,[a("img",{src:b,id:"btPrev",onClick:c[0]||(c[0]=g=>p())}),a("img",{src:v,id:"btNext",onClick:c[1]||(c[1]=g=>u())})]),r.link!==""&&r.link!==null&&r.link!==void 0?(t(),s("div",dr,[a("p",null,[a("a",{target:"_blank",href:r.link},"Lien du projet",8,hr)])])):o("",!0)],64))}});export{yr as _};
