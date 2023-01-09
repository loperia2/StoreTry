import { defineStore } from 'pinia'
import Node from '@/store/models/node.ts'

export const useNodeStore = defineStore('nodeStore', {
  state: () => {
    return {
      nodes: [
        new Node({ id: '1', alias: 'Backers', view_id: '5'}),
        new Node({ id: '2', alias: 'Pledged', view_id: '2'}),
        new Node({ id: '3', alias: 'Goal', view_id: '5'})
      ]
    }
  }
})