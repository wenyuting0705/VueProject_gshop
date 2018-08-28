import ajax from "./ajax";
const BASE = '/api'

export const reqAddress = (geohash) => ajax(`${BASE}/position/${geohash}`)

export const reqFoodCategory = () => ajax(BASE + '/index_category')

export const reqShops = () => ajax(BASE + '/shops')
