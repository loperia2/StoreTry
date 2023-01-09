import { get } from 'lodash'

export default class Node {
  id!: string
  alias!: string
  view_id!: string
  
  constructor(params: unknown) {
    this.view_id = get(params, 'view_id')
    this.id = get(params, 'id')
    this.alias = get(params, 'alias')
  }
}