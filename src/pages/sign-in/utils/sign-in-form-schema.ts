import z from "zod";

const signInFormSchema = z.object({
  email: z.string().trim().email().min(1, { message: "Email is required." }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Password is required." })
    .max(32, { message: "Password is too long." }),
});

type SignInFormSchema = z.infer<typeof signInFormSchema>;

export default signInFormSchema;
export type { SignInFormSchema };
