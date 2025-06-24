import { Routes, Route } from "react-router-dom";
import Layout from "../views/layout/Layout";
import About from "../views/aboutPage/About";
import Contact from "../views/ContactPage/Contact";
import LoginContainer from "../views/LoginPage/LoginContainer";
import RegisterContainer from "../views/Registerpage/RegisterContainer";
import HomeContainer from "../views/HomePage/HomeContainer";
import DashboardContainer from "../views/dashboardPage/DashboardContainer";
import JobDetailsPage from "../views/jobDetails/JobDetailsPage";
import SavedJobPage from "../views/savedJob/SavedJobPage";
import FirstLogin from "../views/FirstLoginPage/FirstLogin";
import ApplyJobPage from "../views/ApplyJob/ApplyJobPage";
import ProfilePage from "../views/Profile/Profilepage";
import SettingsPage from "../views/settings/SettingsPage";
import UsersAppliedJobs from "../views/usersAppliedJobs/UsersAppliedJobs";
import EmployerPanel from "../views/employerPanel/EmployerPanelLayout";
import PostJob from "../views/PostJob/PostJob";
import EmployerDashboard from "../views/EmployerDashboard/EmployerDashboard";
import ManageJobsPage from "../views/manageJobs/ManageJobsPage";
import EmployersApplication from "../views/EmployersApplications/EmployersApplication";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeContainer />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginContainer />} />
          <Route path="register" element={<RegisterContainer />} />
          <Route path="dashboard" element={<DashboardContainer />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
          <Route path="/savedJobs" element={<SavedJobPage />} />
          <Route path="/firstLogin" element={<FirstLogin />} />
          <Route path="/job/:id/applyJob" element={<ApplyJobPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/users/applied-jobs" element={<UsersAppliedJobs />} />

          <Route path="/employer" element={<EmployerPanel />}>
            <Route index element={<EmployerDashboard />} />
            <Route path="dashboard" element={<EmployerDashboard />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="list-jobs" element={<ManageJobsPage />} />
            <Route path="AllApplicants" element={<EmployersApplication />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
