import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Beers({ beers }) {
  return (
    <div>
      <Navbar />

      {beers.map((beer) => {
        return (
          <div key={beer._id} style={{
                  display: "flex", justifyContent: 'center'}}>
            <Link to={`/${beer._id}`}>
              <div>
                <img
                  src={`${beer.image_url}`}
                  alt="Beer Design"
                  style={{ maxHeight: "30vh" }}
                />
              </div>
            </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "20px",
                  flexDirection:'column'
                }}
              >
                <h1> {beer.name}</h1>
                <h3> {beer.tagline}</h3>
                <h4> Created by:{beer.contributed_by} </h4>
              </div>
              <ul></ul>
          </div>
        );
      })}
    </div>
  );
}
export default Beers;
