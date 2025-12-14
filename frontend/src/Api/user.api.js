import axiosInstance from "./axiosInstance";

const singinApi = async (data)=>{
  const res = await axiosInstance.post('/user/singin', data)
  return res.data
}

const loginApi = async (data)=>{
 const res = await axiosInstance.post('/user/login', data)
 return res.data
}

export { singinApi, loginApi }