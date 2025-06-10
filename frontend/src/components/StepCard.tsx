import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import type { StepCardType } from "../types/stepCard/stepCardType";

const StepCard = ({ title, description, icon }: StepCardType) => {
  return (
    <motion.div
      whileHover={{
        scale: 1,
        y: -10,
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 100 }}
      className="rounded-xl"
    >
      <Stack
        direction="column"
        spacing={2}
        className="w-80 h-80 flex justify-center items-center p-5 bg-white rounded-xl"
      >
        <div className="rounded-full flex justify-center items-center bg-purple-200 w-24 h-24">
          {icon}
        </div>
        <div className="font-bold text-center text-2xl">
          <h3>{title}</h3>
        </div>
        <div className="text-gray-500 text-sm text-center">
          <h6>{description}</h6>
        </div>
      </Stack>
    </motion.div>
  );
};

export default StepCard;
