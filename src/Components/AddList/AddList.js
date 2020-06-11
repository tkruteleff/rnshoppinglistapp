import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddList = () => {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder="Grocery List" />
      <TouchableOpacity style={styles.button}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    borderRadius: 1,
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
  },
});

export default AddList;
