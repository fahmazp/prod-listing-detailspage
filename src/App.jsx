import React, { useState, useEffect } from "react";
import Products from "./Products";
import axios from "axios";
import "./style.css";

const API_URL = "http://localhost:5000/products"; // backend URL

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default App;
