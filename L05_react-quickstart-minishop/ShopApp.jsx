import { useState } from "react";

const products = [
  { id: 1, title: "Cabbage", price: 1.5, isFruit: false, popular: false },
  { id: 2, title: "Garlic", price: 2.0, isFruit: false, popular: true },
  { id: 3, title: "Apple", price: 3.25, isFruit: true, popular: true },
  { id: 4, title: "Mango", price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>

      {/* Dynamic price color based on isFruit */}
      <p style={{ color: product.isFruit ? "magenta" : "darkgreen" }}>
        ${product.price.toFixed(2)}
      </p>

      {/* Popular badge conditionally rendered */}
      {product.popular && <span>⭐ Popular</span>}

      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartCount, setCartCount] = useState(0);

  // Increases cart count by 1
  function handleAddToCart() {
    setCartCount((prevCount) => prevCount + 1);
  }

  // Part C: Decreases cart count by 1, never goes below 0
  function handleRemoveFromCart() {
    setCartCount((prevCount) => Math.max(0, prevCount - 1));
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>

      {/* Cart Status Line */}
      <p>
        {cartCount === 0 ? "Cart is empty" : `${cartCount} items in cart`}{" "}
        {/* Part C: "Remove one" button rendered ONLY when cart is NOT empty */}
        {cartCount > 0 && (
          <button onClick={handleRemoveFromCart}>Remove one</button>
        )}
      </p>

      {/* Render Product Cards */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}