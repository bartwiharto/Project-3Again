import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Directory from './directory/Directory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Directory />
        <Footer />
      </div>
    );
  }
}

export default App;
