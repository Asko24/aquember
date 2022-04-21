import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAm0-V9k6vS0YznAIxZnVZWxluj3tv8xeY",
  authDomain: "aquemberhydrationapp.firebaseapp.com",
  projectId: "aquemberhydrationapp",
  storageBucket: "aquemberhydrationapp.appspot.com",
  messagingSenderId: "54566582789",
  appId: "1:54566582789:web:914dacc5747b836aebfa6c"
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')


