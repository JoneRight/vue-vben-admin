import{_ as d}from"./BasicTable.vue_vue_type_script_setup_true_lang-CHt_2TIc.js";import"./TableImg.vue_vue_type_style_index_0_lang-Dxc1dIUr.js";import"./componentMap-CsEIRQit.js";import{u as _}from"./useTable-Bikp9_UA.js";import{getBasicColumns as f,getTreeTableData as b}from"./tableData-CcuW_ACc.js";import{d as k,a7 as C,Z as y,_ as x,k as e,a9 as o,u as t,G as p}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-BEViVJAO.js";import"./FormItem.vue_vue_type_script_lang-zwPN7hPp.js";import"./entry/index-Dy0aR2JZ-1710835431286.js";import"./antd-D1Pawy5U.js";import"./helper-Bs41t2X3.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DGtOP0jZ.js";import"./index-LcQyhYLl.js";import"./useWindowSizeFn-CutXC9ZC.js";import"./useForm-C490ds6u.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DSOUf0Gu.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-ZPQo4Lqd.js";import"./download-Tar1Litv.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPVAQYla.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BORl44eZ.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-DP5hCNHU.js";import"./index-qdDPZvg2.js";import"./select-CpLadKX2.js";const T={class:"p-4"},X=k({__name:"TreeTable",setup(g){const[m,{expandAll:s,collapseAll:l,expandRows:n,collapseRows:c}]=_({title:"树形表格",isTreeTable:!0,accordion:!0,rowSelection:{type:"checkbox",getCheckboxProps(a){return a.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:f(),dataSource:b(),rowKey:"id",showSelectionBar:!0});return(a,r)=>{const i=C("a-button");return y(),x("div",T,[e(t(d),{onRegister:t(m)},{toolbar:o(()=>[e(i,{type:"primary",onClick:t(s)},{default:o(()=>[p("展开全部")]),_:1},8,["onClick"]),e(i,{type:"primary",onClick:t(l)},{default:o(()=>[p("折叠全部")]),_:1},8,["onClick"]),e(i,{type:"primary",onClick:r[0]||(r[0]=u=>t(c)(["4"]))},{default:o(()=>[p("折叠第五行")]),_:1}),e(i,{type:"primary",onClick:r[1]||(r[1]=u=>t(n)(["4"]))},{default:o(()=>[p("展开第五行")]),_:1})]),_:1},8,["onRegister"])])}}});export{X as default};
