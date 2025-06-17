"use client";
import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";    

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9F9F9]">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" appearance={clerkAppearance}/>
    </div>
  );
}
