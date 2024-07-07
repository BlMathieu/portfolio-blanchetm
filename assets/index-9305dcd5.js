(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="157",hh=0,nl=1,dh=2,xu=1,ph=2,Mn=3,Kn=0,Ut=1,Sn=2,kn=0,Vi=1,il=2,rl=3,sl=4,mh=5,Bi=100,gh=101,_h=102,ol=103,al=104,vh=200,xh=201,Ah=202,Mh=203,Au=204,Mu=205,Sh=206,Eh=207,yh=208,Th=209,bh=210,Rh=0,wh=1,Ch=2,$o=3,Ph=4,Lh=5,Dh=6,Uh=7,Su=0,Ih=1,Nh=2,Wn=0,Oh=1,Fh=2,Bh=3,zh=4,Hh=5,Eu=300,Yi=301,ji=302,Zo=303,Qo=304,Fs=306,Jo=1e3,Zt=1001,ea=1002,Ct=1003,ll=1004,co=1005,Wt=1006,Gh=1007,Tr=1008,Xn=1009,Vh=1010,kh=1011,Sa=1012,yu=1013,Hn=1014,Gn=1015,br=1016,Tu=1017,bu=1018,fi=1020,Wh=1021,Qt=1023,Xh=1024,qh=1025,hi=1026,Ki=1027,Yh=1028,Ru=1029,jh=1030,wu=1031,Cu=1033,uo=33776,fo=33777,ho=33778,po=33779,cl=35840,ul=35841,fl=35842,hl=35843,Kh=36196,dl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,Al=37813,Ml=37814,Sl=37815,El=37816,yl=37817,Tl=37818,bl=37819,Rl=37820,wl=37821,mo=36492,Cl=36494,Pl=36495,$h=36283,Ll=36284,Dl=36285,Ul=36286,Pu=3e3,di=3001,Zh=3200,Qh=3201,Jh=0,ed=1,qt="",gt="srgb",bn="srgb-linear",Ea="display-p3",Bs="display-p3-linear",Rs="linear",tt="srgb",ws="rec709",Cs="p3",go=7680,td=519,nd=512,id=513,rd=514,sd=515,od=516,ad=517,ld=518,cd=519,Il=35044,Nl="300 es",ta=1035,En=2e3,Ps=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,na=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function ud(n,e){return(n%e+e)%e}function vo(n,e,t){return(1-t)*n+t*e}function Ol(n){return(n&n-1)===0&&n!==0}function ia(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],d=r[6],T=r[1],x=r[4],R=r[7],C=r[2],P=r[5],L=r[8];return s[0]=o*v+a*T+l*C,s[3]=o*m+a*x+l*P,s[6]=o*d+a*R+l*L,s[1]=c*v+u*T+f*C,s[4]=c*m+u*x+f*P,s[7]=c*d+u*R+f*L,s[2]=h*v+p*T+_*C,s[5]=h*m+p*x+_*P,s[8]=h*d+p*R+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new ke;function Lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fd(){const n=Rr("canvas");return n.style.display="block",n}const Fl={};function _r(n){n in Fl||(Fl[n]=!0,console.warn(n))}const Bl=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zl=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kr={[bn]:{transfer:Rs,primaries:ws,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:tt,primaries:ws,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bs]:{transfer:Rs,primaries:Cs,toReference:n=>n.applyMatrix3(zl),fromReference:n=>n.applyMatrix3(Bl)},[Ea]:{transfer:tt,primaries:Cs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zl),fromReference:n=>n.applyMatrix3(Bl).convertLinearToSRGB()}},hd=new Set([bn,Bs]),Ze={enabled:!0,_workingColorSpace:bn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=kr[e].toReference,r=kr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return kr[n].primaries},getTransfer:function(n){return n===qt?Rs:kr[n].transfer}};function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class Du{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=Rr("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class Uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mo(r[o].image)):s.push(Mo(r[o]))}else s=Mo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Du.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pd=0;class It extends nr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Zt,r=Zt,s=Wt,o=Tr,a=Qt,l=Xn,c=It.DEFAULT_ANISOTROPY,u=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Nr(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?gt:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jo:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jo:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?di:Pu}set encoding(e){_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===di?gt:qt}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Eu;It.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,R=(p+1)/2,C=(d+1)/2,P=(u+h)/4,L=(f+v)/4,$=(_+m)/4;return x>R&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=L/i):R>C?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=P/r,s=$/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=$/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(_r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===di?gt:qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends md{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Iu extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gd extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*v,T=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),P=Math.atan2(C,d*T);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const R=a*T;if(l=l*m+h*R,c=c*m+p*R,u=u*m+_*R,f=f*m+v*R,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new k,Hl=new Or;class Fr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)mn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(mn)}else r.boundingBox===null&&r.computeBoundingBox(),Ei.copy(r.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Wr.subVectors(this.max,ar),yi.subVectors(e.a,ar),Ti.subVectors(e.b,ar),bi.subVectors(e.c,ar),Cn.subVectors(Ti,yi),Pn.subVectors(bi,Ti),Jn.subVectors(yi,bi);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Jn.z,Jn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Jn.z,0,-Jn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Jn.y,Jn.x,0];return!Eo(t,yi,Ti,bi,Wr)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,yi,Ti,bi,Wr))?!1:(Xr.crossVectors(Cn,Pn),t=[Xr.x,Xr.y,Xr.z],Eo(t,yi,Ti,bi,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new k,new k,new k,new k,new k,new k,new k,new k],mn=new k,Ei=new Fr,yi=new k,Ti=new k,bi=new k,Cn=new k,Pn=new k,Jn=new k,ar=new k,Wr=new k,Xr=new k,ei=new k;function Eo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ei.fromArray(n,s);const a=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _d=new Fr,lr=new k,yo=new k;class zs{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_d.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(yo)),this.expandByPoint(lr.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new k,To=new k,qr=new k,Ln=new k,bo=new k,Yr=new k,Ro=new k;class Nu{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){To.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(To);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=Ln.dot(this.direction),l=-Ln.dot(qr),c=Ln.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(To).addScaledVector(qr,h),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){bo.subVectors(t,e),Yr.subVectors(i,e),Ro.crossVectors(bo,Yr);let o=this.direction.dot(Ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const l=a*this.direction.dot(Yr.crossVectors(Ln,Yr));if(l<0)return null;const c=a*this.direction.dot(bo.cross(Ln));if(c<0||l+c>o)return null;const u=-a*Ln.dot(Ro);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,xd)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Dn.crossVectors(i,zt),Dn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Dn.crossVectors(i,zt)),Dn.normalize(),jr.crossVectors(zt,Dn),r[0]=Dn.x,r[4]=jr.x,r[8]=zt.x,r[1]=Dn.y,r[5]=jr.y,r[9]=zt.y,r[2]=Dn.z,r[6]=jr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],T=i[3],x=i[7],R=i[11],C=i[15],P=r[0],L=r[4],$=r[8],M=r[12],b=r[1],Z=r[5],de=r[9],he=r[13],N=r[2],q=r[6],te=r[10],G=r[14],ne=r[3],J=r[7],le=r[11],O=r[15];return s[0]=o*P+a*b+l*N+c*ne,s[4]=o*L+a*Z+l*q+c*J,s[8]=o*$+a*de+l*te+c*le,s[12]=o*M+a*he+l*G+c*O,s[1]=u*P+f*b+h*N+p*ne,s[5]=u*L+f*Z+h*q+p*J,s[9]=u*$+f*de+h*te+p*le,s[13]=u*M+f*he+h*G+p*O,s[2]=_*P+v*b+m*N+d*ne,s[6]=_*L+v*Z+m*q+d*J,s[10]=_*$+v*de+m*te+d*le,s[14]=_*M+v*he+m*G+d*O,s[3]=T*P+x*b+R*N+C*ne,s[7]=T*L+x*Z+R*q+C*J,s[11]=T*$+x*de+R*te+C*le,s[15]=T*M+x*he+R*G+C*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],T=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,x=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,R=u*v*c-_*f*c+_*a*p-o*v*p-u*a*d+o*f*d,C=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,P=t*T+i*x+r*R+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=T*L,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*L,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=x*L,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*L,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*L,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*L,e[8]=R*L,e[9]=(_*f*s-u*v*s-_*i*p+t*v*p+u*i*d-t*f*d)*L,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*d+t*a*d)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*L,e[12]=C*L,e[13]=(u*v*r-_*f*r+_*i*h-t*v*h-u*i*m+t*f*m)*L,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,v=o*u,m=o*f,d=a*f,T=l*c,x=l*u,R=l*f,C=i.x,P=i.y,L=i.z;return r[0]=(1-(v+d))*C,r[1]=(p+R)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-R)*P,r[5]=(1-(h+d))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(_+x)*L,r[9]=(m-T)*L,r[10]=(1-(h+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const o=Ri.set(r[4],r[5],r[6]).length(),a=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const c=1/s,u=1/o,f=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=En){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===En)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ps)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=En){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let _,v;if(a===En)_=(o+s)*f,v=-2*f;else if(a===Ps)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ri=new k,Yt=new pt,vd=new k(0,0,0),xd=new k(1,1,1),Dn=new k,jr=new k,zt=new k,Gl=new pt,Vl=new Or;class Hs{constructor(e=0,t=0,i=0,r=Hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hs.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ad=0;const kl=new k,wi=new Or,_n=new pt,Kr=new k,cr=new k,Md=new k,Sd=new Or,Wl=new k(1,0,0),Xl=new k(0,1,0),ql=new k(0,0,1),Ed={type:"added"},yd={type:"removed"};class Nt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new k,t=new Hs,i=new Or,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kr.copy(e):Kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(cr,Kr,this.up):_n.lookAt(Kr,cr,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(_n),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ed)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new k,vn=new k,wo=new k,xn=new k,Ci=new k,Pi=new k,Yl=new k,Co=new k,Po=new k,Lo=new k;let $r=!1;class $t{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jt.subVectors(r,t),vn.subVectors(i,t),wo.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(vn),l=jt.dot(wo),c=vn.dot(vn),u=vn.dot(wo),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,i,r,s,o,a,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,xn),l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l}static isFrontFacing(e,t,i,r){return jt.subVectors(i,t),vn.subVectors(e,t),jt.cross(vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ci.subVectors(r,i),Pi.subVectors(s,i),Co.subVectors(e,i);const l=Ci.dot(Co),c=Pi.dot(Co);if(l<=0&&c<=0)return t.copy(i);Po.subVectors(e,r);const u=Ci.dot(Po),f=Pi.dot(Po);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ci,o);Lo.subVectors(e,s);const p=Ci.dot(Lo),_=Pi.dot(Lo);if(_>=0&&p<=_)return t.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Pi,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Yl.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(Yl,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(Ci,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Td=0;class Br extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Vi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Mu,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Do(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=ud(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Do(o,s,e+1/3),this.g=Do(o,s,e),this.b=Do(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const i=Fu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ze.fromWorkingColorSpace(At.copy(this),e),Math.round(Dt(At.r*255,0,255))*65536+Math.round(Dt(At.g*255,0,255))*256+Math.round(Dt(At.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=gt){Ze.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Zr);const i=vo(Un.h,Zr.h,t),r=vo(Un.s,Zr.s,t),s=vo(Un.l,Zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Je;Je.NAMES=Fu;class Bu extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new k,Qr=new Qe;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Il,this.updateRange={offset:0,count:-1},this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class zu extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hu extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bd=0;const kt=new pt,Uo=new Nt,Li=new k,Ht=new Fr,ur=new Fr,ht=new k;class Rn extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Hu:zu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Ht.min,ur.min),Ht.expandByPoint(ht),ht.addVectors(Ht.max,ur.max),Ht.expandByPoint(ht)):(Ht.expandByPoint(ur.min),Ht.expandByPoint(ur.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),ht.add(Li)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new k,u[b]=new k;const f=new k,h=new k,p=new k,_=new Qe,v=new Qe,m=new Qe,d=new k,T=new k;function x(b,Z,de){f.fromArray(r,b*3),h.fromArray(r,Z*3),p.fromArray(r,de*3),_.fromArray(o,b*2),v.fromArray(o,Z*2),m.fromArray(o,de*2),h.sub(f),p.sub(f),v.sub(_),m.sub(_);const he=1/(v.x*m.y-m.x*v.y);isFinite(he)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(he),T.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(he),c[b].add(d),c[Z].add(d),c[de].add(d),u[b].add(T),u[Z].add(T),u[de].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let b=0,Z=R.length;b<Z;++b){const de=R[b],he=de.start,N=de.count;for(let q=he,te=he+N;q<te;q+=3)x(i[q+0],i[q+1],i[q+2])}const C=new k,P=new k,L=new k,$=new k;function M(b){L.fromArray(s,b*3),$.copy(L);const Z=c[b];C.copy(Z),C.sub(L.multiplyScalar(L.dot(Z))).normalize(),P.crossVectors($,Z);const he=P.dot(u[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=he}for(let b=0,Z=R.length;b<Z;++b){const de=R[b],he=de.start,N=de.count;for(let q=he,te=he+N;q<te;q+=3)M(i[q+0]),M(i[q+1]),M(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new pt,ti=new Nu,Jr=new zs,Kl=new k,Di=new k,Ui=new k,Ii=new k,Io=new k,es=new k,ts=new Qe,ns=new Qe,is=new Qe,$l=new k,Zl=new k,Ql=new k,rs=new k,ss=new k;class Vn extends Nt{constructor(e=new Rn,t=new Bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Io.fromBufferAttribute(f,e),o?es.addScaledVector(Io,u):es.addScaledVector(Io.sub(t),u))}t.add(es)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Jr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Jr,Kl)===null||ti.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(jl.copy(s).invert(),ti.copy(e.ray).applyMatrix4(jl),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let R=T,C=x;R<C;R+=3){const P=a.getX(R),L=a.getX(R+1),$=a.getX(R+2);r=os(this,d,e,i,c,u,f,P,L,$),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const T=a.getX(m),x=a.getX(m+1),R=a.getX(m+2);r=os(this,o,e,i,c,u,f,T,x,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let R=T,C=x;R<C;R+=3){const P=R,L=R+1,$=R+2;r=os(this,d,e,i,c,u,f,P,L,$),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const T=m,x=m+1,R=m+2;r=os(this,o,e,i,c,u,f,T,x,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Rd(n,e,t,i,r,s,o,a){let l;if(e.side===Ut?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Kn,a),l===null)return null;ss.copy(a),ss.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ss);return c<t.near||c>t.far?null:{distance:c,point:ss.clone(),object:n}}function os(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Di),n.getVertexPosition(l,Ui),n.getVertexPosition(c,Ii);const u=Rd(n,e,t,i,Di,Ui,Ii,rs);if(u){r&&(ts.fromBufferAttribute(r,a),ns.fromBufferAttribute(r,l),is.fromBufferAttribute(r,c),u.uv=$t.getInterpolation(rs,Di,Ui,Ii,ts,ns,is,new Qe)),s&&(ts.fromBufferAttribute(s,a),ns.fromBufferAttribute(s,l),is.fromBufferAttribute(s,c),u.uv1=$t.getInterpolation(rs,Di,Ui,Ii,ts,ns,is,new Qe),u.uv2=u.uv1),o&&($l.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,l),Ql.fromBufferAttribute(o,c),u.normal=$t.getInterpolation(rs,Di,Ui,Ii,$l,Zl,Ql,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};$t.getNormal(Di,Ui,Ii,f.normal),u.face=f}return u}class zr extends Rn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(f,2));function _(v,m,d,T,x,R,C,P,L,$,M){const b=R/L,Z=C/$,de=R/2,he=C/2,N=P/2,q=L+1,te=$+1;let G=0,ne=0;const J=new k;for(let le=0;le<te;le++){const O=le*Z-he;for(let Y=0;Y<q;Y++){const xe=Y*b-de;J[v]=xe*T,J[m]=O*x,J[d]=N,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[d]=P>0?1:-1,u.push(J.x,J.y,J.z),f.push(Y/L),f.push(1-le/$),G+=1}}for(let le=0;le<$;le++)for(let O=0;O<L;O++){const Y=h+O+q*le,xe=h+O+q*(le+1),Me=h+(O+1)+q*(le+1),Te=h+(O+1)+q*le;l.push(Y,xe,Te),l.push(xe,Me,Te),ne+=6}a.addGroup(p,ne,M),p+=ne,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=$i(n[t]);for(const r in i)e[r]=i[r]}return e}function wd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gu(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const Cd={clone:$i,merge:wt};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Vu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Oi=1;class Dd extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(Ni,Oi,e,t);r.layers=this.layers,this.add(r);const s=new Xt(Ni,Oi,e,t);s.layers=this.layers,this.add(s);const o=new Xt(Ni,Oi,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Ni,Oi,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Ni,Oi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ni,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ku extends It{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(_r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===di?gt:qt),this.texture=new ku(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:kn});s.uniforms.tEquirect.value=t;const o=new Vn(r,s),a=t.minFilter;return t.minFilter===Tr&&(t.minFilter=Wt),new Dd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const No=new k,Id=new k,Nd=new ke;class si{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=No.subVectors(i,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(No),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nd.getNormalMatrix(e),r=this.coplanarPoint(No).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new zs,as=new k;class Wu{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,o=new si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],v=r[10],m=r[11],d=r[12],T=r[13],x=r[14],R=r[15];if(i[0].setComponents(l-s,h-c,m-p,R-d).normalize(),i[1].setComponents(l+s,h+c,m+p,R+d).normalize(),i[2].setComponents(l+o,h+u,m+_,R+T).normalize(),i[3].setComponents(l-o,h-u,m-_,R-T).normalize(),i[4].setComponents(l-a,h-f,m-v,R-x).normalize(),t===En)i[5].setComponents(l+a,h+f,m+v,R+x).normalize();else if(t===Ps)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(as.x=r.normal.x>0?e.max.x:e.min.x,as.y=r.normal.y>0?e.max.y:e.min.y,as.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Od(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ya extends Rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const T=d*h-o;for(let x=0;x<c;x++){const R=x*f-s;_.push(R,-T,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const x=T+c*d,R=T+c*(d+1),C=T+1+c*(d+1),P=T+1+c*d;p.push(x,R,P),p.push(R,C,P)}this.setIndex(p),this.setAttribute("position",new pi(_,3)),this.setAttribute("normal",new pi(v,3)),this.setAttribute("uv",new pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`
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
}`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Ip=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
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
#endif`,Zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Vm=`#define DISTANCE
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
}`,km=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
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
}`,Zm=`#define LAMBERT
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
}`,Qm=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,eg=`#define NORMAL
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
}`,tg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,rg=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,ag=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,fg=`uniform vec3 color;
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
}`,hg=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Fd,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:Hd,alphatest_fragment:Gd,alphatest_pars_fragment:Vd,aomap_fragment:kd,aomap_pars_fragment:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:jd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:Jd,color_fragment:ep,color_pars_fragment:tp,color_pars_vertex:np,color_vertex:ip,common:rp,cube_uv_reflection_fragment:sp,defaultnormal_vertex:op,displacementmap_pars_vertex:ap,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:up,colorspace_fragment:fp,colorspace_pars_fragment:hp,envmap_fragment:dp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:wp,envmap_vertex:_p,fog_vertex:vp,fog_pars_vertex:xp,fog_fragment:Ap,fog_pars_fragment:Mp,gradientmap_pars_fragment:Sp,lightmap_fragment:Ep,lightmap_pars_fragment:yp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:bp,lights_pars_begin:Rp,lights_toon_fragment:Cp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Up,lights_physical_pars_fragment:Ip,lights_fragment_begin:Np,lights_fragment_maps:Op,lights_fragment_end:Fp,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Gp,map_fragment:Vp,map_pars_fragment:kp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Yp,morphcolor_vertex:jp,morphnormal_vertex:Kp,morphtarget_pars_vertex:$p,morphtarget_vertex:Zp,normal_fragment_begin:Qp,normal_fragment_maps:Jp,normal_pars_fragment:em,normal_pars_vertex:tm,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:um,project_vertex:fm,dithering_fragment:hm,dithering_pars_fragment:dm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:_m,shadowmap_vertex:vm,shadowmask_pars_fragment:xm,skinbase_vertex:Am,skinning_pars_vertex:Mm,skinning_vertex:Sm,skinnormal_vertex:Em,specularmap_fragment:ym,specularmap_pars_fragment:Tm,tonemapping_fragment:bm,tonemapping_pars_fragment:Rm,transmission_fragment:wm,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Um,background_vert:Im,background_frag:Nm,backgroundCube_vert:Om,backgroundCube_frag:Fm,cube_vert:Bm,cube_frag:zm,depth_vert:Hm,depth_frag:Gm,distanceRGBA_vert:Vm,distanceRGBA_frag:km,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:qm,linedashed_frag:Ym,meshbasic_vert:jm,meshbasic_frag:Km,meshlambert_vert:$m,meshlambert_frag:Zm,meshmatcap_vert:Qm,meshmatcap_frag:Jm,meshnormal_vert:eg,meshnormal_frag:tg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:rg,meshphysical_frag:sg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:ug,shadow_frag:fg,sprite_vert:hg,sprite_frag:dg},Ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ln={basic:{uniforms:wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:wt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:wt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:wt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:wt([Ae.points,Ae.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:wt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:wt([Ae.common,Ae.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:wt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:wt([Ae.sprite,Ae.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:wt([Ae.common,Ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:wt([Ae.lights,Ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ln.physical={uniforms:wt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ls={r:0,b:0,g:0};function pg(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(m,d){let T=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),T=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Fs)?(u===void 0&&(u=new Vn(new zr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:$i(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(x.colorSpace)!==tt,(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Vn(new ya(2,2),new vi({name:"BackgroundMaterial",uniforms:$i(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(ls,Gu(n)),i.buffers.color.setClear(ls.r,ls.g,ls.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:_}}function mg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(N,q,te,G,ne){let J=!1;if(o){const le=v(G,te,q);c!==le&&(c=le,p(c.object)),J=d(N,G,te,ne),J&&T(N,G,te,ne)}else{const le=q.wireframe===!0;(c.geometry!==G.id||c.program!==te.id||c.wireframe!==le)&&(c.geometry=G.id,c.program=te.id,c.wireframe=le,J=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,$(N,q,te,G),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,q,te){const G=te.wireframe===!0;let ne=a[N.id];ne===void 0&&(ne={},a[N.id]=ne);let J=ne[q.id];J===void 0&&(J={},ne[q.id]=J);let le=J[G];return le===void 0&&(le=m(h()),J[G]=le),le}function m(N){const q=[],te=[],G=[];for(let ne=0;ne<r;ne++)q[ne]=0,te[ne]=0,G[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:G,object:N,attributes:{},index:null}}function d(N,q,te,G){const ne=c.attributes,J=q.attributes;let le=0;const O=te.getAttributes();for(const Y in O)if(O[Y].location>=0){const Me=ne[Y];let Te=J[Y];if(Te===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Te=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Te=N.instanceColor)),Me===void 0||Me.attribute!==Te||Te&&Me.data!==Te.data)return!0;le++}return c.attributesNum!==le||c.index!==G}function T(N,q,te,G){const ne={},J=q.attributes;let le=0;const O=te.getAttributes();for(const Y in O)if(O[Y].location>=0){let Me=J[Y];Me===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const Te={};Te.attribute=Me,Me&&Me.data&&(Te.data=Me.data),ne[Y]=Te,le++}c.attributes=ne,c.attributesNum=le,c.index=G}function x(){const N=c.newAttributes;for(let q=0,te=N.length;q<te;q++)N[q]=0}function R(N){C(N,0)}function C(N,q){const te=c.newAttributes,G=c.enabledAttributes,ne=c.attributeDivisors;te[N]=1,G[N]===0&&(n.enableVertexAttribArray(N),G[N]=1),ne[N]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,q),ne[N]=q)}function P(){const N=c.newAttributes,q=c.enabledAttributes;for(let te=0,G=q.length;te<G;te++)q[te]!==N[te]&&(n.disableVertexAttribArray(te),q[te]=0)}function L(N,q,te,G,ne,J,le){le===!0?n.vertexAttribIPointer(N,q,te,ne,J):n.vertexAttribPointer(N,q,te,G,ne,J)}function $(N,q,te,G){if(i.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ne=G.attributes,J=te.getAttributes(),le=q.defaultAttributeValues;for(const O in J){const Y=J[O];if(Y.location>=0){let xe=ne[O];if(xe===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),xe!==void 0){const Me=xe.normalized,Te=xe.itemSize,Re=t.get(xe);if(Re===void 0)continue;const F=Re.buffer,ee=Re.type,ae=Re.bytesPerElement,Se=i.isWebGL2===!0&&(ee===n.INT||ee===n.UNSIGNED_INT||xe.gpuType===yu);if(xe.isInterleavedBufferAttribute){const ye=xe.data,I=ye.stride,S=xe.offset;if(ye.isInstancedInterleavedBuffer){for(let y=0;y<Y.locationSize;y++)C(Y.location+y,ye.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let y=0;y<Y.locationSize;y++)R(Y.location+y);n.bindBuffer(n.ARRAY_BUFFER,F);for(let y=0;y<Y.locationSize;y++)L(Y.location+y,Te/Y.locationSize,ee,Me,I*ae,(S+Te/Y.locationSize*y)*ae,Se)}else{if(xe.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)C(Y.location+ye,xe.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ye=0;ye<Y.locationSize;ye++)R(Y.location+ye);n.bindBuffer(n.ARRAY_BUFFER,F);for(let ye=0;ye<Y.locationSize;ye++)L(Y.location+ye,Te/Y.locationSize,ee,Me,Te*ae,Te/Y.locationSize*ye*ae,Se)}}else if(le!==void 0){const Me=le[O];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(Y.location,Me);break;case 3:n.vertexAttrib3fv(Y.location,Me);break;case 4:n.vertexAttrib4fv(Y.location,Me);break;default:n.vertexAttrib1fv(Y.location,Me)}}}}P()}function M(){de();for(const N in a){const q=a[N];for(const te in q){const G=q[te];for(const ne in G)_(G[ne].object),delete G[ne];delete q[te]}delete a[N]}}function b(N){if(a[N.id]===void 0)return;const q=a[N.id];for(const te in q){const G=q[te];for(const ne in G)_(G[ne].object),delete G[ne];delete q[te]}delete a[N.id]}function Z(N){for(const q in a){const te=a[q];if(te[N.id]===void 0)continue;const G=te[N.id];for(const ne in G)_(G[ne].object),delete G[ne];delete te[N.id]}}function de(){he(),u=!0,c!==l&&(c=l,p(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:de,resetDefaultState:he,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:Z,initAttributes:x,enableAttribute:R,disableUnusedAttributes:P}}function gg(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function _g(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,R=o||e.has("OES_texture_float"),C=x&&R,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:C,maxSamples:P}}function vg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new si,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,x=T*4;let R=d.clippingState||null;l.value=R,R=u(_,h,x,p);for(let C=0;C!==x;++C)R[C]=t[C];d.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,R=p;x!==v;++x,R+=4)o.copy(f[x]).applyMatrix4(T,a),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function xg(n){let e=new WeakMap;function t(o,a){return a===Zo?o.mapping=Yi:a===Qo&&(o.mapping=ji),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Zo||a===Qo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ud(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ag extends Vu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,Jl=[.125,.215,.35,.446,.526,.582],ai=20,Oo=new Ag,ec=new Je;let Fo=null;const oi=(1+Math.sqrt(5))/2,Fi=1/oi,tc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,oi,Fi),new k(0,oi,-Fi),new k(Fi,0,oi),new k(-Fi,0,oi),new k(oi,Fi,0),new k(-oi,Fi,0)];class nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo),e.scissorTest=!1,cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:br,format:Qt,colorSpace:bn,depthBuffer:!1},r=ic(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(s)),this._blurMaterial=Sg(s,e,t)}return r}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,i,r){const a=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ec),u.toneMapping=Wn,u.autoClear=!1;const p=new Bu({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new Vn(new zr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(ec),v=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;cs(r,T*x,d>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yi||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tc[(r-1)%tc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Vn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ai-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):ai;m>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const d=[];let T=0;for(let L=0;L<ai;++L){const $=L/v,M=Math.exp(-$*$/2);d.push(M),L===0?T+=M:L<m&&(T+=2*M)}for(let L=0;L<d.length;L++)d[L]=d[L]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const R=this._sizeLods[r],C=3*R*(r>x-Hi?r-x+Hi:0),P=4*(this._cubeSize-R);cs(t,C,P,3*R,2*R),l.setRenderTarget(t),l.render(f,Oo)}}function Mg(n){const e=[],t=[],i=[];let r=n;const s=n-Hi+1+Jl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Hi?l=Jl[o-n+Hi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,T=new Float32Array(v*_*p),x=new Float32Array(m*_*p),R=new Float32Array(d*_*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,$=P>2?0:-1,M=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];T.set(M,v*_*P),x.set(h,m*_*P);const b=[P,P,P,P,P,P];R.set(b,d*_*P)}const C=new Rn;C.setAttribute("position",new nn(T,v)),C.setAttribute("uv",new nn(x,m)),C.setAttribute("faceIndex",new nn(R,d)),e.push(C),r>Hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ic(n,e,t){const i=new _i(n,e,t);return i.texture.mapping=Fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sg(n,e,t){const i=new Float32Array(ai),r=new k(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function rc(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sc(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function Eg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zo||l===Qo,u=l===Yi||l===ji;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new nc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new nc(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tg(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let x=0,R=T.length;x<R;x+=3){const C=T[x+0],P=T[x+1],L=T[x+2];h.push(C,P,P,L,L,C)}}else if(_!==void 0){const T=_.array;v=_.version;for(let x=0,R=T.length/3-1;x<R;x+=3){const C=x+0,P=x+1,L=x+2;h.push(C,P,P,L,L,C)}}else return;const m=new(Lu(h)?Hu:zu)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function bg(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,_){if(_===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Rg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wg(n,e){return n[0]-e[0]}function Cg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Pg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let v=s.get(u);if(v===void 0||v.count!==_){let N=function(){de.dispose(),s.delete(u),u.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const T=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let $=0;T===!0&&($=1),x===!0&&($=2),R===!0&&($=3);let M=u.attributes.position.count*$,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const Z=new Float32Array(M*b*4*_),de=new Iu(Z,M,b,_);de.type=Gn,de.needsUpdate=!0;const he=$*4;for(let q=0;q<_;q++){const te=C[q],G=P[q],ne=L[q],J=M*b*4*q;for(let le=0;le<te.count;le++){const O=le*he;T===!0&&(o.fromBufferAttribute(te,le),Z[J+O+0]=o.x,Z[J+O+1]=o.y,Z[J+O+2]=o.z,Z[J+O+3]=0),x===!0&&(o.fromBufferAttribute(G,le),Z[J+O+4]=o.x,Z[J+O+5]=o.y,Z[J+O+6]=o.z,Z[J+O+7]=0),R===!0&&(o.fromBufferAttribute(ne,le),Z[J+O+8]=o.x,Z[J+O+9]=o.y,Z[J+O+10]=o.z,Z[J+O+11]=ne.itemSize===4?o.w:1)}}v={count:_,texture:de,size:new Qe(M,b)},s.set(u,v),u.addEventListener("dispose",N)}let m=0;for(let T=0;T<h.length;T++)m+=h[T];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const p=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==p){_=[];for(let x=0;x<p;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<p;x++){const R=_[x];R[0]=x,R[1]=h[x]}_.sort(Cg);for(let x=0;x<8;x++)x<p&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(wg);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const R=a[x],C=R[0],P=R[1];C!==Number.MAX_SAFE_INTEGER&&P?(v&&u.getAttribute("morphTarget"+x)!==v[C]&&u.setAttribute("morphTarget"+x,v[C]),m&&u.getAttribute("morphNormal"+x)!==m[C]&&u.setAttribute("morphNormal"+x,m[C]),r[x]=P,d+=P):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const T=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Lg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const qu=new It,Yu=new Iu,ju=new gd,Ku=new ku,oc=[],ac=[],lc=new Float32Array(16),cc=new Float32Array(9),uc=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=oc[r];if(s===void 0&&(s=new Float32Array(r),oc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gs(n,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;uc.set(i),n.uniformMatrix2fv(this.addr,!1,uc),ft(t,i)}}function Fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;cc.set(i),n.uniformMatrix3fv(this.addr,!1,cc),ft(t,i)}}function Bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;lc.set(i),n.uniformMatrix4fv(this.addr,!1,lc),ft(t,i)}}function zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function Yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||qu,r)}function jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ju,r)}function Kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ku,r)}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Yu,r)}function Zg(n){switch(n){case 5126:return Dg;case 35664:return Ug;case 35665:return Ig;case 35666:return Ng;case 35674:return Og;case 35675:return Fg;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return kg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return $g}}function Qg(n,e){n.uniform1fv(this.addr,e)}function Jg(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function e_(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function t_(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function n_(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function i_(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r_(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function s_(n,e){n.uniform1iv(this.addr,e)}function o_(n,e){n.uniform2iv(this.addr,e)}function a_(n,e){n.uniform3iv(this.addr,e)}function l_(n,e){n.uniform4iv(this.addr,e)}function c_(n,e){n.uniform1uiv(this.addr,e)}function u_(n,e){n.uniform2uiv(this.addr,e)}function f_(n,e){n.uniform3uiv(this.addr,e)}function h_(n,e){n.uniform4uiv(this.addr,e)}function d_(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qu,s[o])}function p_(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ju,s[o])}function m_(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ku,s[o])}function g_(n,e,t){const i=this.cache,r=e.length,s=Gs(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Yu,s[o])}function __(n){switch(n){case 5126:return Qg;case 35664:return Jg;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return f_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class v_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Zg(t.type)}}class x_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=__(t.type)}}class A_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function fc(n,e){n.seq.push(e),n.map[e.id]=e}function M_(n,e,t){const i=n.name,r=i.length;for(Bo.lastIndex=0;;){const s=Bo.exec(i),o=Bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){fc(t,c===void 0?new v_(a,n,e):new x_(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new A_(a),fc(t,f)),t=f}}}class xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);M_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let S_=0;function E_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function y_(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Cs&&t===ws?i="LinearDisplayP3ToLinearSRGB":e===ws&&t===Cs&&(i="LinearSRGBToLinearDisplayP3"),n){case bn:case Bs:return[i,"LinearTransferOETF"];case gt:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+E_(n.getShaderSource(e),o)}else return r}function T_(n,e){const t=y_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b_(n,e){let t;switch(e){case Oh:t="Linear";break;case Fh:t="Reinhard";break;case Bh:t="OptimizedCineon";break;case zh:t="ACESFilmic";break;case Hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function R_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function w_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function C_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function pc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(n){return n.replace(P_,D_)}const L_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function D_(n,e){let t=Ge[e];if(t===void 0){const i=L_.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ra(t)}const U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(n){return n.replace(U_,I_)}function I_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _c(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function O_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case ji:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function B_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Su:e="ENVMAP_BLENDING_MULTIPLY";break;case Ih:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function z_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function H_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=N_(t),c=O_(t),u=F_(t),f=B_(t),h=z_(t),p=t.isWebGL2?"":R_(t),_=w_(s),v=r.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(m=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[p,_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Wn?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=ra(o),o=pc(o,t),o=mc(o,t),a=ra(a),a=pc(a,t),a=mc(a,t),o=gc(o),a=gc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=T+m+o,R=T+d+a,C=hc(r,r.VERTEX_SHADER,x),P=hc(r,r.FRAGMENT_SHADER,R);if(r.attachShader(v,C),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(v).trim(),b=r.getShaderInfoLog(C).trim(),Z=r.getShaderInfoLog(P).trim();let de=!0,he=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,P);else{const N=dc(r,C,"vertex"),q=dc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+N+`
`+q)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||Z==="")&&(he=!1);he&&(this.diagnostics={runnable:de,programLog:M,vertexShader:{log:b,prefix:m},fragmentShader:{log:Z,prefix:d}})}r.deleteShader(C),r.deleteShader(P);let L;this.getUniforms=function(){return L===void 0&&(L=new xs(r,v)),L};let $;return this.getAttributes=function(){return $===void 0&&($=C_(r,v)),$},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=P,this}let G_=0;class V_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new k_(e),t.set(e,i)),i}}class k_{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}}function W_(n,e,t,i,r,s,o){const a=new Ou,l=new V_,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,b,Z,de,he){const N=de.fog,q=he.geometry,te=M.isMeshStandardMaterial?de.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),ne=G&&G.mapping===Fs?G.image.height:null,J=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,O=le!==void 0?le.length:0;let Y=0;q.morphAttributes.position!==void 0&&(Y=1),q.morphAttributes.normal!==void 0&&(Y=2),q.morphAttributes.color!==void 0&&(Y=3);let xe,Me,Te,Re;if(J){const et=ln[J];xe=et.vertexShader,Me=et.fragmentShader}else xe=M.vertexShader,Me=M.fragmentShader,l.update(M),Te=l.getVertexShaderID(M),Re=l.getFragmentShaderID(M);const F=n.getRenderTarget(),ee=he.isInstancedMesh===!0,ae=!!M.map,Se=!!M.matcap,ye=!!G,I=!!M.aoMap,S=!!M.lightMap,y=!!M.bumpMap,U=!!M.normalMap,B=!!M.displacementMap,V=!!M.emissiveMap,Q=!!M.metalnessMap,se=!!M.roughnessMap,ie=M.anisotropy>0,ue=M.clearcoat>0,oe=M.iridescence>0,A=M.sheen>0,g=M.transmission>0,D=ie&&!!M.anisotropyMap,W=ue&&!!M.clearcoatMap,X=ue&&!!M.clearcoatNormalMap,re=ue&&!!M.clearcoatRoughnessMap,ge=oe&&!!M.iridescenceMap,ce=oe&&!!M.iridescenceThicknessMap,ve=A&&!!M.sheenColorMap,De=A&&!!M.sheenRoughnessMap,qe=!!M.specularMap,pe=!!M.specularColorMap,je=!!M.specularIntensityMap,Ce=g&&!!M.transmissionMap,Pe=g&&!!M.thicknessMap,Ue=!!M.gradientMap,w=!!M.alphaMap,_e=M.alphaTest>0,me=!!M.alphaHash,be=!!M.extensions,Ee=!!q.attributes.uv1,fe=!!q.attributes.uv2,Le=!!q.attributes.uv3;let ze=Wn;return M.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ze=n.toneMapping),{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:xe,fragmentShader:Me,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ee,instancingColor:ee&&he.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:bn,map:ae,matcap:Se,envMap:ye,envMapMode:ye&&G.mapping,envMapCubeUVHeight:ne,aoMap:I,lightMap:S,bumpMap:y,normalMap:U,displacementMap:h&&B,emissiveMap:V,normalMapObjectSpace:U&&M.normalMapType===ed,normalMapTangentSpace:U&&M.normalMapType===Jh,metalnessMap:Q,roughnessMap:se,anisotropy:ie,anisotropyMap:D,clearcoat:ue,clearcoatMap:W,clearcoatNormalMap:X,clearcoatRoughnessMap:re,iridescence:oe,iridescenceMap:ge,iridescenceThicknessMap:ce,sheen:A,sheenColorMap:ve,sheenRoughnessMap:De,specularMap:qe,specularColorMap:pe,specularIntensityMap:je,transmission:g,transmissionMap:Ce,thicknessMap:Pe,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===Vi,alphaMap:w,alphaTest:_e,alphaHash:me,combine:M.combine,mapUv:ae&&v(M.map.channel),aoMapUv:I&&v(M.aoMap.channel),lightMapUv:S&&v(M.lightMap.channel),bumpMapUv:y&&v(M.bumpMap.channel),normalMapUv:U&&v(M.normalMap.channel),displacementMapUv:B&&v(M.displacementMap.channel),emissiveMapUv:V&&v(M.emissiveMap.channel),metalnessMapUv:Q&&v(M.metalnessMap.channel),roughnessMapUv:se&&v(M.roughnessMap.channel),anisotropyMapUv:D&&v(M.anisotropyMap.channel),clearcoatMapUv:W&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:X&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(M.sheenRoughnessMap.channel),specularMapUv:qe&&v(M.specularMap.channel),specularColorMapUv:pe&&v(M.specularColorMap.channel),specularIntensityMapUv:je&&v(M.specularIntensityMap.channel),transmissionMapUv:Ce&&v(M.transmissionMap.channel),thicknessMapUv:Pe&&v(M.thicknessMap.channel),alphaMapUv:w&&v(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(U||ie),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:fe,vertexUv3s:Le,pointsUvs:he.isPoints===!0&&!!q.attributes.uv&&(ae||w),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:he.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sn,flipSided:M.side===Ut,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:be&&M.extensions.derivatives===!0,extensionFragDepth:be&&M.extensions.fragDepth===!0,extensionDrawBuffers:be&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)b.push(Z),b.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(T(b,M),x(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function T(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function R(M){const b=_[M.type];let Z;if(b){const de=ln[b];Z=Cd.clone(de.uniforms)}else Z=M.uniforms;return Z}function C(M,b){let Z;for(let de=0,he=c.length;de<he;de++){const N=c[de];if(N.cacheKey===b){Z=N,++Z.usedTimes;break}}return Z===void 0&&(Z=new H_(n,b,M,s),c.push(Z)),Z}function P(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:R,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:$}}function X_(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function q_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||q_),i.length>1&&i.sort(h||vc),r.length>1&&r.sort(h||vc)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Y_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new xc,n.set(i,[o])):r>=s.length?(o=new xc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function j_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Je};break;case"SpotLight":t={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function K_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $_=0;function Z_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Q_(n,e){const t=new j_,i=K_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,o=new pt,a=new pt;function l(u,f){let h=0,p=0,_=0;for(let de=0;de<9;de++)r.probe[de].set(0,0,0);let v=0,m=0,d=0,T=0,x=0,R=0,C=0,P=0,L=0,$=0,M=0;u.sort(Z_);const b=f===!0?Math.PI:1;for(let de=0,he=u.length;de<he;de++){const N=u[de],q=N.color,te=N.intensity,G=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=q.r*te*b,p+=q.g*te*b,_+=q.b*te*b;else if(N.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(N.sh.coefficients[J],te);M++}else if(N.isDirectionalLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const le=N.shadow,O=i.get(N);O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.directionalShadow[v]=O,r.directionalShadowMap[v]=ne,r.directionalShadowMatrix[v]=N.shadow.matrix,R++}r.directional[v]=J,v++}else if(N.isSpotLight){const J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(q).multiplyScalar(te*b),J.distance=G,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,r.spot[d]=J;const le=N.shadow;if(N.map&&(r.spotLightMap[L]=N.map,L++,le.updateMatrices(N),N.castShadow&&$++),r.spotLightMatrix[d]=le.matrix,N.castShadow){const O=i.get(N);O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.spotShadow[d]=O,r.spotShadowMap[d]=ne,P++}d++}else if(N.isRectAreaLight){const J=t.get(N);J.color.copy(q).multiplyScalar(te),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),r.rectArea[T]=J,T++}else if(N.isPointLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*b),J.distance=N.distance,J.decay=N.decay,N.castShadow){const le=N.shadow,O=i.get(N);O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,O.shadowCameraNear=le.camera.near,O.shadowCameraFar=le.camera.far,r.pointShadow[m]=O,r.pointShadowMap[m]=ne,r.pointShadowMatrix[m]=N.shadow.matrix,C++}r.point[m]=J,m++}else if(N.isHemisphereLight){const J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(te*b),J.groundColor.copy(N.groundColor).multiplyScalar(te*b),r.hemi[x]=J,x++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const Z=r.hash;(Z.directionalLength!==v||Z.pointLength!==m||Z.spotLength!==d||Z.rectAreaLength!==T||Z.hemiLength!==x||Z.numDirectionalShadows!==R||Z.numPointShadows!==C||Z.numSpotShadows!==P||Z.numSpotMaps!==L||Z.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=T,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+L-$,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=$,r.numLightProbes=M,Z.directionalLength=v,Z.pointLength=m,Z.spotLength=d,Z.rectAreaLength=T,Z.hemiLength=x,Z.numDirectionalShadows=R,Z.numPointShadows=C,Z.numSpotShadows=P,Z.numSpotMaps=L,Z.numLightProbes=M,r.version=$_++)}function c(u,f){let h=0,p=0,_=0,v=0,m=0;const d=f.matrixWorldInverse;for(let T=0,x=u.length;T<x;T++){const R=u[T];if(R.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),h++}else if(R.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),_++}else if(R.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(R.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(R.width*.5,0,0),C.halfHeight.set(0,R.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(d),p++}else if(R.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(R.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Ac(n,e){const t=new Q_(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function J_(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ac(n,e),t.set(s,[l])):o>=a.length?(l=new Ac(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ev extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tv extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`;function rv(n,e,t){let i=new Wu;const r=new Qe,s=new Qe,o=new _t,a=new ev({depthPacking:Qh}),l=new tv,c={},u=t.maxTextureSize,f={[Kn]:Ut,[Ut]:Kn,[Sn]:Sn},h=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let d=this.type;this.render=function(C,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const $=n.getRenderTarget(),M=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(kn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const de=d!==Mn&&this.type===Mn,he=d===Mn&&this.type!==Mn;for(let N=0,q=C.length;N<q;N++){const te=C[N],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ne=G.getFrameExtents();if(r.multiply(ne),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,G.mapSize.y=s.y)),G.map===null||de===!0||he===!0){const le=this.type!==Mn?{minFilter:Ct,magFilter:Ct}:{};G.map!==null&&G.map.dispose(),G.map=new _i(r.x,r.y,le),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const J=G.getViewportCount();for(let le=0;le<J;le++){const O=G.getViewport(le);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),Z.viewport(o),G.updateMatrices(te,le),i=G.getFrustum(),R(P,L,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===Mn&&T(G,L),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget($,M,b)};function T(C,P){const L=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _i(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,L,h,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,L,p,v,null)}function x(C,P,L,$){let M=null;const b=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)M=b;else if(M=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Z=M.uuid,de=P.uuid;let he=c[Z];he===void 0&&(he={},c[Z]=he);let N=he[de];N===void 0&&(N=M.clone(),he[de]=N),M=N}if(M.visible=P.visible,M.wireframe=P.wireframe,$===Mn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Z=n.properties.get(M);Z.light=L}return M}function R(C,P,L,$,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const de=e.update(C),he=C.material;if(Array.isArray(he)){const N=de.groups;for(let q=0,te=N.length;q<te;q++){const G=N[q],ne=he[G.materialIndex];if(ne&&ne.visible){const J=x(C,ne,$,M);n.renderBufferDirect(L,null,de,J,C,G)}}}else if(he.visible){const N=x(C,he,$,M);n.renderBufferDirect(L,null,de,N,C,null)}}const Z=C.children;for(let de=0,he=Z.length;de<he;de++)R(Z[de],P,L,$,M)}}function sv(n,e,t){const i=t.isWebGL2;function r(){let w=!1;const _e=new _t;let me=null;const be=new _t(0,0,0,0);return{setMask:function(Ee){me!==Ee&&!w&&(n.colorMask(Ee,Ee,Ee,Ee),me=Ee)},setLocked:function(Ee){w=Ee},setClear:function(Ee,fe,Le,ze,Et){Et===!0&&(Ee*=ze,fe*=ze,Le*=ze),_e.set(Ee,fe,Le,ze),be.equals(_e)===!1&&(n.clearColor(Ee,fe,Le,ze),be.copy(_e))},reset:function(){w=!1,me=null,be.set(-1,0,0,0)}}}function s(){let w=!1,_e=null,me=null,be=null;return{setTest:function(Ee){Ee?F(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!w&&(n.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(me!==Ee){switch(Ee){case Rh:n.depthFunc(n.NEVER);break;case wh:n.depthFunc(n.ALWAYS);break;case Ch:n.depthFunc(n.LESS);break;case $o:n.depthFunc(n.LEQUAL);break;case Ph:n.depthFunc(n.EQUAL);break;case Lh:n.depthFunc(n.GEQUAL);break;case Dh:n.depthFunc(n.GREATER);break;case Uh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Ee}},setLocked:function(Ee){w=Ee},setClear:function(Ee){be!==Ee&&(n.clearDepth(Ee),be=Ee)},reset:function(){w=!1,_e=null,me=null,be=null}}}function o(){let w=!1,_e=null,me=null,be=null,Ee=null,fe=null,Le=null,ze=null,Et=null;return{setTest:function(et){w||(et?F(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(et){_e!==et&&!w&&(n.stencilMask(et),_e=et)},setFunc:function(et,on,yt){(me!==et||be!==on||Ee!==yt)&&(n.stencilFunc(et,on,yt),me=et,be=on,Ee=yt)},setOp:function(et,on,yt){(fe!==et||Le!==on||ze!==yt)&&(n.stencilOp(et,on,yt),fe=et,Le=on,ze=yt)},setLocked:function(et){w=et},setClear:function(et){Et!==et&&(n.clearStencil(et),Et=et)},reset:function(){w=!1,_e=null,me=null,be=null,Ee=null,fe=null,Le=null,ze=null,Et=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,v=[],m=null,d=!1,T=null,x=null,R=null,C=null,P=null,L=null,$=null,M=!1,b=null,Z=null,de=null,he=null,N=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,G=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=G>=1):ne.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=G>=2);let J=null,le={};const O=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),xe=new _t().fromArray(O),Me=new _t().fromArray(Y);function Te(w,_e,me,be){const Ee=new Uint8Array(4),fe=n.createTexture();n.bindTexture(w,fe),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<me;Le++)i&&(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(_e+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return fe}const Re={};Re[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),F(n.DEPTH_TEST),l.setFunc($o),B(!1),V(nl),F(n.CULL_FACE),y(kn);function F(w){h[w]!==!0&&(n.enable(w),h[w]=!0)}function ee(w){h[w]!==!1&&(n.disable(w),h[w]=!1)}function ae(w,_e){return p[w]!==_e?(n.bindFramebuffer(w,_e),p[w]=_e,i&&(w===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=_e),w===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function Se(w,_e){let me=v,be=!1;if(w)if(me=_.get(_e),me===void 0&&(me=[],_.set(_e,me)),w.isWebGLMultipleRenderTargets){const Ee=w.texture;if(me.length!==Ee.length||me[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Le=Ee.length;fe<Le;fe++)me[fe]=n.COLOR_ATTACHMENT0+fe;me.length=Ee.length,be=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,be=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ye(w){return m!==w?(n.useProgram(w),m=w,!0):!1}const I={[Bi]:n.FUNC_ADD,[gh]:n.FUNC_SUBTRACT,[_h]:n.FUNC_REVERSE_SUBTRACT};if(i)I[ol]=n.MIN,I[al]=n.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(I[ol]=w.MIN_EXT,I[al]=w.MAX_EXT)}const S={[vh]:n.ZERO,[xh]:n.ONE,[Ah]:n.SRC_COLOR,[Au]:n.SRC_ALPHA,[bh]:n.SRC_ALPHA_SATURATE,[yh]:n.DST_COLOR,[Sh]:n.DST_ALPHA,[Mh]:n.ONE_MINUS_SRC_COLOR,[Mu]:n.ONE_MINUS_SRC_ALPHA,[Th]:n.ONE_MINUS_DST_COLOR,[Eh]:n.ONE_MINUS_DST_ALPHA};function y(w,_e,me,be,Ee,fe,Le,ze){if(w===kn){d===!0&&(ee(n.BLEND),d=!1);return}if(d===!1&&(F(n.BLEND),d=!0),w!==mh){if(w!==T||ze!==M){if((x!==Bi||P!==Bi)&&(n.blendEquation(n.FUNC_ADD),x=Bi,P=Bi),ze)switch(w){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.ONE,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case il:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}R=null,C=null,L=null,$=null,T=w,M=ze}return}Ee=Ee||_e,fe=fe||me,Le=Le||be,(_e!==x||Ee!==P)&&(n.blendEquationSeparate(I[_e],I[Ee]),x=_e,P=Ee),(me!==R||be!==C||fe!==L||Le!==$)&&(n.blendFuncSeparate(S[me],S[be],S[fe],S[Le]),R=me,C=be,L=fe,$=Le),T=w,M=!1}function U(w,_e){w.side===Sn?ee(n.CULL_FACE):F(n.CULL_FACE);let me=w.side===Ut;_e&&(me=!me),B(me),w.blending===Vi&&w.transparent===!1?y(kn):y(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const be=w.stencilWrite;c.setTest(be),be&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),se(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function B(w){b!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),b=w)}function V(w){w!==hh?(F(n.CULL_FACE),w!==Z&&(w===nl?n.cullFace(n.BACK):w===dh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),Z=w}function Q(w){w!==de&&(te&&n.lineWidth(w),de=w)}function se(w,_e,me){w?(F(n.POLYGON_OFFSET_FILL),(he!==_e||N!==me)&&(n.polygonOffset(_e,me),he=_e,N=me)):ee(n.POLYGON_OFFSET_FILL)}function ie(w){w?F(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function ue(w){w===void 0&&(w=n.TEXTURE0+q-1),J!==w&&(n.activeTexture(w),J=w)}function oe(w,_e,me){me===void 0&&(J===null?me=n.TEXTURE0+q-1:me=J);let be=le[me];be===void 0&&(be={type:void 0,texture:void 0},le[me]=be),(be.type!==w||be.texture!==_e)&&(J!==me&&(n.activeTexture(me),J=me),n.bindTexture(w,_e||Re[w]),be.type=w,be.texture=_e)}function A(){const w=le[J];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function g(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function X(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(w){xe.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),xe.copy(w))}function je(w){Me.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),Me.copy(w))}function Ce(w,_e){let me=f.get(_e);me===void 0&&(me=new WeakMap,f.set(_e,me));let be=me.get(w);be===void 0&&(be=n.getUniformBlockIndex(_e,w.name),me.set(w,be))}function Pe(w,_e){const be=f.get(_e).get(w);u.get(_e)!==be&&(n.uniformBlockBinding(_e,be,w.__bindingPointIndex),u.set(_e,be))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,le={},p={},_=new WeakMap,v=[],m=null,d=!1,T=null,x=null,R=null,C=null,P=null,L=null,$=null,M=!1,b=null,Z=null,de=null,he=null,N=null,xe.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:F,disable:ee,bindFramebuffer:ae,drawBuffers:Se,useProgram:ye,setBlending:y,setMaterial:U,setFlipSided:B,setCullFace:V,setLineWidth:Q,setPolygonOffset:se,setScissorTest:ie,activeTexture:ue,bindTexture:oe,unbindTexture:A,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:De,texImage3D:qe,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:ce,texStorage3D:ve,texSubImage2D:W,texSubImage3D:X,compressedTexSubImage2D:re,compressedTexSubImage3D:ge,scissor:pe,viewport:je,reset:Ue}}function ov(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(A,g){return d?new OffscreenCanvas(A,g):Rr("canvas")}function x(A,g,D,W){let X=1;if((A.width>W||A.height>W)&&(X=W/Math.max(A.width,A.height)),X<1||g===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=g?ia:Math.floor,ge=re(X*A.width),ce=re(X*A.height);v===void 0&&(v=T(ge,ce));const ve=D?T(ge,ce):v;return ve.width=ge,ve.height=ce,ve.getContext("2d").drawImage(A,0,0,ge,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+ce+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function R(A){return Ol(A.width)&&Ol(A.height)}function C(A){return a?!1:A.wrapS!==Zt||A.wrapT!==Zt||A.minFilter!==Ct&&A.minFilter!==Wt}function P(A,g){return A.generateMipmaps&&g&&A.minFilter!==Ct&&A.minFilter!==Wt}function L(A){n.generateMipmap(A)}function $(A,g,D,W,X=!1){if(a===!1)return g;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=g;if(g===n.RED&&(D===n.FLOAT&&(re=n.R32F),D===n.HALF_FLOAT&&(re=n.R16F),D===n.UNSIGNED_BYTE&&(re=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(re=n.R8UI),D===n.UNSIGNED_SHORT&&(re=n.R16UI),D===n.UNSIGNED_INT&&(re=n.R32UI),D===n.BYTE&&(re=n.R8I),D===n.SHORT&&(re=n.R16I),D===n.INT&&(re=n.R32I)),g===n.RG&&(D===n.FLOAT&&(re=n.RG32F),D===n.HALF_FLOAT&&(re=n.RG16F),D===n.UNSIGNED_BYTE&&(re=n.RG8)),g===n.RGBA){const ge=X?Rs:Ze.getTransfer(W);D===n.FLOAT&&(re=n.RGBA32F),D===n.HALF_FLOAT&&(re=n.RGBA16F),D===n.UNSIGNED_BYTE&&(re=ge===tt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(A,g,D){return P(A,D)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==Wt?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function b(A){return A===Ct||A===ll||A===co?n.NEAREST:n.LINEAR}function Z(A){const g=A.target;g.removeEventListener("dispose",Z),he(g),g.isVideoTexture&&_.delete(g)}function de(A){const g=A.target;g.removeEventListener("dispose",de),q(g)}function he(A){const g=i.get(A);if(g.__webglInit===void 0)return;const D=A.source,W=m.get(D);if(W){const X=W[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&N(A),Object.keys(W).length===0&&m.delete(D)}i.remove(A)}function N(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const D=A.source,W=m.get(D);delete W[g.__cacheKey],o.memory.textures--}function q(A){const g=A.texture,D=i.get(A),W=i.get(g);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(D.__webglFramebuffer[X]))for(let re=0;re<D.__webglFramebuffer[X].length;re++)n.deleteFramebuffer(D.__webglFramebuffer[X][re]);else n.deleteFramebuffer(D.__webglFramebuffer[X]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[X])}else{if(Array.isArray(D.__webglFramebuffer))for(let X=0;X<D.__webglFramebuffer.length;X++)n.deleteFramebuffer(D.__webglFramebuffer[X]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let X=0;X<D.__webglColorRenderbuffer.length;X++)D.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[X]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let X=0,re=g.length;X<re;X++){const ge=i.get(g[X]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(g[X])}i.remove(g),i.remove(A)}let te=0;function G(){te=0}function ne(){const A=te;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),te+=1,A}function J(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function le(A,g){const D=i.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){const W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(D,A,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function O(A,g){const D=i.get(A);if(A.version>0&&D.__version!==A.version){ae(D,A,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function Y(A,g){const D=i.get(A);if(A.version>0&&D.__version!==A.version){ae(D,A,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function xe(A,g){const D=i.get(A);if(A.version>0&&D.__version!==A.version){Se(D,A,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const Me={[Jo]:n.REPEAT,[Zt]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},Te={[Ct]:n.NEAREST,[ll]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Gh]:n.LINEAR_MIPMAP_NEAREST,[Tr]:n.LINEAR_MIPMAP_LINEAR},Re={[nd]:n.NEVER,[cd]:n.ALWAYS,[id]:n.LESS,[sd]:n.LEQUAL,[rd]:n.EQUAL,[ld]:n.GEQUAL,[od]:n.GREATER,[ad]:n.NOTEQUAL};function F(A,g,D){if(D?(n.texParameteri(A,n.TEXTURE_WRAP_S,Me[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Me[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Me[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Te[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Te[g.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==Zt||g.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,b(g.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,b(g.minFilter)),g.minFilter!==Ct&&g.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ct||g.minFilter!==co&&g.minFilter!==Tr||g.type===Gn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function ee(A,g){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",Z));const W=g.source;let X=m.get(W);X===void 0&&(X={},m.set(W,X));const re=J(g);if(re!==A.__cacheKey){X[re]===void 0&&(X[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),X[re].usedTimes++;const ge=X[A.__cacheKey];ge!==void 0&&(X[A.__cacheKey].usedTimes--,ge.usedTimes===0&&N(g)),A.__cacheKey=re,A.__webglTexture=X[re].texture}return D}function ae(A,g,D){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const X=ee(A,g),re=g.source;t.bindTexture(W,A.__webglTexture,n.TEXTURE0+D);const ge=i.get(re);if(re.version!==ge.__version||X===!0){t.activeTexture(n.TEXTURE0+D);const ce=Ze.getPrimaries(Ze.workingColorSpace),ve=g.colorSpace===qt?null:Ze.getPrimaries(g.colorSpace),De=g.colorSpace===qt||ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const qe=C(g)&&R(g.image)===!1;let pe=x(g.image,qe,!1,u);pe=oe(g,pe);const je=R(pe)||a,Ce=s.convert(g.format,g.colorSpace);let Pe=s.convert(g.type),Ue=$(g.internalFormat,Ce,Pe,g.colorSpace,g.isVideoTexture);F(W,g,je);let w;const _e=g.mipmaps,me=a&&g.isVideoTexture!==!0,be=ge.__version===void 0||X===!0,Ee=M(g,pe,je);if(g.isDepthTexture)Ue=n.DEPTH_COMPONENT,a?g.type===Gn?Ue=n.DEPTH_COMPONENT32F:g.type===Hn?Ue=n.DEPTH_COMPONENT24:g.type===fi?Ue=n.DEPTH24_STENCIL8:Ue=n.DEPTH_COMPONENT16:g.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===hi&&Ue===n.DEPTH_COMPONENT&&g.type!==Sa&&g.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Hn,Pe=s.convert(g.type)),g.format===Ki&&Ue===n.DEPTH_COMPONENT&&(Ue=n.DEPTH_STENCIL,g.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=fi,Pe=s.convert(g.type))),be&&(me?t.texStorage2D(n.TEXTURE_2D,1,Ue,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Ce,Pe,null));else if(g.isDataTexture)if(_e.length>0&&je){me&&be&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,_e[0].width,_e[0].height);for(let fe=0,Le=_e.length;fe<Le;fe++)w=_e[fe],me?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,w.width,w.height,Ce,Pe,w.data):t.texImage2D(n.TEXTURE_2D,fe,Ue,w.width,w.height,0,Ce,Pe,w.data);g.generateMipmaps=!1}else me?(be&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,pe.width,pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Ce,Pe,pe.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Ce,Pe,pe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){me&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ue,_e[0].width,_e[0].height,pe.depth);for(let fe=0,Le=_e.length;fe<Le;fe++)w=_e[fe],g.format!==Qt?Ce!==null?me?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,w.width,w.height,pe.depth,Ce,w.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Ue,w.width,w.height,pe.depth,0,w.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,w.width,w.height,pe.depth,Ce,Pe,w.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Ue,w.width,w.height,pe.depth,0,Ce,Pe,w.data)}else{me&&be&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,_e[0].width,_e[0].height);for(let fe=0,Le=_e.length;fe<Le;fe++)w=_e[fe],g.format!==Qt?Ce!==null?me?t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,w.width,w.height,Ce,w.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Ue,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,w.width,w.height,Ce,Pe,w.data):t.texImage2D(n.TEXTURE_2D,fe,Ue,w.width,w.height,0,Ce,Pe,w.data)}else if(g.isDataArrayTexture)me?(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ue,pe.width,pe.height,pe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ce,Pe,pe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,pe.width,pe.height,pe.depth,0,Ce,Pe,pe.data);else if(g.isData3DTexture)me?(be&&t.texStorage3D(n.TEXTURE_3D,Ee,Ue,pe.width,pe.height,pe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ce,Pe,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,pe.width,pe.height,pe.depth,0,Ce,Pe,pe.data);else if(g.isFramebufferTexture){if(be)if(me)t.texStorage2D(n.TEXTURE_2D,Ee,Ue,pe.width,pe.height);else{let fe=pe.width,Le=pe.height;for(let ze=0;ze<Ee;ze++)t.texImage2D(n.TEXTURE_2D,ze,Ue,fe,Le,0,Ce,Pe,null),fe>>=1,Le>>=1}}else if(_e.length>0&&je){me&&be&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,_e[0].width,_e[0].height);for(let fe=0,Le=_e.length;fe<Le;fe++)w=_e[fe],me?t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ce,Pe,w):t.texImage2D(n.TEXTURE_2D,fe,Ue,Ce,Pe,w);g.generateMipmaps=!1}else me?(be&&t.texStorage2D(n.TEXTURE_2D,Ee,Ue,pe.width,pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Pe,pe)):t.texImage2D(n.TEXTURE_2D,0,Ue,Ce,Pe,pe);P(g,je)&&L(W),ge.__version=re.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Se(A,g,D){if(g.image.length!==6)return;const W=ee(A,g),X=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+D);const re=i.get(X);if(X.version!==re.__version||W===!0){t.activeTexture(n.TEXTURE0+D);const ge=Ze.getPrimaries(Ze.workingColorSpace),ce=g.colorSpace===qt?null:Ze.getPrimaries(g.colorSpace),ve=g.colorSpace===qt||ge===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,qe=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let fe=0;fe<6;fe++)!De&&!qe?pe[fe]=x(g.image[fe],!1,!0,c):pe[fe]=qe?g.image[fe].image:g.image[fe],pe[fe]=oe(g,pe[fe]);const je=pe[0],Ce=R(je)||a,Pe=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type),w=$(g.internalFormat,Pe,Ue,g.colorSpace),_e=a&&g.isVideoTexture!==!0,me=re.__version===void 0||W===!0;let be=M(g,je,Ce);F(n.TEXTURE_CUBE_MAP,g,Ce);let Ee;if(De){_e&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,w,je.width,je.height);for(let fe=0;fe<6;fe++){Ee=pe[fe].mipmaps;for(let Le=0;Le<Ee.length;Le++){const ze=Ee[Le];g.format!==Qt?Pe!==null?_e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,w,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,0,0,ze.width,ze.height,Pe,Ue,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le,w,ze.width,ze.height,0,Pe,Ue,ze.data)}}}else{Ee=g.mipmaps,_e&&me&&(Ee.length>0&&be++,t.texStorage2D(n.TEXTURE_CUBE_MAP,be,w,pe[0].width,pe[0].height));for(let fe=0;fe<6;fe++)if(qe){_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,pe[fe].width,pe[fe].height,Pe,Ue,pe[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,w,pe[fe].width,pe[fe].height,0,Pe,Ue,pe[fe].data);for(let Le=0;Le<Ee.length;Le++){const Et=Ee[Le].image[fe].image;_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Et.width,Et.height,Pe,Ue,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,w,Et.width,Et.height,0,Pe,Ue,Et.data)}}else{_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Pe,Ue,pe[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,w,Pe,Ue,pe[fe]);for(let Le=0;Le<Ee.length;Le++){const ze=Ee[Le];_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,0,0,Pe,Ue,ze.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le+1,w,Pe,Ue,ze.image[fe])}}}P(g,Ce)&&L(n.TEXTURE_CUBE_MAP),re.__version=X.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function ye(A,g,D,W,X,re){const ge=s.convert(D.format,D.colorSpace),ce=s.convert(D.type),ve=$(D.internalFormat,ge,ce,D.colorSpace);if(!i.get(g).__hasExternalTextures){const qe=Math.max(1,g.width>>re),pe=Math.max(1,g.height>>re);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,re,ve,qe,pe,g.depth,0,ge,ce,null):t.texImage2D(X,re,ve,qe,pe,0,ge,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ie(g)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,X,i.get(D).__webglTexture,0,se(g)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,X,i.get(D).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(A,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer&&!g.stencilBuffer){let W=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||ie(g)){const X=g.depthTexture;X&&X.isDepthTexture&&(X.type===Gn?W=n.DEPTH_COMPONENT32F:X.type===Hn&&(W=n.DEPTH_COMPONENT24));const re=se(g);ie(g)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,W,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,W,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(g.depthBuffer&&g.stencilBuffer){const W=se(g);D&&ie(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,g.width,g.height):ie(g)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const W=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let X=0;X<W.length;X++){const re=W[X],ge=s.convert(re.format,re.colorSpace),ce=s.convert(re.type),ve=$(re.internalFormat,ge,ce,re.colorSpace),De=se(g);D&&ie(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ve,g.width,g.height):ie(g)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ve,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ve,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function S(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),le(g.depthTexture,0);const W=i.get(g.depthTexture).__webglTexture,X=se(g);if(g.depthTexture.format===hi)ie(g)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(g.depthTexture.format===Ki)ie(g)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function y(A){const g=i.get(A),D=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");S(g.__webglFramebuffer,A)}else if(D){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]=n.createRenderbuffer(),I(g.__webglDepthbuffer[W],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),I(g.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(A,g,D){const W=i.get(A);g!==void 0&&ye(W.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&y(A)}function B(A){const g=A.texture,D=i.get(A),W=i.get(g);A.addEventListener("dispose",de),A.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,o.memory.textures++);const X=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,ge=R(A)||a;if(X){D.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[ce]=[];for(let ve=0;ve<g.mipmaps.length;ve++)D.__webglFramebuffer[ce][ve]=n.createFramebuffer()}else D.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)D.__webglFramebuffer[ce]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(re)if(r.drawBuffers){const ce=A.texture;for(let ve=0,De=ce.length;ve<De;ve++){const qe=i.get(ce[ve]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ie(A)===!1){const ce=re?g:[g];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){const De=ce[ve];D.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ve]);const qe=s.convert(De.format,De.colorSpace),pe=s.convert(De.type),je=$(De.internalFormat,qe,pe,De.colorSpace,A.isXRRenderTarget===!0),Ce=se(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,je,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,D.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),I(D.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),F(n.TEXTURE_CUBE_MAP,g,ge);for(let ce=0;ce<6;ce++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)ye(D.__webglFramebuffer[ce][ve],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else ye(D.__webglFramebuffer[ce],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);P(g,ge)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ce=A.texture;for(let ve=0,De=ce.length;ve<De;ve++){const qe=ce[ve],pe=i.get(qe);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),F(n.TEXTURE_2D,qe,ge),ye(D.__webglFramebuffer,A,qe,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),P(qe,ge)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ce=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,W.__webglTexture),F(ce,g,ge),a&&g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)ye(D.__webglFramebuffer[ve],A,g,n.COLOR_ATTACHMENT0,ce,ve);else ye(D.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,ce,0);P(g,ge)&&L(ce),t.unbindTexture()}A.depthBuffer&&y(A)}function V(A){const g=R(A)||a,D=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let W=0,X=D.length;W<X;W++){const re=D[W];if(P(re,g)){const ge=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(re).__webglTexture;t.bindTexture(ge,ce),L(ge),t.unbindTexture()}}}function Q(A){if(a&&A.samples>0&&ie(A)===!1){const g=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],D=A.width,W=A.height;let X=n.COLOR_BUFFER_BIT;const re=[],ge=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(A),ve=A.isWebGLMultipleRenderTargets===!0;if(ve)for(let De=0;De<g.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let De=0;De<g.length;De++){re.push(n.COLOR_ATTACHMENT0+De),A.depthBuffer&&re.push(ge);const qe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(qe===!1&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[De]),qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),ve){const pe=i.get(g[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,D,W,0,0,D,W,X,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let De=0;De<g.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,ce.__webglColorRenderbuffer[De]);const qe=i.get(g[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function se(A){return Math.min(f,A.samples)}function ie(A){const g=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ue(A){const g=o.render.frame;_.get(A)!==g&&(_.set(A,g),A.update())}function oe(A,g){const D=A.colorSpace,W=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ta||D!==bn&&D!==qt&&(Ze.getTransfer(D)===tt?a===!1?e.has("EXT_sRGB")===!0&&W===Qt?(A.format=ta,A.minFilter=Wt,A.generateMipmaps=!1):g=Du.sRGBToLinear(g):(W!==Qt||X!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}this.allocateTextureUnit=ne,this.resetTextureUnits=G,this.setTexture2D=le,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=xe,this.rebindTextures=U,this.setupRenderTarget=B,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ie}function av(n,e,t){const i=t.isWebGL2;function r(s,o=qt){let a;const l=Ze.getTransfer(o);if(s===Xn)return n.UNSIGNED_BYTE;if(s===Tu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Vh)return n.BYTE;if(s===kh)return n.SHORT;if(s===Sa)return n.UNSIGNED_SHORT;if(s===yu)return n.INT;if(s===Hn)return n.UNSIGNED_INT;if(s===Gn)return n.FLOAT;if(s===br)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Wh)return n.ALPHA;if(s===Qt)return n.RGBA;if(s===Xh)return n.LUMINANCE;if(s===qh)return n.LUMINANCE_ALPHA;if(s===hi)return n.DEPTH_COMPONENT;if(s===Ki)return n.DEPTH_STENCIL;if(s===ta)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yh)return n.RED;if(s===Ru)return n.RED_INTEGER;if(s===jh)return n.RG;if(s===wu)return n.RG_INTEGER;if(s===Cu)return n.RGBA_INTEGER;if(s===uo||s===fo||s===ho||s===po)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===po)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cl||s===ul||s===fl||s===hl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ul)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dl||s===pl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dl)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ml||s===gl||s===_l||s===vl||s===xl||s===Al||s===Ml||s===Sl||s===El||s===yl||s===Tl||s===bl||s===Rl||s===wl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ml)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_l)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Al)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ml)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===El)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wl)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mo||s===Cl||s===Pl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mo)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$h||s===Ll||s===Dl||s===Ul)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ll)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ul)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class lv extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class uv extends It{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hi&&(i=Hn),i===void 0&&u===Ki&&(i=fi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fv extends nr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const v=t.getContextAttributes();let m=null,d=null;const T=[],x=[],R=new Xt;R.layers.enable(1),R.viewport=new _t;const C=new Xt;C.layers.enable(2),C.viewport=new _t;const P=[R,C],L=new lv;L.layers.enable(1),L.layers.enable(2);let $=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=T[O];return Y===void 0&&(Y=new zo,T[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=T[O];return Y===void 0&&(Y=new zo,T[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=T[O];return Y===void 0&&(Y=new zo,T[O]=Y),Y.getHandSpace()};function b(O){const Y=x.indexOf(O.inputSource);if(Y===-1)return;const xe=T[Y];xe!==void 0&&(xe.update(O.inputSource,O.frame,c||o),xe.dispatchEvent({type:O.type,data:O.inputSource}))}function Z(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",de);for(let O=0;O<T.length;O++){const Y=x[O];Y!==null&&(x[O]=null,T[O].disconnect(Y))}$=null,M=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:p}),d=new _i(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,xe=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?Ki:hi,xe=v.stencil?fi:Hn);const Te={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),d=new _i(h.textureWidth,h.textureHeight,{format:Qt,type:Xn,depthTexture:new uv(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function de(O){for(let Y=0;Y<O.removed.length;Y++){const xe=O.removed[Y],Me=x.indexOf(xe);Me>=0&&(x[Me]=null,T[Me].disconnect(xe))}for(let Y=0;Y<O.added.length;Y++){const xe=O.added[Y];let Me=x.indexOf(xe);if(Me===-1){for(let Re=0;Re<T.length;Re++)if(Re>=x.length){x.push(xe),Me=Re;break}else if(x[Re]===null){x[Re]=xe,Me=Re;break}if(Me===-1)break}const Te=T[Me];Te&&Te.connect(xe)}}const he=new k,N=new k;function q(O,Y,xe){he.setFromMatrixPosition(Y.matrixWorld),N.setFromMatrixPosition(xe.matrixWorld);const Me=he.distanceTo(N),Te=Y.projectionMatrix.elements,Re=xe.projectionMatrix.elements,F=Te[14]/(Te[10]-1),ee=Te[14]/(Te[10]+1),ae=(Te[9]+1)/Te[5],Se=(Te[9]-1)/Te[5],ye=(Te[8]-1)/Te[0],I=(Re[8]+1)/Re[0],S=F*ye,y=F*I,U=Me/(-ye+I),B=U*-ye;Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(B),O.translateZ(U),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const V=F+U,Q=ee+U,se=S-B,ie=y+(Me-B),ue=ae*ee/Q*V,oe=Se*ee/Q*V;O.projectionMatrix.makePerspective(se,ie,ue,oe,V,Q),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function te(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;L.near=C.near=R.near=O.near,L.far=C.far=R.far=O.far,($!==L.near||M!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),$=L.near,M=L.far);const Y=O.parent,xe=L.cameras;te(L,Y);for(let Me=0;Me<xe.length;Me++)te(xe[Me],Y);xe.length===2?q(L,R,C):L.projectionMatrix.copy(R.projectionMatrix),G(O,L,Y)};function G(O,Y,xe){xe===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(xe.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=na*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let ne=null;function J(O,Y){if(u=Y.getViewerPose(c||o),_=Y,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Me=!1;xe.length!==L.cameras.length&&(L.cameras.length=0,Me=!0);for(let Te=0;Te<xe.length;Te++){const Re=xe[Te];let F=null;if(p!==null)F=p.getViewport(Re);else{const ae=f.getViewSubImage(h,Re);F=ae.viewport,Te===0&&(e.setRenderTargetTextures(d,ae.colorTexture,h.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(d))}let ee=P[Te];ee===void 0&&(ee=new Xt,ee.layers.enable(Te),ee.viewport=new _t,P[Te]=ee),ee.matrix.fromArray(Re.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Re.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(F.x,F.y,F.width,F.height),Te===0&&(L.matrix.copy(ee.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Me===!0&&L.cameras.push(ee)}}for(let xe=0;xe<T.length;xe++){const Me=x[xe],Te=T[xe];Me!==null&&Te!==void 0&&Te.update(Me,Y,c||o)}ne&&ne(O,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const le=new Xu;le.setAnimationLoop(J),this.setAnimationLoop=function(O){ne=O},this.dispose=function(){}}}function hv(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Gu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,x,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,R)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ut&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ut&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dv(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,x){const R=x.program;i.uniformBlockBinding(T,R)}function c(T,x){let R=r[T.id];R===void 0&&(_(T),R=u(T),r[T.id]=R,T.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(T,C);const P=e.render.frame;s[T.id]!==P&&(h(T),s[T.id]=P)}function u(T){const x=f();T.__bindingPointIndex=x;const R=n.createBuffer(),C=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,R),R}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const x=r[T.id],R=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let P=0,L=R.length;P<L;P++){const $=R[P];if(p($,P,C)===!0){const M=$.__offset,b=Array.isArray($.value)?$.value:[$.value];let Z=0;for(let de=0;de<b.length;de++){const he=b[de],N=v(he);typeof he=="number"?($.__data[0]=he,n.bufferSubData(n.UNIFORM_BUFFER,M+Z,$.__data)):he.isMatrix3?($.__data[0]=he.elements[0],$.__data[1]=he.elements[1],$.__data[2]=he.elements[2],$.__data[3]=he.elements[0],$.__data[4]=he.elements[3],$.__data[5]=he.elements[4],$.__data[6]=he.elements[5],$.__data[7]=he.elements[0],$.__data[8]=he.elements[6],$.__data[9]=he.elements[7],$.__data[10]=he.elements[8],$.__data[11]=he.elements[0]):(he.toArray($.__data,Z),Z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,$.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,x,R){const C=T.value;if(R[x]===void 0){if(typeof C=="number")R[x]=C;else{const P=Array.isArray(C)?C:[C],L=[];for(let $=0;$<P.length;$++)L.push(P[$].clone());R[x]=L}return!0}else if(typeof C=="number"){if(R[x]!==C)return R[x]=C,!0}else{const P=Array.isArray(R[x])?R[x]:[R[x]],L=Array.isArray(C)?C:[C];for(let $=0;$<P.length;$++){const M=P[$];if(M.equals(L[$])===!1)return M.copy(L[$]),!0}}return!1}function _(T){const x=T.uniforms;let R=0;const C=16;let P=0;for(let L=0,$=x.length;L<$;L++){const M=x[L],b={boundary:0,storage:0},Z=Array.isArray(M.value)?M.value:[M.value];for(let de=0,he=Z.length;de<he;de++){const N=Z[de],q=v(N);b.boundary+=q.boundary,b.storage+=q.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=R,L>0){P=R%C;const de=C-P;P!==0&&de-b.boundary<0&&(R+=C-P,M.__offset=R)}R+=b.storage}return P=R%C,P>0&&(R+=C-P),T.__size=R,T.__cache={},this}function v(T){const x={boundary:0,storage:0};return typeof T=="number"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){const x=T.target;x.removeEventListener("dispose",m);const R=o.indexOf(x.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class $u{constructor(e={}){const{canvas:t=fd(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let R=!1,C=0,P=0,L=null,$=-1,M=null;const b=new _t,Z=new _t;let de=null;const he=new Je(0);let N=0,q=t.width,te=t.height,G=1,ne=null,J=null;const le=new _t(0,0,q,te),O=new _t(0,0,q,te);let Y=!1;const xe=new Wu;let Me=!1,Te=!1,Re=null;const F=new pt,ee=new Qe,ae=new k,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return L===null?G:1}let I=i;function S(E,z){for(let j=0;j<E.length;j++){const H=E[j],K=t.getContext(H,z);if(K!==null)return K}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",be,!1),I===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),I=S(z,E),I===null)throw S(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let y,U,B,V,Q,se,ie,ue,oe,A,g,D,W,X,re,ge,ce,ve,De,qe,pe,je,Ce,Pe;function Ue(){y=new yg(I),U=new _g(I,y,e),y.init(U),je=new av(I,y,U),B=new sv(I,y,U),V=new Rg(I),Q=new X_,se=new ov(I,y,B,Q,U,je,V),ie=new xg(x),ue=new Eg(x),oe=new Od(I,U),Ce=new mg(I,y,oe,U),A=new Tg(I,oe,V,Ce),g=new Lg(I,A,oe,V),De=new Pg(I,U,se),ge=new vg(Q),D=new W_(x,ie,ue,y,U,Ce,ge),W=new hv(x,Q),X=new Y_,re=new J_(y,U),ve=new pg(x,ie,ue,B,g,h,l),ce=new rv(x,g,U),Pe=new dv(I,V,U,B),qe=new gg(I,y,V,U),pe=new bg(I,y,V,U),V.programs=D.programs,x.capabilities=U,x.extensions=y,x.properties=Q,x.renderLists=X,x.shadowMap=ce,x.state=B,x.info=V}Ue();const w=new fv(x,I);this.xr=w,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(q,te,!1))},this.getSize=function(E){return E.set(q,te)},this.setSize=function(E,z,j=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,te=z,t.width=Math.floor(E*G),t.height=Math.floor(z*G),j===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(q*G,te*G).floor()},this.setDrawingBufferSize=function(E,z,j){q=E,te=z,G=j,t.width=Math.floor(E*j),t.height=Math.floor(z*j),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,z,j,H){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,z,j,H),B.viewport(b.copy(le).multiplyScalar(G).floor())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,z,j,H){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,z,j,H),B.scissor(Z.copy(O).multiplyScalar(G).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){B.setScissorTest(Y=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(E=!0,z=!0,j=!0){let H=0;if(E){let K=!1;if(L!==null){const we=L.texture.format;K=we===Cu||we===wu||we===Ru}if(K){const we=L.texture.type,Ie=we===Xn||we===Hn||we===Sa||we===fi||we===Tu||we===bu,Oe=ve.getClearColor(),Fe=ve.getClearAlpha(),We=Oe.r,Ne=Oe.g,He=Oe.b;Ie?(p[0]=We,p[1]=Ne,p[2]=He,p[3]=Fe,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=We,_[1]=Ne,_[2]=He,_[3]=Fe,I.clearBufferiv(I.COLOR,0,_))}else H|=I.COLOR_BUFFER_BIT}z&&(H|=I.DEPTH_BUFFER_BIT),j&&(H|=I.STENCIL_BUFFER_BIT),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",be,!1),X.dispose(),re.dispose(),Q.dispose(),ie.dispose(),ue.dispose(),g.dispose(),Ce.dispose(),Pe.dispose(),D.dispose(),w.dispose(),w.removeEventListener("sessionstart",et),w.removeEventListener("sessionend",on),Re&&(Re.dispose(),Re=null),yt.stop()};function _e(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=V.autoReset,z=ce.enabled,j=ce.autoUpdate,H=ce.needsUpdate,K=ce.type;Ue(),V.autoReset=E,ce.enabled=z,ce.autoUpdate=j,ce.needsUpdate=H,ce.type=K}function be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ee(E){const z=E.target;z.removeEventListener("dispose",Ee),fe(z)}function fe(E){Le(E),Q.remove(E)}function Le(E){const z=Q.get(E).programs;z!==void 0&&(z.forEach(function(j){D.releaseProgram(j)}),E.isShaderMaterial&&D.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,j,H,K,we){z===null&&(z=Se);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,Oe=lh(E,z,j,H,K);B.setMaterial(H,Ie);let Fe=j.index,We=1;if(H.wireframe===!0){if(Fe=A.getWireframeAttribute(j),Fe===void 0)return;We=2}const Ne=j.drawRange,He=j.attributes.position;let it=Ne.start*We,st=(Ne.start+Ne.count)*We;we!==null&&(it=Math.max(it,we.start*We),st=Math.min(st,(we.start+we.count)*We)),Fe!==null?(it=Math.max(it,0),st=Math.min(st,Fe.count)):He!=null&&(it=Math.max(it,0),st=Math.min(st,He.count));const Vt=st-it;if(Vt<0||Vt===1/0)return;Ce.setup(K,H,Oe,j,Fe);let dn,ot=qe;if(Fe!==null&&(dn=oe.get(Fe),ot=pe,ot.setIndex(dn)),K.isMesh)H.wireframe===!0?(B.setLineWidth(H.wireframeLinewidth*ye()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(K.isLine){let Xe=H.linewidth;Xe===void 0&&(Xe=1),B.setLineWidth(Xe*ye()),K.isLineSegments?ot.setMode(I.LINES):K.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else K.isPoints?ot.setMode(I.POINTS):K.isSprite&&ot.setMode(I.TRIANGLES);if(K.isInstancedMesh)ot.renderInstances(it,Vt,K.count);else if(j.isInstancedBufferGeometry){const Xe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,so=Math.min(j.instanceCount,Xe);ot.renderInstances(it,Vt,so)}else ot.render(it,Vt)},this.compile=function(E,z){function j(H,K,we){H.transparent===!0&&H.side===Sn&&H.forceSinglePass===!1?(H.side=Ut,H.needsUpdate=!0,Vr(H,K,we),H.side=Kn,H.needsUpdate=!0,Vr(H,K,we),H.side=Sn):Vr(H,K,we)}m=re.get(E),m.init(),T.push(m),E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights),E.traverse(function(H){const K=H.material;if(K)if(Array.isArray(K))for(let we=0;we<K.length;we++){const Ie=K[we];j(Ie,E,H)}else j(K,E,H)}),T.pop(),m=null};let ze=null;function Et(E){ze&&ze(E)}function et(){yt.stop()}function on(){yt.start()}const yt=new Xu;yt.setAnimationLoop(Et),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(E){ze=E,w.setAnimationLoop(E),E===null?yt.stop():yt.start()},w.addEventListener("sessionstart",et),w.addEventListener("sessionend",on),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),w.enabled===!0&&w.isPresenting===!0&&(w.cameraAutoUpdate===!0&&w.updateCamera(z),z=w.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,L),m=re.get(E,T.length),m.init(),T.push(m),F.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xe.setFromProjectionMatrix(F),Te=this.localClippingEnabled,Me=ge.init(this.clippingPlanes,Te),v=X.get(E,d.length),v.init(),d.push(v),$a(E,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(ne,J),this.info.render.frame++,Me===!0&&ge.beginShadows();const j=m.state.shadowsArray;if(ce.render(j,E,z),Me===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(v,E),m.setupLights(x._useLegacyLights),z.isArrayCamera){const H=z.cameras;for(let K=0,we=H.length;K<we;K++){const Ie=H[K];Za(v,E,Ie,Ie.viewport)}}else Za(v,E,z);L!==null&&(se.updateMultisampleRenderTarget(L),se.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,z),Ce.resetDefaultState(),$=-1,M=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function $a(E,z,j,H){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||xe.intersectsSprite(E)){H&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(F);const Ie=g.update(E),Oe=E.material;Oe.visible&&v.push(E,Ie,Oe,j,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||xe.intersectsObject(E))){const Ie=g.update(E),Oe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ae.copy(Ie.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(F)),Array.isArray(Oe)){const Fe=Ie.groups;for(let We=0,Ne=Fe.length;We<Ne;We++){const He=Fe[We],it=Oe[He.materialIndex];it&&it.visible&&v.push(E,Ie,it,j,ae.z,He)}}else Oe.visible&&v.push(E,Ie,Oe,j,ae.z,null)}}const we=E.children;for(let Ie=0,Oe=we.length;Ie<Oe;Ie++)$a(we[Ie],z,j,H)}function Za(E,z,j,H){const K=E.opaque,we=E.transmissive,Ie=E.transparent;m.setupLightsView(j),Me===!0&&ge.setGlobalState(x.clippingPlanes,j),we.length>0&&ah(K,we,z,j),H&&B.viewport(b.copy(H)),K.length>0&&Gr(K,z,j),we.length>0&&Gr(we,z,j),Ie.length>0&&Gr(Ie,z,j),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function ah(E,z,j,H){const K=U.isWebGL2;Re===null&&(Re=new _i(1,1,{generateMipmaps:!0,type:y.has("EXT_color_buffer_half_float")?br:Xn,minFilter:Tr,samples:K?4:0})),x.getDrawingBufferSize(ee),K?Re.setSize(ee.x,ee.y):Re.setSize(ia(ee.x),ia(ee.y));const we=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(he),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=Wn,Gr(E,j,H),se.updateMultisampleRenderTarget(Re),se.updateRenderTargetMipmap(Re);let Oe=!1;for(let Fe=0,We=z.length;Fe<We;Fe++){const Ne=z[Fe],He=Ne.object,it=Ne.geometry,st=Ne.material,Vt=Ne.group;if(st.side===Sn&&He.layers.test(H.layers)){const dn=st.side;st.side=Ut,st.needsUpdate=!0,Qa(He,j,H,it,st,Vt),st.side=dn,st.needsUpdate=!0,Oe=!0}}Oe===!0&&(se.updateMultisampleRenderTarget(Re),se.updateRenderTargetMipmap(Re)),x.setRenderTarget(we),x.setClearColor(he,N),x.toneMapping=Ie}function Gr(E,z,j){const H=z.isScene===!0?z.overrideMaterial:null;for(let K=0,we=E.length;K<we;K++){const Ie=E[K],Oe=Ie.object,Fe=Ie.geometry,We=H===null?Ie.material:H,Ne=Ie.group;Oe.layers.test(j.layers)&&Qa(Oe,z,j,Fe,We,Ne)}}function Qa(E,z,j,H,K,we){E.onBeforeRender(x,z,j,H,K,we),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(x,z,j,H,E,we),K.transparent===!0&&K.side===Sn&&K.forceSinglePass===!1?(K.side=Ut,K.needsUpdate=!0,x.renderBufferDirect(j,z,H,K,E,we),K.side=Kn,K.needsUpdate=!0,x.renderBufferDirect(j,z,H,K,E,we),K.side=Sn):x.renderBufferDirect(j,z,H,K,E,we),E.onAfterRender(x,z,j,H,K,we)}function Vr(E,z,j){z.isScene!==!0&&(z=Se);const H=Q.get(E),K=m.state.lights,we=m.state.shadowsArray,Ie=K.state.version,Oe=D.getParameters(E,K.state,we,z,j),Fe=D.getProgramCacheKey(Oe);let We=H.programs;H.environment=E.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=(E.isMeshStandardMaterial?ue:ie).get(E.envMap||H.environment),We===void 0&&(E.addEventListener("dispose",Ee),We=new Map,H.programs=We);let Ne=We.get(Fe);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===Ie)return Ja(E,Oe),Ne}else Oe.uniforms=D.getUniforms(E),E.onBuild(j,Oe,x),E.onBeforeCompile(Oe,x),Ne=D.acquireProgram(Oe,Fe),We.set(Fe,Ne),H.uniforms=Oe.uniforms;const He=H.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ge.uniform),Ja(E,Oe),H.needsLights=uh(E),H.lightsStateVersion=Ie,H.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMap.value=K.state.directionalShadowMap,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotShadowMap.value=K.state.spotShadowMap,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMap.value=K.state.pointShadowMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix);const it=Ne.getUniforms(),st=xs.seqWithValue(it.seq,He);return H.currentProgram=Ne,H.uniformsList=st,Ne}function Ja(E,z){const j=Q.get(E);j.outputColorSpace=z.outputColorSpace,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function lh(E,z,j,H,K){z.isScene!==!0&&(z=Se),se.resetTextureUnits();const we=z.fog,Ie=H.isMeshStandardMaterial?z.environment:null,Oe=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:bn,Fe=(H.isMeshStandardMaterial?ue:ie).get(H.envMap||Ie),We=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),He=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,st=!!j.morphAttributes.color;let Vt=Wn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Vt=x.toneMapping);const dn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ot=dn!==void 0?dn.length:0,Xe=Q.get(H),so=m.state.lights;if(Me===!0&&(Te===!0||E!==M)){const Bt=E===M&&H.id===$;ge.setState(H,E,Bt)}let at=!1;H.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==so.state.version||Xe.outputColorSpace!==Oe||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||K.isInstancedMesh&&Xe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xe.instancingColor===!1&&K.instanceColor!==null||Xe.envMap!==Fe||H.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ge.numPlanes||Xe.numIntersection!==ge.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Ne||Xe.morphTargets!==He||Xe.morphNormals!==it||Xe.morphColors!==st||Xe.toneMapping!==Vt||U.isWebGL2===!0&&Xe.morphTargetsCount!==ot)&&(at=!0):(at=!0,Xe.__version=H.version);let Zn=Xe.currentProgram;at===!0&&(Zn=Vr(H,z,K));let el=!1,sr=!1,oo=!1;const Tt=Zn.getUniforms(),Qn=Xe.uniforms;if(B.useProgram(Zn.program)&&(el=!0,sr=!0,oo=!0),H.id!==$&&($=H.id,sr=!0),el||M!==E){Tt.setValue(I,"projectionMatrix",E.projectionMatrix),Tt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Bt=Tt.map.cameraPosition;Bt!==void 0&&Bt.setValue(I,ae.setFromMatrixPosition(E.matrixWorld)),U.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,sr=!0,oo=!0)}if(K.isSkinnedMesh){Tt.setOptional(I,K,"bindMatrix"),Tt.setOptional(I,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(U.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Tt.setValue(I,"boneTexture",Bt.boneTexture,se),Tt.setValue(I,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ao=j.morphAttributes;if((ao.position!==void 0||ao.normal!==void 0||ao.color!==void 0&&U.isWebGL2===!0)&&De.update(K,j,Zn),(sr||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,Tt.setValue(I,"receiveShadow",K.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Qn.envMap.value=Fe,Qn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),sr&&(Tt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&ch(Qn,oo),we&&H.fog===!0&&W.refreshFogUniforms(Qn,we),W.refreshMaterialUniforms(Qn,H,G,te,Re),xs.upload(I,Xe.uniformsList,Qn,se)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xs.upload(I,Xe.uniformsList,Qn,se),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(I,"center",K.center),Tt.setValue(I,"modelViewMatrix",K.modelViewMatrix),Tt.setValue(I,"normalMatrix",K.normalMatrix),Tt.setValue(I,"modelMatrix",K.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Bt=H.uniformsGroups;for(let lo=0,fh=Bt.length;lo<fh;lo++)if(U.isWebGL2){const tl=Bt[lo];Pe.update(tl,Zn),Pe.bind(tl,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function ch(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function uh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,z,j){Q.get(E.texture).__webglTexture=z,Q.get(E.depthTexture).__webglTexture=j;const H=Q.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=j===void 0,H.__autoAllocateDepthBuffer||y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const j=Q.get(E);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,j=0){L=E,C=z,P=j;let H=!0,K=null,we=!1,Ie=!1;if(E){const Fe=Q.get(E);Fe.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(I.FRAMEBUFFER,null),H=!1):Fe.__webglFramebuffer===void 0?se.setupRenderTarget(E):Fe.__hasExternalTextures&&se.rebindTextures(E,Q.get(E.texture).__webglTexture,Q.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Ne=Q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?K=Ne[z][j]:K=Ne[z],we=!0):U.isWebGL2&&E.samples>0&&se.useMultisampledRTT(E)===!1?K=Q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?K=Ne[j]:K=Ne,b.copy(E.viewport),Z.copy(E.scissor),de=E.scissorTest}else b.copy(le).multiplyScalar(G).floor(),Z.copy(O).multiplyScalar(G).floor(),de=Y;if(B.bindFramebuffer(I.FRAMEBUFFER,K)&&U.drawBuffers&&H&&B.drawBuffers(E,K),B.viewport(b),B.scissor(Z),B.setScissorTest(de),we){const Fe=Q.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Fe.__webglTexture,j)}else if(Ie){const Fe=Q.get(E.texture),We=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,j||0,We)}$=-1},this.readRenderTargetPixels=function(E,z,j,H,K,we,Ie){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){B.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const Fe=E.texture,We=Fe.format,Ne=Fe.type;if(We!==Qt&&je.convert(We)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ne===br&&(y.has("EXT_color_buffer_half_float")||U.isWebGL2&&y.has("EXT_color_buffer_float"));if(Ne!==Xn&&je.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Gn&&(U.isWebGL2||y.has("OES_texture_float")||y.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-H&&j>=0&&j<=E.height-K&&I.readPixels(z,j,H,K,je.convert(We),je.convert(Ne),we)}finally{const Fe=L!==null?Q.get(L).__webglFramebuffer:null;B.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(E,z,j=0){const H=Math.pow(2,-j),K=Math.floor(z.image.width*H),we=Math.floor(z.image.height*H);se.setTexture2D(z,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,E.x,E.y,K,we),B.unbindTexture()},this.copyTextureToTexture=function(E,z,j,H=0){const K=z.image.width,we=z.image.height,Ie=je.convert(j.format),Oe=je.convert(j.type);se.setTexture2D(j,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,E.x,E.y,K,we,Ie,Oe,z.image.data):z.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Ie,z.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,H,E.x,E.y,Ie,Oe,z.image),H===0&&j.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(E,z,j,H,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,Ie=E.max.y-E.min.y+1,Oe=E.max.z-E.min.z+1,Fe=je.convert(H.format),We=je.convert(H.type);let Ne;if(H.isData3DTexture)se.setTexture3D(H,0),Ne=I.TEXTURE_3D;else if(H.isDataArrayTexture)se.setTexture2DArray(H,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const He=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),st=I.getParameter(I.UNPACK_SKIP_PIXELS),Vt=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES),ot=j.isCompressedTexture?j.mipmaps[0]:j.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?I.texSubImage3D(Ne,K,z.x,z.y,z.z,we,Ie,Oe,Fe,We,ot.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ne,K,z.x,z.y,z.z,we,Ie,Oe,Fe,ot.data)):I.texSubImage3D(Ne,K,z.x,z.y,z.z,we,Ie,Oe,Fe,We,ot),I.pixelStorei(I.UNPACK_ROW_LENGTH,He),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,st),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),K===0&&H.generateMipmaps&&I.generateMipmap(Ne),B.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),B.unbindTexture()},this.resetState=function(){C=0,P=0,L=null,B.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ea?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Bs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?di:Pu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===di?gt:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pv extends $u{}pv.prototype.isWebGL1Renderer=!0;class mv extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Zu extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mc=new pt,sa=new Nu,fs=new zs,hs=new k;class gv extends Nt{constructor(e=new Rn,t=new Zu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere),fs.applyMatrix4(r),fs.radius+=s,e.ray.intersectsSphere(fs)===!1)return;Mc.copy(r).invert(),sa.copy(e.ray).applyMatrix4(Mc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,v=p;_<v;_++){const m=c.getX(_);hs.fromBufferAttribute(f,m),Sc(hs,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,v=p;_<v;_++)hs.fromBufferAttribute(f,_),Sc(hs,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sc(n,e,t,i,r,s,o){const a=sa.distanceSqToPoint(n);if(a<t){const l=new k;sa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const Ec={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class _v{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const vv=new _v;class ba{constructor(e){this.manager=e!==void 0?e:vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ba.DEFAULT_MATERIAL_NAME="__DEFAULT";class xv extends ba{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ec.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Rr("img");function l(){u(),Ec.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Av extends ba{constructor(e){super(e)}load(e,t,i,r){const s=new It,o=new xv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);let li=window.innerWidth,ci=window.innerHeight,Mv=document.querySelector(".webgl"),Ra,wr,Zi,Ls;function Sv(){Ra=new mv,wr=new Xt(75,li/ci,.1,1e3),new Av,Zi=new $u({canvas:Mv}),wr.position.z=5,Zi.setSize(li,ci)}function Ev(n){const e=new Rn,t=new Zu({color:16777215,size:.005});Ls=new gv(e,t);const i=new Float32Array(n*3);for(let r=0;r<n*3;r++)i[r]=(Math.random()-.5)*10;e.setAttribute("position",new nn(i,3)),Ra.add(Ls)}function yv(){document.onresize=function(){li=window.innerWidth,ci=window.innerHeight,Zi.setSize(li,ci)},window.addEventListener("resize",()=>{li=window.innerWidth,ci=window.innerHeight,wr.aspect=li/ci,wr.updateProjectionMatrix(),Zi.setSize(li,ci)})}const Qu=()=>{requestAnimationFrame(Qu),Ls.rotation.x+=.001,Ls.rotation.y+=.001,Zi.render(Ra,wr)};Sv();Ev(5e3);yv();Zi.setClearColor(855052);Qu();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wa(n,e){const t=new Set(n.split(","));return e?i=>t.has(i.toLowerCase()):i=>t.has(i)}const nt={},Wi=[],Gt=()=>{},Tv=()=>!1,Vs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ca=n=>n.startsWith("onUpdate:"),vt=Object.assign,Pa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bv=Object.prototype.hasOwnProperty,Ye=(n,e)=>bv.call(n,e),Be=Array.isArray,vr=n=>Ws(n)==="[object Map]",Rv=n=>Ws(n)==="[object Set]",Ve=n=>typeof n=="function",mt=n=>typeof n=="string",ks=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Ju=n=>(rt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),wv=Object.prototype.toString,Ws=n=>wv.call(n),Cv=n=>Ws(n).slice(8,-1),Pv=n=>Ws(n)==="[object Object]",La=n=>mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xr=wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Lv=/-(\w)/g,hn=Xs(n=>n.replace(Lv,(e,t)=>t?t.toUpperCase():"")),Dv=/\B([A-Z])/g,rr=Xs(n=>n.replace(Dv,"-$1").toLowerCase()),qs=Xs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ho=Xs(n=>n?`on${qs(n)}`:""),$n=(n,e)=>!Object.is(n,e),Go=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Ds=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Uv=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let yc;const ef=()=>yc||(yc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Da(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=mt(i)?Fv(i):Da(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(mt(n)||rt(n))return n}const Iv=/;(?![^(]*\))/g,Nv=/:([^]+)/,Ov=/\/\*[^]*?\*\//g;function Fv(n){const e={};return n.replace(Ov,"").split(Iv).forEach(t=>{if(t){const i=t.split(Nv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ua(n){let e="";if(mt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Ua(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zv=wa(Bv);function tf(n){return!!n||n===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Hv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Gv(n,e=Kt){e&&e.active&&e.effects.push(n)}function Vv(){return Kt}let mi;class Ia{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Gv(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ai();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(kv(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Mi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=qn,t=mi;try{return qn=!0,mi=this,this._runnings++,Tc(this),this.fn()}finally{bc(this),this._runnings--,mi=t,qn=e}}stop(){var e;this.active&&(Tc(this),bc(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function kv(n){return n.value}function Tc(n){n._trackId++,n._depsLength=0}function bc(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)nf(n.deps[e],n);n.deps.length=n._depsLength}}function nf(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let qn=!0,oa=0;const rf=[];function Ai(){rf.push(qn),qn=!1}function Mi(){const n=rf.pop();qn=n===void 0?!0:n}function Na(){oa++}function Oa(){for(oa--;!oa&&aa.length;)aa.shift()()}function sf(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&nf(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const aa=[];function of(n,e,t){Na();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&aa.push(i.scheduler)))}Oa()}const af=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},la=new WeakMap,gi=Symbol(""),ca=Symbol("");function Ot(n,e,t){if(qn&&mi){let i=la.get(n);i||la.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=af(()=>i.delete(t))),sf(mi,r)}}function yn(n,e,t,i,r,s){const o=la.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!ks(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?La(t)&&a.push(o.get("length")):(a.push(o.get(gi)),vr(n)&&a.push(o.get(ca)));break;case"delete":Be(n)||(a.push(o.get(gi)),vr(n)&&a.push(o.get(ca)));break;case"set":vr(n)&&a.push(o.get(gi));break}Na();for(const l of a)l&&of(l,4);Oa()}const Wv=wa("__proto__,__v_isRef,__isVue"),lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ks)),Rc=Xv();function Xv(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ke(this);for(let s=0,o=this.length;s<o;s++)Ot(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ai(),Na();const i=Ke(this)[e].apply(this,t);return Oa(),Mi(),i}}),n}function qv(n){const e=Ke(this);return Ot(e,"has",n),e.hasOwnProperty(n)}class cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?sx:df:s?hf:ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){if(o&&Ye(Rc,t))return Reflect.get(Rc,t,i);if(t==="hasOwnProperty")return qv}const a=Reflect.get(e,t,i);return(ks(t)?lf.has(t):Wv(t))||(r||Ot(e,"get",t),s)?a:Ft(a)?o&&La(t)?a:a.value:rt(a)?r?mf(a):js(a):a}}class uf extends cf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Qi(s);if(!Us(i)&&!Qi(i)&&(s=Ke(s),i=Ke(i)),!Be(e)&&Ft(s)&&!Ft(i))return l?!1:(s.value=i,!0)}const o=Be(e)&&La(t)?Number(t)<e.length:Ye(e,t),a=Reflect.set(e,t,i,r);return e===Ke(r)&&(o?$n(i,s)&&yn(e,"set",t,i):yn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ye(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&yn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ks(t)||!lf.has(t))&&Ot(e,"has",t),i}ownKeys(e){return Ot(e,"iterate",Be(e)?"length":gi),Reflect.ownKeys(e)}}class Yv extends cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const jv=new uf,Kv=new Yv,$v=new uf(!0),Fa=n=>n,Ys=n=>Reflect.getPrototypeOf(n);function ds(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ke(n),s=Ke(e);t||($n(e,s)&&Ot(r,"get",e),Ot(r,"get",s));const{has:o}=Ys(r),a=i?Fa:t?Ha:Cr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function ps(n,e=!1){const t=this.__v_raw,i=Ke(t),r=Ke(n);return e||($n(n,r)&&Ot(i,"has",n),Ot(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ms(n,e=!1){return n=n.__v_raw,!e&&Ot(Ke(n),"iterate",gi),Reflect.get(n,"size",n)}function wc(n){n=Ke(n);const e=Ke(this);return Ys(e).has.call(e,n)||(e.add(n),yn(e,"add",n,n)),this}function Cc(n,e){e=Ke(e);const t=Ke(this),{has:i,get:r}=Ys(t);let s=i.call(t,n);s||(n=Ke(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?$n(e,o)&&yn(t,"set",n,e):yn(t,"add",n,e),this}function Pc(n){const e=Ke(this),{has:t,get:i}=Ys(e);let r=t.call(e,n);r||(n=Ke(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&yn(e,"delete",n,void 0),s}function Lc(){const n=Ke(this),e=n.size!==0,t=n.clear();return e&&yn(n,"clear",void 0,void 0),t}function gs(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ke(o),l=e?Fa:n?Ha:Cr;return!n&&Ot(a,"iterate",gi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function _s(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),o=vr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Fa:e?Ha:Cr;return!e&&Ot(s,"iterate",l?ca:gi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function In(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Zv(){const n={get(s){return ds(this,s)},get size(){return ms(this)},has:ps,add:wc,set:Cc,delete:Pc,clear:Lc,forEach:gs(!1,!1)},e={get(s){return ds(this,s,!1,!0)},get size(){return ms(this)},has:ps,add:wc,set:Cc,delete:Pc,clear:Lc,forEach:gs(!1,!0)},t={get(s){return ds(this,s,!0)},get size(){return ms(this,!0)},has(s){return ps.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:gs(!0,!1)},i={get(s){return ds(this,s,!0,!0)},get size(){return ms(this,!0)},has(s){return ps.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_s(s,!1,!1),t[s]=_s(s,!0,!1),e[s]=_s(s,!1,!0),i[s]=_s(s,!0,!0)}),[n,t,e,i]}const[Qv,Jv,ex,tx]=Zv();function Ba(n,e){const t=e?n?tx:ex:n?Jv:Qv;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ye(t,r)&&r in i?t:i,r,s)}const nx={get:Ba(!1,!1)},ix={get:Ba(!1,!0)},rx={get:Ba(!0,!1)},ff=new WeakMap,hf=new WeakMap,df=new WeakMap,sx=new WeakMap;function ox(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ax(n){return n.__v_skip||!Object.isExtensible(n)?0:ox(Cv(n))}function js(n){return Qi(n)?n:za(n,!1,jv,nx,ff)}function pf(n){return za(n,!1,$v,ix,hf)}function mf(n){return za(n,!0,Kv,rx,df)}function za(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=ax(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Xi(n){return Qi(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Qi(n){return!!(n&&n.__v_isReadonly)}function Us(n){return!!(n&&n.__v_isShallow)}function gf(n){return Xi(n)||Qi(n)}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function _f(n){return Object.isExtensible(n)&&Ds(n,"__v_skip",!0),n}const Cr=n=>rt(n)?js(n):n,Ha=n=>rt(n)?mf(n):n;class vf{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ia(()=>e(this._value),()=>As(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ke(this);return(!e._cacheable||e.effect.dirty)&&$n(e._value,e._value=e.effect.run())&&As(e,4),xf(e),e.effect._dirtyLevel>=2&&As(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function lx(n,e,t=!1){let i,r;const s=Ve(n);return s?(i=n,r=Gt):(i=n.get,r=n.set),new vf(i,r,s||!r,t)}function xf(n){var e;qn&&mi&&(n=Ke(n),sf(mi,(e=n.dep)!=null?e:n.dep=af(()=>n.dep=void 0,n instanceof vf?n:void 0)))}function As(n,e=4,t){n=Ke(n);const i=n.dep;i&&of(i,e)}function Ft(n){return!!(n&&n.__v_isRef===!0)}function cx(n){return Af(n,!1)}function ux(n){return Af(n,!0)}function Af(n,e){return Ft(n)?n:new fx(n,e)}class fx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:Cr(e)}get value(){return xf(this),this._value}set value(e){const t=this.__v_isShallow||Us(e)||Qi(e);e=t?e:Ke(e),$n(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Cr(e),As(this,4))}}function Yn(n){return Ft(n)?n.value:n}const hx={get:(n,e,t)=>Yn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Mf(n){return Xi(n)?n:new Proxy(n,hx)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jn(n,e,t,i){try{return i?n(...i):n()}catch(r){Ks(r,e,t)}}function rn(n,e,t,i){if(Ve(n)){const s=jn(n,e,t,i);return s&&Ju(s)&&s.catch(o=>{Ks(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(rn(n[s],e,t,i));return r}function Ks(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){jn(l,null,10,[n,o,a]);return}}dx(n,t,r,i)}function dx(n,e,t,i=!0){console.error(n)}let Pr=!1,ua=!1;const Mt=[];let fn=0;const qi=[];let On=null,ui=0;const Sf=Promise.resolve();let Ga=null;function Ef(n){const e=Ga||Sf;return n?e.then(this?n.bind(this):n):e}function px(n){let e=fn+1,t=Mt.length;for(;e<t;){const i=e+t>>>1,r=Mt[i],s=Lr(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Va(n){(!Mt.length||!Mt.includes(n,Pr&&n.allowRecurse?fn+1:fn))&&(n.id==null?Mt.push(n):Mt.splice(px(n.id),0,n),yf())}function yf(){!Pr&&!ua&&(ua=!0,Ga=Sf.then(bf))}function mx(n){const e=Mt.indexOf(n);e>fn&&Mt.splice(e,1)}function gx(n){Be(n)?qi.push(...n):(!On||!On.includes(n,n.allowRecurse?ui+1:ui))&&qi.push(n),yf()}function Dc(n,e,t=Pr?fn+1:0){for(;t<Mt.length;t++){const i=Mt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Mt.splice(t,1),t--,i()}}}function Tf(n){if(qi.length){const e=[...new Set(qi)].sort((t,i)=>Lr(t)-Lr(i));if(qi.length=0,On){On.push(...e);return}for(On=e,ui=0;ui<On.length;ui++)On[ui]();On=null,ui=0}}const Lr=n=>n.id==null?1/0:n.id,_x=(n,e)=>{const t=Lr(n)-Lr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function bf(n){ua=!1,Pr=!0,Mt.sort(_x);const e=Gt;try{for(fn=0;fn<Mt.length;fn++){const t=Mt[fn];t&&t.active!==!1&&jn(t,null,14)}}finally{fn=0,Mt.length=0,Tf(),Pr=!1,Ga=null,(Mt.length||qi.length)&&bf()}}function vx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||nt;h&&(r=t.map(p=>mt(p)?p.trim():p)),f&&(r=t.map(Uv))}let a,l=i[a=Ho(e)]||i[a=Ho(hn(e))];!l&&s&&(l=i[a=Ho(rr(e))]),l&&rn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rn(c,n,6,r)}}function Rf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Rf(c,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(rt(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>o[l]=null):vt(o,s),rt(n)&&i.set(n,o),o)}function $s(n,e){return!n||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,rr(e))||Ye(n,e))}let en=null,Zs=null;function Is(n){const e=en;return en=n,Zs=n&&n.type.__scopeId||null,e}function MM(n){Zs=n}function SM(){Zs=null}function pr(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&kc(-1);const s=Is(e);let o;try{o=n(...r)}finally{Is(s),i._d&&kc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=n;let m,d;const T=Is(n);try{if(t.shapeFlag&4){const R=r||i,C=R;m=un(u.call(C,R,f,s,p,h,_)),d=l}else{const R=e;m=un(R.length>1?R(s,{attrs:l,slots:a,emit:c}):R(s,null)),d=e.props?l:xx(l)}}catch(R){Sr.length=0,Ks(R,n,1),m=ct(xi)}let x=m;if(d&&v!==!1){const R=Object.keys(d),{shapeFlag:C}=x;R.length&&C&7&&(o&&R.some(Ca)&&(d=Ax(d,o)),x=Ji(x,d))}return t.dirs&&(x=Ji(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Is(T),m}const xx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Vs(t))&&((e||(e={}))[t]=n[t]);return e},Ax=(n,e)=>{const t={};for(const i in n)(!Ca(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mx(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!$s(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uc(i,o,c):!0:!!o;return!1}function Uc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!$s(t,s))return!0}return!1}function Sx({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const wf="components";function Ex(n,e){return Tx(wf,n,!0,e)||n}const yx=Symbol.for("v-ndc");function Tx(n,e,t=!0,i=!1){const r=en||St;if(r){const s=r.type;if(n===wf){const a=A0(s,!1);if(a&&(a===e||a===hn(e)||a===qs(hn(e))))return s}const o=Ic(r[n]||s[n],e)||Ic(r.appContext[n],e);return!o&&i?s:o}}function Ic(n,e){return n&&(n[e]||n[hn(e)]||n[qs(hn(e))])}const bx=n=>n.__isSuspense;function Rx(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):gx(n)}const wx=Symbol.for("v-scx"),Cx=()=>Tn(wx),vs={};function Ms(n,e,t){return Cf(n,e,t)}function Cf(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=nt){if(e&&s){const P=e;e=(...L)=>{P(...L),C()}}const l=St,c=P=>i===!0?P:Gi(P,i===!1?1:void 0);let u,f=!1,h=!1;if(Ft(n)?(u=()=>n.value,f=Us(n)):Xi(n)?(u=()=>c(n),f=!0):Be(n)?(h=!0,f=n.some(P=>Xi(P)||Us(P)),u=()=>n.map(P=>{if(Ft(P))return P.value;if(Xi(P))return c(P);if(Ve(P))return jn(P,l,2)})):Ve(n)?e?u=()=>jn(n,l,2):u=()=>(p&&p(),rn(n,l,3,[_])):u=Gt,e&&i){const P=u;u=()=>Gi(P())}let p,_=P=>{p=x.onStop=()=>{jn(P,l,4),p=x.onStop=void 0}},v;if(io)if(_=Gt,e?t&&rn(e,l,3,[u(),h?[]:void 0,_]):u(),r==="sync"){const P=Cx();v=P.__watcherHandles||(P.__watcherHandles=[])}else return Gt;let m=h?new Array(n.length).fill(vs):vs;const d=()=>{if(!(!x.active||!x.dirty))if(e){const P=x.run();(i||f||(h?P.some((L,$)=>$n(L,m[$])):$n(P,m)))&&(p&&p(),rn(e,l,3,[P,m===vs?void 0:h&&m[0]===vs?[]:m,_]),m=P)}else x.run()};d.allowRecurse=!!e;let T;r==="sync"?T=d:r==="post"?T=()=>Lt(d,l&&l.suspense):(d.pre=!0,l&&(d.id=l.uid),T=()=>Va(d));const x=new Ia(u,Gt,T),R=Vv(),C=()=>{x.stop(),R&&Pa(R.effects,x)};return e?t?d():m=x.run():r==="post"?Lt(x.run.bind(x),l&&l.suspense):x.run(),v&&v.push(C),C}function Px(n,e,t){const i=this.proxy,r=mt(n)?n.includes(".")?Pf(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=Hr(this),a=Cf(r,s.bind(i),t);return o(),a}function Pf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Gi(n,e,t=0,i){if(!rt(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),Ft(n))Gi(n.value,e,t,i);else if(Be(n))for(let r=0;r<n.length;r++)Gi(n[r],e,t,i);else if(Rv(n)||vr(n))n.forEach(r=>{Gi(r,e,t,i)});else if(Pv(n))for(const r in n)Gi(n[r],e,t,i);return n}function ii(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ai(),rn(l,t,8,[n.el,a,n,e]),Mi())}}/*! #__NO_SIDE_EFFECTS__ */function Qs(n,e){return Ve(n)?(()=>vt({name:n.name},e,{setup:n}))():n}const Ss=n=>!!n.type.__asyncLoader,Lf=n=>n.type.__isKeepAlive;function Lx(n,e){Df(n,"a",e)}function Dx(n,e){Df(n,"da",e)}function Df(n,e,t=St){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Js(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Lf(r.parent.vnode)&&Ux(i,e,t,r),r=r.parent}}function Ux(n,e,t,i){const r=Js(e,n,i,!0);Uf(()=>{Pa(i[e],r)},t)}function Js(n,e,t=St,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ai();const a=Hr(t),l=rn(e,t,n,o);return a(),Mi(),l});return i?r.unshift(s):r.push(s),s}}const wn=n=>(e,t=St)=>(!io||n==="sp")&&Js(n,(...i)=>e(...i),t),Ix=wn("bm"),Nx=wn("m"),Ox=wn("bu"),Fx=wn("u"),Bx=wn("bum"),Uf=wn("um"),zx=wn("sp"),Hx=wn("rtg"),Gx=wn("rtc");function Vx(n,e=St){Js("ec",n,e)}function EM(n,e,t,i){let r;const s=t&&t[i];if(Be(n)||mt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(rt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const fa=n=>n?Xf(n)?Ya(n)||n.proxy:fa(n.parent):null,Ar=vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fa(n.parent),$root:n=>fa(n.root),$emit:n=>n.emit,$options:n=>ka(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Va(n.update)}),$nextTick:n=>n.n||(n.n=Ef.bind(n.proxy)),$watch:n=>Px.bind(n)}),ko=(n,e)=>n!==nt&&!n.__isScriptSetup&&Ye(n,e),kx={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ko(i,e))return o[e]=1,i[e];if(r!==nt&&Ye(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ye(c,e))return o[e]=3,s[e];if(t!==nt&&Ye(t,e))return o[e]=4,t[e];ha&&(o[e]=0)}}const u=Ar[e];let f,h;if(u)return e==="$attrs"&&Ot(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==nt&&Ye(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ko(r,e)?(r[e]=t,!0):i!==nt&&Ye(i,e)?(i[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==nt&&Ye(n,o)||ko(e,o)||(a=s[0])&&Ye(a,o)||Ye(i,o)||Ye(Ar,o)||Ye(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Nc(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ha=!0;function Wx(n){const e=ka(n),t=n.proxy,i=n.ctx;ha=!1,e.beforeCreate&&Oc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:x,unmounted:R,render:C,renderTracked:P,renderTriggered:L,errorCaptured:$,serverPrefetch:M,expose:b,inheritAttrs:Z,components:de,directives:he,filters:N}=e;if(c&&Xx(c,i,null),o)for(const G in o){const ne=o[G];Ve(ne)&&(i[G]=ne.bind(t))}if(r){const G=r.call(t,t);rt(G)&&(n.data=js(G))}if(ha=!0,s)for(const G in s){const ne=s[G],J=Ve(ne)?ne.bind(t,t):Ve(ne.get)?ne.get.bind(t,t):Gt,le=!Ve(ne)&&Ve(ne.set)?ne.set.bind(t):Gt,O=Jt({get:J,set:le});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>O.value,set:Y=>O.value=Y})}if(a)for(const G in a)If(a[G],i,t,G);if(l){const G=Ve(l)?l.call(t):l;Reflect.ownKeys(G).forEach(ne=>{Es(ne,G[ne])})}u&&Oc(u,n,"c");function te(G,ne){Be(ne)?ne.forEach(J=>G(J.bind(t))):ne&&G(ne.bind(t))}if(te(Ix,f),te(Nx,h),te(Ox,p),te(Fx,_),te(Lx,v),te(Dx,m),te(Vx,$),te(Gx,P),te(Hx,L),te(Bx,T),te(Uf,R),te(zx,M),Be(b))if(b.length){const G=n.exposed||(n.exposed={});b.forEach(ne=>{Object.defineProperty(G,ne,{get:()=>t[ne],set:J=>t[ne]=J})})}else n.exposed||(n.exposed={});C&&n.render===Gt&&(n.render=C),Z!=null&&(n.inheritAttrs=Z),de&&(n.components=de),he&&(n.directives=he)}function Xx(n,e,t=Gt){Be(n)&&(n=da(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=Tn(r.from||i,r.default,!0):s=Tn(r.from||i):s=Tn(r),Ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Oc(n,e,t){rn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){const r=i.includes(".")?Pf(t,i):()=>t[i];if(mt(n)){const s=e[n];Ve(s)&&Ms(r,s)}else if(Ve(n))Ms(r,n.bind(t));else if(rt(n))if(Be(n))n.forEach(s=>If(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Ms(r,s,n)}}function ka(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ns(l,c,o,!0)),Ns(l,e,o)),rt(e)&&s.set(e,l),l}function Ns(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ns(n,s,t,!0),r&&r.forEach(o=>Ns(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=qx[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const qx={data:Fc,props:Bc,emits:Bc,methods:mr,computed:mr,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:mr,directives:mr,watch:jx,provide:Fc,inject:Yx};function Fc(n,e){return e?n?function(){return vt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Yx(n,e){return mr(da(n),da(e))}function da(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function mr(n,e){return n?vt(Object.create(null),n,e):e}function Bc(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:vt(Object.create(null),Nc(n),Nc(e??{})):e}function jx(n,e){if(!n)return e;if(!e)return n;const t=vt(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function Nf(){return{app:null,config:{isNativeTag:Tv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kx=0;function $x(n,e){return function(i,r=null){Ve(i)||(i=vt({},i)),r!=null&&!rt(r)&&(r=null);const s=Nf(),o=new WeakSet;let a=!1;const l=s.app={_uid:Kx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:S0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ve(c.install)?(o.add(c),c.install(l,...u)):Ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ct(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ya(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Mr;Mr=l;try{return c()}finally{Mr=u}}};return l}}let Mr=null;function Es(n,e){if(St){let t=St.provides;const i=St.parent&&St.parent.provides;i===t&&(t=St.provides=Object.create(i)),t[n]=e}}function Tn(n,e,t=!1){const i=St||en;if(i||Mr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Mr._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}function Zx(n,e,t,i=!1){const r={},s={};Ds(s,no,1),n.propsDefaults=Object.create(null),Of(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:pf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Qx(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ke(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if($s(n.emitsOptions,h))continue;const p=e[h];if(l)if(Ye(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=hn(h);r[_]=pa(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Of(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ye(e,f)&&((u=rr(f))===f||!Ye(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=pa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&yn(n,"set","$attrs")}function Of(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(xr(l))continue;const c=e[l];let u;r&&Ye(r,u=hn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:$s(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ke(t),c=a||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=pa(r,l,f,c[f],n,!Ye(c,f))}}return o}function pa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Hr(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===rr(t))&&(i=!0))}return i}function Ff(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,p]=Ff(f,e,!0);vt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return rt(n)&&i.set(n,Wi),Wi;if(Be(s))for(let u=0;u<s.length;u++){const f=hn(s[u]);zc(f)&&(o[f]=nt)}else if(s)for(const u in s){const f=hn(u);if(zc(f)){const h=s[u],p=o[f]=Be(h)||Ve(h)?{type:h}:vt({},h);if(p){const _=Vc(Boolean,p.type),v=Vc(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||Ye(p,"default"))&&a.push(f)}}}const c=[o,a];return rt(n)&&i.set(n,c),c}function zc(n){return n[0]!=="$"&&!xr(n)}function Hc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Gc(n,e){return Hc(n)===Hc(e)}function Vc(n,e){return Be(e)?e.findIndex(t=>Gc(t,n)):Ve(e)&&Gc(e,n)?0:-1}const Bf=n=>n[0]==="_"||n==="$stable",Wa=n=>Be(n)?n.map(un):[un(n)],Jx=(n,e,t)=>{if(e._n)return e;const i=pr((...r)=>Wa(e(...r)),t);return i._c=!1,i},zf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Bf(r))continue;const s=n[r];if(Ve(s))e[r]=Jx(r,s,i);else if(s!=null){const o=Wa(s);e[r]=()=>o}}},Hf=(n,e)=>{const t=Wa(e);n.slots.default=()=>t},e0=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ke(e),Ds(e,"_",t)):zf(e,n.slots={})}else n.slots={},e&&Hf(n,e);Ds(n.slots,no,1)},t0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(vt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,zf(e,r)),o=e}else e&&(Hf(n,e),o={default:1});if(s)for(const a in r)!Bf(a)&&o[a]==null&&delete r[a]};function ma(n,e,t,i,r=!1){if(Be(n)){n.forEach((h,p)=>ma(h,e&&(Be(e)?e[p]:e),t,i,r));return}if(Ss(i)&&!r)return;const s=i.shapeFlag&4?Ya(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(mt(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):Ft(c)&&(c.value=null)),Ve(l))jn(l,a,12,[o,u]);else{const h=mt(l),p=Ft(l);if(h||p){const _=()=>{if(n.f){const v=h?Ye(f,l)?f[l]:u[l]:l.value;r?Be(v)&&Pa(v,s):Be(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ye(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,Lt(_,t)):_()}}}const Lt=Rx;function n0(n){return i0(n)}function i0(n,e){const t=ef();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Gt,insertStaticContent:_}=n,v=(S,y,U,B=null,V=null,Q=null,se=void 0,ie=null,ue=!!y.dynamicChildren)=>{if(S===y)return;S&&!fr(S,y)&&(B=F(S),Y(S,V,Q,!0),S=null),y.patchFlag===-2&&(ue=!1,y.dynamicChildren=null);const{type:oe,ref:A,shapeFlag:g}=y;switch(oe){case eo:m(S,y,U,B);break;case xi:d(S,y,U,B);break;case ys:S==null&&T(y,U,B,se);break;case cn:de(S,y,U,B,V,Q,se,ie,ue);break;default:g&1?C(S,y,U,B,V,Q,se,ie,ue):g&6?he(S,y,U,B,V,Q,se,ie,ue):(g&64||g&128)&&oe.process(S,y,U,B,V,Q,se,ie,ue,Se)}A!=null&&V&&ma(A,S&&S.ref,Q,y||S,!y)},m=(S,y,U,B)=>{if(S==null)i(y.el=a(y.children),U,B);else{const V=y.el=S.el;y.children!==S.children&&c(V,y.children)}},d=(S,y,U,B)=>{S==null?i(y.el=l(y.children||""),U,B):y.el=S.el},T=(S,y,U,B)=>{[S.el,S.anchor]=_(S.children,y,U,B,S.el,S.anchor)},x=({el:S,anchor:y},U,B)=>{let V;for(;S&&S!==y;)V=h(S),i(S,U,B),S=V;i(y,U,B)},R=({el:S,anchor:y})=>{let U;for(;S&&S!==y;)U=h(S),r(S),S=U;r(y)},C=(S,y,U,B,V,Q,se,ie,ue)=>{y.type==="svg"?se="svg":y.type==="math"&&(se="mathml"),S==null?P(y,U,B,V,Q,se,ie,ue):M(S,y,V,Q,se,ie,ue)},P=(S,y,U,B,V,Q,se,ie)=>{let ue,oe;const{props:A,shapeFlag:g,transition:D,dirs:W}=S;if(ue=S.el=o(S.type,Q,A&&A.is,A),g&8?u(ue,S.children):g&16&&$(S.children,ue,null,B,V,Wo(S,Q),se,ie),W&&ii(S,null,B,"created"),L(ue,S,S.scopeId,se,B),A){for(const re in A)re!=="value"&&!xr(re)&&s(ue,re,null,A[re],Q,S.children,B,V,Re);"value"in A&&s(ue,"value",null,A.value,Q),(oe=A.onVnodeBeforeMount)&&an(oe,B,S)}W&&ii(S,null,B,"beforeMount");const X=r0(V,D);X&&D.beforeEnter(ue),i(ue,y,U),((oe=A&&A.onVnodeMounted)||X||W)&&Lt(()=>{oe&&an(oe,B,S),X&&D.enter(ue),W&&ii(S,null,B,"mounted")},V)},L=(S,y,U,B,V)=>{if(U&&p(S,U),B)for(let Q=0;Q<B.length;Q++)p(S,B[Q]);if(V){let Q=V.subTree;if(y===Q){const se=V.vnode;L(S,se,se.scopeId,se.slotScopeIds,V.parent)}}},$=(S,y,U,B,V,Q,se,ie,ue=0)=>{for(let oe=ue;oe<S.length;oe++){const A=S[oe]=ie?Fn(S[oe]):un(S[oe]);v(null,A,y,U,B,V,Q,se,ie)}},M=(S,y,U,B,V,Q,se)=>{const ie=y.el=S.el;let{patchFlag:ue,dynamicChildren:oe,dirs:A}=y;ue|=S.patchFlag&16;const g=S.props||nt,D=y.props||nt;let W;if(U&&ri(U,!1),(W=D.onVnodeBeforeUpdate)&&an(W,U,y,S),A&&ii(y,S,U,"beforeUpdate"),U&&ri(U,!0),oe?b(S.dynamicChildren,oe,ie,U,B,Wo(y,V),Q):se||ne(S,y,ie,null,U,B,Wo(y,V),Q,!1),ue>0){if(ue&16)Z(ie,y,g,D,U,B,V);else if(ue&2&&g.class!==D.class&&s(ie,"class",null,D.class,V),ue&4&&s(ie,"style",g.style,D.style,V),ue&8){const X=y.dynamicProps;for(let re=0;re<X.length;re++){const ge=X[re],ce=g[ge],ve=D[ge];(ve!==ce||ge==="value")&&s(ie,ge,ce,ve,V,S.children,U,B,Re)}}ue&1&&S.children!==y.children&&u(ie,y.children)}else!se&&oe==null&&Z(ie,y,g,D,U,B,V);((W=D.onVnodeUpdated)||A)&&Lt(()=>{W&&an(W,U,y,S),A&&ii(y,S,U,"updated")},B)},b=(S,y,U,B,V,Q,se)=>{for(let ie=0;ie<y.length;ie++){const ue=S[ie],oe=y[ie],A=ue.el&&(ue.type===cn||!fr(ue,oe)||ue.shapeFlag&70)?f(ue.el):U;v(ue,oe,A,null,B,V,Q,se,!0)}},Z=(S,y,U,B,V,Q,se)=>{if(U!==B){if(U!==nt)for(const ie in U)!xr(ie)&&!(ie in B)&&s(S,ie,U[ie],null,se,y.children,V,Q,Re);for(const ie in B){if(xr(ie))continue;const ue=B[ie],oe=U[ie];ue!==oe&&ie!=="value"&&s(S,ie,oe,ue,se,y.children,V,Q,Re)}"value"in B&&s(S,"value",U.value,B.value,se)}},de=(S,y,U,B,V,Q,se,ie,ue)=>{const oe=y.el=S?S.el:a(""),A=y.anchor=S?S.anchor:a("");let{patchFlag:g,dynamicChildren:D,slotScopeIds:W}=y;W&&(ie=ie?ie.concat(W):W),S==null?(i(oe,U,B),i(A,U,B),$(y.children||[],U,A,V,Q,se,ie,ue)):g>0&&g&64&&D&&S.dynamicChildren?(b(S.dynamicChildren,D,U,V,Q,se,ie),(y.key!=null||V&&y===V.subTree)&&Gf(S,y,!0)):ne(S,y,U,A,V,Q,se,ie,ue)},he=(S,y,U,B,V,Q,se,ie,ue)=>{y.slotScopeIds=ie,S==null?y.shapeFlag&512?V.ctx.activate(y,U,B,se,ue):N(y,U,B,V,Q,se,ue):q(S,y,ue)},N=(S,y,U,B,V,Q,se)=>{const ie=S.component=m0(S,B,V);if(Lf(S)&&(ie.ctx.renderer=Se),g0(ie),ie.asyncDep){if(V&&V.registerDep(ie,te),!S.el){const ue=ie.subTree=ct(xi);d(null,ue,y,U)}}else te(ie,S,y,U,V,Q,se)},q=(S,y,U)=>{const B=y.component=S.component;if(Mx(S,y,U))if(B.asyncDep&&!B.asyncResolved){G(B,y,U);return}else B.next=y,mx(B.update),B.effect.dirty=!0,B.update();else y.el=S.el,B.vnode=y},te=(S,y,U,B,V,Q,se)=>{const ie=()=>{if(S.isMounted){let{next:A,bu:g,u:D,parent:W,vnode:X}=S;{const De=Vf(S);if(De){A&&(A.el=X.el,G(S,A,se)),De.asyncDep.then(()=>{S.isUnmounted||ie()});return}}let re=A,ge;ri(S,!1),A?(A.el=X.el,G(S,A,se)):A=X,g&&Go(g),(ge=A.props&&A.props.onVnodeBeforeUpdate)&&an(ge,W,A,X),ri(S,!0);const ce=Vo(S),ve=S.subTree;S.subTree=ce,v(ve,ce,f(ve.el),F(ve),S,V,Q),A.el=ce.el,re===null&&Sx(S,ce.el),D&&Lt(D,V),(ge=A.props&&A.props.onVnodeUpdated)&&Lt(()=>an(ge,W,A,X),V)}else{let A;const{el:g,props:D}=y,{bm:W,m:X,parent:re}=S,ge=Ss(y);if(ri(S,!1),W&&Go(W),!ge&&(A=D&&D.onVnodeBeforeMount)&&an(A,re,y),ri(S,!0),g&&I){const ce=()=>{S.subTree=Vo(S),I(g,S.subTree,S,V,null)};ge?y.type.__asyncLoader().then(()=>!S.isUnmounted&&ce()):ce()}else{const ce=S.subTree=Vo(S);v(null,ce,U,B,S,V,Q),y.el=ce.el}if(X&&Lt(X,V),!ge&&(A=D&&D.onVnodeMounted)){const ce=y;Lt(()=>an(A,re,ce),V)}(y.shapeFlag&256||re&&Ss(re.vnode)&&re.vnode.shapeFlag&256)&&S.a&&Lt(S.a,V),S.isMounted=!0,y=U=B=null}},ue=S.effect=new Ia(ie,Gt,()=>Va(oe),S.scope),oe=S.update=()=>{ue.dirty&&ue.run()};oe.id=S.uid,ri(S,!0),oe()},G=(S,y,U)=>{y.component=S;const B=S.vnode.props;S.vnode=y,S.next=null,Qx(S,y.props,B,U),t0(S,y.children,U),Ai(),Dc(S),Mi()},ne=(S,y,U,B,V,Q,se,ie,ue=!1)=>{const oe=S&&S.children,A=S?S.shapeFlag:0,g=y.children,{patchFlag:D,shapeFlag:W}=y;if(D>0){if(D&128){le(oe,g,U,B,V,Q,se,ie,ue);return}else if(D&256){J(oe,g,U,B,V,Q,se,ie,ue);return}}W&8?(A&16&&Re(oe,V,Q),g!==oe&&u(U,g)):A&16?W&16?le(oe,g,U,B,V,Q,se,ie,ue):Re(oe,V,Q,!0):(A&8&&u(U,""),W&16&&$(g,U,B,V,Q,se,ie,ue))},J=(S,y,U,B,V,Q,se,ie,ue)=>{S=S||Wi,y=y||Wi;const oe=S.length,A=y.length,g=Math.min(oe,A);let D;for(D=0;D<g;D++){const W=y[D]=ue?Fn(y[D]):un(y[D]);v(S[D],W,U,null,V,Q,se,ie,ue)}oe>A?Re(S,V,Q,!0,!1,g):$(y,U,B,V,Q,se,ie,ue,g)},le=(S,y,U,B,V,Q,se,ie,ue)=>{let oe=0;const A=y.length;let g=S.length-1,D=A-1;for(;oe<=g&&oe<=D;){const W=S[oe],X=y[oe]=ue?Fn(y[oe]):un(y[oe]);if(fr(W,X))v(W,X,U,null,V,Q,se,ie,ue);else break;oe++}for(;oe<=g&&oe<=D;){const W=S[g],X=y[D]=ue?Fn(y[D]):un(y[D]);if(fr(W,X))v(W,X,U,null,V,Q,se,ie,ue);else break;g--,D--}if(oe>g){if(oe<=D){const W=D+1,X=W<A?y[W].el:B;for(;oe<=D;)v(null,y[oe]=ue?Fn(y[oe]):un(y[oe]),U,X,V,Q,se,ie,ue),oe++}}else if(oe>D)for(;oe<=g;)Y(S[oe],V,Q,!0),oe++;else{const W=oe,X=oe,re=new Map;for(oe=X;oe<=D;oe++){const Ce=y[oe]=ue?Fn(y[oe]):un(y[oe]);Ce.key!=null&&re.set(Ce.key,oe)}let ge,ce=0;const ve=D-X+1;let De=!1,qe=0;const pe=new Array(ve);for(oe=0;oe<ve;oe++)pe[oe]=0;for(oe=W;oe<=g;oe++){const Ce=S[oe];if(ce>=ve){Y(Ce,V,Q,!0);continue}let Pe;if(Ce.key!=null)Pe=re.get(Ce.key);else for(ge=X;ge<=D;ge++)if(pe[ge-X]===0&&fr(Ce,y[ge])){Pe=ge;break}Pe===void 0?Y(Ce,V,Q,!0):(pe[Pe-X]=oe+1,Pe>=qe?qe=Pe:De=!0,v(Ce,y[Pe],U,null,V,Q,se,ie,ue),ce++)}const je=De?s0(pe):Wi;for(ge=je.length-1,oe=ve-1;oe>=0;oe--){const Ce=X+oe,Pe=y[Ce],Ue=Ce+1<A?y[Ce+1].el:B;pe[oe]===0?v(null,Pe,U,Ue,V,Q,se,ie,ue):De&&(ge<0||oe!==je[ge]?O(Pe,U,Ue,2):ge--)}}},O=(S,y,U,B,V=null)=>{const{el:Q,type:se,transition:ie,children:ue,shapeFlag:oe}=S;if(oe&6){O(S.component.subTree,y,U,B);return}if(oe&128){S.suspense.move(y,U,B);return}if(oe&64){se.move(S,y,U,Se);return}if(se===cn){i(Q,y,U);for(let g=0;g<ue.length;g++)O(ue[g],y,U,B);i(S.anchor,y,U);return}if(se===ys){x(S,y,U);return}if(B!==2&&oe&1&&ie)if(B===0)ie.beforeEnter(Q),i(Q,y,U),Lt(()=>ie.enter(Q),V);else{const{leave:g,delayLeave:D,afterLeave:W}=ie,X=()=>i(Q,y,U),re=()=>{g(Q,()=>{X(),W&&W()})};D?D(Q,X,re):re()}else i(Q,y,U)},Y=(S,y,U,B=!1,V=!1)=>{const{type:Q,props:se,ref:ie,children:ue,dynamicChildren:oe,shapeFlag:A,patchFlag:g,dirs:D}=S;if(ie!=null&&ma(ie,null,U,S,!0),A&256){y.ctx.deactivate(S);return}const W=A&1&&D,X=!Ss(S);let re;if(X&&(re=se&&se.onVnodeBeforeUnmount)&&an(re,y,S),A&6)Te(S.component,U,B);else{if(A&128){S.suspense.unmount(U,B);return}W&&ii(S,null,y,"beforeUnmount"),A&64?S.type.remove(S,y,U,V,Se,B):oe&&(Q!==cn||g>0&&g&64)?Re(oe,y,U,!1,!0):(Q===cn&&g&384||!V&&A&16)&&Re(ue,y,U),B&&xe(S)}(X&&(re=se&&se.onVnodeUnmounted)||W)&&Lt(()=>{re&&an(re,y,S),W&&ii(S,null,y,"unmounted")},U)},xe=S=>{const{type:y,el:U,anchor:B,transition:V}=S;if(y===cn){Me(U,B);return}if(y===ys){R(S);return}const Q=()=>{r(U),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(S.shapeFlag&1&&V&&!V.persisted){const{leave:se,delayLeave:ie}=V,ue=()=>se(U,Q);ie?ie(S.el,Q,ue):ue()}else Q()},Me=(S,y)=>{let U;for(;S!==y;)U=h(S),r(S),S=U;r(y)},Te=(S,y,U)=>{const{bum:B,scope:V,update:Q,subTree:se,um:ie}=S;B&&Go(B),V.stop(),Q&&(Q.active=!1,Y(se,S,y,U)),ie&&Lt(ie,y),Lt(()=>{S.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Re=(S,y,U,B=!1,V=!1,Q=0)=>{for(let se=Q;se<S.length;se++)Y(S[se],y,U,B,V)},F=S=>S.shapeFlag&6?F(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el);let ee=!1;const ae=(S,y,U)=>{S==null?y._vnode&&Y(y._vnode,null,null,!0):v(y._vnode||null,S,y,null,null,null,U),ee||(ee=!0,Dc(),Tf(),ee=!1),y._vnode=S},Se={p:v,um:Y,m:O,r:xe,mt:N,mc:$,pc:ne,pbc:b,n:F,o:n};let ye,I;return e&&([ye,I]=e(Se)),{render:ae,hydrate:ye,createApp:$x(ae,ye)}}function Wo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ri({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function r0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Gf(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fn(r[s]),a.el=o.el),t||Gf(o,a)),a.type===eo&&(a.el=o.el)}}function s0(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Vf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vf(e)}const o0=n=>n.__isTeleport,cn=Symbol.for("v-fgt"),eo=Symbol.for("v-txt"),xi=Symbol.for("v-cmt"),ys=Symbol.for("v-stc"),Sr=[];let tn=null;function to(n=!1){Sr.push(tn=n?null:[])}function a0(){Sr.pop(),tn=Sr[Sr.length-1]||null}let Dr=1;function kc(n){Dr+=n}function kf(n){return n.dynamicChildren=Dr>0?tn||Wi:null,a0(),Dr>0&&tn&&tn.push(n),n}function Xa(n,e,t,i,r,s){return kf(dt(n,e,t,i,r,s,!0))}function l0(n,e,t,i,r){return kf(ct(n,e,t,i,r,!0))}function ga(n){return n?n.__v_isVNode===!0:!1}function fr(n,e){return n.type===e.type&&n.key===e.key}const no="__vInternal",Wf=({key:n})=>n??null,Ts=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?mt(n)||Ft(n)||Ve(n)?{i:en,r:n,k:e,f:!!t}:n:null);function dt(n,e=null,t=null,i=0,r=null,s=n===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wf(e),ref:e&&Ts(e),scopeId:Zs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(qa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),Dr>0&&!o&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const ct=c0;function c0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===yx)&&(n=xi),ga(n)){const a=Ji(n,e,!0);return t&&qa(a,t),Dr>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(n)]=a:tn.push(a)),a.patchFlag|=-2,a}if(M0(n)&&(n=n.__vccOpts),e){e=u0(e);let{class:a,style:l}=e;a&&!mt(a)&&(e.class=Ua(a)),rt(l)&&(gf(l)&&!Be(l)&&(l=vt({},l)),e.style=Da(l))}const o=mt(n)?1:bx(n)?128:o0(n)?64:rt(n)?4:Ve(n)?2:0;return dt(n,e,t,i,r,o,s,!0)}function u0(n){return n?gf(n)||no in n?vt({},n):n:null}function Ji(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?h0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Wf(a),ref:e&&e.ref?t&&r?Be(r)?r.concat(Ts(e)):[r,Ts(e)]:Ts(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==cn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ji(n.ssContent),ssFallback:n.ssFallback&&Ji(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function gr(n=" ",e=0){return ct(eo,null,n,e)}function f0(n,e){const t=ct(ys,null,n);return t.staticCount=e,t}function yM(n="",e=!1){return e?(to(),l0(xi,null,n)):ct(xi,null,n)}function un(n){return n==null||typeof n=="boolean"?ct(xi):Be(n)?ct(cn,null,n.slice()):typeof n=="object"?Fn(n):ct(eo,null,String(n))}function Fn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ji(n)}function qa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),qa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(no in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[gr(e)]):t=8);n.children=e,n.shapeFlag|=t}function h0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ua([e.class,i.class]));else if(r==="style")e.style=Da([e.style,i.style]);else if(Vs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function an(n,e,t,i=null){rn(n,e,7,[t,i])}const d0=Nf();let p0=0;function m0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||d0,s={uid:p0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ff(i,r),emitsOptions:Rf(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=vx.bind(null,s),n.ce&&n.ce(s),s}let St=null,Os,_a;{const n=ef(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Os=e("__VUE_INSTANCE_SETTERS__",t=>St=t),_a=e("__VUE_SSR_SETTERS__",t=>io=t)}const Hr=n=>{const e=St;return Os(n),n.scope.on(),()=>{n.scope.off(),Os(e)}},Wc=()=>{St&&St.scope.off(),Os(null)};function Xf(n){return n.vnode.shapeFlag&4}let io=!1;function g0(n,e=!1){e&&_a(e);const{props:t,children:i}=n.vnode,r=Xf(n);Zx(n,t,r,e),e0(n,i);const s=r?_0(n,e):void 0;return e&&_a(!1),s}function _0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=_f(new Proxy(n.ctx,kx));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?x0(n):null,s=Hr(n);Ai();const o=jn(i,n,0,[n.props,r]);if(Mi(),s(),Ju(o)){if(o.then(Wc,Wc),e)return o.then(a=>{Xc(n,a,e)}).catch(a=>{Ks(a,n,0)});n.asyncDep=o}else Xc(n,o,e)}else qf(n,e)}function Xc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=Mf(e)),qf(n,t)}let qc;function qf(n,e,t){const i=n.type;if(!n.render){if(!e&&qc&&!i.render){const r=i.template||ka(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=vt(vt({isCustomElement:s,delimiters:a},o),l);i.render=qc(r,c)}}n.render=i.render||Gt}{const r=Hr(n);Ai();try{Wx(n)}finally{Mi(),r()}}}function v0(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ot(n,"get","$attrs"),e[t]}}))}function x0(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return v0(n)},slots:n.slots,emit:n.emit,expose:e}}function Ya(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Mf(_f(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ar)return Ar[t](n)},has(e,t){return t in e||t in Ar}}))}function A0(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function M0(n){return Ve(n)&&"__vccOpts"in n}const Jt=(n,e)=>lx(n,e,io);function Yf(n,e,t){const i=arguments.length;return i===2?rt(e)&&!Be(e)?ga(e)?ct(n,null,[e]):ct(n,e):ct(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ga(t)&&(t=[t]),ct(n,e,t))}const S0="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const E0="http://www.w3.org/2000/svg",y0="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,Yc=Bn&&Bn.createElement("template"),T0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Bn.createElementNS(E0,n):e==="mathml"?Bn.createElementNS(y0,n):Bn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Yc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Yc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},b0=Symbol("_vtc");function R0(n,e,t){const i=n[b0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jc=Symbol("_vod"),w0=Symbol("_vsh"),C0=Symbol(""),P0=/(^|;)\s*display\s*:/;function L0(n,e,t){const i=n.style,r=mt(t);let s=!1;if(t&&!r){if(e)if(mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&bs(i,a,"")}else for(const o in e)t[o]==null&&bs(i,o,"");for(const o in t)o==="display"&&(s=!0),bs(i,o,t[o])}else if(r){if(e!==t){const o=i[C0];o&&(t+=";"+o),i.cssText=t,s=P0.test(t)}}else e&&n.removeAttribute("style");jc in n&&(n[jc]=s?i.display:"",n[w0]&&(i.display="none"))}const Kc=/\s*!important$/;function bs(n,e,t){if(Be(t))t.forEach(i=>bs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=D0(n,e);Kc.test(t)?n.setProperty(rr(i),t.replace(Kc,""),"important"):n[i]=t}}const $c=["Webkit","Moz","ms"],Xo={};function D0(n,e){const t=Xo[e];if(t)return t;let i=hn(e);if(i!=="filter"&&i in n)return Xo[e]=i;i=qs(i);for(let r=0;r<$c.length;r++){const s=$c[r]+i;if(s in n)return Xo[e]=s}return e}const Zc="http://www.w3.org/1999/xlink";function U0(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Zc,e.slice(6,e.length)):n.setAttributeNS(Zc,e,t);else{const s=zv(e);t==null||s&&!tf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function I0(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=tf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function N0(n,e,t,i){n.addEventListener(e,t,i)}function O0(n,e,t,i){n.removeEventListener(e,t,i)}const Qc=Symbol("_vei");function F0(n,e,t,i,r=null){const s=n[Qc]||(n[Qc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=B0(e);if(i){const c=s[e]=G0(i,r);N0(n,a,c,l)}else o&&(O0(n,a,o,l),s[e]=void 0)}}const Jc=/(?:Once|Passive|Capture)$/;function B0(n){let e;if(Jc.test(n)){e={};let i;for(;i=n.match(Jc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rr(n.slice(2)),e]}let qo=0;const z0=Promise.resolve(),H0=()=>qo||(z0.then(()=>qo=0),qo=Date.now());function G0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rn(V0(i,t.value),e,5,[i])};return t.value=n,t.attached=H0(),t}function V0(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const eu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,k0=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?R0(n,i,c):e==="style"?L0(n,t,i):Vs(e)?Ca(e)||F0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W0(n,e,i,c))?I0(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),U0(n,e,i,c))};function W0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&eu(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return eu(e)&&mt(t)?!1:e in n}const X0=vt({patchProp:k0},T0);let tu;function q0(){return tu||(tu=n0(X0))}const Y0=(...n)=>{const e=q0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=K0(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,j0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function j0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function K0(n){return mt(n)?document.querySelector(n):n}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zi=typeof document<"u";function $0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Yo(n,e){const t={};for(const i in e){const r=e[i];t[i]=sn(r)?r.map(n):n(r)}return t}const Er=()=>{},sn=Array.isArray,jf=/#/g,Z0=/&/g,Q0=/\//g,J0=/=/g,eA=/\?/g,Kf=/\+/g,tA=/%5B/g,nA=/%5D/g,$f=/%5E/g,iA=/%60/g,Zf=/%7B/g,rA=/%7C/g,Qf=/%7D/g,sA=/%20/g;function ja(n){return encodeURI(""+n).replace(rA,"|").replace(tA,"[").replace(nA,"]")}function oA(n){return ja(n).replace(Zf,"{").replace(Qf,"}").replace($f,"^")}function va(n){return ja(n).replace(Kf,"%2B").replace(sA,"+").replace(jf,"%23").replace(Z0,"%26").replace(iA,"`").replace(Zf,"{").replace(Qf,"}").replace($f,"^")}function aA(n){return va(n).replace(J0,"%3D")}function lA(n){return ja(n).replace(jf,"%23").replace(eA,"%3F")}function cA(n){return n==null?"":lA(n).replace(Q0,"%2F")}function Ur(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const uA=/\/$/,fA=n=>n.replace(uA,"");function jo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=mA(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Ur(o)}}function hA(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function nu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function dA(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&er(e.matched[i],t.matched[r])&&Jf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function er(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Jf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!pA(n[t],e[t]))return!1;return!0}function pA(n,e){return sn(n)?iu(n,e):sn(e)?iu(e,n):n===e}function iu(n,e){return sn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function mA(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Ir;(function(n){n.pop="pop",n.push="push"})(Ir||(Ir={}));var yr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(yr||(yr={}));function gA(n){if(!n)if(zi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),fA(n)}const _A=/^[^#]+#/;function vA(n,e){return n.replace(_A,"#")+e}function xA(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ro=()=>({left:window.scrollX,top:window.scrollY});function AA(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=xA(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ru(n,e){return(history.state?history.state.position-e:-1)+n}const xa=new Map;function MA(n,e){xa.set(n,e)}function SA(n){const e=xa.get(n);return xa.delete(n),e}let EA=()=>location.protocol+"//"+location.host;function eh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),nu(l,"")}return nu(t,n)+i+r}function yA(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=eh(n,location),_=t.value,v=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===_){o=null;return}m=v?h.position-v.position:0}else i(p);r.forEach(d=>{d(t.value,_,{delta:m,type:Ir.pop,direction:m?m>0?yr.forward:yr.back:yr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState($e({},h.state,{scroll:ro()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function su(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?ro():null}}function TA(n){const{history:e,location:t}=window,i={value:eh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:EA()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=$e({},e.state,su(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=$e({},r.value,e.state,{forward:l,scroll:ro()});s(u.current,u,!0);const f=$e({},su(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function bA(n){n=gA(n);const e=TA(n),t=yA(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=$e({location:"",base:n,go:i,createHref:vA.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function RA(n){return typeof n=="string"||n&&typeof n=="object"}function th(n){return typeof n=="string"||typeof n=="symbol"}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nh=Symbol("");var ou;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ou||(ou={}));function tr(n,e){return $e(new Error,{type:n,[nh]:!0},e)}function An(n,e){return n instanceof Error&&nh in n&&(e==null||!!(n.type&e))}const au="[^/]+?",wA={sensitive:!1,strict:!1,start:!0,end:!0},CA=/[.+*?^${}()[\]/\\]/g;function PA(n,e){const t=$e({},wA,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(CA,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:v,optional:m,regexp:d}=h;s.push({name:_,repeatable:v,optional:m});const T=d||au;if(T!==au){p+=10;try{new RegExp(`(${T})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${T}): `+R.message)}}let x=v?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,p+=20,m&&(p+=-8),v&&(p+=-20),T===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,d=_ in c?c[_]:"";if(sn(d)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const T=sn(d)?d.join("/"):d;if(!T)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function LA(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DA(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=LA(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(lu(i))return 1;if(lu(r))return-1}return r.length-i.length}function lu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const UA={type:0,value:""},IA=/[a-zA-Z0-9_]/;function NA(n){if(!n)return[[]];if(n==="/")return[[UA]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:IA.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function OA(n,e,t){const i=PA(NA(n.path),t),r=$e(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function FA(n,e){const t=[],i=new Map;e=fu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,_=BA(u);_.aliasOf=h&&h.record;const v=fu(e,u),m=[_];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of x)m.push($e({},_,{components:h?h.record.components:_.components,path:R,aliasOf:h?h.record:_}))}let d,T;for(const x of m){const{path:R}=x;if(f&&R[0]!=="/"){const C=f.record.path,P=C[C.length-1]==="/"?"":"/";x.path=f.record.path+(R&&P+R)}if(d=OA(x,f,v),h?h.alias.push(d):(T=T||d,T!==d&&T.alias.push(d),p&&u.name&&!uu(d)&&o(u.name)),_.children){const C=_.children;for(let P=0;P<C.length;P++)s(C[P],d,h&&h.children[P])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return T?()=>{o(T)}:Er}function o(u){if(th(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&DA(u,t[f])>=0&&(u.record.path!==t[f].record.path||!ih(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!uu(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},_,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw tr(1,{location:u});v=h.record.name,p=$e(cu(f.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),u.params&&cu(u.params,h.keys.map(T=>T.name))),_=h.stringify(p)}else if(u.path!=null)_=u.path,h=t.find(T=>T.re.test(_)),h&&(p=h.parse(_),v=h.record.name);else{if(h=f.name?i.get(f.name):t.find(T=>T.re.test(f.path)),!h)throw tr(1,{location:u,currentLocation:f});v=h.record.name,p=$e({},f.params,u.params),_=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:v,path:_,params:p,matched:m,meta:HA(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function cu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function BA(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:zA(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function zA(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function uu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function HA(n){return n.reduce((e,t)=>$e(e,t.meta),{})}function fu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ih(n,e){return e.children.some(t=>t===n||ih(n,t))}function GA(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Kf," "),o=s.indexOf("="),a=Ur(o<0?s:s.slice(0,o)),l=o<0?null:Ur(s.slice(o+1));if(a in e){let c=e[a];sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function hu(n){let e="";for(let t in n){const i=n[t];if(t=aA(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(sn(i)?i.map(s=>s&&va(s)):[i&&va(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function VA(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=sn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const kA=Symbol(""),du=Symbol(""),Ka=Symbol(""),rh=Symbol(""),Aa=Symbol("");function hr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function zn(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(tr(4,{from:t,to:e})):h instanceof Error?l(h):RA(h)?l(tr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Ko(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(WA(l)){const u=(l.__vccOpts||l)[e];u&&s.push(zn(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=$0(u)?u.default:u;o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&zn(p,t,i,o,a,r)()}))}}return s}function WA(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function pu(n){const e=Tn(Ka),t=Tn(rh),i=Jt(()=>e.resolve(Yn(n.to))),r=Jt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(er.bind(null,u));if(h>-1)return h;const p=mu(l[c-2]);return c>1&&mu(u)===p&&f[f.length-1].path!==p?f.findIndex(er.bind(null,l[c-2])):h}),s=Jt(()=>r.value>-1&&jA(t.params,i.value.params)),o=Jt(()=>r.value>-1&&r.value===t.matched.length-1&&Jf(t.params,i.value.params));function a(l={}){return YA(l)?e[Yn(n.replace)?"replace":"push"](Yn(n.to)).catch(Er):Promise.resolve()}return{route:i,href:Jt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const XA=Qs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pu,setup(n,{slots:e}){const t=js(pu(n)),{options:i}=Tn(Ka),r=Jt(()=>({[gu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[gu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Yf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),qA=XA;function YA(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function jA(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!sn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function mu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const gu=(n,e,t)=>n??e??t,KA=Qs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Tn(Aa),r=Jt(()=>n.route||i.value),s=Tn(du,0),o=Jt(()=>{let c=Yn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Jt(()=>r.value.matched[o.value]);Es(du,Jt(()=>o.value+1)),Es(kA,a),Es(Aa,r);const l=cx();return Ms(()=>[l.value,a.value,n.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!er(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return _u(t.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Yf(h,$e({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return _u(t.default,{Component:m,route:c})||m}}});function _u(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const sh=KA;function $A(n){const e=FA(n.routes,n),t=n.parseQuery||GA,i=n.stringifyQuery||hu,r=n.history,s=hr(),o=hr(),a=hr(),l=ux(Nn);let c=Nn;zi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yo.bind(null,F=>""+F),f=Yo.bind(null,cA),h=Yo.bind(null,Ur);function p(F,ee){let ae,Se;return th(F)?(ae=e.getRecordMatcher(F),Se=ee):Se=F,e.addRoute(Se,ae)}function _(F){const ee=e.getRecordMatcher(F);ee&&e.removeRoute(ee)}function v(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function d(F,ee){if(ee=$e({},ee||l.value),typeof F=="string"){const y=jo(t,F,ee.path),U=e.resolve({path:y.path},ee),B=r.createHref(y.fullPath);return $e(y,U,{params:h(U.params),hash:Ur(y.hash),redirectedFrom:void 0,href:B})}let ae;if(F.path!=null)ae=$e({},F,{path:jo(t,F.path,ee.path).path});else{const y=$e({},F.params);for(const U in y)y[U]==null&&delete y[U];ae=$e({},F,{params:f(y)}),ee.params=f(ee.params)}const Se=e.resolve(ae,ee),ye=F.hash||"";Se.params=u(h(Se.params));const I=hA(i,$e({},F,{hash:oA(ye),path:Se.path})),S=r.createHref(I);return $e({fullPath:I,hash:ye,query:i===hu?VA(F.query):F.query||{}},Se,{redirectedFrom:void 0,href:S})}function T(F){return typeof F=="string"?jo(t,F,l.value.path):$e({},F)}function x(F,ee){if(c!==F)return tr(8,{from:ee,to:F})}function R(F){return L(F)}function C(F){return R($e(T(F),{replace:!0}))}function P(F){const ee=F.matched[F.matched.length-1];if(ee&&ee.redirect){const{redirect:ae}=ee;let Se=typeof ae=="function"?ae(F):ae;return typeof Se=="string"&&(Se=Se.includes("?")||Se.includes("#")?Se=T(Se):{path:Se},Se.params={}),$e({query:F.query,hash:F.hash,params:Se.path!=null?{}:F.params},Se)}}function L(F,ee){const ae=c=d(F),Se=l.value,ye=F.state,I=F.force,S=F.replace===!0,y=P(ae);if(y)return L($e(T(y),{state:typeof y=="object"?$e({},ye,y.state):ye,force:I,replace:S}),ee||ae);const U=ae;U.redirectedFrom=ee;let B;return!I&&dA(i,Se,ae)&&(B=tr(16,{to:U,from:Se}),O(Se,Se,!0,!1)),(B?Promise.resolve(B):b(U,Se)).catch(V=>An(V)?An(V,2)?V:le(V):ne(V,U,Se)).then(V=>{if(V){if(An(V,2))return L($e({replace:S},T(V.to),{state:typeof V.to=="object"?$e({},ye,V.to.state):ye,force:I}),ee||U)}else V=de(U,Se,!0,S,ye);return Z(U,Se,V),V})}function $(F,ee){const ae=x(F,ee);return ae?Promise.reject(ae):Promise.resolve()}function M(F){const ee=Me.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(F):F()}function b(F,ee){let ae;const[Se,ye,I]=ZA(F,ee);ae=Ko(Se.reverse(),"beforeRouteLeave",F,ee);for(const y of Se)y.leaveGuards.forEach(U=>{ae.push(zn(U,F,ee))});const S=$.bind(null,F,ee);return ae.push(S),Re(ae).then(()=>{ae=[];for(const y of s.list())ae.push(zn(y,F,ee));return ae.push(S),Re(ae)}).then(()=>{ae=Ko(ye,"beforeRouteUpdate",F,ee);for(const y of ye)y.updateGuards.forEach(U=>{ae.push(zn(U,F,ee))});return ae.push(S),Re(ae)}).then(()=>{ae=[];for(const y of I)if(y.beforeEnter)if(sn(y.beforeEnter))for(const U of y.beforeEnter)ae.push(zn(U,F,ee));else ae.push(zn(y.beforeEnter,F,ee));return ae.push(S),Re(ae)}).then(()=>(F.matched.forEach(y=>y.enterCallbacks={}),ae=Ko(I,"beforeRouteEnter",F,ee,M),ae.push(S),Re(ae))).then(()=>{ae=[];for(const y of o.list())ae.push(zn(y,F,ee));return ae.push(S),Re(ae)}).catch(y=>An(y,8)?y:Promise.reject(y))}function Z(F,ee,ae){a.list().forEach(Se=>M(()=>Se(F,ee,ae)))}function de(F,ee,ae,Se,ye){const I=x(F,ee);if(I)return I;const S=ee===Nn,y=zi?history.state:{};ae&&(Se||S?r.replace(F.fullPath,$e({scroll:S&&y&&y.scroll},ye)):r.push(F.fullPath,ye)),l.value=F,O(F,ee,ae,S),le()}let he;function N(){he||(he=r.listen((F,ee,ae)=>{if(!Te.listening)return;const Se=d(F),ye=P(Se);if(ye){L($e(ye,{replace:!0}),Se).catch(Er);return}c=Se;const I=l.value;zi&&MA(ru(I.fullPath,ae.delta),ro()),b(Se,I).catch(S=>An(S,12)?S:An(S,2)?(L(S.to,Se).then(y=>{An(y,20)&&!ae.delta&&ae.type===Ir.pop&&r.go(-1,!1)}).catch(Er),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),ne(S,Se,I))).then(S=>{S=S||de(Se,I,!1),S&&(ae.delta&&!An(S,8)?r.go(-ae.delta,!1):ae.type===Ir.pop&&An(S,20)&&r.go(-1,!1)),Z(Se,I,S)}).catch(Er)}))}let q=hr(),te=hr(),G;function ne(F,ee,ae){le(F);const Se=te.list();return Se.length?Se.forEach(ye=>ye(F,ee,ae)):console.error(F),Promise.reject(F)}function J(){return G&&l.value!==Nn?Promise.resolve():new Promise((F,ee)=>{q.add([F,ee])})}function le(F){return G||(G=!F,N(),q.list().forEach(([ee,ae])=>F?ae(F):ee()),q.reset()),F}function O(F,ee,ae,Se){const{scrollBehavior:ye}=n;if(!zi||!ye)return Promise.resolve();const I=!ae&&SA(ru(F.fullPath,0))||(Se||!ae)&&history.state&&history.state.scroll||null;return Ef().then(()=>ye(F,ee,I)).then(S=>S&&AA(S)).catch(S=>ne(S,F,ee))}const Y=F=>r.go(F);let xe;const Me=new Set,Te={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:m,getRoutes:v,resolve:d,options:n,push:R,replace:C,go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:J,install(F){const ee=this;F.component("RouterLink",qA),F.component("RouterView",sh),F.config.globalProperties.$router=ee,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(l)}),zi&&!xe&&l.value===Nn&&(xe=!0,R(r.location).catch(ye=>{}));const ae={};for(const ye in Nn)Object.defineProperty(ae,ye,{get:()=>l.value[ye],enumerable:!0});F.provide(Ka,ee),F.provide(rh,pf(ae)),F.provide(Aa,l);const Se=F.unmount;Me.add(F),F.unmount=function(){Me.delete(F),Me.size<1&&(c=Nn,he&&he(),he=null,l.value=Nn,xe=!1,G=!1),Se()}}};function Re(F){return F.reduce((ee,ae)=>ee.then(()=>M(ae)),Promise.resolve())}return Te}function ZA(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>er(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>er(c,l))||r.push(l))}return[t,i,r]}const QA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEvUExURUdwTAB6tQB7tQB6tAB6tQB6tAB6tQBioAB6swB6twB6tAB6tQB4tAB5sgB4tQB6tQB6tAB6tAB8tQB6tgB6tQB6tQB7tQB6tABttgB6tQB6tQB/qgB7tQB5sAB6tQB7swB7tQB7sgB7tQB5tQB7tQB7tf///wJ9tv7+//T5/AZ/txGEuvb6/B6LvqrT5/D3+8rk8Pv9/oO/2xmIvQ6Dufj8/Vipz7HX6dzt9SWOwOfz+GKu0o/G39Ho8jiZxrja6+Ty92201YzD3ojC3dfq8z2bxzSWxVOmzc7m8ZLH39ns9Gex067W6Lvc7AmAuCqRwez2+ni62L7e7C6Tw0mhyt/u9hOFu8Pg7nC11qHO5E6jzIXA3Gqy1HW410OeyF6s0ejz+JjK4T+cx5XI4H+92n8HEBUAAAAldFJOUwCE5CSPVq0C8xDGzvbs/Yrc2Bo3dGntXAe3ZAaoFYHVdvr2O7DznZYEAAALC0lEQVR42u3dB18U1xrA4QHEFbHEmuhNTG4SZum9FwFpCioo1lhi+/6f4WLaTQwou7OwM/M+/w+w8+Och512diZJDui79hvfdrZe/W+XCt25M62dP7e0X0xqqXLpxPeGrlx9deKnyiGnv+OHC8arlAZ+6DjE9H/XcspQlbVT579EoHL9rGEqc2evfHZH0HbaEJW9020Hz3+7b/8Anfn6oK//EwYnRif23Q3851sjE6WT3+wz/9eMS5yu/UtAxf9/rO+AT/cC9v/RjgM+Of43ItH6x7lAm/O/cJ362/WAius/ATv9/8OA60YjYlf+uv/j+n/Irv55Z6jFWMSs5Y/7/44Aox4H/v4VcNlIRO3yb6cA1v+E7auPJwKXjEPcLrkIHLuPF4St/w3chST5zihE7qLbQLFrT24YhMi1JBaChO5k0mkQIteZtBqEyLUmVw1C5H5M/P47dOcSYxA7AAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAGgcgEYmFyZWpid6O6emF2YejE5YGoCAaiu3ZlOP2n6zlrV9IQA0Pfgcbpv0w/6TFDpATxZ6U8PrGcFgXIDqD4bSj/bzrIdQYkBbA+nX2x4xiyVFcDcRHqI+n81TaUEUH2fHrI7dgMlBNA7lR66qV4zVTYAvffSGlokoGQAqlNpTd21FygXgPdpjc2bqzIBmEtrzrlAiQBsT9QOoN/1gNIAqA6ndTTsMKAsAJ6ldfXSdJUDwJOh+gDsuDNUDgAraZ29MF9lANDXXy+AHl8BZQDwIK27Vyas+ACqj+sHMO1EoPgA1tIM3TRjhQdwJwsAF4SLD2A6C4BNM1Z0AANppsZMWcEBTGYDsGHKCg5gJRuAUVNWcABT2QDcNWUFB7CQDcBtU1ZwALPZACyZsoIDmMgGoN+UFRxAdzYA3aYMANkFyEGgnAYq3oWgQVNWcAAvXAqODcDNoOAA3A4ODiDbgpBVM1Z4AJmWhN0yY4UHYFFocADVDPsASwJLAMAPQ6ID6Oupd/6Hxk1YCQDUvyzQVaByAOjb8fPw0AC6lusDsGW6SgKgvkfEPPXL0LIA6Jqp4xEBPR4SVR4AXb/WDmDSZJUIQO0XhF0ELheAWh8VO+gAoFwAunoXPSw6NICu3rs1/P+b//IB6KrOH3r/7/u/jAD2zgUOdTbY4/i/rAC6Zg5xReip8//yAuiqvvzCfYGdLV//ZQbQ1dX34jN3h4dG3f8pO4A9Aq8OWCO0+cr9/wgA9nYEN+c3/7X+95b1f2EAfGxsY/Tu7aX+7u7+pduDoxvW/0cDIAAEgAAQAAJAAAgAASAABIAAEAACQAAIABUXQJqxZn/+71XHbm4sj74dXBxeffxmaGJiJO2eGNpZenz73uD7Dy8fzfQCUFYAvetztxanR770Xoulh/O/blcBKBeAscm3CyM1fFb/09F3vQCUA0D19fxqXa84WVweA6DwAG6+3an/I7sfbj0BoMAA7r9czfqpE8/XASgogL4PO2kjGp4EoIAAep81Zvo/trABQNEArK2mjWz4HQBFAtB7qzttcM+fAFAYAGPDaePbmQOgIADWZ9MjaXAcgCIAWBtKj6jHNwHIP4CbPemRNTIHQN4BzOykR9kLAPINYHw1Pdpy8+RDAPb9/OfpUXe3CkB+AWykR19Onn4MwD6fPz6bHocAAPIKYCU9llYAyCeAsf7jAZDOAZBLAPPHNP/pyBoAOQQw3nNcANKlJwDkD8ByenxNAZA/AAvHCCBdBiBvAHaPc/7T/hkAcgZg9FgBpIsA5AzAwvECaPb7EAH4pIFjnv/0zTgAeQIwd9wA0lEA8gTg+bED6BkDIEcAlo4dQPoWgBwBaEIjAwCEBpDOAxAbQE8fAKEBpB8AiA1gqQpAaADpLwDEBrAIQGwA3QMAhAaQPgAgNoAFAGIDSLcBiA1gFIDYAFYBiA0gHQAgNoBlAGIDWAQgNoCJ+wCEBpC+BiA2gFEAYgN4CkBsAM05CAAgP60BEBvAMwBiAxgEIDaAxwDEBpA+ASA2gNcAxAbwDIDYAJ4DEBvAMACxAfQDEBtAOgZATgG8Wby19Wh3YLy3Wu0dH1h/9HL+3lG8UuQ1ADkE0DM4t+96ve3lxYkGb2oLgNwBeDj5mZt0fVu3G7qxWwDkC0D34O6XtvfuYQO3NwVArgAMH+qd74+mG7bBBQByBGDk1SEf23B/vlGvGB4CID8AZmt4v+cvjXrL6DgAeQGwWdMvdXYb9JqpbQByAmCzxmsyM40R8AiAfACYrfmXersN2QvMAZALACN1vN/7l0Zs+AEAuQBQ1zw04mVjdwDIA4Dhuh7bd38z+5YHAcgBgO71+v60R9k3/RSAHACo+98w+1XhTQByAGC33r/tXeZN7wDQfAAP6//jhjOffgDQfAAZXuO1lXnjfQA0G0BPhh/pjmdeITIDQLMBZDoTW8y69XUAmg0g09XYzC+efg1AswFkel7fdtatbwDQZABvsv15Q838/gGgAZ+f8XF9Wa8FPQOgyQAyLsy9k3HzHwBoMoCMS/OzHgWuANBkABnX5GRdFfAegCYD2M32561n3PxzAJoMIONT2weKtiAAgE/KuDC7L+PmpwBoMoDebH9eb8bN3wOgyQAyvsS1WrQlQQDU+PlHvP1hAGIDWAAgNoBVAGIDmAYgNoAlAGIDmAUgNoAdAGIDGAIgNoAeAGID6AcgNoAJAGIDGAEAAAAAACAqgG4AYgNIAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAHAJQvgIAAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAA2h/AOWMQuXPJGYMQuTNJq0GIXGvSaRAi15n8bBAidzJpMQiRa0naDULk2pOLBiFyF5PkK6MQt++TJDlhGOJ2fg/AT4Yhbpf2AFTsA8J2obIHIPnBQETt8sf5TzpOGYmYner4DUBy3lDE7Mbv8590nDUWETv7xxdAklwxGBG7/uf8J5XTRiNepyt/AUjaLAuJdwTYlvytrw1ItNqTf+SCcLDO/3P+k8pJYxKpbyufAEi+uWZU4nTtP8m/+sZ3QJz//33mf28v4Dggyv6/kuzf1+4KRDj/a08OrM0VodJ3ui35TJUrVw1RmTt7vZJ8vo4W+4Hyfvvf6Ei+XMdla4RK2YXLh5n+33YEl05cMF7l6vvzlypJLV1sbznZ2fqjX48XvHNnWjtPtrRfPGie/wdyEH1MW74dRgAAAABJRU5ErkJggg==",JA=""+new URL("github-6251e535.png",import.meta.url).href,eM=""+new URL("gitlab-bb401a43.png",import.meta.url).href,tM=""+new URL("profile-d8824846.png",import.meta.url).href,nM=""+new URL("CV-Blanchet-Mathieu-bd41be84.pdf",import.meta.url).href,iM={id:"rubrique"},rM=dt("div",null,[dt("h1",{class:"title"},"Portfolio")],-1),sM={class:"logo"},oM=f0('<a target="_blank" href="https://fr.linkedin.com/in/mathieu-blanchet-5766b3230"><img id="logoLink" src="'+QA+'" alt="linkedin"></a><a target="_blank" href="https://github.com/BlMathieu/"><img id="logoGitH" src="'+JA+'" alt="github"></a><a target="_blank" href="https://gitlabinfo.iutmontp.univ-montp2.fr/blanchetm"><img id="logoGitL" src="'+eM+'" alt="gitlab"></a>',3),aM=["href"],lM=dt("img",{id:"logoCV",src:tM,alt:"CV"},null,-1),cM=[lM],uM=Qs({__name:"NavigatorComponent",setup(n){return(e,t)=>{const i=Ex("RouterLink");return to(),Xa("nav",iM,[rM,dt("div",null,[dt("div",null,[ct(i,{class:"choix",to:{name:"accueil"}},{default:pr(()=>[gr("Accueil")]),_:1})]),dt("div",null,[ct(i,{class:"choix",to:{name:"informations"}},{default:pr(()=>[gr("Informations")]),_:1})]),dt("div",null,[ct(i,{class:"choix",to:{name:"projets"}},{default:pr(()=>[gr("Projets")]),_:1})]),dt("div",null,[ct(i,{class:"choix",to:{name:"contact"}},{default:pr(()=>[gr("Contact")]),_:1})])]),dt("div",sM,[oM,dt("a",{target:"_blank",href:Yn(nM)},cM,8,aM)])])}}});const fM=Qs({__name:"App",setup(n){return(e,t)=>(to(),Xa(cn,null,[dt("header",null,[ct(uM)]),dt("main",null,[ct(Yn(sh))])],64))}});const hM="modulepreload",dM=function(n,e){return new URL(n,e).href},vu={},bt=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=dM(s,i),s in vu)return;vu[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":hM,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},pM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},mM={},gM=dt("div",{class:"Presentation"},[dt("p",null,"Blanchet Mathieu"),dt("p",null,"Etudiant en 3eme année de BUT informatique"),dt("hr")],-1),_M=[gM];function vM(n,e){return to(),Xa("section",null,_M)}const xM=pM(mM,[["render",vM]]),AM=$A({history:bA("./"),routes:[{path:"/portfolio-blanchetm",name:"accueil",component:xM},{path:"/portfolio-blanchetm/contact",name:"contact",component:()=>bt(()=>import("./ContactView-3dcc5490.js"),["./ContactView-3dcc5490.js","./ContactView-56c8a754.css"],import.meta.url)},{path:"/portfolio-blanchetm/informations",name:"informations",component:()=>bt(()=>import("./InformationView-336e2a41.js"),["./InformationView-336e2a41.js","./JavaFX-66aeb7d9.js","./cssLogo-9f7e8903.js","./JavaScript-d0a12f02.js","./Docker-a3b62ffe.js","./PHP-18a35fff.js","./sql-c404065f.js","./arrowleft-1bbbf34d.js","./InformationView-446c83cf.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets",name:"projets",component:()=>bt(()=>import("./ProjetsView-5e137c51.js"),["./ProjetsView-5e137c51.js","./sfml-logo-f5d668ab.js","./ProjetsView-d04b41b2.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/AventurierDuRail",name:"AventurierDuRail",component:()=>bt(()=>import("./AventurierDuRail-5e268a08.js"),["./AventurierDuRail-5e268a08.js","./JavaFX-66aeb7d9.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/CasseBrique",name:"CasseBrique",component:()=>bt(()=>import("./CasseBrique-f3e2f8b9.js"),["./CasseBrique-f3e2f8b9.js","./JavaFX-66aeb7d9.js","./oracle-6e8590c6.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./CasseBrique-feb2edea.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/Ecommerce",name:"Ecommerce",component:()=>bt(()=>import("./EcommerceView-12915163.js"),["./EcommerceView-12915163.js","./sql-c404065f.js","./PHP-18a35fff.js","./cssLogo-9f7e8903.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/DataDiag",name:"DataDiag",component:()=>bt(()=>import("./DataDiag-96fa348d.js"),["./DataDiag-96fa348d.js","./cssLogo-9f7e8903.js","./JavaScript-d0a12f02.js","./PHP-18a35fff.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/Visualisation",name:"Visualisation",component:()=>bt(()=>import("./VisualisationView-84dea49e.js"),["./VisualisationView-84dea49e.js","./Docker-a3b62ffe.js","./JavaScript-d0a12f02.js","./cssLogo-9f7e8903.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./VisualisationView-7b6f846b.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/KeyGuard",name:"KeyGuard",component:()=>bt(()=>import("./KeyGuard-1c509222.js"),["./KeyGuard-1c509222.js","./JavaFX-66aeb7d9.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./CasseBrique-feb2edea.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/SFML",name:"SFML",component:()=>bt(()=>import("./SFML-f39a5101.js"),["./SFML-f39a5101.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./VisualisationView-7b6f846b.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/Prehispong",name:"Pong",component:()=>bt(()=>import("./PongProject-0b495a0b.js"),["./PongProject-0b495a0b.js","./JavaFX-66aeb7d9.js","./oracle-6e8590c6.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/Space",name:"Space",component:()=>bt(()=>import("./SpaceInvader-4acc0afe.js"),["./SpaceInvader-4acc0afe.js","./SpaceInvader-02c3a90c.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/Mediatheque",name:"Mediatheque",component:()=>bt(()=>import("./ProjectMediatheque-4d4b53fc.js"),["./ProjectMediatheque-4d4b53fc.js","./cssLogo-9f7e8903.js","./JavaScript-d0a12f02.js","./PHP-18a35fff.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/CG-Games",name:"CG-Games",component:()=>bt(()=>import("./CG-Games-9d3d5386.js"),["./CG-Games-9d3d5386.js","./JavaFX-66aeb7d9.js","./oracle-6e8590c6.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css"],import.meta.url)},{path:"/portfolio-blanchetm/projets/MyAvatar",name:"MyAvatar",component:()=>bt(()=>import("./MyAvatar-29b0a8c7.js"),["./MyAvatar-29b0a8c7.js","./PHP-18a35fff.js","./JavaScript-d0a12f02.js","./cssLogo-9f7e8903.js","./sql-c404065f.js","./ImageSwitch.vue_vue_type_style_index_0_lang-f4ce162b.js","./sfml-logo-f5d668ab.js","./arrowleft-1bbbf34d.js","./ImageSwitch-6e4377f9.css","./VisualisationView-7b6f846b.css"],import.meta.url)}]}),oh=Y0(fM);oh.use(AM);oh.mount("#app");export{cn as F,pM as _,f0 as a,yM as b,Xa as c,Qs as d,dt as e,ct as f,Ex as g,EM as h,MM as i,SM as j,gr as k,Nx as l,to as o,nM as p,cx as r,Yn as u,pr as w};
