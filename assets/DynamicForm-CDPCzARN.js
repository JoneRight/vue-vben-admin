var _=(h,m,n)=>new Promise((f,i)=>{var u=l=>{try{p(n.next(l))}catch(s){i(s)}},b=l=>{try{p(n.throw(l))}catch(s){i(s)}},p=l=>l.done?f(l.value):Promise.resolve(l.value).then(u,b);p((n=n.apply(h,m)).next())});import{_ as P}from"./BasicForm.vue_vue_type_script_setup_true_lang-BEViVJAO.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DGtOP0jZ.js";import"./componentMap-CsEIRQit.js";import{u as C}from"./useForm-C490ds6u.js";import{C as g}from"./entry/index-Dy0aR2JZ-1710835431286.js";import{P as W}from"./index-CTcz7pYd.js";import{d as F,a7 as S,Z as y,a8 as v,a9 as t,$ as I,k as o,G as d,u as a}from"./vue-COhTiP8A.js";import"./FormItem.vue_vue_type_script_lang-zwPN7hPp.js";import"./helper-Bs41t2X3.js";import"./antd-D1Pawy5U.js";import"./index-LcQyhYLl.js";import"./useWindowSizeFn-CutXC9ZC.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DSOUf0Gu.js";import"./uuid-D0SLUWHI.js";import"./useSortable-ZPQo4Lqd.js";import"./download-Tar1Litv.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPVAQYla.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BORl44eZ.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-DP5hCNHU.js";import"./index-qdDPZvg2.js";import"./useContentViewHeight-9IN_oFUs.js";import"./onMountedOrActivated-GpUdBAv_.js";const N={class:"mb-4"},oe=F({__name:"DynamicForm",setup(h){const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],n=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:r=>{e.f2=r.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"值改变时执行查询,查看控制台",onChange:()=>_(this,null,function*(){const{validate:r}=e;yield r()})})}],[f,{updateSchema:i,appendSchemaByField:u,removeSchemaByField:b}]=C({labelWidth:120,schemas:m,actionColOptions:{span:24}}),[p]=C({labelWidth:120,schemas:n,actionColOptions:{span:24}});function l(){i({field:"field3",label:"字段3 New"})}function s(){i([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])}function k(){u({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")}function w(){b("field11")}return(e,r)=>{const c=S("a-button");return y(),v(a(W),{title:"动态表单示例"},{default:t(()=>[I("div",N,[o(c,{onClick:l,class:"mr-2"},{default:t(()=>[d(" 更改字段3label ")]),_:1}),o(c,{onClick:s,class:"mr-2"},{default:t(()=>[d(" 同时更改字段3,4label ")]),_:1}),o(c,{onClick:k,class:"mr-2"},{default:t(()=>[d(" 往字段3后面插入字段10 ")]),_:1}),o(c,{onClick:w,class:"mr-2"},{default:t(()=>[d(" 删除字段11 ")]),_:1})]),o(a(g),{title:"动态表单示例,动态根据表单内其他值改变"},{default:t(()=>[o(a(P),{onRegister:a(f)},null,8,["onRegister"])]),_:1}),o(a(g),{class:"mt-5",title:"componentProps动态改变"},{default:t(()=>[o(a(P),{onRegister:a(p)},null,8,["onRegister"])]),_:1})]),_:1})}}});export{oe as default};
