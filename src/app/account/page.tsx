"use client";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Page() {
  const { user } = useUser();

  const assets = [
    {
      type: "Motoring Insurance",
      regNumber: "ABC-1234",
      daysLeft: 45,
    },
    {
      type: "Home Insurance",
      regNumber: "HME-5678",
      daysLeft: 120,
    },
    {
      type: "Health Insurance",
      regNumber: "HLT-9012",
      daysLeft: 300,
    },
    {
      type: "Motoring Insurance",
      regNumber: "XYZ-7890",
      daysLeft: 20,
    },
  ];

  const pieData = [
    { name: "Motoring Insurance", value: assets.filter(a => a.type === "Motoring Insurance").length },
    { name: "Home Insurance", value: assets.filter(a => a.type === "Home Insurance").length },
    { name: "Health Insurance", value: assets.filter(a => a.type === "Health Insurance").length },
  ];

  const COLORS = ["#FFE95C", "#FFB347", "#FF6961"];

  return (
    <main className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />

      <SignedOut>
        <div className="flex justify-center items-center min-h-screen flex-col gap-6">
          <h1 className="text-4xl font-bold text-black text-center">
            Please sign in to access your account
          </h1>
          <SignInButton mode="modal">
            <button className="bg-[#FFE95C] text-black font-semibold px-10 py-4 rounded-full shadow-md text-lg hover:opacity-90 transition">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold text-black">
              Welcome back, {user?.firstName}!
            </h1>
            <UserButton />
          </div>

          {/* Chart & Table side by side */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Donut Chart */}
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 flex-1">
              <h2 className="text-2xl font-bold mb-8 text-black text-center">Your Insurance Distribution</h2>
              <div className="h-96">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Assets Table */}
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 flex-1">
              <h2 className="text-2xl font-bold mb-8 text-black text-center">Your Assets</h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-4 text-black">Registration Number</th>
                    <th className="pb-4 text-black">Insurance Type</th>
                    <th className="pb-4 text-black">Days Left</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-[#F9F9F9]">
                      <td className="py-4 text-black">{asset.regNumber}</td>
                      <td className="py-4 text-black">{asset.type}</td>
                      <td className="py-4 text-black">{asset.daysLeft} days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SignedIn>

      <Footer />
    </main>
  );
}
