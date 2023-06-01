import PropTypes from "prop-types";

const colors = {
  isNew: "bg-cyan",
  featured: "bg-dark",
};

/**
 * Primary UI component for user interaction
 */
const Badge = ({ text }) => {
  const badgeClasses = `uppercase inline-block px-2 text-white rounded-full font-bold text-sm pt-0.5 ${colors[text]}`;

  return (
    <span className={badgeClasses}>{text === "isNew" ? "new!" : text}</span>
  );
};

Badge.propTypes = {
  /**
   * Badge type
   */
  text: PropTypes.oneOf(["isNew", "featured"]),
};

export default Badge;
