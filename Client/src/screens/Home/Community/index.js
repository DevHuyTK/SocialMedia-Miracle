import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Button,
  Image,
  CameraRoll,AsyncStorage
} from 'react-native';
import Header from '../../../Components/Header';
import * as ImagePicker from 'expo-image-picker';

import { DOMAIN } from '../../../store/constant';

function Community( props ) {
  const [image, setImage] = useState(null);
  const [makePhoto, setMakePhoto] = useState(null);
  
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

  // const uploadImage = async () => {
  //   // Check if any file is selected or not
  //   if (singleFile != null) {
  //     // If file selected then create FormData
  //     const fileToUpload = singleFile;
  //     const data = new FormData();
  //     data.append('name', 'Image Upload');
  //     data.append('file_attachment', fileToUpload);
  //     // Please change file upload URL
  //     let res = await fetch(
  //       'http://localhost/upload.php',
  //       {
  //         method: 'post',
  //         body: data,
  //         headers: {
  //           'Content-Type': 'multipart/form-data; ',
  //         },
  //       }
  //     );
  //     let responseJson = await res.json();
  //     if (responseJson.status == 1) {
  //       alert('Upload Successful');
  //     }
  //   } else {
  //     // If no file selected the show alert
  //     alert('Please Select File first');
  //   }
  // };
  
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
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setMakePhoto(result.uri);
    }
    CameraRoll.saveToCameraRoll((await Expo.ImagePicker.launchCameraAsync({})).uri);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onNavigation={props.navigation} />
      <Text>Community</Text>
      <Text>{data.name}</Text>
      <Button title="Pick an image from lib" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Take a photo" onPress={takeImage} />
      {makePhoto && <Image source={{ uri: makePhoto }} style={{ width: 200, height: 200 }} />}
    </View>
  );
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

export default Community;
