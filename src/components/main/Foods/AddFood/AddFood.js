import "./AddFood.css";

function AddFood(props) {
  return (
    <div className="food-add">
      <form action="" className="form-number">
        <div>
          <h3 className="Amout-text">Amount</h3>
          <input
            type="number"
            id={props.id}
            onChange={props.inputValue}
            defaultValue={1}
            min={1}
            max={5}
            // required={true}
          />
        </div>
        <button className="add-btn" id={props.id} onClick={props.add}>
          + Add
        </button>
      </form>
    </div>
  );
}

export default AddFood;
