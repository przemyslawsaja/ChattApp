import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';
import { TRootStack } from '../types/TRootStack';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';
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

const Stack = createStackNavigator<TRootStack>();

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

