import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import ListItem from './ListItem/ListItem';

const ListItems = props => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('lists')
      .doc(props.docId)
      .collection('shoppingItems')
      .onSnapshot(querySnapshot => {
        const items = [];

        querySnapshot.forEach(documentSnapshot => {
          items.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setItems(items);
        setLoading(false);
      });
    return () => subscriber();
  }, [props.docId]);

  const checkItemHandler = item => {
    firestore()
      .collection('lists')
      .doc(props.docId)
      .collection('shoppingItems')
      .doc(item.key)
      .update({
        checked: true,
      })
      .then(() => {
        console.log('checked updated for ', item.key);
      });
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  const deleteItemHandler = item => {
    // Delete item function here
    console.log('Log from deleteItemHandler', item);
    /*firestore()
      .collection('lists')
      .doc(props.docId)
      .collection('shoppingItems')
      .doc(item.key)
      .delete()
      .then(() => {
        console.log('Item deleted ', item.key);
      });*/
  };

  const updateItemHandler = item => {
    // Update item function here
    console.log('Hello from updateItemHandler');
  };

  return (
    <View>
      <FlatList
        style={styles.FlatList}
        data={items}
        renderItem={({item, index}) => (
          <ListItem>
            {item.name.toUpperCase()}
            {item.amount}
          </ListItem>
          /*<Swipeable
            renderLeftActions={renderLeftActions}
            onSwipeableLeftOpen={() => deleteItemHandler(item)}>
            <TouchableOpacity
              style={styles.FlatListView}
              {...item}
              index={index}
              id={item.id}
              onPress={() => checkItemHandler(item)}>
              <ListItem>{item.name.toUpperCase()}</ListItem>
              <ListItem>{item.amount}</ListItem>
            </TouchableOpacity>
          </Swipeable>*/
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    width: '100%',
    height: '100%',
    marginTop: 5,
  },
});

export default ListItems;
