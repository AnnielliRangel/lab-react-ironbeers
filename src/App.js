import "./App.css";
import { Routes, Route } from "react-router-dom";
import Beers from "./Pages/BeersPage"
import AllBeers from "./Pages/AllBeersPage";
import NewBeer from "./Pages/NewBeerPage";
import RandomBeer from "./Pages/RandomBeerPage";
import SingleBeer from "./Pages/SingleBeerPage";

import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  
    const [beers, setBeers] = useState([]);

    useEffect(() => {
      async function fetchBeers() {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(response.data);
      }
      fetchBeers();
    }, []);

   
  
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<AllBeers />}> Home</Route>
        <Route path="/beers" element={<Beers beers = {beers}/>}> Beers</Route>
        <Route path="/:beerId" element={<SingleBeer beers = {beers} />}></Route>
        <Route path="/new" element={<NewBeer beers = {beers} />}></Route>
        <Route path="/random" element={<RandomBeer beers = {beers} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
