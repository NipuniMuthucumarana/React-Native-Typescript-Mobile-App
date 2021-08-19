import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomDrawerItem from './CustomDrawerItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApp } from '../../../shared/AppContext';
 type User = {
   setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
   setIsAuthnticated: React.Dispatch<React.SetStateAction<boolean>>
 }

const CustomDrawerContent = ({ navigation }: any) => {
  const { setCurrentUser, setIsAuthnticated } = useApp<User>();
  const [selectedTab, setSelectedTab] = useState<String>("Home")
  return (
    <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
      <View style={Styles.view}>
        {/* close */}
        <View style={Styles.close}>
          <TouchableOpacity style={Styles.crossButton} onPress={() => navigation.closeDrawer()}>
            <FontAwesome5 name="times" size={25} color={'#000000'} />
          </TouchableOpacity>
        </View>
        {/* profile */}
        <TouchableOpacity style={Styles.tabs} onPress={() => console.log('Profile')}>
          <Image style={Styles.logo} source={require('../../../../assets/Logo.jpg')} />
          <View style={Styles.textView}>
            <Text style={Styles.text}>My App</Text>
            <Text>View Your Profile</Text>
          </View>
        </TouchableOpacity>
        {/* drawer content */}
        <View style={Styles.container}>
          <View style={Styles.drawerView}>
            <CustomDrawerItem label="Home" icon="home" isFocused={selectedTab=='Home'} onPress={()=> {setSelectedTab('Home'), navigation.navigate("Home")}}/>
          </View>
          <View style={Styles.drawerView}>
            <CustomDrawerItem label="Dashboard" icon="columns" isFocused={selectedTab=='Dashboard'} onPress={()=> {setSelectedTab('Dashboard'), navigation.navigate("Dashboard")}} />
          </View>
          <View style={Styles.drawerView}>
            <CustomDrawerItem label="User Details" icon="user-alt" isFocused={selectedTab=='User Details'} onPress={()=> {setSelectedTab('User Details'), navigation.navigate("UserDetails")}} />
          </View>
          <View style={Styles.drawerView}>
            <CustomDrawerItem label="Create User" icon="user-plus" isFocused={selectedTab=='Create User'} onPress={()=> {setSelectedTab('Create User'), navigation.navigate("CreateUser")}} />
          </View>
          <View style={{ marginTop: 250}}>
            <CustomDrawerItem label="Log Out" icon="sign-out-alt" isFocused={selectedTab=='Log Out'} onPress={()=> {setSelectedTab('Log Out'), navigation.navigate("GetStarted"), setCurrentUser(null), setIsAuthnticated(false)}} />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const Styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
  },
  close: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  crossButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 50, 
    height: 50, 
    borderRadius: 10
  },
  textView: {
    marginLeft: 20,
  },
  container: {
    marginTop: 40
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  drawerView: {
    //flex:1,
    marginTop: 10,
  }
});

export default CustomDrawerContent;
