import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import AddList from './src/Components/AddList/AddList';
import ListView from './src/Components/Lists/ListView/ListView';

import firestore from '@react-native-firebase/firestore';

const App: () => React$Node = () => {
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
    <View style={styles.mainScreen}>
      <Text style={styles.titleText}>Shopping List</Text>
      <View>
        <AddList onAddNewList={addListHandler} />
      </View>
      <View style={styles.listsView}>
        <ListView />
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

export default App;
