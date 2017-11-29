import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import DateOutOfRange from './DateOutOfRange.js';

export default function Day(props) {
  const {
    day,
    month,
    year,
    styles,
    onPressDay,
    selectedStartDate,
    selectedEndDate,
    allowRangeSelection,
    textStyle,
    minDate,
    maxDate,
  } = props;

  const thisDay = new Date(year, month, day);
  const today = new Date();
  today.setHours(0,0,0,0);

  let dateOutOfRange = false;
  let daySelectedStyle = {};
  let selectedDayColorStyle = {};
  let dateType;
  let dayLabel = styles.dayLabel;
  let isStartEndRange = false;
  let isRange = false;
  let dayWrapperRangeX = {};

  // First let's check if date is out of range
  if (minDate) {
    if (thisDay < minDate) {
      dateOutOfRange = true;
    }
  }

  if (maxDate) {
    if (thisDay > maxDate) {
      dateOutOfRange = true;
    }
  }

  // If date is not out of range let's apply styles
  if (!dateOutOfRange) {
    // set today's style
    if (Utils.compareDates(thisDay,today)) {
      daySelectedStyle = styles.selectedToday;
      selectedDayColorStyle = styles.selectedDayLabel;
    }

    // set selected day style
    if (!allowRangeSelection &&
        selectedStartDate &&
        Utils.compareDates(thisDay,selectedStartDate)) {
      daySelectedStyle = styles.selectedDay;
      selectedDayColorStyle = styles.selectedDayLabel;
    }

    // Set selected ranges styles
    if (allowRangeSelection) {
      if (selectedStartDate && selectedEndDate) {
        // Apply style for start date
        if (Utils.compareDates(thisDay,selectedStartDate)) {
          isStartEndRange = true;
          daySelectedStyle = styles.startDayWrapper;
          selectedDayColorStyle = styles.selectedDayLabel;
          rangeStyle = styles.inRangeDayStartEnd;
          dayWrapperRangeX = styles.dayWrapperRangeL;
        }
        // Apply style for end date
        if (Utils.compareDates(thisDay,selectedEndDate)) {
          isStartEndRange = true;
          daySelectedStyle = styles.endDayWrapper;
          selectedDayColorStyle = styles.selectedDayLabel;
          rangeStyle = styles.inRangeDayStartEnd;
          dayWrapperRangeX = styles.dayWrapperRangeR;
        }
        // Apply style if start date is the same as end date
        if (Utils.compareDates(thisDay, selectedEndDate) &&
            Utils.compareDates(thisDay, selectedStartDate) &&
            Utils.compareDates(selectedEndDate,selectedStartDate)) {
            daySelectedStyle = styles.selectedDay;
            selectedDayColorStyle = styles.selectedDayLabel;
            isStartEndRange = false;    
        }
        // Apply style if this day is in range
        if (Utils.isDateInRange(thisDay, selectedStartDate, selectedEndDate)) {
          daySelectedStyle = styles.inRangeDay;
          dayLabel = styles.dayLabelRange;
          rangeStyle = styles.inRangeDay;
          isRange = true;
          selectedDayColorStyle = styles.selectedDayLabelRange;
        }
      }
      // Apply style if start date has been selected but end date has not
      if (selectedStartDate &&
          !selectedEndDate &&
          Utils.compareDates(thisDay, selectedStartDate)) {
          daySelectedStyle = styles.selectedDay;
          selectedDayColorStyle = styles.selectedDayLabel;
      }
    }
  }

  if (dateOutOfRange) {
    return (
      <DateOutOfRange styles={styles} textStyle={textStyle} day={day}/>
    )
  }

  if (isStartEndRange) {
    return (
      <View style={[styles.dayWrapperRange]}>
        <View style={[dayWrapperRangeX]}></View>
        <TouchableOpacity
            style={[styles.dayButton, daySelectedStyle, {position: 'absolute', zIndex: 100, marginTop: 3}]}
            onPress={() => onPressDay(day) }>
            <Text style={[dayLabel, textStyle, selectedDayColorStyle]}>
              { day }
            </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isRange) {
    return (
      <View style={[styles.dayWrapperRange]}>
          <TouchableOpacity
            style={[styles.dayButton, daySelectedStyle, {position: 'absolute', zIndex: 100}]}
            onPress={() => onPressDay(day) }>
            <Text style={[dayLabel, textStyle, selectedDayColorStyle]}>
              { day }
            </Text>
          </TouchableOpacity>
      </View>
    );
  }


  return (
    <View style={styles.dayWrapper}>
      <TouchableOpacity
        style={[styles.dayButton, daySelectedStyle]}
        onPress={() => onPressDay(day) }>
        <Text style={[dayLabel, textStyle, selectedDayColorStyle]}>
          { day }
        </Text>
      </TouchableOpacity>
    </View>
  );
}

Day.propTypes = {
  styles: PropTypes.shape({}),
  day: PropTypes.number,
  onPressDay: PropTypes.func,
}
