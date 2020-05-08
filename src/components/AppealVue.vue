<template>
  <div class="md:bg-white flex flex-col justify-start items-stretch w-full overflow-y-auto mb-auto overflow-x-hidden">
    <transition 
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutLeft"
        mode="out-in"
        >
    <div v-if="$store.state.appealSection > -2" class="w-full  ml-auto w-5/6 mb-4 mt-8 md:mt-10 flex justify-center relative h-8">
        

        <div class="rounded-md bg-gray-300 w-5/6 flex justify-center items-center relative border border-gray-400 relative" style="max-width: 900px;">
            <!-- <div v-for="(item,ind) in sectionArr" :key="ind" class="absolute top-0 w-32 h-16 -mt-4 -ml-16 flex flex-col items-center" style="z-index: 10" :style="{left: (ind/(sectionArr.length-1))*100 + '%'}"> -->
                <!-- <div class="w-8 h-8 rounded-full flex flex-col items-center justify-center bg-gray-400 progbar" :class="(ind)<=$store.state.appealSection ? 'bg-orange-500' : 'bg-gray-400'">
                    <p class="text-sm md:text-md text-white">{{ind+1}}</p>
                </div> -->
                <!-- <p class="absolute hidden md:block bottom-0 font-medium text-center w-full mt-1 text-sm uppercase progbar" :class="(ind)<=$store.state.appealSection ? 'text-gray-700' : 'text-gray-400'">{{item}}</p> -->
            <!-- </div> -->

            <div class="absolute h-full rounded left-0 top:0 h-6 w-full overflow-x-hidden overflow-y-hidden dropdslow" :class="($store.state.appealSection<3) ? 'bg-blue-800' : !$store.state.savingsCalc ? 'bg-teal-500' : 'bg-teal-500'" style="max-width: 100%;" :style="{width: $store.state.appealSection>-1 ? ($store.state.appealSection)/(sectionArr.length-1)*100 + '%' : '0%'}">
                
                <div class="absolute flex flex-col justify-center items center h-full" style="left:450px; transform: translateX(-50%); white-space: nowrap; overflow: hidden;">
                    <p v-if="showPercent" class="text-lg inline text-white font-medium " style=" white-space: nowrap; overflow: hidden;" >Progress: {{Math.round(($store.state.appealSection)/(sectionArr.length-1)*100)}}%</p>

                </div>
                
                
            </div>
            <div class="h-full flex justify-center items-center">
                <p v-if="showPercent" class="text-lg inline font-medium">Progress: {{Math.round(($store.state.appealSection)/(sectionArr.length-1).toFixed(2)*100)}}%</p>
            </div>
        </div>
        
    </div>
    
    </transition>
    <!-- <div v-if="$store.state.appealSection == -1" class="w-full  ml-auto w-5/6 mb-4 mt-10 flex justify-center relative" style="height: 3px;">
        
    </div> -->
    

    <div class="flex justify-center w-full sm:mt-6 relative overflow-x-hidden relative navbar overflow-y-hidden" :style="{'min-height': ($store.state.appealSection==3) ? '100vh' :  '110vh'}" >
        <!-- <transition
        leave-active-class="animated fadeOutLeft" 
        >
        <div v-if="$store.state.appealSection == -1" key="0" class="absolute top-0 left-0 right-0 mx-auto flex justify-center" style="max-width: 750px;">
            <div class="flex flex-col items-center">    
                <img data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true" class="w-48 h-48 rounded-full mr-1 border-4 border-white border-5 border-teal-500 shadow-xl" src="../assets/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                <p data-aos="fade-down"
                    data-aos-delay="400"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true" class="text-md lg:text-2xl mt-4 font-bold text-left text-gray-700 leading-tight" >Hey! I'm Cal (Computer Assisted Loan Interface). <br> I'm here to help you through the evaluation process. Ready to get started?</p>
                <div  class="flex items-start flex-col mt-2 w-full text-sm text-gray-700">
                    <p data-aos="fade"
                    data-aos-delay="600"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true" >Make sure you have access to: </p>
                    <ul class="list-disc flex-col flex ">
                        <li data-aos="fade-left"
                            data-aos-delay="800"
                            data-aos-duration="700"
                            data-aos-once="true">Lorem consectetur adipisicing elit</li>
                        <li data-aos="fade-left"
                            data-aos-delay="850"
                            data-aos-duration="700"
                            data-aos-once="true">Lorem ipsum dolor sit tur adipisicing elit</li>
                        <li data-aos="fade-left"
                            data-aos-delay="900"
                            data-aos-duration="700"
                            data-aos-once="true">Dolor sit aconsectetur adipisicing elit</li>
                    </ul>
                </div>
                <div data-aos="fade-up"
                        data-aos-delay="950"
                        data-aos-duration="900"
                        data-aos-once="true" @click="$store.commit('increment')" class="cursor-pointer bg-teal-500 text-white mt-6 h-8 text-sm md:text-md md:h-12 w-48 md:px-2 py-3 rounded-md flex justify-center items-center hover:bg-teal-600">
                    <p v-if="!submitted" >Estimate my savings</p>
                    <font-awesome-icon v-if="submitted" :icon="['fas', 'spinner']" spin size="lg" />
                </div>
            </div>
        
        </div>
        </transition> -->

        <transition-group
            :enter-active-class="enterClasses"
            :leave-active-class="exitClasses" 
            name="list" tag="div">
            

            <div key="1" :class="appealSecGet==0 ? 'questioncenter' : ['questionleftlarge', 'pointer-events-none']" class="questiontrans absolute top-0 left-0 right-0 mx-auto flex justify-center mt-2 md:mt-2" style="max-width: 950px;">
                <div class="flex items-stretch rounded-lg mb-12 dropdslow ">
                    <div class="flex flex-col px-2 md:px-16 pt-3 pb-20 ">
                        <div class="flex items-start flex-col mb-2 md:pt-6 md:mb-4">
                            <p class="text-2xl md:text-4xl font-bold text-center md:text-left w-full leading-tight text-teal-500">Let's start saving you money</p>
                        </div>
                        
                        <p class="text-md md:text-xl text-left w-full text-gray-800 my-2">Every year hundreds of families overpay on their property tax </p>
                        <p class="text-md md:text-xl text-left w-full text-gray-800 my-2">To get started, tell us about your property</p>

                        <form class="w-full mt-6">
                            
                            <div class="flex flex-wrap -mx-3 mb-2">

                                <div class="w-full px-3 mb-2 md:mb-10">
                                    <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                        Address
                                    </label>
                                    <input v-model="inputAddress" class="border-gray-400 appearance-none text-sm block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="42 Wallaby Way">
                                </div>
                                <div class="w-full flex items-center mb-2 md:mb-10">
                                    <div class="w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            City
                                        </label>
                                        <input v-model="inputCity" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Los Angeles">
                                    </div>

                                    <div class="w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            State
                                        </label>
                                        <div class="relative">
                                            <select v-model="inputState" class="cursor-pointer text-sm md:text-md border-gray-400 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                                <option class="text-lg" selected>CA</option>
                                                <option class="text-lg">TX</option>
                                                <option class="text-lg">NY</option>
                                                <option class="text-lg">WA</option>
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            Zip Code
                                        </label>
                                        <input v-model="inputZipCode" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
                                    </div>
                                </div>
                                

                                
                                
                            </div>
                            
                            <div class="hidden flex items-center justify-end w-full">
                                
                                <div class="flex justify-center items-center cursor-pointer w-1/3">
                                    <div class="ml-auto bg-teal-500 text-white mt-2 md:mt-6 h-12 px-12 py-3 w-full rounded-md flex items-center justify-center hover:bg-teal-600" @click="toNextPage">
                                        <p v-if="!submitted">Continue</p>
                                        <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" v-if="!submitted" :icon="['fas', 'chevron-down']" />
                                        <font-awesome-icon v-if="submitted" :icon="['fas', 'spinner']" spin size="lg" />
                                    </div>
                                </div>
                            </div>
                            
                            
                            </form>
                        
                    </div>
                        
                </div>

            </div>

            <div :class="appealSecGet==1 ? 'questioncenter' : appealSecGet==0 ? ['questionrightlarge', 'pointer-events-none'] : ['questionleftlarge', 'pointer-events-none']" key="2"  class="questiontrans absolute top-0 left-0 right-0 mx-auto flex justify-center mt-2 md:mt-2" style="max-width: 950px;">
                <div class="flex items-stretch rounded-lg mb-12 dropdslow ">
                    <div class="flex flex-col px-2 md:px-16 pt-3 pb-20 md:py-2">
                        <div class="flex items-start flex-col mb-2 md:pt-2 md:mb-4">
                            <p class="text-2xl md:text-4xl font-bold text-center md:text-left w-full leading-tight text-teal-500">You're on your way!</p>
                        </div>
                        
                        <p class="text-md md:text-xl text-left w-full text-gray-800 my-2">We have a few more questions that are specific to the property tax laws of your county  </p>

                        <form class="relative w-full flex flex-wrap mt-4 md:mt-6">
                            
                                <div class="w-full absolute top-0 flex flex-col items-center pr-2 questiontrans" style="left:0%" :class="(questionsNumStore==1 || questionsNumStore==2) ? ['questionleft', 'pointer-events-none'] : ['questioncenter']">
                                <p class="w-1/2 block tracking-wide text-gray-700 text-xs md:text-md lg:text-lg ml-1 font-medium mb-3 text-left" >
                                    Is this your primary residence?
                                </p>

                                <div class="w-1/2 justify-between flex mb-2 md:mb-4 ">
                                    <div class="w-1/2 md:h-32 md:w-48 border-2 rounded flex flex-col items-center justify-center cursor-pointer" @click="$emit('changeResidence', 1)" :class="(countyAnswers[0]==1 && !getPrimaryDifferent) ? ['border-teal-500', 'text-teal-500'] :['hover:border-gray-400', 'text-gray-500', 'hover:text-gray-600']">
                                        <svg class="fill-current h-1/2 w-1/2 mt-2" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                            <path d="M502.001 492.002H458.001V413.002C458.001 407.479 453.523 403.002 448.001 403.002C442.479 403.002 438.001 407.479 438.001 413.002V492.002H318.001V302.002C318.001 296.479 313.523 292.002 308.001 292.002H204.001C198.479 292.002 194.001 296.479 194.001 302.002V492.002H74.0011V266.001H77.8491C80.5011 
                                            266.001 83.0441 264.947 84.9201 263.072L256.001 91.991L427.082 263.072C428.958 264.947 431.501 266.001 434.153 266.001H438.001V341.001C438.001 346.524 442.479 351.001 448.001 351.001C453.523 351.001 458.001 346.524 458.001 341.001V266.001H502.001C506.046 266.001 509.692 263.564 511.24 259.828C512.788 256.092 
                                            511.931 251.79 509.072 248.93L263.072 2.92997C259.166 -0.975029 252.836 -0.975029 248.929 2.92997L154.929 96.93C151.024 100.835 151.024 107.167 154.929 111.072C158.835 114.978 165.167 114.978 169.072 111.072L256.001 24.143L477.858 246.001H438.295L263.072 70.778C259.166 66.873 252.836 66.873 248.929 70.778L73.7061 
                                            246.001H34.1431L113.072 167.073C116.977 163.168 116.977 156.836 113.072 152.93C109.167 149.026 102.835 149.025 98.9291 152.93L2.92905 248.93C0.0700519 251.79 -0.786948 256.091 0.761052 259.828C2.30905 263.565 5.95605 266.001 10.0011 266.001H54.0011V492.001H10.0011C4.47905 492.001 0.00105194 496.478 0.00105194 502.001C0.00105194 507.524 4.47905 512.001 10.0011 512.001H64.0011H204.001H308.001H448.001H502.001C507.523 512.001 512.001 507.524 512.001 502.001C512.001 496.478 507.523 492.002 502.001 492.002ZM298.001 492.002H214.001V312.002H298.001V492.002Z"/>
                                            <path d="M406.001 292.002H350.001C344.479 292.002 340.001 296.479 340.001 302.002V402.002C340.001 407.525 344.479 412.002 350.001 412.002H406.001C411.523 412.002 416.001 407.525 416.001 402.002V302.002C416.001 296.479 411.523 292.002 406.001 292.002ZM396.001 392.002H360.001V312.002H396.001V392.002Z"/>
                                            <path d="M162.001 292.002H106.001C100.479 292.002 96.001 296.479 96.001 302.002V402.002C96.001 407.525 100.479 412.002 106.001 412.002H162.001C167.523 412.002 172.001 407.525 172.001 402.002V302.002C172.001 296.479 167.523 292.002 162.001 292.002ZM152.001 392.002H116.001V312.002H152.001V392.002Z"/>
                                            <path d="M256.001 164.322C230.637 164.322 210.001 184.958 210.001 210.322C210.001 235.686 230.637 256.322 256.001 256.322C281.365 256.322 302.001 235.686 302.001 210.322C302.001 184.958 281.365 164.322 256.001 164.322ZM256.001 236.322C241.664 236.322 230.001 224.658 230.001 210.322C230.001 195.986 241.664 184.322 256.001 184.322C270.338 184.322 282.001 195.986 282.001 210.322C282.001 224.658 270.338 236.322 256.001 236.322Z"/>
                                            <path d="M244.07 394.932C242.211 393.072 239.63 392.002 237.001 392.002C234.371 392.002 231.791 393.072 229.931 394.932C228.071 396.792 227.001 399.372 227.001 402.002C227.001 404.632 228.07 407.212 229.931 409.072C231.792 410.932 234.371 412.002 237.001 412.002C239.631 412.002 242.211 410.932 244.07 409.072C245.93 407.212 247.001 404.632 247.001 402.002C247.001 399.372 245.931 396.792 244.07 394.932Z"/>
                                            <path d="M140.07 125.932C138.211 124.072 135.631 123.002 133.001 123.002C130.371 123.002 127.791 124.072 125.931 125.932C124.071 127.792 123.001 130.372 123.001 133.002C123.001 135.632 124.07 138.212 125.931 140.072C127.792 141.932 130.371 143.002 133.001 143.002C135.631 143.002 138.211 141.932 140.07 140.072C141.93 138.212 143.001 135.632 143.001 133.002C143.001 130.372 141.931 127.792 140.07 125.932Z"/>
                                            <path d="M455.07 367.261C453.211 365.402 450.63 364.331 448.001 364.331C445.371 364.331 442.791 365.401 440.931 367.261C439.071 369.131 438.001 371.701 438.001 374.331C438.001 376.961 439.07 379.541 440.931 381.411C442.791 383.271 445.371 384.331 448.001 384.331C450.631 384.331 453.211 383.271 455.07 381.411C456.93 379.541 458.001 376.971 458.001 374.331C458.001 371.701 456.931 369.121 455.07 367.261Z"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0">
                                            <rect width="512.002" height="512.002" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        
                                        <p class="font-medium text-sm md:text-md text-center mt-1 select-none">Yes</p>
                                    </div>
                                    <div class="w-1/2 md:h-32 md:w-48 border-2 ml-4 rounded flex flex-col items-center justify-center cursor-pointer" @click="enterResidence" :class="getPrimaryDifferent ? ['border-teal-500', 'text-teal-500'] : ['hover:border-gray-400', 'text-gray-500', 'hover:text-gray-600']">
                                        
                                        <svg class="fill-current h-1/2 w-1/2 mt-2" enable-background="new 0 0 512.014 512.014" viewBox="0 0 512.014 512.014" xmlns="http://www.w3.org/2000/svg"><g>
                                            <path d="m162.554 86.993h212.198c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-212.198c-8.834 0-16.021 7.187-16.021 16.021v52.517c0 8.834 7.187 16.021 16.021 16.021h212.198c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-212.198c-.563 0-1.021-.458-1.021-1.021v-52.517c.001-.563.459-1.021 1.021-1.021z"/><path d="m157.495 200.686h18.205c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-18.205c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m341.865 185.686h-124.24c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h124.241c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.501-7.5z"/><path d="m157.495 251.428h184.37c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-184.37c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m157.495 303.694h184.37c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-184.37c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m157.495 355.96h184.37c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-184.37c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m157.495 408.227h220.736c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-220.736c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m500.579 148.473-2.908-37.638c-.693-8.982-5.593-16.774-12.654-21.504v-14.967c0-12.405-8.412-22.876-19.83-26.025-.285-26.702-22.084-48.339-48.852-48.339h-359.703c-.093 0-.183.011-.274.014-.226.001-.45-.009-.676-.005-26.421.506-47.916 22.422-47.916 48.856v16.025c0 5.207 4.236 9.443 9.443 9.443h73.289v124.168c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-148.818c0-12.843-5.112-25.395-14.049-34.683h324.886c18.559 0 33.673 15.008 33.857 33.526-11.083 3.363-19.173 13.671-19.173 25.838v14.966c-7.062 4.73-11.961 12.522-12.654 21.503l-2.634 34.083-21.302 14.759c-9.425 6.53-15.052 17.274-15.052 28.74v100.166l-7.8 14.999c-1.911 3.675-.48 8.203 3.194 10.114 1.105.575 2.288.848 3.454.848 2.708 0 5.324-1.473 6.66-4.042l8.646-16.626c.556-1.068.846-2.255.846-3.46v-101.997c0-6.547 3.213-12.682 8.595-16.41l11.389-7.891c-3.548 55.099-3.42 110.803.414 165.823.287 4.132 3.854 7.249 8.003 6.96 4.132-.287 7.248-3.87 6.96-8.003-1.541-22.12-2.475-44.352-2.808-66.609h62.17c-.711 47.042-4.144 94.049-10.252 140.642h-41.672c-1.838-14.024-3.462-28.204-4.81-42.265-.396-4.123-4.063-7.144-8.182-6.75-4.123.396-7.146 4.059-6.75 8.182 1.575 16.428 3.504 33.03 5.732 49.348l5.843 42.784c.649 4.76 3.029 8.934 6.445 11.922.103.493.257.982.466 1.462l15.22 34.964c1.191 2.737 3.893 4.507 6.877 4.507s5.686-1.77 6.877-4.507l15.22-34.964c.209-.479.363-.969.466-1.462 3.417-2.988 5.796-7.162 6.445-11.922l5.843-42.784c11.878-86.975 14.472-175.451 7.711-262.971zm-410.081-89.139h-67.732v-10.469c0-18.319 14.895-33.509 33.203-33.858 8.901-.204 17.45 3.268 23.989 9.682 6.699 6.572 10.541 15.683 10.541 24.994v9.651zm339.913 90.295.47-6.08h54.273l.47 6.08c1.561 20.209 2.596 40.471 3.149 60.752h-61.516c.553-20.306 1.596-40.579 3.154-60.752zm2.909-37.64c.541-7.001 6.465-12.484 13.486-12.484h22.424c7.021 0 12.945 5.483 13.486 12.485l1.279 16.559h-51.955zm12.699-27.484v-10.141c0-6.616 5.383-11.999 11.999-11.999s11.999 5.383 11.999 11.999v10.141h-.787-22.424zm-19.215 162.782c-.02-7.303.023-14.605.133-21.906h62.149c.109 7.301.177 14.604.156 21.906zm45.36 204.911c-.292 2.139-2.141 3.751-4.299 3.751h-19.695c-2.158 0-4.007-1.612-4.299-3.751l-4.68-34.27h37.653zm-18.43 18.751h8.568l-4.284 9.842z"/><path d="m419.984 497.014h-179.963c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h179.962c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.499-7.5z"/><path d="m208.058 497.014h-99.13c-1.891 0-3.43-1.538-3.43-3.43v-263.12c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v263.12c0 10.162 8.268 18.43 18.43 18.43h99.13c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/></g>
                                        </svg>


                                        <p class="font-medium text-sm md:text-md text-center mt-1 select-none">No</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-2 overflow-y-hidden dropdown pt-6" :class="(getPrimaryDifferent && questionsNumStore == 0) ? 'h-64' : 'h-0'">

                                <div class="w-full px-3">
                                    <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                        Primary Address
                                    </label>
                                    <input v-model="inputPrimaryAddress" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="42 Wallaby Way">
                                </div>
                                <div class="w-full flex items-center">
                                    <div class="w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            City
                                        </label>
                                        <input v-model="inputPrimaryCity" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Los Angeles">
                                    </div>

                                    <div class="w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            State
                                        </label>
                                        <div class="relative">
                                            <select v-model="inputPrimaryState" class="cursor-pointer border-gray-400 block text-sm md:text-md appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                                                <option class="text-lg" selected>CA</option>
                                                <option class="text-lg">TX</option>
                                                <option class="text-lg">NY</option>
                                                <option class="text-lg">WA</option>
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-1/3 px-3 mb-6 md:mb-0">
                                        <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            Zip Code
                                        </label>
                                        <input v-model="inputPrimaryZipCode" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
                                    </div>
                                </div>
                                

                                
                                
                            </div>

                                </div>
                                

                                <div class="w-1/2 absolute top-0 flex flex-col items-center pr-2 questiontrans" style="left:25%" :class="(questionsNumStore==0) ? ['questionright', 'pointer-events-none'] : (questionsNumStore==1) ? ['questioncenter'] : ['questionleft', 'pointer-events-none']">
                                <p class="w-full block tracking-wide text-gray-700 text-xs md:text-md lg:text-lg ml-1 font-medium mb-3 text-left" >
                                    Are you a Veteran?
                                </p>
                                <div class="w-full justify-between flex mb-2 md:mb-4 ">
                                    
                                    <div class="w-1/2 md:h-32 md:w-48 border-2 rounded flex flex-col items-center justify-center cursor-pointer" @click="$emit('changeVet', 1)" :class="countyAnswers[1] == 1 ? ['border-teal-500', 'text-teal-500'] :['hover:border-gray-400', 'text-gray-500', 'hover:text-gray-600']">
                                        <svg class="h-1/2 w-1/2 fill-current mt-2" viewBox="0 0 424 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                            <path d="M246.831 43.466H199.054C194.911 43.466 191.552 46.8238 191.552 50.9677V74.8452C191.552 92.0242 215.148 103.454 219.879 105.57C220.854 106.007 
                                            221.898 106.224 222.942 106.224C223.986 106.224 225.032 106.006 226.006 105.57C230.736 103.454 254.332 92.0242 254.332 74.8452V50.9677C254.332 46.8238 
                                            250.974 43.466 246.831 43.466ZM239.329 74.8452C239.329 77.5729 236.091 81.5638 230.667 85.5227C227.849 87.5792 224.979 89.2446 222.908 90.3528C215.376
                                            86.3449 206.555 79.5403 206.555 74.8452V58.4695H239.33V74.8452H239.329Z"/>
                                            <path d="M430.43 480.424L426.028 431.233C423.183 399.45 401.59 373.007 371.52 363.63C371.194 360.229 370.114 356.918 368.267 353.925C365.091 348.778 
                                            360.102 345.177 354.133 343.763L329.98 338.329C320.26 336.025 310.5 340.39 305.507 348.444L287.711 344.421L274.41 331.585C273.498 323.263 273.65 314.855 
                                            274.887 306.57L276.869 293.311C300.985 270.816 312.774 250.771 312.774 232.369C312.774 230.034 312.679 227.751 312.485 225.492C312.397 224.598 312.318
                                            223.649 312.245 222.655C326.954 219.74 338.209 206.775 338.399 191.265C338.506 182.537 335.186 174.31 329.051 168.1C324.712 163.707 319.344 160.718 
                                            313.486 159.338V139.114C326.03 125.04 332.913 106.734 332.913 87.2001C332.913 39.117 283.58 0 222.942 0C162.304 0 112.972 39.117 112.972 87.2001C112.972 
                                            105.997 120.565 124.341 134.395 139.194V159.311C128.537 160.69 123.17 163.68 118.831 168.073C112.696 174.283 109.376 182.511 109.483 191.238C109.674 
                                            206.751 120.932 219.717 135.643 222.629C135.568 223.677 135.485 224.679 135.393 225.618C135.206 227.74 135.112 230.012 135.112 232.368C135.112 250.687 
                                            146.792 270.63 170.668 292.984L172.66 306.31C173.839 314.203 174.035 322.209 173.263 330.148L158.448 343.905L138.473 348.426C133.48 340.382 123.737 
                                            336.02 114.09 338.304L89.7695 343.777C83.8852 345.173 78.895 348.773 75.7203 353.92C73.8729 356.913 72.7926 360.224 72.4665 363.626C42.4036 373.007 
                                            20.8166 399.449 17.973 431.225L13.569 480.426C12.8458 488.506 15.5714 496.575 21.0487 502.565C26.5329 508.562 34.3427 512.002 42.4736 512.002H129.669C133.812 
                                            512.002 137.17 508.644 137.17 504.5C137.17 500.356 133.812 496.999 129.669 496.999H113.812V438.449C113.812 434.305 110.453 430.947 106.31 430.947C102.167 
                                            430.947 98.8086 434.305 98.8086 438.449V496.999H42.4746C38.4867 496.999 34.8089 495.38 32.1212 492.439C29.4406 489.508 28.1593 485.717 28.5134 
                                            481.764L32.9174 432.564C35.1869 407.203 52.2419 386.057 76.0744 378.238C80.2273 384.543 87.35 388.455 94.9667 388.455C96.6731 388.455 98.4045 388.258 
                                            100.131 387.85L124.451 382.376C130.336 380.982 135.325 377.381 138.501 372.235C140.247 369.404 141.304 366.289 141.692 363.083L156.749 359.675L169.709 
                                            405.262C170.378 407.616 172.151 409.493 174.461 410.297C175.264 410.576 176.096 410.713 176.924 410.713C178.478 410.713 180.017 410.23 181.312 
                                            409.296L197.953 397.298L203.483 411.766L180.701 496.998H164.588C160.445 496.998 157.086 500.355 157.086 504.499C157.086 508.643 160.445 512.001 164.588
                                            512.001H401.522C409.654 512.001 417.464 508.561 422.949 502.563C428.428 496.573 431.154 488.505 430.43 480.424V480.424ZM125.733 364.354C124.662 366.089
                                            122.978 367.304 121.075 367.755L96.7551 373.229C92.6562 374.197 88.5292 371.657 87.558 367.562C87.0879 365.579 87.419 363.532 88.4892 361.796C89.5605 
                                            360.061 91.2439 358.846 93.1473 358.395L117.468 352.921C118.058 352.781 118.649 352.714 119.231 352.714C122.69 352.714 125.833 355.082 126.664 
                                            358.588C127.134 360.57 126.804 362.619 125.733 364.354ZM317.323 358.597C318.152 355.099 321.281 352.734 324.782 352.734C325.381 352.734 325.991 
                                            352.803 326.602 352.949L350.756 358.384C352.742 358.855 354.426 360.07 355.497 361.805C356.567 363.54 356.897 365.587 356.428 367.571C355.456 371.668
                                            351.327 374.209 347.149 373.218L322.993 367.783C321.008 367.312 319.324 366.097 318.254 364.362C317.184 362.627 316.853 360.578 317.323 
                                            358.597V358.597ZM275.533 353.52L265.02 390.85L235.299 369.422L265.51 343.846L275.533 353.52ZM188.002 307.908C198.233 315.823 210.896 320.174 
                                            223.824 320.173H224.055C236.863 320.173 249.391 315.919 259.545 308.178C258.731 315.28 258.611 322.441 259.158 329.566L223.13 360.067L188.295
                                                330.576C188.96 323.03 188.864 315.435 188.002 307.908V307.908ZM235.668 388.185L229.525 403.852H216.524L210.548 388.215L223.129 379.144L235.668
                                                388.185ZM318.377 178.643C321.671 181.979 323.453 186.396 323.397 191.082C323.305 198.551 318.426 204.904 311.724 207.27C311.667 197.201 
                                                312.035 185.643 312.791 174.845C314.856 175.72 316.752 176.998 318.377 178.643ZM136.16 207.242C129.457 204.877 124.578 198.523 124.486 191.054C124.428
                                                186.368 126.211 181.951 129.506 178.615C131.131 176.97 133.026 175.692 135.091 174.817C135.848 185.606 136.216 197.156 136.16 207.242ZM127.975
                                                87.2001C127.975 47.3909 170.577 15.0035 222.942 15.0035C275.308 15.0035 317.909 47.3909 317.909 87.2001C317.909 102.815 312.526 117.424 302.692 
                                                128.687H145.095C133.887 116.56 127.975 102.277 127.975 87.2001V87.2001ZM149.399 143.689H298.484V158.436H149.399V143.689ZM150.115 232.367C150.115 
                                                230.446 150.19 228.617 150.331 227.006C151.577 214.317 151.423 192.859 150.037 173.44L297.844 173.465C296.462 192.857 296.308 214.276 297.543 
                                                226.866C297.692 228.61 297.769 230.461 297.769 232.369C297.769 249.143 281.78 270.942 251.514 295.42C243.776 301.709 234.028 305.168 224.025 
                                                305.168C223.995 305.168 223.964 305.168 223.935 305.168C223.907 305.168 223.88 305.168 223.852 305.168C213.862 305.168 204.098 301.701 196.334
                                                    295.385C166.098 270.933 150.115 249.142 150.115 232.367V232.367ZM181.217 390.867L170.504 353.184L180.65 343.762L210.96 369.422L181.217 
                                                    390.867ZM196.234 496.997L217.119 418.857H228.896L249.999 496.997H196.234ZM411.881 492.437C409.192 495.376 405.514 496.997 401.525 
                                                    496.997H345.191V438.447C345.191 434.303 341.834 430.945 337.69 430.945C333.546 430.945 330.188 434.303 330.188 438.447V496.997H265.542L242.53
                                                    411.789L248.233 397.245L264.946 409.294C266.24 410.228 267.78 410.711 269.334 410.711C270.164 410.711 270.999 410.573 271.805 410.292C274.118
                                                    409.484 275.89 407.6 276.554 405.242L289.253 360.152L302.295 363.101C302.686 366.302 303.742 369.413 305.486 372.24C308.662 377.386 313.651
                                                    380.987 319.618 382.4L343.774 387.835C345.522 388.249 347.271 388.448 348.995 388.448C356.641 388.448 363.762 384.539 367.914 378.241C391.754
                                                        386.057 408.815 407.205 411.086 432.572L415.488 481.762C415.841 485.716 414.559 489.507 411.881 492.437V492.437Z"/>
                                            <path d="M306.645 430.945H277.985C273.841 430.945 270.483 434.303 270.483 438.447C270.483 442.591 273.841 445.949 277.985 445.949H306.645C310.788 445.949 
                                            314.146 442.591 314.146 438.447C314.146 434.303 310.787 430.945 306.645 430.945Z"/>
                                            <path d="M175.779 438.447C175.779 434.303 172.421 430.945 168.278 430.945H139.617C135.474 430.945 132.115 434.303 132.115 438.447C132.115 442.591 135.474 
                                            445.949 139.617 445.949H168.278C172.421 445.949 175.779 442.59 175.779 438.447Z"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0">
                                            <rect x="-34" width="512" height="512" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        <p class="font-medium text-sm md:text-md text-center mt-1 select-none">Yes</p>
                                    </div>
                                    <div class="w-1/2 md:h-32 md:w-48 border-2 ml-4 rounded flex flex-col items-center justify-center cursor-pointer" @click="$emit('changeVet', 0)" :class="countyAnswers[1] == 0 ? ['border-teal-500', 'text-teal-500'] : ['hover:border-gray-400', 'text-gray-500', 'hover:text-gray-600']">
                                        <svg class='fill-current h-1/2 w-1/2 mt-2' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path d="M421.054,414.843c-4.142,0-7.5,3.358-7.5,7.5v70.514c0,2.283-1.858,4.141-4.141,4.141h-40.317V349.301
                                                    c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v147.698h-81.185l23.543-25.9c2.572-2.83,3.785-6.861,3.244-10.787
                                                    c-0.01-0.076-0.022-0.152-0.035-0.228L277.24,327.617l6.041-9.094c3.34,2.372,5.913,4.656,10.738,4.656
                                                    c4.908,0,9.497-2.747,11.755-7.269v-0.001l23.65-47.4l53.876,20.865c1.949,0.836,30.252,13.582,30.252,47.238v50.73
                                                    c-0.001,4.141,3.357,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-50.73c0-44.344-37.969-60.463-39.585-61.128
                                                    c-0.047-0.02-0.095-0.039-0.143-0.057l-89.668-34.726v-21.03c14.242-11.076,24.117-27.495,26.596-46.227
                                                    c7.101-0.5,13.69-3.152,19.071-7.779c7.027-6.043,11.059-14.838,11.059-24.126c0-7.708-2.781-15.068-7.737-20.803V92.953
                                                    C348.144,41.699,306.446,0,255.192,0c-51.254,0-92.952,41.699-92.952,92.953v28.511c-5.009,5.677-7.733,12.665-7.733,20.074
                                                    c0,9.291,4.03,18.085,11.059,24.129c5.377,4.625,11.962,7.274,19.061,7.775c2.499,19.083,12.662,36.114,28.117,47.339v19.92
                                                    l-89.571,34.725c-0.047,0.018-0.094,0.037-0.141,0.056c-1.617,0.665-39.585,16.784-39.585,61.128v156.245
                                                    c0,10.555,8.587,19.142,19.142,19.142h71.457c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5h-16.137V349.301
                                                    c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v147.698h-40.319c-2.283,0-4.141-1.858-4.141-4.141V336.611
                                                    c0-33.769,28.493-46.486,30.243-47.234l53.834-20.87l23.652,47.402c2.263,4.533,6.858,7.27,11.756,7.27
                                                    c4.801,0,7.349-2.249,10.738-4.656l6.041,9.094l-22.421,132.468c-0.013,0.075-0.024,0.15-0.035,0.226
                                                    c-0.542,3.924,0.671,7.957,3.244,10.789l23.543,25.9h-29.995c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h200.365
                                                    c10.555,0,19.142-8.588,19.142-19.142v-70.514C428.554,418.201,425.196,414.843,421.054,414.843z M315.375,263.069l-22.049,44.19
                                                    c-0.548-0.389-12.233-8.691-26.517-18.834c6.198-7.651-1.053,1.299,27.235-33.617L315.375,263.069z M271.043,309.833l-5.718,8.607
                                                    h-18.703l-5.718-8.607l15.07-10.703L271.043,309.833z M227.743,243.121v-14.036c9.112,3.673,18.85,5.376,28.36,5.376
                                                    c9.833,0,19.476-2.096,28.052-5.846v14.567l-28.181,34.785L227.743,243.121z M340.881,141.539
                                                    c-0.001,4.913-2.129,9.562-5.839,12.753c-2.453,2.11-5.416,3.459-8.661,3.987v-33.477
                                                    C335.001,126.202,340.881,133.352,340.881,141.539z M184.007,158.279c-8.718-1.415-14.5-8.623-14.5-16.741
                                                    c0-8.018,6.647-14.544,14.5-16.359V158.279z M184.41,109.896c-2.389,0.274-5.127,0.921-7.168,1.615V92.953
                                                    c0-42.983,34.968-77.952,77.951-77.952c42.983,0,77.951,34.969,77.951,77.952v18.043c-2.18-0.663-4.441-1.101-6.762-1.307
                                                    c0-7.237,0.063-5.841-23.612-31.294c-4.354-4.678-11.556-5.658-17.037-2.077c-26.13,17.069-58.005,25.644-87.415,23.532
                                                    C191.867,99.367,185.991,103.616,184.41,109.896z M199.008,164.184v-46.792v-2.465c32.375,1.896,66.318-7.722,93.739-25.283
                                                    c10.858,11.658,16.738,17.773,18.634,20.099c0,5.884,0,47.705,0,54.44c0,30.447-24.826,55.276-55.277,55.276
                                                    C221.91,219.46,199.008,192.934,199.008,164.184z M218.623,307.259l-22.049-44.19l21.293-8.247l27.241,33.625
                                                    C231.255,298.284,219.88,306.366,218.623,307.259z M227.228,461.702l21.709-128.263h14.071l21.709,128.263l-28.744,31.623
                                                    L227.228,461.702z"/>
                                            </g>
                                        </g>
                                        </svg>

                                        <p class="font-medium text-sm md:text-md text-center mt-1 select-none">No</p>
                                    </div>

                                    
                                    
                                </div>
                                </div>

                                <div class="w-1/2 absolute top-0 flex flex-col items-center pr-2 questiontrans" style="left:25%" :class="(questionsNumStore==1 || questionsNumStore==0) ? ['pointer-events-none','questionright'] : ['questioncenter']">
                                <p class="w-full block tracking-wide text-gray-700 text-xs md:text-md lg:text-lg ml-1 font-medium mb-3 text-left" >
                                    Are you over the age of 65?
                                </p>

                                <div  class="w-full justify-between flex mb-2 md:mb-4 ">
                                    <div class="w-1/2 md:h-32 md:w-48 border-2 rounded flex flex-col items-center justify-center cursor-pointer" @click="$emit('changeSixtyFive', 1)" :class="countyAnswers[2]==1 ? ['border-teal-500', 'text-teal-500'] :['hover:border-gray-400', 'text-gray-500', 'hover:text-gray-600']">
                                        <svg class="h-1/2 w-1/2 fill-current mt-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M504.813,254.448L475.271,121.49c-4.75-21.292-23.292-36.156-45.083-36.156c-25.458,0-46.188,20.719-46.188,46.177v7.156
                                                        c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667v-7.156c0-13.698,11.146-24.844,24.854-24.844
                                                        c11.729,0,21.708,8.01,24.25,19.458l29.542,132.948c3.667,16.521,5.833,33.375,6.479,50.26h-0.87
                                                        c-5.441-53.75-50.428-96-105.589-96c-48.228,0-88.613,32.385-101.758,76.398c-6.527-6.881-15.129-12.398-26.242-12.398
                                                        s-19.715,5.517-26.242,12.398c-13.145-44.013-53.53-76.398-101.758-76.398c-55.16,0-100.147,42.25-105.589,96h-0.87
                                                        c0.646-16.885,2.813-33.74,6.479-50.26l29.542-132.938c2.542-11.458,12.521-19.469,24.25-19.469
                                                        c13.708,0,24.854,11.146,24.854,24.844v7.156c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667v-7.156
                                                        c0-25.458-20.729-46.177-46.188-46.177c-21.792,0-40.333,14.865-45.083,36.167L7.188,254.448C2.417,275.969,0,298.021,0,320
                                                        c0,5.896,4.771,10.667,10.667,10.667h11.745c5.441,53.75,50.428,96,105.589,96c57.904,0,104.951-46.451,106.398-104.012
                                                        c2.143-5.964,10.667-23.988,21.602-23.988c10.654,0,19.07,17.02,21.599,23.956c1.43,57.576,48.487,104.044,106.401,104.044
                                                        c55.16,0,100.147-42.25,105.589-96h11.745c5.896,0,10.667-4.771,10.667-10.667C512,298.021,509.583,275.969,504.813,254.448z
                                                        M128,405.333c-47.063,0-85.333-38.281-85.333-85.333c0-47.052,38.271-85.333,85.333-85.333s85.333,38.281,85.333,85.333
                                                        C213.333,367.052,175.063,405.333,128,405.333z M384,405.333c-47.063,0-85.333-38.281-85.333-85.333
                                                        c0-47.052,38.271-85.333,85.333-85.333s85.333,38.281,85.333,85.333C469.333,367.052,431.063,405.333,384,405.333z"/>
                                                    <path d="M128,256c-35.292,0-64,28.708-64,64c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667
                                                        c0-23.531,19.146-42.667,42.667-42.667c5.896,0,10.667-4.771,10.667-10.667C138.667,260.771,133.896,256,128,256z"/>
                                                    <path d="M384,256c-35.292,0-64,28.708-64,64c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667
                                                        c0-23.531,19.146-42.667,42.667-42.667c5.896,0,10.667-4.771,10.667-10.667C394.667,260.771,389.896,256,384,256z"/>
                                                </g>
                                            </g>
                                        </g>
                                        </svg>
                                        <p class="font-medium text-sm md:text-md text-center mt-1 select-none">Yes</p>
                                    </div>
                                    <div class="w-1/2 md:h-32 md:w-48 border-2 ml-4 rounded flex flex-col items-center justify-center cursor-pointer" @click="$emit('changeSixtyFive', 0)" :class="countyAnswers[2]==0 ? ['border-teal-500', 'text-teal-500'] : ['hover:border-gray-400', 'text-gray-500', 'hover:text-gray-600']">
                                        
                                        <svg class='fill-current h-1/2 w-1/2 mt-2' viewBox="0 0 424 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M438 384H374V288C373.974 264.669 364.694 242.301 348.196 225.804C331.699 209.306 309.331 200.026 286 200H205.561C207.853 194.103 208.546 187.706 207.57 
                                            181.455C206.593 175.205 203.982 169.323 200 164.407V159C200 129.296 188.2 100.808 167.196 79.804C146.192 58.8 117.704 47 88 47C58.2958 47 29.8081 58.8 8.80404 
                                            79.804C-12.2 100.808 -24 129.296 -24 159V199C-24.0398 221.124 -17.5114 242.761 -5.24211 261.171C7.02723 279.581 24.4853 293.935 44.92 302.413C45.277 302.562 45.641 
                                            302.693 46 302.838V357.309L6.463 409.416C-0.813619 412.628 -6.99981 417.886 -11.3429 424.55C-15.686 431.214 -17.9989 438.996 -18 446.95V456C-18 458.122 -17.1571 460.157 
                                            -15.6569 461.657C-14.1566 463.157 -12.1217 464 -10 464H46C47.1848 464 48.3548 463.737 49.4255 463.229C50.4961 462.722 51.4407 461.983 52.191 461.066L124.191 
                                            373.066C125.361 371.637 126 369.847 126 368V363.5C130.301 366.371 134.781 368.965 139.413 371.264L110.462 409.423C103.2 412.653 97.0266 417.915 92.6864 
                                            424.573C88.3462 431.232 86.0241 439.004 86 446.952V456C86 458.122 86.8429 460.157 88.3431 461.657C89.8434 463.157 91.8783 464 94 464H150C151.2 464 152.384 
                                            463.731 153.465 463.212C154.547 462.692 155.497 461.936 156.247 461L217.847 384H229.163L226.342 412.234C225.589 419.748 226.655 427.333 229.45 434.349C232.245 
                                            441.365 236.687 447.605 242.401 452.543C248.115 457.481 254.933 460.971 262.279 462.72C269.626 464.469 277.285 464.425 284.611 462.591L303.804 457.791C309.606 460.995 315.99 463.009 322.581 463.713C329.172 464.417 335.837 463.797 342.185 461.891L377.3 451.364L378.708 453.477C380.647 456.386 383.208 458.829 386.206 460.629C389.204 462.429 392.563 463.541 396.043 463.885C399.523 464.23 403.035 463.798 406.327 462.62C409.62 461.443 412.61 459.55 415.082 457.077C416.325 455.832 417.427 454.453 418.367 452.965L418.708 453.476C421.522 457.694 425.619 460.895 430.392 462.606C435.166 464.317 440.363 464.448 445.216 462.978C450.069 461.509 454.321 458.517 457.343 454.445C460.366 450.374 461.998 445.438 462 440.367V408C461.993 401.637 459.462 395.537 454.962 391.038C450.463 386.538 444.363 384.007 438 384V384ZM358 288V300.261C351.101 294.072 342.556 290.014 333.399 288.579C324.242 287.143 314.866 288.391 306.403 292.171C297.941 295.952 290.754 302.103 285.714 309.881C280.673 317.659 277.994 326.731 278 336V368H262V216H286C305.089 216.021 323.39 223.614 336.888 237.112C350.386 250.61 357.979 268.911 358 288V288ZM-8 199V159C-7.99045 134.065 1.72041 110.113 19.0775 92.2109C36.4346 74.3093 60.076 63.8633 84.9985 63.0837C109.921 62.3041 134.169 71.252 152.611 88.0339C171.053 104.816 182.242 128.115 183.81 153C180.013 151.675 176.021 150.999 172 151H168V167H172C177.304 167 182.391 169.107 186.142 172.858C189.893 176.609 192 181.696 192 187C192 192.304 189.893 197.391 186.142 201.142C182.391 204.893 177.304 207 172 207H168V223H172C175.124 223 178.234 222.593 181.252 221.789C175.884 243.751 162.938 263.114 144.695 276.468C126.452 289.822 104.081 296.31 81.524 294.789C81.396 294.774 81.267 294.761 81.136 294.753C56.9147 293.047 34.2428 282.215 17.6984 264.442C1.15396 246.67 -8.03034 223.281 -8 199V199ZM42.209 448H-2V446.95C-1.99922 441.846 -0.438212 436.865 2.47374 432.674C5.38569 428.482 9.50939 425.281 14.292 423.5C15.7183 422.972 16.9641 422.047 17.883 420.835L60.373 364.835C61.4284 363.444 61.9998 361.746 62 360V307.964C67.7849 309.337 73.6703 310.246 79.6 310.681C79.739 310.698 79.881 310.711 80.022 310.721C80.451 310.751 80.879 310.763 81.308 310.788L86.563 320.421C92.721 331.708 100.632 341.946 110 350.753V365.144L42.209 448ZM206 373.194L146.155 448H102V446.952C102.015 441.85 103.582 436.874 106.494 432.685C109.406 428.496 113.523 425.292 118.3 423.5C119.724 422.97 120.967 422.046 121.885 420.836L164.372 364.836C165.428 363.445 166 361.746 166 360V320H150V357.309L149.3 358.237C128.599 348.715 111.524 332.765 100.616 312.759L99.338 310.416C101.013 310.246 102.678 310.052 104.318 309.807C128.014 306.32 149.967 295.328 166.955 278.444C183.942 261.56 195.068 239.674 198.7 216H246V368H222V320H206V373.194ZM280.718 447.072C275.882 448.28 270.827 448.307 265.978 447.151C261.13 445.995 256.631 443.69 252.86 440.43C249.089 437.17 246.158 433.051 244.313 428.421C242.468 423.791 241.764 418.785 242.26 413.825L245.24 384H278V414.143C277.992 425.371 281.794 436.269 288.784 445.056L280.718 447.072ZM398.37 448C396.698 447.998 395.072 447.446 393.745 446.429L405.568 442.882C405.048 444.377 404.075 445.673 402.785 446.59C401.495 447.507 399.951 448 398.368 448H398.37ZM446 440.367C446 442.005 445.473 443.6 444.497 444.916C443.52 446.231 442.147 447.198 440.579 447.672C439.011 448.147 437.332 448.105 435.79 447.552C434.248 446.999 432.925 445.964 432.016 444.601L420.656 427.562C419.706 426.136 418.322 425.053 416.71 424.473C415.098 423.892 413.342 423.845 411.701 424.337L337.585 446.572C332.53 448.089 327.19 448.402 321.991 447.488C316.793 446.574 311.881 444.457 307.646 441.306C303.412 438.156 299.972 434.059 297.603 429.342C295.234 424.626 294 419.421 294 414.143V336C294 327.513 297.371 319.374 303.373 313.373C309.374 307.371 317.513 304 326 304C334.487 304 342.626 307.371 348.627 313.373C354.629 319.374 358 327.513 358 336V392C358 394.122 358.843 396.157 360.343 397.657C361.843 399.157 363.878 400 366 400H438C440.121 400.002 442.154 400.846 443.654 402.346C445.154 403.846 445.998 405.879 446 408V440.367Z"/>
                                            <path d="M24 215C32.8366 215 40 207.837 40 199C40 190.163 32.8366 183 24 183C15.1634 183 8 190.163 8 199C8 207.837 15.1634 215 24 215Z"/>
                                            <path d="M120 215C128.837 215 136 207.837 136 199C136 190.163 128.837 183 120 183C111.163 183 104 190.163 104 199C104 207.837 111.163 215 120 215Z"/>
                                            <path d="M72 255C78.363 254.993 84.4633 252.462 88.9627 247.963C93.462 243.463 95.9929 237.363 96 231H80C80 233.122 79.1571 235.157 77.6569 236.657C76.1566 238.157 74.1217 239 72 239C69.8783 239 67.8434 238.157 66.3431 236.657C64.8429 235.157 64 233.122 64 231H48C48.0071 237.363 50.538 243.463 55.0373 247.963C59.5367 252.462 65.637 254.993 72 255V255Z"/>
                                        </svg>


                                        <p class="font-medium text-sm md:text-md text-center mt-1 select-none">No</p>
                                    </div>
                                </div>

                                </div>
                                

                            
                            
                            
                            
                            
                        </form>
                    </div>
                        
                </div>

            </div>

            <div  :class="appealSecGet==2 ? 'questioncenter' : appealSecGet==1 ? ['questionrightlarge', 'pointer-events-none'] : ['questionleftlarge', 'pointer-events-none']" key="3"  class="questiontrans absolute top-0 left-0 right-0 mx-auto flex justify-center mt-2 md:mt-2" style="max-width: 950px;">
                <div class="flex items-stretch rounded-lg mb-12 overflow-y-hidden dropdslow overflow-x-hidden" style="max-width: 750px;" :style="{'max-height' : submitted ? '100px' : '1250px'}">
                <div class="flex w-full flex-col items-stretch px-2 md:px-16 pt-3 md:pb-20" style="max-width: 750px;">
                    <div class="flex items-start flex-col mb-2 md:mb-8 md:pt-3 sm:pt-0 md:mb-2">
                        <p class="text-2xl md:text-4xl font-bold text-center md:text-left w-full leading-tight text-teal-500">Almost there!</p>
                    </div>
                    
                    <p class="text-md md:text-xl w-full text-gray-800 text-left mb-6 md:mb-12">In order to maximize your savings, we need to know a little more about you.</p>

                    <form class="w-full ">
                        
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full flex items-center">
                                <div class="w-full px-3 mb-6">
                                    <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            First name
                                    </label>
                                    <input v-model="inputFirstName" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Jane">
                                </div>
                                <div class="w-full px-3 mb-6">
                                    <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                            Last name
                                    </label>
                                    <input v-model="inputLastName" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe">
                                </div>
                            </div>
                            
                            

                            <div class="w-full px-3 mb-6">
                                <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                    Email
                                </label>
                                <input v-model="inputEmail" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="JaneDoe@email.com">
                            </div>

                            <div class="w-1/2 px-3 mb-6">
                                <label class="ml-1 block tracking-wide text-gray-700 text-sm md:text-md font-medium mb-2" >
                                    Phone Number
                                </label>
                                <input v-model="inputPhoneNum" class="border-gray-400 appearance-none text-sm md:text-md block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="(123)-456-7890">
                            </div>
                            
                        </div>
                        

                        
                        </form>
                        <div class="hidden flex items-center justify-between w-full">
                            <div class="flex justify-center items-center cursor-pointer">
                                <div class="bg-gray-300 text-gray-900 mr-auto mt-2 md:mt-6 h-12 px-4 md:px-12 py-3 w-full rounded-md flex items-center justify-center hover:bg-teal-600" @click="toPrevious">
                                    <font-awesome-icon class="rotate-90 mr-4 text-gray-600" style="transform: rotate(90deg)" v-if="!submitted" :icon="['fas', 'chevron-down']" />
                                    
                                    <p v-if="!submitted" class="">Back</p>
                                </div>
                            </div>
                            <div class="flex justify-center items-center cursor-pointer">
                                <div class="ml-auto bg-teal-500 text-white mt-2 md:mt-6 h-12 px-4 md:px-12 py-3 w-full rounded-md flex items-center justify-center hover:bg-teal-600" @click="toNextPage">
                                    <p v-if="!submitted">Continue</p>
                                    <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" v-if="!submitted" :icon="['fas', 'chevron-down']" />
                                    <font-awesome-icon v-if="submitted" :icon="['fas', 'spinner']" spin size="lg" />
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
            </div>


            
            
            
            <div :class="(appealSecGet==3 && !savingsCalc) ? 'questioncenter' : appealSecGet==2 ? ['questionrightlarge', 'pointer-events-none'] : ['questionleftlarge', 'pointer-events-none']" key="4" class="questiontrans absolute top-0 left-0 right-0 mx-auto flex justify-center mt-12" style="max-width: 750px;">
                <div class="flex flex-col items-center">    
                    <p class="text-xl md:text-4xl mt-4 font-bold text-left text-teal-500 leading-tight" >Calculating your savings now..</p>
                    <div  class="flex items-start flex-col mt-2 w-full text-gray-700">
                        <p class="text-lg w-full text-gray-800 text-left mb-12">{{textDots}}</p>

                    </div>
                </div>

            
            </div>

            <div v-if="appealSecGet>2" :class="(appealSecGet==3 && savingsCalc) ? 'questioncenter' : appealSecGet==4 ? ['questionleftlarge', 'pointer-events-none'] : ['questionrightlarge', 'pointer-events-none']" key="4-1"
                class="questiontrans absolute top-0 left-0 right-0 mx-auto flex justify-center mt-12" style="max-width: 750px;">
                <div class="flex flex-col w-full items-center">  
                    <p class="text-xl md:text-4xl mt-4 font-bold text-left text-teal-500 leading-tight" >We estimate your savings will be:</p>


                    <div class="flex items-center">
                        <p class="text-3xl mt-4 font-bold text-left text-gray-700 leading-tight" >$</p>

                        <p class="text-6xl mt-4 font-bold text-left text-gray-800 leading-tight" >{{numGenerated}}</p>
                        
                    </div>
                    
                    <p class="text-lg w-full text-gray-800 text-center mt-8 mb-4">Click the "Finalize my savings" button to complete the tax savings process!</p>
                    

                    <div class="cursor-pointer bg-teal-500 text-white mt-12 h-12 w-48 px-2 py-3 rounded-md flex justify-center hover:bg-teal-600" @click="toNextPage">
                        <p v-if="!submitted">Finalize my savings</p>
                        <font-awesome-icon v-if="submitted" :icon="['fas', 'spinner']" spin size="lg" />
                    </div>
                </div>

            
            </div>

            <div  v-if="appealSecGet>2" :class="(appealSecGet==4) ? 'questioncenter' : ['questionrightlarge', 'pointer-events-none']" key="5"
                class="questiontrans absolute top-0 left-0 right-0 mx-auto flex justify-center mt-12" style="max-width: 750px;">
                <div class="flex flex-col w-full items-center">  
                    <p class="text-xl md:text-4xl mt-4 font-bold text-left text-teal-500 leading-tight" >Thank you</p>
                    
                    <p class="text-lg w-full text-gray-800 text-center mt-8 mb-4">We have received your request and will reach out to you within <b>24 business hours</b> at the contact address you provided</p>
                    
                </div>

            
            </div>


            <div v-if="$store.state.appealSection == 6" key="7"  class="absolute top-0 left-0 right-0 mx-auto flex justify-center md:mt-2" style="max-width: 950px;">
                <div class="flex items-stretch rounded-lg mb-12 overflow-y-hidden dropdslow overflow-x-hidden" style="" :style="{'max-height' : submitted ? '100px' : '1250px'}">
                    <div class="flex flex-col px-2 md:px-16 pt-3 pb-20">
                        <div class="flex items-start flex-col mb-2 sm:pt-0 md:mb-4">
                            <p class="text-xl md:text-4xl font-bold text-center md:text-left w-full leading-tight text-teal-500">Read over our terms</p>
                            <p class="text-md md:text-xl text-left w-full text-gray-800 mt-2 mb-2" >You must scroll to the bottom before you're able to confirm </p>

                        </div>
                        
                        <div id="style-1" ref="scrolley" class="flex flex-col items-start overflow-y-auto" @scroll="createScrollChecker" style="max-height: 350px;">
                            <p class="w-full px-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sem id est faucibus, eu sagittis mi maximus. Sed lacus nisl, faucibus pharetra hendrerit eu, commodo nec nibh. Proin mauris lectus, vulputate vitae arcu quis, consectetur suscipit felis. Morbi fringilla ante velit, vel tincidunt tellus vehicula in. Quisque ullamcorper metus eu pulvinar suscipit. Duis nec tortor eu diam tincidunt sollicitudin. Aliquam mollis at nunc nec ullamcorper. Etiam non congue enim, in maximus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in ultricies lorem. Nunc consequat luctus feugiat. Etiam pretium, ante et bibendum iaculis, massa quam ornare massa, maximus maximus sem ante nec erat. Integer a mauris aliquam, rutrum magna nec, mattis massa. Integer sodales dolor id facilisis blandit. Integer consequat vel odio quis eleifend.

