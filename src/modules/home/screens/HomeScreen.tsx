import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.view}>
        <Image source={{ uri: 'https://reqres.in/img/faces/4-image.jpg' }} style={styles.image} />
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 70,
    marginRight: 10,
    marginTop: 40,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textEmail: {
    color: '#ffffff',
  },
});

export default HomeScreen;
