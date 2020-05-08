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
    appealSection: -2,
    canSubmitThree: false,
    canSubmitFour: false,
    savingsCalc: false,
    questions: -1,

    inputAddress: '',
    inputCity: '',
    inputState: '',
    inputZipCode: '',
    formOneError: [],

    inputFirstName: '',
    inputLastName: '',
    inputEmail: '',
    inputPhoneNum: '',

    countyAnswers: [-1,-1,-1],
    firstDone: false,
  },
  getters:{
    appealSecGet(state) {
      return state.appealSection
    },
    formOneError(state) {
      return state.formOneError
    },
    canSubmitFormOne(state) {
      return state.inputAddress.length!=0 && state.inputCity.length!=0 && state.inputState.length!=0 && state.inputZipCode.length!=0
    },
    canSubmitFormThree(state) {
      return state.inputFirstName.length!=0 && state.inputLastName.length!=0 && state.inputEmail.length!=0 && state.inputPhoneNum.length!=0
    },
    questionsVal(state) {
      window.console.log(state.countyAnswers)
      return state.questions
    },
  },
  mutations: {
    changeFormOneErr(state, { val }){
      state.formOneError = val
    },
    changeinputFirstName(state, { val }){
      state.inputFirstName = val
    },
    changeinputLastName(state, { val }){
      state.inputLastName = val
    },
    changeinputEmail(state, { val }){
      state.inputEmail = val
    },
    changeinputPhoneNum(state, { val }){
      state.inputPhoneNum = val
    },

    changeAddress(state, { val }){
      state.inputAddress = val
    },
    changeCity(state, { val }){
      state.inputCity = val
    },
    changeState(state, { val }){
      state.inputState = val
    },
    changeZipCode(state, { val }){
      state.inputZipCode = val
    },
    setCountyAnswers(state, { ind, val }) {
      window.console.log(state.countyAnswers)
      state.countyAnswers[ind] = val
    },
    increment (state) {
      state.appealSection++
    },
    incrementQuestions(state) {
      state.questions++
    },
    decrementQuestions(state) {
      state.questions--
    },
    incrementAndSavings (state) {
      window.console.log('increment and save' ,state.savingsCalc, state.appealSection)
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

  },
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
