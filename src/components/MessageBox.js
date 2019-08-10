import React from 'react';
import { View } from 'react-native';
import CustomText from './CustomText';
import Constants from '../constants/Constants';

const styles = {
  container: {
    backgroundColor: Constants.colors.WHITE,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16
  },
  containerError: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: Constants.colors.RED
  }
};

const messageBox = ({ text, isMsgError = false }) => (
  <View style={isMsgError ? styles.containerError : styles.container}>
    <CustomText 
      text={text} 
      color={isMsgError ? Constants.colors.WHITE : ''} 
      textAlign='center'
    />
  </View>
);

export default messageBox;
