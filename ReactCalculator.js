import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Style from './src/Style';
import InputButton from './src/InputButton';
const inputButtons = [
    ['AC', '+/-', '%', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1,2,3, '+'],
    [0, '.' , '=']
];
export default class ReactCalculator extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
            previousInputValue: 0,
            inputValue: 0,
            displayString:0,
            selectedSymbol: null
      }
    }
 render() {
		return (
				<View style={Style.rootContainer}>
							<View style={Style.displayContainer}>
                                                                                            <Text style={Style.displayText}>{this.state.displayString}</Text>
                                                                                    </View>
							<View style={Style.inputContainer}>
								{this._renderInputButtons()}
							</View>
				</View>
		)}

_renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input} key={r + "-" + i} 
                    
                    onPress={this._onOutputButtonPressed.bind(this,input)}
                    key={r + "-" + i}
                    />
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;
    }
    _onOutputButtonPressed(input) {
      switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)
        }
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0,
                    displayString: str
                });
                break;
            case '+/-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: -this.state.inputValue,
                    inputValue:  -this.state.inputValue,
                    displayString: -this.state.inputValue 
                });
                break;
            case '%':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: (this.state.inputValue/100),
                    inputValue:  (this.state.inputValue/100),
                    displayString: (this.state.inputValue/100),
                });
                break;
            case 'AC':
                this.setState({
                    selectedSymbol: null,
                    previousInputValue: 0,
                    inputValue: 0,
                    displayString: 0
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null,
                    displayString: eval(previousInputValue + symbol + inputValue)
                });
                break;
        }
    }
    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue,
            displayString: inputValue
        })
    }
}

