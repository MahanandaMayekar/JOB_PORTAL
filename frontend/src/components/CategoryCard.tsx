import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import type { CategoryCardType } from "../types/categoryCard/CategoryCardType";

const CategoryCard = ({ icon, title }: CategoryCardType) => {
  return (
    <motion.div
      animate={{ x: [0, 40, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      
    >
      <Stack
        direction="column"
        spacing={2}
        className="w-60 h-60 bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl flex justify-center items-center transition-all duration-300 hover:bg-purple-200/50"
      >
        <div className="rounded-full flex justify-center items-center bg-blue-300/60 hover:bg-purple-400/60 w-24 h-24 shadow-inner">
          {icon}
        </div>
        <div className="font-semibold text-center text-xl text-gray-800 ">
          <h3>{title}</h3>
        </div>
      </Stack>
    </motion.div>
  );
};

export default CategoryCard;
