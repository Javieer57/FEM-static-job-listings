import Head from "next/head";
import JobCard from "@/components/JobCard";
import { useContext } from "react";
import { AppContext } from "@/contexts/JobsContext";
import Filters from "@/components/Filters";

export default function Home() {
  const [app] = useContext(AppContext);

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
        {app.filters.length > 0 && <Filters filters={app.filters} />}
      </header>

      <main className="px-4 space-y-5 max-w-5xl mx-auto mb-20">
        {app.jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </main>
    </>
  );
}
