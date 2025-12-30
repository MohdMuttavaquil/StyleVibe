import axiosInstance from "./axiosInstance";
const token = sessionStorage.getItem('token')

const allProducts = async ()=>{
    const res = await axiosInstance.get('/product/getproducts',  {headers: {token: token}})
    return res.data.products
}

export { allProducts }