import{_ as p,b as _,m as b,a as u,r as h,o as l,c as a,d as t,F as m,h as f,t as n,i as g,v as C,e as w,w as x,f as y}from"./index-2e63b84b.js";import{c}from"./cart-7f7b5f51.js";const v={data(){return{code:""}},methods:{..._(c,["getCart","updateCart","deleteCart","deleteAllCart","addCouponCode"])},computed:{...b(c,["cart","total","final_total"]),discount(){return(this.total-this.final_total).toFixed(2)}},components:{RouterLink:u},mounted(){this.getCart()}},k={class:"container"},N={class:"mt-3"},T=t("h3",{class:"mt-3 mb-4"},"購物車",-1),V={class:"row"},L={class:"col-md-8"},$={class:"text-end"},A={class:"table"},B=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"商品資料"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0"},"價格"),t("th",{scope:"col",class:"border-0"})])],-1),F={class:"border-bottom border-top"},R={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},S=["src","alt"],j={class:"mb-0 fw-bold ms-3 d-inline-block"},D={class:"border-0 align-middle",style:{"max-width":"160px"}},E={class:"input-group pe-5"},U={class:"input-group-prepend"},q=["onClick"],I=t("i",{class:"bi bi-dash-lg"},null,-1),M=[I],P=["value"],z={class:"input-group-append"},G=["onClick"],H=t("i",{class:"bi bi-plus-lg"},null,-1),J=[H],K={class:"border-0 align-middle"},O={class:"mb-0 ms-auto"},Q={class:"border-0 align-middle"},W=["onClick"],X=t("i",{class:"bi bi-x-lg"},null,-1),Y=[X],Z={class:"col-md-4"},tt={class:"border p-4 mb-4"},ot=t("h4",{class:"fw-bold mb-4"},"訂單資訊",-1),st={class:"table text-muted border-bottom"},et=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),nt={class:"text-end border-0 px-0 pt-4"},dt=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"信用卡")],-1),lt=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"折扣金額",-1),at={class:"text-end border-0 px-0 pt-0 pb-4"},ct={class:"input-group mb-3 input-group-sm"},rt={class:"input-group-append"},it={class:"d-flex justify-content-between mt-4"},pt=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),_t={class:"mb-0 h4 fw-bold"};function bt(s,e,ut,ht,d,r){const i=h("RouterLink");return l(),a("div",k,[t("div",N,[T,t("div",V,[t("div",L,[t("div",$,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:e[0]||(e[0]=()=>s.deleteAllCart())},"清空購物車")]),t("table",A,[B,(l(!0),a(m,null,f(s.cart,o=>(l(),a("tbody",{key:o.id},[t("tr",F,[t("th",R,[t("img",{src:o.product.imageUrl,alt:o.product.title,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,S),t("p",j,n(o.product.title),1)]),t("td",D,[t("div",E,[t("div",U,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:()=>s.updateCart(o,"reduce")},M,8,q)]),t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:o.qty},null,8,P),t("div",z,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:()=>s.updateCart(o,"increase")},J,8,G)])])]),t("td",K,[t("p",O,"NT$"+n(o.product.price),1)]),t("td",Q,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:()=>s.deleteCart(o)},Y,8,W)])])]))),128))])]),t("div",Z,[t("div",tt,[ot,t("table",st,[t("tbody",null,[t("tr",null,[et,t("td",nt,"NT$"+n(s.final_total),1)]),dt,t("tr",null,[lt,t("td",at,"NT$"+n(r.discount),1)])])]),t("div",ct,[g(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼 VIP777","onUpdate:modelValue":e[1]||(e[1]=o=>d.code=o)},null,512),[[C,d.code]]),t("div",rt,[t("button",{class:"btn btn-outline-primary",type:"button",onClick:e[2]||(e[2]=()=>s.addCouponCode(d.code))}," 套用優惠碼 ")])]),t("div",it,[pt,t("p",_t,"NT$"+n(s.final_total),1)]),w(i,{to:"/form",class:"btn btn-dark w-100 mt-4"},{default:x(()=>[y("前往結帳")]),_:1})])])])])])}const gt=p(v,[["render",bt]]);export{gt as default};