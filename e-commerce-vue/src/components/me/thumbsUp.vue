<template>
  <div class="thumbsUp">
     <backPage :title="title"></backPage>
     <div class="grow">
       <div class="left"></div>
       <div class="right"></div>
     </div>   
  </div>
</template>

<script>
import backPage from './backPage.vue'
export default {
  name: 'thumbsUp', 
  components:{
    backPage
  },
  data(){
      return {
          msg:'点赞',
          title:'给我点赞'
      }
  }
}
</script>
<style scoped>
.grow{
  display: flex;
  width: 6.9rem;
  margin: 0 auto;
  background: red;
  height: 3rem;
}
.left{
  width: 2rem;
  height: 3rem;
  margin-right: 10px;
  background: green;
}
.right{
  height: 3rem;
  flex-grow: 1;
  background: blue;
}
</style>