import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from './Navigation';
import { Foot } from './Foot';
import SwitchBoard from './SwitchBoard';


function App() {
  return (
    <Router>
      <div>
        <Head />
        <SwitchBoard />
        <Foot />
      </div>
    </Router>
  );
}

export default App;
