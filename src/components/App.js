import React, { Component } from 'react'
import Buttons from './Buttons';
import Display from './Display';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Display />
        <Buttons />
        <Footer />
      </div>
    )
  }
}
