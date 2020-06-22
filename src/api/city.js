import request from '@/utils/request'
const group_name ='city'
const api_name='city'
export default {
    getList() {
        return request({
            url: `/${group_name}/${api_name}`,
            method: "get",
        });
    }
}

