// app/components/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import ProfileScreen from '../(tabs)/profile';
import CustomerScreen from '../(tabs)/customer';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="CustomerScreen" component={CustomerScreen} />

      {/* Add other screens here */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
