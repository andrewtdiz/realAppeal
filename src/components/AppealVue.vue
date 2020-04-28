<template>
  <div class="md:bg-gray-300 h-screen w-screen flex justify-center items-start mt-8 sm:mt-8 md:mt-24 pt-10">
    <div class="flex items-stretch md:bg-white rounded-lg md:border md:border-gray-400 shadow mb-12" style="max-width: 950px;">
        <div class="flex flex-col px-10 sm:px-16 py-3 sm:py-6">
            <div class="flex items-start flex-col mb-8 md:mb-16">
                <p class="text-3xl lg:text-3xl text-center text-gray-800">Calculate savings</p>
                <p class="text-md text-gray-800 text-left">Provide your property information below to calculate potential tax savings.</p>
            </div>
            <form class="w-full md:max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-2">

                    <div class="w-full md:w-1/2 px-3 md:mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="bg-gray-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="bg-gray-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                    </div>
                    
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Email Address
                    </label>
                    <input class="bg-gray-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="JaneDoe@email.com">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6 mt-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Address
                    </label>
                    <input class="bg-gray-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="address" placeholder="P. Sherman 42 Wallaby Way">
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        City
                    </label>
                    <input class="bg-gray-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Los Angeles">
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        State
                    </label>
                    <div class="relative">
                        <select class="bg-gray-300 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>California</option>
                        <option>Florida</option>
                        <option>Texas</option>
                        <option>New York</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Zip
                    </label>
                    <input class="bg-gray-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
                    </div>
                </div>

                <button class="bg-teal-500 text-white mt-6 px-2 py-3 rounded-md w-full hover:bg-teal-600">Calculate Savings</button>
                </form>
            
        </div>
        <div class="py-auto rounded-r-lg w-64 py-auto bg-teal-600 flex flex-col items-start px-6 hidden lg:block">
            <p class="text-white text-left text-md mt-8">Average Savings</p>
            <div class="flex items-center font-medium leading-tight">
                <p class="text-lg lg:text-2xl text-center text-white mb-6">$ </p>
                <p class="lg:text-6xl text-3xl text-white ml-1">642</p>
            </div>
            <p class="text-white text-left text-md italic ml-2 mb-6">Results may vary</p>

            <div class="py-6 border-t-4 border-dotted">
                <p class="text-white text-left text-md italic mx-2">"I would literally give Frank my first-born child"</p>
                <p class="text-white text-right text-md mx-2">-Mike Wizowski</p>
                
            </div>
            <div class="py-6 border-dotted">
                <p class="text-white text-left text-md italic mx-2">"Joe Biden is a good man and will be a great president"</p>
                <p class="text-white text-right text-md mx-2">-Barrack Obama</p>
                
            </div>
            <div class="py-6 border-dotted">
                <p class="text-white text-left text-md italic mx-2">"You miss 100% of the shots you never take"</p>
                <p class="text-white text-right text-md mx-2">-Michael Scott</p>
                
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faChevronDown)

export default {
  name: 'AppealVue',
  data: function() {
    return {
    }
  },
  methods: {
    
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
