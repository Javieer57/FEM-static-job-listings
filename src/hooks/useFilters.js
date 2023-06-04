import { useContext } from "react";
import { AppContext } from "@/contexts/JobsContext";

const useFilters = () => {
  const [app, setApp] = useContext(AppContext);

  const addFilter = (filter) => {
    const filters = [...app.filters];
    if (!filters.includes(filter)) filters.push(filter);
    setApp((prev) => ({ ...prev, filters }));
  };

  return {
    addFilter,
  };
};

export default useFilters;
