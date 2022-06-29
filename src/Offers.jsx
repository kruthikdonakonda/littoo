import React from "react"
import Discount from "./Discount";
import Navigationbar from "./Navigationbar";
function Offers()
{
    return(
        <>
        
   <Navigationbar/>
   <br/>
   <div id="Littoo" className="carousel slide" data-ride="carousel">
   <ul className="carousel-indicators">
          <li data-target="#Littoo" data-slide-to="0" className="active"></li>
          <li data-target="#Littoo" data-slide-to="1"></li>
          <li data-target="#Littoo" data-slide-to="2"></li>
          <li data-target="#Littoo" data-slide-to="3"></li>
        </ul>
        <div className="carousel-inner">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.littoo.in/images/banner-3.jpg" alt="Kruthik Reddy" height="600" width="100%"></img>
          </div>
          <div className="carousel-item">
            <img src="https://www.littoo.in/images/banner-2.jpg" alt="Kiran Reddy" height="600" width="100%"></img>
          </div>
          <div className="carousel-item">
            <img src="https://www.littoo.in/images/banner-4.jpg" alt="Dussehra" height="600" width="100%"></img>
          </div>
          <div className="carousel-item">
            <img src="https://www.littoo.in/images/banner-1.jpg" alt="Dussehra" height="600" width="100%"></img>
          </div>
        </div>
        </div>
        <a className="carousel-control-prev" href="#Littoo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#Littoo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
        </div>
        <br/>
        <Discount/>
        </>
    )
}
export default Offers;