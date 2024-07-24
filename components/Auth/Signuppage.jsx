"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

function Signuppage() {
  // Google login integration
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("codeResponse", codeResponse);
    },
    onError: (error) => {
      console.log("error", error);
    }
  });

  const router = useRouter();

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // State to manage button disabled status
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Function to handle signup
  const onSignup = async () => {
    try {
      setLoading(true); // Set loading to true while processing
      const response = await axios.post('http://localhost:3000/api/users', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log("Signup successful", response.data);
      router.push("/login"); // Redirect to login page after signup
    } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error.message); // Show error message
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  }

  // UseEffect to enable/disable signup button based on form data
  useEffect(() => {
    if (formData.name.length > 0 && formData.email.length > 0 && formData.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  return (
    <section className="bg-white flex flex-col md:flex-row-reverse">
      {/* Form Section */}
      <div className="md:w-1/2 flex justify-center items-center h-[100vh]">
        <div className="flex flex-col justify-center w-11/12 md:w-full max-w-md">
          <h1 className="font-semibold text-3xl">{loading ? "Processing" : "Get Started Now"}</h1>
          
          {/* Form Inputs */}
          <div className="mt-6 flex flex-col">
            <label className="font-medium my-1 text-md">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="border border-gray-200 rounded-lg py-1 text-[10px] px-3 outline-none"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <div className="flex items-center mt-4">
              <label className="font-medium text-md">Email</label>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              className="border border-gray-200 rounded-lg py-1 text-[10px] px-3 outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <div className="flex items-center mt-4">
              <label className="font-medium text-md">Password</label>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              className="border border-gray-200 rounded-lg py-1 text-[10px] px-3 outline-none"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center gap-2 mt-6">
            <input type="checkbox" required />
            <span className="text-xs font-medium">
              I agree to the{" "}
              <Link className="underline" href="#TermsAndPolicy">
                terms & policy
              </Link>
            </span>
          </div>

          {/* Signup Button */}
          <button
            onClick={onSignup}
            className="bg-[#6f9553] hover:bg-[#c4deb2] hover:text-black w-full my-5 text-white py-1 font-semibold rounded-md"
            disabled={buttonDisabled || loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {/* Divider */}
          <div className="flex items-center">
            <div className="h-[1px] bg-[#F5F5F5] w-1/2"></div>
            <span>or</span>
            <div className="h-[1px] bg-[#F5F5F5] w-1/2"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4">
            <div className="mt-5 h-8 px-5 py-1 rounded-xl border border-zinc-300 flex items-center gap-2.5">
              <FcGoogle />
              <button onClick={() => login()} className="text-black text-xs font-medium">
                Sign in with Google
              </button>
            </div>

            <div className="mt-5 h-8 px-5 py-1 rounded-xl border border-zinc-300 flex items-center gap-2.5">
              <AiFillApple />
              <Link href="#" className="text-black text-xs font-medium">
                Sign in with Apple
              </Link>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="my-3">
            <div className="mt-4 text-xs font-semibold text-center text-black-400">
              Have an account?
              <Link href="/login" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section for Desktop View */}
      <div className="md:w-1/2 h-full hidden md:block">
        <div className="bg-gray-400 h-[100vh] w-full object-cover rounded-r-3xl"></div>
      </div>
    </section>
  );
}

export default Signuppage;
