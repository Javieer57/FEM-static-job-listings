import Head from "next/head";
import JobCard from "@/components/JobCard";
import data from "../data/data.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Job Listings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="p-4">
        {data.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </main>
    </>
  );
}
