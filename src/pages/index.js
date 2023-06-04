import Head from "next/head";
import JobCard from "@/components/JobCard";
import data from "../data/data.json";
import { FilterLabel } from "@/components/Labels";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Job Listings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className="grid grid-rows-[7.5rem,2.25rem,auto] grid-cols-1 mb-8 mb:mb-10">
        <div className="bg-center bg-cover bg-header-mobile md:bg-header-desktop bg-cyan row-start-1 row-end-3 col-start-1"></div>
        <div className="col-start-1 w-full px-4 max-w-5xl mx-auto row-start-2 row-end-4">
          <div className="flex justify-between items-center gap-5 py-5 pl-5 pr-6 bg-white drop-shadow-xl rounded-md">
            <div className="flex gap-4 flex-wrap">
              <FilterLabel text="CSS" />
              <FilterLabel text="Frontend" />
              <FilterLabel text="Javascript" />
            </div>
            <span className="text-gray font-bold">Clear</span>
          </div>
        </div>
      </header>

      <main className="px-4 space-y-5 max-w-5xl mx-auto mb-20">
        {data.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </main>
    </>
  );
}
