import { useState, useEffect } from "react";
import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <div class="lds-circle w-screen h-screen flex justify-center items-center">
          <div></div>
        </div>
      ) : (
        <>
          <Header />
          <Slider />
          <ProductionHouse />
          <GenreMovieList />
        </>
      )}
    </div>
  );
}

export default App;
