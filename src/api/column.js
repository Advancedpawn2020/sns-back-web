import request from '@/utils/request'
const group_name = 'column'
const api_name= 'column'
export default {
    getList() {
        return request({
            url: `/${group_name}/${api_name}`,
            method: "get",
        });
    },
    getListByPagination(currentPage, pageSize, searchMap) {
        return request({
            url: `/${group_name}/${api_name}/search/${currentPage}/${pageSize}`,
            method: "post",
            data: searchMap,
        });
    },
    getById(id) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
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
    // 专栏审核
    examine(id) {
        return request({
            url: `/${group_name}/${api_name}/examine/${id}`,
            method: "put",
        });
    }
}
