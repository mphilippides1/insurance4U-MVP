"use client";
import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9F9F9]">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" appearance={clerkAppearance}/>
    </div>
  );
}
