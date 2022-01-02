import React, { Component } from 'react'
import Buttons from './Buttons';
import Display from './Display';
import Footer from './Footer';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display />
          <Buttons />
        </div>
        <Footer />
      </div>
    )
  }
}
