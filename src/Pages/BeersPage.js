import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Beers({ beers }) {
  return (
    <div>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Card style={{ width: "18rem" }} style={{
              display: "flex",
              justifyContent: "center",
            }}>
              <Link to={`/${beer._id}`}>
                <div>
                  <Card.Img
                    variant="top"
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
                  flexDirection: "column",
                  width:'200px',
                }}
              >
                <h1> {beer.name}</h1>
                <h3> {beer.tagline}</h3>
                <p> Created by:{beer.contributed_by} </p>
              </div>

            </Card>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
export default Beers;
