import { View } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
function TodosList({ list, changeCheckedStatus }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, width: 400 }}>
      {list.map((l, i) => (
        <ListItem
          containerStyle={{
            backgroundColor: l.status === "done" ? "#ececec" : "#fff",
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
                color={"gray"}
                disabled={l.status === "done"}
                onPress={() => navigation.navigate("EditTodo", { index: i })}
              />
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

export default TodosList;
