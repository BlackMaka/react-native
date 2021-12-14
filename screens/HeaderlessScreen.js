import React from 'react';
import {Button, Text, View} from 'react-native';

export default function HeaderlessScreen({navigation}) {
  return (
    <View>
      <Text>Header가 없네?</Text>
      <Button onPress={() => navigation.pop()} title="뒤로가기" />
    </View>
  );
}
