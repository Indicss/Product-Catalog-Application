import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, addToCart } = useCart();

  if (cart.length === 0) {
    return <p className="cart-empty">Coșul este gol.</p>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Coș de cumpărături</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img
              src={item.product.image}
              alt={item.product.title}
              className="cart-image"
            />
            <div className="cart-details">
              <strong>{item.product.title}</strong>
              <span className="cart-price">
                {item.quantity} x ${item.product.price.toFixed(2)} = ${(
                  item.quantity * item.product.price
                ).toFixed(2)}
              </span>
              <div className="cart-quantity-controls">
                <button onClick={() => removeFromCart(item.product.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item.product)}>+</button>
              </div>
            </div>
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
