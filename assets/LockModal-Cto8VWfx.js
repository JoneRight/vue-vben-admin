var _=(u,s,o)=>new Promise((l,m)=>{var p=a=>{try{r(o.next(a))}catch(n){m(n)}},d=a=>{try{r(o.throw(a))}catch(n){m(n)}},r=a=>a.done?l(a.value):Promise.resolve(a.value).then(p,d);r((o=o.apply(u,s)).next())});import{f as $,l as B,h as I}from"./entry/index-Dy0aR2JZ-1710835431286.js";import{a as C,B as L}from"./index-LcQyhYLl.js";import{_ as M}from"./BasicForm.vue_vue_type_script_setup_true_lang-BEViVJAO.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DGtOP0jZ.js";import"./componentMap-CsEIRQit.js";import{u as N}from"./useForm-C490ds6u.js";import{u as R}from"./lock-BKzc5PDR.js";import{h as b}from"./header-OZa5fSDc.js";import{d as x,c as f,a7 as P,Z as F,a8 as U,a9 as h,$ as c,a1 as i,u as e,a0 as k,k as g,G as V,ac as D}from"./vue-COhTiP8A.js";import"./antd-D1Pawy5U.js";import"./useWindowSizeFn-CutXC9ZC.js";import"./FormItem.vue_vue_type_script_lang-zwPN7hPp.js";import"./helper-Bs41t2X3.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DSOUf0Gu.js";import"./uuid-D0SLUWHI.js";import"./useSortable-ZPQo4Lqd.js";import"./download-Tar1Litv.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPVAQYla.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BORl44eZ.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-DP5hCNHU.js";import"./index-qdDPZvg2.js";const G=["src"],pe=x({name:"LockModal",__name:"LockModal",setup(u){const{t:s}=I(),{prefixCls:o}=$("header-lock-modal"),l=B(),m=R(),p=f(()=>{var t;return(t=l.getUserInfo)==null?void 0:t.realName}),[d,{closeModal:r}]=C(),[a,{validate:n,resetFields:v}]=N({showActionButtonGroup:!1,schemas:[{field:"password",label:s("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]}),w=()=>_(this,null,function*(){const{password:t=""}=yield n();r(),m.setLockInfo({isLock:!0,pwd:t}),yield v()}),y=f(()=>{const{avatar:t}=l.getUserInfo;return t||b});return(t,q)=>{const S=P("a-button");return F(),U(e(L),D({footer:null,title:e(s)("layout.header.lockScreen")},t.$attrs,{class:e(o),onRegister:e(d)}),{default:h(()=>[c("div",{class:i(`${e(o)}__entry`)},[c("div",{class:i(`${e(o)}__header`)},[c("img",{src:y.value,class:i(`${e(o)}__header-img`)},null,10,G),c("p",{class:i(`${e(o)}__header-name`)},k(p.value),3)],2),g(e(M),{onRegister:e(a)},null,8,["onRegister"]),c("div",{class:i(`${e(o)}__footer`)},[g(S,{type:"primary",block:"",class:"mt-2",onClick:w},{default:h(()=>[V(k(e(s)("layout.header.lockScreenBtn")),1)]),_:1})],2)],2)]),_:1},16,["title","class","onRegister"])}}});export{pe as default};
