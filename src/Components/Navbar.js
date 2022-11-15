import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div style={{backgroundColor:"blue"}}>
            
            
            <Link to={`/`} style={{fontSize:"38px"}}>HOME</Link>
            
        </div>
    )
}

export default Navbar 