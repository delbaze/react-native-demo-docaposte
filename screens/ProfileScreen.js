import { Avatar, Icon, ListItem, Switch } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { View } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.main}>
      <Avatar
        rounded
        containerStyle={{ backgroundColor: "gray" }}
        icon={{ type: "ionicon", name: "person", color: "whitesmoke" }}
        size={150}
      />
      <View style={styles.itemsList}>
        <ListItem bottomDivider>
          <Icon type="ionicon" name="settings" />
          <ListItem.Content>
            <ListItem.Title>Afficher les todos terminées</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <Switch />
          </ListItem.Content>
        </ListItem>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemsList: {
    width: 430,
    padding: 20,
  },
});

export default ProfileScreen;
