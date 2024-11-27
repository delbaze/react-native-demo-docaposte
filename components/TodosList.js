import { Alert, View } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
function TodosList({ list, changeCheckedStatus, deleteTodo }) {
  const navigation = useNavigation();

  const confirmDelete = (index) => {
    Alert.alert("Suppression d'une todo", "Confirmez vous la suppression?", [
      {
        text: "Annuler",
        style: "cancel",
      },
      { text: "Oui", onPress: () => deleteTodo(index) },
    ]);
  };
  return (
    <View style={{ flex: 1, width: 400 }}>
      {list.map((l, i) => (
        <ListItem
          containerStyle={{
            backgroundColor: l.status === "done" ? "#d1d5d8" : "#fff",
          }}
          key={i}
          bottomDivider
        >
          <ListItem.CheckBox
            checked={l.status === "done"}
            // disabled={l.status === "done"}
            onPress={() => changeCheckedStatus(i)}
          />
          <ListItem.Content>
            <ListItem.Title>{l.value}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right style={{ flexDirection: "row", gap: 20 }}>
            <ListItem.Title right>
              <Icon
                type="ionicon"
                name="pencil"
                color={l.status === "done" ? "#b9b9b9" : "gray"}
                disablbd={l.status === "done"}
                onPress={() => navigation.navigate("EditTodo", { index: i })}
              />
            </ListItem.Title>
            <ListItem.Title right>
              <Icon
                type="ionicon"
                name="trash"
                color={"red"}
                onPress={() => confirmDelete(i)}
              />
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

export default TodosList;
