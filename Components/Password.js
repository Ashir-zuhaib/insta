import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';
export default function Password(){
    return(
<SafeAreaView style={styles.container}>
        <View style={styles.emailContainer}>
        {/* <Text>Enter Password</Text> */}
        <TextInput
        style={styles.input}
        placeholder="Enter Password"
      />
        </View>

      </SafeAreaView>

    )
}
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        emailContainer:{
          flex:1,
          flexDirection:"row",
    
        },
        input: {
          height: 40,
          width:350,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }})