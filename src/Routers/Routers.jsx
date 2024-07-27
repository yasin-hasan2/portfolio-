import { createBrowserRouter } from "react-router-dom";
// import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home/Home";


const Routers =  createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
])

export default Routers;