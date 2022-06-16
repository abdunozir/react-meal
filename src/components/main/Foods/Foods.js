import "./Foods.css";
import AddFood from "./AddFood/AddFood";

function Foods(props) {
  return (
    <div className="Foods-available">
      <ul>
        {props.foods.map((el, i) => {
          return (
            <li key={i}>
              <div className="food-price-available">
                <h3 className="food-name">{el.foodName}</h3>
                <p className="whythis">{el.about}</p>
                <p className="price">${el.price}</p>
              </div>
              <AddFood
                sushi={props.food1}
                Schnitzel={props.food2}
                Burger={props.food3}
                Bowl={props.food4}
                add={props.add}
                inputValue={props.inputValue}
                id={el.id}
                inputValidation_text={props.inputValidation_text}
                inputValidation={props.inputValidation}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Foods;
