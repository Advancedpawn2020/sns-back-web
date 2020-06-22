import request from '@/utils/request'
const group_name ='recruit'
const api_name='recruit'
export default {
    getListByPagination(page, size, searchMap) {
        return request({
            url:`/${group_name}/${api_name}/${page}/${size}`,
            method: "post",
            data: searchMap,
        });
    },
    getById(id) {
        return request({
            url:`/${group_name}/${api_name}/${id}`,
            method: "get",
        });
    },
    saveEnterprise(pojo) {
        return request({
            url: `/${group_name}/${api_name}`,
            method: "post",
            data: pojo,
        });
    },
    updateById(id, pojo) {
        if (id === null || id === '') {
            return this.saveEnterprise(pojo)
        }
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: "put",
            data: pojo,
        });
    },
    deleteById(id) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: "delete",
        });
    },
}
