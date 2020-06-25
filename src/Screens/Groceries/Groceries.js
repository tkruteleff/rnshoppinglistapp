import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AddItems from './../../Components/Items/AddItems/AddItems';

import firestore from '@react-native-firebase/firestore';

const Groceries = props => {
  const {listName} = props.route.params;

  const addItemHandler = newItem => {
    const docId = props.route.params.docId[0].key.toString();
    console.log('key', docId);
    firestore()
      .collection('lists')
      .doc(docId)
      .update({
        shoppingItems: {
          newItem,
        },
      })
      .then(() => {
        console.log('Item updated');
      });
  };

  return (
    <View>
      <Text>{JSON.stringify(listName)}</Text>
      <AddItems onAddItemHandler={addItemHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Groceries;
