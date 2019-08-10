import Home from '../pages/Home';
import RepositoryDetails from '../pages/RepositoryDetails';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const appNavigator = createStackNavigator({
    Home: Home,
    RepositoryDetails: RepositoryDetails
},
{
    initialRouteName: "Home"
});
  
export default createAppContainer(appNavigator);
