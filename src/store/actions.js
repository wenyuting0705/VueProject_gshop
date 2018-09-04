import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  CLEAR_CART
} from './mutations-types'

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
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
  },
  async getShopGoods({commit},cb){
    const result = await reqShopGoods()
    if(result.code===0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})

      cb && cb()
    }
  },
  async getShopRatings({commit},cb){
    const result = await reqShopRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
    }
    cb && cb()
  },
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code===0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_COUNT,{food})
    }else{
      commit(DECREMENT_COUNT,{food})
    }
  },
  clearCart({commit}){
    commit(CLEAR_CART)
  }
}
