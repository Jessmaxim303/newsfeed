import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';

import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

const dataTypes = {
  'local': local,
  'entertainment': entertainment,
  'technology': technology,
  'science': science,
  'health': health
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: local
    }
  }

  filterNewsType = (e) => {
    this.setState({ type: dataTypes[e.target.id]})
  }
     
  render () {
    return (
      <div className="app">
        < Menu filterNewsType={this.filterNewsType} filterNewsSearch={this.filterNewsSearch} />
        < SearchForm />
        < NewsContainer data={this.state.type} />
      </div>
    );
  }
}

export default App;
