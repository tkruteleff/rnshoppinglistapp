import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ListItem = props => {
  return (
    <>
      <Text style={styles.itemText}>{props.children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ListItem;
