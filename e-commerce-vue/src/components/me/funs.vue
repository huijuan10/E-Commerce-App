<template>
  <div class="funs">
     <backPage :title="title"></backPage>   
  </div>
</template>

<script>
import backPage from './backPage.vue'
export default {
  name: 'funs', 
  components:{
    backPage
  }, 
  data(){
      return {
          title:'我的粉丝'
      }
  }
}
</script>
<style scoped>
.hello{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>