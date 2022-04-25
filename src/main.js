import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import jquery from './jquery.js'
// import bootstrap from './bootstrap.min.js';
// import bootstrap from Bootstrap
import 'bootstrap';
//Vue.use(BootstrapVue)
//import 'bootstrap';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
//import 'popper'
//import 'bootstrap'
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAm0-V9k6vS0YznAIxZnVZWxluj3tv8xeY",
  authDomain: "aquemberhydrationapp.firebaseapp.com",
  projectId: "aquemberhydrationapp",
  storageBucket: "aquemberhydrationapp.appspot.com",
  messagingSenderId: "54566582789",
  appId: "1:54566582789:web:914dacc5747b836aebfa6c"
};

initializeApp(firebaseConfig);

createApp(App).use(router).use(store).mount('#app')

