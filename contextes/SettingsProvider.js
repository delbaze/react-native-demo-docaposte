import { createContext, useState, useContext, useEffect } from "react";
import storage from "../lib/storage";
export const Context = createContext({
  preferences: {
    showTodoDone: true,
  },
  setPreferences: () => {},
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
  useEffect(() => {
    getPreferences();
  }, []);
  return (
    <Context.Provider value={{ preferences, setPreferences }}>
      {children}
    </Context.Provider>
  );
}

export default SettingsProvider;
