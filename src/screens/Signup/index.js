//Library - Of course!
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image,
    TouchableOpacity, Alert, ImageBackground} from 'react-native';


//This's what u see (_ _")
function Register({ navigation })
{
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [repassword, setrepassword] = useState('');
  const handleAddUser = () => {
    if (email.trim() === '' || password.trim() === '' || repassword.trim() === '' || name.trim()==='') {
      return Alert.alert('Email hoặc mật khẩu không được để trống');
    }
    else {
        if (password !== repassword)

            { 
                return Alert.alert('Nhập lại mật khẩu không chính xác');
                
            }
        else {
            //Luu Data 
                return Alert.alert('Đăng kí thành công! ');  
        }
}
  }
    return (
        <ImageBackground 
            source={require('../../images/Backrgorund.png')}
            style={Haladie.all}
            blurRadius={3}
        >
            <TextInput style={[Haladie.input, Haladie.username]}
                       placeholder='Email' 
                       onChangeText={(text) => setemail(text)}
            >
            </TextInput>
            <TextInput style={[Haladie.input, Haladie.username]}
                       placeholder='Họ và Tên' 
                       onChangeText={(text) => setName(text)}
            >
            </TextInput>
            <TextInput style={[Haladie.input, Haladie.password]}
                       placeholder='Mật khẩu'
                       secureTextEntry={true}
                       onChangeText={(text) => setpassword(text)}
            >
            </TextInput>
            <TextInput style={[Haladie.input, Haladie.password]}
                       placeholder='Nhập lại mật khẩu'
                       secureTextEntry={true}
                       onChangeText={(text) => setrepassword(text)}
            >
            </TextInput>
            <TouchableOpacity
                style={Haladie.btLogin}            
                onPress={handleAddUser}
            >
                <Text style={Haladie.txtLogin
                        
                }>Đăng Kí</Text>
            </TouchableOpacity>
            <Text style={Haladie.txtfg}
                  onPress={() => navigation.navigate('Login')}  
            >Đã có tài khoản? Đăng nhập ngay!</Text>
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
        marginTop:0,
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
        top: 100
    },
    txtregis:{
        textDecorationLine:'underline',
        marginTop:10,
        top: 170
        },
    txtfg:{
        textDecorationLine:'underline',
        marginBottom:10,
        top:10,
        left: 70
    },
});

export default Register;