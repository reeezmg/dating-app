<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="m-2 sm:px-8 lg:px-8">
    <div class="flex mb-6 overflow-x-auto xs:overflow-scroll sm:overflow-scroll lg:overflow-hidden">
  <img v-for="(image, index) in images" :src="image" :key="index" class="mr-1 rounded-2xl h-44 w-44 flex-shrink-0 object-cover">
</div>

    <div>
      <div class="text-4xl mb-3">{{ name }}</div>
      <div class="text-lg mb-4 bold ">"{{ desc }}"</div>
    </div>

    <div class="flex justify-around sm:w-full md:w-96 ">
      <div class="flex justify-between items-center ">
        <div class="me-5"><img alt="Vue logo" class="logo" src="../assets/cake.svg" width="17" height="17" /></div>
        <div class=" font-semibold">{{ age }}</div>
      </div>
      <div class=" border-e-2 border-gray-200"></div>

      <div  class="flex justify-between items-center ">
        <div class="me-5"><img alt="Vue logo" class="logo" src="../assets/pointer.svg" width="15" height="15" /></div>
        <div class=" font-semibold">{{ location }}</div>
      </div>
      <div class=" border-e-2 border-gray-200"></div>
      <div  class="flex justify-between items-center ">
        <div class="me-5 "><img alt="Vue logo" class="logo" src="../assets/scale.svg" width="13" height="13" /></div>
        <div class=" font-semibold" v-html="height"></div>
      </div>
    </div>
    <div class="mt-4  border-b-2 border-gray-200 sm:w-full xs:w-full lg:w-96"></div>
    <div class="image-container mb-6 overflow-hidden">
  <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class=" lg:w-96 sm:w-full xs:w-full h-64 mt-3 rounded-2xl">
</div>
</div>
</template>


