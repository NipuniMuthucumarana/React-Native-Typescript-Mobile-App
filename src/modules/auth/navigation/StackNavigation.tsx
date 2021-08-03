import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../auth/screens/SigninScreen';
import SignUp from '../../auth/screens/SignupScreen';
import Home from '../../home/screens/HomeScreen';
import Dashboard from '../../dashboard/screens/DashboardScreen';

type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
