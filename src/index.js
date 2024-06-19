import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../src/pages/About"
import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"
import Search from "../src/pages/Search"
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{index: true, element:<About/>},{
      path:"/login",
      element:<Login/>
    },{
      path:"/signup",
      element:<Signup/>
    },{
      path:"/search",
      element:<Search/>
    }]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
