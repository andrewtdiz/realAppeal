<template>
  <div id="app" class="min-h-screen flex flex-col" :class="navBar==0 ? 'max-h-screen' : ''">
    <HelloWorld :navBar="navBar" v-on:appealClick="appealClick" v-on:homeBoi="homeBoi"/>
    <div class="fixed top-0 h-screen flex flex-col justify-end items-end px-10" :class="chatStyle" style="z-index: 100; width:99%; pointer-events:none;">
      <div v-if="showChat" @click="flipChat" class="w-16 h-16 sm:w-18 sm:h-18 calcsavingsbtn rounded-full flex flex-col justify-center items-center shadow-md hover:shadow-lg cursor-pointer hover:bg-orange-700" style="pointer-events: auto;">
        <font-awesome-icon class="text-white my-2 w-full h-full hidden sm:block" :icon="['fas', 'comment-dots']" size="2x" />
        <font-awesome-icon class="text-white my-2 w-full h-full block sm:hidden" :icon="['fas', 'comment-dots']" size="2x" />

      </div>
      <div v-show="!showChat" class="bg-white flex flex-col items-stretch shadow overflow-hidden dropdown rounded-t-xl border-l border-r border-t border-gray-300" :class="navBar==1 ? ['pointer-events-none', 'md:pointer-events-auto']: !showChat ? 'pointer-events-auto' : ''" style="width: 19rem">
        <div class="calcsavings flex flex-col items-center">
          <font-awesome-icon class="text-white mt-2 w-full ml-auto mr-4 hover:text-orange-700 cursor-pointer" @click="flipChat" :icon="['fas', 'times']" size="lg" />
          <div class="flex flex-col items-center px-4 pb-3">
            <p class="text-white text-xl font-medium">Let's Chat!</p>
            <p class="text-white text-sm">Ask us any questions</p>
            <p class="text-white text-sm mt-6 text-center">You are now connected with <br> <span class="text-center font-medium">Johnathan</span></p>
            

          </div>
        </div>
        

        <div class="max-h-64 h-64 overflow-y-auto flex bg-gray-300 flex-col-reverse">

          <div class="flex items-center mb-6 flex-col items-start w-full">
            <div class="flex flex-row-reverse items-start w-full">
              <div class="flex-1 text-sm flex flex-col items-end ml-6 mr-0">
                <div class="text-sm flex px-3 py-3 shadow rounded mt-1 bg-teal-500 mr-2 bg-white">
                  <p class="text-white leading-none">Let me know what I should do!</p>
                </div>
                  <p class="text-gray-700 leading-none text-right text-xs mr-4 mt-2 w-full">1:25 p.m.</p>
                
              </div>
            </div>
            
            
          </div>
          <div class="flex items-center flex-col items-start w-full">
            <div class="flex flex-row-reverse items-start w-full">
              <div class="flex-1 text-sm flex flex-col items-end ml-6 mr-0">
                <p class="text-gray-900 leading-none font-medium mr-4">You</p>
                <div class="text-sm flex px-3 py-3 shadow rounded mt-1 bg-teal-500 mr-2 bg-white">
                  <p class="text-white leading-none">Hi Jonathan! I was just wondering how long the quote takes to</p>
                </div>
                
              </div>
            </div>
            
            
          </div>

          <div class="flex items-center mb-6 flex-col items-start w-full">
            <div class="flex justify-start items-start w-full pl-3">
              <img class="w-10 h-10 rounded-full mr-1" src="../src/assets/jonathan.jpg" alt="Avatar of Jonathan Reinink">
              <div class="text-sm flex flex-col items-start">
                <p class="text-gray-900 leading-none font-medium ml-2">Jonathan Reinink</p>
                <div class="text-sm flex px-3 py-3 shadow rounded mt-1 mr-2 bg-white">
                  <p class="text-gray-900 leading-none">Let me know if you have any questions about realAppeal! I'm here to help.</p>
                </div>
                  <p class="text-gray-700 leading-none text-right text-xs mr-4 mt-2 w-full px-4">1:25 p.m.</p>

              </div>
            </div>

            
            
            
          </div>
          
          <div class="w-full" style="min-height: 145px">
            
          </div>

        </div>
        <div class="flex items-center w-96">
          <input class="appearance-none block w-full font-normal text-gray-500 border-t w-96 border-gray-400 py-4 pl-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Type message here">
        </div>
      </div>
    </div>

    <div v-if="navBar==1" class="fixed top-0 h-screen w-screen flex flex-col items-center pb-12 md:pb-24 justify-end " style="z-index: 1000; width:99%; pointer-events:none;">
      <div class="flex items-center w-full md:w-3/4" :class="($store.state.appealSection >= 1) ? 'justify-between' : 'justify-end'">
        <div v-if="$store.state.appealSection >= 1" class="shadow-md bg-gray-300 text-gray-900 md:mt-6 h-12 mx-2 px-10 md:px-12 py-3 rounded-md flex items-center justify-center hover:bg-gray-400 cursor-pointer pointer-events-auto" @click="$store.commit('decrement')">
            <font-awesome-icon class="rotate-90 mr-4 text-gray-600" style="transform: rotate(90deg)" :icon="['fas', 'chevron-down']" />
            
            <p class="text-xs md:text-md">Back</p>
        </div>
        
        <div v-if="$store.state.appealSection > -1 && ($store.state.appealSection !=2) && ($store.state.appealSection !=3)" class="shadow-md hidden md:flex bg-teal-500 mx-2 text-white md:mt-6 h-12 px-12 py-3 rounded-md cursor-pointer items-center justify-center hover:bg-teal-600 pointer-events-auto" @click="$store.commit('increment')">
            <p class="text-xs md:text-md">Continue</p>
            <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" :icon="['fas', 'chevron-down']" />
        </div>
        <div v-if="$store.state.appealSection > -1 && ($store.state.appealSection !=2) && ($store.state.appealSection !=3)" class="shadow-md md:hidden flex bg-teal-500 mx-2 text-white md:mt-6 h-12 px-12 py-3 rounded-md cursor-pointer items-center justify-center pointer-events-auto" @click="$store.commit('increment')">
            <p class="text-xs md:text-md">Continue</p>
            <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" :icon="['fas', 'chevron-down']" />
        </div>
        <div v-if="($store.state.appealSection == 2) && ($store.state.canSubmitThree)" class="shadow-md bg-teal-500 mx-2 text-white md:mt-6 h-12 px-12 py-3 rounded-md flex cursor-pointer items-center justify-center hover:bg-teal-600 pointer-events-auto" @click="$store.commit('increment')">
            <p class="text-xs md:text-md">Continue</p>
            <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" :icon="['fas', 'chevron-down']" />
        </div>
        <div v-if="($store.state.appealSection == 2) && (!$store.state.canSubmitThree)" class="shadow-md bg-teal-500 opacity-50 mx-2 text-white md:mt-6 h-12 px-12 py-3 rounded-md flex cursor-pointer items-center justify-center pointer-events-auto">
            <p class="text-xs md:text-md">Continue</p>
            <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" :icon="['fas', 'chevron-down']" />
        </div>
        <div v-if="($store.state.appealSection == 3) && ($store.state.canSubmitFour)" class="shadow-md bg-teal-500 mx-2 text-white md:mt-6 h-12 px-12 py-3 rounded-md flex cursor-pointer items-center justify-center hover:bg-teal-600 pointer-events-auto" @click="$store.commit('incrementAndSavings')">
            <p class="text-xs md:text-md">Continue</p>
            <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" :icon="['fas', 'chevron-down']" />
        </div>
        <div v-if="($store.state.appealSection == 3) && (!$store.state.canSubmitFour)" class="shadow-md bg-teal-500 opacity-50 mx-2 text-white md:mt-6 h-12 px-12 py-3 rounded-md flex cursor-pointer items-center justify-center pointer-events-auto">
            <p class="text-xs md:text-md">Continue</p>
            <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" :icon="['fas', 'chevron-down']" />
        </div>
        
      </div>
    </div>

    <AppealVue v-if="navBar==1" />
    <div v-if="!(navBar==1)" class="flex flex-col w-full -mt-16">
      <div  class="flex flex-col ">
      


      <div
        class="relative pt-8 lg:pt-16 pb-4 lg:pb-o flex content-center items-stretch justify-center"
        style="min-height: 55vh;"
        
      >
        <img
                alt="..."
                :style="{transform: flipImg ? 'scaleX(1)' : 'scaleX(-1)'}"
                class="absolute top-0 mt-8 lg:mt-16 w-full h-full bg-center bg-cover object-cover"
                src="./assets/sanfran.png"
              />
              
          <div
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></div>
        <div class="relative -mb-8 w-screen flex justify-center items-stretch overflow-x-hidden overflow-y-hidden" :class="flip ? 'mb-auto' : 'mt-auto'">
          <div class="flex justify-start h-full w-full justify-center sm:justify-start mx-4 md:mx-0" style="max-width: 920px;">
            <div class="flex flex-col items-start text-white rounded-md pt-12 pb-4 pr-auto">
              <p data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true" class="text-2xl w-full text-center sm:text-left sm:text-2xl lg:text-3xl leading-none font-medium ">Start saving money <br> on your property taxes</p>
              <p data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true" class="text-sm w-full text-center sm:text-left sm:text-lg lg:text-lg leading-none font-normal pt-4 hidden sm:block ">File an appeal and reduce your real estate <br> taxes or get your money back - guaranteed</p>
              <div data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true" class="flex justify-center sm:justify-start w-full">
                <button  class="px-4 text-sm mx-auto sm:text-md py-1 lg:px-8 lg:py-2 shadow-lg text-teal-600 bg-white rounded lg:ml-4 my-3 mt-4 sm:ml-5 lg:mt-6 hover:bg-teal-500 hover:text-white">Learn More</button>
              <!-- <button @click.stop="flipImg = !flipImg" class="px-4 text-sm mx-auto sm:text-md py-1 lg:px-8 lg:py-2 shadow-lg text-teal-600 bg-white rounded lg:ml-4 my-3 mt-4 sm:ml-5 lg:mt-6 hover:bg-teal-500 hover:text-white">Learn More</button> -->
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="bg-white-900 w-full h-8 md:h-16">

    </div>
    
    <div class="bg-white w-full flex justify-center sm:h-64 my-12 sm:my-24 " >
      <div data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true" class="flex container justify-center lg:justify-center items-center pt-1 w-full mx-2 md:mx-2" style="max-width:920px;">
        <div class="flex flex-col sm:flex-row sm:items-center w-full items-center">
          <div class="sm:flex-1 sm:h-full flex items-center justify-start animated" >
            <div class="flex flex-col items-center">
              <img style="object-position:50% 50%;width:291px;height:84px;object-fit:cover" alt="realAppeal" itemprop="image" src="./assets/roofs.png">
              <div class="flex items-baseline mb-1">
                <p class="text-5xl text-md font-bold ml-2 text-gray-700"> real<span class=" text-teal-500 ">Appeal</span> </p>
              
              </div>
            </div>
            
          </div>
          <div  class="flex-1 h-full flex items-center sm:ml-4">
              <div class="flex flex-col items-start">
                <p class="font-medium hidden sm:block sm:text-2xl mb-6 text-gray-800">
                  What is realAppeal?
                </p>
                <p class="text-md sm:text-lg font-light hidden lg:block animated">realAppeal is an online solution for porperty tax appeals.
                We help homeowners identify if they're paying too much in
                real estate taxes. If so, we can quickly appeal their property
                taxes getting property owners the savings they deserve. We are
                currently filing appeals for customers nationwide, in accordance
                with local laws and deadlines.</p>
                <p class="text-md hidden font-light sm:block mr-8 lg:hidden animated">realAppeal is an online solution for porperty tax appeals.
                We help homeowners identify if they're paying too much in
                real estate taxes. If so, we can quickly appeal their property
                taxes getting property owners the savings they deserve. We are
                currently filing appeals for customers nationwide, in accordance
                with local laws and deadlines.</p>
                <p class="text-md font-light block sm:hidden ml-12 mr-8 animated">realAppeal is an online solution for porperty tax appeals.
                We help homeowners identify if they're paying too much in
                real estate taxes.</p>
              </div>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="bg-blue-900 w-full h-32 md:h-48 flex justify-center items-center" style="z-index: 10;">
      <div class="flex flex-col md:flex-row justify-start md:justify-center items-center w-full lg:w-full" style="max-width:920px;">
        <div class="flex flex-col h-full items-start ">
          <p class="text-white text-sm hidden sm:block sm:text-lg lg:text-2xl font-medium">See how much you can save on your next property tax bill</p>
          <p class="text-white text-sm block sm:hidden sm:text-lg lg:text-2xl font-medium text-center">See how much you can save <br> on your next property tax bill</p>
          <p class="text-white pt-6 hidden md:block text-sm font-light lg:text-lg">Use our free property tax savings calculator and find out how <br> much you could lower your real estate taxes</p>
        </div>
        <div class="flex flex-col md:pl-6">
          <div class="px-4 text-sm sm:text-lg py-1 lg:px-8 lg:py-2 shadow-lg text-white cursor-pointer rounded lg:ml-4 my-3 mt-4 md:ml-5 calcsavingsbtn">Calculate Savings</div>

        </div>
      </div>
    </div>

    <div class="mt-6 lg:mt-12 bg-white flex flex-col items-center w-full mx-auto overflow-x-hidden" style="max-width:920px;">

      <div class="w-full flex justify-center py-8">
        <p class="text-4xl lg:text-5xl font-medium text-center text-gray-800 ">Steps to appeal</p>
      </div>
    
      <div class="flex w-full flex-col-reverse sm:flex-row sm:items-stretch py-8">
        <div class="w-1/2 mx-auto md:mx-0 flex flex-col sm:flex-col sm:mr-8 sm:mr-24 items-center sm:mt-auto sm:items-end h-full">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-start sm:ml-3">
              <div class="flex flex-col items-start">
                <div class="bg-teal-500 rounded-full h-12 w-12 shadow-md flex justify-center items-center mx-auto">
                  <p class="text-3xl text-white font-medium mb-1">1</p>
                </div>
                <p class="font-medium sm:text-2xl mt-4 mb-2 text-gray-800">
                  Your property is overassessed
                </p>
              </div>
              <p class="text-md sm:text-lg font-light hidden lg:block">Property tax assessments are done in large <br>
               swatches and are often inaccurate. Over 45% of <br>
               homes are overassessed.</p>
              <p class="text-md hidden font-light sm:block mr-8 lg:hidden">Property tax assessments are done in large
               swatches and are often inaccurate. Over 45% of
               homes are overassessed.</p>
            </div>
          </div>
          
        </div>
        <div data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
              class="w-1/2 mx-auto md:mx-0 flex flex-col items-center sm:items-start sm:pl-24 h-full mb-6 sm:mb-0">
          <img class="w-48 sm:w-64" alt="realAppeal" itemprop="image" src="./assets/Group2.svg">

        </div>
      </div>

      <div class="flex w-full flex-col-reverse sm:flex-row-reverse sm:items-stretch py-8">
        <div class="w-1/2 mx-auto md:mx-0 flex flex-col sm:flex-col sm:mt-auto items-center sm:ml-24 sm:items-start sm:ml-8 h-full">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-start">
              <div class="flex flex-col items-start">
                <div class="bg-teal-500 rounded-full h-12 w-12 shadow-md flex justify-center items-center mx-auto">
                  <p class="text-3xl text-white font-medium mb-1">2</p>
                </div>
                <p class="font-medium sm:text-2xl mt-4 mb-2 text-gray-800">
                  We estimate your tax savings
                </p>
              </div>
              <p class="text-md sm:text-lg font-light hidden lg:block">We calculate your potential tax savings by using <br>
               your address to determine a fair assessment of <br>
               your home value based on nearby properties.</p>
              <p class="text-md hidden font-light sm:block mr-8 lg:hidden">We calculate your potential tax savings by using
               your address to determine a fair assessment of
               your home value based on nearby properties.</p>
            </div>
          </div>
          
        </div>
        <div data-aos="fade-right"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
               class="w-1/2 mx-auto md:mx-0 flex flex-col items-center sm:items-end h-full sm:pr-24 mb-6 sm:mb-0">
          <img class="w-48 sm:w-64" style="transform: translate(0px,10px)" alt="realAppeal" itemprop="image" src="./assets/Group3.svg">

        </div>
      </div>

      <div class="flex w-full flex-col-reverse sm:flex-row sm:items-stretch py-8">
        <div class="w-1/2 mx-auto md:mx-0 flex flex-col sm:flex-col sm:mt-auto items-center sm:mr-12 sm:pr-2 sm:items-end h-full">
          <div class="flex flex-col items-center">
            
            <div class="flex flex-col items-start sm:mr-3">
              <div class="flex flex-col items-start">
                <div class="bg-teal-500 rounded-full h-12 w-12 shadow-md flex justify-center items-center mx-auto">
                  <p class="text-3xl text-white font-medium mb-1">3</p>
                </div>
                <p class="font-medium sm:text-2xl mt-4 mb-2 text-gray-800">
                  We submit your appeal, hassle-free
                </p>
              </div>
              
              <p class="text-md sm:text-lg font-light hidden lg:block">Submit an appeal through realAppeal and we will <br>
               handle all the paperwork working with your tax <br>
                assessors to help you save on your real estate <br>
                taxes.</p>
              <p class="text-md hidden font-light sm:block mr-8 lg:hidden">Submit an appeal through realAppeal and we will
               handle all the paperwork working with your tax
                assessors to help you save on your real estate
                taxes.</p>
            </div>
          </div>
          
        </div>
        <div data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
               class="w-1/2 mx-auto md:mx-0 flex flex-col items-center sm:items-start sm:pl-24 h-full mb-6 sm:mb-0">
          <img class="w-48 sm:w-64" alt="realAppeal" itemprop="image" src="./assets/Group4.svg">
          
        </div>
      </div>


      <div class="flex w-full flex-col-reverse sm:flex-row-reverse sm:items-stretch py-8">
        <div class="w-1/2 mx-auto md:mx-0 flex flex-col sm:flex-col sm:mt-auto sm:ml-24 items-center sm:items-start h-full">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-start">
              <div class="flex flex-col items-start">
                <div class="bg-teal-500 rounded-full h-12 w-12 shadow-md flex justify-center items-center mx-auto">
                  <p class="text-3xl text-white font-medium mb-1">4</p>
                </div>
                <p class="font-medium sm:text-2xl mt-4 mb-2 text-gray-800">
                  You save money
                </p>
              </div>
              <p class="text-md sm:text-lg font-light hidden lg:block">Within 6-8 weeks you will hear from your <br>
                county how much your tax bill is reduced by. Over <br>
                90% of our appeals are successful and have saved <br>
                customers thousands of dollars.</p>
              <p class="text-md hidden font-light sm:block mr-8 lg:hidden">Within 6-8 weeks you will hear from your
                county how much your tax bill is reduced by. Over
                90% of our appeals are successful and have saved
                customers thousands of dollars.</p>
            </div>
          </div>
          
        </div>
        <div data-aos="fade-right"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
               class="w-1/2 mx-auto md:mx-0 flex flex-col items-center sm:items-end sm:pr-24 h-full mb-6 sm:mb-0">
          <img class="w-48 sm:w-64" alt="realAppeal" itemprop="image" src="./assets/Group5.svg">

        </div>
      </div>

      

    </div>

    <div  class="mt-12 bg-white flex flex-col w-full bg-blue-900 pb-4 overflow-x-hidden">

      <div class="w-full flex justify-center my-4">
        <p class="text-3xl lg:text-5xl font-medium text-center text-white uppercase " style="width: 850px">Pricing</p>
      </div>

      <div class="flex mx-auto md:mx-0 md:w-full flex-col-reverse sm:flex-row sm:items-stretch my-8">
        <div data-aos="fade-right"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
             class="md:flex-1 flex flex-row justify-center sm:justify-end sm:mr-4 lg:mr-12 sm:items-start">
          <div class="flex flex-col items-center bg-white rounded py-3">
              <div class="flex items-end ">

                <img class="" width="50px" height="50px" alt="realAppeal_icon.png" src="./assets/realappeal_logo.png">

                <div  class="flex items-baseline mb-1">
                  <p  class="md:text-2xl text-md font-bold ml-2 text-gray-700"> real<span class=" text-teal-500 ">Appeal</span> </p>
                
                </div>
              
              </div>

              <div class="flex items-center font-medium">
                <p class="text-2xl lg:text-2xl text-center text-gray-800">$ </p>
                <p class="text-3xl lg:text-6xl text-gray-800 ml-1">99</p>
                <p class="ml-2 text-md font-bold text-gray-600 uppercase">USD</p>
              </div>

              <div class="flex flex-col items-start px-4 sm:px-6 lg:px-12 inline">
                <div class="flex items-center">
                  <font-awesome-icon class="text-teal-500" :icon="['fas', 'check-circle']" size="lg" />
                  <p class="ml-2">Proven strategy to maximize return</p>
                </div>
                <div class="flex items-center mt-3">
                  <font-awesome-icon class="text-teal-500" :icon="['fas', 'check-circle']" size="lg" />
                  <p class="ml-2">Money-back guarantee</p>
                </div>
                <div class="flex items-center mt-3">
                  <font-awesome-icon class="text-teal-500" :icon="['fas', 'check-circle']" size="lg" />
                  <p class="ml-2">One-on-one consulting</p>
                </div>
                <button class="bg-teal-500 text-white mt-6 px-2 py-3 rounded-md w-full hover:bg-teal-600" @click="appealClick">Appeal</button>
              </div>
          </div>
          
        </div>
        <div data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            class="sm:my-auto mb-4 md:flex-1 h-full flex flex-row justify-center sm:justify-start items-start sm:ml-4 lg:ml-12 h-full sm:my-auto ">
          <div class="flex h-full flex-col justify-center">
            <div class="flex flex-col items-center bg-white rounded py-3 px-6">
              <div class="flex items-end ">


                <div class="flex items-baseline mb-1">
                  <p class="md:text-2xl text-sm sm:text-md font-medium ml-2 text-gray-800"> Lawyers/Attorneys </p>
                
                </div>
              
              </div>

              <div class="flex items-center font-medium leading-tight">
                <p class="text-lg lg:text-2xl text-center text-gray-800">$ </p>
                <p class="lg:text-6xl text-3xl text-gray-800 ml-1">200</p>
                <p class="ml-2 text-sm lg:text-md font-medium text-gray-600 uppercase">per hr</p>
              </div>

              <p class="text-center text-3xl leading-tight"> + </p>

              <div class="flex items-center font-medium leading-tight">
                <p class="text-lg lg:text-2xl text-center text-gray-800">% </p>
                <p class="lg:text-6xl text-3xl text-gray-800 ml-1">50</p>
                <p class="ml-2  text-sm lg:text-md font-medium text-gray-600 uppercase">of savings</p>
              </div>

              <div class="flex items-center my-4 px-4 sm:px-6 lg:px-10">
                <font-awesome-icon class="text-red-500" :icon="['fas', 'ban']" size="lg" />
                <p class="ml-2">No guarantee of return</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>


    <div data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="0"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        class="w-full h-32 md:h-48 my-8 md:my-16 flex justify-center overflow-x-hidden" style="z-index: 10;">
      <div class="flex flex-col md:flex-row justify-start sm:ml-4 md:justify-center items-center pt-6 lg:pt-8 w-full lg:w-full" style="max-width:920px;">
        <div class="flex flex-col h-full items-start ">
          <p class="text-blue-800 text-sm hidden sm:block sm:text-lg lg:text-2xl font-medium lg:ml-12">See how much you can save on your next property tax bill</p>
          <p class="text-blue-800 text-sm block sm:hidden sm:text-lg lg:text-2xl font-medium text-center lg:ml-12">See how much you can save <br> on your next property tax bill</p>
          <p class="text-blue-800 pt-6 hidden md:block text-sm font-light lg:text-lg lg:ml-12">Use our free property tax savings calculator and find out how <br> much you could lower your real estate taxes</p>
        </div>
        <div class="flex flex-col md:pl-6">
          <button class="px-4 text-sm sm:text-lg py-1 lg:px-8 lg:py-2 shadow-lg text-white rounded lg:ml-4 my-3 mt-4 md:ml-5 calcsavingsbtn">Calculate Savings</button>

        </div>
      </div>
    </div>

    <div class="w-full flex flex-col-reverse sm:flex-row mt-12 mb-10">
      <div class="flex-1 flex flex-col justify-center items-center sm:items-start items-start mt-4 ml-4 sm:mt-0">
        <div class="flex items-end mt-6 sm:mt-0">

          <img class="" width="50px" height="50px" alt="realAppeal_icon.png" src="./assets/realappeal_logo.png">

          <div class="flex items-baseline mb-1">
            <p class="md:text-2xl text-md font-bold ml-2 text-gray-700"> real<span class=" text-teal-500 ">Appeal</span> </p>
          
          </div>
        
        </div>
        <p class="text-sm leading-tight -mt-2">© 2020 by realAppeal.  All rights reserved.</p>
      </div>
      <div class="flex-1 flex flex-col items-center sm:items-start">
        <p class="text-2xl text-teal-600 font-medium">Contact</p>
        <div class="flex items-center">
          <font-awesome-icon class="text-orange-500 my-2" :icon="['fas', 'phone-square']" size="lg" />
          <p class="ml-2">(972)-646-0964)</p>
        </div>
        <div class="flex items-center">
          <font-awesome-icon class="text-orange-500 my-2" :icon="['fas', 'envelope-square']" size="lg" />
          <p class="ml-2 underline text-blue-400 cursor-pointer">hello@realappeal.io</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-start hidden lg:block">
        <p class="text-2xl text-teal-600 font-medium">Terms</p>
      </div>
      <div class="flex-1 flex flex-col items-start hidden md:block">
        <p class="text-2xl text-teal-600 font-medium">Legal</p>
      </div>
    </div>
    </div>
    

    
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faCheck, faEnvelopeSquare, faPhoneSquare, faCommentDots, faTimes, faBan } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)
library.add(faEnvelopeSquare)
library.add(faPhoneSquare)
library.add(faBan)
library.add(faCommentDots)
library.add(faTimes)
library.add(faCheck)

