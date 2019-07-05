import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
Vue.use(Vuex);
const store=new Vuex.Store({
	state:{
		isfooter:true
	},
	mutations:{
		IsfooterF(state){
			state.isfooter=false;
		},
		IsfooterT(state){
			state.isfooter=true;
		}
	}
}) 
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
  computed:{
  	count(){
  		return this.store.state.isfooter;
  	}
  },
}).$mount('#app')
