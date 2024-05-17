import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

function Cart(props) {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "sushi", amount: 1, price: 200 }].map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
