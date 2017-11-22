import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({ styles, textStyles, label, onPressControl }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
    >
      <Text style={[styles, textStyles]}>
        { label }
      </Text>
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.shape({}).isRequired,
  label: PropTypes.element.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
