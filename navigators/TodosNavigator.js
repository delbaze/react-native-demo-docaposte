import { createStackNavigator } from "@react-navigation/stack";
import TodosListScreen from "../screens/TodosListScreen";
const Stack = createStackNavigator();

function TodosNavigator() {
  return (
    <Stack.Navigator initialRouteName="TodosList" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="TodosList" component={TodosListScreen} />
      {/* <Stack.Screen name="CreateTodo"/> */}
      {/* <Stack.Screen name="EditTodo"/> */}
      {/* <Stack.Screen name="ViewTodo"/> */}
    </Stack.Navigator>
  );
}

export default TodosNavigator;
