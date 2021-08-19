import { ToastAndroid } from 'react-native';
import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// interface Props {
//   // name: string;
//   // job: string;
//   users: Array<{
//     name: string;
//     job: string;
//     id: string;
//   }>;
// }

type User = {
  name: string;
  job: string;
  id: string;
}
interface Response {
  name: string;
  job: string;
  id: string;
}

const CreateUserService = async ( name: string, job: string, users: User[]) => {
  const url = 'https://reqres.in/api/users';

  const data = {
    name: name,
    job: job,
  };

  const config = {
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
  };

  // if (data.name === '' && data.job === '') {
  //   return Alert.alert('Validation', 'Name & job are required!', [{ text: 'OK' }]);
  // } else if (data.name === '') {
  //   return Alert.alert('Validation', 'Name is required!', [{ text: 'OK' }]);
  // } else if (data.job === '') {
  //   return Alert.alert('Validation', 'Job is required!', [{ text: 'OK' }]);
  // }

  const response = await axios.post<Response, AxiosResponse<Response>>(url, data, config);

  if (response.data) {
    const userData = [...users, { name: response.data.name, job: response.data.job, id: response.data.id }];
    await AsyncStorage.setItem('userInfo', JSON.stringify(userData));
    console.log('userData', userData);
    ToastAndroid.show('New user ' + response.data.name + ' has created successfully !', ToastAndroid.LONG);
  }
};

export default CreateUserService;
