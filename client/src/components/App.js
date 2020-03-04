import React from 'react';
import './App.css';
import Footer from './footer';

class App extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="App">
        Testing the routes
        <h1>Budget Tracker</h1>
        {children}
        <Footer />
      </div>
    );
  }
}

export default App;
