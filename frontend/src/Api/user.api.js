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
  const res = await axiosInstance.get(`/items/${id}`)
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

const returnOrder = async (id, data) =>{
  const res = await axiosInstance.post('/order/return', { id, data })
  return res.data.success ? res.data.message : alert('some erro')
}

const removeToCart = async (id, token) =>{
 const res = await axiosInstance.post('/cart/removeincart', {itemId : id}, 
  {headers: { token :token } })
  return res.data.userCart 
}

const addInCart = async (id, token) =>{
  const res = await axiosInstance.post('/cart/addincart', {itemId : id}, 
  {headers: { token :token } })
   return res.data.success ? res.data : alert('some erro')
}

const onlineApi = async (amount) =>{
  const res = await axiosInstance.post('/order/onlinepay', {amount: amount})
  return res.data
}


export { singinApi, loginApi, trendingApi, allItemsApi, categoryItmeApi, itemById, userCartApi, allOrder, userData, suggestion, returnOrder, removeToCart, addInCart, onlineApi }