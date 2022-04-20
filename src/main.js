import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


// Tworzona jest instancja Vue.
// Renderowanie komponentu najwyższego poziomu przeniesione zostaje do App.vue.
// Instancja Vue zostaje powiązana z elementem #app znajdującym się w pliku index.html.