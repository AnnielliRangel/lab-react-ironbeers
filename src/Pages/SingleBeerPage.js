

import { useParams } from "react-router-dom";

function SingleBeer({ beers }) {
    const { beerId } = useParams();
    
    

  const beerSelected = beers.find((beer) => {
    return beer._id === beerId;
    
  });
  

  return (
    <div>
     
      <div>
        <img src={`${beerSelected.image_url}`} alt="beerSelected" style={{ maxHeight: "50vh" }} />
      </div>
      <div>
        <h1>{beerSelected.name}           <span style={{color:"grey"}}> {beerSelected.attenuation_level} </span> </h1> 
        <h2 style={{color:'grey'}}>{beerSelected.tagline} <span style={{color:'black'}}> {beerSelected.first_brewed} </span> </h2>
        
        <h3 style={{marginLeft:'250px', marginRight:'250px', textAlign:'justify'}}>
        {beerSelected.description}
        </h3>
        <p>{beerSelected.contributed_by} </p>

      </div>
      
    </div>
  );
}
export default SingleBeer;
