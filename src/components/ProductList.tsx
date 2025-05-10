import { useEffect, useState } from "react";
import { type Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import "./ProductList.css";
import { Skeleton } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setTimeout(() => {
          setLoading(false);
          console.log(data);
        }, 1000);
        setAllProducts(data);
        setProducts(data);
        // setLoading(false);
      });
  }, []);

  const showAlert = (productName: string) => {
    setAlertMessage(`${productName} a fost adăugat în coș!`);
    setTimeout(() => setAlertMessage(null), 3000);
  };

  if (loading) {
    return (
      <div className="product-container">
        <div className="product-grid">
          {products.map((_, index) => (
            <div className="product-card" key={index}>
              <Skeleton variant="rectangular" width="100%" height={150} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="rounded" width="100%" height={36} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="product-container">
      <div className="sort-container">
  <div className="category-sort">
    <label htmlFor="category-sort">Categorii:</label>
    <select
      id="category-sort"
      onChange={(e) => {
        const category = e.target.value;
        if (category === "all") {
          setProducts(allProducts);
        } else {
          const filteredProducts = allProducts.filter(
            (product) => product.category === category
          );
          setProducts(filteredProducts);
        }
      }}
    >
      <option value="all">Toate categoriile</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Bijuterii</option>
      <option value="men's clothing">Îmbrăcăminte bărbați</option>
      <option value="women's clothing">Îmbrăcăminte femei</option>
    </select>
  </div>

  <div className="product-sort-cantainer">
    <label htmlFor="sort">Sortează după:</label>
    <select
      id="sort"
      onChange={(e) => {
        const sortValue = e.target.value;
        if (sortValue === "asc") {
          setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        } else if (sortValue === "desc") {
          setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
      }}
    >
      <option value="asc">Preț crescător</option>
      <option value="desc">Preț descrescător</option>
    </select>
  </div>
</div>

      
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