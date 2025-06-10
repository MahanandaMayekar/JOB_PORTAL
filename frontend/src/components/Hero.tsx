import { Stack } from "@mui/material";
import bg from "../assets/background.jpg";
import s1 from "../assets/search.jpg";
import s2 from "../assets/search2.jpg";
import s3 from "../assets/search3.jpg";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <Stack
      direction="row"
      spacing={5}
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
        width: "100%",
        px: 4,
        alignItems: "center",
        color: "white",
        marginTop: "30px",
      }}
    >
      {/* Left Text */}
      <Stack sx={{ width: "60%" }} spacing={6}>
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-extrabold font-serif drop-shadow-2xl">
            Find Your Perfect <br /> Job Match
          </h1>
          <h5>Find Jobs, Employment & Career Opportunities</h5>
        </motion.div>
       
      </Stack>

      {/* Right Stacked Images */}
      <Stack
        className="relative"
        sx={{ width: "50%", height: "100%", justifyContent: "center" }}
      >
        <motion.div
          className="absolute top-24 left-10"
          initial={{ opacity: 0, scale: 0.5, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img src={s3} alt="search 1" className="rounded shadow-2xl" />
        </motion.div>

        <motion.div
          className="absolute top-28 -left-24"
          initial={{ opacity: 0, scale: 0.5, x: -150 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src={s2}
            alt="search 2"
            className="w-52 h-30 rounded-full shadow-inner"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-8 -left-4"
          initial={{ opacity: 0, scale: 0.5, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.8 }}
        >
          <img
            src={s1}
            alt="search 3"
            className="w-52 rounded-3xl shadow-2xl"
          />
        </motion.div>
      </Stack>
    </Stack>
  );
};

export default Hero;
