import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import RoomListScreen from '../screens/RoomListScreen';
import ChatScreen from '../screens/ChatScreen';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Rooms"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen 
        name="Rooms" 
        component={TabOneNavigator}
        options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
              }}      
        />
      <BottomTab.Screen 
        name="Chat" 
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chat" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Entypo size={30} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="RoomListScreen"
        component={RoomListScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
