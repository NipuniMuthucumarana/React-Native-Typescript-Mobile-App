import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignupService from '../services/SignupService';

const signupSchema = yup.object({
  email: yup.string().email().required().min(4),
  password: yup.string().required().min(4),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});
interface Name {
  name: string;
}
const SignupForm = (props: Name) => {
  const { name } = props;
  const navigation = useNavigation();
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={signupSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          Keyboard.dismiss();
          SignupService(values.email, values.password, values.confirmPassword, navigation);
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
              defaultValue={props.values.email}
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
              defaultValue={props.values.password}
              onBlur={props.handleBlur('password')}
            />
            <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              onChangeText={props.handleChange('confirmPassword')}
              defaultValue={props.values.confirmPassword}
              onBlur={props.handleBlur('confirmPassword')}
            />
            <Text style={styles.error}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
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

export default SignupForm;
