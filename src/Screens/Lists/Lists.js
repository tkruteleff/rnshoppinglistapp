import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AddList from '../../Components/Lists/AddList/AddList';
import ListView from '../../Components/Lists/ListView/ListView';

import firestore from '@react-native-firebase/firestore';

const Lists = () => {
  const [shoppingLists, setShoppingLists] = useState([]);

  const addListHandler = newList => {
    setShoppingLists(currentLists => [...currentLists, newList]);

    firestore()
      .collection('lists')
      .add(newList)
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <>
      <View>
        <AddList onAddNewList={addListHandler} />
      </View>
      <View style={styles.listsView}>
        <ListView />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listsView: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Lists;
