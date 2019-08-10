import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
    loading: true,
    error: false
  };

  componentDidMount() {
    this.handleRepositoryUpdate();
  }

  getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      const parsedData = JSON.parse(data);
      if(data) return { data: parsedData };
    } catch(error) {
      return { error };
    }
  }
  
  storeData = async (key, data) => {
    try {
      const stringfiedData = JSON.stringify(data);
      await AsyncStorage.setItem(key, stringfiedData);
    } catch (error) {
      return { error };
    }
  }

  goToRepositoryDetails = () => {
    const { navigation } = this.props;
    navigation.navigate('RepositoryDetails');
  };

  handleRepositoryFinderText = text => {
    this.setState({repositoryFinderText: text});
  }

  repeatedRepository = (repository) => {
    const { repositories } = this.state;
    for (let i = 0; i < repositories.length; i++) {
      const temporaryRepository = repositories[i];
      if (temporaryRepository.id === repository.id) return true;
    }
    return false;
  }

  handleRepositoryUpdate = () => {
    this.setState({ loading: true }, () => {
      this.getData(Constants.asyncStorage.REPOSITORIES).then((result) => {
        const newState = { loading: false };
        if(result){
          if (result.error) newState.error = result.error;
          else newState.repositories = result.data;
        }
        
        this.setState(newState);
      });
    });
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
          if (!this.repeatedRepository(repository)) repositories.push(repository);

          this.setState({ repositories, loading: false, repositoryFinderText: '' }, () => {
            this.storeData(Constants.asyncStorage.REPOSITORIES, repositories).then(() => {}, error => {
              this.setState({ error });
            });
          });
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

          <ListDefault 
            dataList={this.handleRepositoryList()}
            updateList={this.handleRepositoryUpdate}
            loading={loading}
          />
        </ScrollView>
      </View>
    );
  }
}
