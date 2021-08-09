import React from 'react'
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type StackParams = {
    Profile: {
      item: {
        avatar: string;
        email: string,
        first_name: number,
        id: number,
        last_name: string
      };
    };
};

type StackNavProps = StackNavigationProp<StackParams, 'Profile'>;
type StackRouteProps = RouteProp<StackParams, 'Profile'>;

type Props = {
  navigation: StackNavProps;
  route: StackRouteProps;
};

const ProfileScreen = ({navigation, route}: Props) => {
    const {item} = route.params;
    console.log('propData: ', item);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={styles.view}>
              <Image 
                source={{uri: item.avatar}} 
                style={styles.image}
              />
              <Text></Text>
              <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text}>{item.first_name}</Text>
                  <Text> </Text>
                  <Text style={styles.text}>{item.last_name}</Text>
              </View>
              <Text style={styles.textEmail}>{item.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      //justifyContent: 'center',
      paddingTop: 60
    },
    view: {
      //backgroundColor: '#455a64',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 90, 
      height:90, 
      borderRadius: 70, 
      marginRight: 10,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textEmail: {
        color: '#ffffff',
    }
})

export default ProfileScreen;