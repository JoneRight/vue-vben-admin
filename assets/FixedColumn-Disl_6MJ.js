import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-CHt_2TIc.js";import"./TableImg.vue_vue_type_style_index_0_lang-Dxc1dIUr.js";import{a as l}from"./componentMap-CsEIRQit.js";import{u as s}from"./useTable-Bikp9_UA.js";import{d as c}from"./table-D6zwz7Lv.js";import{d as u,Z as o,_ as f,k as _,a9 as x,a8 as b,u as t,ab as h}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-BEViVJAO.js";import"./FormItem.vue_vue_type_script_lang-zwPN7hPp.js";import"./entry/index-Dy0aR2JZ-1710835431286.js";import"./antd-D1Pawy5U.js";import"./helper-Bs41t2X3.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DGtOP0jZ.js";import"./index-LcQyhYLl.js";import"./useWindowSizeFn-CutXC9ZC.js";import"./useForm-C490ds6u.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DSOUf0Gu.js";import"./useFormItem-BQ20sB9v.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-ZPQo4Lqd.js";import"./download-Tar1Litv.js";import"./base64Conver-bBv-IO2K.js";import"./index-DPVAQYla.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BORl44eZ.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-DP5hCNHU.js";import"./index-qdDPZvg2.js";const w={class:"p-4"},U=u({__name:"FixedColumn",setup(C){const n=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=s({title:"TableAction组件及固定列示例",api:c,columns:n,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(e){}function m(e){}return(e,I)=>(o(),f("div",w,[_(t(p),{onRegister:t(r)},{bodyCell:x(({column:d,record:i})=>[d.key==="action"?(o(),b(t(l),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:a.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,i)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{U as default};
