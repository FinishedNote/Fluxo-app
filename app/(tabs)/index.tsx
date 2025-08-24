import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 p-5 bg-background">
      <View className="w-full flex-row justify-between items-center">
        <Text className="base">Hi John!</Text>
        <TouchableOpacity className="iconBox">
          <Ionicons name="notifications" size={18} color="#949494" />
        </TouchableOpacity>
      </View>
      <View className="mt-8">
        <Text className="title">1,234.00 £</Text>
        <TouchableOpacity className="flex-row items-center gap-3 mt-2">
          <Text className="base">United Kingdom</Text>
          <Ionicons name="chevron-down" size={18} color="#949494" />
        </TouchableOpacity>
      </View>
      <Text className="subtitle mt-4">Here are some things you can do</Text>
      <View className="flex-row gap-4 mt-5">
        <View className="bigCard"></View>
        <View className="bigCard"></View>
      </View>
    </View>
  );
}
