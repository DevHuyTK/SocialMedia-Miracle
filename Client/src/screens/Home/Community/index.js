import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../Components/Header';
import { AsyncStorage } from 'react-native';
function Community({ navigation }) {
  const handleClick = async () => {
    const data = await AsyncStorage.getItem('info')
   console.log("avava", data)
  }
  
  return (
    <View style={{ flex: 1 }}>
      <Header onNavigation={navigation} />
      <Text>Community</Text>
      <Text onPress={handleClick}>click</Text>
    </View>
  );
}


export default Community;
