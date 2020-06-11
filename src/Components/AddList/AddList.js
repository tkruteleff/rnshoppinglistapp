import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddList = props => {
  const [enteredList, setEnteredList] = useState('');

  const listInputHandler = enteredText => {
    setEnteredList(enteredText);
  };

  const addListHandler = () => {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();

    today = day + '.' + month + '.' + year;

    const newList = {
      id: Math.random(),
      name: enteredList,
      active: true,
      dateCreated: today,
    };

    setEnteredList('');

    props.onAddNewList(newList);
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Grocery List"
        onChangeText={listInputHandler}
        value={enteredList}
      />
      <TouchableOpacity style={styles.button} onPress={addListHandler}>
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
