import PropTypes from "prop-types";
import { Fragment } from "react";
import Badge from "./Badge";
import { Label } from "./Labels";
import useFilters from "@/hooks/useFilters";
import Image from "next/image";

/**
 *
 */
const JobCard = ({ job }) => {
  return (
    <Container featured={job.featured}>
      <CompanyImage job={job} />
      <Description job={job} />
      <Requirements job={job} />
    </Container>
  );
};

const Container = ({ children, featured }) => {
  const border = featured
    ? "after:left-0 after:top-0 after:rounded-l-md after:absolute after:h-full after:border-l-4 after:border-cyan"
    : "";

  return (
    <article className="pt-6 sm:pt-0 max-w-5xl">
      <div
        className={`bg-white px-6 pb-6 relative rounded-md drop-shadow-xl sm:grid sm:items-center sm:gap-6 sm:grid-cols-[auto,1fr,1fr] sm:py-8 sm:px-10 ${border}`}
      >
        {children}
      </div>
    </article>
  );
};

const CompanyImage = ({ job }) => {
  return (
    <div className="w-12 sm:w-[5.5rem] z-10 absolute -top-6 sm:relative sm:top-0 aspect-square">
      <Image fill src={job.logo} alt={`${job.company} logo`} />
    </div>
  );
};

const Description = ({ job }) => {
  return (
    <div className="pt-8 sm:pt-0">
      <div className="flex gap-x-7 gap-y-2 mb-2 flex-wrap items-center">
        <h3 className="text-cyan text-sm font-bold md:text-lg">
          {job.company}
        </h3>
        <Badges job={job} />
      </div>

      <h2 className="text-base font-bold text-dark hover:text-cyan transition md:text-xl mb-2">
        {job.position}
      </h2>

      <MetaInfo job={job} />
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

const MetaInfo = ({ job }) => {
  const metaInfo = [job.postedAt, job.contract, job.location];

  // TODO: check <time> for postedAt property
  return (
    <>
      <p className="text-gray text-md md:text-lg">
        {metaInfo.map((info, index) => (
          <Fragment key={index}>
            {info}
            {index !== metaInfo.length - 1 && (
              <span className="text-[#B7C4C4]"> • </span>
            )}
          </Fragment>
        ))}
      </p>
      <div className=" my-4 border-b border-b-[#B7C4C4] sm:hidden"></div>
    </>
  );
};

const Requirements = ({ job }) => {
  const { addFilter } = useFilters();
  const requirements = [...job.languages, ...job.tools, job.level];

  return (
    <ul className="flex gap-4 flex-wrap sm:justify-end">
      {requirements.map((requirement, index) => (
        <li key={index}>
          <Label text={requirement} onClick={() => addFilter(requirement)} />
        </li>
      ))}
    </ul>
  );
};

JobCard.propTypes = {
  /**
   *
   */
  job: PropTypes.object.isRequired,
};

export default JobCard;
