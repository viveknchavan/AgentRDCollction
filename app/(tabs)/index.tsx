import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import CustomerScreen from '../screens/customer';
import TransactionScreen from '../screens/transaction';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200ee', // Set your desired background color here
        },
        headerTintColor: '#ffffff', // Set the color of the title text here
        headerTitleStyle: {
          fontWeight: 'bold', // Customize the title text style here
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Stack.Screen name="CustomerScreen" component={CustomerScreen} options={{ title: 'Customer' }} />
      <Stack.Screen name="TransactionScreen" component={TransactionScreen} options={{ title: 'Transaction Entry' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
