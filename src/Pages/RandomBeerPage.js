
import { useState, useEffect } from "react";
import axios from "axios"


function RandomBeer() {
  const [beerRdm, setBeerRdm] = useState([]);

  useEffect(() => {
    async function fetchBeerRdm() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/Random"
      );
      setBeerRdm(response.data);
    }
    fetchBeerRdm();
  }, []);

  return (
    <div>
     
      <div>
        <img
          src={`${beerRdm.image_url}`}
          alt="beerRdm"
          style={{ maxHeight: "50vh" }}
        />
      </div>
      <div>
        <h1>
          {beerRdm.name}{" "}
          <span style={{ color: "grey" }}> {beerRdm.attenuation_level} </span>{" "}
        </h1>
        <h2 style={{ color: "grey" }}>
          {beerRdm.tagline}{" "}
          <span style={{ color: "black" }}> {beerRdm.first_brewed} </span>{" "}
        </h2>

        <h3
          style={{
            marginLeft: "250px",
            marginRight: "250px",
            textAlign: "justify",
          }}
        >
          {beerRdm.description}
        </h3>
        <p>{beerRdm.contributed_by} </p>
      </div>
    </div>
  );
}

export default RandomBeer;
