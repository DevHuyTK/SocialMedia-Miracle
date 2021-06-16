import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

function Message() {
  const [data, setData] = useState({
    age: 0,
    avatar: '',
    email: '',
    name: '',
    role: '',
    tagname: '',
  });
  useEffect(() => {
    async function fetchData() {
      const data = await AsyncStorage.getItem('info');
      let dataJson = JSON.parse(data);
      return dataJson;
    }
    fetchData()
      .then((data) => setData(data))
      //   .then((data)=> {
      //     if (!data.accessToken) {
      //     Alert.alert('Phien dang nhap het han. Vui long dang nhap lai!!');
      //     navigation.navigate('Login');
      //   }else{
      //     Alert.alert('oki');
      //     console.log("data",data);
      //   }
      // })
      .catch((error) => console.log(error));
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Message</Text>
      <Text>{data.tagname}</Text>
    </View>
  );
}

export default Message;
