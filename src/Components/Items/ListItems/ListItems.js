import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

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

  return (
    <View>
      <FlatList
        style={styles.FlatList}
        data={items}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.FlatListView}
            {...item}
            index={index}
            id={item.id}
            onPress={() => checkItemHandler(item)}>
            <ListItem>{item.name.toUpperCase()}</ListItem>
            <ListItem>{item.amount}</ListItem>
          </TouchableOpacity>
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
});

export default ListItems;
