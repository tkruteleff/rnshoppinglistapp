import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ListItem from './ListItem/ListItem';

const ListItems = props => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState(true);

  const renderLeftActions = (progress, dragX) => {
    return (
      <View style={styles.leftAction}>
        <Text style={styles.actionText}>Delete item</Text>
      </View>
    );
  };

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
    firestore()
      .collection('lists')
      .doc(props.docId)
      .collection('shoppingItems')
      .doc(item.key)
      .delete()
      .then(() => {
        console.log('Item deleted ', item.key);
      });
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
          <Swipeable renderLeftActions={renderLeftActions}>
            <TouchableOpacity
              style={styles.FlatListView}
              {...item}
              index={index}
              id={item.id}
              onPress={() => checkItemHandler(item)}>
              <ListItem>{item.name.toUpperCase()}</ListItem>
              <ListItem>{item.amount}</ListItem>
            </TouchableOpacity>
          </Swipeable>
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
  FlatListView: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
  },
  leftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});

export default ListItems;
