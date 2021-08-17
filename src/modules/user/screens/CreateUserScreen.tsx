import React from 'react'
import { Text, View, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import CreateUserForm from '../components/CreateUserForm';
import Animated from 'react-native-reanimated'
import Header from '../../../shared/components/Header'

const CreateUserScreen = ({drawerAnimationStyle, navigation}: any) => {
    const category: string = 'Create User';
    
    return (
      <Animated.View style={{...styles.container, ...drawerAnimationStyle}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.header}>
          <Header title="Create User" navigation={navigation}/>
        </View>
        <CreateUserForm category={category} /> 
      </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
    },
    header: {
      padding: 20,
    }
  });
  

export default CreateUserScreen;
