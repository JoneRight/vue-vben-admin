import{C as i,a as E}from"./entry/index-Dy0aR2JZ-1710835431286.js";import{P as I}from"./index-CTcz7pYd.js";import{d as x,a7 as y,Z as N,a8 as L,a9 as e,k as n,u as r,G as s}from"./vue-COhTiP8A.js";import"./antd-D1Pawy5U.js";import"./useContentViewHeight-9IN_oFUs.js";import"./useWindowSizeFn-CutXC9ZC.js";import"./onMountedOrActivated-GpUdBAv_.js";const z=x({__name:"index",setup(B){const{createMessage:c,createConfirm:u,createSuccessModal:m,createInfoModal:f,createErrorModal:g,createWarningModal:p,notification:C}=E(),{info:k,success:w,warning:_,error:M}=c;function v(){c.loading("Loading...")}function l(d){u({iconType:d,title:"Tip",content:"content message..."})}function T(){m({title:"Tip",content:"content message..."})}function $(){g({title:"Tip",content:"content message..."})}function S(){p({title:"Tip",content:"content message..."})}function W(){f({title:"Tip",content:"content message..."})}function b(){C.success({message:"Tip",description:"content message..."})}return(d,o)=>{const t=y("a-button");return N(),L(r(I),{title:"消息示例"},{default:e(()=>[n(r(i),{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:e(()=>[n(t,{onClick:o[0]||(o[0]=a=>r(k)("Info message")),class:"mr-2"},{default:e(()=>[s(" Info ")]),_:1}),n(t,{onClick:o[1]||(o[1]=a=>r(w)("Success message")),class:"mr-2",color:"success"},{default:e(()=>[s(" Success ")]),_:1}),n(t,{onClick:o[2]||(o[2]=a=>r(_)("Warning message")),class:"mr-2",color:"warning"},{default:e(()=>[s(" Warning ")]),_:1}),n(t,{onClick:o[3]||(o[3]=a=>r(M)("Error message")),class:"mr-2",color:"error"},{default:e(()=>[s(" Error ")]),_:1}),n(t,{onClick:v,class:"mr-2",type:"primary"},{default:e(()=>[s(" Loading ")]),_:1})]),_:1}),n(r(i),{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:e(()=>[n(t,{onClick:o[4]||(o[4]=a=>l("info")),class:"mr-2"},{default:e(()=>[s(" Info ")]),_:1}),n(t,{onClick:o[5]||(o[5]=a=>l("warning")),color:"warning",class:"mr-2"},{default:e(()=>[s(" Warning ")]),_:1}),n(t,{onClick:o[6]||(o[6]=a=>l("success")),color:"success",class:"mr-2"},{default:e(()=>[s(" Success ")]),_:1}),n(t,{onClick:o[7]||(o[7]=a=>l("error")),color:"error",class:"mr-2"},{default:e(()=>[s(" Error ")]),_:1})]),_:1}),n(r(i),{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:e(()=>[n(t,{onClick:W,class:"mr-2"},{default:e(()=>[s(" Info ")]),_:1}),n(t,{onClick:T,color:"success",class:"mr-2"},{default:e(()=>[s(" Success ")]),_:1}),n(t,{onClick:$,color:"error",class:"mr-2"},{default:e(()=>[s(" Error ")]),_:1}),n(t,{onClick:S,color:"warning",class:"mr-2"},{default:e(()=>[s(" Warning ")]),_:1})]),_:1}),n(r(i),{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification 用法与上面一致"},{default:e(()=>[n(t,{onClick:b,color:"success",class:"mr-2"},{default:e(()=>[s(" Success ")]),_:1})]),_:1})]),_:1})}}});export{z as default};
