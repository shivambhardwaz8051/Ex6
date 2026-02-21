import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="app">
      <h1><center>The Fashion House - (Shivam - 2500032187)</center></h1>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}