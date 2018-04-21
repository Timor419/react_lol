import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paginations from "./paginations";
import List from "./hero/list";


class App extends Component {
  render() {
    return (
      <div className="App">
          <List/>
          <Paginations/>
      </div>
    );
  }
}

export default App;
