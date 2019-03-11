import Api from '@/services/api.service'

export default {
  addRoute(data, config) {
    return Api().post('private/route-system/addRoute', data, config)
  },
  checkRoute(data, config) {
    return Api().post('private/route-system/checkRoute', data, config)
  },
  getAllRoutes(config) {
    return Api().get('private/route-system/getAllRoutes', config)
  }
}
