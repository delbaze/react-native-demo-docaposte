import { View, Text, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";

function TodosListScreen({navigation}) {
  // navigation.navigate("")
  return (
    <View style={styles.main}>
      <Text>Ici il y aura les todos</Text>
      <FAB placement="right" color="#3a3a3a" icon={{name: "add", color: "white"}}/>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ec3",
  },
});
export default TodosListScreen;
