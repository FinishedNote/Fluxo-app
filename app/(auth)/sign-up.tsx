import { createUser } from "@/lib/appwrite";
import { router } from "expo-router";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });

  const handleSignUp = async () => {
    const { name, email, password } = form;

    if (!name || !email || !password)
      return alert("Error Please enter valid email address & password.");

    setIsSubmitting(true);

    try {
      await createUser(email, password, name);
      router.replace("/");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="flex-1 flex-center bg-background">
      <Text>Sign Up</Text>
      <TextInput
        className="bg-white p-4 rounded-md"
        placeholder="Full Name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />
      <TextInput
        className="bg-white p-4 rounded-md"
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <TextInput
        className="bg-white p-4 rounded-md"
        placeholder="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      <Button title="Sign Up" onPress={() => handleSignUp()} />
    </View>
  );
}
