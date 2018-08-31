import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutations-types'

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout
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
  },
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  async getUser({commit}){
    const result = await reqUser()
    if(result.code===0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  async logout({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }
  }
}
