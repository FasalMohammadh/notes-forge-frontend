import {
  AppBar,
  Box,
  Button,
  FormHelperText,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";

import signUpSchema, {
  SignUpSchema,
} from "@/pages/sign-up/utils/sign-up-form-schema";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const navigate = useNavigate();

  function onSubmit(data: SignUpSchema) {
    reset();
    navigate("/dashboard/overview");
  }

  return (
    <div className="bg-slate-200">
      <AppBar>
        <Stack className="flex-row justify-between">
          <Toolbar className="bg-transparent">
            <Typography variant="h6" noWrap component="div">
              Notes Forge
            </Typography>
          </Toolbar>
          <Toolbar>
            <Box className="grid grid-flow-col gap-3 grid-cols-[repeat(auto-fill,minmax(1fr,200px))]">
              <Button
                component={Link}
                variant="contained"
                color="secondary"
                disableElevation
                to="/sign-in"
              >
                Sign in
              </Button>
              <Button
                component={Link}
                variant="contained"
                color="secondary"
                disableElevation
                to="/sign-up"
              >
                Sign up
              </Button>
            </Box>
          </Toolbar>
        </Stack>
      </AppBar>

      <main className="flex align-center justify-center min-h-screen shadow">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 m-auto py-10 px-16 border border-solid border-neutral-200 max-w-lg bg-white/75 rounded-xl backdrop:blur-lg backdrop:saturate-150 w-full"
        >
          <h1 className="text-3xl font-semibold">Register</h1>
          <section className="space-y-3">
            <div>
              <TextField
                fullWidth
                type="text"
                label="Name"
                error={!!errors.name}
                size="small"
                {...register("name")}
              />
              <FormHelperText error={!!errors.name}>
                {errors.name?.message ?? " "}
              </FormHelperText>
            </div>
            <div>
              <TextField
                fullWidth
                type="text"
                label="Email"
                error={!!errors.email}
                size="small"
                {...register("email")}
              />
              <FormHelperText error={!!errors.email}>
                {errors.email?.message ?? " "}
              </FormHelperText>
            </div>
            <div>
              <TextField
                fullWidth
                type="text"
                label="Mobile Number"
                error={!!errors.mobileNumber}
                size="small"
                {...register("mobileNumber")}
              />
              <FormHelperText error={!!errors.mobileNumber}>
                {errors.mobileNumber?.message ?? " "}
              </FormHelperText>
            </div>
            <div>
              <TextField
                fullWidth
                type="password"
                label="Password"
                error={!!errors.password}
                size="small"
                {...register("password")}
              />
              <FormHelperText error>
                {errors.password?.message ?? " "}
              </FormHelperText>
            </div>
          </section>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full rounded-full"
          >
            Sign up
          </Button>

          <Typography className="text-center" variant="body2">
            Have an account?&nbsp;
            <Link to="/sign-in">Sign in</Link>
          </Typography>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
