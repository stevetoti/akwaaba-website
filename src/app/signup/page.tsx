import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your free Akwaaba AI account.",
};

export default function SignupPage() {
  redirect("https://app.akwaabaai.com/signup");
}
