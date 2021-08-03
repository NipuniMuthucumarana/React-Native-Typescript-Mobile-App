import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';

interface Props {
  email: string;
  password: string;
  navigation: any;
}

const SigninService = async ({ email, password, navigation }: Props) => {
  console.log(email);
  try {
    type Response = {
      token: string
    }

    const url = 'https://reqres.in/api/login';

    const data = {
      email: email,
      password: password,
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
    }

    const response = await axios.post<Response, AxiosResponse<Response>>(url, data, config)
      
    if (response.data.token) {
      navigation.navigate('Dashboard');
      //Alert.alert('Welcome to My App', 'You logged in successfully!', [{ text: 'OK' }]);
    }  
    console.log(response.data.token);
  } catch (error) {
    console.log(error);
  }
};

export default SigninService;
