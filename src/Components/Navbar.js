import {Link} from "react-router-dom"
import homeimg from "../assets/home.png"
function Navbar(){
    return(
        <div style={{backgroundColor:"#61dafb"}}>
            
            
            <Link to={`/`} style={{fontSize:"38px"}}>
                <img src={homeimg} alt='home' style={{ height:'70px', marginTop: '20px'}}/>
            </Link>
            
        </div>
    )
}

export default Navbar 