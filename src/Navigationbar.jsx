import React from "react"
import { NavLink } from "react-router-dom";
function Navigationbar()
{
    return(
        <>
 <img src="https://www.littoo.in/images/logo.png" height="100" width="200"></img><br/>
   <nav className="navbar navbar-expand-sm navbar-dark">

   <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/ourstory">Our Story</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/menu">Menu</NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="nav-link text-danger" to="/offers">Offers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/newaarivals">New Arrivals</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/partyorders">Party Orders</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/franchise">Franchise</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-danger" to="/contactus">Contact Us</NavLink>
          </li>
          
        </ul>
   </nav>
   <br/>
        </>
    )
}
export default Navigationbar;