import { useGetApplicationsForJobQuery } from "../../store/jobs/jobService";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Title from "../../components/Title";

const EmployersApplicationsForJob = () => {
    const { JobId } = useParams()
    const { data: applications } = useGetApplicationsForJobQuery(JobId!);


  return (
    <div className="p-4">
      <Title text1="All Applicants" text2="Ready to jump back in?" />
      <hr className="mt-7 " />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {applications.length > 0 ? (
          applications?.map((app: any) => (
            <div
              key={app._id}
              className="bg-white shadow-md rounded-xl border border-gray-200 border-solid p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold black font-serif tracking-wide">
                  {app.userId.fullName?.toUpperCase()}
                </h2>
                <p className="text-sm text-gray-600">{app?.userId?.email}</p>
              </div>

              <div className="text-sm space-y-1 mb-3">
                <p>
                  <span className="font-semibold">Job:</span>{" "}
                  {app?.jobId?.title}
                </p>
                <p>
                  <span className="font-semibold">Company:</span>{" "}
                  {app?.jobId?.company}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {app?.jobId?.location}
                </p>
                <p>
                  <span className="font-semibold">Type:</span>{" "}
                  {app?.jobId?.employment_type}
                </p>
              </div>

              <div className="text-sm space-y-1 mb-4">
                <p>
                  <span className="font-semibold">Applicant Email:</span>{" "}
                  {app?.email}
                </p>
                <p>
                  <span className="font-semibold">Contact:</span> {app?.contact}
                </p>
                <p>
                  <span className="font-semibold">Address:</span> {app?.address}
                </p>
              </div>
              <div className="flex justify-between items-center mt-3 gap-3">
                <a
                  href={app?.coverLetterFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="contained" size="small">
                    View Cover Letter
                  </Button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center  ">
            <p className="text-gray-500 text-2xl font-serif">
              No job Applications yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployersApplicationsForJob;
