import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"user/:userid",
        element: <User/>
      },
      {
        path:"github",
        element: <GitHub/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* RouterProvider use hota ha routes mn ek prop leta ha ye */}
    <RouterProvider router={router}/>   
  </React.StrictMode>,
)
