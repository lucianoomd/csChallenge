import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Constants from '../constants/Constants';

const styles = {
  defaultTextStyle: {
    color: Constants.colors.BLACK,
    textAlign: 'left',
    fontFamily: 'Geomanist-Book',
    fontWeight: 'normal',
    fontSize: 16,
  },
};

const customText = ({ text, fontSize, color, fontWeight, textAlign }) => {
  const textStyle = { ...styles.defaultTextStyle };
  if (fontSize) textStyle.fontSize = fontSize;
  if (color) textStyle.color = color;
  if (fontWeight) textStyle.fontWeight = fontWeight;
  if (textAlign) textStyle.textAlign = textAlign;

  return <Text style={textStyle}>{text}</Text>;
};

customText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string
};

customText.defaultProps = {
  fontSize: 0,
  color: '',
  fontWeight: '',
  textAlign: ''
};


export default customText;
