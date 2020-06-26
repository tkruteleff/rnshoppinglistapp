import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const ListItems = props => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default ListItems;
