import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Lists from './src/Screens/Lists/Lists';

const App: () => React$Node = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Lists} />
      </Drawer.Navigator>
      {/*<View style={styles.mainScreen}>
        <Text style={styles.titleText}>Shopping List</Text>
        <Lists />
      </View>*/}
    </NavigationContainer>
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
