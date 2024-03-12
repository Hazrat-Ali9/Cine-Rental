import Page from "./Page";
import { movieContext,themeContext } from "./Components/Context/context";
import { useState ,useReducer } from "react";
import { cartReducer,initialState } from "./Reducer/reducer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // state controlling by useState
  // const [cartDetails,setCartDetails] = useState([]);

  // state controlling by using useReducer
  const [state,dispatch] = useReducer(cartReducer,initialState);

  const [darkMode,setDarkMode] = useState(true);

  return (
    <>
      <themeContext.Provider value={{darkMode,setDarkMode}}>

        <movieContext.Provider value={{state,dispatch}}>
          <Page></Page>
          <ToastContainer></ToastContainer>
        </movieContext.Provider>

      </themeContext.Provider>
    </>
  );
}

export default App;
