import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

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
      <View style={styles.mainScreen}>
        <Text style={styles.titleText}>{JSON.stringify(listName)}</Text>
      </View>
      <View>
        <AddItems onAddItemHandler={addItemHandler} />
      </View>
      <ScrollView style={styles.listsView}>
        <ListItems docId={docId} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    padding: 25,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listsView: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Groceries;
