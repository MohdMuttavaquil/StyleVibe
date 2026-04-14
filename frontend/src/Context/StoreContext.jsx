import { useEffect } from "react"
import { createContext, useState } from "react"
import { checkTokenApi } from "../utlis/helper"
export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    // Set user detail
    const url = "http://localhost:3000/api"
    const [token, setToken] = useState(null)
    const [role, setRole] = useState("")
    const [category, setCategory] = useState("")
    const [userName, setUserName] = useState("")

    // Item detail for detail page
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [sellerName, setSellerName] = useState("")

    // for checking token and role
    const checkToken = async () => {
        const tokenValue = localStorage.getItem('token')
        const roleValue = localStorage.getItem('role')
        
        if (tokenValue == null) {
            return
        }
        
        const isExpire = await checkTokenApi(tokenValue)
        if (!isExpire) {
            setToken(tokenValue)
            setRole(roleValue)
        }
    }

    useEffect(() => {
        checkToken()
    }, [])

    return (
        <AppContext.Provider value={{ token, setToken, role, setCategory, category, name, setName, price, setPrice, sellerName, setSellerName, url, setRole, userName, setUserName }}>
            {children}
        </AppContext.Provider>
    )
}