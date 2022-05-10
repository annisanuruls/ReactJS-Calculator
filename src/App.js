import React from 'react';
import Button from './component/button';
import './App.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          currentNumb: '',
          history: '',
          operation: '',
          mathFormula: ''
      };
      this.numbersHandle = this.numbersHandle.bind(this);
      this.operationHandle = this.operationHandle.bind(this);
      this.mathAnswer = this.mathAnswer.bind(this);
      this.clearCalc = this.clearCalc.bind(this);
      this.backspace = this.backspace.bind(this);
      this.decimal = this.decimal.bind(this);
      this.negative = this.negative.bind(this);
  }
  
  numbersHandle(e){
      let value = e.target.value
      
      if(this.state.currentNumb === '0'){
          this.setState({
              currentNumb: value,
              history: value
          })
      }

      else if(this.state.mathFormula.includes('=')){
          this.setState({
              currentNumb: value,
              history: value
          })
      }

      else{
          this.setState({
              currentNumb: this.state.currentNumb.concat(value),
              history: this.state.currentNumb.concat(value)
          })
      }
  };

  decimal(e){
      let decimalValue = e.target.value;

      if(this.state.currentNumb !== '' && !this.state.currentNumb.includes('.')){
          this.setState({
              currentNumb: this.state.currentNumb + decimalValue,
              history: this.state.currentNumb + decimalValue
          })
      }
      else if(this.state.currentNumb === '' && !this.state.currentNumb.includes('.')){
          this.setState({
              currentNumb: '0' + decimalValue,
              history: '0' + decimalValue
          })
      }
  }

  negative(e){
      let negativeValue = e.target.value;
      negativeValue = negativeValue.replace('--', '-');

      if(!this.state.currentNumb.includes('-')){
          this.setState({
              currentNumb: negativeValue + this.state.currentNumb,
              history: negativeValue + this.state.currentNumb
          })
      }
      else{
          this.setState({
              currentNumb: this.state.currentNumb.replace('-', ''),
              history: this.state.currentNumb.replace('-', '')
          })
      }

      if(this.state.currentNumb === '0'){
        this.setState({
            currentNumb: this.state.currentNumb.replace('0', '-'),
            history: this.state.currentNumb.replace('0', '-')
        })
      }
  }

  operationHandle(e){
      let value = e.target.value;

      if(this.state.mathFormula === '' && this.state.currentNumb === '' && value !== ''){
          value = ''
      }

      this.setState({
          operation: value,
          mathFormula: this.state.history + value,
          currentNumb: ''
      })

      if(this.state.mathFormula !== '' && this.state.currentNumb === '' && value !== ''){
          value = ''
          this.setState({history: ''})
      }

      if(this.state.mathFormula !== '' && this.state.operation !== ''){
          this.setState({
              mathFormula: this.state.mathFormula + this.state.currentNumb + value
          })
      }

      if(this.state.mathFormula.includes('=')){
          this.setState({
              mathFormula: this.state.currentNumb + value
          })
      }
  }
  
  mathAnswer(e){
      let formula = this.state.mathFormula;
      let formulaSetting = formula.replace('x', '*');
      if(this.state.currentNumb === ''){
          formulaSetting = formulaSetting + 0
      }
      else{
          formulaSetting = formulaSetting + this.state.history
          console.log(formulaSetting)
      }
      let equal = e.target.value;
      if(equal === '='){
          let answer = Math.round(eval(formulaSetting) * 10000000000) / 10000000000;
          this.setState({
              currentNumb: answer.toString(),
              mathFormula: formulaSetting.replace('*', 'x') + '=' + answer.toString()
          })
      }
  }

  clearCalc(){
      this.setState({
          currentNumb: '0',
          history: '',
          operation: '',
          mathFormula: ''
      })
  }

  backspace(){
      this.setState({
          currentNumb: this.state.currentNumb.slice(0, this.state.currentNumb.length - 1),
          history: this.state.history.slice(0, this.state.history.length - 1)
      })
  }

  render(){
      return(
          <Button 
          numbBtn={this.numbersHandle}
          decimalBtn={this.decimal}
          negativeBtn={this.negative}
          operationBtn={this.operationHandle}
          clearBtn={this.clearCalc}
          currentNumb={this.state.currentNumb}
          history={this.state.history}
          mathFormula={this.state.mathFormula}
          equalBtn={this.mathAnswer}
          backspace={this.backspace}
          />
      )
  }
}

export default App;
