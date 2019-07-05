<template>
  <div class="systemNotification">
     <backPage :title="title"></backPage>   
  </div>
</template>

<script>
import backPage from './backPage.vue'
export default {
  name: 'systemNotification', 
  components:{
    backPage
  }, 
  data(){
      return {
          title:'系统通知'
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