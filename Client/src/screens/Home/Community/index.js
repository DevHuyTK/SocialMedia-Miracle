import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Header from '../../../Components/Header';
import Post from '../../../Components/Post';
import { AsyncStorage } from 'react-native';
function Community({ navigation }) {
  const handleClick = async () => {
    const data = await AsyncStorage.getItem('info');
    console.log('avava', data);
  };

  const data = [
    {
      id: '123',
      userName: 'thang',
      avatar: '',
      image: '',
      caption: 'test post',
      likesCount: 11,
      postAgo: '6 minute ago',
    },
    {
      id: '456',
      userName: 'doanh',
      avatar: '',
      image: '',
      caption:
        'test post test post test post test post test post test post test post test post test post',
      likesCount: 11,
      postAgo: '12 minute ago',
    },
    {
      id: '789',
      userName: 'huy',
      avatar: '',
      image: '',
      caption: 'test post',
      likesCount: 11,
      postAgo: '30 minute ago',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header onNavigation={navigation} />
      <SafeAreaView style={{ marginBottom: 90 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post post={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

export default Community;
