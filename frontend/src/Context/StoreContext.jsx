import { useEffect } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [ token, setToken ] = useState("")

   
    useEffect(()=>{
        const tokenValue = localStorage.getItem('token')
        setToken(tokenValue)
    }, [token])

    return (
    <AppContext.Provider value={{token, setToken}}>
        {children}
    </AppContext.Provider>
    )
}