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
            <View style={Haladie.view1}></View>
            <View style={Haladie.view2}>
            <TextInput style={[Haladie.input]}
                       placeholder='Email' 
                       onChangeText={(text) => setemail(text)}
            >
            </TextInput>
            <TextInput style={[Haladie.input]}
                       placeholder='Họ và Tên' 
                       onChangeText={(text) => setName(text)}
            >
            </TextInput>
            <TextInput style={[Haladie.input]}
                       placeholder='Mật khẩu'
                       secureTextEntry={true}
                       onChangeText={(text) => setpassword(text)}
            >
            </TextInput>
            <TextInput style={[Haladie.input]}
                       placeholder='Nhập lại mật khẩu'
                       secureTextEntry={true}
                       onChangeText={(text) => setrepassword(text)}
            >
            </TextInput>
            </View>
            <View style={Haladie.view2}>
            <TouchableOpacity
                style={Haladie.btLogin}            
                onPress={handleAddUser}
            >
                <Text style={Haladie.txtLogin
                        
                }>Đăng Kí</Text>
            </TouchableOpacity>
            <Text style={Haladie.txtregis}
                  onPress={() => navigation.navigate('Login')}  
            >Đã có tài khoản? Đăng nhập ngay!</Text>
            </View>
            <View style={Haladie.view3}>
            <Text style={Haladie.txtbot}>Chính sách Bảo mật | Điều Khoản và Điều kiện</Text>
            </View>
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
    view1: {
        flex: 2.9
    },
    view2: {
        flex: 2,
        marginTop:'10%'
    },
    view3: {
        flex: 1,
    },

    input:{
        width:350,
        height:50,
        borderRadius:7,
        fontSize:22,
        paddingHorizontal:'5%',
        color: 'black',
        backgroundColor: '#FFF',
        opacity:0.7,
        justifyContent: 'flex-end',
        marginBottom:'3%',
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
        marginTop:'10%'
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
    },
    txtregis:{
        textDecorationLine:'underline',
        marginTop:10,
        marginLeft:'11%'
        },
    txtfg:{
        textDecorationLine:'underline',
        marginBottom:10,
        marginLeft:'35%'
    },
});

export default Register;