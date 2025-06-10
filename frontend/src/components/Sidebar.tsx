import { Button } from "@mui/material";
import { SiApostrophe } from "react-icons/si";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import type { SidebarProps } from "../types/sidebar/sidebarType";
const Sidebar = ({ setCategory, category }: SidebarProps) => {
  return (
    <div className="w-[15%]  bg-purple-900 text-white flex flex-col gap-4 p-4 scroll-none max-h-full ">
      <h1 className="font-serif">{">>  "}Dashboard</h1>
      <hr />

      <div
        className={` p-1 ${!category ? "bg-purple-800" : ""}`}
        onClick={() => setCategory(false)}
      >
        <Button
          startIcon={<SiApostrophe size={20} />}
          variant="text"
          className="!justify-start !text-white !hover:bg-blue-500 !w-full"
        >
          Jobs
        </Button>
      </div>
      <div
        className={` p-1 ${category ? "bg-purple-800" : ""}`}
        onClick={() => setCategory(true)}
      >
        <Button
          startIcon={<TfiLayoutGrid4Alt size={20} />}
          variant="text"
          className="!justify-start !text-white !hover:bg-blue-800 !w-full"
        >
          Category
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
