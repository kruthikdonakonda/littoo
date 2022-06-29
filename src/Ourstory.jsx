import React from "react"
import Carousel from "./Carousel";
import Navigationbar from "./Navigationbar";
import Same from "./Same";
function Ourstory()
{
    return(
        <>
        <Navigationbar/>
        <Carousel/>
 <div>
<div className="card-deck">
    <div className="card">
        <div className="card-body">
            <img src="https://www.littoo.in/images/about2.jpg" height="500" width="500"></img>
        </div>
    </div>
    <div className="card">
        <div className="card-body text-center">
          <h1>Our Story</h1>
          <p>Welcome to Littoo</p>
          <p>Littoo was conceived out of a desire to bring the taste of North India back to those who are away from their home in the North. We wanted to bring those simple delights that only the home cooked food can provide. We wanted to spread the goodness of "Ghar ka khana" that nourished our childhood. We wanted to share our memories of growing years with everyone through our food. And thus Littoo was born on January 26, 2017. The name Littoo is derived from the word Litti which is a Bihari delicacy eaten with gud (jaggery), chokha or chutney. It is relished by all. Littoo is the manifestation of our long cherished dream. With Littoo we brought Litti chokha, Lucknow Kachori, Besan Fish, Thanda Masala, Tehri, Nimona, Puri, Bafauri, Chewoonwa Fara and other authentic dishes to Mumbai. We made them all and we made it exactly the way we remember them.</p>
        </div>
    </div>
</div>
</div>
<Same/>
<br/>
        </>
    )
}
export default Ourstory;