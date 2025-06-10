import login from "../../assets/login1.jpg"
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LoginProps } from "../../types/login/LoginTypes";
const Login = ({ handleFormSubmit, register, errors }: LoginProps) => {


  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${login})`,
          // or '100vh', '100%', etc.
        }}
      />

      {/* Content */}
      <motion.div
        className="relative text-4xl font-bold bg-gray-50 opacity-90 m-10 p-10 rounded-3xl w-full sm:w-1/2 text-blac shadow"
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
          <h2 className="text-black font-serif underline">Welcome back</h2>
        </Stack>
        <Stack
          direction="column"
          spacing={5}
          className="m-auto"
          justifyContent="center"
          alignItems="center"
        >
          
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 w-2/3 m-auto"
          >
            <TextField
              id="email-input"
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
             
            />
            <TextField
              id="password-input"
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
              
            />
            <p className="text-xs text-center text-gray-500 flex flex-row justify-between">
              {" "}
              <span className="font-bold text-gray-700 hover:text-blue-600 hover:underline">
                forgot password?
              </span>{" "}
              <Link to="/register">
                <span className="font-bold text-gray-700 hover:text-blue-600 hover:underline ">
                  Create an account
                </span>
              </Link>
            </p>
            <Button variant="contained" color="secondary" type="submit">
              Sign in
            </Button>
          </form>
        </Stack>
      </motion.div>
    </div>
  );
};

export default Login;
