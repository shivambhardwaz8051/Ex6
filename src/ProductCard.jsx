import React from "react";

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "6px solid #0f0101",
        padding: "10px",
        margin: "7px",
        width: "200px",
        backgroundColor: "#c5d8e2",   
        borderRadius: "10px",         
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)" 
        
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        width="180"
        height="120"
      />
      <h4>{product.title}</h4>
      <p>Price: ₹{product.price}</p>
    </div>
  );
} 