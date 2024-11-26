import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MainNavigator from "./navigators/MainNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./lib/storage";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
