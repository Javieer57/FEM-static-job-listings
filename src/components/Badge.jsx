const colors = {
  isNew: "bg-cyan",
  featured: "bg-dark",
};

const Badge = ({ tag = "tag" }) => {
  return (
    <span
      className={`uppercase inline-block px-2 text-white rounded-full font-bold text-sm pt-0.5 ${colors[tag]}`}
    >
      {tag === "isNew" ? "new!" : tag}
    </span>
  );
};

export default Badge;
