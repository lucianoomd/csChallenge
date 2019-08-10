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
    zIndex: -1
  },
};

const customText = ({ text, fontSize, color, fontWeight, textAlign, numberOfLines }) => {
  const textStyle = { ...styles.defaultTextStyle };
  if (fontSize) textStyle.fontSize = fontSize;
  if (color) textStyle.color = color;
  if (fontWeight) textStyle.fontWeight = fontWeight;
  if (textAlign) textStyle.textAlign = textAlign;

  return (
    <Text 
      style={textStyle} 
      numberOfLines={numberOfLines ? numberOfLines : 0}>
        {text}
    </Text>
  );
};

customText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.string,
  numberOfLines: PropTypes.number
};

customText.defaultProps = {
  fontSize: 0,
  color: '',
  fontWeight: '',
  textAlign: '',
  numberOfLines: 0
};


export default customText;
