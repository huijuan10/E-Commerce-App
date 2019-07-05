<template>
  <div class="comment">
     <backPage :title="title"></backPage>   
  </div>
</template>

<script>
import backPage from './backPage.vue'
export default {
  name: 'comment',
  components:{
    backPage
  },  
  data(){
      return {
          title:'收到评论'
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