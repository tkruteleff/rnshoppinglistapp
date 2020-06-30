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
      .onSnapshot(documentSnapshot => {
        const items = documentSnapshot.data().shoppingItems;

        setItems(items);
        setLoading(false);
      });

    return () => subscriber();
  }, [props.docId]);

  const checkItemHandler = () => {
    console.log('Hello from checkItemHandler');
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
            onPress={checkItemHandler}>
            <ListItem>{item.name.toUpperCase()}</ListItem>
            <ListItem>{item.amount}</ListItem>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
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