Proin cursus risus sapien, ac ultrices nibh vestibulum id. Aenean ante sem, bibendum a euismod quis, sagittis a libero. Praesent pellentesque fringilla fringilla. Etiam arcu justo, dignissim non lacinia et, congue quis libero. Nullam ut fermentum erat, et gravida dui. Donec bibendum magna eget bibendum rhoncus. Fusce rutrum aliquet lorem, nec porta arcu dignissim sit amet. Sed arcu nulla, sodales id pretium et, fermentum non neque. Maecenas a nulla eu justo commodo blandit vel a nibh. Nunc at ipsum eget metus vehicula congue.

Sed id lorem convallis ipsum auctor interdum. Vestibulum dignissim fringilla quam, ac hendrerit arcu varius vitae. Maecenas malesuada mi in diam laoreet, non ultricies ante posuere. Nunc blandit scelerisque magna id ullamcorper. Phasellus placerat efficitur porttitor. Cras mollis imperdiet ipsum eu efficitur. Nulla posuere porta dolor congue facilisis. Donec quis dolor ligula. Donec aliquam mauris ut sagittis pharetra. Donec venenatis eget mauris a rhoncus. Cras et ipsum dui. Ut finibus laoreet lacinia. Nunc imperdiet purus arcu, non finibus sem fringilla sit amet. Nam vulputate, augue lacinia convallis semper, turpis tellus mollis augue, vel fermentum dui leo cursus metus. Proin quis sollicitudin diam. Phasellus sit amet sodales mauris, nec feugiat sem.

