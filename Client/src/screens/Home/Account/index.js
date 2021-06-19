import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../../Components/Header';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import AccountItem from '../../../Components/AccountItem';

function Account({ navigation }) {
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
            <Avatar
              size="large"
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={{ backgroundColor: 'gray' }}
            />
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
        <AccountItem parentIcon="settings" parentTitle="Settings & Privacy" list={setting} />
        <AccountItem parentIcon="help-outline" parentTitle="Help & Support" list={help} />
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
          onPress={() => navigation.navigate('Login')}
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