import HelloWorld from "./components/HelloWorld.vue"
import AppealVue from "./components/AppealVue.vue"
export default {
  name: 'app',
  components: {
    HelloWorld,
    AppealVue,
  }, 
  data: function() {
    return {
      navBar: 0,
      showChat: true,
      appeal: false,
      flip: false,
      flipImg: true,
      ind: 0,
      width: 0,
      bg: [
        'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g',
        './assets/sanfran.png',
      ]
    }
  },
  created() {
    this.width = window.innerWidth
    if(this.width < 600) this.ind = 1
  },
  methods: {
    flipChat() {
      this.showChat = !this.showChat
    },
    appealClick(){
      this.navBar = 1
    },
    homeBoi(){
      this.navBar = 0
    },
    changeInd() {
      if(this.ind > this.bg.length-1) this.ind = 0
      else this.ind += 1
    }
  },
  computed: {
    chatStyle() {
      let outArr = []
      outArr.push(this.showChat ? 'pb-10' : 'pb-0')
      outArr.push(this.navBar==1 ? ['opacity-0', 'md:opacity-100', 'pointer-events-none', 'pointer-events-auto']: '')
      return outArr
    }
  }
}
</script>

<style scoped>
.dropdown {
  transition: all 0.3s;
}
.delay-2 {
animation-delay: .5s;
}

.calcsavings {
  background-color: #ee8572;
}

.calcsavingsbtn {
  background-color: #ee8572;
}
.calcsavingsbtn:hover {
  background-color: #d27564;
}


.calcsavingsbtn2:hover {
  color: #d27564;
}
</style>


<style src="./assets/tailwind.css">
