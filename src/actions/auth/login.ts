"use server";

import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

export async function authenticate(
  // prevState: string | undefined,
  // formData: FormData,
  formData: { email: string; password: string; callbackUrl: string }
) {
  try {
    const { email, password, callbackUrl } = formData;
    await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: callbackUrl,
    });


  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
