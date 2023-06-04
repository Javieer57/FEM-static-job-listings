import useFilters from "@/hooks/useFilters";
import { FilterLabel } from "./Labels";

const Filters = ({ filters }) => {
  const { removeFilter } = useFilters();
  return (
    <div className="col-start-1 w-full px-4 max-w-5xl mx-auto row-start-2 row-end-4">
      <div className="flex justify-between items-center gap-5 py-5 pl-5 pr-6 bg-white drop-shadow-xl rounded-md">
        <div className="flex gap-4 flex-wrap">
          {filters.map((filter) => (
            <FilterLabel
              text={filter}
              key={filter}
              onClick={() => removeFilter(filter)}
            />
          ))}
        </div>
        <span className="text-gray font-bold">Clear</span>
      </div>
    </div>
  );
};

export default Filters;
