import storage from "../lib/storage";
import TodoForm from "../components/TodoForm";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";

function EditTodoScreen({ navigation, route }) {
  const [todo, setTodo] = useState(null);
  const handleGetTodos = async () => {
    const result = await storage.load({ key: "todosList" });
    return result;
  };

  const handleEditTodo = async (value) => {
    const listTodos = await handleGetTodos();
    const index = route.params.index;
    const todo = listTodos[index];
    todo.value = value;

    await storage.save({
      key: "todosList",
      data: listTodos,
    });

    navigation.goBack();
  };

  const findOneTodo = async () => {
    const listTodos = await handleGetTodos();
    const todo = listTodos[route.params.index];
    // setState({ ...state, value: todo.value });
    setTimeout(() => {
      setTodo(todo);
    }, 400);
  };
  useEffect(() => {
    findOneTodo();
  }, [route.params.index]);
  //penser à faire un loader
  useEffect(() => {
    console.log("TODO", todo);
  }, [todo]);
  return todo ? (
    <TodoForm title={"Éditer"} action={handleEditTodo} todo={todo} />
  ) : (
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default EditTodoScreen;
