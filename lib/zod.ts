import { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(1, "Name must be at least 1 character"),
  email: string().email("Invalid email"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password max 32 characters"),
  confirmPassword: string()
    .min(8, "Password must be at least 8 characters ")
    .max(32, "Password max 32 characters "),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const SignInSchema = object({
  email: string().email("Invalid email"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password max 32 characters"),
});
