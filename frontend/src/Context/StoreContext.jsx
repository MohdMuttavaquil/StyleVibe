import { useEffect } from "react";
import { createContext, useState } from "react";


export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  // Set user detail
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    const url = "http://localhost:3000/api"

    // Set home page and category items
    const [category, setCategory] = useState("")

    // Item detail for detail page
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [admainName, setAdmainName] = useState("")
    const [images, setImages] = useState([])
    const [ sellerName, setSellerName ] = useState("")
    const [ itemId, setItemId ] = useState("")


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
        <AppContext.Provider value={{ token, setToken, role, setCategory, category, name, setName, desc, setDesc, price, setPrice, admainName, setAdmainName, images, setImages, sellerName, setSellerName, itemId, setItemId, url }}>
            {children}
        </AppContext.Provider>
    )
}