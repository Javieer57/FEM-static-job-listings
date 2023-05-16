import JobBadges from "./JobTag";

const JobCard = ({ job }) => {
  const requirements = [...job.languages, ...job.tools, job.level];

  return (
    <article className="bg-filter mb-5">
      {/* <div>
        <img src={job.logo} alt={`${job.company} logo`} />
      </div> */}
      {/* <div className="job-details"> */}
      {/* <div className="company-name">
        <h3>{company}</h3>
      </div> */}
      <JobBadges job={job} />
      {/* <div className="job-title">
          <h2>{position}</h2>
        </div>
        <div className="job-description">
          <p>{`${postedAt} | ${contract} | ${location}`}</p>
        </div>
        <div className="job-requirements">
          {requirements.map((requirement, index) => (
            <span key={index} className="requirement">
              {requirement}
            </span>
          ))}
        </div>
      </div> */}
    </article>
  );
};

export default JobCard;
