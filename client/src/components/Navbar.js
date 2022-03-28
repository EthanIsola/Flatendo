import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return( 
  <div className="navbar">
    <nav>
      <NavLink className = "navlink" exact to="/">ScoreBoard  </NavLink>
      <NavLink className = "navlink" to="/login"> Login/Signup  </NavLink>
      <NavLink className = "navlink" to="/codeBreak"> Code Break  </NavLink>
    </nav>  
  </div>)
}

export default NavBar;
