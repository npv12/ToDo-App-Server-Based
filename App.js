import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './ToDoApp/Screens/IndexScreen';
import { Provider } from './ToDoApp/Context/BlogContext';
import { View,Text } from 'react-native';
import ShowScreen from './ToDoApp/Screens/ShowScreen';
import CreateScreen from './ToDoApp/Screens/CreateScreen';
import EditScreen from './ToDoApp/Screens/EditScreen';

const navigator = createStackNavigator({
  Index : IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit: EditScreen
},
{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:"Blog",
  },
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
    
);}