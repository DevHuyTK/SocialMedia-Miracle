import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput,
         TouchableOpacity, 
        Alert, ImageBackground} from 'react-native';

//This's what u see (_ _")
function Login({ navigation })
{
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if(email.trim() === '') {
			return Alert.alert('Bạn chưa nhập tên tài khoản');
		}

		if(password.trim() === '') {
			return Alert.alert('Bạn chưa nhập mật khẩu');
		}

		if(email !== 'admin' || password !== 'admin') {
			return Alert.alert('Tài khoản hoặc mật khẩu không đúng');
		}
    else { navigation.navigate('Home');}
	}
    return (
     
        <ImageBackground 
            source={require('../../images/Backrgorund.png')}
            style={Haladie.all}
            blurRadius={3}
        >
            <TextInput 
                       style={[Haladie.input, Haladie.username]}
                       onChangeText={(text) => setEmail(text)}
                       placeholder='Email' 
            >
            </TextInput>
            <TextInput 
                       style={[Haladie.input, Haladie.password]}
                       placeholder='Mật khẩu'
                       secureTextEntry={true}
                       onChangeText={(text) => setPassword(text)}
            >
            </TextInput>
            <Text style={Haladie.txtfg}>Quên mật khẩu? Nhấn vào đây</Text>
            <TouchableOpacity
                style={Haladie.btLogin}            
                onPress={handleLogin}
            >
                <Text style={Haladie.txtLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            <Text style={Haladie.txtregis}
                  onPress={() => navigation.navigate('Signup')}
            >Chưa có tài khoản? Đăng kí ngay</Text>
            <Text style={Haladie.txtbot}>Chính sách Bảo mật | Điều Khoản và Điều kiện</Text>
        </ImageBackground>
    );
}

//Style - Like CSS bro :)
const Haladie = StyleSheet.create({
    all: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        width:350,
        height:50,
        borderRadius:7,
        fontSize:22,
        paddingHorizontal:15,
        color: 'black',
        backgroundColor: '#FFF',
        opacity:0.7,
        top: 80
    },
    username:{
        marginTop:10,
        marginBottom:10
    },
    password:{
        marginBottom:10
    },
    image: {
        width:180,
        height:200,
        resizeMode: 'cover',
        borderRadius:40
    },
    btLogin: {
        width:300,
        height:70,
        backgroundColor:'#1877f2',
        borderRadius:7,
        justifyContent: 'center',
        alignItems: 'center',
        top: 130
    },
    txtLogin: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    txtbot:{
        fontSize:12,
        textDecorationLine:'underline',
        marginTop:50,
        top: 150
    },
    txtregis:{
        textDecorationLine:'underline',
        marginTop:10,
        top: 170
        },
    txtfg:{
        textDecorationLine:'underline',
        marginBottom:10,
        top:80,
        left: 70
    },
});

export default Login;