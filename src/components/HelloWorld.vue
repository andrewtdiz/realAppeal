<template>
  <nav class="fixed top-0 left-0 flex justify-center items-center w-full" style="z-index: 100;">
    
    <div class="flex flex-col items-stretch w-full " :class="navBar==0 ? ['md:mr-scrollbar', ''] : ''">
      <div class="w-full flex justify-center bg-white shadow-md h-20 md:h-24" :class="navBar==0 ? ['md:pl-scrollbar'] : ''">
      
        <div class="w-full flex justify-between items-center w-full mx-12 md:mx-24" style="max-width:920px;">
          <div class="flex items-end lg:w-1/2 cursor-pointer" @click="$emit('homeBoi')">

            <img class="" width="50px" height="50px" alt="realAppeal_icon.png" data-type="image" src="../assets/realappeal_logo.png">

            <div class="flex items-baseline mb-1">
              <p class="md:text-2xl text-md font-bold ml-2 text-gray-700"> real<span class=" text-teal-500 ">Appeal</span> </p>
            
              <p class="text-sm hidden sm:block font-light ml-2 "> simple & fast property tax appeals</p>
            </div>
            
          </div>
          
          <font-awesome-icon class="block lg:hidden" :class="!drop ? 'text-gray-800' : 'text-teal-500'" @click="dropDown" :icon="['fas', 'bars']" size="lg" />

          

          <div class="hidden lg:h-full lg:flex items-center mt-3 justify-around w-1/2  lg:block">
            <div class="flex flex-col justify-center h-full px-3 cursor-pointer" :class="navBar==0 ? ['text-teal-500', 'hover:text-teal-600'] : ['text-gray-900', 'hover:text-orange-600']" @click="$emit('homeBoi')">
              <p class="text-lg font-medium navbutton">Home</p>
              

            </div>
            <div class="flex flex-col justify-center text-gray-900 hover:text-orange-600 h-full px-3 cursor-pointer" :class="navBar==1 ? ['text-teal-500', 'hover:text-teal-600'] : ['text-gray-900', 'hover:text-orange-600']" @click="appealeyboi" >
              <p class="text-lg font-medium navbutton">Appeal</p>

            </div>
            <div class="flex flex-col justify-center font-medium text-gray-900 hover:text-orange-600 h-full px-3 cursor-pointer" @mouseenter="hovering = true" @mouseleave="hovering = false">
              <p class="text-lg navbutton">Learn More 
              <font-awesome-icon class="ml-1" :icon="['fas', 'chevron-down']" size="xs" /></p>
              <div v-show="hovering" class="absolute top-0 flex flex-col border border-gray-400 rounded bg-blue mt-20 w-48 bg-white shadow-lg cursor-default">
                <div class="flex justify-center items-center px-12 navbutton py-3 my-2 text-gray-700 hover:text-orange-600 cursor-pointer">
                  <p>Blog</p>
                </div>
                <div class="flex justify-center items-center px-12 navbutton py-3 my-2 text-gray-700 hover:text-orange-600 cursor-pointer">
                  <p>About</p>
                </div>
                <div class="flex justify-center items-center px-12 navbutton py-3 my-2 text-gray-700 hover:text-orange-600 cursor-pointer">
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div class="dropdown flex flex-col overflow-hidden bg-white" :class="drop ? 'shadow-md' : ''" :style="{'max-height': drop ? '1000px' : '0px'}">
        <div class="flex flex-col justify-center items-center py-6 border-b border-gray-500 hover:text-orange-500 cursor-pointer" @click="homedrop">
          <p class="text-lg font-medium text-center">Home</p>
        </div>
        <div class="flex flex-col justify-center items-center py-6 border-b border-gray-500 hover:text-orange-500 cursor-pointer" @click="appealdrop">
          <p class="text-lg font-medium text-center">Appeal</p>
        </div>
        <div class="flex flex-col justify-center items-center py-6 border-b border-gray-500 hover:text-orange-500 cursor-pointer">
          <p class="text-lg font-medium text-center">About</p>
        </div>
        <div class="flex flex-col justify-center items-center py-6 border-b border-gray-500 hover:text-orange-500 cursor-pointer">
          <p class="text-lg font-medium text-center">Contact Us</p>
        </div>
      </div>
    </div>

    
    
  </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faChevronDown)

export default {
  name: 'HelloWorld',
  props: ['navBar'],
  data: function() {
    return {
      drop : false,
      hovering: false,
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

.dropdown {
  transition: all 0.3s;
}
</style>
