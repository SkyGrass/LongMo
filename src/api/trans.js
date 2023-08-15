// axios
import request from '@/utils/request'


//调拨单 提交
export function saveTrans(data) {
    return request({
        url: 'SaveTrans',
        method: 'post',
        data
    })
}