<script setup>
const props = defineProps({
  job: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  statusDesc: {
    type: String,
    required: true
  },
 
});
</script>

<template>
  <div class="m-2 ml-6 mb-6 sm:px-8 lg:px-8">
    <div class="flex mb-4  ">
      <div class="me-5 flex-shrink-0 "><img alt="Vue logo" class="logo" src="../assets/suitcase.svg" width="20 " height="20" /></div>
      <div>{{ job }}</div>
    </div>
    <div class="flex mb-4  ">
      <div class="me-5 flex-shrink-0 "><img alt="Vue logo" class="logo" src="../assets/cap.svg" width="20" height="20" /></div>
      <div>{{ university }}</div>
    </div>
    <div class="flex mb-4  ">
      <div class="me-5 flex-shrink-0 "><img alt="Vue logo" class="logo" src="../assets/gender.svg" width="20" height="20" /></div>
      <div>{{ gender }}</div>
    </div>
    <div class="flex mb-4  ">
      <div class="me-5 mt-1  flex-shrink-0 "><img alt="Vue logo" class="logo" src="../assets/smallheart.svg" width="20" height="20" /></div>
      <div>{{ statusDesc }}</div>
    </div>
  </div>
</template>


