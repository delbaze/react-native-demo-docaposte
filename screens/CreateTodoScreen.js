import storage from "../lib/storage";
import TodoForm from "../components/TodoForm";

function CreateTodoScreen({ navigation }) {
  const handleGetTodos = async () => {
    const result = await storage.load({ key: "todosList" });
    return result;
  };
  const handleAddTodo = async (value) => {
    const listTodos = await handleGetTodos();
    await storage.save({
      key: "todosList",
      data: [...listTodos, { status: "undone", value }],
    });

    navigation.goBack();
  };

  return <TodoForm title={"Valider"} action={handleAddTodo} />;
}

export default CreateTodoScreen;
