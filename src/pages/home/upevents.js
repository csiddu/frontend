import React from 'react'

export default function Upevents() {
    return (
    <div class="lg:flex p-10">
      <div class="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full">
        <div class="text-center tracking-wide">
          <div class="text-white font-bold text-4xl ">15</div>
          <div class="text-white font-normal text-2xl">May</div>
        </div>
      </div>
      <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div class="flex flex-row lg:justify-start justify-center">
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            <i class="far fa-clock"></i> 1:30 PM
          </div>
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            Organiser : CSI DDU
          </div>
        </div>
        <div class="mt-4 font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
          GET SET GIT
        </div>
        <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
          Conforence Room, Ground Floor
        </div>
      </div>
      <button onClick={() => alert(1)} class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
        <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
          Register Here
        </span>
      </button>
    </div>
    )
}
