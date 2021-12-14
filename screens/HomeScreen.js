import React, {useEffect} from 'react';
import {Button, View} from 'react-native';

export default function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);
  return (
    <View>
      <Button
        title="Detail 1열기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="Detail 2열기"
        onPress={() => navigation.navigate('Detail', {id: 2})}
      />
      <Button
        title="Detail 3열기"
        onPress={() => navigation.navigate('Detail', {id: 3})}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}
