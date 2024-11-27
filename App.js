import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MainNavigator from "./navigators/MainNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./lib/storage";
import SettingsProvider from "./contextes/SettingsProvider";

export default function App() {
  return (
    <SettingsProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <MainNavigator />
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
