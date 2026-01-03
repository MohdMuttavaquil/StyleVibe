import axiosInstance from "./axiosInstance"

const allProducts = async (token)=>{
    const res = await axiosInstance.get('/product/getproducts',  {headers: {token: token}})
    return res.data.products
}

const allOrder = async (token)=>{
    const res = await axiosInstance.get('/order/admainorder', {headers: {token: token}} )
    return res.data.order
}

const confirmOrder = async(id, name)=>{
    const res = await axiosInstance.post('/order/confirm', {id:id, name})
    return res.data.message
}


const deliverdOrder = async(id)=>{
    const res = await axiosInstance.post('/order/delivered', {id:id})
    return res.data.message
}

const cancelOrder = async(id)=>{
    const res = await axiosInstance.post('/order/cancel', {id:id})
    return res.data.message
}


export { allProducts, allOrder, confirmOrder, deliverdOrder, cancelOrder }