import ajax from "./ajax";
const BASE = '/api'

export const reqAddress = (geohash) => ajax(`${BASE}/position/${geohash}`)

export const reqCategorys = () => ajax(BASE + '/index_category')

export const reqShops = (latitude,longitude) => ajax(BASE + '/shops',{latitude,longitude})

/**
 * 账号密码登录
 */
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')

/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})

/**
 * 手机号验证码登录
 */
export const reqSmslogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

/**
 * 获取用户信息(根据会话)
 */
export const reqUser = () => ajax('/api/userinfo')
