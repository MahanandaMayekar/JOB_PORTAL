import { useGetUserByIdQuery, useUpdateUserMutation } from "../../store/register/registerService";
import JobCard from "../../components/JobCard";
import Title from "../../components/Title";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const SavedJobPage = () => {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const {
    data: user,
    isLoading,
    isError,
  } = useGetUserByIdQuery(storedUser?.id);
  const savedJobs = user?.savedPosts;
  const [updateUser] = useUpdateUserMutation();
  const handleDeleteJob = async (id: string) => {
   
    if (!storedUser?.id) return;

    try {
      const filteredJobs = savedJobs?.filter((job) => job.id !== id);

      const updatedUser = await updateUser({
        id: storedUser.id,
        updateData: { savedPosts: filteredJobs },
      }).unwrap();

      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };

  if (isLoading) return <p>Loading saved jobs...</p>;
  if (isError) return <p>Failed to load saved jobs.</p>;
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <Title
        text1="Your Saved Jobs"
        text2=" Here are the jobs you've saved for later. Revisit and apply when you're
        ready!"
      />

      {savedJobs?.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center text-gray-600 dark:text-gray-300 mt-4">
          You have no saved jobs.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
          {savedJobs?.map((job) => (
            <div key={job.id} className="relative">
              <IconButton
                className=" z-10  absolute top-36 left-[74%] text-red-500 hover:text-red-700 !rounded-full  "
                onClick={()=>handleDeleteJob(job.id)}
              >
                <DeleteIcon />
              </IconButton>

              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobPage;
