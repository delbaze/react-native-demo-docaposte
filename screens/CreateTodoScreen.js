import { View, Text, StyleSheet } from "react-native";
import { Button, Input, Icon } from "@rneui/themed";
import { createRef, useEffect, useState } from "react";
import storage from "../lib/storage";

function CreateTodoScreen({ navigation }) {
  const input = createRef();

  const [state, setState] = useState({
    field: "",
  });
  const goBack = () => {
    navigation.goBack();
  };
  const handleChange = (text) => {
    setState({ ...state, field: text });
  };
  const handleGetTodos = async () => {
    const result = await storage.load({ key: "todosList" });
    return result;
  };

  const handleAddTodo = async () => {
    const oldList = await handleGetTodos();
    await storage.save({
      key: "todosList",
      data: [...oldList, { status: "undone", value: state.field }],
    });
    setState({ field: "" });
    navigation.goBack();
  };
  useEffect(() => {
    setTimeout(() => input.current.focus(), 400);
  }, []);

  return (
    <View style={styles.main}>
      <Input
        ref={input}
        onChangeText={handleChange}
        placeholder="Premier input"
        leftIcon={<Icon name="rocket" size={24} color="black" />}
        // onSubmitEditing={handleSubmit}
        value={state.field}
      />
      <View style={styles.buttons}>
        <Button
          title={"Annuler"}
          type="solid"
          raised
          onPress={goBack}
          containerStyle={{ width: 150, marginHorizontal: 10 }}
        />
        <Button
          title={"Valider"}
          type="outline"
          raised
          onPress={handleAddTodo}
          containerStyle={{ width: 150, marginHorizontal: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginTop: 30,
  },
  buttons: {
    flexDirection: "row",
  },
});
export default CreateTodoScreen;
