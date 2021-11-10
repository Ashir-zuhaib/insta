import React from "react";
import {SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import Email from "./Email";
import Password from "./Password";
export default function Signin() {
    return (
      <>
      <Email 
      />
      <Password />
      <Button
  title="Sign in"
  color="#841584"
  accessibilityLabel="Submmit "
  // style=  {styles.but}
/>
      </>
      
    );
  }
  // const styles = StyleSheet.create({
  //   marginEmail:{
  //     marginBottom:0,
  //   },
  //   marginPass:{
  //     marginTop:0,
  //   }
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // emailContainer:{
    //   flex:0.2,
    //   flexDirection:"row",

    // },
    // input: {
    //   height: 40,
    //   width:200,
    //   margin: 12,
    //   borderWidth: 1,
    //   padding: 10,
    // })