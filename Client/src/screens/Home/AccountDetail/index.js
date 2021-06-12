import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  LogBox,
} from 'react-native';
import { connect } from 'react-redux';
import * as accActions from '../../../store/Actions/AccountActions';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import Header from '../../../Components/Header';
//This's what u see (_ _")
function accDetail( props ) {
  const [name, setName] = useState('');
  const [tagname, setTagname] = useState('');
  const [age, setAge] = useState('');
  return (
      <View style={Haladie.all}>
          <View style={Haladie.view4}>
          <Avatar
              size='xlarge'
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'gray' }}
            />
          </View>
          <View style={Haladie.view1}>
            <View style={Haladie.details}>
                <Text style={[Haladie.textfix]}>Tên</Text>
                <Text style={[Haladie.input]}>Nguyễn Doanh</Text>
            </View>
            <View style={Haladie.details}>
                <Text style={[Haladie.textfix]}>Tên người dùng</Text>
                <Text style={[Haladie.input]}>Haladie</Text>
            </View>
            <View style={Haladie.details}>
                <Text style={[Haladie.textfix]}>Tuổi</Text>
                <Text style={[Haladie.textlast]}>18</Text>
            </View>
          </View>
          <View style={Haladie.view2}>
            <Text style={Haladie.txtregis} onPress={() => props.navigation.navigate('Signup2')}>
              Chưa có tài khoản? Đăng kí ngay
            </Text>
          </View>
      </View>
  );
}

//Style - Like CSS bro :)
const Haladie = StyleSheet.create({
  all: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    color: 'black'
  },
  all1: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view4: {
    flex: 1.5,
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:0.3,
    borderTopWidth:0.3,
  },
  view2: {
    flex: 2,
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 3,
    color: 'black',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '1%',
    paddingVertical:'3%',
    borderBottomWidth: 0.3
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
  details: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  textfix:{
      flex:1.2,
      color: 'black',
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:'3%',
      paddingHorizontal: '3%'
  },
  textlast:
  {
    flex: 3,
    color: 'black',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:'3%',
    paddingHorizontal: '1%',
  }
});

const mapStateToProps = (state) => {
  return {
    accData: state.account.accData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllAccount: (data) => {
      dispatch(accActions.getAllAccounts(data));
    },
    singInAccount: (data) => {
      dispatch(accActions.singInAccount(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(accDetail);