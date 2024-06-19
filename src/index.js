import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../src/pages/About"
import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"
import Search from "../src/pages/Search"
import ChatApp from "./pages/ChatApp";
import PropertyCard from "./components/PropertyCard";
import Temp from "./pages/Temp";
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{index: true, element:<About/>},
      {
        path: "temp",
        element: <Temp />,
      },{
        path: "property",
        element: <PropertyCard />,
      },
      {
        path: "chat",
        element: <ChatApp/>
      },
      {
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
