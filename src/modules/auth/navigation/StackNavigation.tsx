import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import SigninScreen from '../../auth/screens/SigninScreen';
import SignupScreen from '../../auth/screens/SignupScreen';
import GetStartedScreen from '../../getStarted/screens/GetStartedScreen';
import HomeScreen from '../../home/screens/HomeScreen'
import DashboardScreen from '../../dashboard/screens/DashboardScreen';
import ProfileScreen from '../../dashboard/screens/ProfileScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

type RootStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Drawer: undefined;
};

// export type StackNavProps<T extends keyof RootStackParamList> = {
//   navigation: StackNavigationProp<RootStackParamList, T>;
//   route: RouteProp<RootStackParamList, T>;
// };

//const Stack = createStackNavigator<RootStackParamList>();
const Stack = createStackNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
        drawerPosition='left'
        drawerType='front'
        edgeWidth={500}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250,
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#455a64'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          }
        }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title:'Home',
          drawerIcon: ({focused}) => (
            <FontAwesome5
              name='house-user'
              size={focused ? 25 : 20}
              color={focused ? '#0080ff' : '#999999'}
            />
          )
        }}
      />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}

const StackNavigation =  ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="DrawerRoutes"
          component={DrawerRoutes}
          options={{ 
            headerShown: false 
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="SignIn"
          component={SigninScreen}
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
