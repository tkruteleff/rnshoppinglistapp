import React from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = props => {
  console.log(props);

  const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamb',
    });

    return (
      <View style={styles.leftAction}>
        <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
          Delete item
        </Animated.Text>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={() => alert('Delete Item')}>
      <TouchableOpacity style={styles.FlatListView}>
        <Text style={styles.itemText}>{props.children}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  itemText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  FlatListView: {
    padding: 5,
  },
  leftAction: {
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    flex: 1,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});

export default ListItem;
