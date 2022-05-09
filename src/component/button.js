import React from "react"
import Draggable from "react-draggable"

class Button extends React.Component{
    render(){
        return(
            <Draggable>
                <div>
                    <div className="container">
                        <div className="display">
                            <input id="top-display" type="text" placeholder="0" value={this.props.mathFormula} />
                            <input id="display" type="text" placeholder="0" value={this.props.currentNumb} />
                        </div>
                        <div className="first row">
                            <button id="clear"      onClick={this.props.clearBtn}>AC</button>
                            <button id="backspace"  onClick={this.props.backspace}>←</button>
                            <button id="plusminus"  value="--"  onClick={this.props.negativeBtn}>±</button>
                            <button id="divide"     value="/"   onClick={this.props.operationBtn}>÷</button>
                        </div>
                        <div className="second row">
                            <button id="seven"  value="7"   onClick={this.props.numbBtn}>7</button>
                            <button id="eight"  value="8"   onClick={this.props.numbBtn}>8</button>
                            <button id="nine"   value="9"   onClick={this.props.numbBtn}>9</button>
                            <button id="multiply"   value="x"   onClick={this.props.operationBtn}>x</button>
                        </div>
                        <div className="third row">
                            <button id="four"   value="4"   onClick={this.props.numbBtn}>4</button>
                            <button id="five"   value="5"   onClick={this.props.numbBtn}>5</button>
                            <button id="six"    value="6"   onClick={this.props.numbBtn}>6</button>
                            <button id="subtract"   value="-"   onClick={this.props.operationBtn}>-</button>
                        </div>
                        <div className="fourth row">
                            <button id="three"  value="3"   onClick={this.props.numbBtn}>3</button>
                            <button id="two"    value="2"   onClick={this.props.numbBtn}>2</button>
                            <button id="one"    value="1"   onClick={this.props.numbBtn}>1</button>
                            <button id="add"        value="+"   onClick={this.props.operationBtn}>+</button>
                        </div>
                        <div className="last row">
                            <button id="zero"   value="0"   onClick={this.props.numbBtn}>0</button>
                            <button id="decimal"    value="."   onClick={this.props.decimalBtn}>.</button>
                            <button id="equals"      value="="   onClick={this.props.equalBtn}>=</button>
                        </div>
                    </div>
                    <p>Created By : Annisa Nurul S</p>
                </div>
            </Draggable>
        )
    }
}

export default Button