import { Link } from "react-router-dom";
import imgBeers from "../assets/beers.png";
import imgRandom from "../assets/random-beer.png";
import imgNew from "../assets/new-beer.png";

function AllBeers() {
  return (
    <div>
      <div>
        <article>
          <Link to={"/beers"} style={{ fontSize: "24px" }}>
        <img src={imgBeers} alt="beers" style={{width:'500px'}}/>
          </Link>
            <h1>All Beers </h1>
          <p> Aqui você encontra uma lista das Principais cervejas</p>
        </article>
      </div>
      <div>

        <article>
          <Link to={"/random"} style={{ fontSize: "24px" }}>
        <img src={imgRandom} alt="beers" style={{width:'500px'}} />
          </Link>
            <h1>Random Beers</h1>
            
          <p> Você pode escolher uma cerveja aleatoriamente</p>
        </article>
      </div>
      <div>
        
        <article>
          <Link to={"/new"} style={{ fontSize: "24px" }}>
          <img src={imgNew} alt="beers" style={{width:'500px'}}/>
          </Link>
           <h1>New Beers</h1> 
          <p>Adicione uma nova cerveja</p>
        </article>
      </div>
    </div>
  );
}

export default AllBeers;
