import { createContext } from "react";
import data from "../data/data.json";
import { useState } from "react";

export const AppContext = createContext();

const initialState = {
  filters: [],
  jobs: data,
};

export const JobsProvider = ({ children }) => {
  const [app, setApp] = useState(initialState);

  return (
    <AppContext.Provider value={[app, setApp]}>{children}</AppContext.Provider>
  );
};
