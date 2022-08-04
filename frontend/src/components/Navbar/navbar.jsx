import "./navbar.css";
import logo from "../../images/default-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <div className="main_nav">
         <div className="image">
           <a href="http://localhost:8001"> <img alt="logo" src={logo}></img></a>
         </div>
         {/* <div className="content"> */}
            {/* <a href="http://localhost:8080/"><div className="home">back</div></a> */}

         {/* </div> */}
         <div className="home">Blog</div>
      </div>
     
   )
}

export default NavBar;