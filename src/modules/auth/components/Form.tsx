import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SignupService from '../services/SignupService';
import SigninService from '../services/SigninService';
interface Name {
  name: string;
}
const Form = (props: Name) => {
  const { name } = props;
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        defaultValue={email}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setPassword(text)}
        defaultValue={password}
      />
      {name === 'Sign up' ? (
        <>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={(text) => setConfirmPassword(text)}
            defaultValue={confirmPassword}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              SignupService({ email, password, confirmPassword });
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            }}>
            <Text style={styles.buttonText}>{name}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            SigninService({ email, password, navigation });
            setEmail('');
            setPassword('');
          }}>
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Form;
