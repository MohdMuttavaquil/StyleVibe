import { categoryItmeApi } from "../Api//user.api"

// Fatching items by their category
const itemsApi = async (category) => {
    const value = category.toLowerCase()
    const data = { category: value }
    const res = await categoryItmeApi(data)
    console.log(res)
    return res
}


export { itemsApi }