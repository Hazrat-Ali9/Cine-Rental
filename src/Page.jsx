import React, { useContext } from "react";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList/MovieList";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import { themeContext } from "./Components/Context/context";

const Page = () => {
  const { darkMode } = useContext(themeContext);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header></Header>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar></SideBar>
          <MovieList></MovieList>
        </div>
      </main>
      <br />
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Page;
