import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, useWindowDimensions, TouchableOpacity } from 'react-native';
//import Animated, { Easing } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { Permission, PERMISSION_TYPE } from '../services/AppPermissionService';

export default function Home({ navigation }: any) {
  // const { Value, event, block, cond, eq, set, Clock, startClock, stopClock, debug, timing, clockRunning, interpolateNode, Extrapolate } =
  //   Animated;
  const { Value, cond, eq, set } = Animated;

  useEffect(() => {
    async function appPermission() {
      await Permission.checkPermission(PERMISSION_TYPE.location);
    }
    // Execute the created function directly
    appPermission();
  }, []);

  // type Adaptable<T> =
  //   | T
  //   | AnimatedNode<T>
  //   | ReadonlyArray<T | AnimatedNode<T> | ReadonlyArray<T | AnimatedNode<T>>>;

  // interface TimingConfig {
  //   toValue: Adaptable<number>;
  //   duration: Adaptable<number>;
  //   easing: EasingNodeFunction;
  // }

  // function runTiming({clock, value, dest}:any) {
  //   const state = {
  //     finished: new Value(0),
  //     position: new Value(0),
  //     time: new Value(0),
  //     frameTime: new Value(0)
  //   };

  //   const config = {
  //     duration: 1000,
  //     toValue: new Value(0),
  //     easing: Easing.inOut(Easing.ease)
  //   };

  //   return block([
  //     cond(clockRunning(clock), 0, [
  //       set(state.finished, 0),
  //       set(state.time, 0),
  //       set(state.position, value),
  //       set(state.frameTime, 0),
  //       set(config.toValue, dest),
  //       startClock(clock)
  //     ]),
  //     timing(clock, state, config),
  //     cond(state.finished, debug('stop clock', stopClock(clock))),
  //     state.position
  //   ]);
  // }

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  let buttonOpacity = new Value(1);
  const onStateChange = () => [
    {
      nativeEvent: ({ state }: any) => cond(eq(state, State.END), set(buttonOpacity, 0)),
    },
  ];

  // const buttonY = interpolateNode(Number(buttonOpacity), {
  //   inputRange: [0, 1],
  //   outputRange: [100, 0],
  //   extrapolate: Extrapolate.CLAMP
  // });

  // const bgY = interpolateNode((Number(buttonOpacity)), {
  //   inputRange: [0, 1],
  //   outputRange: [-windowHeight / 3, 0],
  //   extrapolate: Extrapolate.CLAMP
  // });
  return (
    <View style={{ width: windowWidth - 200, height: windowHeight - 50 }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground style={{ width: windowWidth, height: windowHeight }} source={require('../../../../assets/welcome.jpg')}>
        <View style={styles.view}>
          <Text style={styles.text}>Welcome !</Text>
        </View>
        <View style={styles.position}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <TapGestureHandler onHandlerStateChange={onStateChange}>
              <Animated.View style={{ ...styles.button, opacity: buttonOpacity }}>
                <Text style={styles.buttonText}>Sign In</Text>
              </Animated.View>
            </TapGestureHandler>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <TapGestureHandler onHandlerStateChange={onStateChange}>
              <Animated.View style={{ ...styles.button, opacity: buttonOpacity }}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </Animated.View>
            </TapGestureHandler>
          </TouchableOpacity>
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
