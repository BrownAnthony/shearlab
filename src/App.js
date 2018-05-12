import React, { Component } from 'react';
import { Head } from './Navigation';
import { Foot } from './Foot';
import  SwitchBoard  from './SwitchBoard'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


  class App extends Component {

      render() {
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
    }

export default App;
