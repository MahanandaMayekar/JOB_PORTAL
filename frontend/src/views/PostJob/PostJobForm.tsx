import { useState } from "react";
import type { CreateJobType } from "../../types/jobs/CreateJobType";
import {
  Button,
  TextField,
  MenuItem,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useCreateJobMutation } from "../../store/jobs/jobService";
import { toast } from "react-toastify";


const initialFormState = {
  title: "",
  description: "",
  company: "",
  location: "",
  salary_from: 0,
  salary_to: 0,
  employment_type: "",
  employerId: "",
  application_deadline: "",
  qualifications: [],
  contact: "",
  job_category: "",
  is_remote_work: 0,
  number_of_opening: 1,
  category: "",
};


const PostJobForm = () => {
  const [CreateJob] = useCreateJobMutation();
  const [formData, setFormData] = useState<CreateJobType>(initialFormState);
  const [qualifications, setQualifications] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const employer = JSON.parse(localStorage.getItem("user") || "null");
    const employerId=employer?._id
    e.preventDefault();
    try {
      const finalData: CreateJobType = {
        ...formData,
        qualifications,
        employerId: employerId || "", // ensure it's a string
      };
      console.log("✅ Submit:", finalData);
      const result = await CreateJob(finalData);
      console.log("✅ result:", result);
      toast.success("successfully created job")
      
    } catch (error) {
      console.log("error", error)
      toast.error("error in creating job")
    }
   
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto mt-10">
      <TextField
        fullWidth
        required
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        required
        label="Description"
        multiline
        rows={4}
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <div className="flex  gap-4">
        <TextField
          fullWidth
          required
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="flex  gap-4">
        <TextField
          fullWidth
          required
          label="Salary From"
          type="number"
          name="salary_from"
          value={formData.salary_from}
          onChange={handleNumberChange}
        />
        <TextField
          fullWidth
          label="Salary To"
          type="number"
          name="salary_to"
          required
          value={formData.salary_to}
          onChange={handleNumberChange}
        />
      </div>

      <TextField
        select
        fullWidth
        required
        label="Employment Type"
        name="employment_type"
        value={formData.employment_type}
        onChange={handleChange}
      >
        <MenuItem value="">Select Employment Type</MenuItem>
        <MenuItem value="Full-time">Full-time</MenuItem>
        <MenuItem value="Part-time">Part-time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
        <MenuItem value="Temporary">Temporary</MenuItem>
        <MenuItem value="Internship">Internship</MenuItem>
      </TextField>

      <TextField
        fullWidth
        required
        type="date"
        label="Deadline"
        name="application_deadline"
        InputLabelProps={{ shrink: true }}
        value={formData.application_deadline}
        onChange={handleChange}
      />

      <Typography variant="h6" gutterBottom>
        Qualifications
      </Typography>
      <Stack spacing={2}>
        {qualifications.map((qualification, i) => (
          <Box key={i} display="flex" gap={2} alignItems="center">
            <TextField
              required
              fullWidth
              label={`Qualification ${i + 1}`}
              value={qualification}
              onChange={(e) => {
                const updated = [...qualifications];
                updated[i] = e.target.value;
                setQualifications(updated);
              }}
            />
            <IconButton
              onClick={() => {
                const updated = qualifications.filter((_, idx) => idx !== i);
                setQualifications(updated);
              }}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() => setQualifications([...qualifications, ""])}
        >
          Add Qualification
        </Button>
      </Stack>

      <TextField
        fullWidth
        required
        label="Contact Info"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        required
        label="Job Category"
        name="job_category"
        value={formData.job_category}
        onChange={handleChange}
      />

      <TextField
        select
        fullWidth
        required
        label="Remote?"
        name="is_remote_work"
        value={formData.is_remote_work}
        onChange={handleChange}
      >
        <MenuItem value="">Select Option</MenuItem>
        <MenuItem value={1}>Yes</MenuItem>
        <MenuItem value={0}>No</MenuItem>
      </TextField>

      <TextField
        fullWidth
        type="number"
        required
        label="Number of Openings"
        name="number_of_opening"
        value={formData.number_of_opening}
        onChange={handleNumberChange}
      />

      <TextField
        select
        fullWidth
        required
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <MenuItem value="">Select Category</MenuItem>
        <MenuItem value="Human Resource">Human Resource</MenuItem>
        <MenuItem value="Accounting">Accounting</MenuItem>
        <MenuItem value="Design">Design</MenuItem>
        <MenuItem value="Development">Development</MenuItem>
        <MenuItem value="Marketing">Marketing</MenuItem>
      </TextField>

      <Button variant="contained" color="primary" type="submit">
        Post Job
      </Button>
    </form>
  );
};

export default PostJobForm;
