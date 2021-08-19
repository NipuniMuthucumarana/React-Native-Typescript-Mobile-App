import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import SigninScreen from '../../auth/screens/SigninScreen';
import SignupScreen from '../../auth/screens/SignupScreen';
import GetStartedScreen from '../../getStarted/screens/GetStartedScreen';
import ProfileScreen from '../../dashboard/screens/ProfileScreen';
import EditUserScreen from '../../user/screens/EditUserScreen';
import CustomDrawer from '../../dashboard/navigation/CustomDrawer';
import HomeScreen from '../../home/screens/HomeScreen';

// import HomeScreen from '../../home/screens/HomeScreen';
// import DashboardScreen from '../../dashboard/screens/DashboardScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import CreateUserScreen from '../../user/screens/CreateUserScreen';
// import UserDetailScreen from '../../user/screens/UserDetailsScreen';

const Stack = createStackNavigator();

// type RootDrawerParamList = {
//   Home: {
//     email: {
//       email: string;
//     };
//   };
// };

// type HomeScreenRouteProp = RouteProp<RootDrawerParamList, 'Home'>;

// type RootStackParamList = {
//     Home: undefined;
//     Dashboard: undefined;
//     CreateUser: undefined;
//     UserDetails: undefined;
//     LogOut: undefined;
// };

// type Props = {
//   route: HomeScreenRouteProp;
// };


// const DrawerRoutes = ({ route }: Props) => {
//   const { email } = route.params;
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       drawerPosition="left"
//       drawerType="front"
//       edgeWidth={500}
//       hideStatusBar={false}
//       overlayColor="#00000090"
//       drawerStyle={{
//         backgroundColor: '#e6e6e6',
//         width: 250,
//       }}
//       screenOptions={{
//         headerShown: true,
//         swipeEnabled: true,
//         gestureEnabled: true,
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#455a64',
//         },
//         headerTintColor: '#ffffff',
//         headerTitleStyle: {
//           fontSize: 25,
//           fontWeight: 'bold',
//         },
//       }}>
//       <Drawer.Screen
//         name="Home"
//         component={HomeScreen}
//         initialParams={{ email: email }}
//         options={{
//           title: 'Home',
//           drawerIcon: ({ focused }) => <FontAwesome5 name="home" size={focused ? 25 : 20} color={focused ? '#0080ff' : '#999999'} />,
//         }}
//       />
//       <Drawer.Screen
//         name="Dashboard"
//         component={DashboardScreen}
//         options={{
//           title: 'Dashboard',
//           drawerIcon: ({ focused }) => <FontAwesome5 name="columns" size={focused ? 25 : 20} color={focused ? '#0080ff' : '#999999'} />,
//         }}
//       />
//       <Drawer.Screen
//         name="CreateUser"
//         component={CreateUserScreen}
//         options={{
//           title: 'Create User',
//           drawerIcon: ({ focused }) => <FontAwesome5 name="user-plus" size={focused ? 25 : 20} color={focused ? '#0080ff' : '#999999'} />,
//         }}
//       />
//       <Drawer.Screen
//         name="UserDetails"
//         component={UserDetailScreen}
//         options={{
//           title: 'User Details',
//           drawerIcon: ({ focused }) => <FontAwesome5 name="user" size={focused ? 25 : 20} color={focused ? '#0080ff' : '#999999'} />,
//         }}
//       />
//       <Drawer.Screen
//         name="LogOut"
//         component={UserDetailScreen}
//         options={{
//           title: 'Log Out',
//           drawerIcon: ({ focused }) => (
//             <FontAwesome5 name="sign-out-alt" size={focused ? 25 : 20} color={focused ? '#0080ff' : '#999999'} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen
          name="DrawerRoutes"
          component={CustomDrawer}
          options={{
            headerShown: false,
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
          name="Home"
          component={HomeScreen}
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
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#455a64',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="EditUser"
          component={EditUserScreen}
          options={{
            headerShown: true,
            gestureEnabled: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#455a64',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
