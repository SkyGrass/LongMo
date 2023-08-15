// axios
import request from '@/utils/request'

//发货单单据  表头
export function getDispatchHead(data) {
  return request({
    url: 'GetMOHead',
    method: 'post',
    data
  })
}

//发货单单据
export function getDispatch(data) {
    return request({
      url: 'GetMO',
      method: 'post',
      data
    })
  }

  
  //销售出库
export function saveMaterialStockOut(data) {
    return request({
      url: 'SaveMatStockOut',
      method: 'post',
      data
    })
  }
  

