(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="157",uh=0,nl=1,fh=2,vu=1,hh=2,En=3,jn=0,Ut=1,yn=2,kn=0,ki=1,il=2,rl=3,sl=4,dh=5,zi=100,ph=101,mh=102,ol=103,al=104,gh=200,_h=201,vh=202,xh=203,xu=204,Au=205,Ah=206,Mh=207,Eh=208,Sh=209,yh=210,Th=0,bh=1,Rh=2,jo=3,wh=4,Ch=5,Ph=6,Lh=7,Mu=0,Dh=1,Uh=2,Wn=0,Ih=1,Nh=2,Oh=3,Fh=4,Bh=5,Eu=300,ji=301,Ki=302,Ko=303,$o=304,zs=306,Zo=1e3,Kt=1001,Qo=1002,wt=1003,ll=1004,lo=1005,Vt=1006,zh=1007,wr=1008,Xn=1009,Hh=1010,Gh=1011,Ma=1012,Su=1013,Hn=1014,Gn=1015,Cr=1016,yu=1017,Tu=1018,fi=1020,Vh=1021,$t=1023,kh=1024,Wh=1025,hi=1026,$i=1027,Xh=1028,bu=1029,qh=1030,Ru=1031,wu=1033,co=33776,uo=33777,fo=33778,ho=33779,cl=35840,ul=35841,fl=35842,hl=35843,Yh=36196,dl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,Al=37813,Ml=37814,El=37815,Sl=37816,yl=37817,Tl=37818,bl=37819,Rl=37820,wl=37821,po=36492,Cl=36494,Pl=36495,jh=36283,Ll=36284,Dl=36285,Ul=36286,Cu=3e3,di=3001,Kh=3200,$h=3201,Zh=0,Qh=1,Wt="",pt="srgb",wn="srgb-linear",Ea="display-p3",Hs="display-p3-linear",ws="linear",tt="srgb",Cs="rec709",Ps="p3",mo=7680,Jh=519,ed=512,td=513,nd=514,id=515,rd=516,sd=517,od=518,ad=519,Il=35044,Nl="300 es",Jo=1035,Tn=2e3,Ls=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=Math.PI/180,ea=180/Math.PI;function Br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function ld(n,e){return(n%e+e)%e}function _o(n,e,t){return(1-t)*n+t*e}function Ol(n){return(n&n-1)===0&&n!==0}function ta(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],d=r[6],y=r[1],A=r[4],T=r[7],C=r[2],D=r[5],L=r[8];return s[0]=a*x+o*y+l*C,s[3]=a*m+o*A+l*D,s[6]=a*d+o*T+l*L,s[1]=c*x+u*y+f*C,s[4]=c*m+u*A+f*D,s[7]=c*d+u*T+f*L,s[2]=h*x+p*y+v*C,s[5]=h*m+p*A+v*D,s[8]=h*d+p*T+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new We;function Pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cd(){const n=Pr("canvas");return n.style.display="block",n}const Fl={};function Er(n){n in Fl||(Fl[n]=!0,console.warn(n))}const Bl=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zl=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[wn]:{transfer:ws,primaries:Cs,toReference:n=>n,fromReference:n=>n},[pt]:{transfer:tt,primaries:Cs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hs]:{transfer:ws,primaries:Ps,toReference:n=>n.applyMatrix3(zl),fromReference:n=>n.applyMatrix3(Bl)},[Ea]:{transfer:tt,primaries:Ps,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zl),fromReference:n=>n.applyMatrix3(Bl).convertLinearToSRGB()}},ud=new Set([wn,Hs]),Ze={enabled:!0,_workingColorSpace:wn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ud.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xr[e].toReference,r=Xr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xr[n].primaries},getTransfer:function(n){return n===Wt?ws:Xr[n].transfer}};function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ei;class Lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Pr("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fd=0;class Du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Br(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ao(r[a].image)):s.push(Ao(r[a]))}else s=Ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;class It extends rr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Kt,r=Kt,s=Vt,a=wr,o=$t,l=Xn,c=It.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Br(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?pt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?di:Cu}set encoding(e){Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===di?pt:Wt}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Eu;It.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,T=(p+1)/2,C=(d+1)/2,D=(u+h)/4,L=(f+x)/4,j=(v+m)/4;return A>T&&A>C?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=D/i,s=L/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=D/r,s=j/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=j/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===di?pt:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends dd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uu extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pd extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==v){let m=1-o;const d=l*h+c*p+u*v+f*x,y=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const C=Math.sqrt(A),D=Math.atan2(C,d*y);m=Math.sin(m*D)/C,o=Math.sin(o*D)/C}const T=o*y;if(l=l*m+h*T,c=c*m+p*T,u=u*m+v*T,f=f*m+x*T,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new G,Hl=new zr;class Hr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Si.copy(e.boundingBox),Si.applyMatrix4(e.matrixWorld),this.union(Si);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)gn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(gn)}else r.boundingBox===null&&r.computeBoundingBox(),Si.copy(r.boundingBox),Si.applyMatrix4(e.matrixWorld),this.union(Si)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),qr.subVectors(this.max,fr),yi.subVectors(e.a,fr),Ti.subVectors(e.b,fr),bi.subVectors(e.c,fr),Ln.subVectors(Ti,yi),Dn.subVectors(bi,Ti),Qn.subVectors(yi,bi);let t=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Qn.z,Qn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Qn.z,0,-Qn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Qn.y,Qn.x,0];return!Eo(t,yi,Ti,bi,qr)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,yi,Ti,bi,qr))?!1:(Yr.crossVectors(Ln,Dn),t=[Yr.x,Yr.y,Yr.z],Eo(t,yi,Ti,bi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new G,new G,new G,new G,new G,new G,new G,new G],gn=new G,Si=new Hr,yi=new G,Ti=new G,bi=new G,Ln=new G,Dn=new G,Qn=new G,fr=new G,qr=new G,Yr=new G,Jn=new G;function Eo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Jn.fromArray(n,s);const o=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const md=new Hr,hr=new G,So=new G;class Gs{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):md.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(So)),this.expandByPoint(hr.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new G,yo=new G,jr=new G,Un=new G,To=new G,Kr=new G,bo=new G;class Iu{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yo.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(yo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=Un.dot(this.direction),l=-Un.dot(jr),c=Un.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yo).addScaledVector(jr,h),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,s){To.subVectors(t,e),Kr.subVectors(i,e),bo.crossVectors(To,Kr);let a=this.direction.dot(bo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(Kr.crossVectors(Un,Kr));if(l<0)return null;const c=o*this.direction.dot(To.cross(Un));if(c<0||l+c>a)return null;const u=-o*Un.dot(bo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,v,x,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,x,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h+x*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,x=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=x-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,_d)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),In.crossVectors(i,Bt),In.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),In.crossVectors(i,Bt)),In.normalize(),$r.crossVectors(Bt,In),r[0]=In.x,r[4]=$r.x,r[8]=Bt.x,r[1]=In.y,r[5]=$r.y,r[9]=Bt.y,r[2]=In.z,r[6]=$r.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],d=i[14],y=i[3],A=i[7],T=i[11],C=i[15],D=r[0],L=r[4],j=r[8],E=r[12],R=r[1],Z=r[5],fe=r[9],ue=r[13],I=r[2],k=r[6],ee=r[10],V=r[14],te=r[3],J=r[7],le=r[11],N=r[15];return s[0]=a*D+o*R+l*I+c*te,s[4]=a*L+o*Z+l*k+c*J,s[8]=a*j+o*fe+l*ee+c*le,s[12]=a*E+o*ue+l*V+c*N,s[1]=u*D+f*R+h*I+p*te,s[5]=u*L+f*Z+h*k+p*J,s[9]=u*j+f*fe+h*ee+p*le,s[13]=u*E+f*ue+h*V+p*N,s[2]=v*D+x*R+m*I+d*te,s[6]=v*L+x*Z+m*k+d*J,s[10]=v*j+x*fe+m*ee+d*le,s[14]=v*E+x*ue+m*V+d*N,s[3]=y*D+A*R+T*I+C*te,s[7]=y*L+A*Z+T*k+C*J,s[11]=y*j+A*fe+T*ee+C*le,s[15]=y*E+A*ue+T*V+C*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+x*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],d=e[15],y=f*m*c-x*h*c+x*l*p-o*m*p-f*l*d+o*h*d,A=v*h*c-u*m*c-v*l*p+a*m*p+u*l*d-a*h*d,T=u*x*c-v*f*c+v*o*p-a*x*p-u*o*d+a*f*d,C=v*f*l-u*x*l-v*o*h+a*x*h+u*o*m-a*f*m,D=t*y+i*A+r*T+s*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=y*L,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*L,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*d+i*l*d)*L,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*L,e[4]=A*L,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*L,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*d-t*l*d)*L,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*L,e[8]=T*L,e[9]=(v*f*s-u*x*s-v*i*p+t*x*p+u*i*d-t*f*d)*L,e[10]=(a*x*s-v*o*s+v*i*c-t*x*c-a*i*d+t*o*d)*L,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*L,e[12]=C*L,e[13]=(u*x*r-v*f*r+v*i*h-t*x*h-u*i*m+t*f*m)*L,e[14]=(v*o*r-a*x*r-v*i*l+t*x*l+a*i*m-t*o*m)*L,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,v=s*f,x=a*u,m=a*f,d=o*f,y=l*c,A=l*u,T=l*f,C=i.x,D=i.y,L=i.z;return r[0]=(1-(x+d))*C,r[1]=(p+T)*C,r[2]=(v-A)*C,r[3]=0,r[4]=(p-T)*D,r[5]=(1-(h+d))*D,r[6]=(m+y)*D,r[7]=0,r[8]=(v+A)*L,r[9]=(m-y)*L,r[10]=(1-(h+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const a=Ri.set(r[4],r[5],r[6]).length(),o=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,u=1/a,f=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Tn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(o===Tn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ls)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Tn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,p=(i+r)*u;let v,x;if(o===Tn)v=(a+s)*f,x=-2*f;else if(o===Ls)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ri=new G,Xt=new dt,gd=new G(0,0,0),_d=new G(1,1,1),In=new G,$r=new G,Bt=new G,Gl=new dt,Vl=new zr;class Vs{constructor(e=0,t=0,i=0,r=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class Nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vd=0;const kl=new G,wi=new zr,vn=new dt,Zr=new G,dr=new G,xd=new G,Ad=new zr,Wl=new G(1,0,0),Xl=new G(0,1,0),ql=new G(0,0,1),Md={type:"added"},Ed={type:"removed"};class Nt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new G,t=new Vs,i=new zr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(dr,Zr,this.up):vn.lookAt(Zr,dr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(vn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Md)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new G(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new G,xn=new G,Ro=new G,An=new G,Ci=new G,Pi=new G,Yl=new G,wo=new G,Co=new G,Po=new G;let Qr=!1;class jt{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),xn.subVectors(i,t),Ro.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(xn),l=qt.dot(Ro),c=xn.dot(xn),u=xn.dot(Ro),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,i,r,s,a,o,l){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,An),l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),xn.subVectors(e,t),qt.cross(xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),qt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ci.subVectors(r,i),Pi.subVectors(s,i),wo.subVectors(e,i);const l=Ci.dot(wo),c=Pi.dot(wo);if(l<=0&&c<=0)return t.copy(i);Co.subVectors(e,r);const u=Ci.dot(Co),f=Pi.dot(Co);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ci,a);Po.subVectors(e,s);const p=Ci.dot(Po),v=Pi.dot(Po);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Pi,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Yl.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Yl,o);const d=1/(m+x+h);return a=x*d,o=h*d,t.copy(i).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sd=0;class Gr extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=ki,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=Au,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Lo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=ld(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Lo(a,s,e+1/3),this.g=Lo(a,s,e),this.b=Lo(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const i=Ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Ze.fromWorkingColorSpace(At.copy(this),e),Math.round(Dt(At.r*255,0,255))*65536+Math.round(Dt(At.g*255,0,255))*256+Math.round(Dt(At.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=pt){Ze.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Jr);const i=_o(Nn.h,Jr.h,t),r=_o(Nn.s,Jr.s,t),s=_o(Nn.l,Jr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Je;Je.NAMES=Ou;class Fu extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new G,es=new Qe;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Il,this.updateRange={offset:0,count:-1},this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Bu extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zu extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yd=0;const Gt=new dt,Do=new Nt,Li=new G,zt=new Hr,pr=new Hr,ht=new G;class Cn extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?zu:Bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(zt.min,pr.min),zt.expandByPoint(ht),ht.addVectors(zt.max,pr.max),zt.expandByPoint(ht)):(zt.expandByPoint(pr.min),zt.expandByPoint(pr.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ht.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),ht.add(Li)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new G,u[R]=new G;const f=new G,h=new G,p=new G,v=new Qe,x=new Qe,m=new Qe,d=new G,y=new G;function A(R,Z,fe){f.fromArray(r,R*3),h.fromArray(r,Z*3),p.fromArray(r,fe*3),v.fromArray(a,R*2),x.fromArray(a,Z*2),m.fromArray(a,fe*2),h.sub(f),p.sub(f),x.sub(v),m.sub(v);const ue=1/(x.x*m.y-m.x*x.y);isFinite(ue)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ue),y.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(ue),c[R].add(d),c[Z].add(d),c[fe].add(d),u[R].add(y),u[Z].add(y),u[fe].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let R=0,Z=T.length;R<Z;++R){const fe=T[R],ue=fe.start,I=fe.count;for(let k=ue,ee=ue+I;k<ee;k+=3)A(i[k+0],i[k+1],i[k+2])}const C=new G,D=new G,L=new G,j=new G;function E(R){L.fromArray(s,R*3),j.copy(L);const Z=c[R];C.copy(Z),C.sub(L.multiplyScalar(L.dot(Z))).normalize(),D.crossVectors(j,Z);const ue=D.dot(u[R])<0?-1:1;l[R*4]=C.x,l[R*4+1]=C.y,l[R*4+2]=C.z,l[R*4+3]=ue}for(let R=0,Z=T.length;R<Z;++R){const fe=T[R],ue=fe.start,I=fe.count;for(let k=ue,ee=ue+I;k<ee;k+=3)E(i[k+0]),E(i[k+1]),E(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new dt,ei=new Iu,ts=new Gs,Kl=new G,Di=new G,Ui=new G,Ii=new G,Uo=new G,ns=new G,is=new Qe,rs=new Qe,ss=new Qe,$l=new G,Zl=new G,Ql=new G,os=new G,as=new G;class Vn extends Nt{constructor(e=new Cn,t=new Fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Uo.fromBufferAttribute(f,e),a?ns.addScaledVector(Uo,u):ns.addScaledVector(Uo.sub(t),u))}t.add(ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(ts.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ts,Kl)===null||ei.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(jl.copy(s).invert(),ei.copy(e.ray).applyMatrix4(jl),!(i.boundingBox!==null&&ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,C=A;T<C;T+=3){const D=o.getX(T),L=o.getX(T+1),j=o.getX(T+2);r=ls(this,d,e,i,c,u,f,D,L,j),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=o.getX(m),A=o.getX(m+1),T=o.getX(m+2);r=ls(this,a,e,i,c,u,f,y,A,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const m=h[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,C=A;T<C;T+=3){const D=T,L=T+1,j=T+2;r=ls(this,d,e,i,c,u,f,D,L,j),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const y=m,A=m+1,T=m+2;r=ls(this,a,e,i,c,u,f,y,A,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Td(n,e,t,i,r,s,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===jn,o),l===null)return null;as.copy(o),as.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(as);return c<t.near||c>t.far?null:{distance:c,point:as.clone(),object:n}}function ls(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Di),n.getVertexPosition(l,Ui),n.getVertexPosition(c,Ii);const u=Td(n,e,t,i,Di,Ui,Ii,os);if(u){r&&(is.fromBufferAttribute(r,o),rs.fromBufferAttribute(r,l),ss.fromBufferAttribute(r,c),u.uv=jt.getInterpolation(os,Di,Ui,Ii,is,rs,ss,new Qe)),s&&(is.fromBufferAttribute(s,o),rs.fromBufferAttribute(s,l),ss.fromBufferAttribute(s,c),u.uv1=jt.getInterpolation(os,Di,Ui,Ii,is,rs,ss,new Qe),u.uv2=u.uv1),a&&($l.fromBufferAttribute(a,o),Zl.fromBufferAttribute(a,l),Ql.fromBufferAttribute(a,c),u.normal=jt.getInterpolation(os,Di,Ui,Ii,$l,Zl,Ql,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};jt.getNormal(Di,Ui,Ii,f.normal),u.face=f}return u}class Vr extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(f,2));function v(x,m,d,y,A,T,C,D,L,j,E){const R=T/L,Z=C/j,fe=T/2,ue=C/2,I=D/2,k=L+1,ee=j+1;let V=0,te=0;const J=new G;for(let le=0;le<ee;le++){const N=le*Z-ue;for(let W=0;W<k;W++){const ge=W*R-fe;J[x]=ge*y,J[m]=N*A,J[d]=I,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[d]=D>0?1:-1,u.push(J.x,J.y,J.z),f.push(W/L),f.push(1-le/j),V+=1}}for(let le=0;le<j;le++)for(let N=0;N<L;N++){const W=h+N+k*le,ge=h+N+k*(le+1),xe=h+(N+1)+k*(le+1),Te=h+(N+1)+k*le;l.push(W,ge,Te),l.push(ge,xe,Te),te+=6}o.addGroup(p,te,E),p+=te,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=Zi(n[t]);for(const r in i)e[r]=i[r]}return e}function bd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const Rd={clone:Zi,merge:Rt};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Gu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Oi=1;class Pd extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(Ni,Oi,e,t);r.layers=this.layers,this.add(r);const s=new kt(Ni,Oi,e,t);s.layers=this.layers,this.add(s);const a=new kt(Ni,Oi,e,t);a.layers=this.layers,this.add(a);const o=new kt(Ni,Oi,e,t);o.layers=this.layers,this.add(o);const l=new kt(Ni,Oi,e,t);l.layers=this.layers,this.add(l);const c=new kt(Ni,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Vu extends It{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ld extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===di?pt:Wt),this.texture=new Vu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vr(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:kn});s.uniforms.tEquirect.value=t;const a=new Vn(r,s),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=Vt),new Pd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Io=new G,Dd=new G,Ud=new We;class ri{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Io.subVectors(i,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Io),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ud.getNormalMatrix(e),r=this.coplanarPoint(Io).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Gs,cs=new G;class ku{constructor(e=new ri,t=new ri,i=new ri,r=new ri,s=new ri,a=new ri){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],d=r[12],y=r[13],A=r[14],T=r[15];if(i[0].setComponents(l-s,h-c,m-p,T-d).normalize(),i[1].setComponents(l+s,h+c,m+p,T+d).normalize(),i[2].setComponents(l+a,h+u,m+v,T+y).normalize(),i[3].setComponents(l-a,h-u,m-v,T-y).normalize(),i[4].setComponents(l-o,h-f,m-x,T-A).normalize(),t===Tn)i[5].setComponents(l+o,h+f,m+x,T+A).normalize();else if(t===Ls)i[5].setComponents(o,f,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cs.x=r.normal.x>0?e.max.x:e.min.x,cs.y=r.normal.y>0?e.max.y:e.min.y,cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Id(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Sa extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const y=d*h-a;for(let A=0;A<c;A++){const T=A*f-s;v.push(T,-y,0),x.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const A=y+c*d,T=y+c*(d+1),C=y+1+c*(d+1),D=y+1+c*d;p.push(A,T,D),p.push(T,C,D)}this.setIndex(p),this.setAttribute("position",new pi(v,3)),this.setAttribute("normal",new pi(x,3)),this.setAttribute("uv",new pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Dp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Nd,alphahash_pars_fragment:Od,alphamap_fragment:Fd,alphamap_pars_fragment:Bd,alphatest_fragment:zd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Vd,begin_vertex:kd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Zd,color_fragment:Qd,color_pars_fragment:Jd,color_pars_vertex:ep,color_vertex:tp,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:rp,displacementmap_pars_vertex:sp,displacementmap_vertex:op,emissivemap_fragment:ap,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:up,envmap_fragment:fp,envmap_common_pars_fragment:hp,envmap_pars_fragment:dp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:bp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:_p,fog_fragment:vp,fog_pars_fragment:xp,gradientmap_pars_fragment:Ap,lightmap_fragment:Mp,lightmap_pars_fragment:Ep,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:yp,lights_pars_begin:Tp,lights_toon_fragment:Rp,lights_toon_pars_fragment:wp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Pp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Up,lights_fragment_maps:Ip,lights_fragment_end:Np,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:zp,map_fragment:Hp,map_pars_fragment:Gp,map_particle_fragment:Vp,map_particle_pars_fragment:kp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:jp,morphtarget_vertex:Kp,normal_fragment_begin:$p,normal_fragment_maps:Zp,normal_pars_fragment:Qp,normal_pars_vertex:Jp,normal_vertex:em,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:rm,iridescence_pars_fragment:sm,opaque_fragment:om,packing:am,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:um,dithering_pars_fragment:fm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:vm,skinning_pars_vertex:xm,skinning_vertex:Am,skinnormal_vertex:Mm,specularmap_fragment:Em,specularmap_pars_fragment:Sm,tonemapping_fragment:ym,tonemapping_pars_fragment:Tm,transmission_fragment:bm,transmission_pars_fragment:Rm,uv_pars_fragment:wm,uv_pars_vertex:Cm,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Dm,background_frag:Um,backgroundCube_vert:Im,backgroundCube_frag:Nm,cube_vert:Om,cube_frag:Fm,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:Hm,distanceRGBA_frag:Gm,equirect_vert:Vm,equirect_frag:km,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:jm,meshlambert_frag:Km,meshmatcap_vert:$m,meshmatcap_frag:Zm,meshnormal_vert:Qm,meshnormal_frag:Jm,meshphong_vert:eg,meshphong_frag:tg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:rg,meshtoon_frag:sg,points_vert:og,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:ug,sprite_frag:fg},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},cn={basic:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Rt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Rt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Rt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Rt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Rt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Rt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Rt([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Rt([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};cn.physical={uniforms:Rt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const us={r:0,b:0,g:0};function hg(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(m,d){let y=!1,A=d.isScene===!0?d.background:null;A&&A.isTexture&&(A=(d.backgroundBlurriness>0?t:e).get(A)),A===null?x(o,l):A&&A.isColor&&(x(A,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===zs)?(u===void 0&&(u=new Vn(new Vr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Zi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(A.colorSpace)!==tt,(f!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Vn(new Sa(2,2),new xi({name:"BackgroundMaterial",uniforms:Zi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(A.colorSpace)!==tt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(us,Hu(n)),i.buffers.color.setClear(us.r,us.g,us.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:v}}function dg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(I,k,ee,V,te){let J=!1;if(a){const le=x(V,ee,k);c!==le&&(c=le,p(c.object)),J=d(I,V,ee,te),J&&y(I,V,ee,te)}else{const le=k.wireframe===!0;(c.geometry!==V.id||c.program!==ee.id||c.wireframe!==le)&&(c.geometry=V.id,c.program=ee.id,c.wireframe=le,J=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,j(I,k,ee,V),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,k,ee){const V=ee.wireframe===!0;let te=o[I.id];te===void 0&&(te={},o[I.id]=te);let J=te[k.id];J===void 0&&(J={},te[k.id]=J);let le=J[V];return le===void 0&&(le=m(h()),J[V]=le),le}function m(I){const k=[],ee=[],V=[];for(let te=0;te<r;te++)k[te]=0,ee[te]=0,V[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:V,object:I,attributes:{},index:null}}function d(I,k,ee,V){const te=c.attributes,J=k.attributes;let le=0;const N=ee.getAttributes();for(const W in N)if(N[W].location>=0){const xe=te[W];let Te=J[W];if(Te===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;le++}return c.attributesNum!==le||c.index!==V}function y(I,k,ee,V){const te={},J=k.attributes;let le=0;const N=ee.getAttributes();for(const W in N)if(N[W].location>=0){let xe=J[W];xe===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor));const Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),te[W]=Te,le++}c.attributes=te,c.attributesNum=le,c.index=V}function A(){const I=c.newAttributes;for(let k=0,ee=I.length;k<ee;k++)I[k]=0}function T(I){C(I,0)}function C(I,k){const ee=c.newAttributes,V=c.enabledAttributes,te=c.attributeDivisors;ee[I]=1,V[I]===0&&(n.enableVertexAttribArray(I),V[I]=1),te[I]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),te[I]=k)}function D(){const I=c.newAttributes,k=c.enabledAttributes;for(let ee=0,V=k.length;ee<V;ee++)k[ee]!==I[ee]&&(n.disableVertexAttribArray(ee),k[ee]=0)}function L(I,k,ee,V,te,J,le){le===!0?n.vertexAttribIPointer(I,k,ee,te,J):n.vertexAttribPointer(I,k,ee,V,te,J)}function j(I,k,ee,V){if(i.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const te=V.attributes,J=ee.getAttributes(),le=k.defaultAttributeValues;for(const N in J){const W=J[N];if(W.location>=0){let ge=te[N];if(ge===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ge!==void 0){const xe=ge.normalized,Te=ge.itemSize,Re=t.get(ge);if(Re===void 0)continue;const F=Re.buffer,ne=Re.type,se=Re.bytesPerElement,Ee=i.isWebGL2===!0&&(ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===Su);if(ge.isInterleavedBufferAttribute){const ye=ge.data,g=ye.stride,b=ge.offset;if(ye.isInstancedInterleavedBuffer){for(let P=0;P<W.locationSize;P++)C(W.location+P,ye.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let P=0;P<W.locationSize;P++)T(W.location+P);n.bindBuffer(n.ARRAY_BUFFER,F);for(let P=0;P<W.locationSize;P++)L(W.location+P,Te/W.locationSize,ne,xe,g*se,(b+Te/W.locationSize*P)*se,Ee)}else{if(ge.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)C(W.location+ye,ge.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<W.locationSize;ye++)T(W.location+ye);n.bindBuffer(n.ARRAY_BUFFER,F);for(let ye=0;ye<W.locationSize;ye++)L(W.location+ye,Te/W.locationSize,ne,xe,Te*se,Te/W.locationSize*ye*se,Ee)}}else if(le!==void 0){const xe=le[N];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(W.location,xe);break;case 3:n.vertexAttrib3fv(W.location,xe);break;case 4:n.vertexAttrib4fv(W.location,xe);break;default:n.vertexAttrib1fv(W.location,xe)}}}}D()}function E(){fe();for(const I in o){const k=o[I];for(const ee in k){const V=k[ee];for(const te in V)v(V[te].object),delete V[te];delete k[ee]}delete o[I]}}function R(I){if(o[I.id]===void 0)return;const k=o[I.id];for(const ee in k){const V=k[ee];for(const te in V)v(V[te].object),delete V[te];delete k[ee]}delete o[I.id]}function Z(I){for(const k in o){const ee=o[k];if(ee[I.id]===void 0)continue;const V=ee[I.id];for(const te in V)v(V[te].object),delete V[te];delete ee[I.id]}}function fe(){ue(),u=!0,c!==l&&(c=l,p(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:fe,resetDefaultState:ue,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:A,enableAttribute:T,disableUnusedAttributes:D}}function pg(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function mg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=h>0,T=a||e.has("OES_texture_float"),C=A&&T,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:A,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:D}}function gg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ri,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,A=y*4;let T=d.clippingState||null;l.value=T,T=u(v,h,A,p);for(let C=0;C!==A;++C)T[C]=t[C];d.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,T=p;A!==x;++A,T+=4)a.copy(f[A]).applyMatrix4(y,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _g(n){let e=new WeakMap;function t(a,o){return o===Ko?a.mapping=ji:o===$o&&(a.mapping=Ki),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ko||o===$o)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ld(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vg extends Gu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,Jl=[.125,.215,.35,.446,.526,.582],oi=20,No=new vg,ec=new Je;let Oo=null;const si=(1+Math.sqrt(5))/2,Fi=1/si,tc=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,si,Fi),new G(0,si,-Fi),new G(Fi,0,si),new G(-Fi,0,si),new G(si,Fi,0),new G(-si,Fi,0)];class nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Oo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo),e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Cr,format:$t,colorSpace:wn,depthBuffer:!1},r=ic(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(s)),this._blurMaterial=Ag(s,e,t)}return r}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,r){const o=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ec),u.toneMapping=Wn,u.autoClear=!1;const p=new Fu({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),v=new Vn(new Vr,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(ec),x=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const A=this._cubeSize;fs(r,y*A,d>2?A:0,A,A),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Vn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,No)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tc[(r-1)%tc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Vn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*oi-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):oi;m>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const d=[];let y=0;for(let L=0;L<oi;++L){const j=L/x,E=Math.exp(-j*j/2);d.push(E),L===0?y+=E:L<m&&(y+=2*E)}for(let L=0;L<d.length;L++)d[L]=d[L]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const T=this._sizeLods[r],C=3*T*(r>A-Gi?r-A+Gi:0),D=4*(this._cubeSize-T);fs(t,C,D,3*T,2*T),l.setRenderTarget(t),l.render(f,No)}}function xg(n){const e=[],t=[],i=[];let r=n;const s=n-Gi+1+Jl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Gi?l=Jl[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,x=3,m=2,d=1,y=new Float32Array(x*v*p),A=new Float32Array(m*v*p),T=new Float32Array(d*v*p);for(let D=0;D<p;D++){const L=D%3*2/3-1,j=D>2?0:-1,E=[L,j,0,L+2/3,j,0,L+2/3,j+1,0,L,j,0,L+2/3,j+1,0,L,j+1,0];y.set(E,x*v*D),A.set(h,m*v*D);const R=[D,D,D,D,D,D];T.set(R,d*v*D)}const C=new Cn;C.setAttribute("position",new tn(y,x)),C.setAttribute("uv",new tn(A,m)),C.setAttribute("faceIndex",new tn(T,d)),e.push(C),r>Gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ic(n,e,t){const i=new vi(n,e,t);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ag(n,e,t){const i=new Float32Array(oi),r=new G(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function rc(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sc(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ko||l===$o,u=l===ji||l===Ki;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new nc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new nc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Eg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sg(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let A=0,T=y.length;A<T;A+=3){const C=y[A+0],D=y[A+1],L=y[A+2];h.push(C,D,D,L,L,C)}}else if(v!==void 0){const y=v.array;x=v.version;for(let A=0,T=y.length/3-1;A<T;A+=3){const C=A+0,D=A+1,L=A+2;h.push(C,D,D,L,L,C)}}else return;const m=new(Pu(h)?zu:Bu)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function yg(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,o,h*l),t.update(p,s,1)}function f(h,p,v){if(v===0)return;let x,m;if(r)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,o,h*l,v),t.update(p,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Tg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bg(n,e){return n[0]-e[0]}function Rg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new gt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==v){let I=function(){fe.dispose(),s.delete(u),u.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();const y=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let j=0;y===!0&&(j=1),A===!0&&(j=2),T===!0&&(j=3);let E=u.attributes.position.count*j,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Z=new Float32Array(E*R*4*v),fe=new Uu(Z,E,R,v);fe.type=Gn,fe.needsUpdate=!0;const ue=j*4;for(let k=0;k<v;k++){const ee=C[k],V=D[k],te=L[k],J=E*R*4*k;for(let le=0;le<ee.count;le++){const N=le*ue;y===!0&&(a.fromBufferAttribute(ee,le),Z[J+N+0]=a.x,Z[J+N+1]=a.y,Z[J+N+2]=a.z,Z[J+N+3]=0),A===!0&&(a.fromBufferAttribute(V,le),Z[J+N+4]=a.x,Z[J+N+5]=a.y,Z[J+N+6]=a.z,Z[J+N+7]=0),T===!0&&(a.fromBufferAttribute(te,le),Z[J+N+8]=a.x,Z[J+N+9]=a.y,Z[J+N+10]=a.z,Z[J+N+11]=te.itemSize===4?a.w:1)}}x={count:v,texture:fe,size:new Qe(E,R)},s.set(u,x),u.addEventListener("dispose",I)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let A=0;A<p;A++)v[A]=[A,0];i[u.id]=v}for(let A=0;A<p;A++){const T=v[A];T[0]=A,T[1]=h[A]}v.sort(Rg);for(let A=0;A<8;A++)A<p&&v[A][1]?(o[A][0]=v[A][0],o[A][1]=v[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(bg);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let A=0;A<8;A++){const T=o[A],C=T[0],D=T[1];C!==Number.MAX_SAFE_INTEGER&&D?(x&&u.getAttribute("morphTarget"+A)!==x[C]&&u.setAttribute("morphTarget"+A,x[C]),m&&u.getAttribute("morphNormal"+A)!==m[C]&&u.setAttribute("morphNormal"+A,m[C]),r[A]=D,d+=D):(x&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),m&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),r[A]=0)}const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Cg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Xu=new It,qu=new Uu,Yu=new pd,ju=new Vu,oc=[],ac=[],lc=new Float32Array(16),cc=new Float32Array(9),uc=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=oc[r];if(s===void 0&&(s=new Float32Array(r),oc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ks(n,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;uc.set(i),n.uniformMatrix2fv(this.addr,!1,uc),ft(t,i)}}function Ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;cc.set(i),n.uniformMatrix3fv(this.addr,!1,cc),ft(t,i)}}function Og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;lc.set(i),n.uniformMatrix4fv(this.addr,!1,lc),ft(t,i)}}function Fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function Xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Xu,r)}function qg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yu,r)}function Yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ju,r)}function jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qu,r)}function Kg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return Ig;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Vg;case 36295:return kg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return jg}}function $g(n,e){n.uniform1fv(this.addr,e)}function Zg(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Qg(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function Jg(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function e_(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t_(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n_(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function i_(n,e){n.uniform1iv(this.addr,e)}function r_(n,e){n.uniform2iv(this.addr,e)}function s_(n,e){n.uniform3iv(this.addr,e)}function o_(n,e){n.uniform4iv(this.addr,e)}function a_(n,e){n.uniform1uiv(this.addr,e)}function l_(n,e){n.uniform2uiv(this.addr,e)}function c_(n,e){n.uniform3uiv(this.addr,e)}function u_(n,e){n.uniform4uiv(this.addr,e)}function f_(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Xu,s[a])}function h_(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yu,s[a])}function d_(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ju,s[a])}function p_(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qu,s[a])}function m_(n){switch(n){case 5126:return $g;case 35664:return Zg;case 35665:return Qg;case 35666:return Jg;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Kg(t.type)}}class __{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=m_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function fc(n,e){n.seq.push(e),n.map[e.id]=e}function x_(n,e,t){const i=n.name,r=i.length;for(Fo.lastIndex=0;;){const s=Fo.exec(i),a=Fo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fc(t,c===void 0?new g_(o,n,e):new __(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new v_(o),fc(t,f)),t=f}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);x_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let A_=0;function M_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function E_(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Ps&&t===Cs?i="LinearDisplayP3ToLinearSRGB":e===Cs&&t===Ps&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case Hs:return[i,"LinearTransferOETF"];case pt:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+M_(n.getShaderSource(e),a)}else return r}function S_(n,e){const t=E_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function y_(n,e){let t;switch(e){case Ih:t="Linear";break;case Nh:t="Reinhard";break;case Oh:t="OptimizedCineon";break;case Fh:t="ACESFilmic";break;case Bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function T_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function b_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function R_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _r(n){return n!==""}function pc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(n){return n.replace(w_,P_)}const C_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function P_(n,e){let t=Ve[e];if(t===void 0){const i=C_.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(n){return n.replace(L_,D_)}function D_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _c(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function I_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function O_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Uh:e="ENVMAP_BLENDING_ADD";break}return e}function F_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function B_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=U_(t),c=I_(t),u=N_(t),f=O_(t),h=F_(t),p=t.isWebGL2?"":T_(t),v=b_(s),x=r.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_r).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_r).join(`
`),d.length>0&&(d+=`
`)):(m=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),d=[p,_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Wn?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,S_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=na(a),a=pc(a,t),a=mc(a,t),o=na(o),o=pc(o,t),o=mc(o,t),a=gc(a),o=gc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=y+m+a,T=y+d+o,C=hc(r,r.VERTEX_SHADER,A),D=hc(r,r.FRAGMENT_SHADER,T);if(r.attachShader(x,C),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(x).trim(),R=r.getShaderInfoLog(C).trim(),Z=r.getShaderInfoLog(D).trim();let fe=!0,ue=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,D);else{const I=dc(r,C,"vertex"),k=dc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+I+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||Z==="")&&(ue=!1);ue&&(this.diagnostics={runnable:fe,programLog:E,vertexShader:{log:R,prefix:m},fragmentShader:{log:Z,prefix:d}})}r.deleteShader(C),r.deleteShader(D);let L;this.getUniforms=function(){return L===void 0&&(L=new Ms(r,x)),L};let j;return this.getAttributes=function(){return j===void 0&&(j=R_(r,x)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=D,this}let z_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new G_(e),t.set(e,i)),i}}class G_{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}}function V_(n,e,t,i,r,s,a){const o=new Nu,l=new H_,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,R,Z,fe,ue){const I=fe.fog,k=ue.geometry,ee=E.isMeshStandardMaterial?fe.environment:null,V=(E.isMeshStandardMaterial?t:e).get(E.envMap||ee),te=V&&V.mapping===zs?V.image.height:null,J=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=le!==void 0?le.length:0;let W=0;k.morphAttributes.position!==void 0&&(W=1),k.morphAttributes.normal!==void 0&&(W=2),k.morphAttributes.color!==void 0&&(W=3);let ge,xe,Te,Re;if(J){const et=cn[J];ge=et.vertexShader,xe=et.fragmentShader}else ge=E.vertexShader,xe=E.fragmentShader,l.update(E),Te=l.getVertexShaderID(E),Re=l.getFragmentShaderID(E);const F=n.getRenderTarget(),ne=ue.isInstancedMesh===!0,se=!!E.map,Ee=!!E.matcap,ye=!!V,g=!!E.aoMap,b=!!E.lightMap,P=!!E.bumpMap,O=!!E.normalMap,z=!!E.displacementMap,K=!!E.emissiveMap,oe=!!E.metalnessMap,Y=!!E.roughnessMap,ae=E.anisotropy>0,re=E.clearcoat>0,Se=E.iridescence>0,M=E.sheen>0,_=E.transmission>0,U=ae&&!!E.anisotropyMap,$=re&&!!E.clearcoatMap,Q=re&&!!E.clearcoatNormalMap,ie=re&&!!E.clearcoatRoughnessMap,ve=Se&&!!E.iridescenceMap,he=Se&&!!E.iridescenceThicknessMap,Ae=M&&!!E.sheenColorMap,Ue=M&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,de=!!E.specularColorMap,Be=!!E.specularIntensityMap,Pe=_&&!!E.transmissionMap,Ie=_&&!!E.thicknessMap,De=!!E.gradientMap,w=!!E.alphaMap,me=E.alphaTest>0,pe=!!E.alphaHash,be=!!E.extensions,Me=!!k.attributes.uv1,ce=!!k.attributes.uv2,Ce=!!k.attributes.uv3;let He=Wn;return E.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(He=n.toneMapping),{isWebGL2:u,shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:ge,fragmentShader:xe,defines:E.defines,customVertexShaderID:Te,customFragmentShaderID:Re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:ne,instancingColor:ne&&ue.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:wn,map:se,matcap:Ee,envMap:ye,envMapMode:ye&&V.mapping,envMapCubeUVHeight:te,aoMap:g,lightMap:b,bumpMap:P,normalMap:O,displacementMap:h&&z,emissiveMap:K,normalMapObjectSpace:O&&E.normalMapType===Qh,normalMapTangentSpace:O&&E.normalMapType===Zh,metalnessMap:oe,roughnessMap:Y,anisotropy:ae,anisotropyMap:U,clearcoat:re,clearcoatMap:$,clearcoatNormalMap:Q,clearcoatRoughnessMap:ie,iridescence:Se,iridescenceMap:ve,iridescenceThicknessMap:he,sheen:M,sheenColorMap:Ae,sheenRoughnessMap:Ue,specularMap:Xe,specularColorMap:de,specularIntensityMap:Be,transmission:_,transmissionMap:Pe,thicknessMap:Ie,gradientMap:De,opaque:E.transparent===!1&&E.blending===ki,alphaMap:w,alphaTest:me,alphaHash:pe,combine:E.combine,mapUv:se&&x(E.map.channel),aoMapUv:g&&x(E.aoMap.channel),lightMapUv:b&&x(E.lightMap.channel),bumpMapUv:P&&x(E.bumpMap.channel),normalMapUv:O&&x(E.normalMap.channel),displacementMapUv:z&&x(E.displacementMap.channel),emissiveMapUv:K&&x(E.emissiveMap.channel),metalnessMapUv:oe&&x(E.metalnessMap.channel),roughnessMapUv:Y&&x(E.roughnessMap.channel),anisotropyMapUv:U&&x(E.anisotropyMap.channel),clearcoatMapUv:$&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Q&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:Xe&&x(E.specularMap.channel),specularColorMapUv:de&&x(E.specularColorMap.channel),specularIntensityMapUv:Be&&x(E.specularIntensityMap.channel),transmissionMapUv:Pe&&x(E.transmissionMap.channel),thicknessMapUv:Ie&&x(E.thicknessMap.channel),alphaMapUv:w&&x(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(O||ae),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:ce,vertexUv3s:Ce,pointsUvs:ue.isPoints===!0&&!!k.attributes.uv&&(se||w),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ue.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,useLegacyLights:n._useLegacyLights,decodeVideoTexture:se&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yn,flipSided:E.side===Ut,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:be&&E.extensions.derivatives===!0,extensionFragDepth:be&&E.extensions.fragDepth===!0,extensionDrawBuffers:be&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)R.push(Z),R.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(y(R,E),A(R,E),R.push(n.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function y(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function A(E,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function T(E){const R=v[E.type];let Z;if(R){const fe=cn[R];Z=Rd.clone(fe.uniforms)}else Z=E.uniforms;return Z}function C(E,R){let Z;for(let fe=0,ue=c.length;fe<ue;fe++){const I=c[fe];if(I.cacheKey===R){Z=I,++Z.usedTimes;break}}return Z===void 0&&(Z=new B_(n,R,E,s),c.push(Z)),Z}function D(E){if(--E.usedTimes===0){const R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function L(E){l.remove(E)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:C,releaseProgram:D,releaseShaderCache:L,programs:c,dispose:j}}function k_(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function W_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,v,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function o(f,h,p,v,x,m){const d=a(f,h,p,v,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,x,m){const d=a(f,h,p,v,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||W_),i.length>1&&i.sort(h||vc),r.length>1&&r.sort(h||vc)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function X_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xc,n.set(i,[a])):r>=s.length?(a=new xc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function q_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Je};break;case"SpotLight":t={position:new G,direction:new G,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function Y_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let j_=0;function K_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $_(n,e){const t=new q_,i=Y_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,a=new dt,o=new dt;function l(u,f){let h=0,p=0,v=0;for(let fe=0;fe<9;fe++)r.probe[fe].set(0,0,0);let x=0,m=0,d=0,y=0,A=0,T=0,C=0,D=0,L=0,j=0,E=0;u.sort(K_);const R=f===!0?Math.PI:1;for(let fe=0,ue=u.length;fe<ue;fe++){const I=u[fe],k=I.color,ee=I.intensity,V=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*ee*R,p+=k.g*ee*R,v+=k.b*ee*R;else if(I.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(I.sh.coefficients[J],ee);E++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*R),I.castShadow){const le=I.shadow,N=i.get(I);N.shadowBias=le.bias,N.shadowNormalBias=le.normalBias,N.shadowRadius=le.radius,N.shadowMapSize=le.mapSize,r.directionalShadow[x]=N,r.directionalShadowMap[x]=te,r.directionalShadowMatrix[x]=I.shadow.matrix,T++}r.directional[x]=J,x++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(k).multiplyScalar(ee*R),J.distance=V,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,r.spot[d]=J;const le=I.shadow;if(I.map&&(r.spotLightMap[L]=I.map,L++,le.updateMatrices(I),I.castShadow&&j++),r.spotLightMatrix[d]=le.matrix,I.castShadow){const N=i.get(I);N.shadowBias=le.bias,N.shadowNormalBias=le.normalBias,N.shadowRadius=le.radius,N.shadowMapSize=le.mapSize,r.spotShadow[d]=N,r.spotShadowMap[d]=te,D++}d++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(k).multiplyScalar(ee),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=J,y++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*R),J.distance=I.distance,J.decay=I.decay,I.castShadow){const le=I.shadow,N=i.get(I);N.shadowBias=le.bias,N.shadowNormalBias=le.normalBias,N.shadowRadius=le.radius,N.shadowMapSize=le.mapSize,N.shadowCameraNear=le.camera.near,N.shadowCameraFar=le.camera.far,r.pointShadow[m]=N,r.pointShadowMap[m]=te,r.pointShadowMatrix[m]=I.shadow.matrix,C++}r.point[m]=J,m++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(ee*R),J.groundColor.copy(I.groundColor).multiplyScalar(ee*R),r.hemi[A]=J,A++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const Z=r.hash;(Z.directionalLength!==x||Z.pointLength!==m||Z.spotLength!==d||Z.rectAreaLength!==y||Z.hemiLength!==A||Z.numDirectionalShadows!==T||Z.numPointShadows!==C||Z.numSpotShadows!==D||Z.numSpotMaps!==L||Z.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=A,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=D+L-j,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=E,Z.directionalLength=x,Z.pointLength=m,Z.spotLength=d,Z.rectAreaLength=y,Z.hemiLength=A,Z.numDirectionalShadows=T,Z.numPointShadows=C,Z.numSpotShadows=D,Z.numSpotMaps=L,Z.numLightProbes=E,r.version=j_++)}function c(u,f){let h=0,p=0,v=0,x=0,m=0;const d=f.matrixWorldInverse;for(let y=0,A=u.length;y<A;y++){const T=u[y];if(T.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),h++}else if(T.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),v++}else if(T.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Ac(n,e){const t=new $_(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Z_(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Ac(n,e),t.set(s,[l])):a>=o.length?(l=new Ac(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Q_ extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J_ extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nv(n,e,t){let i=new ku;const r=new Qe,s=new Qe,a=new gt,o=new Q_({depthPacking:$h}),l=new J_,c={},u=t.maxTextureSize,f={[jn]:Ut,[Ut]:jn,[yn]:yn},h=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:ev,fragmentShader:tv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Cn;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let d=this.type;this.render=function(C,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const j=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(kn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const fe=d!==En&&this.type===En,ue=d===En&&this.type!==En;for(let I=0,k=C.length;I<k;I++){const ee=C[I],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const te=V.getFrameExtents();if(r.multiply(te),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||fe===!0||ue===!0){const le=this.type!==En?{minFilter:wt,magFilter:wt}:{};V.map!==null&&V.map.dispose(),V.map=new vi(r.x,r.y,le),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const J=V.getViewportCount();for(let le=0;le<J;le++){const N=V.getViewport(le);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),Z.viewport(a),V.updateMatrices(ee,le),i=V.getFrustum(),T(D,L,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===En&&y(V,L),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(j,E,R)};function y(C,D){const L=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,L,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,L,p,x,null)}function A(C,D,L,j){let E=null;const R=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)E=R;else if(E=L.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const Z=E.uuid,fe=D.uuid;let ue=c[Z];ue===void 0&&(ue={},c[Z]=ue);let I=ue[fe];I===void 0&&(I=E.clone(),ue[fe]=I),E=I}if(E.visible=D.visible,E.wireframe=D.wireframe,j===En?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:f[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Z=n.properties.get(E);Z.light=L}return E}function T(C,D,L,j,E){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===En)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const fe=e.update(C),ue=C.material;if(Array.isArray(ue)){const I=fe.groups;for(let k=0,ee=I.length;k<ee;k++){const V=I[k],te=ue[V.materialIndex];if(te&&te.visible){const J=A(C,te,j,E);n.renderBufferDirect(L,null,fe,J,C,V)}}}else if(ue.visible){const I=A(C,ue,j,E);n.renderBufferDirect(L,null,fe,I,C,null)}}const Z=C.children;for(let fe=0,ue=Z.length;fe<ue;fe++)T(Z[fe],D,L,j,E)}}function iv(n,e,t){const i=t.isWebGL2;function r(){let w=!1;const me=new gt;let pe=null;const be=new gt(0,0,0,0);return{setMask:function(Me){pe!==Me&&!w&&(n.colorMask(Me,Me,Me,Me),pe=Me)},setLocked:function(Me){w=Me},setClear:function(Me,ce,Ce,He,St){St===!0&&(Me*=He,ce*=He,Ce*=He),me.set(Me,ce,Ce,He),be.equals(me)===!1&&(n.clearColor(Me,ce,Ce,He),be.copy(me))},reset:function(){w=!1,pe=null,be.set(-1,0,0,0)}}}function s(){let w=!1,me=null,pe=null,be=null;return{setTest:function(Me){Me?F(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(Me){me!==Me&&!w&&(n.depthMask(Me),me=Me)},setFunc:function(Me){if(pe!==Me){switch(Me){case Th:n.depthFunc(n.NEVER);break;case bh:n.depthFunc(n.ALWAYS);break;case Rh:n.depthFunc(n.LESS);break;case jo:n.depthFunc(n.LEQUAL);break;case wh:n.depthFunc(n.EQUAL);break;case Ch:n.depthFunc(n.GEQUAL);break;case Ph:n.depthFunc(n.GREATER);break;case Lh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Me}},setLocked:function(Me){w=Me},setClear:function(Me){be!==Me&&(n.clearDepth(Me),be=Me)},reset:function(){w=!1,me=null,pe=null,be=null}}}function a(){let w=!1,me=null,pe=null,be=null,Me=null,ce=null,Ce=null,He=null,St=null;return{setTest:function(et){w||(et?F(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(et){me!==et&&!w&&(n.stencilMask(et),me=et)},setFunc:function(et,on,yt){(pe!==et||be!==on||Me!==yt)&&(n.stencilFunc(et,on,yt),pe=et,be=on,Me=yt)},setOp:function(et,on,yt){(ce!==et||Ce!==on||He!==yt)&&(n.stencilOp(et,on,yt),ce=et,Ce=on,He=yt)},setLocked:function(et){w=et},setClear:function(et){St!==et&&(n.clearStencil(et),St=et)},reset:function(){w=!1,me=null,pe=null,be=null,Me=null,ce=null,Ce=null,He=null,St=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,x=[],m=null,d=!1,y=null,A=null,T=null,C=null,D=null,L=null,j=null,E=!1,R=null,Z=null,fe=null,ue=null,I=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,V=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=V>=1):te.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=V>=2);let J=null,le={};const N=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),ge=new gt().fromArray(N),xe=new gt().fromArray(W);function Te(w,me,pe,be){const Me=new Uint8Array(4),ce=n.createTexture();n.bindTexture(w,ce),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<pe;Ce++)i&&(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(me+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ce}const Re={};Re[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),F(n.DEPTH_TEST),l.setFunc(jo),z(!1),K(nl),F(n.CULL_FACE),P(kn);function F(w){h[w]!==!0&&(n.enable(w),h[w]=!0)}function ne(w){h[w]!==!1&&(n.disable(w),h[w]=!1)}function se(w,me){return p[w]!==me?(n.bindFramebuffer(w,me),p[w]=me,i&&(w===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=me),w===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function Ee(w,me){let pe=x,be=!1;if(w)if(pe=v.get(me),pe===void 0&&(pe=[],v.set(me,pe)),w.isWebGLMultipleRenderTargets){const Me=w.texture;if(pe.length!==Me.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ce=Me.length;ce<Ce;ce++)pe[ce]=n.COLOR_ATTACHMENT0+ce;pe.length=Me.length,be=!0}}else pe[0]!==n.COLOR_ATTACHMENT0&&(pe[0]=n.COLOR_ATTACHMENT0,be=!0);else pe[0]!==n.BACK&&(pe[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ye(w){return m!==w?(n.useProgram(w),m=w,!0):!1}const g={[zi]:n.FUNC_ADD,[ph]:n.FUNC_SUBTRACT,[mh]:n.FUNC_REVERSE_SUBTRACT};if(i)g[ol]=n.MIN,g[al]=n.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(g[ol]=w.MIN_EXT,g[al]=w.MAX_EXT)}const b={[gh]:n.ZERO,[_h]:n.ONE,[vh]:n.SRC_COLOR,[xu]:n.SRC_ALPHA,[yh]:n.SRC_ALPHA_SATURATE,[Eh]:n.DST_COLOR,[Ah]:n.DST_ALPHA,[xh]:n.ONE_MINUS_SRC_COLOR,[Au]:n.ONE_MINUS_SRC_ALPHA,[Sh]:n.ONE_MINUS_DST_COLOR,[Mh]:n.ONE_MINUS_DST_ALPHA};function P(w,me,pe,be,Me,ce,Ce,He){if(w===kn){d===!0&&(ne(n.BLEND),d=!1);return}if(d===!1&&(F(n.BLEND),d=!0),w!==dh){if(w!==y||He!==E){if((A!==zi||D!==zi)&&(n.blendEquation(n.FUNC_ADD),A=zi,D=zi),He)switch(w){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.ONE,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,C=null,L=null,j=null,y=w,E=He}return}Me=Me||me,ce=ce||pe,Ce=Ce||be,(me!==A||Me!==D)&&(n.blendEquationSeparate(g[me],g[Me]),A=me,D=Me),(pe!==T||be!==C||ce!==L||Ce!==j)&&(n.blendFuncSeparate(b[pe],b[be],b[ce],b[Ce]),T=pe,C=be,L=ce,j=Ce),y=w,E=!1}function O(w,me){w.side===yn?ne(n.CULL_FACE):F(n.CULL_FACE);let pe=w.side===Ut;me&&(pe=!pe),z(pe),w.blending===ki&&w.transparent===!1?P(kn):P(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),o.setMask(w.colorWrite);const be=w.stencilWrite;c.setTest(be),be&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Y(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(w){R!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),R=w)}function K(w){w!==uh?(F(n.CULL_FACE),w!==Z&&(w===nl?n.cullFace(n.BACK):w===fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),Z=w}function oe(w){w!==fe&&(ee&&n.lineWidth(w),fe=w)}function Y(w,me,pe){w?(F(n.POLYGON_OFFSET_FILL),(ue!==me||I!==pe)&&(n.polygonOffset(me,pe),ue=me,I=pe)):ne(n.POLYGON_OFFSET_FILL)}function ae(w){w?F(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function re(w){w===void 0&&(w=n.TEXTURE0+k-1),J!==w&&(n.activeTexture(w),J=w)}function Se(w,me,pe){pe===void 0&&(J===null?pe=n.TEXTURE0+k-1:pe=J);let be=le[pe];be===void 0&&(be={type:void 0,texture:void 0},le[pe]=be),(be.type!==w||be.texture!==me)&&(J!==pe&&(n.activeTexture(pe),J=pe),n.bindTexture(w,me||Re[w]),be.type=w,be.texture=me)}function M(){const w=le[J];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function _(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function he(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(w){ge.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),ge.copy(w))}function Be(w){xe.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),xe.copy(w))}function Pe(w,me){let pe=f.get(me);pe===void 0&&(pe=new WeakMap,f.set(me,pe));let be=pe.get(w);be===void 0&&(be=n.getUniformBlockIndex(me,w.name),pe.set(w,be))}function Ie(w,me){const be=f.get(me).get(w);u.get(me)!==be&&(n.uniformBlockBinding(me,be,w.__bindingPointIndex),u.set(me,be))}function De(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,le={},p={},v=new WeakMap,x=[],m=null,d=!1,y=null,A=null,T=null,C=null,D=null,L=null,j=null,E=!1,R=null,Z=null,fe=null,ue=null,I=null,ge.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:F,disable:ne,bindFramebuffer:se,drawBuffers:Ee,useProgram:ye,setBlending:P,setMaterial:O,setFlipSided:z,setCullFace:K,setLineWidth:oe,setPolygonOffset:Y,setScissorTest:ae,activeTexture:re,bindTexture:Se,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Ue,texImage3D:Xe,updateUBOMapping:Pe,uniformBlockBinding:Ie,texStorage2D:he,texStorage3D:Ae,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:ie,compressedTexSubImage3D:ve,scissor:de,viewport:Be,reset:De}}function rv(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,_){return d?new OffscreenCanvas(M,_):Pr("canvas")}function A(M,_,U,$){let Q=1;if((M.width>$||M.height>$)&&(Q=$/Math.max(M.width,M.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ie=_?ta:Math.floor,ve=ie(Q*M.width),he=ie(Q*M.height);x===void 0&&(x=y(ve,he));const Ae=U?y(ve,he):x;return Ae.width=ve,Ae.height=he,Ae.getContext("2d").drawImage(M,0,0,ve,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ve+"x"+he+")."),Ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return Ol(M.width)&&Ol(M.height)}function C(M){return o?!1:M.wrapS!==Kt||M.wrapT!==Kt||M.minFilter!==wt&&M.minFilter!==Vt}function D(M,_){return M.generateMipmaps&&_&&M.minFilter!==wt&&M.minFilter!==Vt}function L(M){n.generateMipmap(M)}function j(M,_,U,$,Q=!1){if(o===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ie=_;if(_===n.RED&&(U===n.FLOAT&&(ie=n.R32F),U===n.HALF_FLOAT&&(ie=n.R16F),U===n.UNSIGNED_BYTE&&(ie=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ie=n.R8UI),U===n.UNSIGNED_SHORT&&(ie=n.R16UI),U===n.UNSIGNED_INT&&(ie=n.R32UI),U===n.BYTE&&(ie=n.R8I),U===n.SHORT&&(ie=n.R16I),U===n.INT&&(ie=n.R32I)),_===n.RG&&(U===n.FLOAT&&(ie=n.RG32F),U===n.HALF_FLOAT&&(ie=n.RG16F),U===n.UNSIGNED_BYTE&&(ie=n.RG8)),_===n.RGBA){const ve=Q?ws:Ze.getTransfer($);U===n.FLOAT&&(ie=n.RGBA32F),U===n.HALF_FLOAT&&(ie=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ie=ve===tt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(M,_,U){return D(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==wt&&M.minFilter!==Vt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function R(M){return M===wt||M===ll||M===lo?n.NEAREST:n.LINEAR}function Z(M){const _=M.target;_.removeEventListener("dispose",Z),ue(_),_.isVideoTexture&&v.delete(_)}function fe(M){const _=M.target;_.removeEventListener("dispose",fe),k(_)}function ue(M){const _=i.get(M);if(_.__webglInit===void 0)return;const U=M.source,$=m.get(U);if($){const Q=$[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(M),Object.keys($).length===0&&m.delete(U)}i.remove(M)}function I(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const U=M.source,$=m.get(U);delete $[_.__cacheKey],a.memory.textures--}function k(M){const _=M.texture,U=i.get(M),$=i.get(_);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let ie=0;ie<U.__webglFramebuffer[Q].length;ie++)n.deleteFramebuffer(U.__webglFramebuffer[Q][ie]);else n.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)n.deleteFramebuffer(U.__webglFramebuffer[Q]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,ie=_.length;Q<ie;Q++){const ve=i.get(_[Q]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(M)}let ee=0;function V(){ee=0}function te(){const M=ee;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),ee+=1,M}function J(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function le(M,_){const U=i.get(M);if(M.isVideoTexture&&re(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(U,M,_);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function N(M,_){const U=i.get(M);if(M.version>0&&U.__version!==M.version){se(U,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function W(M,_){const U=i.get(M);if(M.version>0&&U.__version!==M.version){se(U,M,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function ge(M,_){const U=i.get(M);if(M.version>0&&U.__version!==M.version){Ee(U,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const xe={[Zo]:n.REPEAT,[Kt]:n.CLAMP_TO_EDGE,[Qo]:n.MIRRORED_REPEAT},Te={[wt]:n.NEAREST,[ll]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[zh]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},Re={[ed]:n.NEVER,[ad]:n.ALWAYS,[td]:n.LESS,[id]:n.LEQUAL,[nd]:n.EQUAL,[od]:n.GEQUAL,[rd]:n.GREATER,[sd]:n.NOTEQUAL};function F(M,_,U){if(U?(n.texParameteri(M,n.TEXTURE_WRAP_S,xe[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,xe[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,xe[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Te[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Te[_.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Kt||_.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(_.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==wt&&_.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===wt||_.minFilter!==lo&&_.minFilter!==wr||_.type===Gn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function ne(M,_){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",Z));const $=_.source;let Q=m.get($);Q===void 0&&(Q={},m.set($,Q));const ie=J(_);if(ie!==M.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[ie].usedTimes++;const ve=Q[M.__cacheKey];ve!==void 0&&(Q[M.__cacheKey].usedTimes--,ve.usedTimes===0&&I(_)),M.__cacheKey=ie,M.__webglTexture=Q[ie].texture}return U}function se(M,_,U){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const Q=ne(M,_),ie=_.source;t.bindTexture($,M.__webglTexture,n.TEXTURE0+U);const ve=i.get(ie);if(ie.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const he=Ze.getPrimaries(Ze.workingColorSpace),Ae=_.colorSpace===Wt?null:Ze.getPrimaries(_.colorSpace),Ue=_.colorSpace===Wt||he===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Xe=C(_)&&T(_.image)===!1;let de=A(_.image,Xe,!1,u);de=Se(_,de);const Be=T(de)||o,Pe=s.convert(_.format,_.colorSpace);let Ie=s.convert(_.type),De=j(_.internalFormat,Pe,Ie,_.colorSpace,_.isVideoTexture);F($,_,Be);let w;const me=_.mipmaps,pe=o&&_.isVideoTexture!==!0,be=ve.__version===void 0||Q===!0,Me=E(_,de,Be);if(_.isDepthTexture)De=n.DEPTH_COMPONENT,o?_.type===Gn?De=n.DEPTH_COMPONENT32F:_.type===Hn?De=n.DEPTH_COMPONENT24:_.type===fi?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:_.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===hi&&De===n.DEPTH_COMPONENT&&_.type!==Ma&&_.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Hn,Ie=s.convert(_.type)),_.format===$i&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,_.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=fi,Ie=s.convert(_.type))),be&&(pe?t.texStorage2D(n.TEXTURE_2D,1,De,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,De,de.width,de.height,0,Pe,Ie,null));else if(_.isDataTexture)if(me.length>0&&Be){pe&&be&&t.texStorage2D(n.TEXTURE_2D,Me,De,me[0].width,me[0].height);for(let ce=0,Ce=me.length;ce<Ce;ce++)w=me[ce],pe?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,w.width,w.height,Pe,Ie,w.data):t.texImage2D(n.TEXTURE_2D,ce,De,w.width,w.height,0,Pe,Ie,w.data);_.generateMipmaps=!1}else pe?(be&&t.texStorage2D(n.TEXTURE_2D,Me,De,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Pe,Ie,de.data)):t.texImage2D(n.TEXTURE_2D,0,De,de.width,de.height,0,Pe,Ie,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){pe&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,De,me[0].width,me[0].height,de.depth);for(let ce=0,Ce=me.length;ce<Ce;ce++)w=me[ce],_.format!==$t?Pe!==null?pe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,w.width,w.height,de.depth,Pe,w.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,De,w.width,w.height,de.depth,0,w.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,w.width,w.height,de.depth,Pe,Ie,w.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,De,w.width,w.height,de.depth,0,Pe,Ie,w.data)}else{pe&&be&&t.texStorage2D(n.TEXTURE_2D,Me,De,me[0].width,me[0].height);for(let ce=0,Ce=me.length;ce<Ce;ce++)w=me[ce],_.format!==$t?Pe!==null?pe?t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,w.width,w.height,Pe,w.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,De,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,w.width,w.height,Pe,Ie,w.data):t.texImage2D(n.TEXTURE_2D,ce,De,w.width,w.height,0,Pe,Ie,w.data)}else if(_.isDataArrayTexture)pe?(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,De,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,Ie,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Pe,Ie,de.data);else if(_.isData3DTexture)pe?(be&&t.texStorage3D(n.TEXTURE_3D,Me,De,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,Ie,de.data)):t.texImage3D(n.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Pe,Ie,de.data);else if(_.isFramebufferTexture){if(be)if(pe)t.texStorage2D(n.TEXTURE_2D,Me,De,de.width,de.height);else{let ce=de.width,Ce=de.height;for(let He=0;He<Me;He++)t.texImage2D(n.TEXTURE_2D,He,De,ce,Ce,0,Pe,Ie,null),ce>>=1,Ce>>=1}}else if(me.length>0&&Be){pe&&be&&t.texStorage2D(n.TEXTURE_2D,Me,De,me[0].width,me[0].height);for(let ce=0,Ce=me.length;ce<Ce;ce++)w=me[ce],pe?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Pe,Ie,w):t.texImage2D(n.TEXTURE_2D,ce,De,Pe,Ie,w);_.generateMipmaps=!1}else pe?(be&&t.texStorage2D(n.TEXTURE_2D,Me,De,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ie,de)):t.texImage2D(n.TEXTURE_2D,0,De,Pe,Ie,de);D(_,Be)&&L($),ve.__version=ie.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ee(M,_,U){if(_.image.length!==6)return;const $=ne(M,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+U);const ie=i.get(Q);if(Q.version!==ie.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const ve=Ze.getPrimaries(Ze.workingColorSpace),he=_.colorSpace===Wt?null:Ze.getPrimaries(_.colorSpace),Ae=_.colorSpace===Wt||ve===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Xe=_.image[0]&&_.image[0].isDataTexture,de=[];for(let ce=0;ce<6;ce++)!Ue&&!Xe?de[ce]=A(_.image[ce],!1,!0,c):de[ce]=Xe?_.image[ce].image:_.image[ce],de[ce]=Se(_,de[ce]);const Be=de[0],Pe=T(Be)||o,Ie=s.convert(_.format,_.colorSpace),De=s.convert(_.type),w=j(_.internalFormat,Ie,De,_.colorSpace),me=o&&_.isVideoTexture!==!0,pe=ie.__version===void 0||$===!0;let be=E(_,Be,Pe);F(n.TEXTURE_CUBE_MAP,_,Pe);let Me;if(Ue){me&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,w,Be.width,Be.height);for(let ce=0;ce<6;ce++){Me=de[ce].mipmaps;for(let Ce=0;Ce<Me.length;Ce++){const He=Me[Ce];_.format!==$t?Ie!==null?me?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,He.width,He.height,Ie,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,w,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,He.width,He.height,Ie,De,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,w,He.width,He.height,0,Ie,De,He.data)}}}else{Me=_.mipmaps,me&&pe&&(Me.length>0&&be++,t.texStorage2D(n.TEXTURE_CUBE_MAP,be,w,de[0].width,de[0].height));for(let ce=0;ce<6;ce++)if(Xe){me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,de[ce].width,de[ce].height,Ie,De,de[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,w,de[ce].width,de[ce].height,0,Ie,De,de[ce].data);for(let Ce=0;Ce<Me.length;Ce++){const St=Me[Ce].image[ce].image;me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,St.width,St.height,Ie,De,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,w,St.width,St.height,0,Ie,De,St.data)}}else{me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ie,De,de[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,w,Ie,De,de[ce]);for(let Ce=0;Ce<Me.length;Ce++){const He=Me[Ce];me?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Ie,De,He.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,w,Ie,De,He.image[ce])}}}D(_,Pe)&&L(n.TEXTURE_CUBE_MAP),ie.__version=Q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ye(M,_,U,$,Q,ie){const ve=s.convert(U.format,U.colorSpace),he=s.convert(U.type),Ae=j(U.internalFormat,ve,he,U.colorSpace);if(!i.get(_).__hasExternalTextures){const Xe=Math.max(1,_.width>>ie),de=Math.max(1,_.height>>ie);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,Ae,Xe,de,_.depth,0,ve,he,null):t.texImage2D(Q,ie,Ae,Xe,de,0,ve,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ae(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,i.get(U).__webglTexture,0,Y(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,i.get(U).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(M,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let $=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||ae(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Gn?$=n.DEPTH_COMPONENT32F:Q.type===Hn&&($=n.DEPTH_COMPONENT24));const ie=Y(_);ae(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,$,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,$,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const $=Y(_);U&&ae(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,_.width,_.height):ae(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const $=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<$.length;Q++){const ie=$[Q],ve=s.convert(ie.format,ie.colorSpace),he=s.convert(ie.type),Ae=j(ie.internalFormat,ve,he,ie.colorSpace),Ue=Y(_);U&&ae(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ae,_.width,_.height):ae(_)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,Ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function b(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),le(_.depthTexture,0);const $=i.get(_.depthTexture).__webglTexture,Q=Y(_);if(_.depthTexture.format===hi)ae(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(_.depthTexture.format===$i)ae(_)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function P(M){const _=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");b(_.__webglFramebuffer,M)}else if(U){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=n.createRenderbuffer(),g(_.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),g(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(M,_,U){const $=i.get(M);_!==void 0&&ye($.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&P(M)}function z(M){const _=M.texture,U=i.get(M),$=i.get(_);M.addEventListener("dispose",fe),M.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,a.memory.textures++);const Q=M.isWebGLCubeRenderTarget===!0,ie=M.isWebGLMultipleRenderTargets===!0,ve=T(M)||o;if(Q){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let Ae=0;Ae<_.mipmaps.length;Ae++)U.__webglFramebuffer[he][Ae]=n.createFramebuffer()}else U.__webglFramebuffer[he]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)U.__webglFramebuffer[he]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const he=M.texture;for(let Ae=0,Ue=he.length;Ae<Ue;Ae++){const Xe=i.get(he[Ae]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&ae(M)===!1){const he=ie?_:[_];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Ae=0;Ae<he.length;Ae++){const Ue=he[Ae];U.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Ae]);const Xe=s.convert(Ue.format,Ue.colorSpace),de=s.convert(Ue.type),Be=j(Ue.internalFormat,Xe,de,Ue.colorSpace,M.isXRRenderTarget===!0),Pe=Y(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Be,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,U.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),g(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),F(n.TEXTURE_CUBE_MAP,_,ve);for(let he=0;he<6;he++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ye(U.__webglFramebuffer[he][Ae],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae);else ye(U.__webglFramebuffer[he],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);D(_,ve)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const he=M.texture;for(let Ae=0,Ue=he.length;Ae<Ue;Ae++){const Xe=he[Ae],de=i.get(Xe);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),F(n.TEXTURE_2D,Xe,ve),ye(U.__webglFramebuffer,M,Xe,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),D(Xe,ve)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?he=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,$.__webglTexture),F(he,_,ve),o&&_.mipmaps&&_.mipmaps.length>0)for(let Ae=0;Ae<_.mipmaps.length;Ae++)ye(U.__webglFramebuffer[Ae],M,_,n.COLOR_ATTACHMENT0,he,Ae);else ye(U.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,he,0);D(_,ve)&&L(he),t.unbindTexture()}M.depthBuffer&&P(M)}function K(M){const _=T(M)||o,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0,Q=U.length;$<Q;$++){const ie=U[$];if(D(ie,_)){const ve=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ie).__webglTexture;t.bindTexture(ve,he),L(ve),t.unbindTexture()}}}function oe(M){if(o&&M.samples>0&&ae(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,$=M.height;let Q=n.COLOR_BUFFER_BIT;const ie=[],ve=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(M),Ae=M.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Ue=0;Ue<_.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ue=0;Ue<_.length;Ue++){ie.push(n.COLOR_ATTACHMENT0+Ue),M.depthBuffer&&ie.push(ve);const Xe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Xe===!1&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ue]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),Ae){const de=i.get(_[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,Q,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<_.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ue]);const Xe=i.get(_[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Y(M){return Math.min(f,M.samples)}function ae(M){const _=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function re(M){const _=a.render.frame;v.get(M)!==_&&(v.set(M,_),M.update())}function Se(M,_){const U=M.colorSpace,$=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Jo||U!==wn&&U!==Wt&&(Ze.getTransfer(U)===tt?o===!1?e.has("EXT_sRGB")===!0&&$===$t?(M.format=Jo,M.minFilter=Vt,M.generateMipmaps=!1):_=Lu.sRGBToLinear(_):($!==$t||Q!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=te,this.resetTextureUnits=V,this.setTexture2D=le,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=ge,this.rebindTextures=O,this.setupRenderTarget=z,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ae}function sv(n,e,t){const i=t.isWebGL2;function r(s,a=Wt){let o;const l=Ze.getTransfer(a);if(s===Xn)return n.UNSIGNED_BYTE;if(s===yu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Tu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Hh)return n.BYTE;if(s===Gh)return n.SHORT;if(s===Ma)return n.UNSIGNED_SHORT;if(s===Su)return n.INT;if(s===Hn)return n.UNSIGNED_INT;if(s===Gn)return n.FLOAT;if(s===Cr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Vh)return n.ALPHA;if(s===$t)return n.RGBA;if(s===kh)return n.LUMINANCE;if(s===Wh)return n.LUMINANCE_ALPHA;if(s===hi)return n.DEPTH_COMPONENT;if(s===$i)return n.DEPTH_STENCIL;if(s===Jo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Xh)return n.RED;if(s===bu)return n.RED_INTEGER;if(s===qh)return n.RG;if(s===Ru)return n.RG_INTEGER;if(s===wu)return n.RGBA_INTEGER;if(s===co||s===uo||s===fo||s===ho)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cl||s===ul||s===fl||s===hl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===cl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dl||s===pl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===dl)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ml||s===gl||s===_l||s===vl||s===xl||s===Al||s===Ml||s===El||s===Sl||s===yl||s===Tl||s===bl||s===Rl||s===wl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ml)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_l)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Al)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ml)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===El)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===po||s===Cl||s===Pl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===po)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jh||s===Ll||s===Dl||s===Ul)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===po)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ll)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ul)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ov extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const av={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(av)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lv extends It{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hi&&(i=Hn),i===void 0&&u===$i&&(i=fi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cv extends rr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const x=t.getContextAttributes();let m=null,d=null;const y=[],A=[],T=new kt;T.layers.enable(1),T.viewport=new gt;const C=new kt;C.layers.enable(2),C.viewport=new gt;const D=[T,C],L=new ov;L.layers.enable(1),L.layers.enable(2);let j=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let W=y[N];return W===void 0&&(W=new Bo,y[N]=W),W.getTargetRaySpace()},this.getControllerGrip=function(N){let W=y[N];return W===void 0&&(W=new Bo,y[N]=W),W.getGripSpace()},this.getHand=function(N){let W=y[N];return W===void 0&&(W=new Bo,y[N]=W),W.getHandSpace()};function R(N){const W=A.indexOf(N.inputSource);if(W===-1)return;const ge=y[W];ge!==void 0&&(ge.update(N.inputSource,N.frame,c||a),ge.dispatchEvent({type:N.type,data:N.inputSource}))}function Z(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",fe);for(let N=0;N<y.length;N++){const W=A[N];W!==null&&(A[N]=null,y[N].disconnect(W))}j=null,E=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:p}),d=new vi(p.framebufferWidth,p.framebufferHeight,{format:$t,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let W=null,ge=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=x.stencil?$i:hi,ge=x.stencil?fi:Hn);const Te={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),d=new vi(h.textureWidth,h.textureHeight,{format:$t,type:Xn,depthTexture:new lv(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function fe(N){for(let W=0;W<N.removed.length;W++){const ge=N.removed[W],xe=A.indexOf(ge);xe>=0&&(A[xe]=null,y[xe].disconnect(ge))}for(let W=0;W<N.added.length;W++){const ge=N.added[W];let xe=A.indexOf(ge);if(xe===-1){for(let Re=0;Re<y.length;Re++)if(Re>=A.length){A.push(ge),xe=Re;break}else if(A[Re]===null){A[Re]=ge,xe=Re;break}if(xe===-1)break}const Te=y[xe];Te&&Te.connect(ge)}}const ue=new G,I=new G;function k(N,W,ge){ue.setFromMatrixPosition(W.matrixWorld),I.setFromMatrixPosition(ge.matrixWorld);const xe=ue.distanceTo(I),Te=W.projectionMatrix.elements,Re=ge.projectionMatrix.elements,F=Te[14]/(Te[10]-1),ne=Te[14]/(Te[10]+1),se=(Te[9]+1)/Te[5],Ee=(Te[9]-1)/Te[5],ye=(Te[8]-1)/Te[0],g=(Re[8]+1)/Re[0],b=F*ye,P=F*g,O=xe/(-ye+g),z=O*-ye;W.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(z),N.translateZ(O),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const K=F+O,oe=ne+O,Y=b-z,ae=P+(xe-z),re=se*ne/oe*K,Se=Ee*ne/oe*K;N.projectionMatrix.makePerspective(Y,ae,re,Se,K,oe),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function ee(N,W){W===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(W.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;L.near=C.near=T.near=N.near,L.far=C.far=T.far=N.far,(j!==L.near||E!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),j=L.near,E=L.far);const W=N.parent,ge=L.cameras;ee(L,W);for(let xe=0;xe<ge.length;xe++)ee(ge[xe],W);ge.length===2?k(L,T,C):L.projectionMatrix.copy(T.projectionMatrix),V(N,L,W)};function V(N,W,ge){ge===null?N.matrix.copy(W.matrixWorld):(N.matrix.copy(ge.matrixWorld),N.matrix.invert(),N.matrix.multiply(W.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ea*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let te=null;function J(N,W){if(u=W.getViewerPose(c||a),v=W,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let xe=!1;ge.length!==L.cameras.length&&(L.cameras.length=0,xe=!0);for(let Te=0;Te<ge.length;Te++){const Re=ge[Te];let F=null;if(p!==null)F=p.getViewport(Re);else{const se=f.getViewSubImage(h,Re);F=se.viewport,Te===0&&(e.setRenderTargetTextures(d,se.colorTexture,h.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(d))}let ne=D[Te];ne===void 0&&(ne=new kt,ne.layers.enable(Te),ne.viewport=new gt,D[Te]=ne),ne.matrix.fromArray(Re.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Re.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(F.x,F.y,F.width,F.height),Te===0&&(L.matrix.copy(ne.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),xe===!0&&L.cameras.push(ne)}}for(let ge=0;ge<y.length;ge++){const xe=A[ge],Te=y[ge];xe!==null&&Te!==void 0&&Te.update(xe,W,c||a)}te&&te(N,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}const le=new Wu;le.setAnimationLoop(J),this.setAnimationLoop=function(N){te=N},this.dispose=function(){}}}function uv(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Hu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,A,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ut&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ut&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const A=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*A,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fv(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,A){const T=A.program;i.uniformBlockBinding(y,T)}function c(y,A){let T=r[y.id];T===void 0&&(v(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",m));const C=A.program;i.updateUBOMapping(y,C);const D=e.render.frame;s[y.id]!==D&&(h(y),s[y.id]=D)}function u(y){const A=f();y.__bindingPointIndex=A;const T=n.createBuffer(),C=y.__size,D=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,T),T}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const A=r[y.id],T=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,L=T.length;D<L;D++){const j=T[D];if(p(j,D,C)===!0){const E=j.__offset,R=Array.isArray(j.value)?j.value:[j.value];let Z=0;for(let fe=0;fe<R.length;fe++){const ue=R[fe],I=x(ue);typeof ue=="number"?(j.__data[0]=ue,n.bufferSubData(n.UNIFORM_BUFFER,E+Z,j.__data)):ue.isMatrix3?(j.__data[0]=ue.elements[0],j.__data[1]=ue.elements[1],j.__data[2]=ue.elements[2],j.__data[3]=ue.elements[0],j.__data[4]=ue.elements[3],j.__data[5]=ue.elements[4],j.__data[6]=ue.elements[5],j.__data[7]=ue.elements[0],j.__data[8]=ue.elements[6],j.__data[9]=ue.elements[7],j.__data[10]=ue.elements[8],j.__data[11]=ue.elements[0]):(ue.toArray(j.__data,Z),Z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,j.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,A,T){const C=y.value;if(T[A]===void 0){if(typeof C=="number")T[A]=C;else{const D=Array.isArray(C)?C:[C],L=[];for(let j=0;j<D.length;j++)L.push(D[j].clone());T[A]=L}return!0}else if(typeof C=="number"){if(T[A]!==C)return T[A]=C,!0}else{const D=Array.isArray(T[A])?T[A]:[T[A]],L=Array.isArray(C)?C:[C];for(let j=0;j<D.length;j++){const E=D[j];if(E.equals(L[j])===!1)return E.copy(L[j]),!0}}return!1}function v(y){const A=y.uniforms;let T=0;const C=16;let D=0;for(let L=0,j=A.length;L<j;L++){const E=A[L],R={boundary:0,storage:0},Z=Array.isArray(E.value)?E.value:[E.value];for(let fe=0,ue=Z.length;fe<ue;fe++){const I=Z[fe],k=x(I);R.boundary+=k.boundary,R.storage+=k.storage}if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=T,L>0){D=T%C;const fe=C-D;D!==0&&fe-R.boundary<0&&(T+=C-D,E.__offset=T)}T+=R.storage}return D=T%C,D>0&&(T+=C-D),y.__size=T,y.__cache={},this}function x(y){const A={boundary:0,storage:0};return typeof y=="number"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),A}function m(y){const A=y.target;A.removeEventListener("dispose",m);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Ku{constructor(e={}){const{canvas:t=cd(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const A=this;let T=!1,C=0,D=0,L=null,j=-1,E=null;const R=new gt,Z=new gt;let fe=null;const ue=new Je(0);let I=0,k=t.width,ee=t.height,V=1,te=null,J=null;const le=new gt(0,0,k,ee),N=new gt(0,0,k,ee);let W=!1;const ge=new ku;let xe=!1,Te=!1,Re=null;const F=new dt,ne=new Qe,se=new G,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return L===null?V:1}let g=i;function b(S,B){for(let X=0;X<S.length;X++){const H=S[X],q=t.getContext(H,B);if(q!==null)return q}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),g===null){const B=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&B.shift(),g=b(B,S),g===null)throw b(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let P,O,z,K,oe,Y,ae,re,Se,M,_,U,$,Q,ie,ve,he,Ae,Ue,Xe,de,Be,Pe,Ie;function De(){P=new Eg(g),O=new mg(g,P,e),P.init(O),Be=new sv(g,P,O),z=new iv(g,P,O),K=new Tg(g),oe=new k_,Y=new rv(g,P,z,oe,O,Be,K),ae=new _g(A),re=new Mg(A),Se=new Id(g,O),Pe=new dg(g,P,Se,O),M=new Sg(g,Se,K,Pe),_=new Cg(g,M,Se,K),Ue=new wg(g,O,Y),ve=new gg(oe),U=new V_(A,ae,re,P,O,Pe,ve),$=new uv(A,oe),Q=new X_,ie=new Z_(P,O),Ae=new hg(A,ae,re,z,_,h,l),he=new nv(A,_,O),Ie=new fv(g,K,O,z),Xe=new pg(g,P,K,O),de=new yg(g,P,K,O),K.programs=U.programs,A.capabilities=O,A.extensions=P,A.properties=oe,A.renderLists=Q,A.shadowMap=he,A.state=z,A.info=K}De();const w=new cv(A,g);this.xr=w,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const S=P.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=P.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(k,ee,!1))},this.getSize=function(S){return S.set(k,ee)},this.setSize=function(S,B,X=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,ee=B,t.width=Math.floor(S*V),t.height=Math.floor(B*V),X===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(k*V,ee*V).floor()},this.setDrawingBufferSize=function(S,B,X){k=S,ee=B,V=X,t.width=Math.floor(S*X),t.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,B,X,H){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,B,X,H),z.viewport(R.copy(le).multiplyScalar(V).floor())},this.getScissor=function(S){return S.copy(N)},this.setScissor=function(S,B,X,H){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,B,X,H),z.scissor(Z.copy(N).multiplyScalar(V).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(S){z.setScissorTest(W=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(S=!0,B=!0,X=!0){let H=0;if(S){let q=!1;if(L!==null){const we=L.texture.format;q=we===wu||we===Ru||we===bu}if(q){const we=L.texture.type,Le=we===Xn||we===Hn||we===Ma||we===fi||we===yu||we===Tu,Oe=Ae.getClearColor(),Fe=Ae.getClearAlpha(),qe=Oe.r,Ne=Oe.g,Ge=Oe.b;Le?(p[0]=qe,p[1]=Ne,p[2]=Ge,p[3]=Fe,g.clearBufferuiv(g.COLOR,0,p)):(v[0]=qe,v[1]=Ne,v[2]=Ge,v[3]=Fe,g.clearBufferiv(g.COLOR,0,v))}else H|=g.COLOR_BUFFER_BIT}B&&(H|=g.DEPTH_BUFFER_BIT),X&&(H|=g.STENCIL_BUFFER_BIT),g.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Q.dispose(),ie.dispose(),oe.dispose(),ae.dispose(),re.dispose(),_.dispose(),Pe.dispose(),Ie.dispose(),U.dispose(),w.dispose(),w.removeEventListener("sessionstart",et),w.removeEventListener("sessionend",on),Re&&(Re.dispose(),Re=null),yt.stop()};function me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=K.autoReset,B=he.enabled,X=he.autoUpdate,H=he.needsUpdate,q=he.type;De(),K.autoReset=S,he.enabled=B,he.autoUpdate=X,he.needsUpdate=H,he.type=q}function be(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Me(S){const B=S.target;B.removeEventListener("dispose",Me),ce(B)}function ce(S){Ce(S),oe.remove(S)}function Ce(S){const B=oe.get(S).programs;B!==void 0&&(B.forEach(function(X){U.releaseProgram(X)}),S.isShaderMaterial&&U.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,H,q,we){B===null&&(B=Ee);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Oe=oh(S,B,X,H,q);z.setMaterial(H,Le);let Fe=X.index,qe=1;if(H.wireframe===!0){if(Fe=M.getWireframeAttribute(X),Fe===void 0)return;qe=2}const Ne=X.drawRange,Ge=X.attributes.position;let it=Ne.start*qe,rt=(Ne.start+Ne.count)*qe;we!==null&&(it=Math.max(it,we.start*qe),rt=Math.min(rt,(we.start+we.count)*qe)),Fe!==null?(it=Math.max(it,0),rt=Math.min(rt,Fe.count)):Ge!=null&&(it=Math.max(it,0),rt=Math.min(rt,Ge.count));const Ht=rt-it;if(Ht<0||Ht===1/0)return;Pe.setup(q,H,Oe,X,Fe);let pn,ot=Xe;if(Fe!==null&&(pn=Se.get(Fe),ot=de,ot.setIndex(pn)),q.isMesh)H.wireframe===!0?(z.setLineWidth(H.wireframeLinewidth*ye()),ot.setMode(g.LINES)):ot.setMode(g.TRIANGLES);else if(q.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),z.setLineWidth(Ye*ye()),q.isLineSegments?ot.setMode(g.LINES):q.isLineLoop?ot.setMode(g.LINE_LOOP):ot.setMode(g.LINE_STRIP)}else q.isPoints?ot.setMode(g.POINTS):q.isSprite&&ot.setMode(g.TRIANGLES);if(q.isInstancedMesh)ot.renderInstances(it,Ht,q.count);else if(X.isInstancedBufferGeometry){const Ye=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ro=Math.min(X.instanceCount,Ye);ot.renderInstances(it,Ht,ro)}else ot.render(it,Ht)},this.compile=function(S,B){function X(H,q,we){H.transparent===!0&&H.side===yn&&H.forceSinglePass===!1?(H.side=Ut,H.needsUpdate=!0,Wr(H,q,we),H.side=jn,H.needsUpdate=!0,Wr(H,q,we),H.side=yn):Wr(H,q,we)}m=ie.get(S),m.init(),y.push(m),S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(A._useLegacyLights),S.traverse(function(H){const q=H.material;if(q)if(Array.isArray(q))for(let we=0;we<q.length;we++){const Le=q[we];X(Le,S,H)}else X(q,S,H)}),y.pop(),m=null};let He=null;function St(S){He&&He(S)}function et(){yt.stop()}function on(){yt.start()}const yt=new Wu;yt.setAnimationLoop(St),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(S){He=S,w.setAnimationLoop(S),S===null?yt.stop():yt.start()},w.addEventListener("sessionstart",et),w.addEventListener("sessionend",on),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),w.enabled===!0&&w.isPresenting===!0&&(w.cameraAutoUpdate===!0&&w.updateCamera(B),B=w.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,B,L),m=ie.get(S,y.length),m.init(),y.push(m),F.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ge.setFromProjectionMatrix(F),Te=this.localClippingEnabled,xe=ve.init(this.clippingPlanes,Te),x=Q.get(S,d.length),x.init(),d.push(x),$a(S,B,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(te,J),this.info.render.frame++,xe===!0&&ve.beginShadows();const X=m.state.shadowsArray;if(he.render(X,S,B),xe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(x,S),m.setupLights(A._useLegacyLights),B.isArrayCamera){const H=B.cameras;for(let q=0,we=H.length;q<we;q++){const Le=H[q];Za(x,S,Le,Le.viewport)}}else Za(x,S,B);L!==null&&(Y.updateMultisampleRenderTarget(L),Y.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(A,S,B),Pe.resetDefaultState(),j=-1,E=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function $a(S,B,X,H){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ge.intersectsSprite(S)){H&&se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(F);const Le=_.update(S),Oe=S.material;Oe.visible&&x.push(S,Le,Oe,X,se.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ge.intersectsObject(S))){const Le=_.update(S),Oe=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),se.copy(S.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),se.copy(Le.boundingSphere.center)),se.applyMatrix4(S.matrixWorld).applyMatrix4(F)),Array.isArray(Oe)){const Fe=Le.groups;for(let qe=0,Ne=Fe.length;qe<Ne;qe++){const Ge=Fe[qe],it=Oe[Ge.materialIndex];it&&it.visible&&x.push(S,Le,it,X,se.z,Ge)}}else Oe.visible&&x.push(S,Le,Oe,X,se.z,null)}}const we=S.children;for(let Le=0,Oe=we.length;Le<Oe;Le++)$a(we[Le],B,X,H)}function Za(S,B,X,H){const q=S.opaque,we=S.transmissive,Le=S.transparent;m.setupLightsView(X),xe===!0&&ve.setGlobalState(A.clippingPlanes,X),we.length>0&&sh(q,we,B,X),H&&z.viewport(R.copy(H)),q.length>0&&kr(q,B,X),we.length>0&&kr(we,B,X),Le.length>0&&kr(Le,B,X),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function sh(S,B,X,H){const q=O.isWebGL2;Re===null&&(Re=new vi(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Cr:Xn,minFilter:wr,samples:q?4:0})),A.getDrawingBufferSize(ne),q?Re.setSize(ne.x,ne.y):Re.setSize(ta(ne.x),ta(ne.y));const we=A.getRenderTarget();A.setRenderTarget(Re),A.getClearColor(ue),I=A.getClearAlpha(),I<1&&A.setClearColor(16777215,.5),A.clear();const Le=A.toneMapping;A.toneMapping=Wn,kr(S,X,H),Y.updateMultisampleRenderTarget(Re),Y.updateRenderTargetMipmap(Re);let Oe=!1;for(let Fe=0,qe=B.length;Fe<qe;Fe++){const Ne=B[Fe],Ge=Ne.object,it=Ne.geometry,rt=Ne.material,Ht=Ne.group;if(rt.side===yn&&Ge.layers.test(H.layers)){const pn=rt.side;rt.side=Ut,rt.needsUpdate=!0,Qa(Ge,X,H,it,rt,Ht),rt.side=pn,rt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Y.updateMultisampleRenderTarget(Re),Y.updateRenderTargetMipmap(Re)),A.setRenderTarget(we),A.setClearColor(ue,I),A.toneMapping=Le}function kr(S,B,X){const H=B.isScene===!0?B.overrideMaterial:null;for(let q=0,we=S.length;q<we;q++){const Le=S[q],Oe=Le.object,Fe=Le.geometry,qe=H===null?Le.material:H,Ne=Le.group;Oe.layers.test(X.layers)&&Qa(Oe,B,X,Fe,qe,Ne)}}function Qa(S,B,X,H,q,we){S.onBeforeRender(A,B,X,H,q,we),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(A,B,X,H,S,we),q.transparent===!0&&q.side===yn&&q.forceSinglePass===!1?(q.side=Ut,q.needsUpdate=!0,A.renderBufferDirect(X,B,H,q,S,we),q.side=jn,q.needsUpdate=!0,A.renderBufferDirect(X,B,H,q,S,we),q.side=yn):A.renderBufferDirect(X,B,H,q,S,we),S.onAfterRender(A,B,X,H,q,we)}function Wr(S,B,X){B.isScene!==!0&&(B=Ee);const H=oe.get(S),q=m.state.lights,we=m.state.shadowsArray,Le=q.state.version,Oe=U.getParameters(S,q.state,we,B,X),Fe=U.getProgramCacheKey(Oe);let qe=H.programs;H.environment=S.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(S.isMeshStandardMaterial?re:ae).get(S.envMap||H.environment),qe===void 0&&(S.addEventListener("dispose",Me),qe=new Map,H.programs=qe);let Ne=qe.get(Fe);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===Le)return Ja(S,Oe),Ne}else Oe.uniforms=U.getUniforms(S),S.onBuild(X,Oe,A),S.onBeforeCompile(Oe,A),Ne=U.acquireProgram(Oe,Fe),qe.set(Fe,Ne),H.uniforms=Oe.uniforms;const Ge=H.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=ve.uniform),Ja(S,Oe),H.needsLights=lh(S),H.lightsStateVersion=Le,H.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix);const it=Ne.getUniforms(),rt=Ms.seqWithValue(it.seq,Ge);return H.currentProgram=Ne,H.uniformsList=rt,Ne}function Ja(S,B){const X=oe.get(S);X.outputColorSpace=B.outputColorSpace,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function oh(S,B,X,H,q){B.isScene!==!0&&(B=Ee),Y.resetTextureUnits();const we=B.fog,Le=H.isMeshStandardMaterial?B.environment:null,Oe=L===null?A.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:wn,Fe=(H.isMeshStandardMaterial?re:ae).get(H.envMap||Le),qe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ne=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let Ht=Wn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ht=A.toneMapping);const pn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=pn!==void 0?pn.length:0,Ye=oe.get(H),ro=m.state.lights;if(xe===!0&&(Te===!0||S!==E)){const Ft=S===E&&H.id===j;ve.setState(H,S,Ft)}let at=!1;H.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ro.state.version||Ye.outputColorSpace!==Oe||q.isInstancedMesh&&Ye.instancing===!1||!q.isInstancedMesh&&Ye.instancing===!0||q.isSkinnedMesh&&Ye.skinning===!1||!q.isSkinnedMesh&&Ye.skinning===!0||q.isInstancedMesh&&Ye.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ye.instancingColor===!1&&q.instanceColor!==null||Ye.envMap!==Fe||H.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ve.numPlanes||Ye.numIntersection!==ve.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ne||Ye.morphTargets!==Ge||Ye.morphNormals!==it||Ye.morphColors!==rt||Ye.toneMapping!==Ht||O.isWebGL2===!0&&Ye.morphTargetsCount!==ot)&&(at=!0):(at=!0,Ye.__version=H.version);let $n=Ye.currentProgram;at===!0&&($n=Wr(H,B,q));let el=!1,cr=!1,so=!1;const Tt=$n.getUniforms(),Zn=Ye.uniforms;if(z.useProgram($n.program)&&(el=!0,cr=!0,so=!0),H.id!==j&&(j=H.id,cr=!0),el||E!==S){Tt.setValue(g,"projectionMatrix",S.projectionMatrix),Tt.setValue(g,"viewMatrix",S.matrixWorldInverse);const Ft=Tt.map.cameraPosition;Ft!==void 0&&Ft.setValue(g,se.setFromMatrixPosition(S.matrixWorld)),O.logarithmicDepthBuffer&&Tt.setValue(g,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(g,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,cr=!0,so=!0)}if(q.isSkinnedMesh){Tt.setOptional(g,q,"bindMatrix"),Tt.setOptional(g,q,"bindMatrixInverse");const Ft=q.skeleton;Ft&&(O.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),Tt.setValue(g,"boneTexture",Ft.boneTexture,Y),Tt.setValue(g,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oo=X.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&O.isWebGL2===!0)&&Ue.update(q,X,$n),(cr||Ye.receiveShadow!==q.receiveShadow)&&(Ye.receiveShadow=q.receiveShadow,Tt.setValue(g,"receiveShadow",q.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Zn.envMap.value=Fe,Zn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),cr&&(Tt.setValue(g,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&ah(Zn,so),we&&H.fog===!0&&$.refreshFogUniforms(Zn,we),$.refreshMaterialUniforms(Zn,H,V,ee,Re),Ms.upload(g,Ye.uniformsList,Zn,Y)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ms.upload(g,Ye.uniformsList,Zn,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(g,"center",q.center),Tt.setValue(g,"modelViewMatrix",q.modelViewMatrix),Tt.setValue(g,"normalMatrix",q.normalMatrix),Tt.setValue(g,"modelMatrix",q.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ft=H.uniformsGroups;for(let ao=0,ch=Ft.length;ao<ch;ao++)if(O.isWebGL2){const tl=Ft[ao];Ie.update(tl,$n),Ie.bind(tl,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function ah(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function lh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,B,X){oe.get(S.texture).__webglTexture=B,oe.get(S.depthTexture).__webglTexture=X;const H=oe.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=X===void 0,H.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const X=oe.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,X=0){L=S,C=B,D=X;let H=!0,q=null,we=!1,Le=!1;if(S){const Fe=oe.get(S);Fe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(g.FRAMEBUFFER,null),H=!1):Fe.__webglFramebuffer===void 0?Y.setupRenderTarget(S):Fe.__hasExternalTextures&&Y.rebindTextures(S,oe.get(S.texture).__webglTexture,oe.get(S.depthTexture).__webglTexture);const qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ne=oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?q=Ne[B][X]:q=Ne[B],we=!0):O.isWebGL2&&S.samples>0&&Y.useMultisampledRTT(S)===!1?q=oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[X]:q=Ne,R.copy(S.viewport),Z.copy(S.scissor),fe=S.scissorTest}else R.copy(le).multiplyScalar(V).floor(),Z.copy(N).multiplyScalar(V).floor(),fe=W;if(z.bindFramebuffer(g.FRAMEBUFFER,q)&&O.drawBuffers&&H&&z.drawBuffers(S,q),z.viewport(R),z.scissor(Z),z.setScissorTest(fe),we){const Fe=oe.get(S.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,X)}else if(Le){const Fe=oe.get(S.texture),qe=B||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Fe.__webglTexture,X||0,qe)}j=-1},this.readRenderTargetPixels=function(S,B,X,H,q,we,Le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){z.bindFramebuffer(g.FRAMEBUFFER,Oe);try{const Fe=S.texture,qe=Fe.format,Ne=Fe.type;if(qe!==$t&&Be.convert(qe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ne===Cr&&(P.has("EXT_color_buffer_half_float")||O.isWebGL2&&P.has("EXT_color_buffer_float"));if(Ne!==Xn&&Be.convert(Ne)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Gn&&(O.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-H&&X>=0&&X<=S.height-q&&g.readPixels(B,X,H,q,Be.convert(qe),Be.convert(Ne),we)}finally{const Fe=L!==null?oe.get(L).__webglFramebuffer:null;z.bindFramebuffer(g.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(S,B,X=0){const H=Math.pow(2,-X),q=Math.floor(B.image.width*H),we=Math.floor(B.image.height*H);Y.setTexture2D(B,0),g.copyTexSubImage2D(g.TEXTURE_2D,X,0,0,S.x,S.y,q,we),z.unbindTexture()},this.copyTextureToTexture=function(S,B,X,H=0){const q=B.image.width,we=B.image.height,Le=Be.convert(X.format),Oe=Be.convert(X.type);Y.setTexture2D(X,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,X.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,H,S.x,S.y,q,we,Le,Oe,B.image.data):B.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,H,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Le,B.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,H,S.x,S.y,Le,Oe,B.image),H===0&&X.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(S,B,X,H,q=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=S.max.x-S.min.x+1,Le=S.max.y-S.min.y+1,Oe=S.max.z-S.min.z+1,Fe=Be.convert(H.format),qe=Be.convert(H.type);let Ne;if(H.isData3DTexture)Y.setTexture3D(H,0),Ne=g.TEXTURE_3D;else if(H.isDataArrayTexture)Y.setTexture2DArray(H,0),Ne=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,H.unpackAlignment);const Ge=g.getParameter(g.UNPACK_ROW_LENGTH),it=g.getParameter(g.UNPACK_IMAGE_HEIGHT),rt=g.getParameter(g.UNPACK_SKIP_PIXELS),Ht=g.getParameter(g.UNPACK_SKIP_ROWS),pn=g.getParameter(g.UNPACK_SKIP_IMAGES),ot=X.isCompressedTexture?X.mipmaps[0]:X.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,ot.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ot.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,S.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,S.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?g.texSubImage3D(Ne,q,B.x,B.y,B.z,we,Le,Oe,Fe,qe,ot.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Ne,q,B.x,B.y,B.z,we,Le,Oe,Fe,ot.data)):g.texSubImage3D(Ne,q,B.x,B.y,B.z,we,Le,Oe,Fe,qe,ot),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ge),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,it),g.pixelStorei(g.UNPACK_SKIP_PIXELS,rt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ht),g.pixelStorei(g.UNPACK_SKIP_IMAGES,pn),q===0&&H.generateMipmaps&&g.generateMipmap(Ne),z.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),z.unbindTexture()},this.resetState=function(){C=0,D=0,L=null,z.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ea?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Hs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?di:Cu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===di?pt:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hv extends Ku{}hv.prototype.isWebGL1Renderer=!0;class dv extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $u extends Gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mc=new dt,ia=new Iu,ds=new Gs,ps=new G;class pv extends Nt{constructor(e=new Cn,t=new $u){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere),ds.applyMatrix4(r),ds.radius+=s,e.ray.intersectsSphere(ds)===!1)return;Mc.copy(r).invert(),ia.copy(e.ray).applyMatrix4(Mc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,x=p;v<x;v++){const m=c.getX(v);ps.fromBufferAttribute(f,m),Ec(ps,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=h,x=p;v<x;v++)ps.fromBufferAttribute(f,v),Ec(ps,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ec(n,e,t,i,r,s,a){const o=ia.distanceSqToPoint(n);if(o<t){const l=new G;ia.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}const Sc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mv{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const gv=new mv;class Ta{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";class _v extends Ta{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Sc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Pr("img");function l(){u(),Sc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class vv extends Ta{constructor(e){super(e)}load(e,t,i,r){const s=new It,a=new _v(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);let ai=window.innerWidth,li=window.innerHeight,xv=document.querySelector(".webgl"),ba,Lr,Qi,Ds;function Av(){ba=new dv,Lr=new kt(75,ai/li,.1,1e3),new vv,Qi=new Ku({canvas:xv}),Lr.position.z=5,Qi.setSize(ai,li)}function Mv(n){const e=new Cn,t=new $u({color:16777215,size:.005});Ds=new pv(e,t);const i=new Float32Array(n*3);for(let r=0;r<n*3;r++)i[r]=(Math.random()-.5)*10;e.setAttribute("position",new tn(i,3)),ba.add(Ds)}function Ev(){document.onresize=function(){ai=window.innerWidth,li=window.innerHeight,Qi.setSize(ai,li)},window.addEventListener("resize",()=>{ai=window.innerWidth,li=window.innerHeight,Lr.aspect=ai/li,Lr.updateProjectionMatrix(),Qi.setSize(ai,li)})}const Zu=()=>{requestAnimationFrame(Zu),Ds.rotation.x+=.001,Ds.rotation.y+=.001,Qi.render(ba,Lr)};Av();Mv(5e3);Ev();Qi.setClearColor(855052);Zu();function Ra(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const nt={},Xi=[],nn=()=>{},Sv=()=>!1,Ws=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wa=n=>n.startsWith("onUpdate:"),_t=Object.assign,Ca=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},yv=Object.prototype.hasOwnProperty,je=(n,e)=>yv.call(n,e),ze=Array.isArray,Sr=n=>qs(n)==="[object Map]",Tv=n=>qs(n)==="[object Set]",ke=n=>typeof n=="function",vt=n=>typeof n=="string",Xs=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Qu=n=>(st(n)||ke(n))&&ke(n.then)&&ke(n.catch),bv=Object.prototype.toString,qs=n=>bv.call(n),Rv=n=>qs(n).slice(8,-1),wv=n=>qs(n)==="[object Object]",Pa=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Es=Ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ys=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Cv=/-(\w)/g,dn=Ys(n=>n.replace(Cv,(e,t)=>t?t.toUpperCase():"")),Pv=/\B([A-Z])/g,or=Ys(n=>n.replace(Pv,"-$1").toLowerCase()),js=Ys(n=>n.charAt(0).toUpperCase()+n.slice(1)),zo=Ys(n=>n?`on${js(n)}`:""),Ai=(n,e)=>!Object.is(n,e),Ho=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Us=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Lv=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let yc;const ra=()=>yc||(yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function La(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?Nv(i):La(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||st(n))return n}const Dv=/;(?![^(]*\))/g,Uv=/:([^]+)/,Iv=/\/\*[^]*?\*\//g;function Nv(n){const e={};return n.replace(Iv,"").split(Dv).forEach(t=>{if(t){const i=t.split(Uv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Da(n){let e="";if(vt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=Da(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ov="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fv=Ra(Ov);function Ju(n){return!!n||n===""}let Yt;class Bv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function zv(n,e=Yt){e&&e.active&&e.effects.push(n)}function Hv(){return Yt}const Ua=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ef=n=>(n.w&Kn)>0,tf=n=>(n.n&Kn)>0,Gv=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Kn},Vv=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];ef(r)&&!tf(r)?r.delete(n):e[t++]=r,r.w&=~Kn,r.n&=~Kn}e.length=t}},sa=new WeakMap;let vr=0,Kn=1;const oa=30;let Zt;const mi=Symbol(""),aa=Symbol("");class Ia{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,zv(this,i)}run(){if(!this.active)return this.fn();let e=Zt,t=qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,qn=!0,Kn=1<<++vr,vr<=oa?Gv(this):Tc(this),this.fn()}finally{vr<=oa&&Vv(this),Kn=1<<--vr,Zt=this.parent,qn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(Tc(this),this.onStop&&this.onStop(),this.active=!1)}}function Tc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let qn=!0;const nf=[];function ar(){nf.push(qn),qn=!1}function lr(){const n=nf.pop();qn=n===void 0?!0:n}function Ot(n,e,t){if(qn&&Zt){let i=sa.get(n);i||sa.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Ua()),rf(r)}}function rf(n,e){let t=!1;vr<=oa?tf(n)||(n.n|=Kn,t=!ef(n)):t=!n.has(Zt),t&&(n.add(Zt),Zt.deps.push(n))}function bn(n,e,t,i,r,s){const a=sa.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&ze(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!Xs(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":ze(n)?Pa(t)&&o.push(a.get("length")):(o.push(a.get(mi)),Sr(n)&&o.push(a.get(aa)));break;case"delete":ze(n)||(o.push(a.get(mi)),Sr(n)&&o.push(a.get(aa)));break;case"set":Sr(n)&&o.push(a.get(mi));break}if(o.length===1)o[0]&&la(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);la(Ua(l))}}function la(n,e){const t=ze(n)?n:[...n];for(const i of t)i.computed&&bc(i);for(const i of t)i.computed||bc(i)}function bc(n,e){(n!==Zt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kv=Ra("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xs)),Rc=Wv();function Wv(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let s=0,a=this.length;s<a;s++)Ot(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ar();const i=Ke(this)[e].apply(this,t);return lr(),i}}),n}function Xv(n){const e=Ke(this);return Ot(e,"has",n),e.hasOwnProperty(n)}class of{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw"&&i===(r?s?rx:uf:s?cf:lf).get(e))return e;const a=ze(e);if(!r){if(a&&je(Rc,t))return Reflect.get(Rc,t,i);if(t==="hasOwnProperty")return Xv}const o=Reflect.get(e,t,i);return(Xs(t)?sf.has(t):kv(t))||(r||Ot(e,"get",t),s)?o:Et(o)?a&&Pa(t)?o:o.value:st(o)?r?hf(o):$s(o):o}}class af extends of{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(Ji(s)&&Et(s)&&!Et(i))return!1;if(!this._shallow&&(!Is(i)&&!Ji(i)&&(s=Ke(s),i=Ke(i)),!ze(e)&&Et(s)&&!Et(i)))return s.value=i,!0;const a=ze(e)&&Pa(t)?Number(t)<e.length:je(e,t),o=Reflect.set(e,t,i,r);return e===Ke(r)&&(a?Ai(i,s)&&bn(e,"set",t,i):bn(e,"add",t,i)),o}deleteProperty(e,t){const i=je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Xs(t)||!sf.has(t))&&Ot(e,"has",t),i}ownKeys(e){return Ot(e,"iterate",ze(e)?"length":mi),Reflect.ownKeys(e)}}class qv extends of{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yv=new af,jv=new qv,Kv=new af(!0),Na=n=>n,Ks=n=>Reflect.getPrototypeOf(n);function ms(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ke(n),s=Ke(e);t||(Ai(e,s)&&Ot(r,"get",e),Ot(r,"get",s));const{has:a}=Ks(r),o=i?Na:t?Ba:Dr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function gs(n,e=!1){const t=this.__v_raw,i=Ke(t),r=Ke(n);return e||(Ai(n,r)&&Ot(i,"has",n),Ot(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function _s(n,e=!1){return n=n.__v_raw,!e&&Ot(Ke(n),"iterate",mi),Reflect.get(n,"size",n)}function wc(n){n=Ke(n);const e=Ke(this);return Ks(e).has.call(e,n)||(e.add(n),bn(e,"add",n,n)),this}function Cc(n,e){e=Ke(e);const t=Ke(this),{has:i,get:r}=Ks(t);let s=i.call(t,n);s||(n=Ke(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Ai(e,a)&&bn(t,"set",n,e):bn(t,"add",n,e),this}function Pc(n){const e=Ke(this),{has:t,get:i}=Ks(e);let r=t.call(e,n);r||(n=Ke(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&bn(e,"delete",n,void 0),s}function Lc(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&bn(n,"clear",void 0,void 0),t}function vs(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Ke(a),l=e?Na:n?Ba:Dr;return!n&&Ot(o,"iterate",mi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function xs(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),a=Sr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Na:e?Ba:Dr;return!e&&Ot(s,"iterate",l?aa:mi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function On(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function $v(){const n={get(s){return ms(this,s)},get size(){return _s(this)},has:gs,add:wc,set:Cc,delete:Pc,clear:Lc,forEach:vs(!1,!1)},e={get(s){return ms(this,s,!1,!0)},get size(){return _s(this)},has:gs,add:wc,set:Cc,delete:Pc,clear:Lc,forEach:vs(!1,!0)},t={get(s){return ms(this,s,!0)},get size(){return _s(this,!0)},has(s){return gs.call(this,s,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:vs(!0,!1)},i={get(s){return ms(this,s,!0,!0)},get size(){return _s(this,!0)},has(s){return gs.call(this,s,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:vs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xs(s,!1,!1),t[s]=xs(s,!0,!1),e[s]=xs(s,!1,!0),i[s]=xs(s,!0,!0)}),[n,t,e,i]}const[Zv,Qv,Jv,ex]=$v();function Oa(n,e){const t=e?n?ex:Jv:n?Qv:Zv;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const tx={get:Oa(!1,!1)},nx={get:Oa(!1,!0)},ix={get:Oa(!0,!1)},lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,rx=new WeakMap;function sx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ox(n){return n.__v_skip||!Object.isExtensible(n)?0:sx(Rv(n))}function $s(n){return Ji(n)?n:Fa(n,!1,Yv,tx,lf)}function ff(n){return Fa(n,!1,Kv,nx,cf)}function hf(n){return Fa(n,!0,jv,ix,uf)}function Fa(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=ox(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function qi(n){return Ji(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ji(n){return!!(n&&n.__v_isReadonly)}function Is(n){return!!(n&&n.__v_isShallow)}function df(n){return qi(n)||Ji(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function pf(n){return Us(n,"__v_skip",!0),n}const Dr=n=>st(n)?$s(n):n,Ba=n=>st(n)?hf(n):n;function mf(n){qn&&Zt&&(n=Ke(n),rf(n.dep||(n.dep=Ua())))}function gf(n,e){n=Ke(n);const t=n.dep;t&&la(t)}function Et(n){return!!(n&&n.__v_isRef===!0)}function ax(n){return _f(n,!1)}function lx(n){return _f(n,!0)}function _f(n,e){return Et(n)?n:new cx(n,e)}class cx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Dr(e)}get value(){return mf(this),this._value}set value(e){const t=this.__v_isShallow||Is(e)||Ji(e);e=t?e:Ke(e),Ai(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Dr(e),gf(this))}}function gi(n){return Et(n)?n.value:n}const ux={get:(n,e,t)=>gi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Et(r)&&!Et(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function vf(n){return qi(n)?n:new Proxy(n,ux)}class fx{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ia(e,()=>{this._dirty||(this._dirty=!0,gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ke(this);return mf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hx(n,e,t=!1){let i,r;const s=ke(n);return s?(i=n,r=nn):(i=n.get,r=n.set),new fx(i,r,s||!r,t)}function Yn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Zs(s,e,t)}return r}function rn(n,e,t,i){if(ke(n)){const s=Yn(n,e,t,i);return s&&Qu(s)&&s.catch(a=>{Zs(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(rn(n[s],e,t,i));return r}function Zs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Yn(l,null,10,[n,a,o]);return}}dx(n,t,r,i)}function dx(n,e,t,i=!0){console.error(n)}let Ur=!1,ca=!1;const Mt=[];let hn=0;const Yi=[];let Sn=null,ci=0;const xf=Promise.resolve();let za=null;function Af(n){const e=za||xf;return n?e.then(this?n.bind(this):n):e}function px(n){let e=hn+1,t=Mt.length;for(;e<t;){const i=e+t>>>1,r=Mt[i],s=Ir(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Ha(n){(!Mt.length||!Mt.includes(n,Ur&&n.allowRecurse?hn+1:hn))&&(n.id==null?Mt.push(n):Mt.splice(px(n.id),0,n),Mf())}function Mf(){!Ur&&!ca&&(ca=!0,za=xf.then(Sf))}function mx(n){const e=Mt.indexOf(n);e>hn&&Mt.splice(e,1)}function gx(n){ze(n)?Yi.push(...n):(!Sn||!Sn.includes(n,n.allowRecurse?ci+1:ci))&&Yi.push(n),Mf()}function Dc(n,e=Ur?hn+1:0){for(;e<Mt.length;e++){const t=Mt[e];t&&t.pre&&(Mt.splice(e,1),e--,t())}}function Ef(n){if(Yi.length){const e=[...new Set(Yi)];if(Yi.length=0,Sn){Sn.push(...e);return}for(Sn=e,Sn.sort((t,i)=>Ir(t)-Ir(i)),ci=0;ci<Sn.length;ci++)Sn[ci]();Sn=null,ci=0}}const Ir=n=>n.id==null?1/0:n.id,_x=(n,e)=>{const t=Ir(n)-Ir(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Sf(n){ca=!1,Ur=!0,Mt.sort(_x);const e=nn;try{for(hn=0;hn<Mt.length;hn++){const t=Mt[hn];t&&t.active!==!1&&Yn(t,null,14)}}finally{hn=0,Mt.length=0,Ef(),Ur=!1,za=null,(Mt.length||Yi.length)&&Sf()}}function vx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||nt;h&&(r=t.map(p=>vt(p)?p.trim():p)),f&&(r=t.map(Lv))}let o,l=i[o=zo(e)]||i[o=zo(dn(e))];!l&&s&&(l=i[o=zo(or(e))]),l&&rn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,rn(c,n,6,r)}}function yf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ke(n)){const l=c=>{const u=yf(c,e,!0);u&&(o=!0,_t(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(st(n)&&i.set(n,null),null):(ze(s)?s.forEach(l=>a[l]=null):_t(a,s),st(n)&&i.set(n,a),a)}function Qs(n,e){return!n||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,or(e))||je(n,e))}let Jt=null,Tf=null;function Ns(n){const e=Jt;return Jt=n,Tf=n&&n.type.__scopeId||null,e}function xr(n,e=Jt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&kc(-1);const s=Ns(e);let a;try{a=n(...r)}finally{Ns(s),i._d&&kc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Go(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:v,inheritAttrs:x}=n;let m,d;const y=Ns(n);try{if(t.shapeFlag&4){const T=r||i,C=T;m=fn(u.call(C,T,f,s,p,h,v)),d=l}else{const T=e;m=fn(T.length>1?T(s,{attrs:l,slots:o,emit:c}):T(s,null)),d=e.props?l:xx(l)}}catch(T){Tr.length=0,Zs(T,n,1),m=ct(Mi)}let A=m;if(d&&x!==!1){const T=Object.keys(d),{shapeFlag:C}=A;T.length&&C&7&&(a&&T.some(wa)&&(d=Ax(d,a)),A=er(A,d))}return t.dirs&&(A=er(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),m=A,Ns(y),m}const xx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ws(t))&&((e||(e={}))[t]=n[t]);return e},Ax=(n,e)=>{const t={};for(const i in n)(!wa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mx(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Qs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Uc(i,a,c):!0:!!a;return!1}function Uc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Qs(t,s))return!0}return!1}function Ex({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const bf="components";function Sx(n,e){return Tx(bf,n,!0,e)||n}const yx=Symbol.for("v-ndc");function Tx(n,e,t=!0,i=!1){const r=Jt||mt;if(r){const s=r.type;if(n===bf){const o=v0(s,!1);if(o&&(o===e||o===dn(e)||o===js(dn(e))))return s}const a=Ic(r[n]||s[n],e)||Ic(r.appContext[n],e);return!a&&i?s:a}}function Ic(n,e){return n&&(n[e]||n[dn(e)]||n[js(dn(e))])}const bx=n=>n.__isSuspense;function Rx(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):gx(n)}const As={};function Ss(n,e,t){return Rf(n,e,t)}function Rf(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=nt){var o;const l=Hv()===((o=mt)==null?void 0:o.scope)?mt:null;let c,u=!1,f=!1;if(Et(n)?(c=()=>n.value,u=Is(n)):qi(n)?(c=()=>n,i=!0):ze(n)?(f=!0,u=n.some(T=>qi(T)||Is(T)),c=()=>n.map(T=>{if(Et(T))return T.value;if(qi(T))return Vi(T);if(ke(T))return Yn(T,l,2)})):ke(n)?e?c=()=>Yn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),rn(n,l,3,[p])}:c=nn,e&&i){const T=c;c=()=>Vi(T())}let h,p=T=>{h=y.onStop=()=>{Yn(T,l,4),h=y.onStop=void 0}},v;if(Or)if(p=nn,e?t&&rn(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const T=M0();v=T.__watcherHandles||(T.__watcherHandles=[])}else return nn;let x=f?new Array(n.length).fill(As):As;const m=()=>{if(y.active)if(e){const T=y.run();(i||u||(f?T.some((C,D)=>Ai(C,x[D])):Ai(T,x)))&&(h&&h(),rn(e,l,3,[T,x===As?void 0:f&&x[0]===As?[]:x,p]),x=T)}else y.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>Lt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Ha(m));const y=new Ia(c,d);e?t?m():x=y.run():r==="post"?Lt(y.run.bind(y),l&&l.suspense):y.run();const A=()=>{y.stop(),l&&l.scope&&Ca(l.scope.effects,y)};return v&&v.push(A),A}function wx(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?wf(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const a=mt;tr(this);const o=Rf(r,s.bind(i),t);return a?tr(a):_i(),o}function wf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Vi(n,e){if(!st(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Et(n))Vi(n.value,e);else if(ze(n))for(let t=0;t<n.length;t++)Vi(n[t],e);else if(Tv(n)||Sr(n))n.forEach(t=>{Vi(t,e)});else if(wv(n))for(const t in n)Vi(n[t],e);return n}function ni(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ar(),rn(l,t,8,[n.el,o,n,e]),lr())}}/*! #__NO_SIDE_EFFECTS__ */function Ga(n,e){return ke(n)?(()=>_t({name:n.name},e,{setup:n}))():n}const ys=n=>!!n.type.__asyncLoader,Cf=n=>n.type.__isKeepAlive;function Cx(n,e){Pf(n,"a",e)}function Px(n,e){Pf(n,"da",e)}function Pf(n,e,t=mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Js(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Cf(r.parent.vnode)&&Lx(i,e,t,r),r=r.parent}}function Lx(n,e,t,i){const r=Js(e,n,i,!0);Lf(()=>{Ca(i[e],r)},t)}function Js(n,e,t=mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ar(),tr(t);const o=rn(e,t,n,a);return _i(),lr(),o});return i?r.unshift(s):r.push(s),s}}const Pn=n=>(e,t=mt)=>(!Or||n==="sp")&&Js(n,(...i)=>e(...i),t),Dx=Pn("bm"),Ux=Pn("m"),Ix=Pn("bu"),Nx=Pn("u"),Ox=Pn("bum"),Lf=Pn("um"),Fx=Pn("sp"),Bx=Pn("rtg"),zx=Pn("rtc");function Hx(n,e=mt){Js("ec",n,e)}const ua=n=>n?Vf(n)?Ya(n)||n.proxy:ua(n.parent):null,yr=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ua(n.parent),$root:n=>ua(n.root),$emit:n=>n.emit,$options:n=>Va(n),$forceUpdate:n=>n.f||(n.f=()=>Ha(n.update)),$nextTick:n=>n.n||(n.n=Af.bind(n.proxy)),$watch:n=>wx.bind(n)}),Vo=(n,e)=>n!==nt&&!n.__isScriptSetup&&je(n,e),Gx={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Vo(i,e))return a[e]=1,i[e];if(r!==nt&&je(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return a[e]=3,s[e];if(t!==nt&&je(t,e))return a[e]=4,t[e];fa&&(a[e]=0)}}const u=yr[e];let f,h;if(u)return e==="$attrs"&&Ot(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==nt&&je(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Vo(r,e)?(r[e]=t,!0):i!==nt&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==nt&&je(n,a)||Vo(e,a)||(o=s[0])&&je(o,a)||je(i,a)||je(yr,a)||je(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Nc(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let fa=!0;function Vx(n){const e=Va(n),t=n.proxy,i=n.ctx;fa=!1,e.beforeCreate&&Oc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:A,unmounted:T,render:C,renderTracked:D,renderTriggered:L,errorCaptured:j,serverPrefetch:E,expose:R,inheritAttrs:Z,components:fe,directives:ue,filters:I}=e;if(c&&kx(c,i,null),a)for(const V in a){const te=a[V];ke(te)&&(i[V]=te.bind(t))}if(r){const V=r.call(t,t);st(V)&&(n.data=$s(V))}if(fa=!0,s)for(const V in s){const te=s[V],J=ke(te)?te.bind(t,t):ke(te.get)?te.get.bind(t,t):nn,le=!ke(te)&&ke(te.set)?te.set.bind(t):nn,N=Qt({get:J,set:le});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>N.value,set:W=>N.value=W})}if(o)for(const V in o)Df(o[V],i,t,V);if(l){const V=ke(l)?l.call(t):l;Reflect.ownKeys(V).forEach(te=>{Ts(te,V[te])})}u&&Oc(u,n,"c");function ee(V,te){ze(te)?te.forEach(J=>V(J.bind(t))):te&&V(te.bind(t))}if(ee(Dx,f),ee(Ux,h),ee(Ix,p),ee(Nx,v),ee(Cx,x),ee(Px,m),ee(Hx,j),ee(zx,D),ee(Bx,L),ee(Ox,y),ee(Lf,T),ee(Fx,E),ze(R))if(R.length){const V=n.exposed||(n.exposed={});R.forEach(te=>{Object.defineProperty(V,te,{get:()=>t[te],set:J=>t[te]=J})})}else n.exposed||(n.exposed={});C&&n.render===nn&&(n.render=C),Z!=null&&(n.inheritAttrs=Z),fe&&(n.components=fe),ue&&(n.directives=ue)}function kx(n,e,t=nn){ze(n)&&(n=ha(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=Rn(r.from||i,r.default,!0):s=Rn(r.from||i):s=Rn(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Oc(n,e,t){rn(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Df(n,e,t,i){const r=i.includes(".")?wf(t,i):()=>t[i];if(vt(n)){const s=e[n];ke(s)&&Ss(r,s)}else if(ke(n))Ss(r,n.bind(t));else if(st(n))if(ze(n))n.forEach(s=>Df(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&Ss(r,s,n)}}function Va(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Os(l,c,a,!0)),Os(l,e,a)),st(e)&&s.set(e,l),l}function Os(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Os(n,s,t,!0),r&&r.forEach(a=>Os(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Wx[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Wx={data:Fc,props:Bc,emits:Bc,methods:Ar,computed:Ar,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ar,directives:Ar,watch:qx,provide:Fc,inject:Xx};function Fc(n,e){return e?n?function(){return _t(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Xx(n,e){return Ar(ha(n),ha(e))}function ha(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ar(n,e){return n?_t(Object.create(null),n,e):e}function Bc(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:_t(Object.create(null),Nc(n),Nc(e??{})):e}function qx(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function Uf(){return{app:null,config:{isNativeTag:Sv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yx=0;function jx(n,e){return function(i,r=null){ke(i)||(i=_t({},i)),r!=null&&!st(r)&&(r=null);const s=Uf(),a=new WeakSet;let o=!1;const l=s.app={_uid:Yx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:E0,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(l,...u)):ke(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=ct(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Ya(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Fs=l;try{return c()}finally{Fs=null}}};return l}}let Fs=null;function Ts(n,e){if(mt){let t=mt.provides;const i=mt.parent&&mt.parent.provides;i===t&&(t=mt.provides=Object.create(i)),t[n]=e}}function Rn(n,e,t=!1){const i=mt||Jt;if(i||Fs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Fs._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}function Kx(n,e,t,i=!1){const r={},s={};Us(s,no,1),n.propsDefaults=Object.create(null),If(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:ff(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function $x(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ke(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Qs(n.emitsOptions,h))continue;const p=e[h];if(l)if(je(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=dn(h);r[v]=da(l,o,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{If(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!je(e,f)&&((u=or(f))===f||!je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=da(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!je(e,f))&&(delete s[f],c=!0)}c&&bn(n,"set","$attrs")}function If(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Es(l))continue;const c=e[l];let u;r&&je(r,u=dn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Qs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ke(t),c=o||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=da(r,l,f,c[f],n,!je(c,f))}}return a}function da(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(tr(r),i=c[t]=l.call(null,e),_i())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===or(t))&&(i=!0))}return i}function Nf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[h,p]=Nf(f,e,!0);_t(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,Xi),Xi;if(ze(s))for(let u=0;u<s.length;u++){const f=dn(s[u]);zc(f)&&(a[f]=nt)}else if(s)for(const u in s){const f=dn(u);if(zc(f)){const h=s[u],p=a[f]=ze(h)||ke(h)?{type:h}:_t({},h);if(p){const v=Vc(Boolean,p.type),x=Vc(String,p.type);p[0]=v>-1,p[1]=x<0||v<x,(v>-1||je(p,"default"))&&o.push(f)}}}const c=[a,o];return st(n)&&i.set(n,c),c}function zc(n){return n[0]!=="$"}function Hc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Gc(n,e){return Hc(n)===Hc(e)}function Vc(n,e){return ze(e)?e.findIndex(t=>Gc(t,n)):ke(e)&&Gc(e,n)?0:-1}const Of=n=>n[0]==="_"||n==="$stable",ka=n=>ze(n)?n.map(fn):[fn(n)],Zx=(n,e,t)=>{if(e._n)return e;const i=xr((...r)=>ka(e(...r)),t);return i._c=!1,i},Ff=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Of(r))continue;const s=n[r];if(ke(s))e[r]=Zx(r,s,i);else if(s!=null){const a=ka(s);e[r]=()=>a}}},Bf=(n,e)=>{const t=ka(e);n.slots.default=()=>t},Qx=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),Us(e,"_",t)):Ff(e,n.slots={})}else n.slots={},e&&Bf(n,e);Us(n.slots,no,1)},Jx=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(_t(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Ff(e,r)),a=e}else e&&(Bf(n,e),a={default:1});if(s)for(const o in r)!Of(o)&&a[o]==null&&delete r[o]};function pa(n,e,t,i,r=!1){if(ze(n)){n.forEach((h,p)=>pa(h,e&&(ze(e)?e[p]:e),t,i,r));return}if(ys(i)&&!r)return;const s=i.shapeFlag&4?Ya(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,je(f,c)&&(f[c]=null)):Et(c)&&(c.value=null)),ke(l))Yn(l,o,12,[a,u]);else{const h=vt(l),p=Et(l);if(h||p){const v=()=>{if(n.f){const x=h?je(f,l)?f[l]:u[l]:l.value;r?ze(x)&&Ca(x,s):ze(x)?x.includes(s)||x.push(s):h?(u[l]=[s],je(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,je(f,l)&&(f[l]=a)):p&&(l.value=a,n.k&&(u[n.k]=a))};a?(v.id=-1,Lt(v,t)):v()}}}const Lt=Rx;function e0(n){return t0(n)}function t0(n,e){const t=ra();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=nn,insertStaticContent:v}=n,x=(g,b,P,O=null,z=null,K=null,oe=!1,Y=null,ae=!!b.dynamicChildren)=>{if(g===b)return;g&&!mr(g,b)&&(O=F(g),W(g,z,K,!0),g=null),b.patchFlag===-2&&(ae=!1,b.dynamicChildren=null);const{type:re,ref:Se,shapeFlag:M}=b;switch(re){case eo:m(g,b,P,O);break;case Mi:d(g,b,P,O);break;case bs:g==null&&y(b,P,O,oe);break;case un:fe(g,b,P,O,z,K,oe,Y,ae);break;default:M&1?C(g,b,P,O,z,K,oe,Y,ae):M&6?ue(g,b,P,O,z,K,oe,Y,ae):(M&64||M&128)&&re.process(g,b,P,O,z,K,oe,Y,ae,se)}Se!=null&&z&&pa(Se,g&&g.ref,K,b||g,!b)},m=(g,b,P,O)=>{if(g==null)i(b.el=o(b.children),P,O);else{const z=b.el=g.el;b.children!==g.children&&c(z,b.children)}},d=(g,b,P,O)=>{g==null?i(b.el=l(b.children||""),P,O):b.el=g.el},y=(g,b,P,O)=>{[g.el,g.anchor]=v(g.children,b,P,O,g.el,g.anchor)},A=({el:g,anchor:b},P,O)=>{let z;for(;g&&g!==b;)z=h(g),i(g,P,O),g=z;i(b,P,O)},T=({el:g,anchor:b})=>{let P;for(;g&&g!==b;)P=h(g),r(g),g=P;r(b)},C=(g,b,P,O,z,K,oe,Y,ae)=>{oe=oe||b.type==="svg",g==null?D(b,P,O,z,K,oe,Y,ae):E(g,b,z,K,oe,Y,ae)},D=(g,b,P,O,z,K,oe,Y)=>{let ae,re;const{type:Se,props:M,shapeFlag:_,transition:U,dirs:$}=g;if(ae=g.el=a(g.type,K,M&&M.is,M),_&8?u(ae,g.children):_&16&&j(g.children,ae,null,O,z,K&&Se!=="foreignObject",oe,Y),$&&ni(g,null,O,"created"),L(ae,g,g.scopeId,oe,O),M){for(const ie in M)ie!=="value"&&!Es(ie)&&s(ae,ie,null,M[ie],K,g.children,O,z,Re);"value"in M&&s(ae,"value",null,M.value),(re=M.onVnodeBeforeMount)&&an(re,O,g)}$&&ni(g,null,O,"beforeMount");const Q=n0(z,U);Q&&U.beforeEnter(ae),i(ae,b,P),((re=M&&M.onVnodeMounted)||Q||$)&&Lt(()=>{re&&an(re,O,g),Q&&U.enter(ae),$&&ni(g,null,O,"mounted")},z)},L=(g,b,P,O,z)=>{if(P&&p(g,P),O)for(let K=0;K<O.length;K++)p(g,O[K]);if(z){let K=z.subTree;if(b===K){const oe=z.vnode;L(g,oe,oe.scopeId,oe.slotScopeIds,z.parent)}}},j=(g,b,P,O,z,K,oe,Y,ae=0)=>{for(let re=ae;re<g.length;re++){const Se=g[re]=Y?Bn(g[re]):fn(g[re]);x(null,Se,b,P,O,z,K,oe,Y)}},E=(g,b,P,O,z,K,oe)=>{const Y=b.el=g.el;let{patchFlag:ae,dynamicChildren:re,dirs:Se}=b;ae|=g.patchFlag&16;const M=g.props||nt,_=b.props||nt;let U;P&&ii(P,!1),(U=_.onVnodeBeforeUpdate)&&an(U,P,b,g),Se&&ni(b,g,P,"beforeUpdate"),P&&ii(P,!0);const $=z&&b.type!=="foreignObject";if(re?R(g.dynamicChildren,re,Y,P,O,$,K):oe||te(g,b,Y,null,P,O,$,K,!1),ae>0){if(ae&16)Z(Y,b,M,_,P,O,z);else if(ae&2&&M.class!==_.class&&s(Y,"class",null,_.class,z),ae&4&&s(Y,"style",M.style,_.style,z),ae&8){const Q=b.dynamicProps;for(let ie=0;ie<Q.length;ie++){const ve=Q[ie],he=M[ve],Ae=_[ve];(Ae!==he||ve==="value")&&s(Y,ve,he,Ae,z,g.children,P,O,Re)}}ae&1&&g.children!==b.children&&u(Y,b.children)}else!oe&&re==null&&Z(Y,b,M,_,P,O,z);((U=_.onVnodeUpdated)||Se)&&Lt(()=>{U&&an(U,P,b,g),Se&&ni(b,g,P,"updated")},O)},R=(g,b,P,O,z,K,oe)=>{for(let Y=0;Y<b.length;Y++){const ae=g[Y],re=b[Y],Se=ae.el&&(ae.type===un||!mr(ae,re)||ae.shapeFlag&70)?f(ae.el):P;x(ae,re,Se,null,O,z,K,oe,!0)}},Z=(g,b,P,O,z,K,oe)=>{if(P!==O){if(P!==nt)for(const Y in P)!Es(Y)&&!(Y in O)&&s(g,Y,P[Y],null,oe,b.children,z,K,Re);for(const Y in O){if(Es(Y))continue;const ae=O[Y],re=P[Y];ae!==re&&Y!=="value"&&s(g,Y,re,ae,oe,b.children,z,K,Re)}"value"in O&&s(g,"value",P.value,O.value)}},fe=(g,b,P,O,z,K,oe,Y,ae)=>{const re=b.el=g?g.el:o(""),Se=b.anchor=g?g.anchor:o("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:U}=b;U&&(Y=Y?Y.concat(U):U),g==null?(i(re,P,O),i(Se,P,O),j(b.children,P,Se,z,K,oe,Y,ae)):M>0&&M&64&&_&&g.dynamicChildren?(R(g.dynamicChildren,_,P,z,K,oe,Y),(b.key!=null||z&&b===z.subTree)&&zf(g,b,!0)):te(g,b,P,Se,z,K,oe,Y,ae)},ue=(g,b,P,O,z,K,oe,Y,ae)=>{b.slotScopeIds=Y,g==null?b.shapeFlag&512?z.ctx.activate(b,P,O,oe,ae):I(b,P,O,z,K,oe,ae):k(g,b,ae)},I=(g,b,P,O,z,K,oe)=>{const Y=g.component=d0(g,O,z);if(Cf(g)&&(Y.ctx.renderer=se),p0(Y),Y.asyncDep){if(z&&z.registerDep(Y,ee),!g.el){const ae=Y.subTree=ct(Mi);d(null,ae,b,P)}return}ee(Y,g,b,P,z,K,oe)},k=(g,b,P)=>{const O=b.component=g.component;if(Mx(g,b,P))if(O.asyncDep&&!O.asyncResolved){V(O,b,P);return}else O.next=b,mx(O.update),O.update();else b.el=g.el,O.vnode=b},ee=(g,b,P,O,z,K,oe)=>{const Y=()=>{if(g.isMounted){let{next:Se,bu:M,u:_,parent:U,vnode:$}=g,Q=Se,ie;ii(g,!1),Se?(Se.el=$.el,V(g,Se,oe)):Se=$,M&&Ho(M),(ie=Se.props&&Se.props.onVnodeBeforeUpdate)&&an(ie,U,Se,$),ii(g,!0);const ve=Go(g),he=g.subTree;g.subTree=ve,x(he,ve,f(he.el),F(he),g,z,K),Se.el=ve.el,Q===null&&Ex(g,ve.el),_&&Lt(_,z),(ie=Se.props&&Se.props.onVnodeUpdated)&&Lt(()=>an(ie,U,Se,$),z)}else{let Se;const{el:M,props:_}=b,{bm:U,m:$,parent:Q}=g,ie=ys(b);if(ii(g,!1),U&&Ho(U),!ie&&(Se=_&&_.onVnodeBeforeMount)&&an(Se,Q,b),ii(g,!0),M&&ye){const ve=()=>{g.subTree=Go(g),ye(M,g.subTree,g,z,null)};ie?b.type.__asyncLoader().then(()=>!g.isUnmounted&&ve()):ve()}else{const ve=g.subTree=Go(g);x(null,ve,P,O,g,z,K),b.el=ve.el}if($&&Lt($,z),!ie&&(Se=_&&_.onVnodeMounted)){const ve=b;Lt(()=>an(Se,Q,ve),z)}(b.shapeFlag&256||Q&&ys(Q.vnode)&&Q.vnode.shapeFlag&256)&&g.a&&Lt(g.a,z),g.isMounted=!0,b=P=O=null}},ae=g.effect=new Ia(Y,()=>Ha(re),g.scope),re=g.update=()=>ae.run();re.id=g.uid,ii(g,!0),re()},V=(g,b,P)=>{b.component=g;const O=g.vnode.props;g.vnode=b,g.next=null,$x(g,b.props,O,P),Jx(g,b.children,P),ar(),Dc(),lr()},te=(g,b,P,O,z,K,oe,Y,ae=!1)=>{const re=g&&g.children,Se=g?g.shapeFlag:0,M=b.children,{patchFlag:_,shapeFlag:U}=b;if(_>0){if(_&128){le(re,M,P,O,z,K,oe,Y,ae);return}else if(_&256){J(re,M,P,O,z,K,oe,Y,ae);return}}U&8?(Se&16&&Re(re,z,K),M!==re&&u(P,M)):Se&16?U&16?le(re,M,P,O,z,K,oe,Y,ae):Re(re,z,K,!0):(Se&8&&u(P,""),U&16&&j(M,P,O,z,K,oe,Y,ae))},J=(g,b,P,O,z,K,oe,Y,ae)=>{g=g||Xi,b=b||Xi;const re=g.length,Se=b.length,M=Math.min(re,Se);let _;for(_=0;_<M;_++){const U=b[_]=ae?Bn(b[_]):fn(b[_]);x(g[_],U,P,null,z,K,oe,Y,ae)}re>Se?Re(g,z,K,!0,!1,M):j(b,P,O,z,K,oe,Y,ae,M)},le=(g,b,P,O,z,K,oe,Y,ae)=>{let re=0;const Se=b.length;let M=g.length-1,_=Se-1;for(;re<=M&&re<=_;){const U=g[re],$=b[re]=ae?Bn(b[re]):fn(b[re]);if(mr(U,$))x(U,$,P,null,z,K,oe,Y,ae);else break;re++}for(;re<=M&&re<=_;){const U=g[M],$=b[_]=ae?Bn(b[_]):fn(b[_]);if(mr(U,$))x(U,$,P,null,z,K,oe,Y,ae);else break;M--,_--}if(re>M){if(re<=_){const U=_+1,$=U<Se?b[U].el:O;for(;re<=_;)x(null,b[re]=ae?Bn(b[re]):fn(b[re]),P,$,z,K,oe,Y,ae),re++}}else if(re>_)for(;re<=M;)W(g[re],z,K,!0),re++;else{const U=re,$=re,Q=new Map;for(re=$;re<=_;re++){const Be=b[re]=ae?Bn(b[re]):fn(b[re]);Be.key!=null&&Q.set(Be.key,re)}let ie,ve=0;const he=_-$+1;let Ae=!1,Ue=0;const Xe=new Array(he);for(re=0;re<he;re++)Xe[re]=0;for(re=U;re<=M;re++){const Be=g[re];if(ve>=he){W(Be,z,K,!0);continue}let Pe;if(Be.key!=null)Pe=Q.get(Be.key);else for(ie=$;ie<=_;ie++)if(Xe[ie-$]===0&&mr(Be,b[ie])){Pe=ie;break}Pe===void 0?W(Be,z,K,!0):(Xe[Pe-$]=re+1,Pe>=Ue?Ue=Pe:Ae=!0,x(Be,b[Pe],P,null,z,K,oe,Y,ae),ve++)}const de=Ae?i0(Xe):Xi;for(ie=de.length-1,re=he-1;re>=0;re--){const Be=$+re,Pe=b[Be],Ie=Be+1<Se?b[Be+1].el:O;Xe[re]===0?x(null,Pe,P,Ie,z,K,oe,Y,ae):Ae&&(ie<0||re!==de[ie]?N(Pe,P,Ie,2):ie--)}}},N=(g,b,P,O,z=null)=>{const{el:K,type:oe,transition:Y,children:ae,shapeFlag:re}=g;if(re&6){N(g.component.subTree,b,P,O);return}if(re&128){g.suspense.move(b,P,O);return}if(re&64){oe.move(g,b,P,se);return}if(oe===un){i(K,b,P);for(let M=0;M<ae.length;M++)N(ae[M],b,P,O);i(g.anchor,b,P);return}if(oe===bs){A(g,b,P);return}if(O!==2&&re&1&&Y)if(O===0)Y.beforeEnter(K),i(K,b,P),Lt(()=>Y.enter(K),z);else{const{leave:M,delayLeave:_,afterLeave:U}=Y,$=()=>i(K,b,P),Q=()=>{M(K,()=>{$(),U&&U()})};_?_(K,$,Q):Q()}else i(K,b,P)},W=(g,b,P,O=!1,z=!1)=>{const{type:K,props:oe,ref:Y,children:ae,dynamicChildren:re,shapeFlag:Se,patchFlag:M,dirs:_}=g;if(Y!=null&&pa(Y,null,P,g,!0),Se&256){b.ctx.deactivate(g);return}const U=Se&1&&_,$=!ys(g);let Q;if($&&(Q=oe&&oe.onVnodeBeforeUnmount)&&an(Q,b,g),Se&6)Te(g.component,P,O);else{if(Se&128){g.suspense.unmount(P,O);return}U&&ni(g,null,b,"beforeUnmount"),Se&64?g.type.remove(g,b,P,z,se,O):re&&(K!==un||M>0&&M&64)?Re(re,b,P,!1,!0):(K===un&&M&384||!z&&Se&16)&&Re(ae,b,P),O&&ge(g)}($&&(Q=oe&&oe.onVnodeUnmounted)||U)&&Lt(()=>{Q&&an(Q,b,g),U&&ni(g,null,b,"unmounted")},P)},ge=g=>{const{type:b,el:P,anchor:O,transition:z}=g;if(b===un){xe(P,O);return}if(b===bs){T(g);return}const K=()=>{r(P),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(g.shapeFlag&1&&z&&!z.persisted){const{leave:oe,delayLeave:Y}=z,ae=()=>oe(P,K);Y?Y(g.el,K,ae):ae()}else K()},xe=(g,b)=>{let P;for(;g!==b;)P=h(g),r(g),g=P;r(b)},Te=(g,b,P)=>{const{bum:O,scope:z,update:K,subTree:oe,um:Y}=g;O&&Ho(O),z.stop(),K&&(K.active=!1,W(oe,g,b,P)),Y&&Lt(Y,b),Lt(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Re=(g,b,P,O=!1,z=!1,K=0)=>{for(let oe=K;oe<g.length;oe++)W(g[oe],b,P,O,z)},F=g=>g.shapeFlag&6?F(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),ne=(g,b,P)=>{g==null?b._vnode&&W(b._vnode,null,null,!0):x(b._vnode||null,g,b,null,null,null,P),Dc(),Ef(),b._vnode=g},se={p:x,um:W,m:N,r:ge,mt:I,mc:j,pc:te,pbc:R,n:F,o:n};let Ee,ye;return e&&([Ee,ye]=e(se)),{render:ne,hydrate:Ee,createApp:jx(ne,Ee)}}function ii({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function n0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function zf(n,e,t=!1){const i=n.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Bn(r[s]),o.el=a.el),t||zf(a,o)),o.type===eo&&(o.el=a.el)}}function i0(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const r0=n=>n.__isTeleport,un=Symbol.for("v-fgt"),eo=Symbol.for("v-txt"),Mi=Symbol.for("v-cmt"),bs=Symbol.for("v-stc"),Tr=[];let en=null;function to(n=!1){Tr.push(en=n?null:[])}function s0(){Tr.pop(),en=Tr[Tr.length-1]||null}let Nr=1;function kc(n){Nr+=n}function Hf(n){return n.dynamicChildren=Nr>0?en||Xi:null,s0(),Nr>0&&en&&en.push(n),n}function Wa(n,e,t,i,r,s){return Hf(Ct(n,e,t,i,r,s,!0))}function o0(n,e,t,i,r){return Hf(ct(n,e,t,i,r,!0))}function ma(n){return n?n.__v_isVNode===!0:!1}function mr(n,e){return n.type===e.type&&n.key===e.key}const no="__vInternal",Gf=({key:n})=>n??null,Rs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Et(n)||ke(n)?{i:Jt,r:n,k:e,f:!!t}:n:null);function Ct(n,e=null,t=null,i=0,r=null,s=n===un?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Gf(e),ref:e&&Rs(e),scopeId:Tf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jt};return o?(Xa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),Nr>0&&!a&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const ct=a0;function a0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===yx)&&(n=Mi),ma(n)){const o=er(n,e,!0);return t&&Xa(o,t),Nr>0&&!s&&en&&(o.shapeFlag&6?en[en.indexOf(n)]=o:en.push(o)),o.patchFlag|=-2,o}if(x0(n)&&(n=n.__vccOpts),e){e=l0(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=Da(o)),st(l)&&(df(l)&&!ze(l)&&(l=_t({},l)),e.style=La(l))}const a=vt(n)?1:bx(n)?128:r0(n)?64:st(n)?4:ke(n)?2:0;return Ct(n,e,t,i,r,a,s,!0)}function l0(n){return n?df(n)||no in n?_t({},n):n:null}function er(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?u0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Gf(o),ref:e&&e.ref?t&&r?ze(r)?r.concat(Rs(e)):[r,Rs(e)]:Rs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==un?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&er(n.ssContent),ssFallback:n.ssFallback&&er(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Mr(n=" ",e=0){return ct(eo,null,n,e)}function c0(n,e){const t=ct(bs,null,n);return t.staticCount=e,t}function dM(n="",e=!1){return e?(to(),o0(Mi,null,n)):ct(Mi,null,n)}function fn(n){return n==null||typeof n=="boolean"?ct(Mi):ze(n)?ct(un,null,n.slice()):typeof n=="object"?Bn(n):ct(eo,null,String(n))}function Bn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:er(n)}function Xa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Xa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(no in e)?e._ctx=Jt:r===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Jt},t=32):(e=String(e),i&64?(t=16,e=[Mr(e)]):t=8);n.children=e,n.shapeFlag|=t}function u0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Da([e.class,i.class]));else if(r==="style")e.style=La([e.style,i.style]);else if(Ws(r)){const s=e[r],a=i[r];a&&s!==a&&!(ze(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function an(n,e,t,i=null){rn(n,e,7,[t,i])}const f0=Uf();let h0=0;function d0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||f0,s={uid:h0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nf(i,r),emitsOptions:yf(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=vx.bind(null,s),n.ce&&n.ce(s),s}let mt=null,qa,Bi,Wc="__VUE_INSTANCE_SETTERS__";(Bi=ra()[Wc])||(Bi=ra()[Wc]=[]),Bi.push(n=>mt=n),qa=n=>{Bi.length>1?Bi.forEach(e=>e(n)):Bi[0](n)};const tr=n=>{qa(n),n.scope.on()},_i=()=>{mt&&mt.scope.off(),qa(null)};function Vf(n){return n.vnode.shapeFlag&4}let Or=!1;function p0(n,e=!1){Or=e;const{props:t,children:i}=n.vnode,r=Vf(n);Kx(n,t,r,e),Qx(n,i);const s=r?m0(n,e):void 0;return Or=!1,s}function m0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=pf(new Proxy(n.ctx,Gx));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?_0(n):null;tr(n),ar();const s=Yn(i,n,0,[n.props,r]);if(lr(),_i(),Qu(s)){if(s.then(_i,_i),e)return s.then(a=>{Xc(n,a,e)}).catch(a=>{Zs(a,n,0)});n.asyncDep=s}else Xc(n,s,e)}else kf(n,e)}function Xc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=vf(e)),kf(n,t)}let qc;function kf(n,e,t){const i=n.type;if(!n.render){if(!e&&qc&&!i.render){const r=i.template||Va(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=_t(_t({isCustomElement:s,delimiters:o},a),l);i.render=qc(r,c)}}n.render=i.render||nn}{tr(n),ar();try{Vx(n)}finally{lr(),_i()}}}function g0(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ot(n,"get","$attrs"),e[t]}}))}function _0(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return g0(n)},slots:n.slots,emit:n.emit,expose:e}}function Ya(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(vf(pf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in yr)return yr[t](n)},has(e,t){return t in e||t in yr}}))}function v0(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function x0(n){return ke(n)&&"__vccOpts"in n}const Qt=(n,e)=>hx(n,e,Or);function Wf(n,e,t){const i=arguments.length;return i===2?st(e)&&!ze(e)?ma(e)?ct(n,null,[e]):ct(n,e):ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ma(t)&&(t=[t]),ct(n,e,t))}const A0=Symbol.for("v-scx"),M0=()=>Rn(A0),E0="3.3.10",S0="http://www.w3.org/2000/svg",ui=typeof document<"u"?document:null,Yc=ui&&ui.createElement("template"),y0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ui.createElementNS(S0,n):ui.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Yc.innerHTML=i?`<svg>${n}</svg>`:n;const o=Yc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},T0=Symbol("_vtc");function b0(n,e,t){const i=n[T0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const R0=Symbol("_vod");function w0(n,e,t){const i=n.style,r=vt(t);if(t&&!r){if(e&&!vt(e))for(const s in e)t[s]==null&&ga(i,s,"");for(const s in t)ga(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),R0 in n&&(i.display=s)}}const jc=/\s*!important$/;function ga(n,e,t){if(ze(t))t.forEach(i=>ga(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=C0(n,e);jc.test(t)?n.setProperty(or(i),t.replace(jc,""),"important"):n[i]=t}}const Kc=["Webkit","Moz","ms"],ko={};function C0(n,e){const t=ko[e];if(t)return t;let i=dn(e);if(i!=="filter"&&i in n)return ko[e]=i;i=js(i);for(let r=0;r<Kc.length;r++){const s=Kc[r]+i;if(s in n)return ko[e]=s}return e}const $c="http://www.w3.org/1999/xlink";function P0(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS($c,e.slice(6,e.length)):n.setAttributeNS($c,e,t);else{const s=Fv(e);t==null||s&&!Ju(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function L0(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ju(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function D0(n,e,t,i){n.addEventListener(e,t,i)}function U0(n,e,t,i){n.removeEventListener(e,t,i)}const Zc=Symbol("_vei");function I0(n,e,t,i,r=null){const s=n[Zc]||(n[Zc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=N0(e);if(i){const c=s[e]=B0(i,r);D0(n,o,c,l)}else a&&(U0(n,o,a,l),s[e]=void 0)}}const Qc=/(?:Once|Passive|Capture)$/;function N0(n){let e;if(Qc.test(n)){e={};let i;for(;i=n.match(Qc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):or(n.slice(2)),e]}let Wo=0;const O0=Promise.resolve(),F0=()=>Wo||(O0.then(()=>Wo=0),Wo=Date.now());function B0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rn(z0(i,t.value),e,5,[i])};return t.value=n,t.attached=F0(),t}function z0(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Jc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,H0=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?b0(n,i,r):e==="style"?w0(n,t,i):Ws(e)?wa(e)||I0(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):G0(n,e,i,r))?L0(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),P0(n,e,i,r))};function G0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Jc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;return!(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")}return Jc(e)&&vt(t)?!1:e in n}const V0=_t({patchProp:H0},y0);let eu;function k0(){return eu||(eu=e0(V0))}const W0=(...n)=>{const e=k0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=X0(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function X0(n){return vt(n)?document.querySelector(n):n}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Hi=typeof window<"u";function q0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Xo(n,e){const t={};for(const i in e){const r=e[i];t[i]=sn(r)?r.map(n):n(r)}return t}const br=()=>{},sn=Array.isArray,Y0=/\/$/,j0=n=>n.replace(Y0,"");function qo(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Q0(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function K0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function tu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function $0(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&nr(e.matched[i],t.matched[r])&&Xf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function nr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Xf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Z0(n[t],e[t]))return!1;return!0}function Z0(n,e){return sn(n)?nu(n,e):sn(e)?nu(e,n):n===e}function nu(n,e){return sn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Q0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a-(a===i.length?1:0)).join("/")}var Fr;(function(n){n.pop="pop",n.push="push"})(Fr||(Fr={}));var Rr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Rr||(Rr={}));function J0(n){if(!n)if(Hi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),j0(n)}const eA=/^[^#]+#/;function tA(n,e){return n.replace(eA,"#")+e}function nA(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const io=()=>({left:window.pageXOffset,top:window.pageYOffset});function iA(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=nA(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function iu(n,e){return(history.state?history.state.position-e:-1)+n}const _a=new Map;function rA(n,e){_a.set(n,e)}function sA(n){const e=_a.get(n);return _a.delete(n),e}let oA=()=>location.protocol+"//"+location.host;function qf(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),tu(l,"")}return tu(t,n)+i+r}function aA(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=qf(n,location),v=t.value,x=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===v){a=null;return}m=x?h.position-x.position:0}else i(p);r.forEach(d=>{d(t.value,v,{delta:m,type:Fr.pop,direction:m?m>0?Rr.forward:Rr.back:Rr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState($e({},h.state,{scroll:io()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ru(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?io():null}}function lA(n){const{history:e,location:t}=window,i={value:qf(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:oA()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function a(l,c){const u=$e({},e.state,ru(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=$e({},r.value,e.state,{forward:l,scroll:io()});s(u.current,u,!0);const f=$e({},ru(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function cA(n){n=J0(n);const e=lA(n),t=aA(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=$e({location:"",base:n,go:i,createHref:tA.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function uA(n){return typeof n=="string"||n&&typeof n=="object"}function Yf(n){return typeof n=="string"||typeof n=="symbol"}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jf=Symbol("");var su;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(su||(su={}));function ir(n,e){return $e(new Error,{type:n,[jf]:!0},e)}function Mn(n,e){return n instanceof Error&&jf in n&&(e==null||!!(n.type&e))}const ou="[^/]+?",fA={sensitive:!1,strict:!1,start:!0,end:!0},hA=/[.+*?^${}()[\]/\\]/g;function dA(n,e){const t=$e({},fA,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(hA,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:x,optional:m,regexp:d}=h;s.push({name:v,repeatable:x,optional:m});const y=d||ou;if(y!==ou){p+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+T.message)}}let A=x?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),r+=A,p+=20,m&&(p+=-8),x&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:x,optional:m}=p,d=v in c?c[v]:"";if(sn(d)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=sn(d)?d.join("/"):d;if(!y)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function pA(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mA(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=pA(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(au(i))return 1;if(au(r))return-1}return r.length-i.length}function au(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const gA={type:0,value:""},_A=/[a-zA-Z0-9_]/;function vA(n){if(!n)return[[]];if(n==="/")return[[gA]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:_A.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function xA(n,e,t){const i=dA(vA(n.path),t),r=$e(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function AA(n,e){const t=[],i=new Map;e=uu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,v=MA(u);v.aliasOf=h&&h.record;const x=uu(e,u),m=[v];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of A)m.push($e({},v,{components:h?h.record.components:v.components,path:T,aliasOf:h?h.record:v}))}let d,y;for(const A of m){const{path:T}=A;if(f&&T[0]!=="/"){const C=f.record.path,D=C[C.length-1]==="/"?"":"/";A.path=f.record.path+(T&&D+T)}if(d=xA(A,f,x),h?h.alias.push(d):(y=y||d,y!==d&&y.alias.push(d),p&&u.name&&!cu(d)&&a(u.name)),v.children){const C=v.children;for(let D=0;D<C.length;D++)s(C[D],d,h&&h.children[D])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return y?()=>{a(y)}:br}function a(u){if(Yf(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&mA(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Kf(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!cu(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},v,x;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw ir(1,{location:u});x=h.record.name,p=$e(lu(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&lu(u.params,h.keys.map(y=>y.name))),v=h.stringify(p)}else if("path"in u)v=u.path,h=t.find(y=>y.re.test(v)),h&&(p=h.parse(v),x=h.record.name);else{if(h=f.name?i.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw ir(1,{location:u,currentLocation:f});x=h.record.name,p=$e({},f.params,u.params),v=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:x,path:v,params:p,matched:m,meta:SA(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function lu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function MA(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:EA(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function EA(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function cu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function SA(n){return n.reduce((e,t)=>$e(e,t.meta),{})}function uu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Kf(n,e){return e.children.some(t=>t===n||Kf(n,t))}const $f=/#/g,yA=/&/g,TA=/\//g,bA=/=/g,RA=/\?/g,Zf=/\+/g,wA=/%5B/g,CA=/%5D/g,Qf=/%5E/g,PA=/%60/g,Jf=/%7B/g,LA=/%7C/g,eh=/%7D/g,DA=/%20/g;function ja(n){return encodeURI(""+n).replace(LA,"|").replace(wA,"[").replace(CA,"]")}function UA(n){return ja(n).replace(Jf,"{").replace(eh,"}").replace(Qf,"^")}function va(n){return ja(n).replace(Zf,"%2B").replace(DA,"+").replace($f,"%23").replace(yA,"%26").replace(PA,"`").replace(Jf,"{").replace(eh,"}").replace(Qf,"^")}function IA(n){return va(n).replace(bA,"%3D")}function NA(n){return ja(n).replace($f,"%23").replace(RA,"%3F")}function OA(n){return n==null?"":NA(n).replace(TA,"%2F")}function Bs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function FA(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Zf," "),a=s.indexOf("="),o=Bs(a<0?s:s.slice(0,a)),l=a<0?null:Bs(s.slice(a+1));if(o in e){let c=e[o];sn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function fu(n){let e="";for(let t in n){const i=n[t];if(t=IA(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(sn(i)?i.map(s=>s&&va(s)):[i&&va(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function BA(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=sn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const zA=Symbol(""),hu=Symbol(""),Ka=Symbol(""),th=Symbol(""),xa=Symbol("");function gr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function zn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(ir(4,{from:t,to:e})):f instanceof Error?o(f):uA(f)?o(ir(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function Yo(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(HA(o)){const c=(o.__vccOpts||o)[e];c&&r.push(zn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=q0(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&zn(h,t,i,s,a)()}))}}return r}function HA(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function du(n){const e=Rn(Ka),t=Rn(th),i=Qt(()=>e.resolve(gi(n.to))),r=Qt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(nr.bind(null,u));if(h>-1)return h;const p=pu(l[c-2]);return c>1&&pu(u)===p&&f[f.length-1].path!==p?f.findIndex(nr.bind(null,l[c-2])):h}),s=Qt(()=>r.value>-1&&WA(t.params,i.value.params)),a=Qt(()=>r.value>-1&&r.value===t.matched.length-1&&Xf(t.params,i.value.params));function o(l={}){return kA(l)?e[gi(n.replace)?"replace":"push"](gi(n.to)).catch(br):Promise.resolve()}return{route:i,href:Qt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const GA=Ga({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:du,setup(n,{slots:e}){const t=$s(du(n)),{options:i}=Rn(Ka),r=Qt(()=>({[mu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[mu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Wf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),VA=GA;function kA(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function WA(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!sn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function pu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const mu=(n,e,t)=>n??e??t,XA=Ga({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Rn(xa),r=Qt(()=>n.route||i.value),s=Rn(hu,0),a=Qt(()=>{let c=gi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Qt(()=>r.value.matched[a.value]);Ts(hu,Qt(()=>a.value+1)),Ts(zA,o),Ts(xa,r);const l=ax();return Ss(()=>[l.value,o.value,n.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!nr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return gu(t.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Wf(h,$e({},v,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return gu(t.default,{Component:m,route:c})||m}}});function gu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const nh=XA;function qA(n){const e=AA(n.routes,n),t=n.parseQuery||FA,i=n.stringifyQuery||fu,r=n.history,s=gr(),a=gr(),o=gr(),l=lx(Fn);let c=Fn;Hi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xo.bind(null,F=>""+F),f=Xo.bind(null,OA),h=Xo.bind(null,Bs);function p(F,ne){let se,Ee;return Yf(F)?(se=e.getRecordMatcher(F),Ee=ne):Ee=F,e.addRoute(Ee,se)}function v(F){const ne=e.getRecordMatcher(F);ne&&e.removeRoute(ne)}function x(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function d(F,ne){if(ne=$e({},ne||l.value),typeof F=="string"){const P=qo(t,F,ne.path),O=e.resolve({path:P.path},ne),z=r.createHref(P.fullPath);return $e(P,O,{params:h(O.params),hash:Bs(P.hash),redirectedFrom:void 0,href:z})}let se;if("path"in F)se=$e({},F,{path:qo(t,F.path,ne.path).path});else{const P=$e({},F.params);for(const O in P)P[O]==null&&delete P[O];se=$e({},F,{params:f(P)}),ne.params=f(ne.params)}const Ee=e.resolve(se,ne),ye=F.hash||"";Ee.params=u(h(Ee.params));const g=K0(i,$e({},F,{hash:UA(ye),path:Ee.path})),b=r.createHref(g);return $e({fullPath:g,hash:ye,query:i===fu?BA(F.query):F.query||{}},Ee,{redirectedFrom:void 0,href:b})}function y(F){return typeof F=="string"?qo(t,F,l.value.path):$e({},F)}function A(F,ne){if(c!==F)return ir(8,{from:ne,to:F})}function T(F){return L(F)}function C(F){return T($e(y(F),{replace:!0}))}function D(F){const ne=F.matched[F.matched.length-1];if(ne&&ne.redirect){const{redirect:se}=ne;let Ee=typeof se=="function"?se(F):se;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=y(Ee):{path:Ee},Ee.params={}),$e({query:F.query,hash:F.hash,params:"path"in Ee?{}:F.params},Ee)}}function L(F,ne){const se=c=d(F),Ee=l.value,ye=F.state,g=F.force,b=F.replace===!0,P=D(se);if(P)return L($e(y(P),{state:typeof P=="object"?$e({},ye,P.state):ye,force:g,replace:b}),ne||se);const O=se;O.redirectedFrom=ne;let z;return!g&&$0(i,Ee,se)&&(z=ir(16,{to:O,from:Ee}),N(Ee,Ee,!0,!1)),(z?Promise.resolve(z):R(O,Ee)).catch(K=>Mn(K)?Mn(K,2)?K:le(K):te(K,O,Ee)).then(K=>{if(K){if(Mn(K,2))return L($e({replace:b},y(K.to),{state:typeof K.to=="object"?$e({},ye,K.to.state):ye,force:g}),ne||O)}else K=fe(O,Ee,!0,b,ye);return Z(O,Ee,K),K})}function j(F,ne){const se=A(F,ne);return se?Promise.reject(se):Promise.resolve()}function E(F){const ne=xe.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(F):F()}function R(F,ne){let se;const[Ee,ye,g]=YA(F,ne);se=Yo(Ee.reverse(),"beforeRouteLeave",F,ne);for(const P of Ee)P.leaveGuards.forEach(O=>{se.push(zn(O,F,ne))});const b=j.bind(null,F,ne);return se.push(b),Re(se).then(()=>{se=[];for(const P of s.list())se.push(zn(P,F,ne));return se.push(b),Re(se)}).then(()=>{se=Yo(ye,"beforeRouteUpdate",F,ne);for(const P of ye)P.updateGuards.forEach(O=>{se.push(zn(O,F,ne))});return se.push(b),Re(se)}).then(()=>{se=[];for(const P of g)if(P.beforeEnter)if(sn(P.beforeEnter))for(const O of P.beforeEnter)se.push(zn(O,F,ne));else se.push(zn(P.beforeEnter,F,ne));return se.push(b),Re(se)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),se=Yo(g,"beforeRouteEnter",F,ne),se.push(b),Re(se))).then(()=>{se=[];for(const P of a.list())se.push(zn(P,F,ne));return se.push(b),Re(se)}).catch(P=>Mn(P,8)?P:Promise.reject(P))}function Z(F,ne,se){o.list().forEach(Ee=>E(()=>Ee(F,ne,se)))}function fe(F,ne,se,Ee,ye){const g=A(F,ne);if(g)return g;const b=ne===Fn,P=Hi?history.state:{};se&&(Ee||b?r.replace(F.fullPath,$e({scroll:b&&P&&P.scroll},ye)):r.push(F.fullPath,ye)),l.value=F,N(F,ne,se,b),le()}let ue;function I(){ue||(ue=r.listen((F,ne,se)=>{if(!Te.listening)return;const Ee=d(F),ye=D(Ee);if(ye){L($e(ye,{replace:!0}),Ee).catch(br);return}c=Ee;const g=l.value;Hi&&rA(iu(g.fullPath,se.delta),io()),R(Ee,g).catch(b=>Mn(b,12)?b:Mn(b,2)?(L(b.to,Ee).then(P=>{Mn(P,20)&&!se.delta&&se.type===Fr.pop&&r.go(-1,!1)}).catch(br),Promise.reject()):(se.delta&&r.go(-se.delta,!1),te(b,Ee,g))).then(b=>{b=b||fe(Ee,g,!1),b&&(se.delta&&!Mn(b,8)?r.go(-se.delta,!1):se.type===Fr.pop&&Mn(b,20)&&r.go(-1,!1)),Z(Ee,g,b)}).catch(br)}))}let k=gr(),ee=gr(),V;function te(F,ne,se){le(F);const Ee=ee.list();return Ee.length?Ee.forEach(ye=>ye(F,ne,se)):console.error(F),Promise.reject(F)}function J(){return V&&l.value!==Fn?Promise.resolve():new Promise((F,ne)=>{k.add([F,ne])})}function le(F){return V||(V=!F,I(),k.list().forEach(([ne,se])=>F?se(F):ne()),k.reset()),F}function N(F,ne,se,Ee){const{scrollBehavior:ye}=n;if(!Hi||!ye)return Promise.resolve();const g=!se&&sA(iu(F.fullPath,0))||(Ee||!se)&&history.state&&history.state.scroll||null;return Af().then(()=>ye(F,ne,g)).then(b=>b&&iA(b)).catch(b=>te(b,F,ne))}const W=F=>r.go(F);let ge;const xe=new Set,Te={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,hasRoute:m,getRoutes:x,resolve:d,options:n,push:T,replace:C,go:W,back:()=>W(-1),forward:()=>W(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ee.add,isReady:J,install(F){const ne=this;F.component("RouterLink",VA),F.component("RouterView",nh),F.config.globalProperties.$router=ne,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>gi(l)}),Hi&&!ge&&l.value===Fn&&(ge=!0,T(r.location).catch(ye=>{}));const se={};for(const ye in Fn)Object.defineProperty(se,ye,{get:()=>l.value[ye],enumerable:!0});F.provide(Ka,ne),F.provide(th,ff(se)),F.provide(xa,l);const Ee=F.unmount;xe.add(F),F.unmount=function(){xe.delete(F),xe.size<1&&(c=Fn,ue&&ue(),ue=null,l.value=Fn,ge=!1,V=!1),Ee()}}};function Re(F){return F.reduce((ne,se)=>ne.then(()=>E(se)),Promise.resolve())}return Te}function YA(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>nr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>nr(c,l))||r.push(l))}return[t,i,r]}const jA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEvUExURUdwTAB6tQB7tQB6tAB6tQB6tAB6tQBioAB6swB6twB6tAB6tQB4tAB5sgB4tQB6tQB6tAB6tAB8tQB6tgB6tQB6tQB7tQB6tABttgB6tQB6tQB/qgB7tQB5sAB6tQB7swB7tQB7sgB7tQB5tQB7tQB7tf///wJ9tv7+//T5/AZ/txGEuvb6/B6LvqrT5/D3+8rk8Pv9/oO/2xmIvQ6Dufj8/Vipz7HX6dzt9SWOwOfz+GKu0o/G39Ho8jiZxrja6+Ty92201YzD3ojC3dfq8z2bxzSWxVOmzc7m8ZLH39ns9Gex067W6Lvc7AmAuCqRwez2+ni62L7e7C6Tw0mhyt/u9hOFu8Pg7nC11qHO5E6jzIXA3Gqy1HW410OeyF6s0ejz+JjK4T+cx5XI4H+92n8HEBUAAAAldFJOUwCE5CSPVq0C8xDGzvbs/Yrc2Bo3dGntXAe3ZAaoFYHVdvr2O7DznZYEAAALC0lEQVR42u3dB18U1xrA4QHEFbHEmuhNTG4SZum9FwFpCioo1lhi+/6f4WLaTQwou7OwM/M+/w+w8+Och512diZJDui79hvfdrZe/W+XCt25M62dP7e0X0xqqXLpxPeGrlx9deKnyiGnv+OHC8arlAZ+6DjE9H/XcspQlbVT579EoHL9rGEqc2evfHZH0HbaEJW9020Hz3+7b/8Anfn6oK//EwYnRif23Q3851sjE6WT3+wz/9eMS5yu/UtAxf9/rO+AT/cC9v/RjgM+Of43ItH6x7lAm/O/cJ362/WAius/ATv9/8OA60YjYlf+uv/j+n/Irv55Z6jFWMSs5Y/7/44Aox4H/v4VcNlIRO3yb6cA1v+E7auPJwKXjEPcLrkIHLuPF4St/w3chST5zihE7qLbQLFrT24YhMi1JBaChO5k0mkQIteZtBqEyLUmVw1C5H5M/P47dOcSYxA7AAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAGgcgEYmFyZWpid6O6emF2YejE5YGoCAaiu3ZlOP2n6zlrV9IQA0Pfgcbpv0w/6TFDpATxZ6U8PrGcFgXIDqD4bSj/bzrIdQYkBbA+nX2x4xiyVFcDcRHqI+n81TaUEUH2fHrI7dgMlBNA7lR66qV4zVTYAvffSGlokoGQAqlNpTd21FygXgPdpjc2bqzIBmEtrzrlAiQBsT9QOoN/1gNIAqA6ndTTsMKAsAJ6ldfXSdJUDwJOh+gDsuDNUDgAraZ29MF9lANDXXy+AHl8BZQDwIK27Vyas+ACqj+sHMO1EoPgA1tIM3TRjhQdwJwsAF4SLD2A6C4BNM1Z0AANppsZMWcEBTGYDsGHKCg5gJRuAUVNWcABT2QDcNWUFB7CQDcBtU1ZwALPZACyZsoIDmMgGoN+UFRxAdzYA3aYMANkFyEGgnAYq3oWgQVNWcAAvXAqODcDNoOAA3A4ODiDbgpBVM1Z4AJmWhN0yY4UHYFFocADVDPsASwJLAMAPQ6ID6Oupd/6Hxk1YCQDUvyzQVaByAOjb8fPw0AC6lusDsGW6SgKgvkfEPPXL0LIA6Jqp4xEBPR4SVR4AXb/WDmDSZJUIQO0XhF0ELheAWh8VO+gAoFwAunoXPSw6NICu3rs1/P+b//IB6KrOH3r/7/u/jAD2zgUOdTbY4/i/rAC6Zg5xReip8//yAuiqvvzCfYGdLV//ZQbQ1dX34jN3h4dG3f8pO4A9Aq8OWCO0+cr9/wgA9nYEN+c3/7X+95b1f2EAfGxsY/Tu7aX+7u7+pduDoxvW/0cDIAAEgAAQAAJAAAgAASAABIAAEAACQAAIABUXQJqxZn/+71XHbm4sj74dXBxeffxmaGJiJO2eGNpZenz73uD7Dy8fzfQCUFYAvetztxanR770Xoulh/O/blcBKBeAscm3CyM1fFb/09F3vQCUA0D19fxqXa84WVweA6DwAG6+3an/I7sfbj0BoMAA7r9czfqpE8/XASgogL4PO2kjGp4EoIAAep81Zvo/trABQNEArK2mjWz4HQBFAtB7qzttcM+fAFAYAGPDaePbmQOgIADWZ9MjaXAcgCIAWBtKj6jHNwHIP4CbPemRNTIHQN4BzOykR9kLAPINYHw1Pdpy8+RDAPb9/OfpUXe3CkB+AWykR19Onn4MwD6fPz6bHocAAPIKYCU9llYAyCeAsf7jAZDOAZBLAPPHNP/pyBoAOQQw3nNcANKlJwDkD8ByenxNAZA/AAvHCCBdBiBvAHaPc/7T/hkAcgZg9FgBpIsA5AzAwvECaPb7EAH4pIFjnv/0zTgAeQIwd9wA0lEA8gTg+bED6BkDIEcAlo4dQPoWgBwBaEIjAwCEBpDOAxAbQE8fAKEBpB8AiA1gqQpAaADpLwDEBrAIQGwA3QMAhAaQPgAgNoAFAGIDSLcBiA1gFIDYAFYBiA0gHQAgNoBlAGIDWAQgNoCJ+wCEBpC+BiA2gFEAYgN4CkBsAM05CAAgP60BEBvAMwBiAxgEIDaAxwDEBpA+ASA2gNcAxAbwDIDYAJ4DEBvAMACxAfQDEBtAOgZATgG8Wby19Wh3YLy3Wu0dH1h/9HL+3lG8UuQ1ADkE0DM4t+96ve3lxYkGb2oLgNwBeDj5mZt0fVu3G7qxWwDkC0D34O6XtvfuYQO3NwVArgAMH+qd74+mG7bBBQByBGDk1SEf23B/vlGvGB4CID8AZmt4v+cvjXrL6DgAeQGwWdMvdXYb9JqpbQByAmCzxmsyM40R8AiAfACYrfmXersN2QvMAZALACN1vN/7l0Zs+AEAuQBQ1zw04mVjdwDIA4Dhuh7bd38z+5YHAcgBgO71+v60R9k3/RSAHACo+98w+1XhTQByAGC33r/tXeZN7wDQfAAP6//jhjOffgDQfAAZXuO1lXnjfQA0G0BPhh/pjmdeITIDQLMBZDoTW8y69XUAmg0g09XYzC+efg1AswFkel7fdtatbwDQZABvsv15Q838/gGgAZ+f8XF9Wa8FPQOgyQAyLsy9k3HzHwBoMoCMS/OzHgWuANBkABnX5GRdFfAegCYD2M32561n3PxzAJoMIONT2weKtiAAgE/KuDC7L+PmpwBoMoDebH9eb8bN3wOgyQAyvsS1WrQlQQDU+PlHvP1hAGIDWAAgNoBVAGIDmAYgNoAlAGIDmAUgNoAdAGIDGAIgNoAeAGID6AcgNoAJAGIDGAEAAAAAACAqgG4AYgNIAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAHAJQvgIAAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAA2h/AOWMQuXPJGYMQuTNJq0GIXGvSaRAi15n8bBAidzJpMQiRa0naDULk2pOLBiFyF5PkK6MQt++TJDlhGOJ2fg/AT4Yhbpf2AFTsA8J2obIHIPnBQETt8sf5TzpOGYmYner4DUBy3lDE7Mbv8590nDUWETv7xxdAklwxGBG7/uf8J5XTRiNepyt/AUjaLAuJdwTYlvytrw1ItNqTf+SCcLDO/3P+k8pJYxKpbyufAEi+uWZU4nTtP8m/+sZ3QJz//33mf28v4Dggyv6/kuzf1+4KRDj/a08OrM0VodJ3ui35TJUrVw1RmTt7vZJ8vo4W+4Hyfvvf6Ei+XMdla4RK2YXLh5n+33YEl05cMF7l6vvzlypJLV1sbznZ2fqjX48XvHNnWjtPtrRfPGie/wdyEH1MW74dRgAAAABJRU5ErkJggg==",KA=""+new URL("github-6251e535.png",import.meta.url).href,$A=""+new URL("gitlab-bb401a43.png",import.meta.url).href,ZA=""+new URL("profile-d8824846.png",import.meta.url).href;const ih=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},QA={},JA={id:"rubrique"},eM=Ct("div",null,[Ct("h1",{class:"title"},"Portfolio")],-1),tM=c0('<div class="logo"><a target="_blank" href="https://fr.linkedin.com/in/mathieu-blanchet-5766b3230"><img id="logoLink" src="'+jA+'" alt="linkedin"></a><a target="_blank" href="https://github.com/BlMathieu/"><img id="logoGitH" src="'+KA+'" alt="github"></a><a target="_blank" href="https://gitlabinfo.iutmontp.univ-montp2.fr/blanchetm"><img id="logoGitL" src="'+$A+'" alt="gitlab"></a><a target="_blank" href="./../pdf/CV-Blanchet-Mathieu.pdf"><img id="logoCV" src="'+ZA+'" alt="CV"></a></div>',1);function nM(n,e){const t=Sx("RouterLink");return to(),Wa("nav",JA,[eM,Ct("div",null,[Ct("div",null,[ct(t,{class:"choix",to:{name:"accueil"}},{default:xr(()=>[Mr("Accueil")]),_:1})]),Ct("div",null,[ct(t,{class:"choix",to:{name:"informations"}},{default:xr(()=>[Mr("Informations")]),_:1})]),Ct("div",null,[ct(t,{class:"choix",to:{name:"projets"}},{default:xr(()=>[Mr("Projets")]),_:1})]),Ct("div",null,[ct(t,{class:"choix",to:{name:"contact"}},{default:xr(()=>[Mr("Contact")]),_:1})])]),tM])}const iM=ih(QA,[["render",nM]]),rM=Ga({__name:"App",setup(n){return(e,t)=>(to(),Wa(un,null,[Ct("header",null,[ct(iM)]),Ct("main",null,[ct(gi(nh))])],64))}}),sM="modulepreload",oM=function(n,e){return new URL(n,e).href},_u={},ln=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=oM(s,i),s in _u)return;_u[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":sM,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},aM={},lM=Ct("div",{class:"Presentation"},[Ct("p",null,"Blanchet Mathieu"),Ct("p",null,"Etudiant en 3eme année de BUT informatique"),Ct("hr")],-1),cM=[lM];function uM(n,e){return to(),Wa("section",null,cM)}const fM=ih(aM,[["render",uM]]),hM=qA({history:cA("./"),routes:[{path:"/portfolio-blanchetm",name:"accueil",component:fM},{path:"/portfolio-blanchetm/contact",name:"contact",component:()=>ln(()=>import("./ContactView-f529731c.js"),["./ContactView-f529731c.js","./ContactView-56c8a754.css"],import.meta.url)},{path:"/portfolio-blanchetm/informations",name:"informations",component:()=>ln(()=>import("./InformationView-6ada1993.js"),["./InformationView-6ada1993.js","./JavaFX-66aeb7d9.js","./cssLogo-9f7e8903.js","./JavaScript-d0a12f02.js","./Docker-a3b62ffe.js","./PHP-18a35fff.js","./sql-c404065f.js","./arrowleft-1bbbf34d.js","./InformationView-98c5ff28.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets",name:"projets",component:()=>ln(()=>import("./ProjetsView-15ff258a.js"),["./ProjetsView-15ff258a.js","./sfml-logo-10c3558b.js","./ProjetsView-1b2ce07f.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/AventurierDuRail",name:"AventurierDuRail",component:()=>ln(()=>import("./AventurierDuRail-653f0316.js"),["./AventurierDuRail-653f0316.js","./JavaFX-66aeb7d9.js","./ImageSwitch.vue_vue_type_style_index_0_lang-972ee0a9.js","./sfml-logo-10c3558b.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./ProjetsView-1b2ce07f.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/CasseBrique",name:"CasseBrique",component:()=>ln(()=>import("./CasseBrique-fa0a0e92.js"),["./CasseBrique-fa0a0e92.js","./JavaFX-66aeb7d9.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-972ee0a9.js","./sfml-logo-10c3558b.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./ProjetsView-1b2ce07f.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/Ecommerce",name:"Ecommerce",component:()=>ln(()=>import("./EcommerceView-34133154.js"),["./EcommerceView-34133154.js","./sql-c404065f.js","./PHP-18a35fff.js","./cssLogo-9f7e8903.js","./ImageSwitch.vue_vue_type_style_index_0_lang-972ee0a9.js","./sfml-logo-10c3558b.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./ProjetsView-1b2ce07f.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/DataDiag",name:"DataDiag",component:()=>ln(()=>import("./DataDiag-79d3c1d8.js"),["./DataDiag-79d3c1d8.js","./cssLogo-9f7e8903.js","./JavaScript-d0a12f02.js","./PHP-18a35fff.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-972ee0a9.js","./sfml-logo-10c3558b.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./ProjetsView-1b2ce07f.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/Visualisation",name:"Visualisation",component:()=>ln(()=>import("./VisualisationView-9ebc6639.js"),["./VisualisationView-9ebc6639.js","./Docker-a3b62ffe.js","./JavaScript-d0a12f02.js","./cssLogo-9f7e8903.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-972ee0a9.js","./sfml-logo-10c3558b.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./ProjetsView-1b2ce07f.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/KeyGuard",name:"KeyGuard",component:()=>ln(()=>import("./KeyGuard-25091df0.js"),["./KeyGuard-25091df0.js","./JavaFX-66aeb7d9.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-972ee0a9.js","./sfml-logo-10c3558b.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./ProjetsView-1b2ce07f.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/SFML",name:"SFML",component:()=>ln(()=>import("./SFML-7e90c3ee.js"),["./SFML-7e90c3ee.js","./ImageSwitch.vue_vue_type_style_index_0_lang-972ee0a9.js","./sfml-logo-10c3558b.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./ProjetsView-1b2ce07f.css"],import.meta.url)}]}),rh=W0(rM);rh.use(hM);rh.mount("#app");export{un as F,ih as _,c0 as a,Sx as b,Wa as c,Ga as d,dM as e,Ct as f,ct as g,Mr as h,to as o,ax as r,gi as u,xr as w};
