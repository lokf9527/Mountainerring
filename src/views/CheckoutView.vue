<script>
import { RouterLink } from 'vue-router';
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {
        products: [],
        user: {},
      },
      orderId: '',
    //   isLoading: false,
    //   isProcessing: false,
    };
  },
  components: { RouterLink },
  methods: {
    getOrder() {
      this.isLoading = true;
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.isLoading = false;
          const { order } = res.data;
          this.order = order;
        })
        .catch((err) => {
          alert(err.data.message)
          this.isLoading = false;
        });
    },
    payOrder() {
      this.isLoading = true;
      this.$http
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/pay/${this.orderId}`)
        .then(() => {
          this.isLoading = false;
          this.getOrder();
        })
        .catch((err) => {
          alert(err.data.message)
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
<template>
  <div class="my-5 mx-1 row justify-content-center w-100">
        <div class="col-md-6">
    <form @submit.prevent="payOrder">
      <div class="card rounded-0 py-4 mb-3">
        <div class="card-header border-bottom-0 bg-white px-4 py-0">
          <h2>訂單資訊</h2>
        </div>
        <div class="card-body px-4 py-0">
          <ul class="list-group list-group-flush">
            <li
              v-for="item in order.products"
              :key="item.id"
              class="list-group-item px-0"
            >
              <div class="d-flex mt-2">
                <div style="
                    width: 65px;
                    max-height: 60px;
                    background-size: cover;
                    background-position: center;
                  "
                  class="rounded-0 me-3"
                  :style="{ backgroundImage: `url(${item.product?.imageUrl})` }"
                >
              </div>
                <div class="w-100 d-flex flex-column">
                  <div class="d-flex justify-content-between fw-bold">
                    <h5>{{ item.product?.title }}</h5>
                    <p class="mb-0">x{{ item.qty }}</p>
                  </div>
                  <div class="d-flex justify-content-between mt-auto">
                    <p class="text-muted mb-0">
                      <small>
                        NT${{ item.product?.price }}
                      </small>
                    </p>
                    <p class="mb-0">
                      NT${{ item.product?.price}}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item px-0 pb-0">
              <table class="table text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">
                      Payment
                    </th>
                    <td class="text-end border-0 px-0 pt-0">信用卡</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-2">
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">
                  NT${{ order.total }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card rounded-0 py-4">
        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span :class="{ 'text-success': order.is_paid }">
                  {{ order.is_paid ? '付款完成' : '尚未付款' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"
        v-if="order.is_paid === false"
      >
        <RouterLink to="/" class="btn btn-primary"> 回首頁 </RouterLink>
        <button type="submit" class="btn btn-dark">確認付款</button>
      </div>
    </form>
    <div v-if="order.is_paid" class="text-end">
      <RouterLink to="/" class="btn btn-dark me-2 my-4"> 回首頁 </RouterLink>
    </div>
  </div>
    </div>
</template>