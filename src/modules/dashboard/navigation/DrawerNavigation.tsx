import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import DashboardScreen from '../../dashboard/screens/DashboardScreen';
import HomeScreen from '../../getStarted/screens/GetStartedScreen';
import GetStartedScreen from '../../getStarted/screens/GetStartedScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Content, Icon, Header, Body } from 'native-base'

// type RootStackParamList = {
//   Home: undefined;
//   SignIn: undefined;
//   SignUp: undefined;
//   Dashboard: undefined;
// };

//const Drawer = createDrawerNavigator();
const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/DrawerIcons/Unsure-Programmer-Logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const DrawerNavigation = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  Dashboard: {
    screen: DashboardScreen
  }
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


// const DrawerNavigation = createDrawerNavigator(
//   {
//     Dashboard:DashboardScreen,
//     Getstarted: GetStartedScreen
//   },
//   {
//     hideStatusBar: true,
//     DrawerBackgroundColor: 
//   }

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    //     <Drawer.Screen name="Getstarted" component={GetStartedScreen} />
    //   </Drawer.Navigator>
    // // 
 // );
 const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})

export default DrawerNavigation;
