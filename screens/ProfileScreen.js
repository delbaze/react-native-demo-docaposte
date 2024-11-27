import { Avatar, Icon, ListItem, Switch } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { usePreferences } from "../contextes/SettingsProvider";
import * as ImagePicker from "expo-image-picker";

function ProfileScreen() {
  const settings = usePreferences();

  const handleChange = async (value) => {
    const preferences = { ...settings.preferences, showTodoDone: value };
    settings.changePreferences(preferences);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      allowsMultipleSelection: false,
    });
    console.log("result", result);
    console.log("uri", result.assets[0].uri);
    if (!result.canceled) {
      const preferences = {
        ...settings.preferences,
        imageFile: result.assets[0].uri,
      };
      settings.changePreferences(preferences);
    }
  };
  return (
    <View style={styles.main}>
      {settings.preferences.imageFile ? (
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "gray" }}
          source={{ uri: settings.preferences.imageFile }}
          size={150}
        >
          <Avatar.Accessory
            size={48}
            style={{ backgroundColor: "#ec3" }}
            onPress={pickImage}
          />
        </Avatar>
      ) : (
        <Avatar
          rounded
          containerStyle={{ backgroundColor: "gray" }}
          icon={{ type: "ionicon", name: "person", color: "whitesmoke" }}
          size={150}
        >
          <Avatar.Accessory
            size={48}
            style={{ backgroundColor: "#ec3" }}
            onPress={pickImage}
          />
        </Avatar>
      )}
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
