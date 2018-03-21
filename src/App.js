import React, { Component } from 'react';
import './styles/App.css'
import Header from './components/Header';
import Search from './containers/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Search />
        </main>
      </div>
    )
  }
}

export default App;
