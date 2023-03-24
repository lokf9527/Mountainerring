import{j as r,k as o}from"./index-2e63b84b.js";const{VITE_URL:s,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"ph",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},l=r("cart",{state:()=>({cart:{},total:0,final_total:0}),actions:{getCart(){o.get(`${s}/v2/api/${c}/cart`).then(t=>{this.cart=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total})},addToCart(t,a=1){const e={data:{product_id:t,qty:a}};o.post(`${s}/v2/api/${c}/cart`,e).then(()=>{this.getCart()})},updateCart(t,a){switch(a){case"reduce":t.qty>1&&(t.qty-=1);break;case"increase":t.qty+=1;break}const e={product_id:t.product.id,qty:t.qty};this.loadingItem=t.id,o.put(`${s}/v2/api/${c}/cart/${t.id}`,{data:e}).then(()=>{this.getCart(),this.loadingItem=""}).catch(d=>{alert(d.data.message)})},deleteCart(t){this.loadingItem=t.id,o.delete(`${s}/v2/api/${c}/cart/${t.id}`).then(()=>{this.getCart(),this.loadingItem=""}).catch(a=>{alert(a.data.message)})},deleteAllCart(){o.delete(`${s}/v2/api/${c}/carts`).then(()=>{alert("已清空購物車"),this.getCart()}).catch(t=>{alert(t.data.message)})},addCouponCode(t){const a={code:t};o.post(`${s}/v2/api/${c}/coupon`,{data:a}).then(e=>{console.log(e),this.getCart(),this.coupon_code=""}).catch(e=>{console.log(e)})}},getters:{}});export{l as c};
