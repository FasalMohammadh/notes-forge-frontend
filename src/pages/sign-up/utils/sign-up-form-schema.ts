import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Email is invalid." }),
  password: z
    .string()
    .min(1, { message: "Password is required." })
    .max(32, { message: "Password is too long." }),
  mobileNumber: z.string().min(1, { message: "Mobile Number is required." }),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

export default signUpSchema;
export type { SignUpSchema };
