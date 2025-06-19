import EmployerSidebar from "../EmployerSidebar/EmployerSidebar";
import { Outlet } from "react-router-dom";
const EmployerPanelLayout = () => {
  return (
    <div className="flex h-screen">
      <EmployerSidebar />
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployerPanelLayout;
