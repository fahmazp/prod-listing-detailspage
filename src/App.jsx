import React, { useState, useEffect } from "react";
import Products from "./products";
import axios from "axios";
import './style.css'
// import ProductDetails from "./productDetails";


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>

    <Products products={products} />

    </div>
    
  )
}
export default App
