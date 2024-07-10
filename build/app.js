var Lt="aops";var Dt={type:"git",url:"https://github.com/Valexr/aops.git"};function E(){}function yt(t){return t()}function ut(){return Object.create(null)}function w(t){t.forEach(yt)}function S(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e}function zt(t){return Object.keys(t).length===0}function ot(t){return t&&S(t.destroy)?t.destroy:E}var $t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var ft=class t{_listeners="WeakMap"in $t?new WeakMap:void 0;_observer=void 0;options;constructor(e){this.options=e}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(e=>{for(let n of e)t.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};ft.entries="WeakMap"in $t?new WeakMap:void 0;var Mt=!1;function Ot(){Mt=!0}function Rt(){Mt=!1}function d(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function rt(t){return document.createTextNode(t)}function Q(){return rt(" ")}function W(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return t===""?null:+t}function Tt(t){return Array.from(t.childNodes)}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function st(t,e){t.value=e??""}function At(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function jt(t){let e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}var q;function N(t){q=t}var T=[];var It=[],J=[],Pt=[],_e=Promise.resolve(),Ft=!1;function Ht(){Ft||(Ft=!0,_e.then(dt))}function lt(t){J.push(t)}var bt=new Set,G=0;function dt(){if(G!==0)return;let t=q;do{try{for(;G<T.length;){let e=T[G];G++,N(e),he(e.$$)}}catch(e){throw T.length=0,G=0,e}for(N(null),T.length=0,G=0;It.length;)It.pop()();for(let e=0;e<J.length;e+=1){let n=J[e];bt.has(n)||(bt.add(n),n())}J.length=0}while(T.length);for(;Pt.length;)Pt.pop()();Ft=!1,bt.clear(),N(t)}function he(t){if(t.fragment!==null){t.update(),w(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(lt)}}function Wt(t){let e=[],n=[];J.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),J=e}var _t=new Set,me;function X(t,e){t&&t.i&&(_t.delete(t),t.i(e))}function ht(t,e,n,r){if(t&&t.o){if(_t.has(t))return;_t.add(t),me.c.push(()=>{_t.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function L(t){return t?.length!==void 0?t:Array.from(t)}var xe=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],ge=new Set([...xe]);function qt(t){t&&t.c()}function wt(t,e,n){let{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),lt(()=>{let s=t.$$.on_mount.map(yt).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):w(s),t.$$.on_mount=[]}),o.forEach(lt)}function Et(t,e){let n=t.$$;n.fragment!==null&&(Wt(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(t,e){t.$$.dirty[0]===-1&&(T.push(t),Ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,n,r,o,s,f=null,a=[-1]){let p=q;N(t);let l=t.$$={fragment:null,ctx:[],props:s,update:E,not_equal:o,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:ut(),dirty:a,skip_bound:!1,root:e.target||p.$$.root};f&&f(l.root);let F=!1;if(l.ctx=n?n(t,e.props||{},(v,D,...z)=>{let B=z.length?z[0]:D;return l.ctx&&o(l.ctx[v],l.ctx[v]=B)&&(!l.skip_bound&&l.bound[v]&&l.bound[v](B),F&&$e(t,v)),D}):[],l.update(),F=!0,w(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){Ot();let v=Tt(e.target);l.fragment&&l.fragment.l(v),v.forEach(x)}else l.fragment&&l.fragment.c();e.intro&&X(t.$$.fragment),wt(t,e.target,e.anchor),Rt(),dt()}N(p)}var be;typeof HTMLElement=="function"&&(be=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){let r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){let r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let s;return{c:function(){s=_("slot"),o!=="default"&&u(s,"name",o)},m:function(p,l){b(p,s,l)},d:function(p){p&&x(s)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let e={},n=jt(this);for(let o of this.$$s)o in n&&(e[o]=[t(o)]);for(let o of this.attributes){let s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=vt(s,o.value,this.$$p_d,"toProp"))}for(let o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});let r=()=>{this.$$r=!0;for(let o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){let s=vt(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(let o in this.$$l)for(let s of this.$$l[o]){let f=this.$$c.$on(o,s);this.$$l_u.set(s,f)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=vt(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function vt(t,e,n,r){let o=n[t]?.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}var C=class{$$=void 0;$$set=void 0;$destroy(){Et(this,1),this.$destroy=E}$on(e,n){if(!S(n))return E;let r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!zt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};var Gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Gt);var Jt='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function ve(t){let e,n;return{c(){e=_("a"),u(e,"href",n=t[0].url),u(e,"target","_blank"),u(e,"rel","noreferrer"),u(e,"id","gh")},m(r,o){b(r,e,o),e.innerHTML=Jt},p(r,[o]){o&1&&n!==(n=r[0].url)&&u(e,"href",n)},i:E,o:E,d(r){r&&x(e)}}}function we(t,e,n){let{repository:r}=e;return t.$$set=o=>{"repository"in o&&n(0,r=o.repository)},[r]}var Qt=class extends C{constructor(e){super(),mt(this,e,we,ve,at,{repository:0})}},Xt=Qt;function Zt(t,e,n){return Math.min(n,Math.max(t,e))}var Yt=new Set;function ct(t,e){Yt.add(t),window.onscroll=n=>{for(let[r,o]of Yt.entries()){let{innerHeight:s,innerWidth:f,scrollY:a}=window,{offsetTop:p,offsetLeft:l,offsetHeight:F,offsetWidth:v,offsetParent:D}=o,{offsetTop:z,offsetWidth:B}=D,A=p||z,Z=1-(e.anchor||0),Y=e.offset||0,K=F*Z,j=v*Y,M=s*Z,tt=f-l,R=Math.trunc(a-(A-M+K)),et=Zt(-j,R,tt+j);o.dispatchEvent(new CustomEvent("scroll",{detail:et})),o.dataset.aops=et>0?"v":"h"}}}function Kt(t,e,n){let r=t.slice();return r[7]=e[n],r}function te(t,e,n){let r=t.slice();return r[10]=e[n],r[12]=n,r}function ee(t,e,n){let r=t.slice();return r[13]=e[n],r}function ne(t){let e,n,r,o,s,f;return{c(){e=_("div"),u(e,"id",n=t[13]),At(e,"height","50px"),u(e,"data-aops-anim",r=t[13]),u(e,"class","svelte-1fkezzd")},m(a,p){b(a,e,p),s||(f=ot(o=ct.call(null,e,t[2])),s=!0)},p(a,p){o&&S(o.update)&&p&4&&o.update.call(null,a[2])},d(a){a&&x(e),s=!1,f()}}}function oe(t){let e,n,r,o,s;return{c(){e=_("section"),n=_("div"),u(n,"class","svelte-1fkezzd"),u(e,"class","fixed svelte-1fkezzd")},m(f,a){b(f,e,a),d(e,n),o||(s=[ot(r=ct.call(null,n,t[2])),W(n,"scroll",ie)],o=!0)},p(f,a){r&&S(r.update)&&a&4&&r.update.call(null,f[2])},d(f){f&&x(e),o=!1,w(s)}}}function re(t){let e,n,r,o,s,f;return{c(){e=_("div"),u(e,"id",n=t[7]),u(e,"data-aops-anim",r=t[7]),u(e,"class","svelte-1fkezzd")},m(a,p){b(a,e,p),s||(f=ot(o=ct.call(null,e,t[2])),s=!0)},p(a,p){o&&S(o.update)&&p&4&&o.update.call(null,a[2])},d(a){a&&x(e),s=!1,f()}}}function Ee(t){let e,n,r,o,s,f,a,p,l,F,v,D,z,B,A,Z,Y,K,j,M,tt,R,et,k,Ut,xt,nt,St,U,V,gt,Bt;document.title=e=t[0],s=new Xt({props:{repository:t[1]}});let I=L(t[3]),g=[];for(let i=0;i<I.length;i+=1)g[i]=ne(ee(t,I,i));let P=L({length:3}),y=[];for(let i=0;i<P.length;i+=1)y[i]=oe(te(t,P,i));let H=L(t[4]),$=[];for(let i=0;i<H.length;i+=1)$[i]=re(Kt(t,H,i));return{c(){n=Q(),r=_("header"),o=_("h1"),qt(s.$$.fragment),f=Q(),a=rt(t[0]),p=Q(),l=_("main"),F=_("section"),F.innerHTML='<h3>Scroll down</h3> <h1 class="svelte-1fkezzd">\u2193</h1>',v=Q();for(let i=0;i<g.length;i+=1)g[i].c();D=Q();for(let i=0;i<y.length;i+=1)y[i].c();z=Q(),B=_("div"),Z=Q();for(let i=0;i<$.length;i+=1)$[i].c();Y=Q(),K=_("section"),j=Q(),M=_("footer"),tt=_("p"),R=_("label"),et=rt(`Anchor
            `),k=_("input"),Ut=Q(),xt=_("p"),nt=_("label"),St=rt(`Offset
            `),U=_("input"),u(o,"class","svelte-1fkezzd"),u(F,"class","svelte-1fkezzd"),u(B,"class","svelte-1fkezzd"),u(K,"class","svelte-1fkezzd"),u(k,"type","number"),u(k,"min","0"),u(k,"max","1"),u(k,"step","0.01"),u(R,"for",""),u(U,"type","number"),u(U,"min","0"),u(U,"max","1"),u(U,"step","0.01"),u(nt,"for","")},m(i,h){b(i,n,h),b(i,r,h),d(r,o),wt(s,o,null),d(o,f),d(o,a),b(i,p,h),b(i,l,h),d(l,F),d(l,v);for(let m=0;m<g.length;m+=1)g[m]&&g[m].m(l,null);d(l,D);for(let m=0;m<y.length;m+=1)y[m]&&y[m].m(l,null);d(l,z),d(l,B),d(l,Z);for(let m=0;m<$.length;m+=1)$[m]&&$[m].m(l,null);d(l,Y),d(l,K),b(i,j,h),b(i,M,h),d(M,tt),d(tt,R),d(R,et),d(R,k),st(k,t[2].anchor),d(M,Ut),d(M,xt),d(xt,nt),d(nt,St),d(nt,U),st(U,t[2].offset),V=!0,gt||(Bt=[ot(A=ct.call(null,B,t[2])),W(B,"scroll",ie),W(k,"input",t[5]),W(U,"input",t[6])],gt=!0)},p(i,[h]){(!V||h&1)&&e!==(e=i[0])&&(document.title=e);let m={};if(h&2&&(m.repository=i[1]),s.$set(m),(!V||h&1)&&Ct(a,i[0]),h&12){I=L(i[3]);let c;for(c=0;c<I.length;c+=1){let O=ee(i,I,c);g[c]?g[c].p(O,h):(g[c]=ne(O),g[c].c(),g[c].m(l,D))}for(;c<g.length;c+=1)g[c].d(1);g.length=I.length}if(h&4){P=L({length:3});let c;for(c=0;c<P.length;c+=1){let O=te(i,P,c);y[c]?y[c].p(O,h):(y[c]=oe(O),y[c].c(),y[c].m(l,z))}for(;c<y.length;c+=1)y[c].d(1);y.length=P.length}if(A&&S(A.update)&&h&4&&A.update.call(null,i[2]),h&20){H=L(i[4]);let c;for(c=0;c<H.length;c+=1){let O=Kt(i,H,c);$[c]?$[c].p(O,h):($[c]=re(O),$[c].c(),$[c].m(l,Y))}for(;c<$.length;c+=1)$[c].d(1);$.length=H.length}h&4&&it(k.value)!==i[2].anchor&&st(k,i[2].anchor),h&4&&it(U.value)!==i[2].offset&&st(U,i[2].offset)},i(i){V||(X(s.$$.fragment,i),V=!0)},o(i){ht(s.$$.fragment,i),V=!1},d(i){i&&(x(n),x(r),x(p),x(l),x(j),x(M)),Et(s),pt(g,i),pt(y,i),pt($,i),gt=!1,w(Bt)}}}function ie(t){t.target&&(t.target.dataset.pos=String(t.detail),t.target.style.transform=`translate(${t.detail}px)`)}function Qe(t,e,n){let{name:r}=e,{repository:o}=e,s={anchor:.5,offset:1},f=["fade-up","fade-down","fade-right","fade-left","fade-up-right","fade-up-left","fade-down-right","fade-down-left"],a=["slide-up","slide-down","slide-right","slide-left"];function p(){s.anchor=it(this.value),n(2,s)}function l(){s.offset=it(this.value),n(2,s)}return t.$$set=F=>{"name"in F&&n(0,r=F.name),"repository"in F&&n(1,o=F.repository)},[r,o,s,f,a,p,l]}var kt=class extends C{constructor(e){super(),mt(this,e,Qe,Ee,at,{name:0,repository:1})}},se=kt;var Bo=new se({target:document.body,props:{name:Lt,repository:Dt}});export{Bo as default};
