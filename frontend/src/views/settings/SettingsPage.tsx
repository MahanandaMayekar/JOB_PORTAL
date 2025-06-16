import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { useUpdateUserMutation } from "../../store/register/registerService";
import { toast } from "react-toastify";
import { useGetUserByIdQuery } from "../../store/register/registerService";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation } from "../../store/register/registerService";

const SettingsPage = () => {
  const [open,setOpen]=useState<boolean>(false)
  const [userDetails, setUserDetails] = useState({
    DOB: "",
    address: "",
    country: "",
    code: "",
    contact: "",
    occupation: "",
    introduction: "",
    email: "",
  });

  const [skills, setSkills] = useState<string[]>([]);

  const [experience, setExperience] = useState([
    {
      company: "",
      roleAtCompany: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const navigate = useNavigate()
  

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const { data } = useGetUserByIdQuery(user?._id)
  const [deleteUser] = useDeleteUserMutation();

  const submitUserDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await updateUser({
        id: user._id, // or `user.id` depending on your backend
        updateData: userDetails,
      }).unwrap();

      console.log("User updated:", result);
      toast.success("Successfully updated your details");
      localStorage.setItem("user", JSON.stringify(result));
      setUserDetails({
        DOB: "",
        address: "",
        country: "",
        code: "",
        contact: "",
        occupation: "",
        introduction: "",
        email: "",
      });
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };
  const handleUpdateSkills = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("skilss");
    if(!skills) return
    try {
      const result = await updateUser({
        id: user._id, // or `user.id` depending on your backend
        updateData: {skills},
      }).unwrap();
      console.log("User updated:", result);
      toast.success("Successfully updated your details");
      localStorage.setItem("user", JSON.stringify(result));
      setSkills([])
      
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("failed to update user")
      
    }
  }

  const handleUpdateExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await updateUser({
        id: user._id,
        updateData: { experience },
      }).unwrap();

      console.log("User updated:", result);
      toast.success("Successfully updated your Experience");
      localStorage.setItem("user", JSON.stringify(result));

      setExperience([
        {
          company: "",
          roleAtCompany: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ]);
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user");
    }
  };
   
  const handleDelete = async() => {
    try {
      const id=user?._id
      if (!id) return
      await deleteUser(id)
      localStorage.clear()
      toast.success("Your Account is Successfully deleted")
      navigate("/register")
      
    } catch (error:any) {
      toast.error(error?.data?.message || "cannt delete account ,try again");
      
    }
  }

  return (
    <>
      <div className="w-full  h-52 flex  flex-row justify-around mt-4 bg-slate-200 rounded-lg ">
        <div className="flex flex-row gap-6 my-auto">
          <Avatar sx={{ width: 80, height: 80 }}>
            {data?.fullName?.charAt(0).toUpperCase() || "U"}
          </Avatar>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold font-serif text-4xl">
              {data?.fullName}
            </h1>
            <h1 className="font-serif text-md text-gray-800">
              {data?.occupation ? data.occupation : data?.role}
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-6 my-auto">
          <Button variant="contained" onClick={() => navigate("/profile")}>
            profile
          </Button>
        </div>
      </div>
      <Stack direction="row" spacing={4} sx={{ mt: 5 }}>
        {/* Left Column - User Details */}
        <Box sx={{ flex: 1, px: 3 }}>
          {/* Motivational Quote */}
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderLeft: "6px solid #1976d2",
              bgcolor: "#f0f4ff",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#0d47a1",
                fontFamily: "Roboto, sans-serif",
                fontStyle: "italic",
              }}
            >
              “The only way to do great work is to love what you do.”
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "right", color: "#333", mt: 1 }}
            >
              – Steve Jobs
            </Typography>
          </Box>

          {/* Form Heading */}
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Update User Details
          </Typography>

          {/* User Details Form */}
          <form onSubmit={submitUserDetails}>
            <Stack
              spacing={2}
              sx={{
                bgcolor: "#ffffff",
                p: 4,
                borderRadius: 3,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
                border: "1px solid #e0e0e0",
              }}
            >
              <TextField
                fullWidth
                required
                label="Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
              <TextField
                fullWidth
                required
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={userDetails.DOB}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, DOB: e.target.value })
                }
              />
              <TextField
                fullWidth
                required
                label="Contact"
                type="number"
                value={userDetails.contact}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, contact: e.target.value })
                }
              />
              <TextField
                fullWidth
                required
                label="Country"
                value={userDetails.country}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, country: e.target.value })
                }
              />
              <TextField
                fullWidth
                required
                label="Country Code"
                type="number"
                value={userDetails.code}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, code: e.target.value })
                }
              />
              <TextField
                fullWidth
                required
                label="Occupation"
                value={userDetails.occupation}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, occupation: e.target.value })
                }
              />
              <TextField
                fullWidth
                required
                label="Address"
                value={userDetails.address}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, address: e.target.value })
                }
              />
              <TextField
                fullWidth
                required
                label="Introduction"
                multiline
                rows={4}
                value={userDetails.introduction}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    introduction: e.target.value,
                  })
                }
              />
              <Button variant="contained" type="submit" size="large">
                Save Changes
              </Button>
            </Stack>
          </form>
        </Box>

        {/* Right Column - Skills and Experience */}
        <Box sx={{ flex: 1 }}>
          {/* Skills */}
          <Typography variant="h5" gutterBottom>
            Update Skills
          </Typography>
          <form onSubmit={handleUpdateSkills}>
            <Stack spacing={2}>
              {skills.map((skill, i) => (
                <TextField
                  required
                  key={i}
                  label={`Skill ${i + 1}`}
                  value={skill}
                  onChange={(e) => {
                    const updated = [...skills];
                    updated[i] = e.target.value;
                    setSkills(updated);
                  }}
                />
              ))}
              <Button onClick={() => setSkills([...skills, ""])}>
                Add Skill
              </Button>
              <Button variant="contained" type="submit">
                Save Skills
              </Button>
            </Stack>
          </form>

          <Divider sx={{ my: 4 }} />

          {/* Experience */}
          <Typography variant="h5" gutterBottom>
            Update Experience
          </Typography>
          <form onSubmit={handleUpdateExperience}>
            <Stack spacing={4}>
              {experience.map((exp, i) => (
                <Box
                  key={i}
                  sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}
                >
                  <Stack spacing={1} direction="row" sx={{ mb: 2 }}>
                    <TextField
                      required
                      className="w-full"
                      label="Company"
                      value={exp.company}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[i].company = e.target.value;
                        setExperience(updated);
                      }}
                      fullWidth
                    />
                    <TextField
                      required
                      className="w-full"
                      label="Role"
                      value={exp.roleAtCompany}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[i].roleAtCompany = e.target.value;
                        setExperience(updated);
                      }}
                      fullWidth
                    />
                  </Stack>
                  <Stack spacing={1} direction="row" sx={{ mb: 2 }}>
                    <TextField
                      required
                      label="Start Date"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={exp.startDate}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[i].startDate = e.target.value;
                        setExperience(updated);
                      }}
                      fullWidth
                    />
                    <TextField
                      required
                      label="End Date"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={exp.endDate}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[i].endDate = e.target.value;
                        setExperience(updated);
                      }}
                      fullWidth
                    />
                  </Stack>
                  <TextField
                    required
                    label="Location"
                    value={exp.location}
                    onChange={(e) => {
                      const updated = [...experience];
                      updated[i].location = e.target.value;
                      setExperience(updated);
                    }}
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    required
                    label="Description"
                    multiline
                    rows={3}
                    value={exp.description}
                    onChange={(e) => {
                      const updated = [...experience];
                      updated[i].description = e.target.value;
                      setExperience(updated);
                    }}
                    fullWidth
                  />
                </Box>
              ))}
              <Button
                onClick={() =>
                  setExperience([
                    ...experience,
                    {
                      company: "",
                      roleAtCompany: "",
                      location: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                    },
                  ])
                }
              >
                Add Experience
              </Button>
              <Button variant="contained" type="submit">
                Save Experience
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Stack>
        <div className="border p-6 m-4">
          <h4>
            <strong>Delete Account:</strong>{" "}
          </h4>
          <h6>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </h6>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            color="warning"
            className="!mt-4"
          >
            Delete
          </Button>

          <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <p id="alert-dialog-slide-description">
                Are you sure you want to permanently delete your account? This
                action is irreversible
              </p>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleDelete} color="error" variant="contained">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Stack>
    </>
  );
};

export default SettingsPage;
