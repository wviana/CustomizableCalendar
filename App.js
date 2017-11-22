import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from './CalendarPicker';
import { MaterialIcons as Icon } from '@expo/vector-icons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const initialDate = new Date();
    const minDate = new Date(1900, 10, 6)
    const maxDate = new Date(3000, 1, 1);
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          initialDate={initialDate}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
          months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
          shortMonths={['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']}
          previousTitle={(<Icon name='keyboard-arrow-left' size={40} />)}
          nextTitle={(<Icon name='keyboard-arrow-right' size={40} />)}
          todayBackgroundColor="#63CD54"
          selectedDayColor="#27AE60"
          selectedDayTextColor="#FFFFFF"
          selectRangeColor="rgba(213, 212, 212, 0.5)"
          scaleFactor={375}
          textWeekdaysStyle={{
            color: '#63CD54'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100
  },
});
