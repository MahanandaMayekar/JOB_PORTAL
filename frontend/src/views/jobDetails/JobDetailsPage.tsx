import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Button } from "@mui/material";
import { BsCalendarDate, BsTelephone } from "react-icons/bs";
import { FaBuilding, FaHouseUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { MdLaptopMac, MdPersonSearch } from "react-icons/md";
import { RiMoneyRupeeCircleLine, RiTimerFlashLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import JobCard from "../../components/JobCard";
import Title from "../../components/Title";
import { saveJob } from "../../utils/SaveJobs";
import {
  useFetchJobByIdQuery,
  useFetchJobsByCategoryQuery,
} from "../../store/jobs/jobService";
import { useUpdateUserMutation } from "../../store/register/registerService";
import { useNavigate } from "react-router-dom";
const JobDetailsPage = () => {
  const navigate=useNavigate()
  const { id } = useParams<string>()
  const { data: job, isLoading, isError } = useFetchJobByIdQuery(id!);
  const { data: CategoryJobs } = useFetchJobsByCategoryQuery(job?.category!);
  const highlights = [
    "Growth Opportunities",
    "Collaborative Environment",
    "Inclusive Culture",
  ];
  const [updateUser] = useUpdateUserMutation();
  const handleSaveJob = () => {
    if (!job) return; // Don't call saveJob if job isn't loaded
    saveJob(job, updateUser);
  };
 
const postedDaysAgo = Math.floor(
    (new Date().getTime() - new Date(job?.createdAt!).getTime()) /
      (1000 * 3600 * 24)
  );


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading job details</p>;

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full  h-52 flex  flex-row justify-around mt-4 bg-slate-200 rounded-lg ">
        <div className="flex flex-row gap-6 my-auto">
          <div className="w-20 h-20 rounded-lg bg-blue-400 text-6xl font-serif font-bold flex justify-center items-center">
            {job?.company?.charAt(0).toUpperCase() || "M"}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-extrabold font-serif text-4xl">{job?.title}</h1>
            <div className="flex flex-row gap-5">
              <p className="flex items-center gap-2">
                <FaBuilding />
                <span>{job?.company}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot />
                <span>{job?.location}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 my-auto">
          <Button
            variant="contained"
            onClick={() => navigate(`/job/${job?._id}/applyJob`)}
          >
            Apply for job
          </Button>
          <Button
            endIcon={<TurnedInNotIcon />}
            variant="outlined"
            onClick={handleSaveJob}
          >
            {" "}
            Save post
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-8 ">
        <div className="flex-1 ml-10 space-y-6">
          {/* Job Description */}
          <section className="bg-white  rounded-lg p-6 ">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Job Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{job?.description}</p>
          </section>

          {/* Skill & Experience */}
          <section className="bg-white  rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Skills & Experience
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job?.qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </section>

          {/* Job Highlights */}
          <section className="bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-6 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Job Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Why Join Us */}
          <section className="bg-green-50 border-l-4 border-green-500 border-solid text-green-900 p-6 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Why Join Us?</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Be part of a fast-growing team</li>
              <li>Access to learning budgets & mentorship</li>
              <li>Great work-life balance</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="bg-gray-50 p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Frequently Asked Questions
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>What is the interview process like?</li>
              <li>Is this a remote position?</li>
              <li>How soon can I start?</li>
            </ul>
          </section>

          {/* How to Apply */}
          <section className="bg-yellow-100 border-l-4 border-yellow-500 border-solid text-yellow-900 p-6 rounded-md shadow-sm">
            <p className="text-sm">
              <strong>How to Apply:</strong> Please click the{" "}
              <strong>“Apply for Job”</strong> button above or send your resume
              to{" "}
              <a
                href={`mailto:${job?.contact}`}
                className="text-blue-600 underline"
              >
                {job?.contact}
              </a>
              .
            </p>
          </section>

          {/* Posted Date Info */}
          <p className="text-sm text-gray-600">
            📅 Posted {postedDaysAgo===0?"Today":postedDaysAgo} {postedDaysAgo !== 1 && 0 ? "s" : ""} 
          </p>
        </div>

        <div className="h-fit w-3/12 bg-slate-200 rounded-2xl font-serif text-xl gap-4 p-6">
          <h3 className="font-semibold text-2xl mb-4">Job Overview</h3>
          <hr className="mb-4" />

          <div className="flex items-start gap-4 mb-4">
            <MdLaptopMac size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Employment Type</p>
              <p className="text-gray-700 text-sm">{job?.employment_type}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <MdPersonSearch size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Job Title:</p>
              <p className="text-gray-700 text-sm">{job?.title}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <RiMoneyRupeeCircleLine size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Salary Range</p>
              <p className="text-gray-700 text-sm">
                ₹{job?.salary_from.toLocaleString()} - ₹
                {job?.salary_to.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <FaHouseUser size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base"> Remote Work:</p>
              <p className="text-gray-700 text-sm">
                {job?.is_remote_work ? "Yes" : "No"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <GrLocation size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Location</p>
              <p className="text-gray-700 text-sm">{job?.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <BsTelephone size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Contact</p>
              <p className="text-gray-700 text-sm">{job?.contact}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <BsCalendarDate size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Date Posted:</p>
              <p className="text-gray-700 text-sm">{job?.createdAt}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <RiTimerFlashLine size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Deadline</p>
              <p className="text-gray-700 text-sm">
                {job?.application_deadline}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Title
          text1="Related Vacancies"
          text2="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {CategoryJobs?.slice(0, 8).map((categoryJob) => (
            <JobCard job={categoryJob} key={categoryJob._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
