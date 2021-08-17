import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Title {
  title: string;
  navigation: any;
}

const Header = ({ title, navigation }: Title) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {/* Left */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 name="bars" size={25} color={'#fff'} />
        </TouchableOpacity>
        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.text}>{title}</Text>
        </View>
        {/* Right */}
        <Image style={{ width: 30, height: 30, borderRadius: 10 }} source={require('../../../assets/Logo.jpg')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  menu: {
    //marginRight: 100
  },
});

export default Header;
