import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AddItems from './../../Components/Items/AddItems/AddItems';
import ListItems from './../../Components/Items/ListItems/ListItems';

import firestore from '@react-native-firebase/firestore';

const Groceries = props => {
  const {listName} = props.route.params;

  const addItemHandler = newItem => {
    console.log(newItem);

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
