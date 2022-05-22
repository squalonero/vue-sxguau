const { createApp, onMounted } = require('vue');
import App from "./App.vue";
import router from './router/'

const Vue = createApp(App)

/**
 * Vue store.
 * Store global variables.
 * May be used to store states.
 * It is global, it is reactive.
 *
 * 1: map data
 */
 var store = new Vue({
  data: {
      icons: [
        {name: 'heart', color: '#b33641'},
        {name: 'power', color: '#a88d1e'},
        {name: 'number', color: '#1e2aa8'},
      ],
  }
})
/**
* 2: define install method which connects store to a new global variable we have called `$store`
*/
store.install = function ()
{
  Object.defineProperty(Vue.prototype, '$store', {
      get() { return store }
  })
}
/**
* 3: tell vue to use our store
*/
Vue.use(store);

Vue.use(router)

Vue.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
      // Focus the element
      el.focus()
    }
  })


  Vue.mount("#app")

