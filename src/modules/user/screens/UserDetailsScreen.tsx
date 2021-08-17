import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Header from '../../../shared/components/Header';
import DeleteUserService from '../services/DeleteUserService';
import Loading from '../../home/components/Loading'

const UserDetailScreen = ({ drawerAnimationStyle, navigation }: any) => {
  const offset: number = 0;
  const [users, setUsers] = useState<
    Array<{
      name: string;
      job: string;
      id: string;
    }>
  >();
  const [limit, setLimit] = useState(4);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData();
    });
  }, []);

  const getData = async () => {
    try {
      const info = await AsyncStorage.getItem('userInfo');
      if (info !== null) {
        setLength(JSON.parse(info).length);
        setUsers(JSON.parse(info));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const items = users?.map((item, index) => {
    if (index + 1 <= limit) {
      console.log('users:', item);
      return (
        <View key={item.id} style={styles.view}>
          <Text style={styles.text}>ID: {item.id}</Text>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={[styles.text, { color: '#00f' }]}>Job - {item.job}</Text>
          <View style={{ flexDirection: 'row', marginLeft: 210, justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate('EditUser', { id: item.id, name: item.name, job: item.job })}>
              <Text style={styles.button}>EDIT</Text>
            </TouchableOpacity>
            <Text style={styles.button}>|</Text>
            <TouchableOpacity
              onPress={async () => {
                setLoading(true)
                await DeleteUserService(item.id, item.name);
                setLoading(false)
                getData();
              }}>
              <Text style={styles.button}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  });

  return (
    <Animated.View style={{ ...styles.container, ...drawerAnimationStyle }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      {loading ? (
        <Loading show={loading} />
      ) : (
        <>
      <View style={styles.header}>
        <Header title="User Details" navigation={navigation} />
      </View>
      <ScrollView
        onMomentumScrollEnd={(e) => {
          const scrollPosition = e.nativeEvent.contentOffset.y;
          const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
          const contentHeight = e.nativeEvent.contentSize.height;
          const isScrolledToBottom = scrollViewHeight + scrollPosition;

          if (isScrolledToBottom >= contentHeight - 50 && limit <= length) {
            setLimit(limit + 1);
          }
        }}>
        <View>{items}</View>
      </ScrollView>
      </>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    fontFamily: 'Lato-LightItalic',
  },
  view: {
    padding: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#rgba(255,255,255,0.2)',
    borderRadius: 12,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
  },
  button: {
    //marginLeft: 180,
    color: '#ffffff',
  },
  header: {
    padding: 20,
  },
});

export default UserDetailScreen;
