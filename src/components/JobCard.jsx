import { Fragment } from "react";
import Badge from "./Badge";

const JobCard = ({ job }) => {
  return (
    <Container>
      <Image job={job} />
      <Content job={job} />
    </Container>
  );
};

const Container = ({ children }) => {
  return <article className="job-card bg-filter mb-5">{children}</article>;
};

const Image = ({ job }) => {
  return (
    <div className="px-6 z-10">
      <img
        className="w-12 md:w-[5.5rem] job-card__img"
        src={job.logo}
        alt={`${job.company} logo`}
      />
    </div>
  );
};

const Content = ({ job }) => {
  const metaInfo = [job.postedAt, job.contract, job.location];

  return (
    <div
      className={`job-card__content pt-8 px-6 pb-6 rounded-md bg-white relative drop-shadow-xl ${
        job["featured"] &&
        "after:left-0 after:top-0 after:rounded-l-md after:absolute after:h-full after:border-l-4 after:border-cyan"
      }`}
    >
      <div className="flex gap-7 gap-y-2 mb-2 flex-wrap">
        <h3 className="text-cyan text-sm font-bold md:text-lg">
          {job.company}
        </h3>
        <Badges job={job} />
      </div>

      <h2 className="text-base font-bold text-dark hover:text-cyan transition md:text-xl mb-2">
        {job.position}
      </h2>

      <p className="text-gray text-md md:text-lg mb-4">
        {metaInfo.map((info, index) => (
          <Fragment key={index}>
            {info}
            {index !== metaInfo.length - 1 && (
              <span className="text-[#B7C4C4]"> • </span>
            )}
          </Fragment>
        ))}
      </p>

      <div className="border-t border-t-[#B7C4C4] mb-4"></div>

      <Requirements job={job} />
    </div>
  );
};

const Badges = ({ job }) => {
  const { new: isNew, featured } = job;

  const tags = Object.entries({ isNew, featured }).filter(
    ([tag, value]) => value
    // Filters the key-value pairs, keeping only those where the tag is true.
  );

  return (
    <ul className="flex gap-2 flex-wrap">
      {tags.map(([tag]) => (
        <li key={tag}>
          <Badge text={tag} />
        </li>
      ))}
    </ul>
  );
};

const Requirements = ({ job }) => {
  const requirements = [...job.languages, ...job.tools, job.level];

  return (
    <ul className="flex gap-4 flex-wrap">
      {requirements.map((requirement, index) => (
        <li
          key={index}
          className="cursor-pointer inline-block font-bold rounded bg-cyan/10 text-cyan py-1 px-2 hover:text-white hover:bg-cyan transition"
        >
          {requirement}
        </li>
      ))}
    </ul>
  );
};

export default JobCard;
