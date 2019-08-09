import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class ReposotoryDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'testeee'
  });

  render() {
    return (
      <View style={styles.container}>
        <View />
      </View>
    );
  }
}
