import "./Modal.css";

function Modal(props) {
  const detectEl = (id) => {
    // console.log(id);
    if (+id === 1) {
      return props.food1;
    } else if (+id === 2) {
      return props.food2;
    } else if (+id === 3) {
      return props.food3;
    } else if (+id == 4) {
      return props.food4;
    }
  };
  return (
    <>
      <div
        className={`modal-wrapper 
        ${props.isOpened === true ? "openModal" : ""}`}
      >
        <div className="modal-main">
          <div className="modal-text">
            <ul>
              {props.empty1.map((el, i) => {
                return (
                  <li key={i}>
                    <div className="food-price-available food-price-available-modal ">
                      <h3 className="food-name">{el.foodName}</h3>
                      <p className="whythis">{el.about}</p>
                      <div className="price-modal">
                        <p className="price">${el.price}</p>
                        <p className="modal-food-count">x {detectEl(el.id)}</p>
                      </div>
                    </div>
                    <div className="madal-add-btns">
                      <button
                        className="modal-add-btn"
                        onClick={props.add}
                        id={el.id}
                      >
                        +
                      </button>
                      <button
                        className="modal-add-btn"
                        onClick={props.sep}
                        id={el.id}
                      >
                        -
                      </button>
                    </div>
                  </li>
                );
              })}{" "}
              {props.empty2.map((el, i) => {
                return (
                  <li key={i}>
                    <div className="food-price-available food-price-available-modal ">
                      <h3 className="food-name">{el.foodName}</h3>
                      <p className="whythis">{el.about}</p>
                      <div className="price-modal">
                        <p className="price">${el.price}</p>
                        <p className="modal-food-count">x {detectEl(el.id)}</p>
                      </div>
                    </div>
                    <div className="madal-add-btns">
                      <button
                        className="modal-add-btn"
                        onClick={props.add}
                        id={el.id}
                      >
                        +
                      </button>
                      <button
                        className="modal-add-btn"
                        onClick={props.sep}
                        id={el.id}
                      >
                        -
                      </button>
                    </div>
                  </li>
                );
              })}{" "}
              {props.empty3.map((el, i) => {
                return (
                  <li key={i}>
                    <div className="food-price-available food-price-available-modal ">
                      <h3 className="food-name">{el.foodName}</h3>
                      <p className="whythis">{el.about}</p>
                      <div className="price-modal">
                        <p className="price">${el.price}</p>
                        <p className="modal-food-count">x {detectEl(el.id)}</p>
                      </div>
                    </div>
                    <div className="madal-add-btns">
                      <button
                        className="modal-add-btn"
                        onClick={props.add}
                        id={el.id}
                      >
                        +
                      </button>
                      <button
                        className="modal-add-btn"
                        onClick={props.sep}
                        id={el.id}
                      >
                        -
                      </button>
                    </div>
                  </li>
                );
              })}{" "}
              {props.empty4.map((el, i) => {
                return (
                  <li key={i}>
                    <div className="food-price-available food-price-available-modal ">
                      <h3 className="food-name">{el.foodName}</h3>
                      <p className="whythis">{el.about}</p>
                      <div className="price-modal">
                        <p className="price">${el.price}</p>
                        <p className="modal-food-count">x {detectEl(el.id)}</p>
                      </div>
                    </div>
                    <div className="madal-add-btns">
                      <button
                        className="modal-add-btn"
                        onClick={props.add}
                        id={el.id}
                      >
                        +
                      </button>
                      <button
                        className="modal-add-btn"
                        onClick={props.sep}
                        id={el.id}
                      >
                        -
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="modal-footer">
            <div className="Modal-footer-total">
              <h4>Total Amount</h4>
              <h4>${props.totalPrice}</h4>
            </div>
            <div className="footer-btns">
              <button
                type="button"
                className="modal-btn-close"
                onClick={props.openModal}
              >
                Close
              </button>
              <button type="button" className="modal-btn-order">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
