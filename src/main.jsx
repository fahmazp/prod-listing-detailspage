import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Root from "./routes/root.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductDetails from "./productDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/productDetails/:prod_id",
        element: <ProductDetails />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);