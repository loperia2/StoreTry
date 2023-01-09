<template>
  <div>
    Hellos
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '@/store/modules/counter'
export default defineComponent({
  setup() {
    const counterStore = useCounterStore()
    console.log(counterStore.count, 'counterStore')
    return {
      //
    }
  },
})
</script>