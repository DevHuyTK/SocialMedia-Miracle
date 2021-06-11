//Library - Of course!
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import * as accActions from '../../../store/Actions/AccountActions';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//This's what u see (_ _")
function Register(props) {
  const [name, setName] = useState('');
  const [tagname, setTagname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const isInvalid = email === '' || password === '' || repassword === '' || tagname === '';
  const display = isInvalid ? 'none' : 'flex';

  const checkEmail = () => {
    new Promise((resolve, reject) => {
      const url = `http://192.168.0.102:3000/user/checkEmail`;
      fetch(url, {
        headers: { 'Content-type': 'Application/json' },
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => {
          // console.log(res)
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          return Alert.alert('Email này đã tồn tại. Vui lòng thử lại!!');
        });
    });
  };
  const isEmail = () => {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(email)){
      return Alert.alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
    }
  }
  
  const handleSignup = () => {
    checkEmail();
    props.registerAccount({
      name: name,
      tagname: tagname,
      email: email,
      password: password,
    });
    isEmail();
    if (password !== repassword) {
      return Alert.alert('Nhập lại mật khẩu không đúng');
    }
    
    if (tagname.length < 4) {
      return Alert.alert('TagName it nhat phai co 4 ki tu');
    }
    if (name.length < 4) {
      return Alert.alert('Name it nhat phai co 6 ki tu');
    }
    if (password.length < 6) {
      return Alert.alert('Password it nhat phai co 6 ki tu');
    } 
    else {
      props.navigation.navigate('Login');
      return Alert.alert('Đăng kí tài khoản thành công!!');
    }
  };

  return (
    <ImageBackground
      source={require('../../../images/Backrgorund.png')}
      style={Haladie.all}
      blurRadius={3}
    >
      <View style={Haladie.all}>
        <View style={Haladie.all1}>
          <View style={Haladie.view4}></View>
          <View style={Haladie.view1}>
            <TextInput
              style={[Haladie.input, Haladie.username]}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor="#808080"
            ></TextInput>
            <TextInput
              style={[Haladie.input, Haladie.username]}
              onChangeText={(text) => setName(text)}
              placeholder="Your full name"
              placeholderTextColor="#808080"
            ></TextInput>
            <TextInput
              style={[Haladie.input, Haladie.username]}
              onChangeText={(text) => setTagname(text)}
              placeholder="Your Tagname"
              placeholderTextColor="#808080"
            ></TextInput>
            <TextInput
              style={[Haladie.input, Haladie.password]}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#808080"
            ></TextInput>
            <TextInput
              style={[Haladie.input, Haladie.password]}
              placeholder="Re Password"
              secureTextEntry={true}
              onChangeText={(text) => setRepassword(text)}
              placeholderTextColor="#808080"
            ></TextInput>
          </View>
          <View style={Haladie.view2}>
            <TouchableOpacity style={[Haladie.btLogin, { display }]} onPress={handleSignup}>
              <Text style={Haladie.txtLogin}>Đăng Kí</Text>
            </TouchableOpacity>
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
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  all1: {
    flex: 1,

    width: windowWidth * 0.9,
    height: windowHeight,
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

const mapStateToProps = (state) => {
  return {
    accData: state.account.accData,
    accessToken: state.account.refreshToken,
    refreshToken: state.account.refreshToken,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerAccount: (data) => {
      dispatch(accActions.registerAccount(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
