import React from "react";

function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 900 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
