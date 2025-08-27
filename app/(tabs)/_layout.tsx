import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          backgroundColor: "#020202",
          borderTopWidth: 1,
          borderTopColor: "#151515",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={focused ? "#fff" : "#949494"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="albums"
              size={size}
              color={focused ? "#fff" : "#949494"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="pay"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="wallet"
              size={size}
              color={focused ? "#fff" : "#949494"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="person"
              size={size}
              color={focused ? "#fff" : "#949494"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
