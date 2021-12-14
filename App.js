/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Button, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

const App = () => {
  const {Navigator, Screen} = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}
        drawerContent={({navigation}) => (
          <View>
            <Text>A custom Drawer</Text>
            <Button
              title="Drawer 닫기"
              onPress={() => navigation.closeDrawer()}
            />
          </View>
        )}>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Screen
          name="Setting"
          component={SettingScreen}
          options={{title: '설정'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
