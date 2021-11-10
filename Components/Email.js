import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';
export default function Email() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emailContainer}>
        {/* <Text>Enter Email</Text> */}
        <TextInput
        style={styles.input}
        placeholder="Enter Email Adress"
      />
        </View>

      </SafeAreaView>
    )}
    const styles = StyleSheet.create({
        textstyle:{
            textAlignVertical:"center",
        },
        container: {
          flex: 0.2,
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
        //   marginLeft:40,
          borderWidth: 1,
          padding: 10,
        }})