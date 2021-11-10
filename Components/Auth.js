import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Auth(){
    return(
    <Tab.Navigator>
      <Tab.Screen name="Signin" component={Signin} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
    )
}