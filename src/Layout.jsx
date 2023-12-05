import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'  // ye react deta ha ek laibrary jis me hm components ko daal dety hen header footer k andr 
                                        // Outlet k andr cheexen change hoti rahen gin
function Layout() {
  return (
    <>
        
<Header/>
<Outlet/>
<Footer/>
    </>
  )
}

export default Layout