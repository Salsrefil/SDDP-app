import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name = "PtpPage"
        options = {{
          title: 'PTP',
          tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'time-sharp' : 'time-outline'} size={30} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons  name={focused ? 'home-sharp' : 'home-outline'} size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="DhcpPage"
        options={{
          title: 'DHCP',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'git-network' : 'git-network-outline'} size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
