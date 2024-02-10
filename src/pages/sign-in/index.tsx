import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import signInFormSchema, {
  type SignInFormSchema,
} from "@/pages/sign-in/utils/sign-in-form-schema";

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    ...form
  } = useForm<SignInFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  function onSubmit(data: SignInFormSchema) {
    console.log("Login successful", data);

    form.reset();
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto p-5 rounded-lg shadow bg-white max-w-lg"
      >
        <Typography
          variant="h4"
          component="h1"
          className="text-center mb-2 font-semibold"
        >
          Sign In
        </Typography>
        <TextField
          fullWidth
          label="Email"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          {...register("email")}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          {...register("password")}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          margin="normal"
          sx={{ mt: 2 }}
        />
        {/* <FormControlLabel
          control={<Checkbox {...register("rememberMe")} color="primary" />}
          label="Remember Me"
          sx={{ mt: 1, textAlign: "left" }}
        /> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          {/* <Link href="#" variant="body2">
            Forgot Password?
          </Link> */}
          <Box mt={1}>
            <Link href="#" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignInPage;
