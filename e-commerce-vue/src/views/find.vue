<template>
  <div class="hello">
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
export default {
  name: 'me',  
  data(){
      return {
          msg:'find'
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