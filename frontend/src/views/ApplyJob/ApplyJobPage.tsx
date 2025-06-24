import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import type React from "react";
import { useState } from "react";
import { useApplyJobMutation } from "../../store/jobs/jobService";
import type { ApplyJobType } from "../../types/jobs/jobTypes";
import { useGetUserByIdQuery, useUpdateUserMutation } from "../../store/register/registerService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchJobByIdQuery } from "../../store/jobs/jobService";
import type { JobType } from "../../types/jobs/jobTypes";
const ApplyJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const StoredUser = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = StoredUser?._id;
  const [formdata, setFormData] = useState<Partial<ApplyJobType>>({
    email: "",
    address: "",
    contact: "",
  });
  const [coverLetterFile, setCoverLetterFile] = useState<File | undefined>(
    undefined
  );
  const { data: user } = useGetUserByIdQuery(userId);
  const [applyJob] = useApplyJobMutation();
  const{data:job}=useFetchJobByIdQuery(id!)
  const[updateUser]=useUpdateUserMutation()

  const handleFormSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataInput = new FormData();
    formDataInput.append("email", formdata?.email || "");
    formDataInput.append("address", formdata?.address || "");
    formDataInput.append("contact", formdata?.contact || "");
    formDataInput.append("jobId", job?._id || "");
    formDataInput.append("userId", user?._id || "");
    formDataInput.append("employerId", job?.employerId || "");

    if (coverLetterFile) {
      formDataInput.append("coverLetter", coverLetterFile);
    }
    for (let [key, value] of formDataInput.entries()) {
      console.log(`${key}: ${value}`);
    }
    if (!id) {
      toast.error("Invalid job ID");
      return;
    }

    try {
      const result = await applyJob(formDataInput as any).unwrap();
      if (!result || result.error || result.status === "fail") {
        toast.error("Failed to apply for the job");
        return;
      }
      console.log("result formdata",result)
      
      if (!job) {
        toast.error("Job not found");
        return;
      }

      const appliedPosts: JobType[] = user?.appliedPosts || [];
      const UpdatedAppliedPost: JobType[] = [...appliedPosts, job];

       const updatedUser=await updateUser({
        id: userId,
        updateData: {
          appliedPosts: UpdatedAppliedPost,
        },
       }).unwrap();
       localStorage.setItem("user", JSON.stringify(updatedUser));
      toast.success("succesfully applied")
     
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application.Please try again");
    }
  };
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Apply for Job
        </Typography>

        <Box
          component="form"
          onSubmit={handleFormSubmit}
          noValidate
          autoComplete="on"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            value={formdata.email}
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <TextField
            value={formdata.address}
            label="Address"
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, address: e.target.value }))
            }
          />
          <TextField
            value={formdata.contact}
            label="Contact Number"
            type="tel"
            fullWidth
            variant="outlined"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, contact: e.target.value }))
            }
          />
          <Button variant="outlined" component="label">
            {coverLetterFile ? "✔ File Attached" : " Upload Cover Letter"}
            <input
              className="hidden"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setCoverLetterFile(file);
              }}
            />
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit Application
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ApplyJobPage;
