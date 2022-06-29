import React from "react";
import {Route,Switch} from "react-router-dom";
import Littoo from "./Littoo";
import Images from "./Images";
import Ourstory from "./Ourstory";
import Same from "./Same";
import Menu from "./Menu";
import Food from "./Food";
import Offers from "./Offers";
import Discount from "./Discount";
import Gallery from "./Gallery";
import Images2 from "./Images2";
import Newaarivals from "./Newaarivals";
import Newfood from "./Newfood";
import Partyorders from "./Partyorders";
import Form from "./Form";
import Franchise from "./Franchise";
import Yourelf from "./Yourelf";
import Contactus from "./Contactus";
import Number from "./Number";
import Home from "./Home";
import Ourfood from "./Ourfood";
function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/ourstory" component={Ourstory}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/offers" component={Offers}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/newaarivals" component={Newaarivals}/>
          <Route exact path="/partyorders" component={Partyorders}/>
          <Route exact path="/franchise" component={Franchise}/>
          <Route exact path="/contactus" component={Contactus}/>
          <Route component={Home}/>
      </Switch>
    </>
  );
}

export default App;
