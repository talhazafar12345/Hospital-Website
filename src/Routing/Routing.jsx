


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Department from '../Pages/Department'


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

    
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing

