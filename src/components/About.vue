<script setup>
const props = defineProps({
  aboutMe: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="m-4 pb-44 font-sans font-dm-sans sm:px-8 lg:px-8">
    <div class="  mb-3 roboto-slab">About Mollie</div>
    <div class="dm-sans m-2 px-4">
      {{ aboutMe }}
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