Suspendisse sit amet accumsan turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at arcu turpis. Vivamus rutrum ante mauris, vitae tempor diam gravida eu. Integer nunc dolor, imperdiet sit amet consectetur at, mattis sed lorem. Vivamus porta commodo egestas. Cras pellentesque dolor justo, a posuere nibh elementum non. Aenean ornare rutrum vehicula. Vivamus condimentum eros ut mauris hendrerit, nec posuere ante pellentesque. Vivamus justo eros, pellentesque in luctus sed, iaculis ut ex.

Sed posuere interdum dignissim. Proin tincidunt porta risus vel volutpat. Nulla facilisi. Nunc convallis enim purus, ac varius ex tristique eu. Sed feugiat, odio non rutrum tincidunt, lectus risus semper sapien, et commodo urna leo nec nibh. Proin vitae sem lectus. Sed turpis neque, placerat sed ligula vitae, gravida vestibulum tortor. Fusce arcu magna, aliquam at nunc vitae, sodales luctus dui. Cras laoreet interdum consequat. Nullam malesuada, velit accumsan molestie eleifend, ante lacus auctor velit, sed vehicula nulla metus sit amet urna. Nulla facilisi. Suspendisse sed auctor mi.

Maecenas ac feugiat lorem, ut mollis mauris. Ut id lectus at leo luctus tempus. Nam tempus lectus elit, et pharetra sapien interdum quis. Sed consequat vulputate odio, sit amet gravida nisi suscipit ut. Fusce feugiat lobortis tincidunt. Donec nec imperdiet lorem. Integer in lacus a nisi tempor bibendum vitae sed metus. Ut convallis bibendum diam in sagittis. Suspendisse suscipit ipsum urna, sit amet mattis mauris convallis id. Duis vulputate dictum risus accumsan iaculis. Proin facilisis mauris risus, eu sollicitudin arcu luctus ut. Quisque faucibus sollicitudin ex, mollis imperdiet orci laoreet nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Sed efficitur, libero sed lobortis convallis, ex nisl porttitor erat, at varius erat erat sed nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam odio nisi, dictum at nunc non, hendrerit convallis dolor. Maecenas est arcu, blandit id velit lobortis, ullamcorper molestie nisl. Ut nulla quam, consequat vitae eleifend sit amet, scelerisque quis massa. Fusce mattis sem a tincidunt blandit. Nullam tristique augue vel tortor malesuada porta. Nunc mattis nunc ac quam accumsan fermentum. Etiam feugiat lectus in facilisis viverra. Duis semper laoreet arcu, in vestibulum velit viverra nec.

