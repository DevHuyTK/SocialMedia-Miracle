//Library - Of course!
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import Signup2 from '../Signup-Step2/index'

//This's what u see (_ _")
function Register(props) {
  const [name, setName] = useState('');
  const [tagname, setTagname] = useState('');
  const isInvalid = name === '' || tagname === '';
  const display = isInvalid ? 'none' : 'flex';
  
  const checkTagname = () => {
    new Promise((resolve, reject) => {
      const url = `http://192.168.0.102:3000/user/checkTagName`;
      fetch(url, {
        headers: { 'Content-type': 'Application/json' },
        method: 'POST',
        body: JSON.stringify({
          tagname: tagname,
        }),
      })
        //.then((response) => response.json())
        .then((response) => response.json())
        .then((res) => {
          // console.log(res)
          resolve(res);
          return props.navigation.navigate('Signup2');
        })
        .catch((error) => {
          reject(error);
          return Alert.alert('TagName này đã tồn tại. Vui lòng thử lại!!');
        });
    });
  };

  const handleCheckValid = () => {
    if (name.length < 6) {
      return Alert.alert('Tên phải có trên 6 kí tự!!');
    }
    if (tagname.length < 4) {
      return Alert.alert('TagName phải có trên 4 kí tự!!');
    }
    checkTagname();
  };

  return (
    <ImageBackground
      source={require('../../../images/Backrgorund.png')}
      style={Haladie.all}
      blurRadius={3}
    >
      <View style={Haladie.viewNone}>
        <Signup2
          UserName={name}
          TagName={tagname}
        />
      </View>
      <View style={Haladie.all}>
        <View style={Haladie.all1}>
          <View style={Haladie.view4}></View>
          <View style={Haladie.view1}>
            <TextInput
              style={[Haladie.input, Haladie.username]}
              onChangeText={(text) => setName(text)}
              placeholder="Họ và tên"
              placeholderTextColor="#808080"
            ></TextInput>
            <TextInput
              style={[Haladie.input, Haladie.password]}
              placeholder="Tagname"
              onChangeText={(text) => setTagname(text)}
              placeholderTextColor="#808080"
            ></TextInput>
            <Text style={Haladie.txtfg}></Text>
          </View>
          <View style={Haladie.view2}>
            <View>
              <TouchableOpacity style={[Haladie.btLogin, { display }]} onPress={handleCheckValid}>
                <Text style={Haladie.txtLogin}>Tiếp Tục</Text>
              </TouchableOpacity>
            </View>
            <Text style={Haladie.txtregis} onPress={() => props.navigation.navigate('Login')}>
              Đã có tài khoản? Đăng nhập ngay
            </Text>
          </View>
          <View style={Haladie.view3}>
            <Text style={Haladie.txtbot}>Chính sách Bảo mật | Điều Khoản và Điều kiện</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

//Style - Like CSS bro :)
const Haladie = StyleSheet.create({
  all: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  all1: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  view4: {
    flex: 2,
  },
  view1: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  view2: {
    flex: 1,
    justifyContent: 'space-around',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewNone:{
    width: 0,
    height: 0
  },
  input: {
    flex: 1,
    width: 'auto',
    borderRadius: 7,
    fontSize: 18,
    paddingHorizontal: '5%',
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 40,
  },
  btLogin: {
    height: 50,
    backgroundColor: '#1877f2',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogin: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtbot: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  txtregis: {
    textDecorationLine: 'underline',
    color: '#fff',
    alignSelf: 'center',
  },
  txtfg: {
    textDecorationLine: 'underline',
    marginTop: 15,
    alignSelf: 'flex-end',
    color: '#fff',
  },
});

export default Register;
