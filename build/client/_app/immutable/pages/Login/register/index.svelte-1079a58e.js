import{S as M,i as x,s as z,l as h,u as T,a as g,m as _,p as b,v as k,h as f,c as w,q as m,b as q,J as a,T as G,U as H,n as C,w as K}from"../../../chunks/index-b5f26bb7.js";import{s as Q}from"../../../chunks/api-17432085.js";function F(d){let e,s;return{c(){e=h("p"),s=T(d[0]),this.h()},l(t){e=_(t,"P",{class:!0});var r=b(e);s=k(r,d[0]),r.forEach(f),this.h()},h(){m(e,"class","error svelte-8viesj")},m(t,r){q(t,e,r),a(e,s)},p(t,r){r&1&&K(s,t[0])},d(t){t&&f(e)}}}function J(d){let e,s,t,r,p,i;return{c(){e=h("p"),s=T("Thank you for signing up!"),t=g(),r=h("p"),p=h("a"),i=T("You can log in."),this.h()},l(n){e=_(n,"P",{});var l=b(e);s=k(l,"Thank you for signing up!"),l.forEach(f),t=w(n),r=_(n,"P",{});var y=b(r);p=_(y,"A",{href:!0});var U=b(p);i=k(U,"You can log in."),U.forEach(f),y.forEach(f),this.h()},h(){m(p,"href","/auth/login")},m(n,l){q(n,e,l),a(e,s),q(n,t,l),q(n,r,l),a(r,p),a(p,i)},d(n){n&&f(e),n&&f(t),n&&f(r)}}}function W(d){let e,s,t,r,p,i,n,l,y,U,B,E,N,I,L,P,D,O,R,o=d[0]&&F(d),u=d[1]&&J();return{c(){e=h("form"),s=h("div"),t=h("label"),r=T("Username"),p=g(),i=h("input"),n=g(),l=h("div"),y=h("label"),U=T("Password"),B=g(),E=h("input"),N=g(),o&&o.c(),I=g(),u&&u.c(),L=g(),P=h("button"),D=T("Sign Up"),this.h()},l(v){e=_(v,"FORM",{method:!0});var c=b(e);s=_(c,"DIV",{});var S=b(s);t=_(S,"LABEL",{for:!0});var V=b(t);r=k(V,"Username"),V.forEach(f),p=w(S),i=_(S,"INPUT",{id:!0,name:!0,type:!0}),S.forEach(f),n=w(c),l=_(c,"DIV",{});var A=b(l);y=_(A,"LABEL",{for:!0});var Y=b(y);U=k(Y,"Password"),Y.forEach(f),B=w(A),E=_(A,"INPUT",{id:!0,name:!0,type:!0}),A.forEach(f),N=w(c),o&&o.l(c),I=w(c),u&&u.l(c),L=w(c),P=_(c,"BUTTON",{type:!0});var j=b(P);D=k(j,"Sign Up"),j.forEach(f),c.forEach(f),this.h()},h(){m(t,"for","username"),m(i,"id","username"),m(i,"name","username"),m(i,"type","text"),i.required=!0,m(y,"for","password"),m(E,"id","password"),m(E,"name","password"),m(E,"type","password"),E.required=!0,m(P,"type","submit"),m(e,"method","post")},m(v,c){q(v,e,c),a(e,s),a(s,t),a(t,r),a(s,p),a(s,i),a(e,n),a(e,l),a(l,y),a(y,U),a(l,B),a(l,E),a(e,N),o&&o.m(e,null),a(e,I),u&&u.m(e,null),a(e,L),a(e,P),a(P,D),O||(R=G(e,"submit",H(d[2])),O=!0)},p(v,[c]){v[0]?o?o.p(v,c):(o=F(v),o.c(),o.m(e,I)):o&&(o.d(1),o=null),v[1]?u||(u=J(),u.c(),u.m(e,L)):u&&(u.d(1),u=null)},i:C,o:C,d(v){v&&f(e),o&&o.d(),u&&u.d(),O=!1,R()}}}const ee=({session:d,props:e})=>d.user?{status:302,redirect:"/"}:{props:e};function X(d,e,s){let{error:t}=e,{success:r}=e;async function p(i){s(0,t="");const n=i.target,l=await Q(n);l.error&&s(0,t=l.error),l.success&&s(1,r=l.success),n.reset()}return d.$$set=i=>{"error"in i&&s(0,t=i.error),"success"in i&&s(1,r=i.success)},[t,r,p]}class te extends M{constructor(e){super(),x(this,e,X,W,z,{error:0,success:1})}}export{te as default,ee as load};