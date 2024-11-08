"use server";
import { RegisterSchema, SignInSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateField = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validateField.success) {
    return {
      error: validateField.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateField.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return {
      message: "Failed to register user",
    };
  }
  redirect("/login");
};

//sign in credentian action
export const signInCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateField = SignInSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validateField.success) {
    return {
      error: validateField.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validateField.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials." };
        default:
          return { message: "Something when wrong." };
      }
    }
    throw error;
  }
};
