import React from "react";
import {StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function Header(){
    return(
        <SafeAreaView style={styles.Header}>
            <View>
                <Text>Instagram</Text>
            </View>
            <View>
                <Text>Message</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Header: {
    flex:1,
    // flexDirection:'row' ,
    // justifyContent:'space-between'

    }
})