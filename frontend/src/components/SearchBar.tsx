import { ImCancelCircle } from "react-icons/im";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../store/search/SearchSlice";
import { IconButton } from "@mui/material";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);
 

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="relative w-full bg-white rounded-2xl mt-8 flex items-center p-2 mb-6 shadow-sm">
      <SearchIcon className="absolute left-4 text-gray-500 top-1/2 -translate-y-1/2" />

      <input
        autoFocus
        type="text"
        onKeyDown={handleSearch}
        value={query}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="flex-1 h-10 pl-12 pr-10 rounded-2xl border-none outline-none text-base text-black bg-transparent"
        placeholder="Job title, location, company or keywords..."
      />
      <IconButton onClick={() => dispatch(setSearchQuery(""))}>
        <ImCancelCircle />
      </IconButton>
    </div>
  );
};

export default SearchBar;
