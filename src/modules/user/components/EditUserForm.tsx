import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditUserService from '../services/EditUserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JsonObjectExpressionStatement } from 'typescript';

interface Category {
  category: string;
  id: string;
  previousName: string;
  previousJob: string;
}

const CreateUserForm = (props: Category) => {
  const { category } = props;
  const { id } = props;
  const { previousName } = props;
  const { previousJob } = props;

  const navigation = useNavigation();
  const [name, setName] = useState<string>(previousName);
  const [job, setJob] = useState<string>(previousJob);
  //const [users, setUsers] = useState<Response>()
  const [users, setUsers] = useState<
      Array<{
          name: string,
          job: string,
          id: string
      }>
  >([])
  
  // interface Response {
  //   name: string,
  //   job: string,
  //   id: string,
  // };
  
  useEffect(() => { 
    const getData = async () => {
        try {
          const userInfo = await AsyncStorage.getItem('userInfo');
          if(userInfo !== null) {
            setUsers(JSON.parse(userInfo));
          }
        } catch (error) {
          console.log(error);
        }
    };
    navigation.addListener('focus', () => {
      getData();
    });
  }, []);

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Name"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            onChangeText={(text) => setName(text)}
            defaultValue={name}
        />
        <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Job"
            placeholderTextColor="#ffffff"
            onChangeText={(text) => setJob(text)}
            defaultValue={job}
        />      
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              EditUserService({ id, name, job, users });
              Keyboard.dismiss(); 
              setName('');
              setJob('');
            }}>
            <Text style={styles.buttonText}>{category}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default CreateUserForm;
