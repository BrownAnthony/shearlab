import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutUs } from '../Page/AboutUs';
import { Home } from '../Page/Home';
import { Pricing } from '../Page/Pricing';


function SwitchBoard() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Page/AboutUs" component={AboutUs} />
      <Route exact path="/Page/Pricing" component={Pricing} />
    </Switch>
  );
}

export default SwitchBoard;
