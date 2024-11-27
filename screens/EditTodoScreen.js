import storage from "../lib/storage";
import TodoForm from "../components/TodoForm";

function EditTodoScreen({ navigation }) {
  const handleEditTodo = async (listTodos, value) => {
    const oldList = listTodos;
    
    // Il va falloir faire ce qu'il faut pour Éditer

    // await storage.save({
    //   key: "todosList",
    //   data: [...oldList, { status: "undone", value }],
    // });

    navigation.goBack();
  };

  return <TodoForm title={"Éditer"} action={handleEditTodo} />;
}

export default EditTodoScreen;
