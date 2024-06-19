import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import ChatApp from "./pages/ChatApp";
import PropertyCard from "./components/PropertyCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Temp from "./pages/Temp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "temp",
        element: <Temp />,
      },
      {
        path: "property",
        element: <PropertyCard />,
      },
      {
        path: "chat",
        element: <ChatApp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
