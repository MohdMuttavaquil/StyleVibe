import axiosInstance from "./axiosInstance";


const singinApi = async (data)=>{
  const res = await axiosInstance.post('/user/singin', data)
  return res.data
}

const loginApi = async (data)=>{
 const res = await axiosInstance.post('/user/login', data)
 return res.data
}

const trendingApi = async ()=>{
  const res = await axiosInstance.get('/items/trending')
  return res.data.success ? res.data.items : alert('some erro')
}

const allItemsApi = async () =>{
  const res = await axiosInstance.get('/items/allItems')
   return res.data.success ? res.data.items : alert('some erro')
}

const categoryItmeApi = async(category) =>{
  const res = await axiosInstance.post('/items/category', category)
   return res.data.success ? res.data.items : alert('some erro')
}

const itemById = async(id)=>{
  const res = await axiosInstance.post('/items', {id:id})
    return res.data.success ? res.data.item : alert('some erro')
}

const userCartApi = async(token)=>{
  const res = await axiosInstance.get('/cart', {headers: {token: token}})
  return res.data.cart
}

const allOrder = async (token)=>{
    const res = await axiosInstance.get('/order/userorder', {headers: {token: token}} )
    return res.data.order
}

const userData = async (token)=>{
    const res = await axiosInstance.get('/user/info', {headers: {token: token}} )
    return res.data.user
}

const suggestion = async (category)=>{
  const res = await axiosInstance.post('/items/suggestion', { category: category } )
  return res.data.items
}

export { singinApi, loginApi, trendingApi, allItemsApi, categoryItmeApi, itemById, userCartApi, allOrder, userData, suggestion }