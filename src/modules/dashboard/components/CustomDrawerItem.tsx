import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  label: string;
  icon: string;
  isFocused: boolean;
  onPress: any;
}

const CustomDrawerItem = ({ label, icon, isFocused, onPress }: Props) => {
  return (
    <TouchableOpacity style={{ ...styles.tab, backgroundColor: isFocused ? '#D3D3D3' : null }} onPress={onPress}>
      <FontAwesome5 name={icon} size={20} color={'#000'} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10,
  },
  text: {
    marginLeft: 40,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default CustomDrawerItem;
