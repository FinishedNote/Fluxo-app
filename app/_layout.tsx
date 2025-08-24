import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "NovaSquare-Regular": require("@/assets/fonts/NovaSquare-Regular.ttf"),
    "Inter-Thin": require("@/assets/fonts/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("@/assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("@/assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("@/assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("@/assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
