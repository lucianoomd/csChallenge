import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CustomText from '../components/CustomText';
import Constants from '../constants/Constants';
import NavigationHeader from '../components/NavigationHeader';
import RepositoryFinder from '../components/RepositoryFinder';
import { FlatList } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.SUPER_LIGHT_GRAY,
    paddingLeft: 20,
    paddingRight: 20
  },
});

export default class Home extends Component {
  static navigationOptions = () => ({
    header: <NavigationHeader title='GitIssues' />
  });

  state = {
    repositoryFinderText: '',
  };

  goToRepositoryDetails = () => {
    const { navigation } = this.props;
    navigation.navigate('RepositoryDetails');
  };

  handleRepositoryFinderText = text => {
    this.setState({repositoryFinderText: text});
  }

  handleFindRepository = () => {
    this.setState({repositoryFinderText: this.state.repositoryFinderText + '1'});
  }

  render() {
    const { repositoryFinderText } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <RepositoryFinder
            value={repositoryFinderText}
            onChangeText={this.handleRepositoryFinderText}
            onPress={this.handleFindRepository}
            placeholderText='Adicionar novo repositório'
          />
          {/* <FlatList 
            data={repositories}
          /> */}
        </ScrollView>
      </View>
    );
  }
}