Nulla vitae mauris sodales, ultrices eros et, pretium risus. Pellentesque molestie aliquam turpis, non auctor nisi condimentum at. Aenean eget mollis neque, in tempor velit. Mauris commodo lacus non dui sollicitudin, eget posuere dolor vestibulum. Mauris interdum dolor quis nulla ornare, ac pulvinar lacus egestas. Nam varius venenatis nisl, id posuere velit condimentum at. Aliquam vitae tincidunt risus. Cras varius tempus tortor sed luctus.

Cras consectetur maximus lorem bibendum convallis. Proin volutpat turpis a quam blandit, at facilisis felis viverra. Vestibulum viverra neque viverra, tristique lectus in, varius nulla. Maecenas at velit libero. Vestibulum convallis ante nec orci imperdiet laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras varius, est quis finibus dapibus, nibh magna maximus metus, eu volutpat nibh felis id lorem. Nunc libero lacus, vulputate vel condimentum a, dapibus eget ligula. Donec rhoncus blandit mauris ac condimentum. Nunc ut nunc vitae urna pulvinar vulputate nec quis nulla. Vestibulum fringilla tellus non libero accumsan, a tempus magna viverra. Vestibulum et tempor ex.

Donec sodales ante non condimentum interdum. Etiam at volutpat quam. In elementum finibus metus. Morbi fermentum, erat non posuere ultrices, elit justo consectetur justo, sit amet vehicula ex risus at nulla. Morbi facilisis augue ac nulla volutpat dictum. Quisque luctus sagittis ante eu lobortis. Aliquam dictum neque hendrerit bibendum tristique. Vestibulum vel erat eget nibh molestie ullamcorper vitae sed turpis. Vivamus ornare facilisis convallis. Maecenas malesuada euismod hendrerit. In pharetra gravida gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Nam quis arcu consequat, ultricies erat maximus, gravida justo. Maecenas at arcu ac ipsum tempor mattis. Nulla feugiat lacus sed congue malesuada. Sed lobortis feugiat tellus, ut malesuada lacus consectetur nec. Morbi iaculis molestie rhoncus. Fusce et nulla vel mi aliquam iaculis at a urna. Maecenas nulla nisl, auctor quis sapien eleifend, porttitor rhoncus risus. Nulla malesuada vehicula maximus. Sed placerat, nisl id imperdiet viverra, metus erat luctus lorem, molestie porta mauris nisl non neque.

