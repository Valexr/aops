var Ot="@valexr/aops";var Ct="0.2.0";var Rt={type:"git",url:"https://github.com/Valexr/aops.git"};function B(){}function vt(t){return t()}function _t(){return Object.create(null)}function Q(t){t.forEach(vt)}function U(t){return typeof t=="function"}var dt;function wt(t,e){return t===e?!0:(dt||(dt=document.createElement("a")),dt.href=e,t===dt.href)}function At(t,e){return t!=t?e==e:t!==e}function Pt(t){return Object.keys(t).length===0}function R(t){return t&&U(t.destroy)?t.destroy:B}var Qt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var ht=class t{_listeners="WeakMap"in Qt?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(e=>{for(let n of e)t.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};ht.entries="WeakMap"in Qt?new WeakMap:void 0;var Vt=!1;function It(){Vt=!0}function Ht(){Vt=!1}function f(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function E(){return A(" ")}function Z(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return t===""?null:+t}function Wt(t){return Array.from(t.childNodes)}function Ut(t,e){e=""+e,t.data!==e&&(t.data=e)}function rt(t,e){t.value=e??""}function qt(t){let e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}var X;function N(t){X=t}var P=[];var Gt=[],K=[],Jt=[],me=Promise.resolve(),Bt=!1;function Zt(){Bt||(Bt=!0,me.then(xt))}function it(t){K.push(t)}var Et=new Set,Y=0;function xt(){if(Y!==0)return;let t=X;do{try{for(;Y<P.length;){let e=P[Y];Y++,N(e),xe(e.$$)}}catch(e){throw P.length=0,Y=0,e}for(N(null),P.length=0,Y=0;Gt.length;)Gt.pop()();for(let e=0;e<K.length;e+=1){let n=K[e];Et.has(n)||(Et.add(n),n())}K.length=0}while(P.length);for(;Jt.length;)Jt.pop()();Bt=!1,Et.clear(),N(t)}function xe(t){if(t.fragment!==null){t.update(),Q(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}function Xt(t){let e=[],n=[];K.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),K=e}var ge=new Set;function gt(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function j(t){return t?.length!==void 0?t:Array.from(t)}var be=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],ye=new Set([...be]);function ve(t,e,n){let{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),it(()=>{let l=t.$$.on_mount.map(vt).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...l):Q(l),t.$$.on_mount=[]}),o.forEach(it)}function we(t,e){let n=t.$$;n.fragment!==null&&(Xt(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qe(t,e){t.$$.dirty[0]===-1&&(P.push(t),Zt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,r,o,l,a=null,p=[-1]){let _=X;N(t);let d=t.$$={fragment:null,ctx:[],props:l,update:B,not_equal:o,bound:_t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:_t(),dirty:p,skip_bound:!1,root:e.target||_.$$.root};a&&a(d.root);let L=!1;if(d.ctx=n?n(t,e.props||{},(u,v,...O)=>{let S=O.length?O[0]:v;return d.ctx&&o(d.ctx[u],d.ctx[u]=S)&&(!d.skip_bound&&d.bound[u]&&d.bound[u](S),L&&Qe(t,u)),v}):[],d.update(),L=!0,Q(d.before_update),d.fragment=r?r(d.ctx):!1,e.target){if(e.hydrate){It();let u=Wt(e.target);d.fragment&&d.fragment.l(u),u.forEach(b)}else d.fragment&&d.fragment.c();e.intro&&gt(t.$$.fragment),ve(t,e.target,e.anchor),Ht(),xt()}N(_)}var Ue;typeof HTMLElement=="function"&&(Ue=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){let r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){let r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let l;return{c:function(){l=h("slot"),o!=="default"&&c(l,"name",o)},m:function(_,d){$(_,l,d)},d:function(_){_&&b(l)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let e={},n=qt(this);for(let o of this.$$s)o in n&&(e[o]=[t(o)]);for(let o of this.attributes){let l=this.$$g_p(o.name);l in this.$$d||(this.$$d[l]=Lt(l,o.value,this.$$p_d,"toProp"))}for(let o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});let r=()=>{this.$$r=!0;for(let o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){let l=Lt(o,this.$$d[o],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,l)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(let o in this.$$l)for(let l of this.$$l[o]){let a=this.$$c.$on(o,l);this.$$l_u.set(l,a)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=Lt(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function Lt(t,e,n,r){let o=n[t]?.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}var st=class{$$=void 0;$$set=void 0;$destroy(){we(this,1),this.$destroy=B}$on(e,n){if(!U(n))return B;let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var Kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Kt);function te(t,e,n){return Math.min(n,Math.max(t,e))}var St=new Set;function V(t,e){let n=e?.root||window;St.add(t),r(e);function r(l){n=l?.root||window,n.addEventListener("scroll",o)}function o(){let{innerHeight:l,innerWidth:a,offsetHeight:p,offsetWidth:_,scrollY:d,scrollTop:L}=n;for(let[u,v]of St.entries()){let{offsetTop:O,offsetLeft:S,offsetHeight:lt,offsetWidth:w}=v,{offsetTop:ct}=v.offsetParent,I=Math.max(O,ct),tt=1-(e?.anchor||0),H=e?.offset||0,T=(l||p)*tt,W=(a||_)-S,ut=lt*tt,y=w*H,at=(d||L)-(I-T+ut),C=te(y,at,W-(H?y:w));v.dispatchEvent(new CustomEvent("scroll",{detail:C})),v.dataset.aops=C>y?"v":"h"}}return{update:r,destroy(){St.delete(t),n.removeEventListener("scroll",o)}}}function ee(t,e,n){let r=t.slice();return r[8]=e[n],r}function ne(t,e,n){let r=t.slice();return r[11]=e[n],r[13]=n,r}function oe(t,e,n){let r=t.slice();return r[14]=e[n],r}function re(t){let e,n,r,o,l,a;return{c(){e=h("li"),c(e,"id",n=t[14]),c(e,"data-aops-anim",r=t[14]),c(e,"class","svelte-10fpnwj")},m(p,_){$(p,e,_),l||(a=R(o=V.call(null,e,t[3])),l=!0)},p(p,_){o&&U(o.update)&&_&8&&o.update.call(null,p[3])},d(p){p&&b(e),l=!1,a()}}}function ie(t){let e,n,r,o,l;return{c(){e=h("section"),n=h("div"),c(n,"class","svelte-10fpnwj"),c(e,"class","fixed svelte-10fpnwj")},m(a,p){$(a,e,p),f(e,n),o||(l=[R(r=V.call(null,n,t[3])),Z(n,"scroll",le)],o=!0)},p(a,p){r&&U(r.update)&&p&8&&r.update.call(null,a[3])},d(a){a&&b(e),o=!1,Q(l)}}}function se(t){let e,n,r,o,l,a;return{c(){e=h("div"),c(e,"id",n=t[8]),c(e,"data-aops-anim",r=t[8]),c(e,"class","svelte-10fpnwj")},m(p,_){$(p,e,_),l||(a=R(o=V.call(null,e,t[3])),l=!0)},p(p,_){o&&U(o.update)&&_&8&&o.update.call(null,p[3])},d(p){p&&b(e),l=!1,a()}}}function Ee(t){let e,n,r,o,l,a,p,_,d,L,u,v,O,S,lt,w,ct,I,tt,H,T,W,ut,y,at,C,kt,Ft,ft,bt,pt,q,et,Nt,D,jt,nt,Tt,k,yt,Mt;document.title=e=t[0];let z=j(t[4]),x=[];for(let i=0;i<z.length;i+=1)x[i]=re(oe(t,z,i));let G=j({length:3}),g=[];for(let i=0;i<G.length;i+=1)g[i]=ie(ne(t,G,i));let J=j(t[5]),F=[];for(let i=0;i<J.length;i+=1)F[i]=se(ee(t,J,i));return{c(){n=E(),r=h("header"),o=h("h1"),l=h("a"),a=A(t[0]),p=A("@"),_=A(t[2]),L=E(),u=h("main"),v=h("section"),v.innerHTML="<h2>Scroll<br/>\u2193</h2>",O=E(),S=h("ul");for(let i=0;i<x.length;i+=1)x[i].c();lt=E(),w=h("img"),tt=E();for(let i=0;i<g.length;i+=1)g[i].c();H=E(),T=h("div"),ut=E(),y=h("img"),kt=E();for(let i=0;i<F.length;i+=1)F[i].c();Ft=E(),ft=h("section"),ft.innerHTML="<h2>\u2191<br/>Scroll</h2>",bt=E(),pt=h("footer"),q=h("form"),et=h("label"),Nt=A(`Anchor
            `),D=h("input"),jt=E(),nt=h("label"),Tt=A(`Offset
            `),k=h("input"),c(l,"href",d=t[1].url),c(v,"class","svelte-10fpnwj"),c(S,"class","svelte-10fpnwj"),c(w,"width","500"),c(w,"data-aops-anim","zoom-in"),c(w,"alt","big"),wt(w.src,ct="https://images.unsplash.com/photo-1542614228-14dcbfac0b2a?w=1200")||c(w,"src",ct),c(w,"class","svelte-10fpnwj"),c(T,"id","test"),c(T,"class","svelte-10fpnwj"),c(y,"width","500"),c(y,"data-aops-anim","zoom-out"),c(y,"alt","big"),wt(y.src,at="https://images.unsplash.com/photo-1547433171-98eb433cc6ff?w=1072")||c(y,"src",at),c(y,"class","svelte-10fpnwj"),c(ft,"class","svelte-10fpnwj"),c(D,"type","number"),c(D,"min","0"),c(D,"max","1"),c(D,"step","0.01"),c(et,"for",""),c(k,"type","number"),c(k,"min","-1"),c(k,"max","0"),c(k,"step","0.01"),c(nt,"for",""),c(q,"action","")},m(i,m){$(i,n,m),$(i,r,m),f(r,o),f(o,l),f(l,a),f(l,p),f(l,_),$(i,L,m),$(i,u,m),f(u,v),f(u,O),f(u,S);for(let s=0;s<x.length;s+=1)x[s]&&x[s].m(S,null);f(u,lt),f(u,w),f(u,tt);for(let s=0;s<g.length;s+=1)g[s]&&g[s].m(u,null);f(u,H),f(u,T),f(u,ut),f(u,y),f(u,kt);for(let s=0;s<F.length;s+=1)F[s]&&F[s].m(u,null);f(u,Ft),f(u,ft),$(i,bt,m),$(i,pt,m),f(pt,q),f(q,et),f(et,Nt),f(et,D),rt(D,t[3].anchor),f(q,jt),f(q,nt),f(nt,Tt),f(nt,k),rt(k,t[3].offset),yt||(Mt=[R(I=V.call(null,w,t[3])),R(W=V.call(null,T,t[3])),Z(T,"scroll",le),R(C=V.call(null,y,t[3])),Z(D,"input",t[6]),Z(k,"input",t[7])],yt=!0)},p(i,[m]){if(m&1&&e!==(e=i[0])&&(document.title=e),m&1&&Ut(a,i[0]),m&4&&Ut(_,i[2]),m&2&&d!==(d=i[1].url)&&c(l,"href",d),m&24){z=j(i[4]);let s;for(s=0;s<z.length;s+=1){let M=oe(i,z,s);x[s]?x[s].p(M,m):(x[s]=re(M),x[s].c(),x[s].m(S,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=z.length}if(I&&U(I.update)&&m&8&&I.update.call(null,i[3]),m&8){G=j({length:3});let s;for(s=0;s<G.length;s+=1){let M=ne(i,G,s);g[s]?g[s].p(M,m):(g[s]=ie(M),g[s].c(),g[s].m(u,H))}for(;s<g.length;s+=1)g[s].d(1);g.length=G.length}if(W&&U(W.update)&&m&8&&W.update.call(null,i[3]),C&&U(C.update)&&m&8&&C.update.call(null,i[3]),m&40){J=j(i[5]);let s;for(s=0;s<J.length;s+=1){let M=ee(i,J,s);F[s]?F[s].p(M,m):(F[s]=se(M),F[s].c(),F[s].m(u,Ft))}for(;s<F.length;s+=1)F[s].d(1);F.length=J.length}m&8&&ot(D.value)!==i[3].anchor&&rt(D,i[3].anchor),m&8&&ot(k.value)!==i[3].offset&&rt(k,i[3].offset)},i:B,o:B,d(i){i&&(b(n),b(r),b(L),b(u),b(bt),b(pt)),mt(x,i),mt(g,i),mt(F,i),yt=!1,Q(Mt)}}}function le(t){t.target&&(t.target.dataset.pos=String(t.detail.toFixed(0)),t.target.style.transform=`translate(${t.detail}px)`)}function Be(t,e,n){let{name:r}=e,{repository:o}=e,{version:l}=e,a={anchor:0,offset:0},p=["fade-up","fade-down","fade-right","fade-left","fade-up-right","fade-up-left","fade-down-right","fade-down-left"],_=["slide-up","slide-down","slide-right","slide-left"];function d(){a.anchor=ot(this.value),n(3,a)}function L(){a.offset=ot(this.value),n(3,a)}return t.$$set=u=>{"name"in u&&n(0,r=u.name),"repository"in u&&n(1,o=u.repository),"version"in u&&n(2,l=u.version)},[r,o,l,a,p,_,d,L]}var Dt=class extends st{constructor(e){super(),Yt(this,e,Be,Ee,At,{name:0,repository:1,version:2})}},ce=Dt;var Eo=new ce({target:document.body,props:{name:Ot,repository:Rt,version:Ct}});export{Eo as default};
