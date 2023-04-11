import classes from "./Header.module.css";
import headerImg from "./../assets/headerImg.jpeg";
import CartButton from "./CartButton";
import SizeCalculator from "../Components/SizeCalculator";
import SizeCalcProvider from "../store/SizeCalcProvider";

const Header = (props) => {
  const sizeObj = {
    wetsuitSize: [
      {
        size: "Small",
        minWieght: 51,
        maxWeight: 70,
        minHeight: 151,
        maxHeight: 165,
      },
      {
        size: "Medium",
        minWieght: 66,
        maxWeight: 85,
        minHeight: 166,
        maxHeight: 180,
      },
      {
        size: "Large",
        minWieght: 76,
        maxWeight: 100,
        minHeight: 181,
        maxHeight: 190,
      },
      {
        size: "XLarge",
        minWieght: 91,
        maxWeight: 115,
        minHeight: 191,
        maxHeight: 205,
      },
    ],
    wetsThickness: [
      { thickness: "5/4mm", minTemp: 6, maxTemp: 11 },
      { thickness: "4/3mm", minTemp: 12, maxTemp: 14 },
      { thickness: "3/2mm", minTemp: 15, maxTemp: 17 },
    ],

    sizeMessage: [
      "Sorry we are having difficulty determining your size. Please contact customer service.",
      "Sorry, we don't have any wetsuits for that water temperature.",
    ],
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Blast Co.</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <SizeCalcProvider>
          <SizeCalculator sizeList={sizeObj} />
        </SizeCalcProvider>
        <h2>
          High Quality Natural Plant Based Rubber wetsuits for the best price.
        </h2>
        <img src={headerImg} alt="person on a wetsuit checking the waves" />
      </div>
    </>
  );
};

export default Header;
