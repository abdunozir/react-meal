import { Component } from "react";
import "./Container.css";
import "animate.css";
import Navbar from "../header/Navbar.js";
import TopBody from "../main/topBody/TopBody";
import Foods from "../main/Foods/Foods";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [
        {
          id: 1,
          foodName: "Sushi",
          about: "Finest fish and veggies",
          price: 22.99,
        },
        {
          id: 2,
          foodName: "Schnitzel",
          about: "A german specialty!",
          price: 16.5,
        },
        {
          id: 3,
          foodName: "Barbecue Burger",
          about: "American, raw, meaty",
          price: 12.99,
        },
        {
          id: 4,
          foodName: "Green Bowl",
          about: "Healthy...and green...",
          price: 18.99,
        },
      ],

      empty1: [],
      empty: [],
      empty2: [],
      empty3: [],
      empty4: [],

      food1_Price: 0,
      food2_Price: 0,
      food3_Price: 0,
      food4_Price: 0,
      totalPrice: 0,

      food1: 0,
      food2: 0,
      food3: 0,
      food4: 0,
      total: 0,
      food1_add: 1,
      food2_add: 1,
      food3_add: 1,
      food4_add: 1,

      inputValidation: false,
      inputValidation_text: "",
    };
  }

  totalFunc = () => {
    this.setState({
      total:
        this.state.food1 +
        this.state.food2 +
        this.state.food3 +
        this.state.food4,
    });
  };

  sep = (e) => {
    if (e.target.id === "1") {
      this.setState({ food1: (this.state.food1 -= this.state.food1_add) });
      this.totalFunc();
      this.setState({
        empty1: [...this.state.foods.filter((el) => el.foodName === "Sushi")],
      });
      if (this.state.food1 === 0) {
        let arr = [];
        arr = [...this.state.empty1];
        arr.splice(0, 1);
        this.setState({ empty1: [...arr] });
      }
    }
    if (e.target.id === "2") {
      this.setState({ food2: (this.state.food2 -= this.state.food2_add) });
      this.totalFunc();
      this.setState({
        empty2: [
          ...this.state.foods.filter((el) => el.foodName === "Schnitzel"),
        ],
      });
      if (this.state.food2 === 0) {
        let arr = [];
        arr = [...this.state.empty2];
        arr.splice(0, 1);
        this.setState({ empty2: [...arr] });
      }
    }
    if (e.target.id === "3") {
      this.setState({ food3: (this.state.food3 -= this.state.food3_add) });
      this.totalFunc();
      this.setState({
        empty3: [
          ...this.state.foods.filter((el) => el.foodName === "Barbecue Burger"),
        ],
      });
      if (this.state.food3 === 0) {
        let arr = [];
        arr = [...this.state.empty3];
        arr.splice(0, 1);
        this.setState({ empty3: [...arr] });
      }
    }
    if (e.target.id === "4") {
      this.setState({ food4: (this.state.food4 -= this.state.food4_add) });
      this.totalFunc();
      this.setState({
        empty4: [
          ...this.state.foods.filter((el) => el.foodName === "Green Bowl"),
        ],
      });
      if (this.state.food4 === 0) {
        let arr = [];
        arr = [...this.state.empty4];
        arr.splice(0, 1);
        this.setState({ empty4: [...arr] });
      }
    }

    this.state.foods.map((el) => {
      // console.log(el.price);
      if (+e.target.id === 1) {
        this.setState({
          food1_Price: +this.state.food1 * el.price,
        });
        console.log(this.state.food1);
      }
      if (+e.target.id === 2) {
        this.setState({
          food2_Price: +this.state.food2 * el.price,
        });
        console.log("2");
      }
      if (+e.target.id === 3) {
        this.setState({
          food3_Price: +this.state.food3 * el.price,
        });
        console.log("3");
      }
      if (+e.target.id === 4) {
        this.setState({
          food4_Price: +this.state.food4 * el.price,
        });
        console.log("4");
      }

      this.setState({
        totalPrice:
          +this.state.food1_Price +
          +this.state.food2_Price +
          +this.state.food3_Price +
          +this.state.food4_Price,
      });
    });
  };

  add = (e) => {
    e.preventDefault();
    // console.log(+e.target.id);

    if (e.target.id === "1") {
      this.setState({ food1: (this.state.food1 += this.state.food1_add) });
      this.totalFunc();
      this.setState({
        empty1: [...this.state.foods.filter((el) => el.foodName === "Sushi")],
      });
    }
    if (e.target.id === "2") {
      this.setState({ food2: (this.state.food2 += this.state.food2_add) });
      this.totalFunc();
      this.setState({
        empty2: [
          ...this.state.foods.filter((el) => el.foodName === "Schnitzel"),
        ],
      });
    }
    if (e.target.id === "3") {
      this.setState({ food3: (this.state.food3 += this.state.food3_add) });
      this.totalFunc();
      this.setState({
        empty3: [
          ...this.state.foods.filter((el) => el.foodName === "Barbecue Burger"),
        ],
      });
    }
    if (e.target.id === "4") {
      this.setState({ food4: (this.state.food4 += this.state.food4_add) });
      this.totalFunc();
      this.setState({
        empty4: [
          ...this.state.foods.filter((el) => el.foodName === "Green Bowl"),
        ],
      });
    }

    this.state.foods.map((el) => {
      // console.log(el.price);
      if (+el.id === 1) {
        this.setState({
          food1_Price: +this.state.food1 * +el.price,
        });
      }
      if (+el.id === 2) {
        this.setState({
          food2_Price: +this.state.food2 * el.price,
        });
      }
      if (+el.id === 3) {
        this.setState({
          food3_Price: +this.state.food3 * el.price,
        });
      }
      if (+el.id === 4) {
        this.setState({
          food4_Price: +this.state.food4 * el.price,
        });
      }

      this.setState({
        totalPrice:
          Number(this.state.food1_Price) +
          Number(this.state.food2_Price) +
          Number(this.state.food3_Price) +
          Number(this.state.food4_Price),
      });
    });
  };

  inputValue = (e) => {
    if (Number(e.target.value) > 6) {
      this.setState({ inputValidation_text: "maximum 5 is reaquired !" });
      this.setState({ inputValidation: !this.state.inputValidation });
      return;
    } else if (Number(e.target.value) < 1) {
      this.setState({ inputValidation_text: "minimum 1 is reaquired !" });
      this.setState({ inputValidation: !this.state.inputValidation });
      return;
    } else {
      this.setState({ inputValidation: !this.state.inputValidation });
    }
    if (e.target.id === "1") {
      this.setState({ food1_add: Number(e.target.value) });
    }
    if (e.target.id === "2") {
      this.setState({ food2_add: Number(e.target.value) });
    }
    if (e.target.id === "3") {
      this.setState({ food3_add: Number(e.target.value) });
    }
    if (e.target.id === "4") {
      this.setState({ food4_add: Number(e.target.value) });
    }
  };

  render() {
    return (
      <div className="Container">
        <header>
          <Navbar
            totalPrice={this.state.totalPrice}
            empty1={this.state.empty1}
            empty2={this.state.empty2}
            empty3={this.state.empty3}
            empty4={this.state.empty4}
            total={this.state.total}
            food1={this.state.food1}
            food2={this.state.food2}
            food3={this.state.food3}
            food4={this.state.food4}
            add={this.add}
            sep={this.sep}
          />
          <TopBody />
          <Foods
            inputValidation_text={this.state.inputValidation_text}
            inputValidation={this.state.inputValidation}
            inputValue={this.inputValue}
            foods={this.state.foods}
            food1={this.state.food1}
            food2={this.state.food2}
            food3={this.state.food3}
            food4={this.state.food4}
            add={this.add}
          />
        </header>
      </div>
    );
  }
}

export default Container;
