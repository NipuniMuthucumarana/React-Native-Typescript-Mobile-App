import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';

const SignIn = ({ navigation }: any) => {
  const name: string = 'Sign up';
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Logo />
      <Form name={name} />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signupButton}> Sign in</Text>
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
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
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
