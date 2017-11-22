import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DateOutOfRange extends Component {
    render() {
        
        const {styles, textStyle, day} = this.props;

        return (
            <View style={styles.dayWrapper}>
              <Text style={[textStyle, styles.disabledText]}>
                { day }
              </Text>
            </View>
         );
    }
}