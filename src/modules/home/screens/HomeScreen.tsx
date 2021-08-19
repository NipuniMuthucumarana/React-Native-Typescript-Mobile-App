import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import HomeService from '../services/HomeService';
import Loading from '../components/Loading';
import Header from '../../../shared/components/Header'
import Animated from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApp } from '../../../shared/AppContext';


//const UserContext = React.createContext(null)


// type RootDrawerParamList = {
//   Home: {
//     email: string;
//   };
// };

//type HomeScreenRouteProp = RouteProp<RootDrawerParamList, 'Home'>;

type Props = {
  drawerAnimationStyle: any;
  email:string;
  navigation: any;
};
interface Data {
  avatar: string;
  email: string;
  first_name: number;
  id: number;
  last_name: string;
}

type User = {
  name: string;
  job: string;
  id: string;
}

const HomeScreen = ({drawerAnimationStyle, email, navigation }: Props) => {
  const { setCurrentUser, currentUser, setIsAuthnticated } = useApp();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]| any>([]);
  const [user, setUser] = useState<User[]| any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, [refresh]);

  async function getData() {
    const response = await HomeService();
    setUsers(response);
    setRefresh(true);
    await users.map(async (user: Data) => {
      if (user.email === email) {
        setLoading(false);
        setUser(user);
        setCurrentUser(user);
        setIsAuthnticated(true);
        await AsyncStorage.setItem('user', JSON.stringify(user));
      }
    });
  }

  console.log('users:', currentUser);
  
  return (
    <Animated.View style={{...styles.container, ...drawerAnimationStyle}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      {loading ? (
        <Loading show={loading} />
        ) : (
        // <UserContext.Provider value={user}>
        //   {
            <View style={styles.header}>
              {/* Header */}
              <Header title="Home" navigation={navigation} />
              {/* Content */}
              <View style={styles.view}>
                <Image source={{ uri: user.avatar }} style={styles.image} />
                <Text style={styles.text}>{user.first_name+ " "+ user.last_name}</Text>
                <Text style={styles.textEmail}>{user.email}</Text>
              </View>
            </View>
        //   }
        // </UserContext.Provider>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
  },
  view: {
    paddingTop: 40,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 20,
    padding: 10,
    marginTop: -40,
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textEmail: {
    color: '#ffffff',
    fontSize: 20,
  },
  loader: {
    height: '100%',
    width: '100%',
  },
  header: {
    padding: 20
  }
});

export default HomeScreen;
