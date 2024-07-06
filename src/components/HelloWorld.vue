<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <div>
        <button type="button" @click="count++">count is {{ count }}</button>
      </div>
    </div>

    <div class="my-5">
      <div class="btn btn-primary">primary</div>
      <div class="btn btn-secondary">secondary</div>
      <div class="btn btn-success">success</div>
      <div class="btn btn-info">info</div>
    </div>

  </div>
</template>

<style scoped>

</style>
