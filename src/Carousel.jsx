      import React from "react"
      function Carousel()
      {
        return(
          <>
          <div id="demo" className="carousel slide" data-ride="carousel">

  
<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
  <li data-target="#demo" data-slide-to="3"></li>
  
</ul>
<div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://www.littoo.in/images/banner-3.jpg" alt="Kruthik Reddy"height="600" width="100%"></img>
    </div>
    <div className="carousel-item">
        <img src="https://www.littoo.in/images/banner-2.jpg" alt="Kiran Reddy" height="600" width="100%"></img>
    </div>
    <div className="carousel-item">
        <img src="https://www.littoo.in/images/banner-4.jpg" alt="Dusseh" height="600" width="100%"></img>
    </div>
    <div className="carousel-item">
        <img src="https://www.littoo.in/images/banner-1.jpg" alt="Dussehra" height="600" width="100%"></img>
      </div>
</div>


<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>
          </>
        )
      }
      export default Carousel;