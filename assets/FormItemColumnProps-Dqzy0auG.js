import{e as d}from"./formItemPropsConfig-Cul5jhJA.js";import C from"./RuleProps-BGkQg4tg.js";import{u as y}from"./useFormDesignState-CD9GraNJ.js";import{aG as _,E as I,a2 as P,Z as b,ax as k,a3 as v,W as F,ay as g,bn as h}from"./antd-D1Pawy5U.js";import{d as E,a7 as m,Z as r,_ as n,a8 as s,a9 as p,F as w,aa as S,ai as $,ac as A,ab as a}from"./vue-COhTiP8A.js";import{c as B}from"./entry/index-Dy0aR2JZ-1710835431286.js";import"./formItemConfig-CbzsnOJl.js";import"./componentMap-CsEIRQit.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DSOUf0Gu.js";import"./index-LcQyhYLl.js";import"./useWindowSizeFn-CutXC9ZC.js";import"./uuid-D0SLUWHI.js";import"./useSortable-ZPQo4Lqd.js";import"./download-Tar1Litv.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPVAQYla.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BORl44eZ.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-DP5hCNHU.js";import"./index-qdDPZvg2.js";import"./index-DDVkWObG.js";const D=E({name:"FormItemProps",components:{RuleProps:C,Empty:_,Input:I,Form:P,FormItem:b,Switch:k,Checkbox:v,Select:F,Slider:g},setup(){const{formConfig:o}=y();return{baseItemColumnProps:d,formConfig:o,showProps:t=>t&&h(t)?!t.includes(o.value.currentItem.component):!0}}}),U={class:"properties-content"},Z={key:0,class:"properties-body"};function G(o,i,t,L,N,R){const c=m("Empty"),l=m("FormItem"),u=m("Form");return r(),n("div",U,[o.formConfig.currentItem?(r(),n("div",Z,[o.formConfig.currentItem.key?(r(),s(u,{key:1,"label-align":"left",layout:"vertical"},{default:p(()=>[(r(!0),n(w,null,S(o.baseItemColumnProps,e=>(r(),n("div",{key:e.name},[o.showProps(e.exclude)?(r(),s(l,{key:0,label:e.label},{default:p(()=>[o.formConfig.currentItem.colProps&&e.component?(r(),s($(e.component),A({key:0,class:"component-props"},e.componentProps,{value:o.formConfig.currentItem.colProps[e.name],"onUpdate:value":f=>o.formConfig.currentItem.colProps[e.name]=f}),null,16,["value","onUpdate:value"])):a("",!0)]),_:2},1032,["label"])):a("",!0)]))),128))]),_:1})):(r(),s(c,{key:0,class:"hint-box",description:"未选择控件"}))])):a("",!0)])}const ao=B(D,[["render",G]]);export{ao as default};
