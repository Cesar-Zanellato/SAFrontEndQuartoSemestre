import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import Shop from "../screens/Shop/Shop";
import Erro from "../components/Erro/Erro";
import Profile from "../screens/Profile/Profile";


const router = createBrowserRouter([

    { 
      path: "/",
      element: <App />,
      errorElement: <Erro/>,
      children:[
                    {path: "/", element: <Home/>},
                    {path: "/login", element: <Login/>},
                    {path: "/register", element: <Register/>},
                    {path: "/shop", element: <Shop />},
                    {path: "/profile", element: <Profile />},
                    //{path: "/alimentos", element: <StapleFoods />},
                    //{path: "/bebidas", element: <BasicBeverages />},
                    //{path: "/matinais", element: <Morning />},
                    //{path: "/higiene", element: <PersonalHygiene />},
                    //{path: "/limpeza", element: <Cleaning />},
                    //{path: "/padaria", element: <Bakery />},
                    //{path: "/hortifruti", element: <FruitAndVegetable />},
                    //{path: "/acougue", element: <Butcher />},
                ]
    },

    

])


export default router;