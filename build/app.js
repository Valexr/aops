var Pt="@valexr/aops";var Vt={type:"git",url:"https://github.com/Valexr/aops.git"};function k(){}function Qt(t){return t()}function dt(){return Object.create(null)}function U(t){t.forEach(Qt)}function E(t){return typeof t=="function"}var pt;function Ut(t,e){return t===e?!0:(pt||(pt=document.createElement("a")),pt.href=e,t===pt.href)}function _t(t,e){return t!=t?e==e:t!==e}function Ht(t){return Object.keys(t).length===0}function R(t){return t&&E(t.destroy)?t.destroy:k}var Et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var ht=class t{_listeners="WeakMap"in Et?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(e=>{for(let n of e)t.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};ht.entries="WeakMap"in Et?new WeakMap:void 0;var qt=!1;function zt(){qt=!0}function Wt(){qt=!1}function f(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function it(t){return document.createTextNode(t)}function Q(){return it(" ")}function J(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return t===""?null:+t}function Gt(t){return Array.from(t.childNodes)}function Jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function lt(t,e){t.value=e??""}function Zt(t){let e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}var Z;function D(t){Z=t}var A=[];var Xt=[],X=[],Kt=[],we=Promise.resolve(),Bt=!1;function te(){Bt||(Bt=!0,we.then(xt))}function ct(t){X.push(t)}var kt=new Set,Y=0;function xt(){if(Y!==0)return;let t=Z;do{try{for(;Y<A.length;){let e=A[Y];Y++,D(e),ve(e.$$)}}catch(e){throw A.length=0,Y=0,e}for(D(null),A.length=0,Y=0;Xt.length;)Xt.pop()();for(let e=0;e<X.length;e+=1){let n=X[e];kt.has(n)||(kt.add(n),n())}X.length=0}while(A.length);for(;Kt.length;)Kt.pop()();Bt=!1,kt.clear(),D(t)}function ve(t){if(t.fragment!==null){t.update(),U(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}function ee(t){let e=[],n=[];X.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),X=e}var gt=new Set,Qe;function K(t,e){t&&t.i&&(gt.delete(t),t.i(e))}function Ft(t,e,n,r){if(t&&t.o){if(gt.has(t))return;gt.add(t),Qe.c.push(()=>{gt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function N(t){return t?.length!==void 0?t:Array.from(t)}var Ue=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Ee=new Set([...Ue]);function ne(t){t&&t.c()}function Lt(t,e,n){let{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),ct(()=>{let s=t.$$.on_mount.map(Qt).filter(E);t.$$.on_destroy?t.$$.on_destroy.push(...s):U(s),t.$$.on_mount=[]}),o.forEach(ct)}function Dt(t,e){let n=t.$$;n.fragment!==null&&(ee(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(t,e){t.$$.dirty[0]===-1&&(A.push(t),te(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,n,r,o,s,p=null,a=[-1]){let d=Z;D(t);let l=t.$$={fragment:null,ctx:[],props:s,update:k,not_equal:o,bound:dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:dt(),dirty:a,skip_bound:!1,root:e.target||d.$$.root};p&&p(l.root);let $=!1;if(l.ctx=n?n(t,e.props||{},(v,B,...C)=>{let w=C.length?C[0]:B;return l.ctx&&o(l.ctx[v],l.ctx[v]=w)&&(!l.skip_bound&&l.bound[v]&&l.bound[v](w),$&&Be(t,v)),B}):[],l.update(),$=!0,U(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){zt();let v=Gt(e.target);l.fragment&&l.fragment.l(v),v.forEach(x)}else l.fragment&&l.fragment.c();e.intro&&K(t.$$.fragment),Lt(t,e.target,e.anchor),Wt(),xt()}D(d)}var Se;typeof HTMLElement=="function"&&(Se=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){let r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){let r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let s;return{c:function(){s=_("slot"),o!=="default"&&c(s,"name",o)},m:function(d,l){y(d,s,l)},d:function(d){d&&x(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let e={},n=Zt(this);for(let o of this.$$s)o in n&&(e[o]=[t(o)]);for(let o of this.attributes){let s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=St(s,o.value,this.$$p_d,"toProp"))}for(let o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});let r=()=>{this.$$r=!0;for(let o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){let s=St(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(let o in this.$$l)for(let s of this.$$l[o]){let p=this.$$c.$on(o,s);this.$$l_u.set(s,p)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=St(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function St(t,e,n,r){let o=n[t]?.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}var j=class{$$=void 0;$$set=void 0;$destroy(){Dt(this,1),this.$destroy=k}$on(e,n){if(!E(n))return k;let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oe);var re='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function De(t){let e,n;return{c(){e=_("a"),c(e,"href",n=t[0].url),c(e,"target","_blank"),c(e,"rel","noreferrer"),c(e,"id","gh")},m(r,o){y(r,e,o),e.innerHTML=re},p(r,[o]){o&1&&n!==(n=r[0].url)&&c(e,"href",n)},i:k,o:k,d(r){r&&x(e)}}}function Ne(t,e,n){let{repository:r}=e;return t.$$set=o=>{"repository"in o&&n(0,r=o.repository)},[r]}var Nt=class extends j{constructor(e){super(),bt(this,e,Ne,De,_t,{repository:0})}},ie=Nt;function se(t,e,n){return Math.min(n,Math.max(t,e))}var le=new Set;function I(t,e){le.add(t),window.addEventListener("scroll",n);function n(){for(let[r,o]of le.entries()){let{innerHeight:s,innerWidth:p,scrollY:a}=window,{offsetTop:d,offsetLeft:l,offsetHeight:$,offsetWidth:v}=o,{offsetTop:B}=o.offsetParent,C=d||B,w=1-(e?.anchor||0),ut=e?.offset||0,P=$*w,tt=v*ut,et=s*w,O=p-l,V=Math.trunc(a-(C-et+P)),nt=se(-tt,V,O-tt);o.dispatchEvent(new CustomEvent("scroll",{detail:nt})),o.dataset.aops=nt>0?"v":"h"}}return{destroy(){window.removeEventListener("scroll",n)}}}function ce(t,e,n){let r=t.slice();return r[7]=e[n],r}function ue(t,e,n){let r=t.slice();return r[10]=e[n],r[12]=n,r}function ae(t,e,n){let r=t.slice();return r[13]=e[n],r}function fe(t){let e,n,r,o,s,p;return{c(){e=_("li"),c(e,"id",n=t[13]),c(e,"data-aops-anim",r=t[13]),c(e,"class","svelte-1w6mkus")},m(a,d){y(a,e,d),s||(p=R(o=I.call(null,e,t[2])),s=!0)},p(a,d){o&&E(o.update)&&d&4&&o.update.call(null,a[2])},d(a){a&&x(e),s=!1,p()}}}function pe(t){let e,n,r,o,s;return{c(){e=_("section"),n=_("div"),c(n,"class","svelte-1w6mkus"),c(e,"class","fixed svelte-1w6mkus")},m(p,a){y(p,e,a),f(e,n),o||(s=[R(r=I.call(null,n,t[2])),J(n,"scroll",_e)],o=!0)},p(p,a){r&&E(r.update)&&a&4&&r.update.call(null,p[2])},d(p){p&&x(e),o=!1,U(s)}}}function de(t){let e,n,r,o,s,p;return{c(){e=_("div"),c(e,"id",n=t[7]),c(e,"data-aops-anim",r=t[7]),c(e,"class","svelte-1w6mkus")},m(a,d){y(a,e,d),s||(p=R(o=I.call(null,e,t[2])),s=!0)},p(a,d){o&&E(o.update)&&d&4&&o.update.call(null,a[2])},d(a){a&&x(e),s=!1,p()}}}function Te(t){let e,n,r,o,s,p,a,d,l,$,v,B,C,w,ut,P,tt,et,O,V,nt,T,Mt,at,Ct,yt,$t,wt,ft,H,ot,Ot,S,Rt,rt,At,L,q,vt,jt;document.title=e=t[0],s=new ie({props:{repository:t[1]}});let z=N(t[3]),g=[];for(let i=0;i<z.length;i+=1)g[i]=fe(ae(t,z,i));let W=N({length:3}),F=[];for(let i=0;i<W.length;i+=1)F[i]=pe(ue(t,W,i));let G=N(t[4]),b=[];for(let i=0;i<G.length;i+=1)b[i]=de(ce(t,G,i));return{c(){n=Q(),r=_("header"),o=_("h1"),ne(s.$$.fragment),p=Q(),a=it(t[0]),d=Q(),l=_("main"),$=_("section"),$.innerHTML="<h2>Scroll down <br/> \u2193</h2>",v=Q(),B=_("ul");for(let i=0;i<g.length;i+=1)g[i].c();C=Q(),w=_("img"),tt=Q();for(let i=0;i<F.length;i+=1)F[i].c();et=Q(),O=_("div"),nt=Q(),T=_("img"),Ct=Q();for(let i=0;i<b.length;i+=1)b[i].c();yt=Q(),$t=_("section"),wt=Q(),ft=_("footer"),H=_("form"),ot=_("label"),Ot=it(`Anchor
            `),S=_("input"),Rt=Q(),rt=_("label"),At=it(`Offset
            `),L=_("input"),c($,"class","svelte-1w6mkus"),c(B,"class","svelte-1w6mkus"),c(w,"width","500"),c(w,"data-aops-anim","zoom-in"),c(w,"alt","big"),Ut(w.src,ut="https://images.unsplash.com/photo-1542614228-14dcbfac0b2a?w=1200")||c(w,"src",ut),c(O,"class","svelte-1w6mkus"),c(T,"width","500"),c(T,"data-aops-anim","zoom-out"),c(T,"alt","big"),Ut(T.src,Mt="https://images.unsplash.com/photo-1547433171-98eb433cc6ff?w=1072")||c(T,"src",Mt),c($t,"class","svelte-1w6mkus"),c(S,"type","number"),c(S,"min","0"),c(S,"max","1"),c(S,"step","0.01"),c(ot,"for",""),c(L,"type","number"),c(L,"min","0"),c(L,"max","1"),c(L,"step","0.01"),c(rt,"for",""),c(H,"action","")},m(i,h){y(i,n,h),y(i,r,h),f(r,o),Lt(s,o,null),f(o,p),f(o,a),y(i,d,h),y(i,l,h),f(l,$),f(l,v),f(l,B);for(let m=0;m<g.length;m+=1)g[m]&&g[m].m(B,null);f(l,C),f(l,w),f(l,tt);for(let m=0;m<F.length;m+=1)F[m]&&F[m].m(l,null);f(l,et),f(l,O),f(l,nt),f(l,T),f(l,Ct);for(let m=0;m<b.length;m+=1)b[m]&&b[m].m(l,null);f(l,yt),f(l,$t),y(i,wt,h),y(i,ft,h),f(ft,H),f(H,ot),f(ot,Ot),f(ot,S),lt(S,t[2].anchor),f(H,Rt),f(H,rt),f(rt,At),f(rt,L),lt(L,t[2].offset),q=!0,vt||(jt=[R(P=I.call(null,w,t[2])),R(V=I.call(null,O,t[2])),J(O,"scroll",_e),R(at=I.call(null,T,t[2])),J(S,"input",t[5]),J(L,"input",t[6])],vt=!0)},p(i,[h]){(!q||h&1)&&e!==(e=i[0])&&(document.title=e);let m={};if(h&2&&(m.repository=i[1]),s.$set(m),(!q||h&1)&&Jt(a,i[0]),h&12){z=N(i[3]);let u;for(u=0;u<z.length;u+=1){let M=ae(i,z,u);g[u]?g[u].p(M,h):(g[u]=fe(M),g[u].c(),g[u].m(B,null))}for(;u<g.length;u+=1)g[u].d(1);g.length=z.length}if(P&&E(P.update)&&h&4&&P.update.call(null,i[2]),h&4){W=N({length:3});let u;for(u=0;u<W.length;u+=1){let M=ue(i,W,u);F[u]?F[u].p(M,h):(F[u]=pe(M),F[u].c(),F[u].m(l,et))}for(;u<F.length;u+=1)F[u].d(1);F.length=W.length}if(V&&E(V.update)&&h&4&&V.update.call(null,i[2]),at&&E(at.update)&&h&4&&at.update.call(null,i[2]),h&20){G=N(i[4]);let u;for(u=0;u<G.length;u+=1){let M=ce(i,G,u);b[u]?b[u].p(M,h):(b[u]=de(M),b[u].c(),b[u].m(l,yt))}for(;u<b.length;u+=1)b[u].d(1);b.length=G.length}h&4&&st(S.value)!==i[2].anchor&&lt(S,i[2].anchor),h&4&&st(L.value)!==i[2].offset&&lt(L,i[2].offset)},i(i){q||(K(s.$$.fragment,i),q=!0)},o(i){Ft(s.$$.fragment,i),q=!1},d(i){i&&(x(n),x(r),x(d),x(l),x(wt),x(ft)),Dt(s),mt(g,i),mt(F,i),mt(b,i),vt=!1,U(jt)}}}function _e(t){t.target&&(t.target.dataset.pos=String(t.detail),t.target.style.transform=`translate(${t.detail}px)`)}function Me(t,e,n){let{name:r}=e,{repository:o}=e,s={anchor:.5,offset:.5},p=["fade-up","fade-down","fade-right","fade-left","fade-up-right","fade-up-left","fade-down-right","fade-down-left"],a=["slide-up","slide-down","slide-right","slide-left"];function d(){s.anchor=st(this.value),n(2,s)}function l(){s.offset=st(this.value),n(2,s)}return t.$$set=$=>{"name"in $&&n(0,r=$.name),"repository"in $&&n(1,o=$.repository)},[r,o,s,p,a,d,l]}var Tt=class extends j{constructor(e){super(),bt(this,e,Me,Te,_t,{name:0,repository:1})}},he=Tt;var Ao=new he({target:document.body,props:{name:Pt,repository:Vt}});export{Ao as default};
