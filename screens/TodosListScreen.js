import { View, StyleSheet } from "react-native";
import { FAB, Text } from "@rneui/themed";
import storage from "../lib/storage";
import { useState, useEffect } from "react";
import TodosList from "../components/TodosList";


function TodosListScreen({ navigation }) {
  // navigation.navigate("")
  const [list, setList] = useState([]);
  const redirectToCreateTodo = () => {
    navigation.navigate("CreateTodo");
  };

  const handleGetTodos = async () => {
    const result = await storage.load({ key: "todosList" });
    console.log("result", result);
    setList(result);
    return result;
  };

  const changeCheckedStatus = async (i) => {
    const oldList = list.map((l) => Object.assign({}, l));
    const element = oldList[i];
    element.status = element.status === "undone" ? "done" : "undone";

    await storage.save({ key: "todosList", data: listSorted(oldList) });
    setList(oldList);
  };

  const listSorted = (initialList) =>
    initialList.sort((a, b) => {
      if (a.status === "undone" && b.status !== "undone") {
        return -1;
      } else if (a.status !== "undone" && b.status === "undone") {
        return 1;
      }

      //tri alphabétique
      if (a.value < b.value) {
        return -1;
      } else if (a.value > b.value) {
        return 1;
      }

      // Si tout est identique
      return 0;
    });
  const deleteTodo = async (index) => {
    const todosList = list.map((l) => Object.assign({}, l));
    todosList.splice(index, 1);
    const sortedList = listSorted(todosList);
    setList(sortedList);
    await storage.save({ key: "todosList", data: sortedList });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      handleGetTodos();
    });

    //cleanup
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.main}>
      {list.length === 0 ? (
        <Text h4>Ajoutez une todo...</Text>
      ) : (
        <TodosList
          list={list}
          changeCheckedStatus={changeCheckedStatus}
          deleteTodo={deleteTodo}
        />
      )}
      <FAB
        placement="right"
        color="#3a3a3a"
        icon={{ name: "add", color: "white" }}
        onPress={redirectToCreateTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ec3",
  },
});
export default TodosListScreen;
