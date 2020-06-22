import request from '@/utils/request'
const group_name ='user'
const api_name='user'
export function login(username, password) {
  return request({
    url: `/${group_name}/${api_name}/login`,
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: `/${group_name}/${api_name}/info`,
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: `/${group_name}/${api_name}/logout`,
    method: 'post'
  })
}
