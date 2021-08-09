import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native';

import DashboardService from '../service/DashboardService';

const DashboardScreen = ({ navigation} : any) => {
  type Data =  {
    avatar: string,
    email: string,
    first_name: number,
    id: number,
    last_name: string
  }

  const [users, setUsers] = useState<Data>();

  useEffect(() => {
    async function getData() {
      const response = await DashboardService(); 
      setUsers(response)
    }
    getData();
  }, [])

  console.log('users:', users)
  
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={users}
          contentContainerStyle ={{
            padding:20,
            paddingTop: StatusBar.currentHeight || 42
          }}
          renderItem={({item}: {item:Data}) => {
            return (
              <Pressable
                style={styles.view}
                onPress={() => navigation.navigate('Profile', {item: item})
              }>
                <Image 
                  source={{uri: item.avatar}} 
                  style={{width: 70, height:70, borderRadius: 70, marginRight: 10}}
                />
                <Text style={styles.text}>{item.first_name}</Text>
                <Text> </Text>
                <Text style={styles.text}>{item.last_name}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    fontFamily: 'Lato-LightItalic',
  },
  view: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#rgba(255,255,255,0.8)',
    borderRadius: 12,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
  }
});

export default DashboardScreen;
