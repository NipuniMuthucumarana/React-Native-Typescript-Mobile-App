import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native';
import EditUserForm from '../components/EditUserForm';
import { RouteProp } from '@react-navigation/native';

type ParamList = {
  EditUser: {
    id: string;
    name: string;
    job: string;
  };
};

type EditUserScreenRouteProp = RouteProp<ParamList, 'EditUser'>;

type Props = {
  route: EditUserScreenRouteProp;
};

const EditUserScreen = ({ route }: Props) => {
    const {id} = route.params;
    const {name} = route.params;
    const {job} = route.params;
    const category: string = 'Edit User';
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <EditUserForm category={category} id={id} previousName={name} previousJob={job}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    signupText: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 16,
    },
    signupButton: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500',
    },
  });
  

export default EditUserScreen;
