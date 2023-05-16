const colors = {
  isNew: "bg-cyan500",
  featured: "bg-cyan800",
};

const JobBadges = ({ job }) => {
  const { new: isNew, featured } = job;

  const tags = Object.entries({ isNew, featured }).filter(
    ([tag, value]) => value
    // Filters the key-value pairs, keeping only those where the tag is true.
  );

  return (
    <ul className="flex space-x-2">
      {tags.map(([tag]) => (
        <li
          key={tag}
          className={`uppercase inline-block ${colors[tag]} px-2 text-white rounded-full font-bold text-sm pt-0.5`}
        >
          {tag === "isNew" ? "new!" : tag}
        </li>
      ))}
    </ul>
  );
};

export default JobBadges;
