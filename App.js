import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './navigation/AuthStack';
import NavigationBar from './navigation/NavigationBar';

function App() {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}

export default App;