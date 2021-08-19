import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = React.createContext(null);
type User = {
  avatar: string;
  email: string;
  first_name: number;
  id: number;
  last_name: string;
}| null;

export const AppContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [isAuthnticated, setIsAuthnticated] = useState<boolean>(false)
  useEffect(() => {
    async function getData() {
      try {
        const userInfo = await AsyncStorage.getItem('user');
        if(userInfo === null) {
          setIsAuthnticated(false);
        } else {
          setCurrentUser(JSON.parse(userInfo))
          setIsAuthnticated(true)
          console.log('logged-user', userInfo);
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

   console.log('currentUser',currentUser)
  return (
    <AppContext.Provider
      value={{ currentUser, setCurrentUser, isAuthnticated, setIsAuthnticated}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext(AppContext);
