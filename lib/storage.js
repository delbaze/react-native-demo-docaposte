import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  defaultExpires: null,
  size: 1000,
  enableCache: true,
  storageBackend: AsyncStorage,
  sync: {
    todosList: () => [],
    preferences: () => ({
      showTodoDone: true,
    }),
  },
});

export default storage;
