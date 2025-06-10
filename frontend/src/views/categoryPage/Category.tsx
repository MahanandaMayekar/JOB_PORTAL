import { useState } from "react";
import { AiFillSound } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { SiAdblock } from "react-icons/si";
import JobCard from "../../components/JobCard";
import Title from "../../components/Title";
import { useFetchJobsByCategoryQuery } from "../../store/jobs/jobService";

const categories = [
  {
    icon: <FaMoneyCheckDollar size={32} />,
    title: "Accounting",
    value: "Accounting",
  },
  { icon: <AiFillSound size={32} />, title: "Marketing", value: "Marketing" },
  {
    icon: <MdDesignServices size={32} />,
    title: "Design",
    value: "Design",
  },
  {
    icon: <FaLaptopCode size={32} />,
    title: "Development",
    value: "Development",
  },
  {
    icon: <SiAdblock size={32} />,
    title: "Human Resource",
    value: "Human Resource",
  },
];


const Category = () => {
  const [cate, setCate] = useState<string>("");
  const { data: jobs, isLoading, error } = useFetchJobsByCategoryQuery(cate);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const interestedCategories = user?.interestedCategories;

  const recomendedCategories = jobs?.filter((job) =>
    interestedCategories?.includes(job.category)
  );
  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <Title
        text1="Popular Job Categories"
        text2="Choose a category to get started"
      />
      <div className="w-full mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 bg-slate-400/20 p-2">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-xl border transition duration-300 cursor-pointer text-center ${
              cate === cat.value
                ? "bg-purple-100 border-purple-500 border-[1px] border-solid text-purple-900 shadow-md"
                : "bg-white border-gray-200 border-[1px] border-solid text-gray-700 hover:bg-purple-50 hover:shadow-sm"
            }`}
            onClick={() => setCate(cat.value)}
          >
            <div className="mb-3 text-purple-700">{cat.icon}</div>
            <span className="text-sm font-medium">{cat.title}</span>
          </div>
        ))}
      </div>

      {(interestedCategories?.length ?? 0) > 0 &&
      (recomendedCategories?.length ?? 0) > 0 ? (
        <div className="mt-12 bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6 rounded-2xl border border-purple-200 border-solid shadow-md">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">
            🎯 Recommended for You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recomendedCategories?.slice(0, 4).map((job) => (
              <div className="relative group">
                <div className="absolute -top-3 -left-3 bg-purple-600 text-white text-[10px] font-semibold px-2 py-1 rounded-tr-md rounded-bl-md shadow-md z-10">
                  RECOMMENDED
                </div>
                <JobCard key={job.id} job={job} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-12 text-center text-gray-500 italic">
          No recommendations found. Try exploring more categories!
        </div>
      )}

      <div className="mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {jobs?.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
};

export default Category;
