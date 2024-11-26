import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";

//Ce qu'est un composant?<
//useState //hooks
//useEffect

function MonComposant1() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (text, type) => {
    setState({ ...state, [type]: text });

    ///

    // setState((s) => {
    //   //je peux travailler avec s

    //   return { ...s, [type]: text };
    // });
    // setState((s) => ({ ...s, [type]: text }));
  };

  // useEffect(() => {
  //   console.log("State a changé", state);
  // }, [state]);
  return (
    <View>
      <TextInput
        onChangeText={(text) => handleChange(text, "firstName")}
        style={{ backgroundColor: "red", color: "white" }}
      />
      <TextInput
        onChangeText={(text) => handleChange(text, "lastName")}
        style={{ backgroundColor: "blue", color: "white" }}
      />
      <Text>
        Vous vous appelez {state.firstName} {state.lastName}
      </Text>
      {/* Afficher ici le nom et prénom tapé dans 2 TextInput  */}
    </View>
  );
}

function TodosListScreen() {
  return (
    <View>
      <MonComposant1 />
      <Text>Je suis la TodosListScreen</Text>
    </View>
  );
}

export default TodosListScreen;
