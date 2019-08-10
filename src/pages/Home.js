import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Constants from '../constants/Constants';
import NavigationHeader from '../components/NavigationHeader';
import RepositoryFinder from '../components/RepositoryFinder';
import ListDefault from '../components/ListDefault';
import Utils from '../utils/Utils';
import GenerateBeans from '../utils/GenerateBeans';
import MessageBox from '../components/MessageBox';
import Spinner from '../components/Spinner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.SUPER_LIGHT_GRAY,
    padding: 20
  },
});

export default class Home extends Component {
  static navigationOptions = () => ({
    header: <NavigationHeader title='GitIssues' />
  });

  state = {
    repositoryFinderText: '',
    repositories: [],
    loading: false,
    error: false
  };

  goToRepositoryDetails = () => {
    const { navigation } = this.props;
    navigation.navigate('RepositoryDetails');
  };

  handleRepositoryFinderText = text => {
    this.setState({repositoryFinderText: text});
  }

  handleFindRepository = () => {
    const { repositoryFinderText, repositories } = this.state;

    const repositoryTextValidation = this.validateRepositoryFinderText();
    
    if (!repositoryTextValidation.errorMessage) {
      this.setState({ loading: true, error: false });
      const mountedURL = `${Constants.api.GET_REPOSITORY}${repositoryFinderText}`;
  
      const callback = (result) => {
        if (!result.error) {
          
          const repository = GenerateBeans.repositoryItem(result.data);
          repositories.push(repository);
          this.setState({ repositories, loading: false, repositoryFinderText: '' });
        } else {
          this.setState({ error: result.error, loading: false });
        }
      };
  
      Utils.fetchData(mountedURL, callback);
    } else {
      this.setState({ error: repositoryTextValidation.errorMessage });
    }
  }

  validateRepositoryFinderText = () => {
    const { repositoryFinderText } = this.state;

    if(repositoryFinderText.split('/').length !== 2) {
      return {
         errorMessage: 
         'O campo deve ser preenchido no seguinte formato: \norganização/repositório (Exemplo: “rocketseat/comunidade”)' 
        };
    }
    return true;
  }

  handleRepositoryList() {
    const { repositories } = this.state;
    const { navigation } = this.props;
    return repositories.map((item) => ({
      primaryTitle: item.repositoryName,
      secondaryTitle: item.organizationName,
      icon: item.avatar,
      onPress: () => {
          navigation.navigate('RepositoryDetails', {
          repositoryName: item.repositoryName,
          repositoryFullName: `${item.organizationName}/${item.repositoryName}`
        });
      }
    }));
  }

  render() {
    const { loading, error, repositoryFinderText } = this.state;

    if ( loading ) return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );

    return (
      <View style={styles.container}>
        <ScrollView>
          <RepositoryFinder
            value={repositoryFinderText}
            onChangeText={this.handleRepositoryFinderText}
            onPress={this.handleFindRepository}
            placeholderText='Adicionar novo repositório'
          />
          { error ?
              <MessageBox
                text={error}
                isMsgError
              /> : 
            null 
          }

          <ListDefault dataList={this.handleRepositoryList()} />
        </ScrollView>
      </View>
    );
  }
}
