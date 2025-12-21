import { useEffect } from "react";
import { createContext, useState } from "react";
import { allItemsApi, trendingApi } from '../Api/user.api'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    const [category, setCategory] = useState("")
    const [trendingItems, setTrendingItems] = useState([])
    const [allItems, setAllItems] = useState([])

    // Item detail for detail page
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [admainName, setAdmainName] = useState("")
    const [images, setImages] = useState([])


     const itemsApi = async () => {

    if (trendingItems.length == 0) {
      const trending = await trendingApi()
      setTrendingItems(trending)
      console.log("db call")
    }
    if (allItems.length == 0) {
      const all = await allItemsApi()
      setAllItems(all)
    }

  }

  useEffect(() => {
    itemsApi()
    console.log("dbcall")
  }, [])

    useEffect(() => {
        const tokenValue = sessionStorage.getItem('token')
        setToken(tokenValue)
    }, [token])

    useEffect(() => {
        const roleValue = sessionStorage.getItem('role')
        setRole(roleValue)
    }, [role])

    return (
        <AppContext.Provider value={{ token, setToken, role, setCategory, category, name, setName, desc, setDesc, price, setPrice, admainName, setAdmainName, images, setImages, allItems, setAllItems, trendingItems, setTrendingItems }}>
            {children}
        </AppContext.Provider>
    )
}