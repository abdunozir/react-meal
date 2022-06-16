import "./TopBody.css";
import img from "../../../assets/images/img.jpg";

function TopBody() {
  return (
    <div className="topBody-container">
      <img className="image-topBody" src={img} alt="" />
      <div className="about-Ract-Food">
        <div className="card-about-foods">
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopBody;
