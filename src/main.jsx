import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavMenu from './Shared/Navbar/NavMenu.jsx'
import Footer from './Shared/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavMenu></NavMenu>
    <Footer></Footer>
  </React.StrictMode>,
)