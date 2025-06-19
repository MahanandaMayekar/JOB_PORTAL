import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { SiApostrophe } from "react-icons/si";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
const EmployerSidebar = () => {
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
    </aside>
  );
};

export default EmployerSidebar;
