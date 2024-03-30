<script setup>
const props = defineProps({
  otherInfo: {
    type: Array,
    required: true
  },
  bodyInfo: {
    type: Object,
    required: true
  },
});
</script>

<template>
  <div class="m-3 mb-8 sm:px-8 lg:px-8">
    <div class="text-2xl mb-3 roboto-slab">Bio</div>
    <div class="flex  xs:justify-around lg:justify-start sm:justify-start  mb-4 px-4">
    <div class="flex justify-center flex-col items-center text-center w-20 sm:mx-8 lg:mx-8 mb-2">
        <div><img alt="Vue logo" class="mb-1 " src="../assets/eye.svg" width="20" height="20" /></div>
        <div class="">{{ bodyInfo.eyeColor }} eyes</div>
    </div>
    <div class="flex justify-center flex-col items-center text-center w-20 sm:mx-8 lg:mx-8 mb-2">
        <div><img alt="Vue " class="mb-1" src="../assets/comb.svg" width="20" height="20" /></div>
        <div>{{ bodyInfo.hairType }} hair</div>
    </div>
    <div class="flex justify-center flex-col items-center text-center  w-20 sm:mx-8 lg:mx-8 mb-2">
        <div><img alt="Vue " class="mb-1" src="../assets/fruit.svg" width="20" height="20" /></div>
        <div class=" ">{{ bodyInfo.bodyType }} Body</div>
    </div>
</div>

<div class="flex  xs:justify-center lg:justify-start sm:justify-start flex-wrap mb-4 px-4">
    <div v-for="(item,index) in otherInfo" :key="index" class="  w-fit px-4 py-1 rounded-3xl border-black border mb-1 mr-1 hover:bg-customPink hover:font-semibold">
       {{item}}
    </div>
</div>

  </div>
</template>

<style scoped>
.roboto-slab{
  font-family: "Roboto Slab", serif;
  font-weight: 200;
  font-style: normal;
  font-size: 22px;
}

</style>
