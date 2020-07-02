import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Lists from './src/Screens/Lists/Lists';
import Groceries from './src/Screens/Groceries/Groceries';
import About from './src/Screens/About/About';

const App: () => React$Node = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Lists} />
        <Drawer.Screen name="Groceries" component={Groceries} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
