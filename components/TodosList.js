import { View } from "react-native";
import { ListItem } from "@rneui/themed";

function TodosList({ list, changeCheckedStatus }) {
  console.log("LIST", list);
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
        </ListItem>
      ))}
    </View>
  );
}

export default TodosList;
