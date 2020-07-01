import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddItems = props => {
  const [enteredItem, setEnteredItem] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');

  const itemInputHandler = enteredText => {
    setEnteredItem(enteredText);
  };

  const quantityInputHandler = enteredText => {
    setEnteredQuantity(enteredText);
  };

  const addItemHandler = () => {
    // eslint-disable-next-line prettier/prettier
    const itemId = (((1+Math.random()) * 0x10000)|0).toString(16).substring(1);

    const newItem = {
      id: itemId,
      name: enteredItem,
      amount: enteredQuantity,
      checked: false,
    };

    setEnteredItem('');
    setEnteredQuantity('');

    props.onAddItemHandler(newItem);
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Add item"
        onChangeText={itemInputHandler}
        value={enteredItem}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Quantity"
        keyboardType="numeric"
        onChangeText={quantityInputHandler}
        value={enteredQuantity}
      />
      <TouchableOpacity style={styles.button} onPress={addItemHandler}>
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
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

export default AddItems;
