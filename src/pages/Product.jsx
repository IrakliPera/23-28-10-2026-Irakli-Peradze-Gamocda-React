const product = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" },
];

export { product };

export default function Product() {
  return (
    <div>
      <h1>Product </h1>
      {product.map((product) => (
        <p key={product.id}>
          <a href={`/product/${product.id}`}>{product.name}</a>
        </p>
      ))}
    </div>
  );
}
