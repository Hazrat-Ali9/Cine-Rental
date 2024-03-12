import React, { useContext } from "react";
import { movieContext } from "../Context/context";
import CardInCart from "../CardInCart/CardInCart";
import checkOut from "../../assets/icons/checkout.svg"

const ShowCart = ({ onCloseCart }) => {
  const {state} = useContext(movieContext);
  

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md bg-slate-300 rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className=" text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
           
            {
              state.cartDetails.length === 0 ? 
              (<p className="text-3xl font-semibold text-white">The Cart is Empty</p>) :
              (state.cartDetails.map(cart => (
                    <CardInCart
                    key={cart.id}
                    cart={cart}
                    ></CardInCart>
              )))
            }

          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img
                src={checkOut}
                width="24"
                height="24"
                alt="checkout"
              />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
              onClick={onCloseCart}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
