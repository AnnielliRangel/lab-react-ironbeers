import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AllBeers from './Pages/AllBeersPage';
import NewBeer from "./Pages/NewBeerPage"
import RandomBeer from "./Pages/RandomBeerPage"
import SingleBeer from "./Pages/SingleBeerPage"
import Navbar from "./Components/Navbar"
import {useState} from "react"

function App() {




  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage /> } ></Route>
        <Route path="/allbeers" element={<AllBeers /> }></Route>
        <Route path="/newbeer" element={<NewBeer /> }></Route>
        <Route path="/randombeer" element={<RandomBeer /> }></Route>
        <Route path="/singlebeer" element={<SingleBeer /> }></Route>
      

      </Routes>
      
    </div>
  );
}

export default App;
