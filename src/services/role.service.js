import Api from '@/services/api.service'

export default {
  getRoleByUID (data, config) {
    return Api().post('private/role-system/getAllRolesWhereUser', data, config)
  },
  getAllRoles (config) {
    return Api().get('private/role-system/getAllRoles', config)
  }
}
