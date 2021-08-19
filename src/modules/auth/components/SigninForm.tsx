import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SigninService from '../services/SigninService';

const signinSchema = yup.object({
  email: yup.string().email().required().min(4),
  password: yup.string().required().min(4),
});

interface Name {
  name: string;
}

const SigninForm = (props: Name) => {
  const { name } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={signinSchema}
        onSubmit={(values, actions) => {
          Keyboard.dismiss();
          SigninService(values.email, values.password, navigation);
          actions.resetForm();
        }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Email"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              onBlur={props.handleBlur('email')}
            />
            <Text style={styles.error}>{props.touched.email && props.errors.email}</Text>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
            /> 
            <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>          
            <TouchableOpacity
              style={styles.button}
              onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>{name}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
  error: {
    color: '#ff0000',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default SigninForm;
