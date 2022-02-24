<template>
  <div class="sum">
    <div class="card d-flex flex-row px-3 py-2">
      <span> جمع کل: </span>
      <span>{{ sum }}</span>
    </div>
    <div class="buttons">
      <button
        class="btn  bg-black text-white fn-1"
        @click="showModal = true"
        :disabled="disable"
      >
        نمایش جزئیات
      </button>
    </div>
    <Modal v-model="showModal">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">نام محصول</th>
            <th scope="col">مدت اشتراک</th>
            <th scope="col">تعداد</th>
            <th scope="col">قیمت</th>
          
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(item,index) in $store.state.cart" :key="index">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ item.item }}</td>
            <td class="pe-3">{{ item.period }}</td>
            <td class="pe-3">{{ item.count }}</td>
            <td class="pe-3">{{ item.count*item.price }}</td>
          </tr>
        </tbody>
      </table>
       <div class="px-5 d-flex justify-content-between align-items-center">
                 <span>جمع کل:</span>
                 <span> {{sum}}</span>
              </div>
        <div class="buttons">
            <div class="btn bg-black text-white">
                پرداخت
            </div>
        </div>
    </Modal>
  </div>
</template>

<script>
import VueModal from "@kouts/vue-modal";
export default {
  data() {
    return {
      showModal: false,
    };
  },
  props: ["sum"],
  computed: {
    disable() {
      if (this.sum > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  components: {
    Modal: VueModal,
  },
};
</script>

<style>
.buttons {
  margin: 15px 5px;
  direction: ltr;
}
</style>
