import { createContext, useState } from "react";
export const Authcontext=createContext();
export const Authprovider=({children})=>{
    const [isAuth,setisAuth]=useState(false)
    const dark=()=>{
        setisAuth(true)
    };
    const light=()=>{
        setisAuth(false)
    }
    return (
        <Authcontext.Provider value={{isAuth,dark,light}}>{children}</Authcontext.Provider>
    )
}