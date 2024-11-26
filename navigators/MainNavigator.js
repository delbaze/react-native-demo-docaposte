import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TodosNavigator from "./TodosNavigator";
import ProfileNavigator from "./ProfileNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Todos" tabBarPosition="bottom">
        <Tab.Screen
          name="Todos"
          component={TodosNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="list-sharp"
                size={24}
                color={focused ? "#ec3" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "#ec3" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
