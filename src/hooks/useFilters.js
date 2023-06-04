import { useContext } from "react";
import { AppContext } from "@/contexts/JobsContext";

const useFilters = () => {
  const [app, setApp] = useContext(AppContext);

  const { filters } = app;

  const addFilter = (filter) => {
    const filters = [...app.filters];
    if (!filters.includes(filter)) filters.push(filter);
    setApp((prev) => ({ ...prev, filters }));
  };

  const removeFilter = (filter) => {
    const filters = [...app.filters];
    const index = filters.indexOf(filter);
    if (index !== -1) {
      filters.splice(index, 1);
    }
    setApp((prev) => ({ ...prev, filters }));
  };

  const removeAllFilters = () => {
    setApp((prev) => ({ ...prev, filters: [] }));
  };

  return {
    filters,
    addFilter,
    removeFilter,
    removeAllFilters,
  };
};

export default useFilters;
