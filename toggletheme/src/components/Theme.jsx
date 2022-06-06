import React, { useContext } from 'react'
import { Authcontext } from "../components/Authcontext"
import styles from "./Theme.module.css"
const Theme = () => {
    const {isAuth,dark,light} =useContext(Authcontext)
    const handlechange=()=>{
        if(isAuth){
            light()
        }
        else{
            dark()
        }
    }
  return (
    <div className={isAuth ? `${styles.dark}`:`${styles.light}`}>Theme
        <h1>Theme change</h1>
        <button onClick={handlechange}>{isAuth ? "Light Mode" :"Dark Mode"}</button>
    </div>
  )
}

export default Theme