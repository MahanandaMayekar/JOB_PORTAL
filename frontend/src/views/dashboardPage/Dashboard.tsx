import Sidebar from "../../components/Sidebar";
import JobsPage from "../jobs/JobsPage";
import Category from "../categoryPage/Category";

import { useState } from "react";
const Dashboard = () => {
  const [category, setCategory] = useState<boolean>(false);

  return (
    <div className="flex ">
      <Sidebar setCategory={setCategory} category={category} />
      <div className="flex-1 bg-slate-200">
        {/* <SearchBar setSearch={setSearch} search={search} />*/}
        {category ? <Category /> : <JobsPage />}
      </div>
    </div>
  );
};

export default Dashboard;
