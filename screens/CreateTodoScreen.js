import { View, Text } from "react-native";
import { Button, Input, Icon } from "@rneui/themed";
import { createRef, useEffect, useState } from "react";
function CreateTodoScreen({ navigation }) {
  const input = createRef();

  const [state, setState] = useState({
    field: "",
  });
  const goBack = () => {
    navigation.goBack();
  };
  const handleChange = (text) => {

    setState({...state, field: text})
  }

  useEffect(() => {
    //utiliser la référence pour chercher la méthode de focus...
    // setTimeout(() => {
    //   input.current.focus();
    // }, 400);
    setTimeout(() => input.current.focus(), 400);
  }, []); //lorsque le composant sera chargé et une seule fois

  useEffect(() => {
    console.log(state.field);
  }, [state])

  return (
    <View>
      <Text>Je suis dans Create todo screen</Text>
      <Input
        ref={input}
        onChangeText={handleChange}
        placeholder="Premier input"
        leftIcon={<Icon name="rocket" size={24} color="black" />}
        // onSubmitEditing={handleSubmit}
        value={state.field}
      />

      <Button
        title={"Annuler"}
        type="solid"
        raised
        onPress={goBack}
        containerStyle={{ width: 200, marginHorizontal: 10 }}
      />
    </View>
  );
}

export default CreateTodoScreen;
