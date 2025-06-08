"use client"; // Required for client components

import { useState } from "react";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup details:", {
      fullName,
      employeeId,
      email,
      password,
      otp,
    });

    // You can replace this with an API call later
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Employee Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 w-full bg-white border border-gray-300 rounded px-3 py-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              suppressHydrationWarning={true}  // Added to handle hydration mismatch
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              placeholder="Enter employee number"
              className="mt-1 w-full bg-white border border-gray-300 rounded px-3 py-2"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
              suppressHydrationWarning={true}  // Added to handle hydration mismatch
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full bg-white border border-gray-300 rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              suppressHydrationWarning={true}  // Added to handle hydration mismatch
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Set a password"
              className="mt-1 w-full bg-white border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              suppressHydrationWarning={true}  // Added to handle hydration mismatch
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="mt-1 w-full bg-white border border-gray-300 rounded px-3 py-2"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              suppressHydrationWarning={true}  // Added to handle hydration mismatch
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
            suppressHydrationWarning={true}  // Added to handle hydration mismatch
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}