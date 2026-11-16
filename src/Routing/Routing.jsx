


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Department from '../Pages/Department'
import Contact from '../Pages/Contact'
import Appointment from '../Pages/Appointment'


function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },

        {
            path: "/about-page",
            element: <About />
        },

         {
            path: "/dept-page",
            element: <Department />
        },

             {
            path: "/contact-page",
            element: <Contact />
        },

             {
            path: "/app-page",
            element: <Appointment />
        },


    
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing

