import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
        <Image  style={{width:80, height: 100}}
            source={require('../../../../assets/Logo.jpg')}/>
        <Text style={styles.logoText}>Welcome to My app</Text>	
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
    }
});

export default Logo;
