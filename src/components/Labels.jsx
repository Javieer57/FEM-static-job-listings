import PropTypes from "prop-types";

/**
 * A customizable label component.
 */
export const Label = ({ text, onClick }) => {
  return (
    <button
      className="cursor-pointer inline-block font-bold rounded bg-cyan/10 text-cyan py-1 px-2 hover:text-white hover:bg-cyan transition"
      onClick={onClick}
      aria-label={`Add ${text} filter`}
    >
      {text}
    </button>
  );
};

Label.propTypes = {
  /**
   * The text to be displayed in the label.
   */
  text: PropTypes.string.isRequired,
};

export const FilterLabel = ({ text, onClick }) => {
  return (
    <button
      className="cursor-pointer font-bold rounded overflow-hidden flex items-start group"
      onClick={onClick}
    >
      <span className="inline-block bg-cyan/10 text-cyan py-1 px-2">
        {text}
      </span>
      <span className="bg-cyan self-stretch p-2 flex items-center transition justify-center group-hover:bg-dark">
        <img src="/images/icon-remove.svg" alt="remove filter" />
      </span>
    </button>
  );
};

FilterLabel.propTypes = {
  /**
   * The text to be displayed in the label.
   */
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
