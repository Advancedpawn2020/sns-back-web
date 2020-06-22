import request from '@/utils/request'
const group_name ='table'
const api_name='table'
export function getList(params) {
  return request({
    url: `/${group_name}/${api_name}/list`,
    method: 'get',
    params
  })
}
