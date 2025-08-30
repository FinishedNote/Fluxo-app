import { Link } from "expo-router";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function SignIn() {
  return (
    <View className="flex-1 flex-center bg-background">
      <TextInput className="bg-white p-4 rounded-md" placeholder="Email" />
      <TextInput
        className="bg-white p-4 rounded-md"
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign In" onPress={() => {}} />
      <Text className="text-center text-white mt-4">
        Don't have an account? Sign Up
      </Text>
      <Link href="/sign-up" className="w-full">
        <Text className="text-center text-white mt-4">Sign Up</Text>
      </Link>
    </View>
  );
}
