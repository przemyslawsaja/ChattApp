import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../types';

import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';
import NotFoundScreen from '../screens/NotFoundScreen';
import Colors from '../constants/Colors';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Root"
      screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.light.tint
      },
      headerTintColor: Colors.light.background,
     }}>
      <Stack.Screen 
        name="Root" 
        component={MainTabNavigator} 
        options={{
          title: "ChatBee"
        }}
      />
     
    </Stack.Navigator>
  );
}

/* 
 <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
*/