import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {BrowserContext} from "react"
import { Authprovider } from './components/Authcontext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <App />
    </Authprovider>
    
  </React.StrictMode>
)
