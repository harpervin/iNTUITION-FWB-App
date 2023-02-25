import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const NavigationBar = () => {
  return (
    <NavigationContainer independent={true}>
        <Tabs />
    </NavigationContainer>
  );
};

export default NavigationBar;