import { get } from 'lodash'

export default class View {
  id!: string
  alias!: string
  nodes!: unknown[]

  constructor(params: unknown) {
    this.id = get(params, 'id')
    this.alias = get(params, 'alias')
    this.nodes = get(params, 'nodes')
  }
}