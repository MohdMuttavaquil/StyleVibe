import axiosInstance from "./axiosInstance";
const token = sessionStorage.getItem('token')

const allProducts = async ()=>{
    const res = await axiosInstance.get('/product/getproducts',  {headers: {token: token}})
    return res.data.products
}

const allOrder = async ()=>{
    const res = await axiosInstance.get('/order/admainorder', {headers: {token: token}} )
    return res.data.order
}

const confirmOrder = async(id)=>{
    const res = await axiosInstance.post('/order/confirm', { id:id })
    return res.data.message
}

export { allProducts, allOrder, confirmOrder }