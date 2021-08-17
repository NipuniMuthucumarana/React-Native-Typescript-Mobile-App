import { useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Props {
    name: string;
    job: string;
    id: string;
}

interface Response {
  id: string;
  name: string
}

const DeleteUserService = async ( id: string, name: string) => {
  const url = 'https://reqres.in/api/users'+id;

  const response = await axios.delete<Response, AxiosResponse<Response>>(url);

  if (response) {
    const usersInfo= await AsyncStorage.getItem('userInfo');
    if(usersInfo !== null) {
        const usersArray = JSON.parse(usersInfo);
        const alteredUsers = await usersArray.filter(function(e: { id: string; }){
            console.log(id)
            return e.id !== id
        })
        await AsyncStorage.setItem('userInfo', JSON.stringify(alteredUsers));
    }
    ToastAndroid.show('User '+ name + ' has deleted successfully !', ToastAndroid.LONG);
  }
};

export default DeleteUserService;
