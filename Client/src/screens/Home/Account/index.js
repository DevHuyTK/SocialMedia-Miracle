import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../Components/Header';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import AccountItem from '../../../Components/AccountItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DOMAIN } from '../../../store/constant';

function Account({ navigation }) {
  const [data, setData] = React.useState({
    age: 0,
    avatar: '',
    email: '',
    name: '',
    role: '',
    tagname: '',
  });

  const setting = [
    {
      icon: 'settings',
      title: 'Settings',
    },
    {
      icon: 'language',
      title: 'Languages',
    },
  ];

  const help = [
    {
      icon: 'report-problem',
      title: 'Report problem',
    },
  ];

  const handleLogout = () => {
    AsyncStorage.setItem(
      'info',
      JSON.stringify({
        age: 0,
        avatar: '',
        email: '',
        name: '',
        role: '',
        tagname: '',
      }),
    );
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onNavigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AccDetail')}
          activeOpacity={0.5}
          style={{
            backgroundColor: '#fff',
            height: '16%',
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <View style={{ width: '35%', justifyContent: 'center', alignItems: 'center' }}>
            {data.avatar ? (
              <Avatar
                size="large"
                rounded
                source={{
                  uri: `${DOMAIN}\img\photo\${}`,
                }}
              />
            ) : (
              <Avatar
                size="large"
                rounded
                icon={{ name: 'user', type: 'font-awesome' }}
                containerStyle={{ backgroundColor: 'gray' }}
              />
            )}
          </View>
          <View style={{ width: '65%', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Username</Text>
            <Text>Go to your personal page</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            width: '80%',
            backgroundColor: '#CED0CE',
            marginHorizontal: '10%',
            marginBottom: 10,
          }}
        />
        <AccountItem
          parentIcon="settings"
          parentTitle="Settings & Privacy"
          list={setting}
          onNavigation={navigation}
        />
        <AccountItem
          parentIcon="help-outline"
          parentTitle="Help & Support"
          list={help}
          onNavigation={navigation}
        />
        <ListItem.Accordion
          noIcon={true}
          style={{ marginVertical: 5, marginHorizontal: 15, borderRadius: 20 }}
          containerStyle={{ borderRadius: 20 }}
          content={
            <>
              <Icon name="logout" size={30} />
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold' }}>Log out</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={false}
          onPress={() => handleLogout()}
        />
        <View
          style={{
            height: 20,
            marginHorizontal: '10%',
            marginBottom: 10,
          }}
        />
      </ScrollView>
    </View>
  );
}

export default Account;
