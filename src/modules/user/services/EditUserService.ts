import { useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Props {
  id: string;
  name: string;
  job: string;
  users: Array<{
    name: string;
    job: string;
    id: string;
  }>;
}
interface Response {
  name: string;
  job: string;
  id: string;
}

const EditUserService = async ({ id, name, job, users }: Props) => {
  const url = 'https://reqres.in/api/users/2';

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

  if (data.name === '' && data.job === '') {
    return Alert.alert('Validation', 'Name & job are required!', [{ text: 'OK' }]);
  } else if (data.name === '') {
    return Alert.alert('Validation', 'Name is required!', [{ text: 'OK' }]);
  } else if (data.job === '') {
    return Alert.alert('Validation', 'Job is required!', [{ text: 'OK' }]);
  }

  const response = await axios.put<Response, AxiosResponse<Response>>(url, data, config);

  if (response) {
    users.map((user) => {
      if (user.id === id) {
        user.name = name;
        user.job = job;
      }
    });
    await AsyncStorage.setItem('userInfo', JSON.stringify(users));
    ToastAndroid.show('User Details updated successfully !', ToastAndroid.LONG);
  }
};

export default EditUserService;
