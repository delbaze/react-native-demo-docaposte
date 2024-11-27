import storage from "../lib/storage";
import TodoForm from "../components/TodoForm";

function CreateTodoScreen({ navigation }) {
  const handleAddTodo = async (listTodos, value) => {
    const oldList = listTodos;
    await storage.save({
      key: "todosList",
      data: [...oldList, { status: "undone", value }],
    });

    navigation.goBack();
  };

  return <TodoForm title={"Valider"} action={handleAddTodo} />;
}

export default CreateTodoScreen;
