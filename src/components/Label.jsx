import PropTypes from "prop-types";

/**
 * A customizable label component.
 */
const Label = ({ text }) => {
  return (
    <span className="cursor-pointer inline-block font-bold rounded bg-cyan/10 text-cyan py-1 px-2 hover:text-white hover:bg-cyan transition">
      {text}
    </span>
  );
};

Label.propTypes = {
  /**
   * The text to be displayed in the label.
   */
  text: PropTypes.string.isRequired,
};

export default Label;
