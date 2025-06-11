import SettingsIcon from "@mui/icons-material/Settings";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Avatar, Button } from "@mui/material";
import { BsTelephone } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import {
  MdLaptopMac
  
 } from "react-icons/md";
import JobCard from "../../components/JobCard";
import Title from "../../components/Title";
import { useFetchJobsQuery } from "../../store/jobs/jobService";
import { useGetUserByIdQuery } from "../../store/register/registerService";
import { useNavigate } from "react-router-dom";

import { GoGift } from "react-icons/go";
import { FaRegFlag } from "react-icons/fa6";

const ProfilePage = () => {
  const navigate=useNavigate()
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const { data: user } = useGetUserByIdQuery(storedUser?._id);

  const interestedCategories = user?.interestedCategories;

  const { data: jobs } = useFetchJobsQuery();

  const recomendedCategories: any = jobs?.filter((job) =>
    interestedCategories?.includes(job.category)
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full  h-52 flex  flex-row justify-around mt-4 bg-slate-200 rounded-lg ">
        <div className="flex flex-row gap-6 my-auto">
          <Avatar sx={{ width: 90, height: 90 }}>
            {user?.fullName?.charAt(0).toUpperCase() || "U"}
          </Avatar>
          <div className="flex flex-col gap-3">
            <h1 className="font-extrabold font-serif text-4xl">
              {user?.fullName}
            </h1>
            <h1 className="text-gray-600 font-serif text-xl">
              {user?.occupation}
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-6 my-auto">
          <Button
            endIcon={<TurnedInNotIcon />}
            variant="contained"
            onClick={() => navigate("/savedJobs")}
          >
            {" "}
            Saved post
          </Button>
          <Button
            endIcon={<SettingsIcon />}
            variant="outlined"
            onClick={() => navigate("/settings")}
          >
            {" "}
            Settings
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-8 ">
        <div className="flex-1 ml-10 max-w-3xl mx-auto space-y-10">
          {/* Introduction */}
          <section className="bg-white rounded-xl  p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4   inline-block pb-1">
              Introduction
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {user?.introduction || "No introduction provided yet."}
            </p>
          </section>

          {/* Skills */}
          {user?.skills && (
            <section className="bg-white rounded-xl  p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4   inline-block pb-1">
                Skills
              </h2>
              {user?.skills?.length ? (
                <div className="flex flex-wrap gap-3">
                  {user.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-6 py-6 rounded-full font-semibold cursor-default select-none hover:bg-indigo-200 transition text-lg "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="italic text-gray-500">No skills listed yet.</p>
              )}
            </section>
          )}

          {/* Experience */}
          <section className="bg-white rounded-xl  p-8 w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-4   inline-block pb-1">
              Experience
            </h2>
            {user?.experience?.length ? (
              <div className="space-y-6">
                {user.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="border border-indigo-100 border-solid rounded-2xl p-6  transition duration-300  bg-slate-300/15"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {exp.roleAtCompany.toLocaleUpperCase()}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-medium">{exp.company} -</span>{" "}
                        {exp.location}
                      </p>

                      <p className="text-sm mb-1 text-gray-600">
                        <span className="text-black font-medium">From:</span>{" "}
                        {exp.startDate} &nbsp;–&nbsp;
                        <span className="text-black font-medium">To:</span>{" "}
                        {exp.endDate || "Present"}
                      </p>

                      <p className="text-gray-700 text-[15px] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="italic text-gray-500">
                No experience details available.
              </p>
            )}
          </section>
        </div>

        <div className="h-fit w-3/12 bg-slate-200 rounded-2xl font-serif text-xl gap-4 p-6">
          <h3 className="font-semibold text-2xl mb-4">Job Overview</h3>
          <hr className="mb-4" />

          <div className="flex items-start gap-4 mb-4">
            <MdLaptopMac size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Email</p>
              <p className="text-gray-700 text-sm">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <GoGift size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">D.O.B</p>
              <p className="text-gray-700 text-sm">{user?.DOB}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <FaHouseUser size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Address</p>
              <p className="text-gray-700 text-sm">{user?.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <FaRegFlag size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base"> Country</p>
              <p className="text-gray-700 text-sm">{user?.country}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <GrLocation size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Code</p>
              <p className="text-gray-700 text-sm">{user?.code}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <BsTelephone size={30} className="text-blue-600 mt-1" />
            <div>
              <p className="font-medium text-base">Contact</p>
              <p className="text-gray-700 text-sm">{user?.contact}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Title
          text1="Vacancies That You Are Interested "
          text2="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {recomendedCategories?.slice(0, 8).map((categoryJob: any) => (
            <JobCard job={categoryJob} key={categoryJob._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
