import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from './Style';

export default class InputButton extends Component {
    
    render() {
        return (
            <TouchableHighlight style={Style.inputButton}
            	onPress={this.props.onPress}
            	underlayColor="#F2F2F2">
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}