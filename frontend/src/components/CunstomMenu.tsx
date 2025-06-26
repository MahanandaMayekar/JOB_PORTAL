import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
const CustomMenu = () => {
  
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userRole = user?.role;
  const navigate = useNavigate();
  const [menuItem, setMenuItem] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
    setOpen(false);
  };
  return (
    <FormControl>
      <InputLabel id="custom-menu-label" sx={{ color: "black" }}>
        Menu
      </InputLabel>

      <Select
        labelId="custom-menu-label"
        id="custom-menu"
        value={menuItem}
        label="Menu"
        input={
          <OutlinedInput
            label="Menu"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircleIcon fontSize="large" />
              </InputAdornment>
            }
          />
        }
        sx={{
          borderRadius: "10rem",
        }}
      >
        {" "}
        {token && userRole === "candidate" && (
          <>
            <MenuItem value="profile" onClick={() => navigate("/profile")}>
              Profile
            </MenuItem>
            <MenuItem value="dashboard" onClick={() => navigate("/dashboard")}>
              Dashboard
            </MenuItem>
            <MenuItem value="saved" onClick={() => navigate("/savedJobs")}>
              Saved Posts
            </MenuItem>
            <MenuItem
              value="saved"
              onClick={() => navigate("/users/applied-jobs")}
            >
              Applied Posts
            </MenuItem>
            <MenuItem value="saved" onClick={() => navigate("/settings")}>
              Settings
            </MenuItem>
          </>
        )}
        {token && userRole === "employer" && (
          <>
            <MenuItem
              value="dashboard"
              onClick={() => navigate("/employer/dashboard")}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              value="saved"
              onClick={() => navigate("/employer/list-jobs")}
            >
              Post a Job
            </MenuItem>
            <MenuItem
              value="saved"
              onClick={() => navigate("/users/applied-jobs")}
            >
              Manage Job
            </MenuItem>
            <MenuItem value="saved" onClick={() => navigate("/employer/AllApplicants")}>
              View All Applicants
            </MenuItem>
          </>
        )}
        <hr />
        <div>
          <MenuItem value="logout" onClick={() => setOpen(true)}>
            Logout
          </MenuItem>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to logout?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You will be logged out of your account and redirected to the
                login page.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={handleLogOut} autoFocus color="error">
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Select>
    </FormControl>
  );
};

export default CustomMenu;
