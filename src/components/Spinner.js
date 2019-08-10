import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const spinner = ({ size }) => (
  <View style={styles.containerStyle}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

export default spinner;
