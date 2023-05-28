import PropTypes from "prop-types";

const colors = {
  isNew: "bg-cyan",
  featured: "bg-dark",
};

/**
 * Primary UI component for user interaction
 */
const Badge = ({ tag }) => {
  return (
    <span
      className={`uppercase inline-block px-2 text-white rounded-full font-bold text-sm pt-0.5 ${colors[tag]}`}
    >
      {tag === "isNew" ? "new!" : tag}
    </span>
  );
};

Badge.propTypes = {
  /**
   * Badge content
   */
  tag: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  tag: "tag",
};

export default Badge;
