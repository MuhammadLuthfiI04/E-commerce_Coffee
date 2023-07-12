import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductPage";

function CartItem({ item }) {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity, item) => {
    return quantity * item.price;
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    setCartItem((prevCartItem) =>
      prevCartItem.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
      )
    );
  }, [quantity, item.id, setCartItem]);

  function formatNumber(number) {
    return new Intl.NumberFormat("id-ID").format(number);
  }

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={item.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{item.description}</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">
          Rp {formatNumber(calcPrice(quantity, item))}
        </p>
        <i
          onClick={() => removeFromCart(item.id)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
      </div>
    </div>
  );
}

export default CartItem;
