import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
// import Signin from './Components/Signin';
// import Signup from './Components/Signup';
import Auth from './Components/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
export default function App() {

  return (
    <>
    
  <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="Auth" component={Auth} />
        <Drawer.Screen name="Header" component={Header} />
      </Drawer.Navigator>
  </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
