import React from 'react'
import { Text, View, Animated, StyleSheet, Image } from 'react-native'
type Show = {
    show: boolean
}
export default function Loading(show: Show) {
    return (
        <View style={{ opacity: show ? 1 : 0, justifyContent: 'center', alignItems: 'center', flex:1}}>
            {/* <Animated.Text style={styles.text}>Loading...</Animated.Text> */}
            <Animated.Image style={styles.spinner}source={require('../../../../assets/Spinner.gif')}/>
            {/* <Animated.Image style={styles.spinner} source={{ uri: 'https://loading.io/asset/5045' }}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',   
    },
    spinner: {
        height: 50,
        width: 50
    }
  });