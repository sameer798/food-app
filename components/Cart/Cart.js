import classes from "./Cart.module.css";
import Modal from '../UI/Modal'

function Cart(props) {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "sushi", amount: 24 }].map((list) => (
        <li key={list.id}>{list.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>total amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
