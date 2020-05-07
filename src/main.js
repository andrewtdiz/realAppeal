import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    appealSection: 0,
    canSubmitThree: false,
    canSubmitFour: false,
    savingsCalc: false,
  },
  mutations: {
    increment (state) {
      state.appealSection++
    },
    incrementAndSavings (state) {
      state.appealSection++
      setTimeout(() => state.savingsCalc = true, 4000)
    },
    decrement (state) {
      state.appealSection--
    },
    canSubmitThreeTrue(state) {
      state.canSubmitThree = true
    },
    canSubmitThreeFalse(state) {
      state.canSubmitThree = false
    },
    canSubmitFourTrue(state) {
      state.canSubmitFour = true
    },
    canSubmitFourFalse(state) {
      state.canSubmitFour = false
    },
  }
})

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
    })
  },
  render: h => h(App),
  store: store,
  
}).$mount('#app')
