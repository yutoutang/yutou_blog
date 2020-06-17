import {request} from "./request";

export function getSheet() {
  return request({
    url: '/sheets'
  })
}

export function uploadSheet(fromData) {
  return request({
    url: '/sheets',
    method: 'post',
    data: fromData,
  })
}

export function delSheet(id) {
  return request({
    url: '/sheets/' + id,
    method: 'delete',
  })
}

export function editSheet() {
  return request({
    url: '/sheets',
    method: 'put',
  })
}

export function downloadSheet(id) {
  return request({
    url: '/downloadSheet/' + id,
    method: 'get',
  })
}

export function downloadVideoSheet(bvid) {
  return request({
    url: '/downloadVideoSheet/' + bvid,
    method: 'get',
  })
}

// 拿到以一个sheet的json
export function getOneSheet(id) {
  return request({
    url: '/sheet/' + id,
    method: 'get',
  })
}

// 访问显示pdf的base64格式
export function viewSheet(id) {
  return request({
    url : '/viewSheet/' + id,
    method: 'get',
    responseType: 'blob',
  })
}