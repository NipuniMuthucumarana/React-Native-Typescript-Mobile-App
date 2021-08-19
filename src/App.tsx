import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import StackNavigation from './modules/auth/navigation/StackNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContextProvider } from './shared/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';



import CustomDrawer from './modules/dashboard/navigation/CustomDrawer'

const Stack = createStackNavigator();

type User = {
  avatar: string;
  email: string;
  first_name: number;
  id: number;
  last_name: string;
}

const App =  () => {
  // const [userData, setUserData] = useState<User[]>()
  // const [isAuthnticated, setIsAuthnticated] = useState<boolean>(false)
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const userInfo = await AsyncStorage.getItem('user');
  //       if(userInfo === null) {
  //         setIsAuthnticated(false);
  //       } else {
  //         setUserData(JSON.parse(userInfo))
  //         setIsAuthnticated(true)
  //         console.log('logged-user', userInfo);
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getData()
  // }, [])

  // console.log(userData)
  
  return (
     <AppContextProvider>
          <StackNavigation />
      </AppContextProvider>
  );
}

export default App;
