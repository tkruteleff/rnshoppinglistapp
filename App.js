import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

import AddList from './src/Components/AddList/AddList';

const App: () => React$Node = () => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.titleText}>Shopping List</Text>
      <View>
        <AddList />
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
});

export default App;
