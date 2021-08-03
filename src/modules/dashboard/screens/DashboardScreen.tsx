import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    //fontStyle: 'italic',
    justifyContent: 'center',
    fontFamily: 'Lato-LightItalic',
  },
});

export default SignIn;
