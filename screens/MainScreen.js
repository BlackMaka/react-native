import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//const {Navigator, Screen} = createBottomTabNavigator();
const {Navigator, Screen} = createMaterialTopTabNavigator();
function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1열기"
        onPress={() =>
          navigation.push('Detail', {
            id: 1,
          })
        }
      />
    </View>
  );
}
function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}
function NotifiCationScreen() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}
function MessageScreen() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}

export default function MainScreen() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        //tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#009688',
        },
        tabBarActiveTintColor: '#009688',
      }}>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
        }}
      />
      <Screen
        name="Notification"
        component={NotifiCationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
        }}
      />
      <Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
        }}
      />
    </Navigator>
  );
}
