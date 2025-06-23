import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { SiApostrophe } from "react-icons/si";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { RiLogoutCircleLine } from "react-icons/ri";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EmployerSidebar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
    setOpen(false);
  };
  return (
    <aside className="w-64  bg-purple-900 text-white p-6 space-y-6">
      <h2 className="text-2xl font-bold">Employer Panel</h2>
      <hr />

      <div>
        <NavLink
          to="/employer/dashboard"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "text-white"
          }
        >
          <Button
            startIcon={<SiApostrophe size={20} />}
            variant="text"
            className="!justify-start !text-white !hover:bg-blue-500 !w-full"
          >
            Dashboard
          </Button>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/employer/post-job"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "text-white"
          }
        >
          <Button
            startIcon={<TfiLayoutGrid4Alt size={20} />}
            variant="text"
            className="!justify-start !text-white !hover:bg-blue-800 !w-full"
          >
            Post a Job
          </Button>
        </NavLink>
      </div>
      <hr />
      <div className="">
        
          <Button
            startIcon={<RiLogoutCircleLine size={20} />}
            variant="text"
            className="!justify-start !text-white !hover:bg-blue-800 !w-full"
            onClick={() => setOpen(true)}
          >
            Logout
          </Button>
          <div>
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
      
      </div>
    </aside>
  );
};

export default EmployerSidebar;
