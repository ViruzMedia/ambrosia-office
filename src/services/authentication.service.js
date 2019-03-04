import Api from '@/services/api.service'

export default {

  register (data) {
    return Api().post('public/account/register', data)
  },

  login (data) {
    return Api().post('public/account/login', data)
  },

  key_login (data) {
    return Api().post('public/account/key_login', data)
  }
}
