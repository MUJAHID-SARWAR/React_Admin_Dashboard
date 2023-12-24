import Home from "./pages/home/Home"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from "./pages/login/Login";
import './styles/global.scss';
import User from './pages/user/User'
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {

  const LayOut = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
        <div className="menuContainer">
          <Menu/>
          </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
          <Outlet/>

          </QueryClientProvider>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
     path: "/",
     element:<LayOut/>,
     children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/users",
        element:<Users/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/products/:id",
        element:<Product/>
      },
      {
        path:"/users/:id",
        element:<User/>
      },
     ]
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  // return (
  //   // <div>
  //   //   <h1>Mujahid Sarwar</h1>
  //   //   <Home/>
        
  //   // </div>
  // )
}

export default App
