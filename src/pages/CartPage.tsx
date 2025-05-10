import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return <p className="cart-empty"> Coșul este gol.</p>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title"> Coș de cumpărături</h2>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <img
              src={product.image}
              alt={product.title}
              className="cart-image"
            />
            <div className="cart-details">
              <strong>{product.title}</strong>
              <span className="cart-price">${product.price.toFixed(2)}</span>
            </div>
            <button
              className="cart-remove"
              onClick={() => removeFromCart(product.id)}
            >
              Elimină
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-footer">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <button className="cart-clear" onClick={clearCart}>
          Golește coșul
        </button>
      </div>
    </div>
  );
};

export default CartPage;
