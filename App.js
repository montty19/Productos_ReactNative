import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/Home';
import Farmacia from './src/views/Farmacia';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{title: 'Farmacia'}}/>
    <Stack.Screen name="Farmacia" component={Farmacia} options={{title: 'Producto'}}/>
  </Stack.Navigator>
  </NavigationContainer>
 );

export default App;
