import JobCard from "../../components/JobCard";
import Title from "../../components/Title";
import { useGetUserApplicationsQuery } from "../../store/jobs/jobService";

const UsersAppliedJobs = () => {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  const {
    data: applications,
    isLoading,
    isError,
  } = useGetUserApplicationsQuery(storedUser?._id!);
  if (isLoading) return <p>Loading applied jobs...</p>;
  if (isError) return <p>Failed to load applied jobs.</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <Title
        text1="Jobs You've Applied For"
        text2="Here's a list of all the jobs you've submitted applications for."
      />

      {applications?.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center text-gray-600 dark:text-gray-300 mt-4">
          You haven't applied for any jobs yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
          {applications.map((appli: any) => {
            const job = appli.jobId;
            return <JobCard key={job._id} job={job} status={appli?.status}/>;
          })}
        </div>
      )}
    </div>
  );
};

export default UsersAppliedJobs;
