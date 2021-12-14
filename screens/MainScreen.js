import React, {useCallback, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

//const {Navigator, Screen} = createBottomTabNavigator();
const {Navigator, Screen} = createMaterialBottomTabNavigator();

function OpenDetailButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Detail 1열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
}
function HomeScreen({navigation}) {
  useFocusEffect(
    useCallback(() => {
      console.log('홈보고있졍');
      return () => {
        console.log('다른화면');
      };
    }, []),
  );

  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
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
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarColor: 'black',
          tabBarBadge: 'New',
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
          tabBarColor: 'orange',
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
          tabBarColor: 'pink',
          tabBarBadge: 30,
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
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Navigator>
  );
}
