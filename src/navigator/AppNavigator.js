import Home from '../pages/Home';
import RepositoryDetails from '../pages/ReposotoryDetails';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const appNavigator = createStackNavigator({
    Home: Home,
    RepositoryDetails: RepositoryDetails
},
{
    initialRouteName: "Home"
});
  
export default createAppContainer(appNavigator);
