import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Constants from '../constants/Constants';
import NavigationHeader from '../components/NavigationHeader';
import RepositoryFinder from '../components/RepositoryFinder';
import ListDefault from '../components/ListDefault';


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
    repositories: [
      {
        id: 111,
        organizationName: 'RocketSeat',
        repositoryName: 'rocketNative',
        avatar: ''
      },
      {
        id: 222,
        organizationName: 'React Community',
        repositoryName: 'react-navigation',
        avatar: ''
      }
    ], 
    loading: false
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

  handleRepositoryList() {
    const { repositories } = this.state;
    return repositories.map((item) => ({
      primaryTitle: item.repositoryName,
      secondaryTitle: item.organizationName,
      icon: item.avatar,
      onPress: () => {}
    }));
  }

  render() {
    const { repositories, repositoryFinderText } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <RepositoryFinder
            value={repositoryFinderText}
            onChangeText={this.handleRepositoryFinderText}
            onPress={this.handleFindRepository}
            placeholderText='Adicionar novo repositório'
          />
          <ListDefault dataList={this.handleRepositoryList()} />
        </ScrollView>
      </View>
    );
  }
}
