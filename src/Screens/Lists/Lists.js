import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import AddList from '../../Components/Lists/AddList/AddList';
import ListView from '../../Components/Lists/ListView/ListView';

import firestore from '@react-native-firebase/firestore';

const Lists = props => {
  const [shoppingLists, setShoppingLists] = useState([]);

  const addListHandler = newList => {
    setShoppingLists(currentLists => [...currentLists, newList]);

    firestore()
      .collection('lists')
      .add(newList)
      .then(() => {
        console.log('List added!');
      });
  };

  return (
    <View>
      <View style={styles.mainScreen}>
        <Text style={styles.titleText}>Shopping List</Text>
      </View>
      <View>
        <AddList onAddNewList={addListHandler} />
      </View>
      <View style={styles.listsView}>
        <ListView navigation={props.navigation} />
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

export default Lists;