Curabitur tincidunt nunc eu gravida laoreet. Etiam at lacus in leo hendrerit gravida id non justo. Sed arcu nisl, tristique non nisi ut, commodo scelerisque lorem. Quisque fringilla diam odio, sed porttitor velit aliquet quis. Integer ut ante vitae leo lobortis posuere. Quisque luctus at risus at consequat. Nullam eros elit, scelerisque quis iaculis malesuada, sollicitudin et risus. Nulla interdum magna nulla, a commodo augue finibus ac. Ut sit amet pulvinar mi. Etiam vitae velit arcu. Sed mattis tristique tellus, ut vulputate enim.
                            </p>
                        </div>

                        <form class="w-full flex-col md:flex-row mt-6">
                            
                            <div class="flex items-center w-full">
                                <div class="rounded-md w-8 h-8 border cursor-pointer flex justify-center items-center" v-if="hasRead" @click="inputAgreedToTerms = !inputAgreedToTerms" :class="hasRead ? inputAgreedToTerms ? 'bg-teal-500' : 'border-gray-500' : 'border-gray-400'">
                                    <font-awesome-icon class="text-white" :class="inputAgreedToTerms ? 'block' : 'hidden'" :icon="['fas', 'check']" />
                                    
                                </div>
                                <div class="rounded-md w-8 h-8 border" v-if="!hasRead" :class="hasRead ? inputAgreedToTerms ? 'bg-teal-500' : 'border-gray-500' : 'border-gray-400'">
                                    
                                </div>
                                <p class="text-xl ml-4 text-left w-full  my-2" :class="hasRead ? 'text-gray-800' : ['opacity-75', 'text-gray-600']">I agree with the <span class="font-medium text-teal-500 cursor-pointer">Terms and Conditions</span> </p>
                                
                            </div>
                            <div class="flex items-center w-full">
                                <div class="rounded-md w-8 h-8 border cursor-pointer  flex justify-center items-center" v-if="hasRead" @click="inputAgreedToPrivacy = !inputAgreedToPrivacy" :class="hasRead ? inputAgreedToPrivacy ? 'bg-teal-500' : 'border-gray-500' : 'border-gray-400'">
                                    <font-awesome-icon class="text-white" :class="inputAgreedToPrivacy ? 'block' : 'hidden'" :icon="['fas', 'check']" />
                                    
                                </div>
                                <div class="rounded-md w-8 h-8 border" v-if="!hasRead" :class="hasRead ? inputAgreedToPrivacy ? 'bg-teal-500' : 'border-gray-500' : 'border-gray-400'">
                                    
                                </div>
                                <p class="text-xl ml-4 text-left w-full  my-2" :class="hasRead ? 'text-gray-800' : ['opacity-75', 'text-gray-600']">I agree with the <span class="font-medium text-teal-500 cursor-pointer">Privacy Policy</span> </p>
                                
                            </div>
                            
                            
                        </form>

                        <div class="hidden flex items-center justify-between w-full">
                            <div class="flex justify-center items-center cursor-pointer">
                                <div class="bg-gray-300 text-gray-900 mt-6 h-12 px-2 py-3 rounded-md flex items-center justify-center hover:bg-gray-400" @click="toPrevious">
                                    <font-awesome-icon class="rotate-90 mr-4 text-gray-600" style="transform: rotate(90deg)" v-if="!submitted" :icon="['fas', 'chevron-down']" />
                                    
                                    <p v-if="!submitted" class="">Back</p>
                                </div>
                            </div>
                            <div class="flex justify-center items-center cursor-pointer">
                                <div class="ml-auto bg-teal-500 text-white mt-2 md:mt-6 h-12 px-12 py-3 w-full rounded-md flex items-center justify-center hover:bg-teal-600" v-if="inputAgreedToTerms && inputAgreedToPrivacy" @click="toNextPage">
                                    <p v-if="!submitted">Continue</p>
                                    <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" v-if="!submitted" :icon="['fas', 'chevron-down']" />
                                    <font-awesome-icon v-if="submitted" :icon="['fas', 'spinner']" spin size="lg" />
                                </div>
                                <div class="bg-teal-500 opacity-50 text-white mt-6 h-12 px-12 py-3 rounded-md flex items-center justify-center hover:bg-teal-600" v-if="!(inputAgreedToTerms && inputAgreedToPrivacy)">
                                    <p v-if="!submitted">Continue</p>
                                    <font-awesome-icon class="rotate-90 ml-4" style="transform: rotate(-90deg)" v-if="!submitted" :icon="['fas', 'chevron-down']" />
                                    <font-awesome-icon v-if="submitted" :icon="['fas', 'spinner']" spin size="lg" />
                                </div>
                            </div>
                        </div>

                    </div>
                        
                    

                </div>

            </div>

            

            <div v-else-if="$store.state.appealSection == 5" key="6" class="absolute top-0 left-0 right-0 mx-auto flex justify-center mt-12" style="max-width: 750px;">
                <div class="flex flex-col items-center">    
                    <p class="text-xl md:text-4xl mt-4 font-bold text-left text-teal-500 leading-tight" >The form ends here. I haven't finished past this point</p>
                    <div  class="flex items-start flex-col mt-2 w-full text-gray-700">

                    </div>
                    <p class="text-xl md:text-4xl mt-4 font-bold text-left text-teal-500 leading-tight" >Write your first and last name to </p>

                </div>

                

            
            </div>

        </transition-group>

        
    </div>
    
    <div class="w-full flex flex-col-reverse sm:flex-row mt-12 mb-2 md:mb-10">
      <div class="flex-1 flex flex-col justify-center items-center sm:items-start items-start mt-4 ml-4 sm:mt-0">
        <div class="flex items-end mt-6 sm:mt-0">

          <img class="" width="50px" height="50px" alt="realAppeal_icon.png" src="../assets/realappeal_logo.png">

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
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronDown, faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch() 

