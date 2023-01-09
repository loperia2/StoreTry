import { defineStore } from 'pinia'
import View from '@/store/models/view.ts'
import { useNodeStore } from '@/store/modules/node.ts'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export const useViewStore = defineStore('viewStore', {
  state: () => {
    const nodes = useNodeStore()
    const viewParams = {
      id: '5',
      alias: 'Kickstarter',
    }
    const viewNodes = computed(() => {
      return nodes.nodes.filter((node) => {
        return node.view_id === viewParams.id
      })
    })
    viewParams.nodes = viewNodes
    return { views: [ new View(viewParams)]}
  }
  
})