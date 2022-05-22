const { createApp, onMounted } = require('vue');
import App from "./App.vue";
import router from './router/'
import { createPinia } from 'pinia'

const Vue = createApp(App).use(createPinia())

Vue.use(router)

Vue.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
      // Focus the element
      el.focus()
    }
  })


Vue.mount("#app")

