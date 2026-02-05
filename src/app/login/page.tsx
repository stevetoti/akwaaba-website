import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your Akwaaba AI account.",
};

export default function LoginPage() {
  redirect("https://app.akwaabaai.com/login");
}
