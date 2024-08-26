import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-center font-pmedium">AISync</Text>
      <Text className="text-base text-center">React Native Development</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "red" }}>
        Home
      </Link>
    </View>
  );
}
