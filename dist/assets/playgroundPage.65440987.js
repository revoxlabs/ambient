import{i as n,c as l,S as L,F as W,t as o,A as S,u as q,P as Y,a as P,M as Z,b as c,s as t,B as O,O as ee,D as ae,d as B,e as te}from"./index.15e05be8.js";const re=o('<div class="flex flex-col"></div>'),le=o(`<div class="h-7 border-l border-neutral-200 dark:border-neutral-800
          text-slate-500 dark:text-neutral-400 hover:text-slate-600 hover:dark:text-neutral-400
          transition-all"></div>`),ne=o('<h3 class="font-semibold font-display text-slate-800 dark:text-slate-200 pb-3.5 pt-5"></h3>'),se=a=>l(S,{get href(){return a.link},class:"pl-3 py-1",get classList(){return{"-ml-px text-am-pink dark:text-am-pink-light font-semibold border-l-2 border-am-pink dark:border-am-pink-light":a.selected}},get children(){return a.children}}),D=a=>{const x=()=>q().pathname;return(()=>{const v=re.cloneNode(!0);return n(v,l(W,{get each(){return Object.entries(a.list)},children:([d,g])=>l(L,{when:g&&g!=="",get fallback(){return(()=>{const b=ne.cloneNode(!0);return n(b,d),b})()},get children(){const b=le.cloneNode(!0);return n(b,l(se,{get selected(){return g==x()},link:g,children:d})),b}})})),v})()},de=o('<i class="bi bi-list" s:amb--a6aa559c-0></i>'),ie=o(`<div class="hidden h-screen w-screen fixed top-0 left-0
      backdrop-blur-sm z-[100] bg-neutral-50 dark:bg-[#181819]
      bg-opacity-60 dark:bg-opacity-70 cursor-pointer" s:amb--a6aa559c-0><div class="left-0 h-screen border-r p-4 py-3 sm:px-6 flex flex-col
         backdrop-blur-md bg-neutral-50 dark:bg-[#181819]
         border-neutral-200 dark:border-neutral-800
         w-64 shadow-xl" s:amb--a6aa559c-0><a class="my-2 mb-6" s:amb--a6aa559c-0></a></div></div>`),oe=o('<i class="bi bi-list -ml-1" s:amb--a6aa559c-0></i>'),ce=o('<i class="bi bi-chevron-bar-right -ml-1" s:amb--a6aa559c-0></i>'),ue=o('<i class="bi bi-arrow-left pr-2" s:amb--a6aa559c-0></i>'),I=o('<a class="font-semibold font-display text-slate-700 dark:text-neutral-300" s:amb--a6aa559c-0></a>'),ve=o('<i class="bi bi-arrow-right pl-2" s:amb--a6aa559c-0></i>'),be=o(`<div class="flex justify-center lg:px-6" s:amb--a6aa559c-0><div class="flex flex-row flex-auto overflow-x-hidden -mb-20 w-full max-w-screen-2xl" s:amb--a6aa559c-0><div class="flex-none h-screen w-0 sm:w-4 md:w-8 lg:w-64 transition-all" s:amb--a6aa559c-0><div class="border-b h-12 px-0 lg:px-10 flex fixed backdrop-blur-md backdrop-brightness-125
        bg-neutral-50 dark:bg-[#181819] border-b-neutral-200 dark:border-b-neutral-800
        bg-opacity-80 dark:bg-opacity-90 w-full z-50 md:hidden justify-start items-center" s:amb--a6aa559c-0><a class="
            block pl-4 sm:pl-10
            z-50 md:z-[60] rounded-md
            drop-shadow-[0_0_4px_rgba(0,0,0,0.08)]" s:amb--a6aa559c-0></a></div><div class="hidden sm:flex flex-col fixed w-64 overflow-x-visible lg:-mx-4
          backdrop-blur-md backdrop-brightness-125 lg:backdrop-blur-0 lg:backdrop-brightness-100 bg-opacity-80
          bg-neutral-50 dark:bg-[#181819] lg:bg-transparent dark:lg:bg-transparent
          border-r border-neutral-200 dark:border-neutral-800
          mb-20 z-50 justify-between transition-[transform]
          -translate-x-60 md:-translate-x-56 lg:translate-x-0 ease-in-out
          hover:translate-x-0 dark:hover:shadow-[0_35px_35px_rgba(0,0,0,0.4)]
          hover:shadow-[0_35px_35px_#00000032]
          h-[calc(100vh-56px)] hover:lg:shadow-none hover:lg:dark:shadow-none" s:amb--a6aa559c-0><a class="
            hidden md:block lg:hidden absolute left-60 top-8
            bg-white dark:bg-neutral-900 z-50 md:z-[60] rounded-md
            drop-shadow-[0_0_8px_rgba(0,0,0,0.14)]" s:amb--a6aa559c-0></a><div class="p-6 pl-4 sm:pl-6 lg:pl-4 pt-2" s:amb--a6aa559c-0></div><div class="h-28" s:amb--a6aa559c-0></div></div></div><div class="flex flex-col overflow-x-hidden pt-16 md:pt-8 lg:-mr-4 pb-12" s:amb--a6aa559c-0><div class="flex flex-col justify-center px-4 sm:px-6 pt-12" s:amb--a6aa559c-0><div class="flex flex-col w-full max-w-screen-2xl gap-y-1" s:amb--a6aa559c-0><div class="flex justify-between w-full text-slate-600 dark:text-neutral-400" s:amb--a6aa559c-0><div s:amb--a6aa559c-0></div></div></div></div></div></div></div>`),me="amb--a6aa559c-0",_e=".menuBG[s\\:amb--a6aa559c-0]{display:flex}.menuShown[s\\:amb--a6aa559c-0]{transform:translateX(0)!important}",$e=()=>{const a=Y(),[x,v]=P(!1),[d,g]=P({Components:"",Introduction:"/playground/intro",Buttons:"/playground/buttons",Texts:"/playground/texts",Pages:"",Documentation:"/playground/documentation",Landing:"/playground/landing"}),b=()=>q().pathname,$=()=>Object.entries(d()).findIndex(i=>i[1]==b()),w=()=>Object.values(d())[$()-1]?Object.values(d())[$()-1]:"",y=()=>Object.values(d())[$()+1]?Object.values(d())[$()+1]:"";return Z(me,1,_e),[(()=>{const i=ie.cloneNode(!0),m=i.firstChild,_=m.firstChild;return i.$$click=()=>v(!1),_.$$click=()=>v(!1),n(_,l(O,{aria:"Open Mobile Menu",get children(){const r=de.cloneNode(!0);return c(u=>t(r,a(),u)),r}})),n(m,l(D,{get list(){return d()}}),null),c(r=>{const u=!!x(),p=a(),f=!!x(),h=a(),j=a();return u!==r._v$&&i.classList.toggle("menuBG",r._v$=u),r._v$2=t(i,p,r._v$2),f!==r._v$3&&m.classList.toggle("menuShown",r._v$3=f),r._v$4=t(m,h,r._v$4),r._v$5=t(_,j,r._v$5),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),i})(),(()=>{const i=be.cloneNode(!0),m=i.firstChild,_=m.firstChild,r=_.firstChild,u=r.firstChild,p=r.nextSibling,f=p.firstChild,h=f.nextSibling,j=h.nextSibling,C=_.nextSibling,M=C.firstChild,N=M.firstChild,k=N.firstChild,z=k.firstChild;return u.$$click=()=>v(!0),n(u,l(O,{aria:"Open Mobile Menu",square:!0,get children(){const e=oe.cloneNode(!0);return c(s=>t(e,a(),s)),e}})),f.$$click=()=>v(!0),n(f,l(O,{aria:"Toggle Mobile Navigation List",square:!0,get children(){const e=ce.cloneNode(!0);return c(s=>t(e,a(),s)),e}})),n(h,l(D,{get list(){return d()}})),n(C,l(ee,{}),M),n(N,l(ae,{}),k),n(z,l(L,{get when(){return w()!==""},get children(){return l(S,{get href(){return B(()=>!!w(),!0)()?w():"#"},get children(){return[(()=>{const e=ue.cloneNode(!0);return c(s=>t(e,a(),s)),e})(),(()=>{const e=I.cloneNode(!0);return n(e,()=>Object.keys(d())[$()-1]),c(s=>t(e,a(),s)),e})()]}})}})),n(k,l(L,{get when(){return y()!==""},get children(){return l(S,{get href(){return B(()=>!!y(),!0)()?y():"#"},get children(){return[(()=>{const e=I.cloneNode(!0);return n(e,()=>Object.keys(d())[$()+1]),c(s=>t(e,a(),s)),e})(),(()=>{const e=ve.cloneNode(!0);return c(s=>t(e,a(),s)),e})()]}})}}),null),c(e=>{const s=a(),E=a(),F=a(),G=a(),T=a(),A=a(),R=a(),X=a(),H=a(),J=a(),K=a(),Q=a(),U=a(),V=a();return e._v$6=t(i,s,e._v$6),e._v$7=t(m,E,e._v$7),e._v$8=t(_,F,e._v$8),e._v$9=t(r,G,e._v$9),e._v$10=t(u,T,e._v$10),e._v$11=t(p,A,e._v$11),e._v$12=t(f,R,e._v$12),e._v$13=t(h,X,e._v$13),e._v$14=t(j,H,e._v$14),e._v$15=t(C,J,e._v$15),e._v$16=t(M,K,e._v$16),e._v$17=t(N,Q,e._v$17),e._v$18=t(k,U,e._v$18),e._v$19=t(z,V,e._v$19),e},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0}),i})()]};te(["click"]);export{$e as default};
