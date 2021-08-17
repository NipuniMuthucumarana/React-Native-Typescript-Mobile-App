import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, Pressable, FlatList, Image, ActivityIndicator } from 'react-native';
import Animated from 'react-native-reanimated'
import { ShowNotification, handleScheduleNotification, handleCancel } from '../../../shared/services/NotificationService'

import DashboardService from '../service/DashboardService';
import Header from '../../../shared/components/Header'

const DashboardScreen = ({ drawerAnimationStyle, navigation }: any) => {
  useEffect(() => {
    navigation.addListener('focus', () => {
      getData();
    });
  }, []);

  type Data = {
    avatar: string;
    email: string;
    first_name: number;
    id: number;
    last_name: string;
  };

  const [users, setUsers] = useState<
    | Array<{
        avatar: string;
        email: string;
        first_name: number;
        id: number;
        last_name: string;
      }>
    | any
  >([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  async function getData() {
    const response = await DashboardService(page);
    setLoading(false);
    setUsers(users.concat(response));
  }

  console.log('users:', users);

  const handleLoadMore = async () => {
    setPage(page + 1);
    await getData();
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  return (
    <Animated.View style={{...styles.container, ...drawerAnimationStyle}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.header}>
        <Header title="Dashboard" navigation={navigation} />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={users}
        contentContainerStyle={{
          padding: 20,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
        renderItem={({ item, index }: { item: Data; index:number }) => {
          return (
            <Pressable style={styles.view} onPress={() => {navigation.navigate('Profile', { item: item }); ShowNotification('Hello', 'Welcome to '+item.first_name+"'s Profile", index)}}>
              <Image source={{ uri: item.avatar }} style={{ width: 70, height: 70, borderRadius: 70, marginRight: 10 }} />
              <Text style={styles.text}>{item.first_name+ ' '+item.last_name}</Text>
            </Pressable>
          );
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    padding: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Lato-LightItalic',
  },
  view: {
    flexDirection: 'row',
    padding: 30,
    marginBottom: 20,
    backgroundColor: '#rgba(255,255,255,0.5)',
    borderRadius: 12,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
  },
  loading: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
