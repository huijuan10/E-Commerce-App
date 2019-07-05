<template>
  <div class="me">
    <backPage :title="title"></backPage>
    <router-view/>
    <ul class="iconList">
      <li>
        <router-link to="/me/systemNotification">
          <em class="systemNotification icon icon-xitongtongzhi "></em>
          <p>系统通知</p>
        </router-link>
      </li>
      <li>
        <router-link to="/me/funs">
          <em class="funs icon icon-wodefensi"></em>
          <p>我的粉丝</p>
        </router-link>
      </li>
      <li>
        <router-link to="/me/comment">
          <em class="comment icon icon-shoudaopinglun"></em>
          <p>收到评论</p>
        </router-link>
      </li>
      <li>
        <router-link to="/me/thumbsUp">
          <em class="thumbsUp icon icon-geiwodianzan"></em>
          <p>给我点赞</p>
        </router-link>
      </li>
    </ul> 
    <ul class="meassage-list" v-for="item in dataList" :key="item.num">
      <li>
          <img :src="item.headPicture">
          <div class="tip">
            <h3>{{item.name}}</h3>
            <h5>{{item.newLetter}}</h5>
          </div>
          <span class='right'>{{item.time}}</span>
      </li>
    </ul>     
  </div>
</template>

<script>
import backPage from '../components/me/backPage.vue'
export default {
  name: 'me', 
  created(){
    this.dataList=[{
      time:'09-18',
      name:'麦迪娜',
      headPicture:'http://n.sinaimg.cn/news/4803d74b/20190628/touxiang.png',
      newLetter:'在哪儿？'},
      {
      time:'09-18',
      name:'麦迪娜',
      headPicture:'http://n.sinaimg.cn/news/4803d74b/20190628/touxiang.png',
      newLetter:'在哪儿？'},
      {
      time:'09-18',
      name:'麦迪娜',
      headPicture:'http://n.sinaimg.cn/news/4803d74b/20190628/touxiang.png',
      newLetter:'在哪儿？'},
      {
      time:'09-18',
      name:'麦迪娜',
      headPicture:'http://n.sinaimg.cn/news/4803d74b/20190628/touxiang.png',
      newLetter:'在哪儿？'},
      {
      time:'09-18',
      name:'麦迪娜',
      headPicture:'http://n.sinaimg.cn/news/4803d74b/20190628/touxiang.png',
      newLetter:'在哪儿？'},
      {
      time:'09-19',
      name:'麦迪娜',
      headPicture:'http://n.sinaimg.cn/news/4803d74b/20190628/touxiang.png',
      newLetter:'在哪儿？'}
    ];
    this.$store.commit('IsfooterF');
  },
  components:{
    backPage
  },
  destroyed(){
    this.$store.commit('IsfooterT');
  },
  data(){
      return {
          msg:'me',
          title:'消息中心',
          dataList:this.dataList
      }
  }
}
</script>
<style scoped>
  .iconList em{display: block;}
  .iconList{display: flex; justify-content: space-between;margin:0.16rem 0.23rem 0;}
  .iconList li p{
    line-height: 0.18rem;font-size: 0.14rem;color: #142133;margin-top:0.08rem; 
  }
  .iconList li{margin-bottom: 0.24rem; }
  .meassage-list li{display: flex;margin: 0.16rem;justify-content: space-between;}
  .meassage-list img{
    width: 0.48rem;height: 0.48rem;margin-right: 0.12rem;-webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }
  .meassage-list .right{
    width: 0.8rem;height: 0.16rem;line-height: 0.16rem;font-size: 0.12rem;color: #9DA6B3;text-align: right;
  }
  .tip{flex-grow: 1;}
  .tip h3{
    font-size: 0.16rem;line-height: 0.22rem;height: 0.22rem;margin-bottom: 0.02rem;color: #142133;
  }
  .tip h5{
    font-size: 0.14rem;line-height: 0.20rem;height: 0.20rem;color: #9DA6B3;
  }
</style>