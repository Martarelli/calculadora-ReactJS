import './App.css';

import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      n1: 0,
      n2: 0,
      operation: false,
      operationType: ""
    }
  }

  gettingData = (e) => {   
    if (!this.state.operation) {
      if (this.state.n1 === 0 ) {
        this.setState({
          n1: e.target.value,
          display: this.state.n1
        });
      } else {
        this.setState({
          n1: this.state.n1 + e.target.value,
          display: this.state.n1
         });
      } 
    } else {
      if (this.state.n2 === 0 ) {
        this.setState({
          n2: e.target.value,
          display: this.state.n2
        });
      } else {
        this.setState({
          n2: this.state.n2 + e.target.value,
          display: this.state.n2
        });
      } 
    }

  }

  action = (e) => {
    if (e.target.value === "x") {
        this.setState({
        operation: true,
        operationType: e.target.value,
        });
    } else if (e.target.value === "/") {
      this.setState({
        operation: true,
        operationType: e.target.value,
        });
    } else if (e.target.value === "-") {
      this.setState({
        operation: true,
        operationType: e.target.value,
        });
    } else if (e.target.value === "+") {
      this.setState({
        operation: true,
        operationType: e.target.value,
        });
    } else if (e.target.value === "+/-") {
      if (!this.state.operation){
        this.setState({
          n1: this.state.n1 * (-1)
          });
      } else {
        this.setState({
          n2: this.state.n2 * (-1)
          });
      }
    }
  }


  clear = () => {
    this.setState({
      n1: 0,
      n2: 0,
      operation: false,
      operationType: ""
    });
  }

  submitCalc = (e) => {
    if (e.target.value === "%"){
      let result = parseFloat(this.state.n1) * (parseFloat(this.state.n2) / 100)
      this.setState({
        operation: false,
        n1: result,
        n2: 0
      });
    } else {
      if (this.state.operationType === "x") {
        this.setState({
          operation: false,
          n1: parseFloat(this.state.n1)  * parseFloat(this.state.n2),
          n2: 0
        });
      } else if (this.state.operationType === "/") {
        this.setState({
          operation: false,
          n1: parseFloat(this.state.n1) / parseFloat(this.state.n2),
          n2: 0
        });
      } else if (this.state.operationType === "-") {
      this.setState({
        operation: false,
        n1: parseFloat(this.state.n1) - parseFloat(this.state.n2),
        n2: 0
        });
      } else if (this.state.operationType === "+") {
      this.setState({
        operation: false,
        n1: parseFloat(this.state.n1) + parseFloat(this.state.n2),
        n2: 0
        });
      }
    }
  }

  render() {
    return (
      <div className = 'app'>
        <div className ='row-display'>
          <div className='display'>{this.state.operation ? parseFloat(this.state.n2) : parseFloat(this.state.n1)}</div>
        </div>
        <div className ='rows'>
          <button className='button button-light' onClick={this.clear}>AC</button>
          <button className='button button-light' onClick={this.action} value={"+/-"}>+/-</button>
          <button className='button button-light' onClick={this.submitCalc} value={"%"}>%</button>
          <button className='button button-operation' onClick={this.action} value={"/"}>/</button>
        </div>
        <div className ='rows'>
          <button className='button' onClick={this.gettingData} value={7}>7</button>
          <button className='button' onClick={this.gettingData} value={8}>8</button>
          <button className='button' onClick={this.gettingData} value={9}>9</button>
          <button className='button button-operation' onClick={this.action} value={"x"}>X</button>
        </div>
        <div className ='rows'>
          <button className='button' onClick={this.gettingData} value={4}>4</button>
          <button className='button' onClick={this.gettingData} value={5}>5</button>
          <button className='button' onClick={this.gettingData} value={6}>6</button>
          <button className='button button-operation' onClick={this.action} value={"-"}>-</button>
        </div>
        <div className ='rows'>
          <button className='button' onClick={this.gettingData} value={1}>1</button>
          <button className='button' onClick={this.gettingData} value={2}>2</button>
          <button className='button' onClick={this.gettingData} value={3}>3</button>
          <button className='button button-operation' onClick={this.action} value={"+"}>+</button>
        </div>
        <div className ='rows'>
          <button className='button button-large' onClick={this.gettingData} value={0}>0</button>
          <button className='button' onClick={this.gettingData} value={"."}>,</button>
          <button className='button button-operation' onClick={this.submitCalc}>=</button>
        </div>
      </div>
  
    );
  }
}

export default App;
