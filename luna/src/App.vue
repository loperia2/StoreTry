<template>
  <div>
    <p>Nodes: {{ nodes }}</p>
    <p>Views: {{ views }}</p>
    <button @click="set(false)">Back</button>
    <button @click="set(true)">Change</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { useViewStore } from '@/store/modules/view.ts'
import { useNodeStore } from '@/store/modules/node.ts'
import { storeToRefs } from 'pinia'
import { cloneDeep } from 'lodash'

export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const viewStore = useViewStore()
    const nodeStore = useNodeStore()
    const { views } = storeToRefs(viewStore)
    const { nodes } = storeToRefs(nodeStore)
    const set = (change = false) => {
      const nodes = cloneDeep(nodeStore.nodes)
      nodeStore.$patch({
        nodes: nodes.map((node, index) => {
        if (index === 0 && change) {
          node.view_id = '10'
        }
        console.log(change, 'change')
        if (index === 0 && !change) {
          console.log('buraya girer')
          node.view_id = '5'
        }
        return node
        })
      })
    }
    return {
      set,
      nodes,
      views
    }
  },
})
</script>


