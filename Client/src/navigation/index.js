import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';
import Signup2 from '../screens/Account/Signup-Step2';
import Login from '../screens/Account/Login';
import Message from '../screens/Home/Message';
import Community from '../screens/Home/Community';
import Personal from '../screens/Home/Personal';
import Account from '../screens/Home/Account';
import Search from '../screens/Search'
import AccountDetails from '../screens/Home/AccountDetail';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size }) => <FontAwesome name="group" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Personal"
        component={Personal}
        options={{
          tabBarLabel: 'Personal',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup2" component={Signup2} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="AccDetail" component={AccountDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
