import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Index from './components/Index'
import Menu from './components/Menu'
import ContactUs from './components/ContactUs'
import Catering from './components/Catering'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "menu",
        element: <Menu />
      },
      {
        path: "contact_us",
        element: <ContactUs />
      },
      {
        path: "catering",
        element: <Catering />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
