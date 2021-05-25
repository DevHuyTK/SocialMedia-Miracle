//Library - Of course!
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image,
    TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { connect } from 'react-redux'
import * as accActions from "../../store/Actions/AccountActions"

//This's what u see (_ _")
function Register({ navigation })
{

  const [name, setName] = useState('');
  const [tagname, setTagname] = useState('');
  const isInvalid = name === "" || tagname === "";
  const display = isInvalid ? "none" : "flex";

  return (
     
    <ImageBackground 
        source={require('../../images/Backrgorund.png')}
        style={Haladie.all}
        blurRadius={3}
    >
        <View style={Haladie.all}>
            <View style={Haladie.all1}>
                <View style={Haladie.view4} ></View>
                <View style={Haladie.view1}>
                        <TextInput 
                        style={[Haladie.input, Haladie.username]}
                        onChangeText={(text) => setName(text)}
                        placeholder='Họ và tên' 
                        placeholderTextColor = '#808080'
                        >
                        </TextInput>
                        <TextInput 
                        style={[Haladie.input, Haladie.password]}
                        placeholder='Tagname'
                        onChangeText={(text) => setTagname(text)}
                        placeholderTextColor = '#808080'
                        >
                        </TextInput>
                        <Text style={Haladie.txtfg}></Text>
                </View>
                <View style={Haladie.view2}>  
                    <View>
                        <TouchableOpacity
                            style={[Haladie.btLogin, {display}]}
                            onPress={() => navigation.navigate('Signup2')}
                        >
                            <Text style={Haladie.txtLogin}>Tiếp Tục</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={Haladie.txtregis}
                        onPress={() => navigation.navigate('Login')}
                    >Đã có tài khoản? Đăng nhập ngay</Text>
                </View>
                <View style={Haladie.view3}
                >
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
view4:{
    flex: 2
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
    alignItems: 'center'

},
input:{
    flex:1,
    width: 'auto',
    borderRadius:7,
    fontSize:18,
    paddingHorizontal:'5%',
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    fontWeight: 'bold'
},
image: {
    resizeMode: 'cover',
    borderRadius:40
},
btLogin: {
    height:50,
    backgroundColor:'#1877f2',
    borderRadius:7,
    justifyContent: 'center',
    alignItems: 'center',

},
txtLogin: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
},
txtbot:{
    fontSize:12,
    textDecorationLine:'underline',
    color: '#fff',
},
txtregis:{
    textDecorationLine:'underline',
    color: '#fff',
    alignSelf: 'center',
    },
txtfg:{
    textDecorationLine:'underline',
    marginTop:15,
    alignSelf: 'flex-end',
    color: '#fff',
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
        getAllAccounts: (data) => {
            dispatch(accActions.getAllAccounts(data))
        },
        registerAccount: (data) => {
            dispatch(accActions.registerAccount(data))
        },
        editAccount: (data) => {
            dispatch(accActions.editAccount(data))
        },
        deleteAccount: (data) => {
            dispatch(accActions.deleteAccount(data))
        },
        adminDeleteAccount: (data) => {
            dispatch(accActions.adminDeleteAccount(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);