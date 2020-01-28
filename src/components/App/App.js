import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';

// import NewsContainer from './components/NewsContainer/NewsContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

// newsfeed = () => {
//   this.state.map(item => {
//     return < NewsContainer headline={item.headline}/>
//   }) 
// }
     
  render () {
    console.log(this.state)
    // console.log(this.state)
    return (
      <div className="app">
      <h1>Header</h1>
      <ul>{local.map(item => {
    return < NewsContainer img={item.img} headline={item.headline}/>
  })}</ul>
      </div>
    );
  }
}

export default App;
