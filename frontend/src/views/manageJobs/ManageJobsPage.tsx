import Title from "../../components/Title";
import { useFetchEmployersPostsQuery } from "../../store/jobs/jobService";
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
          jobs.map((job: any) => (
            <div
              key={job._id}
              className="p-4 border rounded-xl shadow-md bg-white flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{job.company}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {job.location} • {job.employment_type}
                </p>
                <p className="text-sm mt-2 text-gray-800">
                  ₹{job.salary_from} - ₹{job.salary_to} / month
                </p>
                <p className="text-sm mt-2 text-gray-800">
                  Created: {new Date(job.createdAt).toLocaleDateString()}
                </p>
              </div>
              
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-8">No jobs posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default ManageJobsPage;
