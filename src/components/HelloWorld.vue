<template>
  <nav class="flex justify-center items-center w-full" style="z-index: 100;">
    
    <div class="flex flex-col items-stretch w-full " :class="navBar==0 ? ['md:mr-scrollbar', ''] : ''">
      <div class="w-full flex justify-center bg-white shadow-md h-20 md:h-24" :class="navBar==0 ? ['md:pl-scrollbar'] : ''">
      
        <div class="w-full flex justify-between items-stretch sm:items-center w-full mx-8 md:mx-24" style="max-width:920px;">
          <div class="flex items-end lg:w-1/2 cursor-pointer my-auto sm:my-0" @click="homeClicked">

            <img class="" width="50px" height="50px" alt="realAppeal_icon.png" data-type="image" src="../assets/realappeal_logo.png">

            <div class="flex items-baseline mb-1">
              <p class="md:text-2xl text-xl font-bold ml-2 text-gray-700"> real<span class=" text-teal-500 ">Appeal</span> </p>
            
              <p class="text-sm hidden sm:block font-light ml-2 "> simple & fast property tax appeals</p>
            </div>
            
          </div>
          
          <div class="rounded-full block lg:hidden h-8 w-8 flex justify-center items-center justify-center my-auto sm:my-0 navbutton cursor-pointer" v-if="!drop">
            <font-awesome-icon  class="text-gray-600 m-1" @click="dropDown" :icon="['fas', 'bars']" size="lg" />
          </div>

          <div class="bg-gray-500 rounded-full block lg:hidden h-8 w-8 flex justify-center items-center justify-center my-auto sm:my-0 navbutton cursor-pointer" v-if="drop">
            <font-awesome-icon  class="text-white m-1" @click="dropDown" :icon="['fas', 'times']" size="lg" />
          </div>
          

          

          <div class="hidden lg:h-full lg:flex items-center mt-3 justify-around w-1/2  lg:block">
            <div class="flex flex-col justify-center h-full px-3 cursor-pointer" :class="navBar==0 ? ['text-teal-500'] : ['text-gray-900', 'hover:text-orange-600']" @click="$emit('homeBoi')">
              <p class="text-lg font-medium navbutton">Home</p>
              

            </div>
            <div class="flex flex-col justify-center h-full px-3 cursor-pointer" :class="navBar==1 ? ['text-teal-500'] : ['text-gray-900', 'hover:text-orange-600']" @click="appealeyboi" >
              <p class="text-lg font-medium navbutton">Appeal</p>

            </div>
            <div class="flex flex-col justify-center font-medium text-gray-900 hover:text-orange-600 h-full px-3 cursor-pointer" @mouseenter="hovering = true" @mouseleave="hovering = false">
              <p class="text-lg navbutton">Learn More 
              <font-awesome-icon class="ml-1" :icon="['fas', 'chevron-down']" size="sm" /></p>
              <div v-show="hovering" class="absolute top-0 flex flex-col border border-gray-400 rounded bg-blue mt-20 w-48 bg-white shadow-lg cursor-default">
                <div class="flex justify-center items-center pl-4 pr-12 navbutton py-3 my-2 text-gray-600 hover:text-black cursor-pointer">
                  <p class="text-left w-full">Blog</p>
                </div>
                <div class="flex justify-center items-center pl-4 pr-12 navbutton py-3 my-2 text-gray-600 hover:text-black cursor-pointer">
                  <p class="text-left w-full">About</p>
                </div>
                <div class="flex justify-center items-center pl-4 pr-12 navbutton py-3 my-2 text-gray-600 hover:text-black cursor-pointer">
                  <p class="text-left w-full">Contact Us</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div class="dropdown flex flex-col overflow-hidden bg-white" :class="drop ? ['shadow-md', ''] : 'h-0'" style="z-index: 100;">
        <div class="flex flex-col justify-start items-center py-3 mx-6 border-b border-gray-400 cursor-pointer" >
          <div class="flex justify-between items-center w-full" @click="companydrop">
            <p class="text-2xl font-medium text-gray-900 text-left w-full px-3 " >Company</p>
            <font-awesome-icon class="ml-1 mr-2 navbutton" :style="{'transform': companyOpen ?  'rotate(0deg)' :'rotate(180deg)'}" :icon="['fas', 'chevron-down']" size="sm" />
          </div>
          
          <div class="w-full flex flex-col" :class="companyOpen ? 'hidden' : 'block'">
            <p class="text-md text-gray-700 text-left w-full px-8 py-6">About Us</p>
            <p class="text-md text-gray-700 text-left w-full px-8 py-6">FAQs</p>
            <p class="text-md text-gray-700 text-left w-full px-8 py-6">Investor relations</p>
            <p class="text-md text-gray-700 text-left w-full px-8 py-6">Careers</p>
          </div>

        </div>
        <div class="flex flex-col justify-center items-center py-3 mx-6 border-b border-gray-400 cursor-pointer" @click="appealdrop">
          <p class="text-2xl font-medium text-gray-900 text-left w-full px-3">Appeal</p>
        </div>
        <div class="flex flex-col justify-center items-center py-3 mx-6 border-b border-gray-400 cursor-pointer">
          <p class="text-2xl font-medium text-gray-900 text-left w-full px-3">Learn More</p>
        </div>
        <div class="flex flex-col justify-center items-center py-3 mx-6 border-b border-gray-400 cursor-pointer">
          <p class="text-2xl font-medium text-gray-900 text-left w-full px-3">Contact Us</p>
        </div>
      </div>
    </div>

    
    
  </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronDown, faBan } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faChevronDown)
library.add(faBan)

export default {
  name: 'HelloWorld',
  props: ['navBar'],
  data: function() {
    return {
      drop : false,
      hovering: false,
      companyOpen: true,
    }
  },
  methods: {
    dropDown: function() {
      this.drop = !this.drop
    },
    appealeyboi() {
      this.$emit('appealClick')
    },
    appealdrop() {
      this.$emit('appealClick')
      this.drop = !this.drop
    },
    homedrop() {
      this.$emit('homeBoi')
      this.drop = !this.drop
    },
    companydrop() {
      this.companyOpen = !this.companyOpen
    },
    homeClicked() {
      this.$emit('homeBoi')
      this.drop = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.navbutton {
    transition: all 0.2s;
}

p {
  user-select: none;
}

.dropdown {
  transition: all 0.3s;
}
</style>
