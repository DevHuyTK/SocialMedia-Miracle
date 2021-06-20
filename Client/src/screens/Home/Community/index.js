import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Button,
  Image,
  CameraRoll,
} from 'react-native';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Header from '../../../Components/Header';
import Post from '../../../Components/Post';
import Header from '../../../Components/Header';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DOMAIN } from '../../../store/constant';

function Community(props) {
  const [image, setImage] = useState(null);
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
  const [data, setData] = useState({});
  const chooseImage = () => {
  
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
      }
    });
}
  
  useEffect(() => {
    async function fetchData() {
      try {
        const jsonValue = await AsyncStorage.getItem('info')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        console.log(e)
      }
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
  
  // console.log("adads", props.loginData.token);
  function uploadImage(data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      const fileToUpload = image;
        const dataIMG = new FormData();
        dataIMG.append('upload', fileToUpload);
        console.log(dataIMG);
      const url = `${DOMAIN}/img/photo`;
      fetch(url, {
        headers: { 'Authorization': `Bearer ${props.loginData.token}` },
        method: 'POST',
        body: dataIMG,
      })
        //.then((response) => response.json())
        .then((response) => response.json())
        .then((res) => {
          //console.log(res)
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      // base64:true,
      
    });

    console.log("ok",result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onNavigation={props.navigation} />
      <Text>Community</Text>
      <Text>{data.name}</Text>
      <Button title="Pick an image from lib" onPress={chooseImage} />
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
      <Button title="Upload Img" onPress={uploadImage} />
      <SafeAreaView style={{ marginBottom: 90 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post post={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  body: {
    backgroundColor: '#fff',
  },
  highlight: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addPhotoTitle: {
    fontSize: 15,

    fontWeight: 'bold',
  },
  photoList: {
    height: 70,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
  },
  photo: {
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3399cc',
  },
  photoIcon: {
    width: 50,
    height: 50,
  },
  addButtonContainer: {
    padding: 15,
    justifyContent: 'flex-end',
  },
  addButtonText: {
    color: '#0ff1ce',
    fontWeight: 'bold',
    fontSize: 48,
  },
});

const mapStateToProps = (state) => {
  return {
    loginData: state.account.loginData,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getOneUser: () => {
//       dispatch(actions.getOneAccount());
//     },
//   };
// };

export default connect(mapStateToProps)(Community);
