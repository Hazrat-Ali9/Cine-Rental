import { useContext } from "react";
import { getCoverImageUrl } from "../../util/cine-utility";
import { movieContext } from "../Context/context";

import remove from "../../assets/delete.svg"
import { toast } from "react-toastify";

const CardInCart = ({cart}) => {

    const {state,dispatch} = useContext(movieContext);

    const handleRemove =(e,cart)=>{

      e.preventDefault();

      // const filterCart = state.cartDetails.filter(cart => {
      //   return cart.id !== id ;
      // });

      // setCartDetails([...filterCart]);

      dispatch({
        type: "REMOVE_TO_CART",
        payload: cart
      })
      toast.info(`${cart.title} has been removed from the cart`,{
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      })

    }

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 text-black">
      <div className="flex items-center gap-4">
        <img
          className="rounded overflow-hidden w-[100px] h-[120px]"
          src={getCoverImageUrl(cart.cover)}
          alt="cart.title"
        />
        <div>
          <h3 className="text-base font-bold">{cart.title}</h3>
          <p className=" max-md:text-xs text-[#575A6E]">
            {cart.genre}
          </p>
          <span className=" max-md:text-xs">${cart.price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
          <img className="w-5 h-5" src={remove} alt="delete" />
          <span 
          className="max-md:hidden"
          onClick={(e)=>handleRemove(e,cart)}
          >Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CardInCart;
