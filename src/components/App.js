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
      temp: '0'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    if (e.target.id === 'clear') {
      this.setState({
        formula: '0',
        check: [],
        display: '0',
        temp: '0'
      })
    } 
        
    else if (e.target.id === 'zero') {
      if (this.state.display === '0') {
        this.setState({
          formula: '0',
          display: '0',
          temp: '0'
        })
      } else {
        this.setState({
          formula: this.state.formula + '0',
          display: this.state.display + '0',
          temp: this.state.display + '0'
        })
      }
    } 

    else if (e.target.id === 'equals') {
      if (this.state.check.length !== 0) {
        try {
          // eslint-disable-next-line
          let output = eval(this.state.check.join(''))
          output = Math.round(output*10000)/10000
          this.setState({
            formula: this.state.check.join(''),
            check: [output],
            display: output.toString(),
            temp: output.toString()
          })
          // console.log(this.state.check.join(''))
        }catch(e) {
          // console.log(e)
          this.setState({
            formula: 'ERROR',
            display: 'ERROR'
          })
        }
      }
    }

    else if (e.target.id === 'decimal') {
      const match = this.state.display.match(/[\d.]+$/)
      if (match && match[0].includes('.')) {
        return
      } else {
        this.setState({
          formula: this.state.formula + '.',
          display: this.state.display + '.',
          check: [this.state.display, '.'],
          temp: this.state.display + '.',
        })
      }
    }

    else if (e.target.id === 'add' || e.target.id === 'subtract' || e.target.id === 'multiply' || e.target.id === 'divide') {
      this.setState({
        formula: e.target.textContent,
        check: [...this.state.check, e.target.textContent],
        display: (this.state.display + e.target.textContent).replace(/^0+(?=\d)/,'')
      }, () => {
          const regExp = this.state.check.join('').match(/[+\-*/]+/gi)[0]
          const regExpLen = regExp.length;
          // console.log(/-/.test(regExp));
          // console.log(regExp);
          if (regExpLen > 1) {
            if (/[-+/*]+(?=[+*/])/.test(regExp)) {
              this.setState({
                check: [this.state.temp, this.state.formula]
              },() => {
                console.log('other')
                console.log(this.state.check);
              })
            }
          }
      })
    }

    else {
      this.setState({
        formula: e.target.textContent,
        check: [...this.state.check, e.target.textContent],
        display: (this.state.display + e.target.textContent).replace(/^0+(?=\d)/,''),
        temp: (this.state.display + e.target.textContent).replace(/^0+(?=\d)/,'')
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
