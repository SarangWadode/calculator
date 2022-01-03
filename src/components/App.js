import React, { Component } from 'react'
import Buttons from './Buttons';
import Display from './Display';
import Footer from './Footer';
import './app.css';

export default class App extends Component {
  render() {
    const keys = [
      {id : 'clear', number: 'AC'},
      {id : 'divide', number: '/'},
      {id: 'multiply', number: 'x'},
      {id: 'seven', number: '7'},
      {id: 'eight', number: '8'},
      {id: 'nine', number: '9'},
      {id: 'subtract', number: '-'},
      {id: 'four', number: '4'},
      {id: 'five', number: '5'},
      {id: 'six', number: '6'},
      {id: 'add', number: '+'},
      {id: 'one', number: '1'},
      {id: 'two', number: '2'},
      {id: 'three', number: '3'},
      {id: 'zero', number: '0'},
      {id: 'decimal', number: '.'},
      {id: 'equals', number: '='}
    ]
    return (
      <div className="container">
        <div className="calculator">
          <Display />
          <div className="keyboard">
            { keys.map(key => <Buttons id={key.id} number={key.number} />)}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
