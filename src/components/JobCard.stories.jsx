import JobCard from "./JobCard";
import data from "../data/data.json";

const TestData = data[0];

export default {
  title: "Components/JobCard",
  component: JobCard,
  tags: ["autodocs"],
  args: {
    job: TestData,
  },
};

export const Default = {};
