import login from "../../assets/login1.jpg";
import { Stack, TextField } from "@mui/material";
import GroupButton from "../../components/GroupButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { RegisterProps } from "../../types/register/registerType";

const Register = ({
  role,
  setRole,
  handleFormSubmit,
  register,
  errors,
}: RegisterProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${login})`,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative text-4xl font-bold bg-gray-50 opacity-90 m-10 p-10 rounded-3xl w-full sm:w-1/2 text-black shadow"
        initial={{ opacity: 0, scale: 0.95, y: -250 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={10}
          sx={{ mb: 4 }}
        >
          <h2 className="text-black font-serif underline">
            Create Your Account
          </h2>
        </Stack>
        <Stack
          direction="column"
          spacing={5}
          className="m-auto"
          justifyContent="center"
          alignItems="center"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <GroupButton
              button1="Candidate"
              button2="Employer"
              handleOnClickBtn1={() => setRole("candidate")}
              handleOnClickBtn2={() => setRole("employer")}
              variant="contained"
              color="secondary"
              role={role}
            />

            <p className="text-sm text-center text-gray-400">
              Are you a{" "}
              <span className="font-bold text-gray-700">{role?role:"candidate or employer"}?</span> 
              
            </p>
          </div>

          <form
            className="flex flex-col gap-4 w-2/3 m-auto"
            onSubmit={handleFormSubmit}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              size="small"
              {...register("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              size="small"
              type="password"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            <p className="text-xs text-center text-gray-500 flex items-center justify-center">
              Already have an account?
              <Link to="/login">
                <span className="font-extrabold text-gray-700 hover:text-blue-600 hover:underline ml-2">
                  Login
                </span>
              </Link>
            </p>

            <Button variant="contained" color="secondary" type="submit">
              Sign up
            </Button>
          </form>
        </Stack>
      </motion.div>
    </div>
  );
};

export default Register;
