<template>
<div class="main bg-main col-12 d-flex">
<div class="col-lg-4 col-sm-0 overflow-hidden">
  <div class="image_hand w-100 d-flex">
    <img src="@/assets/image/hand.png" class="hand" alt="">
    <img src="../assets/image/mobile.png" class="mobile" alt="">
  </div>
</div>
  <div class="col-lg-8 col-sm-12 d-flex flex-column mb-5">
   <card class="w-75 mx-auto mt-5 mb-3" :head="true" :title="`سامانه آهن`"  :text="`تعرفه ی اشتراک`" :table="false"/>
    <card class="w-90 mx-auto" :head="false" :price="'5'" :table="true"/>
</div>

</div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Shop',
components:{
  Card,
}
}
</script>

<style >
.w-90{
width: 90%;
}
</style>
