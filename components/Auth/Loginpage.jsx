"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

function Loginpage() {


  // Google login integration
  const signup = useGoogleLogin({
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
    email: "",
    password: "",
  });

  // State to manage button disabled status
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Function to handle login
  const onloginup = async () => {
    try {
      setLoading(true); // Set loading to true while processing
      const response = await axios.post(
        "http://localhost:3000/api/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      console.log("Login successful", response.data);
      toast.success("Login successful");

      // Clear form data
      setFormData({
        email: "",
        password: "",
      });

      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  };

  // UseEffect to enable/disable login button based on form data
  useEffect(() => {
    if (formData.email.length > 0 && formData.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  return (
    <section className="bg-white flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center h-[100vh] ">
        <div className="flex flex-col justify-center w-11/12 md:w-full max-w-md">
          <h1 className="font-semibold text-3xl">
            {loading ? "Processing" : "Welcome back!"}
          </h1>
          <h2 className="my-2">
            Enter your Credentials to access your account
          </h2>

          {/* Form Inputs */}
          <div className="mt-8 flex flex-col">
            <label className="font-medium my-1 text-md">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="border border-gray-200 rounded-lg py-1 text-[10px] px-3 outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <div className="flex items-center mt-4">
              <label className="font-medium text-md">Password</label>
              <Link className="text-xs text-blue-600 ml-auto" href="#">
                forgot password
              </Link>
            </div>
            <input
              id="password"
              type="password"
              name="password"
              className="border border-gray-200 rounded-lg py-1 text-[10px] px-3 outline-none"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2 mt-6">
            <input type="checkbox" />
            <span className="text-xs font-medium">Remember for 30 days</span>
          </div>

          {/* Login Button */}
          <button
            onClick={onloginup}
            className="bg-[#6f9553] hover:bg-[#c4deb2] hover:text-black w-full my-5 text-white py-1 font-bold rounded-md"
            disabled={buttonDisabled || loading}
          >
            {loading ? "Logging in..." : "Login"}
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
              <button onClick={() => signup()} className="text-black text-xs font-medium ">
                Sign in with Google
              </button>
            </div>
            <div className="mt-5 h-8 px-5 py-1 rounded-xl border border-zinc-300 flex items-center gap-2.5">
              <AiFillApple />
              <Link href="#" className="text-black text-xs font-medium ">
                Sign in with Apple{" "}
              </Link>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="my-3">
            <div className="mt-4 text-xs font-semibold text-center text-black-400">
              Don't have an account?
              <Link href="/Signup" className="text-blue-500">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section for Desktop View */}
      <div className="md:w-1/2 h-full hidden md:block">
        <div className="bg-gray-400 h-[100vh] w-full object-cover rounded-l-3xl"></div>
      </div>
    </section>
  );
}

export default Loginpage;
