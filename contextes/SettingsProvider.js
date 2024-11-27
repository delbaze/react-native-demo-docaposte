import { createContext, useState, useContext, useEffect } from "react";
import storage from "../lib/storage";
export const Context = createContext({
  preferences: {
    showTodoDone: true,
    imageFile: ""
  },
  setPreferences: () => {},
  changePreferences: () => {},
});

export function usePreferences() {
  const context = useContext(Context);

  return context;
}

function SettingsProvider({ children }) {
  const [preferences, setPreferences] = useState({ showTodoDone: true });

  const getPreferences = async () => {
    const prefsPersisted = await storage.load({ key: "preferences" });
    setPreferences(prefsPersisted);
  };

  const changePreferences = async (preferenceObjet) => {
    setPreferences(preferenceObjet);
    await storage.save({ key: "preferences", data: preferenceObjet });
  };

  useEffect(() => {
    getPreferences();
  }, []);
  return (
    <Context.Provider
      value={{ preferences, setPreferences, changePreferences }}
    >
      {children}
    </Context.Provider>
  );
}

export default SettingsProvider;
