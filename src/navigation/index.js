import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LearningPage from '../screens/LearningPage';

const Stack = createStackNavigator();

const ScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Learning'} component={LearningPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStack;
