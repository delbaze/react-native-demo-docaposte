import { Avatar, Icon, ListItem, Switch } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { usePreferences } from "../contextes/SettingsProvider";
import storage from "../lib/storage";

function ProfileScreen() {
  const settings = usePreferences();

  const handleChange = async (value) => {
    const preferences = { ...settings.preferences, showTodoDone: value };
    settings.setPreferences(preferences);
    await storage.save({ key: "preferences", data: preferences });
  };
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
            <Switch
              value={settings.preferences.showTodoDone}
              onValueChange={handleChange}
            />
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
