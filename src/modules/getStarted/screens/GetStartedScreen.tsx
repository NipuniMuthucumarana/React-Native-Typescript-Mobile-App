import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, useWindowDimensions, TouchableOpacity } from 'react-native';
//import Animated, { Easing } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { Permission, PERMISSION_TYPE } from '../services/AppPermissionService';
import PushNotification, { Importance } from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApp } from '../../../shared/AppContext';

export default function Home({ navigation }: any) {
  const { Value, cond, eq, set } = Animated;
  const { currentUser, isAuthnticated } = useApp();
  // const [user, setUser] = useState<User[]>([])
  // const [isAuthnticated, setIsAuthnticated] = useState<boolean>(false)

  useEffect(() => {
    appPermission();
    //getData();
  }, []);

  async function appPermission() {
    createChannel();
    await Permission.checkPermission(PERMISSION_TYPE.location);
  }

  // async function getData() {
  //   try {
  //     const userInfo:any = await AsyncStorage.getItem('user');
  //     if(userInfo === null) {
  //       setIsAuthnticated(false);
  //     } else {
  //       setUser(userInfo)
  //       setIsAuthnticated(true)
  //       console.log('logged-user', userInfo);
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  let buttonOpacity = new Value(1);
  const onStateChange = () => [
    {
      nativeEvent: ({ state }: any) => cond(eq(state, State.END), set(buttonOpacity, 0)),
    },
  ];

  return (
    <View style={{ width: windowWidth - 200, height: windowHeight - 50 }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground style={{ width: windowWidth, height: windowHeight }} source={require('../../../../assets/welcome.jpg')}>
        <View style={styles.view}>
          <Text style={styles.text}>Welcome !</Text>
        </View>
        <View style={styles.position}>
          <TouchableOpacity onPress={isAuthnticated ? (() => {navigation.navigate('DrawerRoutes', {email:currentUser.email})}) : () => navigation.navigate('SignIn')}>
            <TapGestureHandler onHandlerStateChange={onStateChange}>
              <Animated.View style={{ ...styles.button, opacity: buttonOpacity }}>
                <Text style={styles.buttonText}>Continue</Text>
              </Animated.View>
            </TapGestureHandler>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <TapGestureHandler onHandlerStateChange={onStateChange}>
              <Animated.View style={{ ...styles.button, opacity: buttonOpacity }}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </Animated.View>
            </TapGestureHandler>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    //fontStyle: 'italic',
    justifyContent: 'center',
    fontFamily: 'Lato-LightItalic',
  },
  view: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  position: {
    marginTop: 400,
  },
  button: {
    marginLeft: 40,
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c313a',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
