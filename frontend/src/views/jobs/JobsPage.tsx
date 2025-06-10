import Title from "../../components/Title";
import { useFetchJobsQuery } from "../../store/jobs/jobService";
import JobCard from "../../components/JobCard";
import { useMemo } from "react";
import { createFuseInstance } from "../../utils/createFuseInstance";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";


const JobsPage = () => {
  const search=useSelector((state:RootState)=>state.search.query)
  const { data: jobs, isLoading, error } = useFetchJobsQuery();

  //creating fuse instance
  const fuse = useMemo(() => createFuseInstance(jobs || []), [jobs]);

  //performing search using fuse

  const filteredJobs = useMemo(() => {
    if (!fuse || !search) return jobs;
    const results = fuse.search(search.trim());
    return results.map((result) => result.item);
  }, [search, fuse, jobs]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <div className="px-6 py-4 m-auto">
      <Title
        text1="Find & Hire Experts for any Job"
        text2="Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years."
      />

      <p className="h-[2px] rounded-2xl bg-slate-400/50 mt-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 !ml-12">
        {filteredJobs?.length ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No jobs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
