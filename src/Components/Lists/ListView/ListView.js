import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const ListView = props => {
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('lists')
      .onSnapshot(querySnapshot => {
        const lists = [];

        querySnapshot.forEach(documentSnapshot => {
          lists.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setLists(lists);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Text style={styles.listsViewText}>Lists</Text>
      <FlatList
        style={styles.FlatList}
        data={lists}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.FlatListView}
            {...item}
            index={index}
            onPress={() => {
              props.navigation.navigate('Groceries', {
                docId: item,
                listName: item.name,
              });
            }}>
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
