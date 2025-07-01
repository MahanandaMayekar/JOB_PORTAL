import Title from "../../components/Title";
import { useFetchEmployersPostsQuery } from "../../store/jobs/jobService";
import JobCard from "../../components/JobCard";
const ManageJobsPage = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { data: jobs = [] } = useFetchEmployersPostsQuery(user?._id);
 
  return (
    <div className="p-4">
      <Title
        text1="My Job Listings"
        text2="View and manage your posted jobs below."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.length > 0 ? (
          jobs.map((job: any) => <JobCard key={job?._id} job={job} />)
        ) : (
          <div className="flex justify-center  ">
            <p className="text-gray-500 text-2xl font-serif">
              No job posted yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageJobsPage;
