import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import HomeScreen from '../../home/screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import CreateUserScreen from '../../user/screens/CreateUserScreen';
import UserDetailScreen from '../../user/screens/UserDetailsScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomDrawerContent from '../components/CustomDrawerContent'
import Animated from 'react-native-reanimated';

type RootDrawerParamList = {
  Home: {
    email: string;
  };
};
type RootStackParamList = {
    Home: undefined;
    Dashboard: undefined;
    CreateUser: undefined;
    UserDetails: undefined;
    LogOut: undefined;
};
type HomeScreenRouteProp = RouteProp<RootDrawerParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
};


const Drawer = createDrawerNavigator();

const CustomDrawer = ({ route }: Props) => {
  const { email } = route.params;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0,1],
    outputRange: [1,0.8]
  })
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0,1],
    outputRange: [0,26]
  })
  const animatedStyle = {borderRadius, transform: [{scale}]}
  return (
    <View
      style={Styles.view}
    >
      <Drawer.Navigator
        drawerType='slide'
        overlayColor='transparent'
        drawerStyle={Styles.drawer}
        sceneContainerStyle={Styles.container}
        initialRouteName= 'Home'
        screenOptions={{
          //headerShown: true,
          swipeEnabled: true,
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
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress)
          }, 0)

          return (
            <CustomDrawerContent 
              navigation ={props.navigation}
            />
          )
        }}
      >
        <Drawer.Screen name='Home'>
          {props => <HomeScreen {...props} email= {email} drawerAnimationStyle={animatedStyle}/>}
        </Drawer.Screen>
        <Drawer.Screen name='Dashboard'>
          {props => <DashboardScreen {...props} drawerAnimationStyle={animatedStyle}/>}
        </Drawer.Screen>
        <Drawer.Screen name="CreateUser">
          {props => <CreateUserScreen {...props} drawerAnimationStyle={animatedStyle}/>}
        </Drawer.Screen>
        <Drawer.Screen name="UserDetails">
          {props => <UserDetailScreen {...props} drawerAnimationStyle={animatedStyle}/>}
        </Drawer.Screen>
        <Drawer.Screen name="LogOut">
          {props => <UserDetailScreen {...props} drawerAnimationStyle={animatedStyle}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

const Styles = StyleSheet.create ({
  view: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  drawer: {
    flex: 1,
    width:'65%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: 'transparent'
  }
})

export default CustomDrawer;