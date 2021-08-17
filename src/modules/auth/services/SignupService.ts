import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';

interface Props {
  email: string;
  password: string;
  confirmPassword: string;
  navigation: any;
}

const SignupService = async ({ email, password, confirmPassword, navigation }: Props) => {
  try {
    type Response = {
      id: number,
      token: string
    }

    const url = 'https://reqres.in/api/register';

    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    const config = {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    };

    if (data.email === '' && data.password === '') {
      return Alert.alert('Validation', 'Email & Password are required!', [{ text: 'OK' }]);
    } else if (data.email === '') {
      return Alert.alert('Validation', 'Email is required!', [{ text: 'OK' }]);
    } else if (data.password === '') {
      return Alert.alert('Validation', 'Password is required!', [{ text: 'OK' }]);
    } else if (data.confirmPassword === '') {
      return Alert.alert('Validation', 'Confirm Password is required!', [{ text: 'OK' }]);
    }
    if (password !== confirmPassword) {
      return Alert.alert('Validation', 'Confirm Password is not match with password!', [{ text: 'OK' }]);
    }

    const response = await axios.post<Response, AxiosResponse<Response>>(url, data, config);

    if (response.data.token) {
      Alert.alert('Welcome to My App', 'You registered successfully!', [{ text: 'OK' }]);
      navigation.navigate('SignIn');
    }
  } catch (error) {
    console.log(error);
  }
};

export default SignupService;
