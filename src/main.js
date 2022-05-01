const { createApp, onMounted } = require('vue');
import App from "./App.vue";



const Vue = createApp(App)

Vue.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
      // Focus the element
      el.focus()
    }
  })

  Vue.mount("#app")

