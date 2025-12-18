import { useEffect } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [ token, setToken ] = useState("")
    const [ role, setRole ] = useState("")

   
    useEffect(()=>{
        const tokenValue = sessionStorage.getItem('token')
        setToken(tokenValue)
    }, [token])

    useEffect(()=>{
        const roleValue = sessionStorage.getItem('role')
        setRole(roleValue)
    }, [role])

    return (
    <AppContext.Provider value={{token, setToken, role}}>
        {children}
    </AppContext.Provider>
    )
}