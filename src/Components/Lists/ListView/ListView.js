import React from 'react';
import {StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';

const ListView = props => {
  const openListHandler = () => {};

  return (
    <>
      <Text style={styles.listsViewText}>Lists</Text>
      <FlatList
        style={styles.FlatList}
        data={props.shoppingList}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.FlatListView}
            onPress={openListHandler}>
            <Text style={styles.FlatListViewText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listsViewText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  FlatList: {
    width: '100%',
    height: '100%',
    marginTop: 5,
  },
  FlatListView: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
  },
  FlatListViewText: {
    fontWeight: 'bold',
  },
});

export default ListView;
