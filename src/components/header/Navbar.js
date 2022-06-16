import { Component } from "react";
import "./Navbar.css";
import Cart from "./YoutCart/YourCart";
import Button from "@mui/material/Button";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  render() {
    const openModal = () => {
      this.setState({ isOpened: !this.state.isOpened });
    };
    return (
      <div className="navbar">
        <h1>ReactMeals</h1>
        {/* <Button variant="contained">Hello World</Button> */}
        <Cart
          empty1={this.props.empty1}
          empty2={this.props.empty2}
          empty3={this.props.empty3}
          empty4={this.props.empty4}
          food1={this.props.food1}
          food2={this.props.food2}
          food3={this.props.food3}
          food4={this.props.food4}
          total={this.props.total}
          add={this.props.add}
          sep={this.props.sep}
          totalPrice={this.props.totalPrice}
          openModal={openModal}
          isOpened={this.state.isOpened}
        />
      </div>
    );
  }
}

export default Navbar;
