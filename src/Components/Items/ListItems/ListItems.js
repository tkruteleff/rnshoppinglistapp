import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const ListItems = props => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('lists')
      .doc(props.docId)
      .onSnapshot(documentSnapshot => {
        console.log('Item data', documentSnapshot.data());
        const items = [];

        documentSnapshot.forEach(documentSnapshot => {
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

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Hello World</Text>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListItems;
