import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LearningPage from '../screens/LearningPage';
import HomeScreen from '../screens/Homepage';

const Stack = createStackNavigator();

const ScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Learning'} component={LearningPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStack;
