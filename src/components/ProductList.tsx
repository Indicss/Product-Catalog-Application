import { useEffect, useState } from 'react';
import { type Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const showAlert = (productName: string) => {
    setAlertMessage(`${productName} a fost adăugat în coș!`);
    setTimeout(() => setAlertMessage(null), 3000);
  };

  if (loading) return <p className="loading">Loading products...</p>;

  return (
    <div className="product-container">
      {}
      {alertMessage && <div className="alert">{alertMessage}</div>}

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
            <button
              onClick={() => {
                addToCart(product);
                showAlert(product.title);
              }}
            >
              Adaugă în coș
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
