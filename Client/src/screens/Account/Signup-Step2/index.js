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
import { connect } from 'react-redux';
import * as accActions from '../../../store/Actions/AccountActions';

//This's what u see (_ _")
function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const isInvalid = email === '' || password === '' || repassword === '';
  const display = isInvalid ? 'none' : 'flex';

  console.log(props.UserName, "Name");
  
  const checkEmail = () => {
    new Promise((resolve, reject) => {
      const url = `http://192.168.0.102:3000/user/checkTagName`;
      fetch(url, {
        headers: { 'Content-type': 'Application/json' },
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
      })
        //.then((response) => response.json())
        .then((response) => response.json())
        .then((res) => {
          // console.log(res)
          resolve(res);
          props.navigation.navigate('Login');
          return Alert.alert('Đăng kí tài khoản thành công!!');
        })
        .catch((error) => {
          reject(error);
          return Alert.alert('Email này đã tồn tại. Vui lòng thử lại!!');
        });
    });
  };

  const handleSignup = () => {
    if (password !== repassword) {
      return Alert.alert('Nhập lại mật khẩu không đúng');
    }
    checkEmail();
    props.registerAccount({
      name: props.UserName,
      tagname: props.TagName,
      email: email,
      password: password,
    });
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
              style={[Haladie.input, Haladie.password]}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#808080"
            ></TextInput>
            <TextInput
              style={[Haladie.input, Haladie.password]}
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={true}
              onChangeText={(text) => setRepassword(text)}
              placeholderTextColor="#808080"
            ></TextInput>
          </View>
          <View style={Haladie.view2}>
            <TouchableOpacity style={[Haladie.btLogin, { display }]} onPress={handleSignup}>
              <Text style={Haladie.txtLogin}>Đăng Kí</Text>
            </TouchableOpacity>
            <Text style={Haladie.txtregis} onPress={() => navigation.navigate('Login')}>
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
