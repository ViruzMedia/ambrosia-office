import Api from '@/services/api.service'

export default {
  getRoleByUID (data, config) {
    return Api().post('private/role-system/getAllRolesWhereUser', data, config)
  }
}
