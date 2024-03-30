<script setup>
const props = defineProps({
  interest: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="m-3 mb-8 sm:px-8 lg:px-8">
    <div class="mb-3 roboto-slab">Interests</div>
    <div class="flex xs:justify-center lg:justify-start sm:justify-start flex-wrap mb-3 px-4">
    <div v-for="(item,index) in interest" :key="index" class="w-fit px-4 py-1 rounded-3xl border-black border mb-1 mr-1 hover:bg-customPink hover:font-semibold">
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
