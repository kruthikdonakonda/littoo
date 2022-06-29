import React from "react";
import Navigationbar from "./Navigationbar"
import Carousel from "./Carousel";
import Carddeck from "./Carddeck";
import Ourfood from "./Ourfood";
import Aboutus from "./Aboutus";
function Home()
{
    return(
       <>
       <Navigationbar/>
       <Carousel/>
       <Carddeck/>
       <Aboutus/>
        <Ourfood/>
       </>
       
    )
}
export default Home;