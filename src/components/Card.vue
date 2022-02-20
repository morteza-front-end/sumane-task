<template>
  <div class="card-custom">
    <div
      class="title fn-2 text-center d-flex align-items-center justify-content-center"
      v-if="head"
    >
      <p class="text-dark">{{ text }}</p>
      <p class="text-warning">{{ title }}</p>
    </div>
    <div class="card-table col-12 " v-if="table">
      <div
        class="col-3 d-flex  flex-column"
      >
       <div class="btn  space hidden"></div>
        <div class="btn btn-warning mt-1 mb-2 fn-1">میلگرد</div>
        <div class="btn btn-warning mb-2 fn-1">قوطی و پروفیل</div>
        <div class="btn btn-warning mt-1 mb-2 fn-1">3ورق-ورق</div>
        <div class="btn btn-warning mt-1 mb-2 fn-1">تیرآهن</div>
        <div class="btn btn-warning mt-1 mb-2 fn-1">نبشی و ناودانی</div>
        <div class="btn btn-warning fn-1">لوله</div>
      </div>
      <div
        class="col-3 d-flex align-items-center justify-content-center flex-column mt-2 mb-auto"
      >
        <div class="btn btn-dark rounded-3 ">1ماهه</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mb-1">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-1">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 my-2">{{ price }}میلیون</div>
      </div>
      <div
        class="col-3 d-flex align-items-center justify-content-center flex-column mt-2 mb-auto"
      >
        <div class="btn btn-dark rounded-3 ">3ماهه</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mb-1">میلیون{{ price }}</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-1">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 my-2">{{ price }}میلیون</div>
      </div>
      <div
        class="col-3 d-flex align-items-center justify-content-center flex-column mt-2 mb-auto"
      >
        <div class="btn btn-dark rounded-3 ">6ماهه</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mb-1">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-1">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div @click="sum_price(price)" class="btn btn-transparent rounded-0 my-2">{{ price }}میلیون</div>
      </div>
      </div>
      <div class="notif pe-3 pb-2 " v-if="table">
          <div class="d-flex align-items-center">
              <div class="bg-warning rounded-circle point mt-1"></div>
              <p class="mb-0 me-1">
                  تمامی هزینه های اشتراک به تومان می باشد.
              </p>
          </div>
      </div>
      <div class="sum" v-if="table">
        <sum :sum="sum"/>
      </div>
  </div>
</template>

<script>
import sum from './Sum.vue';
export default {
  data(){
     return{
       sum:0,
     }
  },
  methods:{
   sum_price(price){
     this.sum =Number(this.sum)+ Number(price);
   }
  },
  props: ["title", "text", "price", "table", "head"],
  components:{
    sum,
  }
};
</script>

<style>
.hidden{
    opacity: 0;
}
.space{
    margin-top: 2rem !important;
}
.point{
    width: 10px;
    height: 10px;
    background: #ffcd39;
}
</style>