library.add(faBars)
library.add(faTimes)
library.add(faCheck)
library.add(faChevronDown)
library.add(faSpinner)

export default {
  name: 'AppealVue',
  data: function() {
    return {
        inputFirstName: '',
        inputLastName: '',
        inputPhoneNum: '',
        inputEmail: '',
        inputAddress: '',
        inputCity: '',
        inputState: '',
        inputZipCode: '',
        inputVetStatus: -1,
        inputAgeOver65: -1,
        inputPrimaryAddress: '',
        inputPrimaryCity: '',
        inputPrimaryState: '',
        inputPrimaryZipCode: '',
        inputAgreedToTerms: false,
        inputAgreedToPrivacy: false,
        hasRead: false,
        numGenerated: 0,

        directionDots: 1,
        textDots: 'This will only take a moment...',
        savingsCalculated: false,
        showPercent: false,
        primaryDifferent: false,
        submitted: false,
        section: 0,
        sectionPrev: -1,
        direction: true,
        sectionArr: ['your property', 'about you', 'county info', 'form submission']
    }
  },
  props: ['questionsNum'],
  mounted() {
      let i=0;
      while(i%10==0 || i%2==1 || i<400) {
          i = Math.floor(Math.random()*1200) + 400
      }
      this.$store.commit('savingsValSet', {val: i})
      if(this.savingsValGet!=0) this.numGenerated = this.savingsValGet 
      else this.numGenerated = i

  },
  computed: {
      getPrimaryDifferent() {
          return this.$store.getters.getPrimaryDifferent
      },
      savingsCalc() {
          return this.$store.getters.getSavingsCalc
      },
      appealSecGet() {
          return this.$store.getters.appealSecGet
      },
      countyAnswers() {
          return this.$store.getters.getCountyAnswers
      },
      questionsNumStore() {
          return this.$store.getters.getQuestionsNum
      },
      enterClasses(val) {
          return (this.sectionPrev < val) ? 'animated fadeInLeft delay-2' : 'animated fadeInRight delay-2'
      },
      exitClasses() {
          return this.direction ? 'animated fadeOutLeft delay-2' : 'animated fadeOutLeft delay-2'
      },
      questionsVal() {
        return this.$store.getters.questionsVal
    },
    savingsValGet() {
        return this.$store.getters.savingsValGet
    },
  },
  methods: {
    enterResidence() {
        window.console.log(this.getPrimaryDifferent)
        this.$store.commit('setPrimaryDifferent', { val: true} )
        window.console.log(this.getPrimaryDifferent)
        
        // this.$emit('changeResidence', 0)
    },
    toNextPage(){
        this.$store.commit('increment')
        this.sectionPrev = this.section
        this.direction = true
        this.section++
        this.progStatus += (1/(this.sectionArr.length-1))*100
        if (this.$store.state.appealSection == 3) {
            this.$store.commit('savingsCalcTrue')
        }
    },
    createScrollChecker() {
        if(this.$refs["scrolley"] != undefined) {
            if(this.$refs["scrolley"].scrollTop >= (this.$refs["scrolley"].scrollHeight - this.$refs["scrolley"].clientHeight)-20) {
                this.hasRead = true
            } 
        } 
    },
    toPrevious() {
        this.sectionPrev = this.section
        this.direction = false
        this.section -= 1
        this.progStatus -= (1/(this.sectionArr.length-1))*100
    },
    vetStat(val) {
        if(this.inputVetStatus==val) this.inputVetStatus = -1
        else this.inputVetStatus = val
        this.checkThree()
    },
    ageStat(val) {
        if(this.inputAgeOver65==val) this.inputAgeOver65 = -1
        else this.inputAgeOver65 = val
        this.checkThree()

    },
    primaryResid(val) {
        if(this.primaryDifferent==val) this.primaryDifferent = -1
        this.primaryDifferent = val
        this.checkThree()

    },
    checkThree() {
        if((this.inputVetStatus!=-1) && (this.inputAgeOver65!=-1) && (this.primaryDifferent!=-1)) {
           this.$store.commit('canSubmitThreeTrue')
        } else {
           this.$store.commit('canSubmitThreeFalse')
            
        }
    },
    dotsFluctuate() {
          
          if(this.directionDots==0) {
              if((this.textDots.split('.').length-1>0)) this.textDots = this.textDots.substring(0, this.textDots.length - 1)
              else this.directionDots = 1
          } else {
              if((this.textDots.split('.').length-1<4)) this.textDots = this.textDots + '.'
              else this.directionDots = 0
              
          }
          setTimeout(() => this.dotsFluctuate(), 400)

      },
  },
  watch: {
      
      inputAgreedToPrivacy() {
          if(this.inputAgreedToPrivacy && this.inputAgreedToTerms) {
            this.$store.commit('canSubmitFourTrue')
          } else {
             this.$store.commit('canSubmitFourFalse') 
          }
      },
      inputAgreedToTerms() {
          if(this.inputAgreedToPrivacy && this.inputAgreedToTerms) {
            this.$store.commit('canSubmitFourTrue')
          } else {
             this.$store.commit('canSubmitFourFalse') 
          }
      },
      inputAddress() {
          this.$store.commit('changeAddress', { val: this.inputAddress })
          
      },
      inputCity() {
          this.$store.commit('changeCity', { val: this.inputCity })
          
      },
      inputState() {
          this.$store.commit('changeState', { val: this.inputState })
          
      },
      inputZipCode() {
          this.$store.commit('changeZipCode', { val: this.inputZipCode })
          
      },
      inputPrimaryAddress() {
          this.$store.commit('changePrimaryAddress', { val: this.inputPrimaryAddress })
          
      },
      inputPrimaryCity() {
          this.$store.commit('changePrimaryCity', { val: this.inputPrimaryCity })
          
      },
      inputPrimaryState() {
          this.$store.commit('changePrimaryState', { val: this.inputPrimaryState })
          
      },
      inputPrimaryZipCode() {
          this.$store.commit('changePrimaryZipCode', { val: this.inputPrimaryZipCode })
          
      },
      inputFirstName() {
          this.$store.commit('changeinputFirstName', { val: this.inputFirstName })
      },
      inputLastName() {
          this.$store.commit('changeinputLastName', { val: this.inputLastName })
      },
      inputEmail() {
          this.$store.commit('changeinputEmail', { val: this.inputEmail })
      },
      inputPhoneNum() {
          this.$store.commit('changeinputPhoneNum', { val: this.inputPhoneNum })
      },
      
  },
  created() {
    if(this.$store.state.appealSection==-2) {
        setTimeout(() => this.$store.commit('increment'), 400)
        setTimeout(() => this.$store.commit('increment'), 1000)
    }
    setTimeout(() => this.dotsFluctuate(), 1000)
      
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

.questiontrans {
    transition: all 1s;
}

.questioncenter {
    opacity: 1;
    transform: translateX(0px);
}

.questionleft {
    opacity:0;
    transform: translateX(-400px);
}
.questionright {
    opacity:0;
    transform: translateX(400px);
}

.questionleftlarge {
    opacity:0;
    transform: translateX(-800px);
}
.questionrightlarge {
    opacity:0;
    transform: translateX(800px);
}

.navbutton {
    transition: all 0.2s;
}

.dropdown {
  transition: all 0.3s;
}
.dropdslow {
  transition: all 1s;
}

.dropdslow2 {
  transition: all 1s;
}

.backgrounddelay {
    transition: background 1s;
    transition-delay: 1s;
}

.christopher-enter-active, .christopher-leave-active {
  transition: all .5s;
  transform: translateX(0)
}
.christopher-enter, .christopher-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-200); 
}

.fader-item {
  display: inline-block;
  margin-right: 10px;
}
.fader-enter-active, .fader-leave-active {
  transition: all 1s;
}
.fader-enter, .fader-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.progbar {
    transition: all 0.5s;
    -webkit-transition-delay: 500ms;
    -moz-transition-delay: 500ms;
    -o-transition-delay: 500ms;
    transition-delay: 500ms;
}

.delay-s {
    transition: all 0.1s;
}


#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgb(190, 190, 190);
}

</style>
