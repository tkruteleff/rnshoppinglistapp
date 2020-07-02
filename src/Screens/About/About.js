/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Wrapper from './../../hoc/Wrapper';

const About = props => {
  return (
    <View style={styles.mainScreen}>
      <Wrapper navigate={props.navigation} />
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    mainScreen: {
        padding: 25,
    },
});

export default About;
