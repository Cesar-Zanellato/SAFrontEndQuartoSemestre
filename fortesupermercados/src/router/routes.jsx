import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import Shop from "../screens/Shop/Shop";
import Erro from "../components/Erro/Erro";
import Profile from "../screens/Profile/Profile";
import Categories from "../screens/Categories/Categories"

const router = createBrowserRouter([

    { 
      path: "/",
      element: <App />,
      errorElement: <Erro/>,
      children:[
                    {path: "/home", element: <Home/>},
                    {path: "/login", element: <Login/>},
                    {path: "/register", element: <Register/>},
                    {path: "/shop", element: <Shop />},
                    {path: "/profile", element: <Profile />},
                    {path: "/alimentos", element: <Categories />}
                    
                    
                ]
    },

    

])


export default router;