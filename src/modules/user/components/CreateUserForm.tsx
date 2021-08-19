import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreateUserService from '../services/CreateUserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as yup from 'yup';

const createUserSchema = yup.object({
  name: yup.string().required().min(4),
  job: yup.string().required().min(4),
  // rating: yup.string().required().test('is-num-1-5','Rating must be a number 1-5',
  // (val)=> {
  //   return parseInt(val) < 6 && parseInt(val) > 0
  // })
});

interface Category {
  category: string;
}

type User = {
  name: string;
  job: string;
  id: string;
};

const CreateUserForm = (props: Category) => {
  const { category } = props;

  const navigation = useNavigation();
  const [users, setUsers] = useState<User[]>([]);
  //const [selectedValue, setSelectedValue] = useState<string>('Job');

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData();
    });
  }, []);

  const getData = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo !== null) {
        setUsers(JSON.parse(userInfo));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', job: '' }}
        validationSchema={createUserSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          Keyboard.dismiss();
          CreateUserService(values.name, values.job, users);
        }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Name"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              onChangeText={props.handleChange('name')}
              defaultValue={props.values.name}
              onBlur={props.handleBlur('name')}
            />
            <Text style={styles.error}>{props.touched.name && props.errors.name}</Text>
            {/* <TextInput
              style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Job"
              placeholderTextColor="#ffffff"
              onChangeText={props.handleChange('job')}
              defaultValue={props.values.job}
              onBlur={props.handleBlur('job')}
            /> */}
            <View style={styles.outerBox}>
              <Picker
                selectedValue={props.values.job}
                style={styles.pickerBox}
                mode='dropdown'
                onValueChange={props.handleChange('job')}
              >
                <Picker.Item label="Engineer" value="Engineer" />
                <Picker.Item label="Doctor" value="Doctor" />
                <Picker.Item label="Manager" value="Manager" />
                <Picker.Item label="Banker" value="Banker" />
                <Picker.Item label="Teacher" value="Teacher" />
              </Picker>
            </View>
            <Text style={styles.error}>{props.touched.job && props.errors.job}</Text>
            <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>{category}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
  pickerBox: {
    width: 280,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  outerBox: {
    width: 300,
    height: 45,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 2,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    justifyContent: 'center',
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
  error: {
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default CreateUserForm;

// interface Category {
//   category: string;
// }

// type User = {
//   name: string,
//   job: string,
//   id: string
// }

// const CreateUserForm = (props: Category) => {
//   const { category } = props;

//   const navigation = useNavigation();
//   const [name, setName] = useState<string>('');
//   const [job, setJob] = useState<string>('');
//   const [users, setUsers] = useState<User[]>([])

//   useEffect(() => {
//     navigation.addListener('focus', () => {
//       getData();
//     });
//   }, []);

//   useEffect(() => {
//       getData();
//   }, [name]);

//   const getData = async () => {
//     try {
//       const userInfo = await AsyncStorage.getItem('userInfo');
//       if(userInfo !== null) {
//         setUsers(JSON.parse(userInfo));
//       }
//     } catch (error) {
//       console.log(error);
//     }
// };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.inputBox}
//         underlineColorAndroid="rgba(0,0,0,0)"
//         placeholder="Name"
//         placeholderTextColor="#ffffff"
//         selectionColor="#fff"
//         onChangeText={(text) => setName(text)}
//         defaultValue={name}
//       />
//       <TextInput
//         style={styles.inputBox}
//         underlineColorAndroid="rgba(0,0,0,0)"
//         placeholder="Job"
//         placeholderTextColor="#ffffff"
//         onChangeText={(text) => setJob(text)}
//         defaultValue={job}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => {
//           CreateUserService({ name, job, users });
//           setName('');
//           setJob('');
//           Keyboard.dismiss();
//         }}>
//         <Text style={styles.buttonText}>{category}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   inputBox: {
//     width: 300,
//     backgroundColor: 'rgba(255, 255,255,0.2)',
//     borderRadius: 25,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     color: '#ffffff',
//     marginVertical: 10,
//   },
//   button: {
//     width: 300,
//     backgroundColor: '#1c313a',
//     borderRadius: 25,
//     marginVertical: 10,
//     paddingVertical: 13,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#ffffff',
//     textAlign: 'center',
//   },
// });

// export default CreateUserForm;
