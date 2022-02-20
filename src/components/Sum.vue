<template>
  <div class="sum">
      <div class="card d-flex flex-row px-3 py-2">
          <span> جمع کل: </span>
          <span>{{sum}}</span>
      </div>
      <div class="buttons ">
          <button class="btn btn-primary fn-1" :disabled="disable"> پرداخت </button>
      </div>
  </div>
</template>

<script>
export default {
props:['sum'],
computed:{
    disable(){
        if(this.sum>0){
            return false
        } else{
            return true
        }
    }
}

}
</script>

<style>
.buttons{
    margin: 15px 5px;
    direction: ltr;
}
</style>