import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Homepage from '../screens/Homepage';

const Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'HomepageScreen'} component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenStack;
