import Header from "./Layout/Header";
import AvailableItem from "./Components/AvailableItem";
import Footer from "./Layout/Footer";
import Cart from "./Components/Cart/Cart";
import React, {useState } from "react";
import CartProvider from "./store/CartProvider";
import SizeCalcProvider from "./store/SizeCalcProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <SizeCalcProvider>
      {cartIsShown && <Cart onShowCart={showCartHandler} onClose={hideCartHandler}/>}
      <Header  onShowCart={showCartHandler} />
      <AvailableItem />
      <Footer />
      </SizeCalcProvider>
    </CartProvider>
  );
}

export default App;
