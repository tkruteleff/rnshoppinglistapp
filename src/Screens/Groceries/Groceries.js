import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AddItems from './../../Components/Items/AddItems/AddItems';
import ListItems from './../../Components/Items/ListItems/ListItems';
import Wrapper from './../../hoc/Wrapper';

import firestore, {firebase} from '@react-native-firebase/firestore';

const Groceries = props => {
  const {listName} = props.route.params;
  const docId = props.route.params.docId.key.toString();

  const addItemHandler = newItem => {
    const docId = props.route.params.docId.key.toString();

    // Currently posts arrays into shoppingItems array. Should be objects.
    /*firestore()
      .collection('lists')
      .doc(docId)
      .update({
        shoppingItems: firebase.firestore.FieldValue.arrayUnion(newItem),
      })
      .then(() => {
        console.log('Item updated on ', docId);
      });*/
    firestore()
      .collection('lists')
      .doc(docId)
      .collection('shoppingItems')
      .add(newItem)
      .then(() => {
        console.log('Subcollection added');
      });
  };

  return (
    <View>
      <Wrapper navigate={props.navigation} />
      <View style={styles.mainScreen}>
        <Text style={styles.titleText}>{JSON.stringify(listName)}</Text>
      </View>
      <View>
        <AddItems onAddItemHandler={addItemHandler} />
      </View>
      <View style={styles.listsView}>
        <ListItems docId={docId} />
      </View>
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
