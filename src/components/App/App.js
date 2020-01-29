import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }
     
  render () {
    return (
      <div className="app">
      <h1>Header</h1>
        <NewsContainer data={this.state.local} />
      </div>
    );
  }
}

export default App;
