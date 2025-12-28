import { useEffect } from "react"
import { createContext, useState } from "react"
export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  // Set user detail
    const url = "http://localhost:3000/api"
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    const [category, setCategory] = useState("")

    // Item detail for detail page
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [ sellerName, setSellerName ] = useState("")

  // for checking token and role
    useEffect(() => {
        const tokenValue = sessionStorage.getItem('token')
        setToken(tokenValue)
    }, [token])

    useEffect(() => {
        const roleValue = sessionStorage.getItem('role')
        setRole(roleValue)
    }, [role])

    return (
        <AppContext.Provider value={{ token, setToken, role, setCategory, category, name, setName, price, setPrice, sellerName, setSellerName, url }}>
            {children}
        </AppContext.Provider>
    )
}