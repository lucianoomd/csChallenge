import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import NavigationHeader from '../components/NavigationHeader';
import Utils from '../utils/Utils';
import Constants from '../constants/Constants';
import GenerateBeans from '../utils/GenerateBeans';
import Spinner from '../components/Spinner';
import ListDefault from '../components/ListDefault';
import FilterHeader from '../components/FilterHeader';
import MessageBox from '../components/MessageBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.SUPER_LIGHT_GRAY,
    padding: 20
  },
});

export default class RepositoryDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: 
      <NavigationHeader
        title={navigation.state.params.repositoryName} 
        handleBackButton={() => navigation.goBack()}
      />
  });

  state = {
    loading: true,
    issues: [],
    selectedFilter: Constants.issueFilters.ALL
  }

  loadIssues = () => {
    const { repositoryFullName } = this.props.navigation.state.params;
    const { selectedFilter } = this.state;

    this.setState({ loading: true, error: false });

    let mountedURL = `${Constants.api.GET_REPOSITORY}${repositoryFullName}`;
    switch (selectedFilter) {
      case Constants.issueFilters.OPEN:
        mountedURL += Constants.api.GET_OPEN_ISSUES;
        break;
      case Constants.issueFilters.CLOSED:
        mountedURL += Constants.api.GET_CLOSED_ISSUES;
        break;
      default:
        mountedURL += Constants.api.GET_ISSUES;
        break;
    }
    
    const callback = (result) => {

      if (!result.error) {
        
        const issues = result.data.map(item => GenerateBeans.issueItem(item));

        this.setState({ issues, loading: false });

      } else {
        this.setState({ error: result.error, loading: false });
      }
    };

    Utils.fetchData(mountedURL, callback);
  }

  componentDidMount() {
    this.loadIssues();
  }

  handleIssuesList = () => {
    const { issues } = this.state;

    return issues.map((item) => ({
      primaryTitle: item.issueTitle,
      secondaryTitle: item.userName,
      icon: item.userAvatar,
      onPress: () => {
          Linking.openURL(item.issueUrl);
      }
    }));
  }

  handleFilterChange = (newFilter) => {
    const { selectedFilter } = this.state;
    if (newFilter !== selectedFilter) {
      this.setState({ selectedFilter: newFilter, issues: [] }, () => {
        this.loadIssues();
      });
    }
  }

  render() {
    const { loading, error, selectedFilter } = this.state;

    return (
      <View style={styles.container}>
        <FilterHeader 
          firstTitle={Constants.issueFilters.ALL}
          firstOnPress={() => this.handleFilterChange(Constants.issueFilters.ALL)}
          secondTitle={Constants.issueFilters.OPEN}
          secondOnPress={() => this.handleFilterChange(Constants.issueFilters.OPEN)}
          thirdTitle={Constants.issueFilters.CLOSED}
          thirdOnPress={() => this.handleFilterChange(Constants.issueFilters.CLOSED)}
          selectedButton={selectedFilter}
          />
          { loading ?
            <View style={styles.container}>
              <Spinner />
            </View> : null
          }
          { error ?
              <MessageBox
                text={error}
                isMsgError
              /> : 
            null 
          }
        <ListDefault dataList={this.handleIssuesList()} />
      </View>
    );
  }
}
