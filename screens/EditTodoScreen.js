import storage from "../lib/storage";
import TodoForm from "../components/TodoForm";

function EditTodoScreen({ navigation, route }) {
  const handleEditTodo = async (listTodos, value) => {
    const index = route.params.index;
    const todo = listTodos[index];
    todo.value = value;

    await storage.save({
      key: "todosList",
      data: listTodos,
    });

    navigation.goBack();
  };

  return (
    <TodoForm
      title={"Éditer"}
      action={handleEditTodo}
      index={route.params.index ?? null}
    />
  );
}

export default EditTodoScreen;
