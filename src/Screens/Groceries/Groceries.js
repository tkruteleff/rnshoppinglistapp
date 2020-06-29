import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AddItems from './../../Components/Items/AddItems/AddItems';
import ListItems from './../../Components/Items/ListItems/ListItems';

import firestore, {firebase} from '@react-native-firebase/firestore';

const Groceries = props => {
  const {listName} = props.route.params;
  const docId = props.route.params.docId.key.toString();

  const addItemHandler = newItem => {
    const docId = props.route.params.docId.key.toString();
    firestore()
      .collection('lists')
      .doc(docId)
      .update({
        shoppingItems: firebase.firestore.FieldValue.arrayUnion(newItem),
      })
      .then(() => {
        console.log('Item updated on ', docId);
      });
  };

  return (
    <View>
      <Text>{JSON.stringify(listName)}</Text>
      <AddItems onAddItemHandler={addItemHandler} />
      <ListItems docId={docId} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Groceries;
