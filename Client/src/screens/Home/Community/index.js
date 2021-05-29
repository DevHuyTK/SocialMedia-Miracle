import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../../Components/Header';

function Community({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header onNavigation={navigation} />
      <Text>Community</Text>
    </View>
  );
}

export default Community;
