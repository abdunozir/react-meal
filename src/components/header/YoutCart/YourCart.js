import Modal from "./Modal/Modal";
import "./YourCart.css";

function Cart(props) {
  return (
    <>
      <Modal
        totalPrice={props.totalPrice}
        openModal={props.openModal}
        isOpened={props.isOpened}
        empty1={props.empty1}
        empty2={props.empty2}
        empty3={props.empty3}
        empty4={props.empty4}
        total={props.total}
        food1={props.food1}
        food2={props.food2}
        food3={props.food3}
        food4={props.food4}
        add={props.add}
        sep={props.sep}
      />
      <button
        onClick={props.openModal}
        type="button"
        className="nav-cart"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-cart3" /> <p>Your cart</p>
        <span className="badge rounded-pill">{props.total}</span>
      </button>
    </>
  );
}

export default Cart;
