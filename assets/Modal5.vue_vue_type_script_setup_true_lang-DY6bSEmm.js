var m=(n,o,t)=>new Promise((s,e)=>{var c=a=>{try{r(t.next(a))}catch(i){e(i)}},p=a=>{try{r(t.throw(a))}catch(i){e(i)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(c,p);r((t=t.apply(n,o)).next())});import{B as u}from"./index-LcQyhYLl.js";import{_ as d}from"./BasicTable.vue_vue_type_script_setup_true_lang-CHt_2TIc.js";import"./TableImg.vue_vue_type_style_index_0_lang-Dxc1dIUr.js";import"./componentMap-CsEIRQit.js";import{u as f}from"./useTable-Bikp9_UA.js";import{getBasicColumns as _}from"./tableData-CcuW_ACc.js";import{d as g}from"./table-D6zwz7Lv.js";import{d as h,f as T,Z as b,a8 as w,a9 as k,k as B,u as l,ac as x,y}from"./vue-COhTiP8A.js";const F=h({__name:"Modal5",setup(n){const[o]=f({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:g,columns:_(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"},onColumnsChange:e=>{},showSelectionBar:!0}),t=T(),s=()=>m(this,null,function*(){var e;yield y(),(e=t.value)==null||e.redoHeight()});return(e,c)=>(b(),w(l(u),x(e.$attrs,{title:"Modal Title",helpMessage:["提示1","提示2"],width:"1000px",onFullscreen:s}),{default:k(()=>[B(l(d),{onRegister:l(o),ref_key:"selectTable",ref:t},null,8,["onRegister"])]),_:1},16))}});export{F as _};
