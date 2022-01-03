import React, { Component } from 'react'
import Buttons from './Buttons';
import Display from './Display';
import Footer from './Footer';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formula: '0',
      check: [],
      display: '0',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (e.target.id === 'clear') {
      this.setState({
        formula: '0',
        check: [],
        display: '0'
      })
    } 
        
    else if (e.target.id === 'zero') {
      if (this.state.display === '0') {
        this.setState({
          formula: '0',
          display: '0'
        })
      } else {
        this.setState({
          formula: this.state.formula + '0',
          display: this.state.display + '0'
        })
      }
    } 

    else if (e.target.id === 'equals') {
      if (this.state.check.length !== 0) {
        try {
          const output = eval(this.state.check.join(''))
          this.setState({
            formula: this.state.check.join(''),
            check: [output],
            display: output.toString()
          })
          console.log(this.state.check.join(''))
        }catch(e) {
          console.log(e)
          this.setState({
            formula: 'ERROR',
            display: 'ERROR'
          })
        }
      }
    }
    
    else {
      this.setState({
        formula: e.target.textContent,
        check: [...this.state.check, e.target.textContent],
        display: this.state.display.replace(/0/,'') + e.target.textContent
      })
    }
  }


  render() {
    const keys = [
      {id : 'clear', number: 'AC'},
      {id : 'divide', number: '/'},
      {id: 'multiply', number: '*'},
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
          <Display formula = {this.state.formula} display = {this.state.display} />
          <div className="keyboard">
            { keys.map((key,i) => <Buttons key={i} handleClick = {this.handleClick} id={key.id} number={key.number} />)}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
