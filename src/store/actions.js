import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations-types'

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

export default {
  async getAddress({commit,state}){
    const {latitude,longitude} = state
    const geohash = `${latitude},${longitude}`

    const result =await reqAddress(geohash)

    const address = result.data

    commit(RECEIVE_ADDRESS,{address})
  },
  async getCategorys({commit,state}){
    const result = await reqCategorys()
    const categorys = result.data

    commit(RECEIVE_CATEGORYS,{categorys})
  },
  async getShops({commit,state}){
    const {latitude,longitude} = state

    const result = await reqShops(latitude,longitude)

    const shops = result.data

    commit(RECEIVE_SHOPS,{shops})
  }
}
