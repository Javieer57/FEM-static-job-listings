import JobBadges from "./JobTag";

const JobCard = ({ job }) => {
  const requirements = [...job.languages, ...job.tools, job.level];

  return (
    <article className="bg-filter mb-5">
      <img src={job.logo} alt={`${job.company} logo`} />
      <h3>{job.company}</h3>
      <JobBadges job={job} />
      <h2>{job.position}</h2>
      <p>{`${job.postedAt} | ${job.contract} | ${job.location}`}</p>
      {requirements.map((requirement, index) => (
        <span key={index} className="requirement">
          {requirement}
        </span>
      ))}
    </article>
  );
};

export default JobCard;
