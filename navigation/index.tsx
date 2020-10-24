import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';
import { TRootStack } from '../types/TRootStack';
import RoomListScreen from '../screens/RoomListScreen'
import ChatScreen from '../screens/ChatScreen'
import Colors from '../constants/Colors';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
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
      headerTitleAlign: 'center',
      headerTintColor: Colors.light.background,
     }}>
      <Stack.Screen 
        name="Rooms" 
        component={RoomListScreen} 
        options={{
          title: "Your Rooms"
        }}
        
      />
      <Stack.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{
          title: "Chat"
        }}
      />
     
    </Stack.Navigator>
  );
}

