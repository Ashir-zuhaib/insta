import React from "react";
import {SafeAreaView, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import Email from "./Email";
import Password from "./Password";
export default function Signin() {
    return (
      <>
      <View style={styles.emailContainer}>
        {/* <Text>Enter UserName</Text> */}
        <TextInput
        style={styles.input}
        placeholder="Enter UserName"
      />
        </View>
      <Email       />
      <Password />
      <Button
  title="Submit"
  color="#841584"
  accessibilityLabel="Submmit "
  style=  {styles.but}
/>

      </>
      
    );
  }
  const styles = StyleSheet.create({
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
    emailContainer:{
      // flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex:0.2,
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
    },
    but:{
      flex:0.2,
    },
    input: {
      height: 40,
      width:350,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    })