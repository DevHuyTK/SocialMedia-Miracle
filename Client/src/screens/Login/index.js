import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput,
         TouchableOpacity, 
        Alert, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import * as accActions from '../../store/Actions/AccountActions';


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
            <View style={Haladie.view1} >
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
            </View>
            <View style={Haladie.view2}>
            <TouchableOpacity
                style={Haladie.btLogin}            
                onPress={handleLogin}
            >
                <Text style={Haladie.txtLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            <Text style={Haladie.txtregis}
                  onPress={() => navigation.navigate('Signup')}
            >Chưa có tài khoản? Đăng kí ngay</Text>
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
        backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    view1: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        flexDirection: 'column'
    },
    view2: {
        flex: 1,
        justifyContent: 'center'

    },
    view3: {
        flex: 1,
        justifyContent: 'center'
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
        marginBottom: 5,
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

    },
    txtLogin: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    txtbot:{
        fontSize:12,
        textDecorationLine:'underline',
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

const mapStateToProps = (state) => {
    return {
        accData: state.account.accData,
        accessToken: state.account.refreshToken,
        refreshToken: state.account.refreshToken,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        singInAccount: (data) => {
            dispatch(accActions.singInAccount(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);