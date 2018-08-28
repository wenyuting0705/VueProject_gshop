import ajax from "./ajax";
const BASE = '/api'

export const reqAddress = (geohash) => ajax(`${BASE}/position/${geohash}`)

export const reqCategorys = () => ajax(BASE + '/index_category')

export const reqShops = (latitude,longitude) => ajax(BASE + '/shops',{latitude,longitude})
