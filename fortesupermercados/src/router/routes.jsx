import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import Shop from "../screens/Shop/Shop";
import Erro from "../components/Erro/Erro";
import Profile from "../screens/Profile/Profile";


//import StapleFoods from "../screens/Subcategory/StapleFoods/StapleFoods"
//import BasicBeverages from "../screens/Subcategory/BasicBeverages/BasicBeverages"
//import Morning from "../screens/Subcategory/Morning/Morning"
//import PersonalHygiene from "../screens/Subcategory/PersonalHygiene/PersonalHygiene"
//import Cleaning from "../screens/Subcategory/Cleaning/Cleaning"
import Bakery from "../screens/Subcategory/Bakery/Bakery"
//import FruitAndVegetable from "../screens/Subcategory/FruitAndVegetable/FruitAndVegetable"
//import Butcher from "../screens/Subcategory/Butcher/Butcher"


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
                    
                    //SUBCARTEGORIES
                    //{path: "/alimentos", element: <StapleFoods />},
                    //{path: "/bebidas", element: <BasicBeverages />},
                    //{path: "/matinais", element: <Morning />},
                    //{path: "/higiene", element: <PersonalHygiene />},
                    //{path: "/limpeza", element: <Cleaning />},
                    {path: "/padaria", element: <Bakery />},
                    //{path: "/hortifruti", element: <FruitAndVegetable />},
                    //{path: "/acougue", element: <Butcher />},
                ]
    },

    

])


export default router;