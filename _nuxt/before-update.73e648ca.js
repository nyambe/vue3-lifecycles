import{a as f,r as n,h,w as k,e as u,i as y,v as B,f as e,t,F as g,j as C,k as U,o as i}from"./entry.f7683cf8.js";const b=e("option",null,"2",-1),w=e("option",null,"5",-1),E=e("option",null,"10",-1),S=[b,w,E],V={key:0},q=e("ul",null,[e("li",null,"onBeforeUpdate: Este gancho de ciclo de vida se llama justo antes de que la interfaz de usuario se actualice. En este caso, incrementamos clicks en 1 cada vez que se llama, y si contador supera a multiplos, incrementamos incrementos en 1 y restablecemos contador a 0.")],-1),p="Vue 3 Lifecycles: onBeforeUpdate",D={__name:"before-update",setup(x){f({title:p,ogTitle:p});const s=n(0),c=n(0),l=n(2),r=n([]),d=n(0),v=()=>{s.value++};return h(()=>{d.value++,s.value>l.value&&(c.value++,s.value=0)}),k(l,(m,o)=>{r.value.push({multiplo:o,incrementos:c.value,previo:o,actual:m,clicks:d.value}),c.value=0,d.value=0}),(m,o)=>(i(),u("div",null,[y(e("select",{"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a)},S,512),[[B,l.value]]),e("h2",null," multiplos de "+t(l.value),1),e("p",null,"Contador: "+t(s.value),1),e("p",null,"Incrementos por multiplo: "+t(c.value),1),e("button",{onClick:v},"Incrementar contador"),r.value.length>0?(i(),u("div",V,[e("ul",null,[(i(!0),u(g,null,C(r.value,(a,_)=>(i(),u("li",{key:_}," multiplo: "+t(a.multiplo)+", incrementos: "+t(a.incrementos)+", clicks: "+t(a.clicks),1))),128))])])):U("",!0),q]))}};export{D as default};