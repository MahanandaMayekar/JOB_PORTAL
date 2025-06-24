import { BiSelectMultiple } from "react-icons/bi";
import { BsJournalArrowUp } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { IoDocumentsOutline } from "react-icons/io5";
import Title from "../../components/Title";
import { useFetchEmployersPostsQuery } from "../../store/jobs/jobService";
import { useFetchEmployersApplicationsQuery } from "../../store/jobs/jobService";

const EmployerDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const { data } = useFetchEmployersPostsQuery(user?._id);
  const { data: applications } = useFetchEmployersApplicationsQuery(user?._id);
  const NoOfPost = data?.length;
  const NoOfapplications=applications?.length

  const items = [
    {
      icon: <BsJournalArrowUp size={32} />,
      title: "Posted jobs",
      value: NoOfPost || 0,
    },
    {
      icon: <IoDocumentsOutline size={32} />,
      title: "Applications",
      value: NoOfapplications||0, 
    },
    {
      icon: <FaRegMessage size={32} />,
      title: "Messages",
      value: 5,
    },
    {
      icon: <BiSelectMultiple size={32} />,
      title: "Shortlist",
      value: 5,
    },
  ];

  return (
    <div>
      <Title
        text1="Dashboard"
        text2="Welcome to your dashboard. Here you can manage everything."
      />
      <div className="w-full mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
        {items.map((cat, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-around gap-4 p-6 rounded-2xl bg-purple-100 border border-purple-500 border-solid text-purple-900 shadow-md transition duration-300 hover:shadow-lg cursor-pointer"
          >
            <div className="text-purple-700">{cat.icon}</div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-4xl font-extrabold">{cat.value}</span>
              <span className="text-sm font-medium font-serif ">{cat.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerDashboard;
