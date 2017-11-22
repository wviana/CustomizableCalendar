/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
const DEFAULT_SELECTED_BACKGROUND_COLOR = '#5ce600';
const DEFAULT_SELECTED_TEXT_COLOR = '#000000';
const DEFAULT_TODAY_BACKGROUD_COLOR = '#CCCCCC';

export function makeStyles(scaler, backgroundColor, textColor, todayBackgroundColor, selectRangeColor) {
  const SELECTED_BG_COLOR = backgroundColor ? backgroundColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = textColor ? textColor : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUD_COLOR;
  const SELECTED_BG_RANGE_COLOR = selectRangeColor ? selectRangeColor : DEFAULT_SELECTED_BACKGROUND_COLOR
  const HEIGHT_RANGE = selectRangeColor ? 20 : 30

  return {
    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },

    dayButton: {
      width: 30*scaler,
      height: 40*scaler,
      alignSelf: 'center',
      zIndex: 100
    },

    dayButtonSelected: {
      width: 30*scaler,
      height: 30*scaler,
      borderRadius: 15*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center'
    },

    dayLabel: {
      fontSize: 17*scaler,
      color: '#000',
      marginTop: 5*scaler,
      alignSelf: 'center'
    },

    dayLabelRange: {
      fontSize: 17*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR,
    },

    selectedDayLabelRange: {
      color: DEFAULT_SELECTED_TEXT_COLOR
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      marginBottom: 10*scaler,
      paddingTop: 10*scaler,
      paddingBottom: 10*scaler,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(0,0,0,0.2)'
    },

    daysWrapper: {
      alignSelf: 'center'
    },

    dayLabels: {
      width: 50*scaler,
      fontSize: 17*scaler,
      color: '#000',
      textAlign: 'center'
    },

    selectedDay: {
      width: 35*scaler,
      height:35*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      borderRadius: 30*scaler,
      marginTop: -10*scaler,
      alignSelf: 'center'
    },

    selectedToday: {
      width: 35*scaler,
      height:35*scaler,
      backgroundColor: TODAY_BG_COLOR,
      borderRadius: 30*scaler,
      marginTop: -10*scaler,
      alignSelf: 'center'
    },

    dayWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50*scaler,
      height: 50*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)',
    },

    dayWrapperRange: {
      width: 50*scaler,
      height: 50*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    dayWrapperRangeL: {
      width: 30*scaler,
      height: 25*scaler,
      backgroundColor: SELECTED_BG_RANGE_COLOR,
      alignSelf: 'center',
      marginTop: 8*scaler,
      marginLeft: 20*scaler
    },

    dayWrapperRangeR: {
      width: 30*scaler,
      height: 25*scaler,
      backgroundColor: SELECTED_BG_RANGE_COLOR,
      alignSelf: 'center',
      marginTop: 8*scaler,
      marginRight: 20*scaler
    },

    startDayWrapper: {
      width: 35*scaler,
      height: 35*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      borderRadius: 30*scaler,
      marginTop: -10*scaler,
      alignSelf: 'center'
    },

    endDayWrapper: {
      width: 35*scaler,
      height: 35*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      borderRadius: 30*scaler,
      marginTop: -10*scaler,
      alignSelf: 'center'
    },

    inRangeDay: {
      width: 50*scaler,
      height: 25*scaler,
      backgroundColor: SELECTED_BG_RANGE_COLOR,
      marginTop: 8*scaler,
      alignSelf: 'center'
    },

    monthLabel: {
      fontSize: 17*scaler,
      color: '#000',
      width: 180*scaler,
      textAlign: 'center'
    },

    shortDate: {
      fontSize: 14*scaler,
      color: 'rgba(36, 37, 61, 0.5)',
      width: 180*scaler,
      textAlign: 'center'
    },

    headerWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 10*scaler,
      padding: 5*scaler,
      paddingBottom: 3*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthSelector: {
      width: 80*scaler
    },

    prev: {
      textAlign: 'left',
      fontSize: 30*scaler,
      color: '#219653'
    },

    next: {
      textAlign: 'right',
      fontSize: 30*scaler,
      color: '#219653'
    },

    yearLabel: {
      fontSize: 17*scaler,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledText: {
      fontSize: 17*scaler,
      color: '#BBBBBB',
      marginTop: -10,
      alignSelf: 'center'
    }
  };
}
