/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
const App = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    const nameMap = {
      Home: '홈',
      Search: '검색',
      Notification: '알림',
      Message: '메시지',
    };
    return nameMap[routeName];
  }
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Main"
          component={MainScreen}
          options={({route}) => ({title: getHeaderTitle(route)})}
        />
        <Screen name="Detail" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
