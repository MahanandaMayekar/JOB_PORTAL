import type { JobType } from "../types/jobs/jobTypes";
import { toast } from "react-toastify";

export const saveJob = async (
    job: JobType,
    updateUser: any 
) => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (!storedUser) return;

    const savedPosts: JobType[] = storedUser.savedPosts || [];

    const isAlreadySaved = savedPosts.some((post) => post._id === job._id);
    if (isAlreadySaved) {
        toast.info("Job is already saved");
        return;
    }

    const updatedPosts = [...savedPosts, job];

    try {
        const updatedUser = await updateUser({
            id: storedUser?._id,
            updateData: {
                savedPosts: updatedPosts,
            },
        }).unwrap();

        localStorage.setItem("user", JSON.stringify(updatedUser));
        toast.success("Job saved successfully");
    } catch (err) {
        console.error("Error saving job:", err);
        toast.error("Something went wrong while saving the job");
    }
};
