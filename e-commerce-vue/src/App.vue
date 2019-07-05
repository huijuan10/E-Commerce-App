<template>
  <div id="app">
    <router-view/>
    <!-- {{store.state.isfooter}} -->
    <ul class="footer" v-show="$store.state.isfooter">
      <li>
        <router-link to="/">
          <em class="icon icon-home icon-home-v"></em>
        </router-link>
      </li>
      <li>
        <router-link to="/find">
          <em class="icon icon-faxian"></em>
        </router-link>
      </li>
      <li>
        <em class="icon icon-jiahao"></em>
      </li>
      <li>
        <router-link to="/mall">
          <em class="icon icon-shangcheng"></em>
        </router-link>
      </li>
      <li>
        <router-link to="/me">
          <em class="icon icon-wode"></em>
        </router-link>
      </li>
    </ul>    
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="css">
@import './assets/css/base.css';
</style>
<style lang="scss">
  @import './assets/css/sprite.scss';
  .footer{
    display: flex;
    justify-content: space-between; 
    position: fixed;width: 7rem;
    bottom: 0;
    left: 0.25rem;
  }
  .footer li em{display: block;}
  .footer li p{
  }
  .router-link-exact-active .icon-home{
    @extend .icon-home-v
  }
  .router-link-exact-active .icon-faxian{
    @extend .icon-faxian-v
  }
  .router-link-exact-active .icon-wode{
    @extend .icon-wode-v
  }
  .router-link-exact-active .icon-shangcheng{
    @extend .icon-shangcheng-v
  }

</style>

