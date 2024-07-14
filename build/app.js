var At="@valexr/aops";var Pt="0.2.1";var Vt={type:"git",url:"https://github.com/Valexr/aops.git"};function E(){}function Qt(t){return t()}function ht(){return Object.create(null)}function Q(t){t.forEach(Qt)}function U(t){return typeof t=="function"}var _t;function Ut(t,e){return t===e?!0:(_t||(_t=document.createElement("a")),_t.href=e,t===_t.href)}function It(t,e){return t!=t?e==e:t!==e}function Ht(t){return Object.keys(t).length===0}function C(t){return t&&U(t.destroy)?t.destroy:E}var Et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var mt=class t{_listeners="WeakMap"in Et?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(e=>{for(let n of e)t.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};mt.entries="WeakMap"in Et?new WeakMap:void 0;var Wt=!1;function qt(){Wt=!0}function zt(){Wt=!1}function a(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function $(){return V(" ")}function J(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return t===""?null:+t}function Gt(t){return Array.from(t.childNodes)}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function it(t,e){t.value=e??""}function Jt(t){let e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}var Z;function j(t){Z=t}var I=[];var Xt=[],Y=[],Yt=[],Fe=Promise.resolve(),St=!1;function Kt(){St||(St=!0,Fe.then(gt))}function st(t){Y.push(t)}var Lt=new Set,X=0;function gt(){if(X!==0)return;let t=Z;do{try{for(;X<I.length;){let e=I[X];X++,j(e),be(e.$$)}}catch(e){throw I.length=0,X=0,e}for(j(null),I.length=0,X=0;Xt.length;)Xt.pop()();for(let e=0;e<Y.length;e+=1){let n=Y[e];Lt.has(n)||(Lt.add(n),n())}Y.length=0}while(I.length);for(;Yt.length;)Yt.pop()();St=!1,Lt.clear(),j(t)}function be(t){if(t.fragment!==null){t.update(),Q(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}function te(t){let e=[],n=[];Y.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Y=e}var ye=new Set;function Ft(t,e){t&&t.i&&(ye.delete(t),t.i(e))}function M(t){return t?.length!==void 0?t:Array.from(t)}var ve=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],we=new Set([...ve]);function Ue(t,e,n){let{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),st(()=>{let l=t.$$.on_mount.map(Qt).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...l):Q(l),t.$$.on_mount=[]}),o.forEach(st)}function Ee(t,e){let n=t.$$;n.fragment!==null&&(te(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(t,e){t.$$.dirty[0]===-1&&(I.push(t),Kt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ee(t,e,n,r,o,l,f=null,p=[-1]){let _=Z;j(t);let d=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:o,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:ht(),dirty:p,skip_bound:!1,root:e.target||_.$$.root};f&&f(d.root);let B=!1;if(d.ctx=n?n(t,e.props||{},(u,v,...A)=>{let L=A.length?A[0]:v;return d.ctx&&o(d.ctx[u],d.ctx[u]=L)&&(!d.skip_bound&&d.bound[u]&&d.bound[u](L),B&&Be(t,u)),v}):[],d.update(),B=!0,Q(d.before_update),d.fragment=r?r(d.ctx):!1,e.target){if(e.hydrate){qt();let u=Gt(e.target);d.fragment&&d.fragment.l(u),u.forEach(b)}else d.fragment&&d.fragment.c();e.intro&&Ft(t.$$.fragment),Ue(t,e.target,e.anchor),zt(),gt()}j(_)}var Le;typeof HTMLElement=="function"&&(Le=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){let r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){let r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let l;return{c:function(){l=h("slot"),o!=="default"&&c(l,"name",o)},m:function(_,d){y(_,l,d)},d:function(_){_&&b(l)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let e={},n=Jt(this);for(let o of this.$$s)o in n&&(e[o]=[t(o)]);for(let o of this.attributes){let l=this.$$g_p(o.name);l in this.$$d||(this.$$d[l]=Dt(l,o.value,this.$$p_d,"toProp"))}for(let o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});let r=()=>{this.$$r=!0;for(let o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){let l=Dt(o,this.$$d[o],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,l)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(let o in this.$$l)for(let l of this.$$l[o]){let f=this.$$c.$on(o,l);this.$$l_u.set(l,f)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=Dt(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function Dt(t,e,n,r){let o=n[t]?.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}var lt=class{$$=void 0;$$set=void 0;$destroy(){Ee(this,1),this.$destroy=E}$on(e,n){if(!U(n))return E;let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);function oe(t,e,n){return Math.min(n,Math.max(t,e))}var kt=new Set;function R(t,e){let n=e?.root||window;kt.add(t),r(e);function r(l){n=l?.root||window,n.addEventListener("scroll",o)}function o(){let{innerHeight:l,innerWidth:f,offsetHeight:p,offsetWidth:_,scrollY:d,scrollTop:B}=n;for(let[u,v]of kt.entries()){let{offsetTop:A,offsetLeft:L,offsetHeight:ct,offsetWidth:k}=v,{offsetTop:bt}=v.offsetParent,ut=Math.max(A,bt),w=1-(e?.anchor||0),K=e?.offset||0,H=(l||p)*w,at=(f||_)-L,tt=ct*w,N=k*K,P=(d||B)-(ut-H+tt),et=oe(N,P,at-(K?N:k));v.dispatchEvent(new CustomEvent("scroll",{detail:et})),v.dataset.aops=(et||P)>N?"v":"h"}}return{update:r,destroy(){kt.delete(t),n.removeEventListener("scroll",o)}}}function re(t,e,n){let r=t.slice();return r[8]=e[n],r}function ie(t,e,n){let r=t.slice();return r[11]=e[n],r[13]=n,r}function se(t,e,n){let r=t.slice();return r[14]=e[n],r}function le(t){let e,n,r,o,l,f;return{c(){e=h("li"),c(e,"id",n=t[14]),c(e,"data-aops-anim",r=t[14]),c(e,"class","svelte-10fpnwj")},m(p,_){y(p,e,_),l||(f=C(o=R.call(null,e,t[3])),l=!0)},p(p,_){o&&U(o.update)&&_&8&&o.update.call(null,p[3])},d(p){p&&b(e),l=!1,f()}}}function ce(t){let e,n,r,o,l;return{c(){e=h("section"),n=h("div"),c(n,"class","svelte-10fpnwj"),c(e,"class","fixed svelte-10fpnwj")},m(f,p){y(f,e,p),a(e,n),o||(l=[C(r=R.call(null,n,t[3])),J(n,"scroll",ae)],o=!0)},p(f,p){r&&U(r.update)&&p&8&&r.update.call(null,f[3])},d(f){f&&b(e),o=!1,Q(l)}}}function ue(t){let e,n,r,o,l,f;return{c(){e=h("div"),c(e,"id",n=t[8]),c(e,"data-aops-anim",r=t[8]),c(e,"class","svelte-10fpnwj")},m(p,_){y(p,e,_),l||(f=C(o=R.call(null,e,t[3])),l=!0)},p(p,_){o&&U(o.update)&&_&8&&o.update.call(null,p[3])},d(p){p&&b(e),l=!1,f()}}}function Se(t){let e,n,r,o,l,f,p,_,d,B,u,v,A,L,ct,k,bt,ut,w,K,H,at,tt,N,P,et,T,Tt,ft,jt,yt,pt,$t,dt,W,nt,Mt,S,Ot,ot,Ct,D,vt,Rt;document.title=e=t[0];let q=M(t[4]),x=[];for(let i=0;i<q.length;i+=1)x[i]=le(se(t,q,i));let z=M({length:3}),g=[];for(let i=0;i<z.length;i+=1)g[i]=ce(ie(t,z,i));let G=M(t[5]),F=[];for(let i=0;i<G.length;i+=1)F[i]=ue(re(t,G,i));return{c(){n=$(),r=h("header"),o=h("h1"),l=h("a"),f=V(t[0]),p=V("@"),_=V(t[2]),B=$(),u=h("main"),v=h("section"),v.innerHTML="<h2>Scroll<br/>\u2193</h2>",A=$(),L=h("ul");for(let i=0;i<x.length;i+=1)x[i].c();ct=$(),k=h("h3"),k.textContent="TEST",ut=$(),w=h("img"),at=$();for(let i=0;i<g.length;i+=1)g[i].c();tt=$(),N=h("div"),et=$(),T=h("img"),jt=$();for(let i=0;i<F.length;i+=1)F[i].c();yt=$(),pt=h("section"),pt.innerHTML="<h2>\u2191<br/>Scroll</h2>",$t=$(),dt=h("footer"),W=h("form"),nt=h("label"),Mt=V(`Anchor
            `),S=h("input"),Ot=$(),ot=h("label"),Ct=V(`Offset
            `),D=h("input"),c(l,"href",d=t[1].url),c(v,"class","svelte-10fpnwj"),c(L,"class","svelte-10fpnwj"),c(k,"id","test"),c(k,"data-aops-anim","fade-left"),c(w,"width","500"),c(w,"data-aops-anim","zoom-in"),c(w,"alt","big"),Ut(w.src,K="https://images.unsplash.com/photo-1542614228-14dcbfac0b2a?w=1200")||c(w,"src",K),c(w,"class","svelte-10fpnwj"),c(N,"class","svelte-10fpnwj"),c(T,"width","500"),c(T,"data-aops-anim","zoom-out"),c(T,"alt","big"),Ut(T.src,Tt="https://images.unsplash.com/photo-1547433171-98eb433cc6ff?w=1072")||c(T,"src",Tt),c(T,"class","svelte-10fpnwj"),c(pt,"class","svelte-10fpnwj"),c(S,"type","number"),c(S,"min","0"),c(S,"max","1"),c(S,"step","0.01"),c(nt,"for",""),c(D,"type","number"),c(D,"min","-1"),c(D,"max","0"),c(D,"step","0.01"),c(ot,"for",""),c(W,"action","")},m(i,m){y(i,n,m),y(i,r,m),a(r,o),a(o,l),a(l,f),a(l,p),a(l,_),y(i,B,m),y(i,u,m),a(u,v),a(u,A),a(u,L);for(let s=0;s<x.length;s+=1)x[s]&&x[s].m(L,null);a(u,ct),a(u,k),a(u,ut),a(u,w),a(u,at);for(let s=0;s<g.length;s+=1)g[s]&&g[s].m(u,null);a(u,tt),a(u,N),a(u,et),a(u,T),a(u,jt);for(let s=0;s<F.length;s+=1)F[s]&&F[s].m(u,null);a(u,yt),a(u,pt),y(i,$t,m),y(i,dt,m),a(dt,W),a(W,nt),a(nt,Mt),a(nt,S),it(S,t[3].anchor),a(W,Ot),a(W,ot),a(ot,Ct),a(ot,D),it(D,t[3].offset),vt||(Rt=[C(bt=R.call(null,k)),C(H=R.call(null,w,t[3])),C(P=R.call(null,N,t[3])),J(N,"scroll",ae),C(ft=R.call(null,T,t[3])),J(S,"input",t[6]),J(D,"input",t[7])],vt=!0)},p(i,[m]){if(m&1&&e!==(e=i[0])&&(document.title=e),m&1&&Bt(f,i[0]),m&4&&Bt(_,i[2]),m&2&&d!==(d=i[1].url)&&c(l,"href",d),m&24){q=M(i[4]);let s;for(s=0;s<q.length;s+=1){let O=se(i,q,s);x[s]?x[s].p(O,m):(x[s]=le(O),x[s].c(),x[s].m(L,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=q.length}if(H&&U(H.update)&&m&8&&H.update.call(null,i[3]),m&8){z=M({length:3});let s;for(s=0;s<z.length;s+=1){let O=ie(i,z,s);g[s]?g[s].p(O,m):(g[s]=ce(O),g[s].c(),g[s].m(u,tt))}for(;s<g.length;s+=1)g[s].d(1);g.length=z.length}if(P&&U(P.update)&&m&8&&P.update.call(null,i[3]),ft&&U(ft.update)&&m&8&&ft.update.call(null,i[3]),m&40){G=M(i[5]);let s;for(s=0;s<G.length;s+=1){let O=re(i,G,s);F[s]?F[s].p(O,m):(F[s]=ue(O),F[s].c(),F[s].m(u,yt))}for(;s<F.length;s+=1)F[s].d(1);F.length=G.length}m&8&&rt(S.value)!==i[3].anchor&&it(S,i[3].anchor),m&8&&rt(D.value)!==i[3].offset&&it(D,i[3].offset)},i:E,o:E,d(i){i&&(b(n),b(r),b(B),b(u),b($t),b(dt)),xt(x,i),xt(g,i),xt(F,i),vt=!1,Q(Rt)}}}function ae(t){t.target&&(t.target.dataset.pos=String(t.detail.toFixed(0)),t.target.style.transform=`translate(${t.detail}px)`)}function De(t,e,n){let{name:r}=e,{repository:o}=e,{version:l}=e,f={anchor:0,offset:0},p=["fade-up","fade-down","fade-right","fade-left","fade-up-right","fade-up-left","fade-down-right","fade-down-left"],_=["slide-up","slide-down","slide-right","slide-left"];function d(){f.anchor=rt(this.value),n(3,f)}function B(){f.offset=rt(this.value),n(3,f)}return t.$$set=u=>{"name"in u&&n(0,r=u.name),"repository"in u&&n(1,o=u.repository),"version"in u&&n(2,l=u.version)},[r,o,l,f,p,_,d,B]}var Nt=class extends lt{constructor(e){super(),ee(this,e,De,Se,It,{name:0,repository:1,version:2})}},fe=Nt;var So=new fe({target:document.body,props:{name:At,repository:Vt,version:Pt}});export{So as default};
