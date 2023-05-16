import JobBadges from "./JobBadge";

const JobCard = ({ job }) => {
  const requirements = [...job.languages, ...job.tools, job.level];

  const metaInfo = [job.postedAt, job.contract, job.location];

  return (
    <article className="bg-filter mb-5">
      <img
        className="w-12 md:w-[5.5rem]"
        src={job.logo}
        alt={`${job.company} logo`}
      />
      <h3 className="text-cyan text-sm font-bold md:text-lg">{job.company}</h3>
      <JobBadges job={job} />
      <h2 className="text-base font-bold text-dark hover:text-cyan transition md:text-xl">
        {job.position}
      </h2>

      <p className="text-gray text-md md:text-lg">
        {/* TODO: contraste y espaciado con los dots */}
        {metaInfo.join(" • ")}
      </p>

      <div className="border-t border-t-[#B7C4C4]"></div>

      <ul className="flex gap-4">
        {requirements.map((requirement, index) => (
          <li
            key={index}
            className="inline-block font-bold rounded bg-cyan/10 text-cyan py-1 px-2 hover:text-white hover:bg-cyan transition"
          >
            {requirement}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default JobCard;
