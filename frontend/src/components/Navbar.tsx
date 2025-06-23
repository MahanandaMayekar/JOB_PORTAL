import logo from "../assets/logo1.png";
import GroupButton from "./GroupButton";
import { motion } from "framer-motion";
import CustomMenu from "./CunstomMenu";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userRole = user?.role;

  console.log("Token:", token);
  return (
    <div className="flex items-center justify-between font-medium py-5 px-6 h-24   shadow-lg bg-blue-200/95 sticky top-0 z-50 ">
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-36 h-36 object-contain shadow-sm rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onClick={() => navigate("/")}
      />

      {/* Group Button */}
      <div className="flex items-center gap-5 flex-1 justify-end">
        {!token && (
          <motion.div
            className="flex items-center gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GroupButton
              variant="contained"
              color="secondary"
              button1="Login"
              button2="Register"
              handleOnClickBtn1={() => navigate("/login")}
              handleOnClickBtn2={() => navigate("/register")}
            />
          </motion.div>
        )}

        {token && userRole === "candidate" && (
          <div className="flex flex-1 w-full min-w-[200px] sm:min-w-[300px] max-w-[500px]">
            <SearchBar />
          </div>
        )}

        {token && userRole === "candidate" && (
          <div className="flex justify-end">
            <CustomMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
