import React, { createContext, useReducer, useContext, useEffect } from "react";
import { globalAppState, appStateReducer } from "./reducer";

export const AppStateContext = createContext(globalAppState);

const AppStateProvider = ({ children }) => {
    const [globalState, dispatch] = useReducer(appStateReducer, globalAppState);
    useEffect  (() => {
      console.log("State updated:", globalState);
  }, [globalState]);
    return (
        <AppStateContext.Provider value={{ globalState, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};

export const useAppContext = () => useContext(AppStateContext);
export default AppStateProvider;
