

const initialState ={
    cartDetails:[],
}

const cartReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":

            return {
                cartDetails : [...state.cartDetails, action.payload]
            }
        break;

        case "REMOVE_TO_CART":

            return{
                ...state,
                cartDetails : state.cartDetails.filter(cart => cart.id !== action.payload.id)
            }

        break;

        default : {
            return state;
        }
    }
}

export {cartReducer,initialState}