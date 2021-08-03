import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';

const SignIn = ({ navigation }: any) => {
  const name: string = 'Login';
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Logo />
      <Form name={name} />
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupButton}> Signup</Text>
        </TouchableOpacity>
      </View>
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
  signupTextContainer: {
    flexGrow: 1,
    //alignItems:'flex-end',
    justifyContent: 'center',
    //paddingVertical:5,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SignIn;
