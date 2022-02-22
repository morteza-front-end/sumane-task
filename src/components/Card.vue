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
        <div class="btn btn-warning mt-1 mb-2 fn-1" id="item1">میلگرد</div>
        <div class="btn btn-warning mb-2 fn-1" id="item2">قوطی و پروفیل</div>
        <div class="btn btn-warning mt-1 mb-2 fn-1" id="item3">3ورق-ورق</div>
        <div class="btn btn-warning mt-1 mb-2 fn-1" id="item4">تیرآهن</div>
        <div class="btn btn-warning mt-1 mb-2 fn-1" id="item5">نبشی و ناودانی</div>
        <div class="btn btn-warning fn-1" id="item6">لوله</div>
      </div>
      <div
        class="col-3 d-flex align-items-center justify-content-center flex-column mt-2 mb-auto"
      >
        <div class="btn btn-dark rounded-3" id="period1">1ماهه</div>
        <div @click="sum_price(price,1, 1)" class="btn btn-transparent rounded-0 mb-1">{{ price }}میلیون</div>
        <div  @click="sum_price(price,1,2)" class="btn btn-transparent rounded-0 mt-1">{{ price }}میلیون</div>
        <div  @click="sum_price(price,1,3)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,1,4)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,1,5)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,1,6)" class="btn btn-transparent rounded-0 my-2">{{ price }}میلیون</div>
      </div>
      <div
        class="col-3 d-flex align-items-center justify-content-center flex-column mt-2 mb-auto"
      >
        <div class="btn btn-dark rounded-3" id="period3">3ماهه</div>
        <div  @click="sum_price(price,3,1)" class="btn btn-transparent rounded-0 mb-1">میلیون{{ price }}</div>
        <div  @click="sum_price(price,3,2)" class="btn btn-transparent rounded-0 mt-1">{{ price }}میلیون</div>
        <div  @click="sum_price(price,3,3)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,3,4)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,3,5)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,3,6)" class="btn btn-transparent rounded-0 my-2">{{ price }}میلیون</div>
      </div>
      <div
        class="col-3 d-flex align-items-center justify-content-center flex-column mt-2 mb-auto"
      >
        <div class="btn btn-dark rounded-3" id="period6">6ماهه</div>
        <div  @click="sum_price(price,6,1)" class="btn btn-transparent rounded-0 mb-1">{{ price }}میلیون</div>
        <div  @click="sum_price(price,6,2)" class="btn btn-transparent rounded-0 mt-1">{{ price }}میلیون</div>
        <div  @click="sum_price(price,6,3)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,6,4)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,6,5)" class="btn btn-transparent rounded-0 mt-2">{{ price }}میلیون</div>
        <div  @click="sum_price(price,6,6)" class="btn btn-transparent rounded-0 my-2">{{ price }}میلیون</div>
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
      <div class="sum px-3" v-if="table">
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
   sum_price(price,period,number){
      let id = `item${number}`;
      let item =document.getElementById(`item${number}`).innerText;
      let time = document.getElementById(`period${period}`).innerText;
      let data ;
      let i=0;
    if(1){

    }else{

    }
      for(i;i<1;i++){
          data= {item:item,period:time,price:price,count:1};
      }
     this.$store.dispatch('update_data',data)
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
