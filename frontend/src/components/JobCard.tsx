import { IconButton, Button } from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../assets/search2.jpg";
import type { JobCardProps } from "../types/jobs/jobTypes";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../store/register/registerService";
import { saveJob } from "../utils/SaveJobs";
const JobCard = ({ job }: JobCardProps) => {
  // Parse the qualifications string into an array
  const navigate = useNavigate();

  const [updateUser, { isSuccess }] = useUpdateUserMutation();

  const handleSaveJob = () => saveJob(job, updateUser);

  return (
    <div className="w-70  flex flex-col gap-4 border rounded-2xl p-4 shadow hover:shadow-lg transition duration-300 relative bg-white">
      {/* Image and Save Button */}
      <div className="w-full h-32 overflow-hidden rounded-md relative">
        <img src={logo} alt="Job Logo" className="w-full h-full object-cover" />
        <IconButton
          className={`!absolute top-1 right-2 z-40 !text-gray-600 hover:!text-blue-600 text-[1.8rem] hover:!bg-gray-300 ${
            isSuccess ? "!bg-blue-400" : ""
          }`}
          size="large"
          onClick={handleSaveJob}
        >
          <TurnedInNotIcon fontSize="inherit" />
        </IconButton>
      </div>

      {/* Job Info */}
      <div className="flex flex-col gap-1">
        <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
        <p className="text-sm text-gray-600 font-semibold">{job.company}</p>
        <p className="text-xs text-gray-500">
          Deadline: {job.application_deadline}
        </p>
      </div>

      <hr />

      {/* Job Details */}
      <div
        className="text-sm text-gray-700 space-y-2"
        onClick={() => navigate(`/job/${job.id}`)}
      >
        <p>
          <strong>Salary:</strong> ₹{job.salary_from.toLocaleString()} - ₹
          {job.salary_to.toLocaleString()}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <div>
          <strong>Experience / Skills:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-gray-600">
            {job.qualifications.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-auto">
        <Button
          variant="contained"
          size="small"
          className="!text-xs !bg-blue-600 !rounded-xl !p-2 !px-4 !min-w-max"
        >
          {job.employment_type}
        </Button>
        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardIcon />}
          className="!text-xs !rounded-xl !p-2"
          onClick={() => navigate(`/job/${job?.id}/applyJob`)}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
