import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Wrapper = props => {
  const openDrawerHandler = () => {
    props.navigate.openDrawer();
  };

  return (
    <TouchableOpacity style={styles.main} onPress={openDrawerHandler}>
      <Text style={styles.textStyle}>____</Text>
      <Text style={styles.textStyle}>____</Text>
      <Text style={styles.textStyle}>____</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: -9,
  },
});

export default Wrapper;
