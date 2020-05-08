import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Vuex from 'vuex'
// import db from './components/firebaseInit'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    appealSection: -2,
    canSubmitThree: false,
    canSubmitFour: false,
    savingsCalc: false,
    questions: -1,
    savingsVal: 0,
    clientID: '',
    
    // Form 1
    inputAddress: '',
    inputCity: '',
    inputState: '',
    inputZipCode: '',
    formOneError: [],

    // Form 3
    inputFirstName: '',
    inputLastName: '',
    inputEmail: '',
    inputPhoneNum: '',

    // Form 2
    countyAnswers: [-1,-1,-1],
    primaryDifferent: false,
    inputPrimaryAddress: '',
    inputPrimaryCity: '',
    inputPrimaryState: '',
    inputPrimaryZipCode: '',
    firstDone: false,
    questionsNum: -1,
  },
  getters:{
    //Form 1 getters
    getinputAddress(state){
      return state.inputAddress
    },
    getinputCity(state){
      return state.inputCity
    },
    getinputState(state){
      return state.inputState
    },
    getinputZipCode(state){
      return state.inputZipCode
    },
    //Form 3 getters
    getinputFirstName(state){
      return state.inputFirstName
    },
    getinputLastName(state){
      return state.inputLastName
    },
    getinputEmail(state){
      return state.inputEmail
    },
    getinputPhoneNum(state){
      return state.inputPhoneNum
    },

    savingsValGet(state) {
      return state.savingsVal
    },
    appealSecGet(state) {
      return state.appealSection
    },
    formOneError(state) {
      return state.formOneError
    },
    canSubmitFormOne(state) {
      return state.inputAddress.length!=0 && state.inputCity.length!=0 && state.inputState.length!=0 && state.inputZipCode.length!=0
    },
    canSubmitFormTwo(state) {
      return state.inputPrimaryAddress.length!=0 && state.inputPrimaryCity.length!=0 && state.inputPrimaryState.length!=0 && state.inputPrimaryZipCode.length!=0
    },
    canSubmitFormThree(state) {
      return state.inputFirstName.length!=0 && state.inputLastName.length!=0 && state.inputEmail.length!=0 && state.inputPhoneNum.length!=0
    },
    questionsVal(state) {
      window.console.log(state.countyAnswers)
      return state.questions
    },
    getQuestionsNum(state) {
      return state.questionsNum
    },  
    getCountyAnswers(state) {
      return state.countyAnswers
    },
    getSavingsCalc(state) {
      return state.savingsCalc
    },  
    getPrimaryDifferent(state) {
      return state.primaryDifferent
    }
  },
  mutations: {
    setPrimaryDifferent(state, { val }) {
      state.primaryDifferent = val
    },
    questionsNumInc(state) {
      state.questionsNum++
    },
    savingsValSet(state, { val }) {
      window.console.log('hi', state.savingsVal)
      state.savingsVal = val
    },
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
    changePrimaryAddress(state, { val }){
      state.inputPrimaryAddress = val
    },
    changePrimaryCity(state, { val }){
      state.inputPrimaryCity = val
    },
    changePrimaryState(state, { val }){
      state.inputPrimaryState = val
    },
    changePrimaryZipCode(state, { val }){
      state.inputPrimaryZipCode = val
    },
    setCountyAnswers(state, { ind, val }) {
      window.console.log(state.countyAnswers)
      if(ind==0 && val==1) state.primaryDifferent = false
      state.countyAnswers[ind] = val
    },
    increment (state) {
      state.appealSection++
      if(state.appealSection==1) {
        state.questionsNum = 0

      }
      window.console.log("Tanjie" , state.appealSection)
      if (state.appealSection > 0){
        window.console.log("Im creebin")
        var object
        switch (state.appealSection) {
          case 1:
            object = { 
                Address: state.inputAddress,
                City: state.inputCity,
                State: state.inputState,
                ZipCode: state.inputZipCode
              }
            break;
          case 2:
            object = { 
                PrimaryResidence: state.countyAnswers[0],
                Veteran: state.countyAnswers[1],
                Over65: state.countyAnswers[2]
              }
            break;
          case 3:
            object = { 
                FirstName: state.inputFirstName,
                LastName: state.inputLastName,
                Email: state.inputEmail,
                PhoneNum: state.inputPhoneNum
              }
            break;
          default:
            object = {}
            window.console.log("I broke help")
            window.console.log(state.appealSection)
            break;
        }
        window.console.log("Im creeebo")
        window.console.log(object)
        if (state.clientID.length <= 0){
            window.console.log("Adding first Form")
            // db.collection("FormSub").add(object)
            // .then(function(docRef) {
            //     window.console.log("Document written with ID: ", docRef.id);
            //     state.clientID = docRef.id
            // })
            // .catch(function(error) {     
            //     window.console.error("Error adding document: ", error);
            // });
          }else if (Object.keys(object).length > 0){
            window.console.log("Setting Document")
            // db.collection("FormSub").doc(state.clientID).set(object,{ merge: true })
            // .then(function() {
            //     window.console.log("Document written with ID: ")
            // })
            // .catch(function(error) {     
            //     window.console.error("Error adding document: ", error);
            // });
          }
      }
      if (state.appealSection == 3){
        setTimeout(() => state.savingsCalc = true, 4000)
      }
    },
    incrementQuestions(state) {
      state.questions++
    },
    decrementQuestions(state) {
      state.questionsNum--
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
