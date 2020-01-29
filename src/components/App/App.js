import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';

import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      "local": local,
      "entertainment": entertainment,
      "technology": technology,
      "science": science,
      "health": health
    }
  }
     
  render () {
    return (
      <div className="app">
      <h1>Header</h1>
        <NewsContainer data={this.state['science']} />
      </div>
    );
  }
}

export default App;
