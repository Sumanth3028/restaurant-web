import {Fragment} from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCart from "./HeaderCart";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCart />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt=" A table Full of Deliciousness" />
      
      </div>
      
    </Fragment>
  );
};

export default Header;
