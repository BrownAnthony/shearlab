import React, { Component } from 'react';
import { Head } from './Navigation';
import { Cards } from './Card';
import { Foot } from './Foot';
import './App.css';





  class App extends Component {

      render() {
        return (
          <container>
            <Head />
            <Cards />
            <Foot />
          </container>
        );
      }
    }

export default App;
