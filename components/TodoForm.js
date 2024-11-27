import { View, StyleSheet } from "react-native";
import { Button, Input, Icon } from "@rneui/themed";
import { createRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import storage from "../lib/storage";

function TodoForm({ title, action, todo }) {
  const navigation = useNavigation();

  const input = createRef();
  const [state, setState] = useState({
    value: todo?.value || "",
  });
  const goBack = () => {
    navigation.goBack();
  };

  const handleChange = (text) => {
    setState({ ...state, value: text });
  };

  const callAction = async () => {
    // const listTodos = await handleGetTodos();
    action(state.value);
    setState({ value: "" });
  };

  useEffect(() => {
    setTimeout(() => {
      input.current.focus();
    }, 400);
  }, []);

  return (
    <View style={styles.main}>
      <Input
        ref={input}
        onChangeText={handleChange}
        placeholder="Premier input"
        leftIcon={<Icon name="rocket" size={24} color="black" />}
        // onSubmitEditing={handleSubmit}
        value={state.value}
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
          disabled={!state.value}
          title={title}
          type="outline"
          raised
          onPress={callAction}
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
export default TodoForm;
