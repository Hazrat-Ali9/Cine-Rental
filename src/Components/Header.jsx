import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import ShowCart from "./ShowCart/ShowCart";

import { useContext, useState } from "react";
import { movieContext,themeContext } from "./Context/context";

const Header = () => {

    const [showCart,setShowCart] = useState(false);
    const {state} = useContext(movieContext);
    const {darkMode,setDarkMode} = useContext(themeContext);

    const handleShowCart =() =>{
        setShowCart(true)
    }

    const handleCloseCart=() =>{
        setShowCart(false)
    }
          
  return (
    <header>
        {
            showCart && 
            <ShowCart
            onCloseCart={handleCloseCart}
            ></ShowCart>
        }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} alt="logo"/>
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a 
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=>setDarkMode(!darkMode)}
            >
              <img
                src={darkMode ? sun : moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          {/* showCart */}
          <li className="flex items-center">
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleShowCart}
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="shoppingCart"
              />
           
            </a>
            {
                state.cartDetails.length>0 && <span className="bg-primary/20 dark:bg-primary/[7%] border rounded-lg px-2">{state.cartDetails.length}</span>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
