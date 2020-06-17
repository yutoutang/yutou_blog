import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://192.168.1.101:8088'
  });
  instance.interceptors.response.use(res=>{
    return res.data;
  });

  return instance(config)
}