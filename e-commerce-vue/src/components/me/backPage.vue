<template>
  <div class="backTop">
    <em @click="backToP">＜</em>
    <h1>{{title}}</h1>    
  </div>
</template>
<script>
export default {
  name: 'backPage', 
  props:['title'],
  data(){
      return {
      }
  },
  methods:{
    backToP(){
      window.history.go(-1);
    }
  }
}
</script>
<style scoped>
.backTop{
  position: relative;
  height: 0.44rem;
  font-weight: bold;
  /*width: 100%;
  top:0;
  left:0;
  position: fixed;*/
}
h1{
    font-size: 0.24rem;
    color: #142133;
    text-align: center;
    line-height: 0.44rem;
    height: 44px;
    font-weight: bold;
  }
.backTop em{
  position: absolute;
  width: 0.17rem;
  height: 0.17rem;
  left: 0.16rem;
  top:0.14rem;
  line-height: 0.17rem;
}
</style>