import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartitems = (
    <ul>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((cart) => (
        <li>{cart.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
