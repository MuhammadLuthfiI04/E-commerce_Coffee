import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductPage";
import EmptyCart from "./EmptyCart";

function CartWithItems() {
  const { cartItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  function formatNumber(number) {
    return new Intl.NumberFormat("id-ID").format(number);
  }

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItem.length !== 0 ? (
            cartItem.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">Rp {formatNumber(totalPrice)}</p>
        </div>
        <div className="sub-left">
          <Link to="/checkout">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
